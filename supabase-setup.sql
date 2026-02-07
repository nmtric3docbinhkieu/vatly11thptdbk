-- =====================================================
-- HƯỚNG DẪN: Chạy script này trong Supabase SQL Editor
-- Đường dẫn: https://supabase.com/dashboard -> Your Project -> SQL Editor -> New Query
-- =====================================================

-- Bảng học sinh
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  class_name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(full_name, class_name)
);

-- Bảng kết quả trắc nghiệm
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  score INT NOT NULL,
  total_questions INT NOT NULL,
  attempt_number INT NOT NULL,
  time_taken INT DEFAULT 0, -- Thời gian làm bài tính bằng giây
  cheat_warnings INT DEFAULT 0, -- Thêm cột ghi nhận số lần gian lận
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cho phép truy cập (cần cho app chạy với anon key)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Chính sách: Cho phép insert và select (app sẽ xác thực ở phía client)
DROP POLICY IF EXISTS "Allow all students" ON students;
CREATE POLICY "Allow all students" ON students FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all quiz_attempts" ON quiz_attempts;
CREATE POLICY "Allow all quiz_attempts" ON quiz_attempts FOR ALL USING (true) WITH CHECK (true);

-- Tạo view để xuất Excel dễ dàng (tổng hợp theo học sinh)
CREATE OR REPLACE VIEW quiz_summary AS
SELECT 
  s.full_name AS "Họ và tên",
  s.class_name AS "Lớp",
  COUNT(qa.id) AS "Số lần làm bài",
  COALESCE(MAX(qa.score), 0) AS "Điểm cao nhất",
  COALESCE(ROUND(AVG(qa.score)::numeric, 1), 0) AS "Điểm trung bình",
  COALESCE(MIN(qa.time_taken), 0) AS "Thời gian nhanh nhất (giây)",
  COALESCE(SUM(qa.cheat_warnings), 0) AS "Tổng cảnh báo gian lận",
  COALESCE(MAX(qa.cheat_warnings), 0) AS "Cảnh báo cao nhất",
  MIN(qa.created_at) AS "Lần đầu làm",
  MAX(qa.created_at) AS "Lần cuối làm"
FROM students s
LEFT JOIN quiz_attempts qa ON s.id = qa.student_id
GROUP BY s.id, s.full_name, s.class_name;

-- View cho bảng xếp hạng (sắp xếp theo điểm rồi đến thời gian)
CREATE OR REPLACE VIEW leaderboard AS
SELECT 
  s.full_name,
  s.class_name,
  qa.score,
  qa.time_taken,
  qa.cheat_warnings,
  qa.created_at,
  ROW_NUMBER() OVER (ORDER BY qa.score DESC, qa.time_taken ASC) AS rank_position
FROM students s
JOIN quiz_attempts qa ON s.id = qa.student_id
WHERE qa.score > 0
ORDER BY qa.score DESC, qa.time_taken ASC;

-- Cho phép truy cập view (Supabase dùng role anon)
GRANT SELECT ON quiz_summary TO anon;
GRANT SELECT ON leaderboard TO anon;
