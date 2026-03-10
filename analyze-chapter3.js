// Script phân tích dữ liệu chồng chéo trong Chương 3
// Mở trong console để kiểm tra

async function analyzeChapter3Data() {
    console.log('=== PHÂN TÍCH DỮ LIỆU CHƯƠNG 3 ===');
    
    const supabase = window.getSupabase();
    const student = JSON.parse(localStorage.getItem('vatly11_student'));
    
    try {
        // 1. Lấy tất cả dữ liệu của student hiện tại
        console.log('\n=== 1. DỮ LIỆU CỦA BẠN ===');
        const { data: myData, error: myError } = await supabase
            .from('quiz_attempts_chapter3')
            .select('*')
            .eq('student_id', student.id)
            .order('created_at', { ascending: false });
            
        if (myError) {
            console.error('❌ Lỗi:', myError);
        } else {
            console.log('✅ Dữ liệu của bạn:', myData);
            console.log('📊 Tổng số lần:', myData.length);
        }
        
        // 2. Phân tích theo chapter (thủ công)
        console.log('\n=== 2. PHÂN TÍCH THEO CHAPTER ===');
        const { data: allData, error: allError } = await supabase
            .from('quiz_attempts_chapter3')
            .select('chapter, score');
            
        if (allError) {
            console.error('❌ Lỗi:', allError);
        } else {
            // Nhóm dữ liệu theo chapter thủ công
            const grouped = {};
            allData.forEach(item => {
                const chapter = item.chapter || 'unknown';
                if (!grouped[chapter]) {
                    grouped[chapter] = { count: 0, scores: [], max_score: 0 };
                }
                grouped[chapter].count++;
                grouped[chapter].scores.push(item.score);
                grouped[chapter].max_score = Math.max(grouped[chapter].max_score, item.score);
            });
            
            // Tính avg và format
            Object.keys(grouped).forEach(chapter => {
                const group = grouped[chapter];
                group.avg_score = group.scores.reduce((a, b) => a + b, 0) / group.scores.length;
                console.log(`✅ Chapter ${chapter}:`, {
                    count: group.count,
                    avg_score: group.avg_score.toFixed(2),
                    max_score: group.max_score
                });
            });
        }
        
        // 3. Kiểm tra leaderboard
        console.log('\n=== 3. DỮ LIỆU LEADERBOARD ===');
        const { data: leaderboardData, error: leaderboardError } = await supabase
            .from('leaderboard_chapter3')
            .select('*')
            .order('highest_score', { ascending: false })
            .limit(10);
            
        if (leaderboardError) {
            console.error('❌ Lỗi:', leaderboardError);
        } else {
            console.log('✅ Top 10 leaderboard:', leaderboardData);
        }
        
        // 4. Kiểm tra cấu trúc bảng
        console.log('\n=== 4. KIỂM TRA CẤU TRÚC BẢNG ===');
        const { data: structure, error: structError } = await supabase
            .from('quiz_attempts_chapter3')
            .select('*')
            .limit(1);
            
        if (structError) {
            console.error('❌ Lỗi:', structError);
        } else if (structure.length > 0) {
            console.log('✅ Các cột trong bảng:', Object.keys(structure[0]));
            console.log('📝 Dữ liệu mẫu:', structure[0]);
        }
        
        // 5. Gợi ý giải pháp
        console.log('\n=== 5. GỢI Ý GIẢI PHÁP ===');
        console.log('🔧 Nếu có chồng chéo, cần:');
        console.log('   - Tách bảng cho từng loại bài kiểm tra');
        console.log('   - Hoặc thêm cột "test_type" để phân loại');
        console.log('   - Hoặc sửa view leaderboard để lọc đúng loại');
        
    } catch (error) {
        console.error('❌ Lỗi chung:', error);
    }
}

// Chạy phân tích
analyzeChapter3Data();
