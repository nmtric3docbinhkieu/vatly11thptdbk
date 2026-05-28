-- Tạo bảng lưu kết quả trắc nghiệm công thức chương 4
-- Copy và paste vào Supabase Dashboard > SQL Editor > Run

CREATE TABLE IF NOT EXISTS chapter4_formula_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  formula_category VARCHAR(100) NOT NULL,
  total_questions INTEGER NOT NULL DEFAULT 10,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  score DECIMAL(5,2) NOT NULL DEFAULT 0,
  time_taken INTEGER NOT NULL,
  difficulty_level VARCHAR(20) DEFAULT 'medium',
  answers JSONB,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index cho truy vấn nhanh
CREATE INDEX IF NOT EXISTS idx_chapter4_formula_student_id ON chapter4_formula_scores(student_id);
CREATE INDEX IF NOT EXISTS idx_chapter4_formula_category ON chapter4_formula_scores(formula_category);
CREATE INDEX IF NOT EXISTS idx_chapter4_formula_score ON chapter4_formula_scores(score DESC);

-- Enable Row Level Security
ALTER TABLE chapter4_formula_scores ENABLE ROW LEVEL SECURITY;

-- Policies
DROP POLICY IF EXISTS "Anyone can insert formula results" ON chapter4_formula_scores;
CREATE POLICY "Anyone can insert formula results" ON chapter4_formula_scores
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Students can view own formula results" ON chapter4_formula_scores;
CREATE POLICY "Students can view own formula results" ON chapter4_formula_scores
  FOR SELECT USING (auth.uid()::text = student_id::text);

DROP POLICY IF EXISTS "Admins can view all formula results" ON chapter4_formula_scores;
CREATE POLICY "Admins can view all formula results" ON chapter4_formula_scores
  FOR SELECT USING (true);

-- Hiển thị thông báo thành công
SELECT '✅ Bảng chapter4_formula_scores đã được tạo thành công!' as status;
