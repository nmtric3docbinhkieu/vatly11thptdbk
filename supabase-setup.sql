-- =====================================================
-- BƯỚC 1: Tạo bảng học sinh
-- =====================================================
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  class_name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(full_name, class_name)
);

-- =====================================================
-- BƯỚC 2: Tạo bảng kết quả
-- =====================================================
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  score INT NOT NULL,
  total_questions INT NOT NULL DEFAULT 50,
  attempt_number INT NOT NULL DEFAULT 1,
  time_taken INT DEFAULT 0,
  cheat_warnings INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- BƯỚC 3: Bật RLS
-- =====================================================
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- BƯỚC 4: Tạo policies
-- =====================================================
CREATE POLICY "Allow all students" ON students FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all quiz_attempts" ON quiz_attempts FOR ALL USING (true) WITH CHECK (true);

-- =====================================================
-- BƯỚC 5: Tạo view leaderboard
-- =====================================================
CREATE VIEW leaderboard AS
SELECT 
    s.full_name,
    s.class_name,
    qa.score,
    qa.time_taken,
    qa.cheat_warnings,
    RANK() OVER (ORDER BY qa.score DESC, qa.time_taken ASC) as rank_position
FROM quiz_attempts qa
JOIN students s ON qa.student_id = s.id
WHERE qa.score IS NOT NULL;

-- =====================================================
-- BƯỚC 6: Cho phép truy cập view
-- =====================================================
GRANT SELECT ON leaderboard TO anon;
GRANT SELECT ON leaderboard TO authenticated;
GRANT SELECT ON students TO anon;
GRANT SELECT ON students TO authenticated;
GRANT SELECT ON quiz_attempts TO anon;
GRANT SELECT ON quiz_attempts TO authenticated;