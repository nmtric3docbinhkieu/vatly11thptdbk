-- ==========================================
-- TỰ ĐỘNG TẠO BẢNG LƯU KẾT QUẢ TRẮC NGHIỆM CÔNG THỨC CHƯƠNG 4
-- Copy toàn bộ nội dung này vào Supabase Dashboard > SQL Editor > Run
-- ==========================================

-- 1. Xóa bảng cũ nếu tồn tại để tạo lại với cấu trúc đúng
DROP TABLE IF EXISTS chapter4_quiz_results CASCADE;
DROP TABLE IF EXISTS students CASCADE;

-- Tạo bảng students với cấu trúc đúng
CREATE TABLE students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  class_name VARCHAR(100),
  student_id VARCHAR(50) UNIQUE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index cho truy vấn nhanh
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_students_student_id ON students(student_id);
CREATE INDEX idx_students_class_name ON students(class_name);
CREATE INDEX idx_chapter4_quiz_student_id ON chapter4_quiz_results(student_id);
CREATE INDEX idx_chapter4_quiz_student_name ON chapter4_quiz_results(student_name);
CREATE INDEX idx_chapter4_quiz_class_name ON chapter4_quiz_results(class_name);
CREATE INDEX idx_chapter4_quiz_formula_category ON chapter4_quiz_results(formula_category);
CREATE INDEX idx_chapter4_quiz_score ON chapter4_quiz_results(score DESC);
CREATE INDEX idx_chapter4_quiz_date ON chapter4_quiz_results(quiz_date DESC);

-- Row Level Security cho students
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Row Level Security cho chapter4_quiz_results
ALTER TABLE chapter4_quiz_results ENABLE ROW LEVEL SECURITY;

-- Xóa policies cũ nếu tồn tại (tránh lỗi khi chạy lại)
DROP POLICY IF EXISTS "Anyone can view approved students" ON students;
DROP POLICY IF EXISTS "Anyone can insert students" ON students;
DROP POLICY IF EXISTS "Admins can update students" ON students;
DROP POLICY IF EXISTS "Anyone can insert quiz results" ON chapter4_quiz_results;
DROP POLICY IF EXISTS "Students can view own results" ON chapter4_quiz_results;
DROP POLICY IF EXISTS "Admins can view all results" ON chapter4_quiz_results;
DROP POLICY IF EXISTS "Anyone can view leaderboard" ON chapter4_quiz_results;

-- Tạo policies mới cho students
CREATE POLICY "Anyone can view approved students" ON students
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Anyone can insert students" ON students
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can update students" ON students
  FOR UPDATE USING (true);

-- Tạo policies mới cho chapter4_quiz_results
CREATE POLICY "Anyone can insert quiz results" ON chapter4_quiz_results
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Students can view own results" ON chapter4_quiz_results
  FOR SELECT USING (auth.uid()::text = student_id::text);

CREATE POLICY "Admins can view all results" ON chapter4_quiz_results
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view leaderboard" ON chapter4_quiz_results
  FOR SELECT USING (true);

-- Trigger tự động cập nhật thời gian
CREATE OR REPLACE FUNCTION update_chapter4_quiz_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Xóa trigger cũ nếu tồn tại
DROP TRIGGER IF EXISTS trigger_update_chapter4_quiz_timestamp ON chapter4_quiz_results;

-- Tạo trigger mới
CREATE TRIGGER trigger_update_chapter4_quiz_timestamp
  BEFORE UPDATE ON chapter4_quiz_results
  FOR EACH ROW
  EXECUTE FUNCTION update_chapter4_quiz_timestamp();

-- Hiển thị thông báo thành công
SELECT '✅ Tất cả bảng đã được tạo thành công!' as status;
SELECT '📋 Bảng students: Lưu thông tin học sinh' as info;
SELECT '📋 Bảng chapter4_quiz_results: Lưu kết quả trắc nghiệm công thức chương 4' as info;
SELECT '🚀 Hệ thống sẵn sàng cho học sinh làm bài!' as success;
