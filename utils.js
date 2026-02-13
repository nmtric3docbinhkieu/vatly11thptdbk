// ==============================================
// FILE: utils.js - PHIÊN BẢN SỬA LỖI UUID
// ==============================================

// Mã hóa mật khẩu (SHA-256 với salt)
window.hashPassword = async function(password, salt) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + salt + 'vatly11');
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2,'0')).join('');
};

// Định dạng thời gian từ giây sang phút:giây
window.formatTime = function(seconds) {
    if (!seconds || seconds < 0) return '0:00';
    const secs = Math.floor(seconds);
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
};

// Lưu kết quả quiz - ĐÃ SỬA LỖI UUID
window.saveQuizResult = async function(student, finalScore, cheatWarnings, timeTaken, chapter) {
    const supabase = window.getSupabase();
    if (!supabase || !student) {
        console.error('Không thể lưu kết quả');
        return;
    }

    try {
        console.log('Bắt đầu lưu kết quả:', { finalScore, cheatWarnings, timeTaken, chapter, student });
        
        // QUAN TRỌNG: Lấy UUID thật từ database
        const { data: studentData, error: findError } = await supabase
            .from('students')
            .select('id')
            .eq('full_name', student.full_name)
            .eq('class_name', student.class_name)
            .single();
        
        if (findError || !studentData) {
            console.error('Không tìm thấy student trong database:', findError);
            
            // Fallback: Nếu không tìm thấy, không lưu nữa
            console.log('Bỏ qua lưu kết quả do không tìm thấy student ID');
            return;
        }
        
        console.log('Tìm thấy student UUID:', studentData.id);
        
        // Chèn dữ liệu với UUID thật
        const { data, error } = await supabase.from('quiz_attempts').insert({
            student_id: studentData.id,  // UUID thật từ database
            score: finalScore,
            total_questions: 50,
            attempt_number: 1,
            time_taken: timeTaken,
            cheat_warnings: cheatWarnings
        }).select();

        if (error) {
            console.error('Lỗi Supabase khi lưu:', error);
            throw error;
        }
        
        console.log('Lưu kết quả thành công:', data);
    } catch (err) {
        console.error('Không lưu được kết quả:', err);
    }
};