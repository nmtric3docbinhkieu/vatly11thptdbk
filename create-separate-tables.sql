-- SQL SCRIPT TẠO 3 BẢNG RIÊNG CHO CHƯƠNG 3
-- Chạy trong Supabase SQL Editor

-- 1. Bảng cho ÔN TẬP CHƯƠNG (solve-exercises)
CREATE TABLE IF NOT EXISTS quiz_attempts_chapter3_solve (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 50),
    total_questions INTEGER DEFAULT 50,
    attempt_number INTEGER DEFAULT 1,
    time_taken INTEGER NOT NULL, -- giây
    cheat_warnings INTEGER DEFAULT 0,
    chapter INTEGER DEFAULT 3,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Bảng cho BÀI TẬP VỀ NHÀ (quiz)
CREATE TABLE IF NOT EXISTS quiz_attempts_chapter3_quiz (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 50),
    total_questions INTEGER DEFAULT 50,
    attempt_number INTEGER DEFAULT 1,
    time_taken INTEGER NOT NULL, -- giây
    cheat_warnings INTEGER DEFAULT 0,
    chapter INTEGER DEFAULT 3,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Bảng cho KIỂM TRA CHƯƠNG 3 (ktghk2)
CREATE TABLE IF NOT EXISTS quiz_attempts_chapter3_ktghk2 (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 25),
    total_questions INTEGER DEFAULT 25,
    attempt_number INTEGER DEFAULT 1,
    time_taken INTEGER NOT NULL, -- giây
    cheat_warnings INTEGER DEFAULT 0,
    chapter INTEGER DEFAULT 3,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tạo VIEW cho leaderboard của từng loại

-- Leaderboard ÔN TẬP CHƯƠNG
CREATE OR REPLACE VIEW leaderboard_chapter3_solve AS
SELECT 
    s.full_name,
    s.class_name,
    MAX(q.score) as highest_score,
    MIN(q.time_taken) as best_time,
    COUNT(q.id) as total_attempts
FROM students s
JOIN quiz_attempts_chapter3_solve q ON s.id = q.student_id
GROUP BY s.id, s.full_name, s.class_name
ORDER BY highest_score DESC, best_time ASC;

-- Leaderboard BÀI TẬP VỀ NHÀ
CREATE OR REPLACE VIEW leaderboard_chapter3_quiz AS
SELECT 
    s.full_name,
    s.class_name,
    MAX(q.score) as highest_score,
    MIN(q.time_taken) as best_time,
    COUNT(q.id) as total_attempts
FROM students s
JOIN quiz_attempts_chapter3_quiz q ON s.id = q.student_id
GROUP BY s.id, s.full_name, s.class_name
ORDER BY highest_score DESC, best_time ASC;

-- Leaderboard KIỂM TRA CHƯƠNG 3
CREATE OR REPLACE VIEW leaderboard_chapter3_ktghk2 AS
SELECT 
    s.full_name,
    s.class_name,
    MAX(q.score) as highest_score,
    MIN(q.time_taken) as best_time,
    COUNT(q.id) as total_attempts
FROM students s
JOIN quiz_attempts_chapter3_ktghk2 q ON s.id = q.student_id
GROUP BY s.id, s.full_name, s.class_name
ORDER BY highest_score DESC, best_time ASC;

-- 5. Enable RLS (Row Level Security)
ALTER TABLE quiz_attempts_chapter3_solve ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts_chapter3_quiz ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts_chapter3_ktghk2 ENABLE ROW LEVEL SECURITY;

-- 6. RLS Policies - Cho phép user xem dữ liệu của mình
CREATE POLICY "Users can view their own solve attempts" ON quiz_attempts_chapter3_solve
    FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Users can insert their own solve attempts" ON quiz_attempts_chapter3_solve
    FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Users can view their own quiz attempts" ON quiz_attempts_chapter3_quiz
    FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Users can insert their own quiz attempts" ON quiz_attempts_chapter3_quiz
    FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Users can view their own ktghk2 attempts" ON quiz_attempts_chapter3_ktghk2
    FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Users can insert their own ktghk2 attempts" ON quiz_attempts_chapter3_ktghk2
    FOR INSERT WITH CHECK (auth.uid() = student_id);

-- 7. Cho phép mọi người đọc leaderboard (view)
CREATE POLICY "Everyone can view solve leaderboard" ON quiz_attempts_chapter3_solve
    FOR SELECT USING (true);

CREATE POLICY "Everyone can view quiz leaderboard" ON quiz_attempts_chapter3_quiz
    FOR SELECT USING (true);

CREATE POLICY "Everyone can view ktghk2 leaderboard" ON quiz_attempts_chapter3_ktghk2
    FOR SELECT USING (true);

-- 8. Tạo INDEX để tối ưu performance
CREATE INDEX idx_solve_student_id ON quiz_attempts_chapter3_solve(student_id);
CREATE INDEX idx_solve_created_at ON quiz_attempts_chapter3_solve(created_at DESC);
CREATE INDEX idx_quiz_student_id ON quiz_attempts_chapter3_quiz(student_id);
CREATE INDEX idx_quiz_created_at ON quiz_attempts_chapter3_quiz(created_at DESC);
CREATE INDEX idx_ktghk2_student_id ON quiz_attempts_chapter3_ktghk2(student_id);
CREATE INDEX idx_ktghk2_created_at ON quiz_attempts_chapter3_ktghk2(created_at DESC);

SELECT '✅ Đã tạo xong 3 bảng riêng cho Chương 3!' as status;
