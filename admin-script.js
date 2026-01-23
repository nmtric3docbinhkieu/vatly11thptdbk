// Quản lý sự kiện cho trang quản trị
document.addEventListener('DOMContentLoaded', function() {
    // Xem kết quả học tập
    document.getElementById('viewResults').addEventListener('click', function() {
        document.getElementById('admin-controls').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        loadStudentResults();
    });
    
    // Xuất dữ liệu Excel
    document.getElementById('exportData').addEventListener('click', function() {
        document.getElementById('admin-controls').style.display = 'none';
        document.getElementById('exportSection').style.display = 'block';
    });
    
    // Quay lại từ các phần
    document.getElementById('backToAdmin').addEventListener('click', function() {
        document.getElementById('resultsSection').style.display = 'none';
        document.getElementById('admin-controls').style.display = 'block';
    });
    
    document.getElementById('backToAdmin2').addEventListener('click', function() {
        document.getElementById('exportSection').style.display = 'none';
        document.getElementById('admin-controls').style.display = 'block';
    });
    
    // Áp dụng bộ lọc
    document.getElementById('applyFilter').addEventListener('click', loadStudentResults);
    
    // Tạo file Excel
    document.getElementById('generateExcel').addEventListener('click', generateExcelFile);
});

// Tải kết quả học tập
function loadStudentResults() {
    const classFilter = document.getElementById('filterClass').value;
    const chapterFilter = document.getElementById('filterChapter').value;
    
    // Lấy dữ liệu từ localStorage
    let allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
    
    // Áp dụng bộ lọc
    let filteredResults = allResults;
    
    if (classFilter !== 'all') {
        filteredResults = filteredResults.filter(r => r.className === classFilter);
    }
    
    if (chapterFilter !== 'all') {
        filteredResults = filteredResults.filter(r => r.chapter === chapterFilter);
    }
    
    // Hiển thị kết quả
    const tableBody = document.getElementById('resultsTableBody');
    tableBody.innerHTML = '';
    
    if (filteredResults.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 20px;">
                    <i class="fas fa-info-circle"></i> Không có dữ liệu phù hợp với bộ lọc
                </td>
            </tr>
        `;
    } else {
        filteredResults.forEach((result, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${result.studentName}</td>
                <td>${result.className}</td>
                <td>${result.studentId}</td>
                <td>Chương ${result.chapter}</td>
                <td>${result.type === 'practice' ? 'Bài tập vận dụng' : 'Bài tập về nhà'}</td>
                <td>${result.score}/${result.total}</td>
                <td>${result.percentage}%</td>
                <td>${new Date(result.timestamp).toLocaleString('vi-VN')}</td>
            `;
            tableBody.appendChild(row);
        });
    }
    
    // Tính thống kê
    calculateStatistics(filteredResults);
}

// Tính toán thống kê
function calculateStatistics(results) {
    if (results.length === 0) {
        document.getElementById('totalAttempts').textContent = '0';
        document.getElementById('averageScore').textContent = '0';
        document.getElementById('completionRate').textContent = '0%';
        document.getElementById('totalStudents').textContent = '0';
        return;
    }
    
    // Tổng số bài đã làm
    document.getElementById('totalAttempts').textContent = results.length;
    
    // Điểm trung bình
    const totalScore = results.reduce((sum, r) => sum + parseFloat(r.percentage), 0);
    const avgScore = (totalScore / results.length).toFixed(1);
    document.getElementById('averageScore').textContent = avgScore + '%';
    
    // Tỷ lệ hoàn thành (giả sử > 0% là đã hoàn thành)
    const completed = results.filter(r => parseFloat(r.percentage) > 0).length;
    const completionRate = ((completed / results.length) * 100).toFixed(1);
    document.getElementById('completionRate').textContent = completionRate + '%';
    
    // Số học sinh duy nhất
    const uniqueStudents = [...new Set(results.map(r => r.studentId))];
    document.getElementById('totalStudents').textContent = uniqueStudents.length;
}

// Tạo file Excel (mô phỏng)
function generateExcelFile() {
    const exportClass = document.getElementById('exportClass').value;
    const exportType = document.getElementById('exportType').value;
    const exportDate = document.getElementById('exportDate').value;
    
    // Lấy dữ liệu từ localStorage
    let allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
    
    // Áp dụng bộ lọc
    let filteredResults = allResults;
    
    if (exportClass !== 'all') {
        filteredResults = filteredResults.filter(r => r.className === exportClass);
    }
    
    if (exportType !== 'all') {
        filteredResults = filteredResults.filter(r => r.type === exportType);
    }
    
    if (exportDate) {
        const selectedDate = new Date(exportDate);
        filteredResults = filteredResults.filter(r => {
            const resultDate = new Date(r.timestamp);
            return resultDate.toDateString() === selectedDate.toDateString();
        });
    }
    
    if (filteredResults.length === 0) {
        document.getElementById('exportResult').innerHTML = `
            <p style="color: #d32f2f;">
                <i class="fas fa-exclamation-triangle"></i> Không có dữ liệu để xuất file Excel
            </p>
        `;
        return;
    }
    
    // Tạo nội dung CSV (giả lập Excel)
    let csvContent = "Họ và tên,Lớp,Mã HS,Chương,Loại bài,Điểm,Tỷ lệ (%),Thời gian\n";
    
    filteredResults.forEach(result => {
        const row = [
            result.studentName,
            result.className,
            result.studentId,
            `Chương ${result.chapter}`,
            result.type === 'practice' ? 'Bài tập vận dụng' : 'Bài tập về nhà',
            `${result.score}/${result.total}`,
            result.percentage,
            new Date(result.timestamp).toLocaleString('vi-VN')
        ];
        
        csvContent += row.map(field => `"${field}"`).join(",") + "\n";
    });
    
    // Tạo file và tải xuống
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:]/g, '-');
    link.setAttribute("href", url);
    link.setAttribute("download", `ket-qua-hoc-tap-${timestamp}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    document.getElementById('exportResult').innerHTML = `
        <p style="color: #388e3c;">
            <i class="fas fa-check-circle"></i> Đã tạo file Excel thành công! 
            File đã được tải xuống tự động. Tổng số bản ghi: ${filteredResults.length}
        </p>
    `;
}