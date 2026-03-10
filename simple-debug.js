// Script đơn giản kiểm tra view
// Chạy trong console F12

async function simpleDebug() {
    console.log('=== ĐƠN GIẢN VIEW ===');
    
    const supabase = window.getSupabase();
    const student = JSON.parse(localStorage.getItem('vatly11_student'));
    
    try {
        // 1. Kiểm tra dữ liệu trực tiếp
        console.log('\n--- DỮ LIỆU TRỰC TIẾP ---');
        const { data: directData, error: directError } = await supabase
            .from('quiz_attempts_chapter3_quiz')
            .select('score, created_at')
            .eq('student_id', student.id)
            .order('created_at', { ascending: false })
            .limit(5);
            
        if (directError) {
            console.error('❌ Lỗi direct query:', directError);
        } else {
            console.log('✅ Direct data:', directData);
            console.log('📊 Điểm cao nhất trực tiếp:', Math.max(...directData.map(d => d.score)));
        }
        
        // 2. Kiểm tra view
        console.log('\n--- KIỂM TRA VIEW ---');
        const { data: viewData, error: viewError } = await supabase
            .from('leaderboard_chapter3_quiz')
            .select('*')
            .eq('full_name', student.full_name)
            .eq('class_name', student.class_name);
            
        if (viewError) {
            console.error('❌ Lỗi view query:', viewError);
        } else {
            console.log('✅ View data:', viewData);
            console.log('📊 Điểm cao nhất từ view:', viewData[0]?.highest_score);
        }
        
        // 3. So sánh
        const directMax = Math.max(...directData.map(d => d.score));
        const viewMax = viewData[0]?.highest_score || 0;
        
        console.log('\n--- SO SÁNH ---');
        console.log('Điểm cao nhất direct:', directMax);
        console.log('Điểm cao nhất view:', viewMax);
        console.log('View có đúng chưa?', directMax === viewMax ? '✅' : '❌');
        
    } catch (error) {
        console.error('❌ Debug error:', error);
    }
}

// Chạy debug
simpleDebug();
