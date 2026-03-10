// Script kiểm tra kết nối và cấu trúc bảng Supabase
// Mở trong console của trình duyệt để kiểm tra

async function checkSupabaseTables() {
    console.log('=== KIỂM TRA KẾT NỐI SUPABASE ===');
    
    try {
        // Kiểm tra kết nối
        const supabase = window.getSupabase();
        if (!supabase) {
            console.error('❌ Không kết nối được Supabase');
            return;
        }
        console.log('✅ Kết nối Supabase thành công');
        
        // Kiểm tra bảng quiz_attempts_chapter3
        console.log('\n=== KIỂM TRA BẢNG quiz_attempts_chapter3 ===');
        const { data: attemptsData, error: attemptsError } = await supabase
            .from('quiz_attempts_chapter3')
            .select('*')
            .limit(5);
            
        if (attemptsError) {
            console.error('❌ Lỗi bảng quiz_attempts_chapter3:', attemptsError);
        } else {
            console.log('✅ Bảng quiz_attempts_chapter3 tồn tại');
            console.log('Dữ liệu mẫu:', attemptsData);
        }
        
        // Kiểm tra bảng leaderboard_chapter3
        console.log('\n=== KIỂM TRA BẢNG leaderboard_chapter3 ===');
        const { data: leaderboardData, error: leaderboardError } = await supabase
            .from('leaderboard_chapter3')
            .select('*')
            .limit(5);
            
        if (leaderboardError) {
            console.error('❌ Lỗi bảng leaderboard_chapter3:', leaderboardError);
        } else {
            console.log('✅ Bảng leaderboard_chapter3 tồn tại');
            console.log('Dữ liệu mẫu:', leaderboardData);
        }
        
        // Kiểm tra student hiện tại
        console.log('\n=== KIỂM TRA STUDENT HIỆN TẠI ===');
        const student = JSON.parse(localStorage.getItem('vatly11_student'));
        if (student) {
            console.log('Student trong localStorage:', student);
            
            const { data: studentData, error: studentError } = await supabase
                .from('students')
                .select('*')
                .eq('full_name', student.full_name)
                .eq('class_name', student.class_name);
                
            if (studentError) {
                console.error('❌ Lỗi tìm student:', studentError);
            } else {
                console.log('✅ Tìm thấy student trong database:', studentData);
            }
        } else {
            console.log('❌ Không có student trong localStorage');
        }
        
    } catch (error) {
        console.error('❌ Lỗi chung:', error);
    }
}

// Hàm test lưu điểm
async function testSaveScore() {
    console.log('\n=== TEST LƯU ĐIỂM ===');
    
    const student = JSON.parse(localStorage.getItem('vatly11_student'));
    if (!student) {
        console.error('❌ Cần đăng nhập trước');
        return;
    }
    
    try {
        const result = await window.saveQuizResult(
            student,
            8.5, // điểm test
            0,    // không có cảnh báo
            120,   // 2 phút
            'ktghk2' // loại bài kiểm tra
        );
        
        console.log('Kết quả test lưu điểm:', result);
    } catch (error) {
        console.error('❌ Lỗi test lưu điểm:', error);
    }
}

// Tự động chạy khi paste vào console
checkSupabaseTables();

// Để test lưu điểm, chạy: testSaveScore();
