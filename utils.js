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