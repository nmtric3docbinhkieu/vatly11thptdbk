-- ==========================================
-- TAO BANG LUU KET QUA TRAC NGHIEM CHUONG 4 (AN TOAN, KHONG XOA DU LIEU CU)
-- Copy toan bo vao Supabase SQL Editor > Run
-- ==========================================

-- 1) Dam bao bang students ton tai (chi tao neu chua co)
CREATE TABLE IF NOT EXISTS students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  class_name VARCHAR(100),
  password_hash TEXT,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2) Tao bang chapter4_quiz_results
CREATE TABLE IF NOT EXISTS chapter4_quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  student_name VARCHAR(255),
  class_name VARCHAR(100),
  formula_category VARCHAR(100) NOT NULL,
  score INTEGER NOT NULL DEFAULT 0 CHECK (score >= 0),
  correct_answers INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 10,
  time_taken INTEGER NOT NULL DEFAULT 0,
  cheat_warnings INTEGER NOT NULL DEFAULT 0,
  quiz_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3) Index cho truy van nhanh
CREATE INDEX IF NOT EXISTS idx_students_class_name ON students(class_name);
CREATE INDEX IF NOT EXISTS idx_chapter4_quiz_student_id ON chapter4_quiz_results(student_id);
CREATE INDEX IF NOT EXISTS idx_chapter4_quiz_student_name ON chapter4_quiz_results(student_name);
CREATE INDEX IF NOT EXISTS idx_chapter4_quiz_class_name ON chapter4_quiz_results(class_name);
CREATE INDEX IF NOT EXISTS idx_chapter4_quiz_formula_category ON chapter4_quiz_results(formula_category);
CREATE INDEX IF NOT EXISTS idx_chapter4_quiz_score ON chapter4_quiz_results(score DESC);
CREATE INDEX IF NOT EXISTS idx_chapter4_quiz_date ON chapter4_quiz_results(quiz_date DESC);

-- 4) Bat RLS
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter4_quiz_results ENABLE ROW LEVEL SECURITY;

-- 5) Policies cho students
DROP POLICY IF EXISTS "Anyone can view approved students" ON students;
DROP POLICY IF EXISTS "Anyone can insert students" ON students;
DROP POLICY IF EXISTS "Admins can update students" ON students;

CREATE POLICY "Anyone can view approved students" ON students
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Anyone can insert students" ON students
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can update students" ON students
  FOR UPDATE USING (true);

-- 6) Policies cho chapter4_quiz_results
DROP POLICY IF EXISTS "Anyone can insert quiz results" ON chapter4_quiz_results;
DROP POLICY IF EXISTS "Students can view own results" ON chapter4_quiz_results;
DROP POLICY IF EXISTS "Admins can view all results" ON chapter4_quiz_results;
DROP POLICY IF EXISTS "Anyone can view leaderboard" ON chapter4_quiz_results;

CREATE POLICY "Anyone can insert quiz results" ON chapter4_quiz_results
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Students can view own results" ON chapter4_quiz_results
  FOR SELECT USING (auth.uid()::text = student_id::text);

CREATE POLICY "Admins can view all results" ON chapter4_quiz_results
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view leaderboard" ON chapter4_quiz_results
  FOR SELECT USING (true);

-- 7) Trigger cap nhat updated_at
CREATE OR REPLACE FUNCTION update_chapter4_quiz_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_chapter4_quiz_timestamp ON chapter4_quiz_results;
CREATE TRIGGER trigger_update_chapter4_quiz_timestamp
  BEFORE UPDATE ON chapter4_quiz_results
  FOR EACH ROW
  EXECUTE FUNCTION update_chapter4_quiz_timestamp();

SELECT 'OK - chapter4_quiz_results is ready' AS status;
