-- ==========================================
-- TẠO BẢNG KẾT QUẢ TRẮC NGHIỆM CÔNG THỨC CHƯƠNG 4
-- Dựa trên cấu trúc hiện có của project
-- Chỉ tạo mới, không thay đổi bảng cũ
-- ==========================================

-- Tạo bảng lưu kết quả trắc nghiệm công thức chương 4
CREATE TABLE quiz_attempts_chapter4_formula (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 10),
    correct_answers INTEGER NOT NULL DEFAULT 0,
    total_questions INTEGER DEFAULT 10,
    time_taken INTEGER NOT NULL, -- giây
    formula_category VARCHAR(100) NOT NULL, -- 'dong_dien_khong_doi', 'cam_ung_dien_tu', etc.
    difficulty_level VARCHAR(20) DEFAULT 'medium', -- 'easy', 'medium', 'hard'
    attempt_number INTEGER DEFAULT 1,
    cheat_warnings INTEGER DEFAULT 0,
    chapter INTEGER DEFAULT 4,
    answers JSONB, -- chi tiết câu trả lời {question_id: selected_answer, is_correct: true/false}
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tạo index để tối ưu truy vấn
CREATE INDEX idx_chapter4_formula_student_id ON quiz_attempts_chapter4_formula(student_id);
CREATE INDEX idx_chapter4_formula_formula_category ON quiz_attempts_chapter4_formula(formula_category);
CREATE INDEX idx_chapter4_formula_score ON quiz_attempts_chapter4_formula(score DESC);
CREATE INDEX idx_chapter4_formula_completed_at ON quiz_attempts_chapter4_formula(completed_at DESC);
CREATE INDEX idx_chapter4_formula_student_category ON quiz_attempts_chapter4_formula(student_id, formula_category);

-- Enable Row Level Security
ALTER TABLE quiz_attempts_chapter4_formula ENABLE ROW LEVEL SECURITY;

-- Tạo policies theo pattern hiện có
CREATE POLICY "Allow all authenticated users" ON quiz_attempts_chapter4_formula
    FOR ALL USING (auth.uid() = student_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own formula attempts" ON quiz_attempts_chapter4_formula
    FOR INSERT WITH CHECK ((auth.uid() = student_id) OR (auth.uid() IS NULL));

CREATE POLICY "Users can view their own formula attempts" ON quiz_attempts_chapter4_formula
    FOR SELECT USING ((auth.uid() = student_id) OR (auth.uid() IS NULL));

-- Tạo VIEW cho leaderboard công thức chương 4
CREATE OR REPLACE VIEW leaderboard_chapter4_formula AS
SELECT 
    s.full_name,
    s.class_name,
    q.formula_category,
    MAX(q.score) as highest_score,
    MIN(q.time_taken) as best_time,
    COUNT(q.id) as total_attempts,
    AVG(q.score) as average_score,
    MAX(q.completed_at) as last_attempt
FROM students s
JOIN quiz_attempts_chapter4_formula q ON s.id = q.student_id
GROUP BY s.id, s.full_name, s.class_name, q.formula_category
ORDER BY highest_score DESC, best_time ASC;

-- Cho phép mọi người đọc leaderboard (view)
CREATE POLICY "Everyone can view formula leaderboard" ON quiz_attempts_chapter4_formula
    FOR SELECT USING (true);

SELECT '✅ Đã tạo bảng quiz_attempts_chapter4_formula thành công!' as status;
SELECT '📋 Bảng lưu kết quả trắc nghiệm công thức chương 4' as info;
SELECT '🔒 Đã cấu hình Row Level Security' as info;
SELECT '🏆 Đã tạo leaderboard_chapter4_formula view' as info;
SELECT '🚀 Hệ thống sẵn sàng cho học sinh làm bài!' as success;
