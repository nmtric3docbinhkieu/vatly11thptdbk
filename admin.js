// ==============================================
// FILE: admin.js
// ==============================================
// Xử lý xuất Excel cho giáo viên

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
        
        // Nếu không lấy được, tự tổng hợp
        if (!summary || summary.length === 0) {
            const { data: students } = await supabase.from('students').select('*, quiz_attempts(*)');
            
            summary = (students || []).map(student => {
                const attempts = student.quiz_attempts || [];
                const scores = attempts.map(a => a.score).filter(s => s != null);
                const warnings = attempts.map(a => a.cheat_warnings || 0);
                
                return {
                    "Họ và tên": student.full_name,
                    "Lớp": student.class_name,
                    "Số lần làm bài": attempts.length,
                    "Điểm cao nhất": scores.length > 0 ? Math.max(...scores) : 0,
                    "Điểm trung bình": scores.length > 0 
                        ? Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2))
                        : 0,
                    "Tổng cảnh báo gian lận": warnings.reduce((a, b) => a + b, 0)
                };
            });
        }
        
        // Tạo rows cho Excel
        const rows = (summary || []).map((r, i) => ({
            'STT': i + 1,
            'Họ và tên': r['Họ và tên'] || r.full_name || '',
            'Lớp': r['Lớp'] || r.class_name || '',
            'Số lần làm bài': r['Số lần làm bài'] || 0,
            'Điểm cao nhất': r['Điểm cao nhất'] || 0,
            'Điểm trung bình': r['Điểm trung bình'] || 0,
            'Tổng cảnh báo gian lận': r['Tổng cảnh báo gian lận'] || 0
        }));
        
        // Xuất Excel
        const ws = window.XLSX.utils.json_to_sheet(rows);
        const wb = window.XLSX.utils.book_new();
        window.XLSX.utils.book_append_sheet(wb, ws, 'Kết quả');
        window.XLSX.writeFile(wb, 'ket-qua-vatly11-' + new Date().toISOString().slice(0,10) + '.xlsx');
        
        return { success: true };
        
    } catch (err) {
        console.error('Lỗi xuất Excel:', err);
        return { success: false, error: err.message };
    }
};