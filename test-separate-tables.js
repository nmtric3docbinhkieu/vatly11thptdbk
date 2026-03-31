// Script test 3 bảng mới
// Chạy trong console sau khi làm bài kiểm tra

async function testSeparateTables() {
    console.log('=== TEST 3 BẢNG MỚI ===');
    
    const supabase = window.getSupabase();
    const student = JSON.parse(localStorage.getItem('vatly11_student'));
    
    try {
        // 1. Test lưu điểm vào từng bảng
        console.log('\n=== 1. TEST LƯU ĐIỂM ===');
        
        // Test Ôn tập chương
        console.log('Test lưu Ôn tập chương...');
        await window.saveQuizResult(student, 8.5, 0, 120, 'solve');
        
        // Test Bài tập về nhà
        console.log('Test lưu Bài tập về nhà...');
        await window.saveQuizResult(student, 9.0, 0, 150, 'quiz');
        
        // Test Kiểm tra GHK2
        console.log('Test lưu Kiểm tra GHK2...');
        await window.saveQuizResult(student, 7.5, 1, 180, 'ktghk2');
        
        // 2. Kiểm tra dữ liệu trong từng bảng
        console.log('\n=== 2. KIỂM TRA DỮ LIỆU ===');
        
        const tables = [
            { name: 'quiz_attempts_chapter3_solve', type: 'solve' },
            { name: 'quiz_attempts_chapter3_quiz', type: 'quiz' },
            { name: 'quiz_attempts_chapter3_ktghk2', type: 'ktghk2' }
        ];
        
        for (const table of tables) {
            console.log(`\n--- Bảng ${table.name} ---`);
            const { data, error } = await supabase
                .from(table.name)
                .select('*')
                .eq('student_id', student.id)
                .order('created_at', { ascending: false })
                .limit(3);
                
            if (error) {
                console.error(`❌ Lỗi ${table.name}:`, error);
            } else {
                console.log(`✅ ${table.name}:`, data.length, 'bản ghi');
                data.forEach(item => {
                    console.log(`  - Điểm: ${item.score}, Thời gian: ${item.time_taken}s, Câu: ${item.total_questions}`);
                });
            }
        }
        
        // 3. Test leaderboard từng loại
        console.log('\n=== 3. TEST LEADERBOARD ===');
        
        for (const table of tables) {
            console.log(`\n--- Leaderboard ${table.type} ---`);
            const leaderboard = await window.fetchLeaderboard(table.type);
            console.log(`✅ Top ${leaderboard.length}:`, leaderboard.slice(0, 3));
        }
        
        console.log('\n=== HOÀN THÀNH ===');
        console.log('✅ Test xong! Kiểm tra console để xem kết quả.');
        
    } catch (error) {
        console.error('❌ Lỗi test:', error);
    }
}

// Chạy test
testSeparateTables();
