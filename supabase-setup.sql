-- ====================================================================
-- CÁCH AN TOÀN NHẤT - CHẠY TỪNG BƯỚC RIÊNG BIỆT
-- ====================================================================

-- ============ BƯỚC 1: XÓA HẾT ============
DROP VIEW IF EXISTS leaderboard CASCADE;
DROP VIEW IF EXISTS quiz_summary CASCADE;
DROP TABLE IF EXISTS quiz_attempts CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
DROP FUNCTION IF EXISTS get_student_stats(uuid) CASCADE;

-- ============ BƯỚC 2: TẠO BẢNG STUDENTS ============
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    class_name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student UNIQUE(full_name, class_name)
);

-- ============ BƯỚC 3: TẠO BẢNG QUIZ_ATTEMPTS ============
CREATE TABLE quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 50,
    attempt_number INTEGER NOT NULL,
    time_taken INTEGER DEFAULT 0,
    cheat_warnings INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT score_range CHECK (score >= 0 AND score <= 500)
);

-- ============ BƯỚC 4: TẠO INDEX ============
CREATE INDEX idx_students_name_class ON students(full_name, class_name);
CREATE INDEX idx_attempts_student_id ON quiz_attempts(student_id);
CREATE INDEX idx_attempts_score_time ON quiz_attempts(score DESC, time_taken ASC);

-- ============ BƯỚC 5: TẠO FUNCTION ============
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============ BƯỚC 6: TẠO TRIGGER ============
CREATE TRIGGER update_students_updated_at
    BEFORE UPDATE ON students
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============ BƯỚC 7: TẠO VIEW LEADERBOARD ============
CREATE VIEW leaderboard AS
WITH best_scores AS (
    SELECT DISTINCT ON (student_id)
        student_id,
        score,
        time_taken,
        cheat_warnings,
        created_at
    FROM quiz_attempts
    ORDER BY student_id, score DESC, time_taken ASC
)
SELECT 
    s.id AS student_id,
    s.full_name,
    s.class_name,
    bs.score,
    bs.time_taken,
    bs.cheat_warnings,
    ROW_NUMBER() OVER (ORDER BY bs.score DESC, bs.time_taken ASC) AS rank_position
FROM best_scores bs
JOIN students s ON bs.student_id = s.id;

-- ============ BƯỚC 8: TẠO VIEW QUIZ_SUMMARY ============
CREATE VIEW quiz_summary AS
SELECT 
    s.full_name AS "Họ và tên",
    s.class_name AS "Lớp",
    COUNT(qa.id) AS "Số lần làm bài",
    COALESCE(MAX(qa.score), 0) AS "Điểm cao nhất",
    COALESCE(ROUND(AVG(qa.score), 2), 0) AS "Điểm trung bình",
    COALESCE(SUM(qa.cheat_warnings), 0) AS "Tổng cảnh báo gian lận",
    COALESCE(MAX(qa.cheat_warnings), 0) AS "Cảnh báo cao nhất",
    TO_CHAR(MIN(qa.created_at), 'DD/MM/YYYY HH24:MI:SS') AS "Lần đầu làm",
    TO_CHAR(MAX(qa.created_at), 'DD/MM/YYYY HH24:MI:SS') AS "Lần cuối làm"
FROM students s
LEFT JOIN quiz_attempts qa ON s.id = qa.student_id
GROUP BY s.id, s.full_name, s.class_name;

-- ============ BƯỚC 9: RLS VÀ POLICIES ============
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Cho phép tất cả" ON students;
DROP POLICY IF EXISTS "Cho phép tất cả" ON quiz_attempts;

CREATE POLICY "Cho phép tất cả" ON students FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Cho phép tất cả" ON quiz_attempts FOR ALL USING (true) WITH CHECK (true);

-- ============ BƯỚC 10: PHÂN QUYỀN ============
GRANT ALL ON students TO anon, authenticated;
GRANT ALL ON quiz_attempts TO anon, authenticated;
GRANT SELECT ON leaderboard TO anon, authenticated;
GRANT SELECT ON quiz_summary TO anon, authenticated;

-- ============ BƯỚC 11: THÊM DỮ LIỆU MẪU ============
INSERT INTO students (full_name, class_name, password_hash) VALUES
('Nguyễn Văn A', '11A1', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'),
('Trần Thị B', '11A1', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'),
('Lê Văn C', '11A2', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');

INSERT INTO quiz_attempts (student_id, score, attempt_number, time_taken, cheat_warnings) 
SELECT id, 450, 1, 780, 0 FROM students WHERE full_name = 'Nguyễn Văn A' LIMIT 1;

INSERT INTO quiz_attempts (student_id, score, attempt_number, time_taken, cheat_warnings) 
SELECT id, 420, 1, 820, 1 FROM students WHERE full_name = 'Trần Thị B' LIMIT 1;

INSERT INTO quiz_attempts (student_id, score, attempt_number, time_taken, cheat_warnings) 
SELECT id, 480, 1, 650, 0 FROM students WHERE full_name = 'Lê Văn C' LIMIT 1;

-- ============ BƯỚC 12: KIỂM TRA ============
SELECT '✅ THÀNH CÔNG!' AS result;
SELECT COUNT(*) AS so_luong_hoc_sinh FROM students;
SELECT COUNT(*) AS so_luong_bai_lam FROM quiz_attempts;
SELECT * FROM leaderboard;