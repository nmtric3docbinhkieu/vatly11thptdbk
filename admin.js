// ==============================================
// FILE: admin.js - ĐÃ SỬA LỖI THỜI GIAN
// ==============================================

window.exportToExcel = async function(adminPassword) {
    if (adminPassword !== window.CONFIG.adminPassword) {
        return { success: false, error: 'Sai mật khẩu giáo viên.' };
    }
    
    const supabase = window.getSupabase();
    if (!supabase) {
        return { success: false, error: 'Chưa cấu hình Supabase.' };
    }
    
    try {
        // Lấy dữ liệu từ bảng quiz_attempts_chapter4_formula (chương 4 công thức)
        const { data: students } = await supabase.from('students').select('*, quiz_attempts_chapter4_formula(*)');
        
        const summary = (students || []).map(student => {
            const attempts = student.quiz_attempts_chapter4_formula || [];
            const scores = attempts.map(a => a.score).filter(s => s != null);
            
            // Format thời gian cho từng attempt
            const attemptTimes = attempts.map(a => {
                if (!a.created_at) return '';
                const date = new Date(a.created_at);
                return date.toLocaleString('vi-VN', {
                    timeZone: 'Asia/Ho_Chi_Minh',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                });
            }).join('; ');
            
            return {
                "Họ và tên": student.full_name,
                "Lớp": student.class_name,
                "Số lần làm bài Chương 4 Công thức": attempts.length,
                "Điểm cao nhất": scores.length > 0 ? Math.max(...scores) : 0,
                "Điểm trung bình": scores.length > 0 
                    ? Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2))
                    : 0,
                "Lần làm cuối": attempts.length > 0 ? attemptTimes.split('; ')[0] : "Chưa làm",
                "Chi tiết thời gian làm bài (VN)": attemptTimes
            };
        });
        
        // Tạo rows cho Excel
        const rows = (summary || []).map((r, i) => {
            // Xác định các giá trị
            const hoTen = r['Họ và tên'] || r.full_name || '';
            const lop = r['Lớp'] || r.class_name || '';
            const soLan = r['Số lần làm bài'] || 0;
            const diemCaoNhat = r['Điểm cao nhất'] || 0;
            const diemTrungBinh = r['Điểm trung bình'] || 0;
            const canhBao = r['Tổng cảnh báo gian lận'] || 0;
            const thoiGianChiTiet = r['Chi tiết thời gian làm bài (VN)'] || '';
            
            return {
                'STT': i + 1,
                'Họ và tên': hoTen,
                'Lớp': lop,
                'Số lần làm bài': soLan,
                'Điểm cao nhất': diemCaoNhat,
                'Điểm trung bình': diemTrungBinh,
                'Tổng cảnh báo gian lận': canhBao,
                'Thời gian làm bài (VN)': thoiGianChiTiet
            };
        });
        
        // Xuất Excel với tên file có thời gian Việt Nam
        const now = new Date();
        const vnNow = new Date(now.getTime() + (7 * 60 * 60 * 1000));
        const dateStr = vnNow.toISOString().slice(0,10); // YYYY-MM-DD
        const timeStr = vnNow.toTimeString().slice(0,8).replace(/:/g, '-'); // HH-MM-SS
        
        const ws = window.XLSX.utils.json_to_sheet(rows);
        const wb = window.XLSX.utils.book_new();
        window.XLSX.utils.book_append_sheet(wb, ws, 'Kết quả Chương 4 Công thức');
        window.XLSX.writeFile(wb, `ket-qua-chapter4-cong-thuc-${dateStr}_${timeStr}.xlsx`);
        
        return { success: true };
        
    } catch (err) {
        console.error('Lỗi xuất Excel:', err);
        return { success: false, error: err.message };
    }
};

window.exportExerciseResults = async function(adminPassword) {
    if (adminPassword !== window.CONFIG.adminPassword) {
        return { success: false, error: 'Sai mật khẩu giáo viên.' };
    }
    
    const supabase = window.getSupabase();
    if (!supabase) {
        return { success: false, error: 'Chưa cấu hình Supabase.' };
    }
    
    try {
        // Lấy dữ liệu bài tập ôn
        const { data: exerciseAttempts } = await supabase
            .from('exercise_attempts_chapter3')
            .select('*, students(*)')
            .order('created_at', { ascending: false });
        
        if (!exerciseAttempts || exerciseAttempts.length === 0) {
            return { success: false, error: 'Không có dữ liệu bài tập ôn.' };
        }
        
        // Format dữ liệu
        const summary = exerciseAttempts.map(attempt => {
            const correctAnswers = attempt.correct_answers || Math.round((attempt.score / 50) * (attempt.total_questions || 60));
            
            // Format thời gian
            const formattedTime = attempt.created_at ? 
                new Date(attempt.created_at).toLocaleString('vi-VN', {
                    timeZone: 'Asia/Ho_Chi_Minh',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }) : '';
            
            return {
                "Họ và tên": attempt.students?.full_name || '',
                "Lớp": attempt.students?.class_name || '',
                "Số câu đúng": correctAnswers,
                "Tổng số câu": attempt.total_questions || 60,
                "Thời gian làm (phút)": Math.floor((attempt.time_taken || 0) / 60),
                "Số lần cảnh báo": attempt.cheat_warnings || 0,
                "Ngày làm (VN)": formattedTime
            };
        });
        
        // Xuất Excel
        const now = new Date();
        const dateStr = now.toLocaleDateString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\//g, '-');
        
        const ws = window.XLSX.utils.json_to_sheet(summary);
        const wb = window.XLSX.utils.book_new();
        window.XLSX.utils.book_append_sheet(wb, ws, "BaiTapOn");
        window.XLSX.writeFile(wb, `ket-qua-bai-tap-on-${dateStr}.xlsx`);
        
        return { success: true };
        
    } catch (err) {
        console.error('Lỗi xuất Excel bài tập ôn:', err);
        return { success: false, error: err.message };
    }
};