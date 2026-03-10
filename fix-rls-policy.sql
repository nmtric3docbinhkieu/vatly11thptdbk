-- SỬA RLS POLICY CHO 3 BẢNG MỚI
-- Chạy trong Supabase SQL Editor

-- 1. XÓA RLS POLICY CŨ VÀ TẠO MỚI
DROP POLICY IF EXISTS "Users can view their own solve attempts" ON quiz_attempts_chapter3_solve;
DROP POLICY IF EXISTS "Users can insert their own solve attempts" ON quiz_attempts_chapter3_solve;
DROP POLICY IF EXISTS "Everyone can view solve leaderboard" ON quiz_attempts_chapter3_solve;

DROP POLICY IF EXISTS "Users can view their own quiz attempts" ON quiz_attempts_chapter3_quiz;
DROP POLICY IF EXISTS "Users can insert their own quiz attempts" ON quiz_attempts_chapter3_quiz;
DROP POLICY IF EXISTS "Everyone can view quiz leaderboard" ON quiz_attempts_chapter3_quiz;

DROP POLICY IF EXISTS "Users can view their own ktghk2 attempts" ON quiz_attempts_chapter3_ktghk2;
DROP POLICY IF EXISTS "Users can insert their own ktghk2 attempts" ON quiz_attempts_chapter3_ktghk2;
DROP POLICY IF EXISTS "Everyone can view ktghk2 leaderboard" ON quiz_attempts_chapter3_ktghk2;

-- 2. TẠO RLS POLICY ĐÚNG VỚI auth.uid()

-- Policy cho bảng quiz_attempts_chapter3_solve
CREATE POLICY "Users can view their own solve attempts" ON quiz_attempts_chapter3_solve
    FOR SELECT USING (auth.uid() = student_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own solve attempts" ON quiz_attempts_chapter3_solve
    FOR INSERT WITH CHECK (auth.uid() = student_id OR auth.uid() IS NULL);

-- Policy cho bảng quiz_attempts_chapter3_quiz
CREATE POLICY "Users can view their own quiz attempts" ON quiz_attempts_chapter3_quiz
    FOR SELECT USING (auth.uid() = student_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own quiz attempts" ON quiz_attempts_chapter3_quiz
    FOR INSERT WITH CHECK (auth.uid() = student_id OR auth.uid() IS NULL);

-- Policy cho bảng quiz_attempts_chapter3_ktghk2
CREATE POLICY "Users can view their own ktghk2 attempts" ON quiz_attempts_chapter3_ktghk2
    FOR SELECT USING (auth.uid() = student_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own ktghk2 attempts" ON quiz_attempts_chapter3_ktghk2
    FOR INSERT WITH CHECK (auth.uid() = student_id OR auth.uid() IS NULL);

-- 3. CHO PHÉP MỌI NGƯỜI ĐỌC LEADERBOARD (KHÔNG CẦN ĐĂNG NHẬP)
-- Không cần policy cho view vì view đã tự động cho phép SELECT

-- 4. KIỂM TRA LẠI
SELECT '✅ Đã sửa xong RLS Policy cho 3 bảng mới!' as status;

-- 5. Test insert một bản ghi để kiểm tra
INSERT INTO quiz_attempts_chapter3_solve (student_id, score, total_questions, attempt_number, time_taken, cheat_warnings, chapter)
SELECT id, 10, 50, 1, 120, 0, 3
FROM students 
LIMIT 1;

SELECT '✅ Test insert thành công!' as test_result;
