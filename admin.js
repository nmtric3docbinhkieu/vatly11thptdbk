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
        // Lấy dữ liệu từ Supabase
        let summary = [];
        
        // Thử lấy từ view quiz_summary trước
        try {
            const result = await supabase.from('quiz_summary').select('*');
            if (!result.error) {
                summary = result.data || [];
            }
        } catch (e) {
            console.warn('Không lấy được quiz_summary:', e);
        }
        
        // Nếu không lấy được, tự tổng hợp và format thời gian
        if (!summary || summary.length === 0) {
            const { data: students } = await supabase.from('students').select('*, quiz_attempts(*)');
            
            summary = (students || []).map(student => {
                const attempts = student.quiz_attempts || [];
                const scores = attempts.map(a => a.score).filter(s => s != null);
                const warnings = attempts.map(a => a.cheat_warnings || 0);
                
                // Format thời gian cho từng lần làm bài (nếu cần hiển thị chi tiết)
                const formattedAttempts = attempts.map(a => ({
                    ...a,
                    created_at_vn: window.formatVNTime(a.created_at) // Thêm trường thời gian đã format
                }));
                
                return {
                    "Họ và tên": student.full_name,
                    "Lớp": student.class_name,
                    "Số lần làm bài": attempts.length,
                    "Điểm cao nhất": scores.length > 0 ? Math.max(...scores) : 0,
                    "Điểm trung bình": scores.length > 0 
                        ? Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2))
                        : 0,
                    "Tổng cảnh báo gian lận": warnings.reduce((a, b) => a + b, 0),
                    "Chi tiết thời gian làm bài": formattedAttempts.map(a => a.created_at_vn).join('; ') // Thêm thông tin thời gian
                };
            });
        }
        
        // Tạo rows cho Excel
        const rows = (summary || []).map((r, i) => {
            // Xác định các giá trị
            const hoTen = r['Họ và tên'] || r.full_name || '';
            const lop = r['Lớp'] || r.class_name || '';
            const soLan = r['Số lần làm bài'] || 0;
            const diemCaoNhat = r['Điểm cao nhất'] || 0;
            const diemTrungBinh = r['Điểm trung bình'] || 0;
            const canhBao = r['Tổng cảnh báo gian lận'] || 0;
            const thoiGianChiTiet = r['Chi tiết thời gian làm bài'] || '';
            
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
        window.XLSX.utils.book_append_sheet(wb, ws, 'Kết quả');
        window.XLSX.writeFile(wb, `ket-qua-vatly11-${dateStr}_${timeStr}.xlsx`);
        
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
            .from('exercise_attempts')
            .select('*, students(*)')
            .order('created_at', { ascending: false });
        
        if (!exerciseAttempts || exerciseAttempts.length === 0) {
            return { success: false, error: 'Không có dữ liệu bài tập ôn.' };
        }
        
        // Format dữ liệu
        const summary = exerciseAttempts.map(attempt => {
            return {
                "Họ và tên": attempt.students?.full_name || '',
                "Lớp": attempt.students?.class_name || '',
                "Số câu đúng": attempt.correct_answers || 0,
                "Tổng số câu": attempt.total_questions || 60,
                "Điểm": attempt.score || 0,
                "Thời gian làm (phút)": Math.floor((attempt.time_taken || 0) / 60),
                "Số lần cảnh báo": attempt.cheat_warnings || 0,
                "Ngày làm": window.formatVNTime(attempt.created_at)
            };
        });
        
        // Xuất Excel
        const ws = window.XLSX.utils.json_to_sheet(summary);
        const wb = window.XLSX.utils.book_new();
        window.XLSX.utils.book_append_sheet(wb, ws, "BaiTapOn");
        
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
        window.XLSX.writeFile(wb, `ket-qua-bai-tap-on-${dateStr}_${timeStr}.xlsx`);
        
        return { success: true };
        
    } catch (err) {
        console.error('Lỗi xuất Excel bài tập ôn:', err);
        return { success: false, error: err.message };
    }
};