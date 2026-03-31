-- ==========================================
-- KIỂM TRA VIEW LEADERBOARD CHƯƠNG 4
-- Xem xem view có đang lấy đúng dữ liệu không
-- ==========================================

-- 1. Kiểm tra cấu trúc view
SELECT 
    column_name,
    data_type
FROM information_schema.columns 
WHERE table_name = 'leaderboard_chapter4_formula' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Xem 5 bản ghi đầu tiên trong view
SELECT 
    full_name,
    class_name,
    formula_category,
    highest_score,
    best_time,
    total_attempts,
    average_score,
    last_attempt
FROM leaderboard_chapter4_formula 
ORDER BY highest_score DESC, best_time ASC 
LIMIT 10;

-- 3. Kiểm tra xem view đang lấy từ bảng nào
SELECT 
    view_definition
FROM information_schema.views 
WHERE table_name = 'leaderboard_chapter4_formula' 
AND table_schema = 'public';

-- 4. So sánh với dữ liệu thô từ bảng chính
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
ORDER BY highest_score DESC, best_time ASC 
LIMIT 10;
