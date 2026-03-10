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

// ===== CÁC HÀM MỚI CHO QUẢN LÝ NGƯỜI DÙNG =====

// Đăng ký tài khoản mới
window.registerStudent = async function(fullName, className, password) {
    const supabase = window.getSupabase();
    if (!supabase) return { success: false, error: 'Lỗi kết nối' };
    
    try {
        // Kiểm tra xem đã tồn tại chưa
        const { data: existing } = await supabase
            .from('students')
            .select('id')
            .eq('full_name', fullName)
            .eq('class_name', className)
            .maybeSingle();
        
        if (existing) {
            return { success: false, error: 'Học sinh đã tồn tại' };
        }
        
        // Mã hóa mật khẩu
        const pwHash = await window.hashPassword(password, className);
        
        // Thêm học sinh mới (chưa được duyệt)
        const { data, error } = await supabase
            .from('students')
            .insert({
                full_name: fullName,
                class_name: className,
                password_hash: pwHash,
                is_approved: window.CONFIG.appSettings.defaultApproved, // false mặc định
                created_at: new Date().toISOString()
            })
            .select()
            .single();
        
        if (error) throw error;
        
        // Gửi thông báo cho admin (nếu có)
        await window.notifyAdmin('new_registration', { fullName, className });
        
        return { 
            success: true, 
            data,
            message: 'Đăng ký thành công! Vui lòng chờ giáo viên phê duyệt.'
        };
        
    } catch (err) {
        console.error('Lỗi đăng ký:', err);
        return { success: false, error: err.message };
    }
};

// Đăng nhập (kiểm tra cả is_approved)
window.loginStudent = async function(fullName, className, password) {
    const supabase = window.getSupabase();
    if (!supabase) return { success: false, error: 'Lỗi kết nối' };
    
    try {
        const pwHash = await window.hashPassword(password, className);
        
        const { data, error } = await supabase
            .from('students')
            .select('id, full_name, class_name, is_approved')
            .eq('full_name', fullName)
            .eq('class_name', className)
            .eq('password_hash', pwHash)
            .maybeSingle();
        
        if (error) throw error;
        
        if (!data) {
            return { success: false, error: 'Sai tên, lớp hoặc mật khẩu' };
        }
        
        // Kiểm tra đã được duyệt chưa
        if (!data.is_approved) {
            return { 
                success: false, 
                error: 'Tài khoản chưa được giáo viên phê duyệt. Vui lòng đợi!',
                needsApproval: true
            };
        }
        
        // Lưu thông tin vào localStorage
        const studentInfo = {
            id: data.id,
            full_name: data.full_name,
            class_name: data.class_name
        };
        
        localStorage.setItem(window.CONFIG.storageKey, JSON.stringify(studentInfo));
        
        return { success: true, data: studentInfo };
        
    } catch (err) {
        console.error('Lỗi đăng nhập:', err);
        return { success: false, error: err.message };
    }
};

// Lấy danh sách học sinh chờ duyệt (cho admin)
window.getPendingApprovals = async function(adminPassword) {
    if (adminPassword !== window.CONFIG.adminPassword) {
        return { success: false, error: 'Sai mật khẩu admin' };
    }
    
    const supabase = window.getSupabase();
    if (!supabase) return { success: false, error: 'Lỗi kết nối' };
    
    try {
        const { data, error } = await supabase
            .from('students')
            .select('id, full_name, class_name, created_at')
            .eq('is_approved', false)
            .order('created_at', { ascending: true });
        
        if (error) throw error;
        
        return { success: true, data };
        
    } catch (err) {
        console.error('Lỗi lấy danh sách:', err);
        return { success: false, error: err.message };
    }
};

// Phê duyệt học sinh (cho admin)
window.approveStudent = async function(studentId, adminPassword) {
    if (adminPassword !== window.CONFIG.adminPassword) {
        return { success: false, error: 'Sai mật khẩu admin' };
    }
    
    const supabase = window.getSupabase();
    if (!supabase) return { success: false, error: 'Lỗi kết nối' };
    
    try {
        const { error } = await supabase
            .from('students')
            .update({ is_approved: true })
            .eq('id', studentId);
        
        if (error) throw error;
        
        return { success: true };
        
    } catch (err) {
        console.error('Lỗi phê duyệt:', err);
        return { success: false, error: err.message };
    }
};

// Từ chối/Xóa học sinh
window.rejectStudent = async function(studentId, adminPassword) {
    if (adminPassword !== window.CONFIG.adminPassword) {
        return { success: false, error: 'Sai mật khẩu admin' };
    }
    
    const supabase = window.getSupabase();
    if (!supabase) return { success: false, error: 'Lỗi kết nối' };
    
    try {
        const { error } = await supabase
            .from('students')
            .delete()
            .eq('id', studentId);
        
        if (error) throw error;
        
        return { success: true };
        
    } catch (err) {
        console.error('Lỗi xóa:', err);
        return { success: false, error: err.message };
    }
};

// Gửi thông báo admin (có thể bỏ qua nếu không cần)
window.notifyAdmin = async function(type, data) {
    console.log('Thông báo admin:', type, data);
    // Có thể tích hợp email, telegram, webhook sau
    return true;
};

// Lưu kết quả quiz - ĐÃ CẬP NHẬT TÁCH BIỆT 3 BẢNG
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
            console.log('Bỏ qua lưu kết quả do không tìm thấy student ID');
            return;
        }
        
        console.log('Tìm thấy student UUID:', studentData.id);
        console.log('FinalScore trước làm tròn:', finalScore, typeof finalScore);
        console.log('FinalScore sau làm tròn:', Math.round(finalScore), typeof Math.round(finalScore));
        
        // Xác định bảng và số câu dựa trên loại bài kiểm tra
        let tableName, totalQuestions, chapterNumber;
        
        if (chapter === 'ktghk2') {
            tableName = 'quiz_attempts_chapter3_ktghk2';
            totalQuestions = 25; // KTGHK2 có 25 câu
            chapterNumber = 3;
        } else if (chapter === 'solve') {
            tableName = 'quiz_attempts_chapter3_solve';
            totalQuestions = 50; // Ôn tập chương có 50 câu
            chapterNumber = 3;
        } else if (chapter === 3 || chapter === 'quiz') {
            tableName = 'quiz_attempts_chapter3_quiz';
            totalQuestions = 50; // Bài tập về nhà có 50 câu
            chapterNumber = 3;
        } else {
            // Các chương khác giữ nguyên bảng cũ
            tableName = 'quiz_attempts_chapter3';
            totalQuestions = chapter === 4 ? 38 : 50;
            chapterNumber = chapter;
        }
        
        console.log('Sẽ lưu vào bảng:', tableName, 'với', totalQuestions, 'câu');
        
        // Chèn dữ liệu vào đúng bảng
        const { data, error } = await supabase.from(tableName).insert({
            student_id: studentData.id,  // UUID thật từ database
            score: parseInt(Math.round(finalScore)), // Chắc chắn là integer
            total_questions: totalQuestions,
            attempt_number: 1,
            time_taken: timeTaken,
            cheat_warnings: cheatWarnings,
            chapter: chapterNumber,
            created_at: new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString() // +7 giờ
        }).select();

        if (error) {
            console.error('Lỗi Supabase khi lưu:', error);
            throw error;
        }
        
        console.log('Lưu kết quả thành công vào', tableName + ':', data);
    } catch (err) {
        console.error('Không lưu được kết quả:', err);
    }
};

// ===== HÀM XỬ LÝ THỜI GIAN VIỆT NAM =====

// Hàm chuyển đổi thời gian UTC sang giờ Việt Nam và định dạng dd/mm/yyyy HH:MM:SS
window.formatVNTime = function(utcTimeString) {
    if (!utcTimeString) return '';
    
    try {
        // Tạo đối tượng Date từ chuỗi UTC
        const date = new Date(utcTimeString);
        
        // Chuyển sang giờ Việt Nam (cộng thêm 7 giờ)
        const vnTime = new Date(date.getTime() + (7 * 60 * 60 * 1000));
        
        // Định dạng dd/mm/yyyy HH:MM:SS
        const day = vnTime.getDate().toString().padStart(2, '0');
        const month = (vnTime.getMonth() + 1).toString().padStart(2, '0');
        const year = vnTime.getFullYear();
        const hours = vnTime.getHours().toString().padStart(2, '0');
        const minutes = vnTime.getMinutes().toString().padStart(2, '0');
        const seconds = vnTime.getSeconds().toString().padStart(2, '0');
        
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    } catch (e) {
        console.error('Lỗi format thởi gian:', e);
        return utcTimeString;
    }
};

// Hàm format chỉ lấy ngày tháng (dd/mm/yyyy)
window.formatVNDate = function(utcTimeString) {
    if (!utcTimeString) return '';
    
    try {
        const date = new Date(utcTimeString);
        const vnTime = new Date(date.getTime() + (7 * 60 * 60 * 1000));
        
        const day = vnTime.getDate().toString().padStart(2, '0');
        const month = (vnTime.getMonth() + 1).toString().padStart(2, '0');
        const year = vnTime.getFullYear();
        
        return `${day}/${month}/${year}`;
    } catch (e) {
        return utcTimeString;
    }
};

// ===== HÀM LẤY BẢNG XẾP HẠNG =====
window.fetchLeaderboard = async function(testType = 'quiz') {
    const supabase = window.getSupabase();
    if (!supabase) {
        console.error('Không thể kết nối Supabase');
        return [];
    }
    
    try {
        // Xác định view dựa trên loại bài kiểm tra
        let viewName;
        if (testType === 'ktghk2') {
            viewName = 'leaderboard_chapter3_ktghk2';
        } else if (testType === 'solve') {
            viewName = 'leaderboard_chapter3_solve';
        } else if (testType === 'quiz') {
            viewName = 'leaderboard_chapter3_quiz';
        } else {
            viewName = 'leaderboard_chapter3'; // Mặc định cũ
        }
        
        console.log('Lấy leaderboard từ view:', viewName);
        
        const { data, error } = await supabase
            .from(viewName)
            .select('*')
            .order('highest_score', { ascending: false })
            .limit(20);
        
        if (error) {
            console.error('Lỗi khi lấy leaderboard:', error);
            return [];
        }
        
        console.log('Bảng xếp hạng:', data);
        return data;
        
    } catch (err) {
        console.error('Lỗi fetchLeaderboard:', err);
        return [];
    }
};