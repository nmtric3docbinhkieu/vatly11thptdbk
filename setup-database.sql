-- Script tạo bảng dữ liệu cho hệ thống trắc nghiệm VatLy11
-- Chạy trong SQL Editor của Supabase Dashboard

-- 1. Bảng students (thông tin học sinh)
CREATE TABLE IF NOT EXISTS students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  class_name VARCHAR(100),
  student_id VARCHAR(50) UNIQUE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index cho bảng students
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_students_student_id ON students(student_id);
CREATE INDEX IF NOT EXISTS idx_students_class_name ON students(class_name);

-- 2. Bảng quiz_results (kết quả trắc nghiệm chung)
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  chapter INTEGER NOT NULL CHECK (chapter >= 1 AND chapter <= 4),
  quiz_type VARCHAR(50) NOT NULL, -- 'lythuyet', 'congthuc', 'vandung'
  total_questions INTEGER NOT NULL DEFAULT 10,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  score DECIMAL(5,2) NOT NULL DEFAULT 0,
  time_taken INTEGER NOT NULL, -- thời gian làm bài tính bằng giây
  answers JSONB, -- lưu chi tiết câu trả lời {question_id: selected_answer, is_correct: true/false}
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index cho bảng quiz_results
CREATE INDEX IF NOT EXISTS idx_quiz_results_student_id ON quiz_results(student_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_chapter ON quiz_results(chapter);
CREATE INDEX IF NOT EXISTS idx_quiz_results_quiz_type ON quiz_results(quiz_type);
CREATE INDEX IF NOT EXISTS idx_quiz_results_score ON quiz_results(score DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_results_completed_at ON quiz_results(completed_at DESC);

-- 3. Bảng chapter4_formula_scores (kết quả trắc nghiệm công thức chương 4)
CREATE TABLE IF NOT EXISTS chapter4_formula_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  formula_category VARCHAR(100) NOT NULL, -- 'dong_dien_khong_doi', 'cam_ung_dien_tu', etc.
  total_questions INTEGER NOT NULL DEFAULT 10,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  score DECIMAL(5,2) NOT NULL DEFAULT 0,
  time_taken INTEGER NOT NULL,
  difficulty_level VARCHAR(20) DEFAULT 'medium', -- 'easy', 'medium', 'hard'
  answers JSONB, -- chi tiết câu trả lời
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index cho bảng chapter4_formula_scores
CREATE INDEX IF NOT EXISTS idx_chapter4_formula_student_id ON chapter4_formula_scores(student_id);
CREATE INDEX IF NOT EXISTS idx_chapter4_formula_category ON chapter4_formula_scores(formula_category);
CREATE INDEX IF NOT EXISTS idx_chapter4_formula_score ON chapter4_formula_scores(score DESC);
CREATE INDEX IF NOT EXISTS idx_chapter4_formula_difficulty ON chapter4_formula_scores(difficulty_level);

-- 4. Bảng leaderboard (bảng xếp hạng)
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  chapter INTEGER NOT NULL,
  quiz_type VARCHAR(50) NOT NULL,
  best_score DECIMAL(5,2) NOT NULL DEFAULT 0,
  total_attempts INTEGER NOT NULL DEFAULT 0,
  average_score DECIMAL(5,2) NOT NULL DEFAULT 0,
  best_time INTEGER, -- thời gian tốt nhất
  last_attempt_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(student_id, chapter, quiz_type)
);

-- Index cho bảng leaderboard
CREATE INDEX IF NOT EXISTS idx_leaderboard_chapter_quiz_type ON leaderboard(chapter, quiz_type);
CREATE INDEX IF NOT EXISTS idx_leaderboard_best_score ON leaderboard(best_score DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_student_id ON leaderboard(student_id);

-- 5. Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter4_formula_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- 6. Policies cho bảng students
CREATE POLICY IF NOT EXISTS "Anyone can view approved students" ON students
  FOR SELECT USING (is_approved = true);

CREATE POLICY IF NOT EXISTS "Anyone can insert students" ON students
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Admins can update students" ON students
  FOR UPDATE USING (true);

-- 7. Policies cho bảng quiz_results
CREATE POLICY IF NOT EXISTS "Students can view own results" ON quiz_results
  FOR SELECT USING (auth.uid()::text = student_id::text);

CREATE POLICY IF NOT EXISTS "Anyone can insert results" ON quiz_results
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Admins can view all results" ON quiz_results
  FOR SELECT USING (true);

-- 8. Policies cho bảng chapter4_formula_scores
CREATE POLICY IF NOT EXISTS "Students can view own formula results" ON chapter4_formula_scores
  FOR SELECT USING (auth.uid()::text = student_id::text);

CREATE POLICY IF NOT EXISTS "Anyone can insert formula results" ON chapter4_formula_scores
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Admins can view all formula results" ON chapter4_formula_scores
  FOR SELECT USING (true);

-- 9. Policies cho bảng leaderboard
CREATE POLICY IF NOT EXISTS "Anyone can view leaderboard" ON leaderboard
  FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Anyone can insert leaderboard" ON leaderboard
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Admins can update leaderboard" ON leaderboard
  FOR UPDATE USING (true);

-- 10. Function để cập nhật leaderboard tự động
CREATE OR REPLACE FUNCTION update_leaderboard()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO leaderboard (student_id, chapter, quiz_type, best_score, total_attempts, average_score, best_time, last_attempt_at)
  VALUES (
    NEW.student_id,
    NEW.chapter,
    NEW.quiz_type,
    NEW.score,
    1,
    NEW.score,
    NEW.time_taken,
    NEW.completed_at
  )
  ON CONFLICT (student_id, chapter, quiz_type)
  DO UPDATE SET
    best_score = GREATEST(leaderboard.best_score, NEW.score),
    total_attempts = leaderboard.total_attempts + 1,
    average_score = (leaderboard.average_score * leaderboard.total_attempts + NEW.score) / (leaderboard.total_attempts + 1),
    best_time = CASE 
      WHEN NEW.score > leaderboard.best_score THEN NEW.time_taken
      WHEN NEW.score = leaderboard.best_score THEN LEAST(leaderboard.best_time, NEW.time_taken)
      ELSE leaderboard.best_time
    END,
    last_attempt_at = NEW.completed_at,
    updated_at = NOW();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 11. Trigger để tự động cập nhật leaderboard
CREATE TRIGGER IF NOT EXISTS trigger_update_leaderboard
  AFTER INSERT ON quiz_results
  FOR EACH ROW
  EXECUTE FUNCTION update_leaderboard();

-- 12. Trigger cho chapter4_formula_scores
CREATE OR REPLACE FUNCTION update_formula_leaderboard()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO leaderboard (student_id, chapter, quiz_type, best_score, total_attempts, average_score, best_time, last_attempt_at)
  VALUES (
    NEW.student_id,
    4,
    'congthuc',
    NEW.score,
    1,
    NEW.score,
    NEW.time_taken,
    NEW.completed_at
  )
  ON CONFLICT (student_id, chapter, quiz_type)
  DO UPDATE SET
    best_score = GREATEST(leaderboard.best_score, NEW.score),
    total_attempts = leaderboard.total_attempts + 1,
    average_score = (leaderboard.average_score * leaderboard.total_attempts + NEW.score) / (leaderboard.total_attempts + 1),
    best_time = CASE 
      WHEN NEW.score > leaderboard.best_score THEN NEW.time_taken
      WHEN NEW.score = leaderboard.best_score THEN LEAST(leaderboard.best_time, NEW.time_taken)
      ELSE leaderboard.best_time
    END,
    last_attempt_at = NEW.completed_at,
    updated_at = NOW();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER IF NOT EXISTS trigger_update_formula_leaderboard
  AFTER INSERT ON chapter4_formula_scores
  FOR EACH ROW
  EXECUTE FUNCTION update_formula_leaderboard();

-- Hoàn tất!
SELECT 'Database setup completed successfully!' as status;
