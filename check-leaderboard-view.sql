-- KIỂM TRA VIEW LEADERBOARD
-- Chạy trong Supabase SQL Editor

-- Kiểm tra view hiện tại
SELECT * FROM leaderboard_chapter3_quiz 
WHERE full_name = 'Trí' AND class_name = '11CB4';

-- Kiểm tra dữ liệu thô trong bảng
SELECT 
    s.full_name,
    s.class_name,
    q.score,
    q.created_at as quiz_created_at
FROM quiz_attempts_chapter3_quiz q
JOIN students s ON q.student_id = s.id
WHERE s.full_name = 'Trí' AND s.class_name = '11CB4'
ORDER BY q.created_at DESC
LIMIT 5;

-- Kiểm tra xem view tính highest_score như thế nào
SELECT 
    s.full_name,
    s.class_name,
    MAX(q.score) as calculated_highest_score,
    COUNT(q.id) as total_attempts
FROM quiz_attempts_chapter3_quiz q
JOIN students s ON q.student_id = s.id
WHERE s.full_name = 'Trí' AND s.class_name = '11CB4'
GROUP BY s.id, s.full_name, s.class_name;

SELECT '✅ Kiểm tra xong!' as status;
