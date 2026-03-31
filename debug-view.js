// Script debug sâu view
// Chạy trong console F12

async function debugView() {
    console.log('=== DEBUG VIEW LEADERBOARD ===');
    
    const supabase = window.getSupabase();
    const student = JSON.parse(localStorage.getItem('vatly11_student'));
    
    try {
        // 1. Kiểm tra view có tồn tại không
        console.log('\n--- 1. KIỂM TRA VIEW ---');
        const { data: viewInfo, error: viewError } = await supabase
            .from('information_schema.views')
            .select('table_name, definition')
            .eq('table_name', 'leaderboard_chapter3_quiz');
            
        if (viewError) {
            console.error('❌ Lỗi view info:', viewError);
        } else {
            console.log('✅ View info:', viewInfo);
        }
        
        // 2. Kiểm tra dữ liệu trực tiếp từ bảng
        console.log('\n--- 2. DỮ LIỆU TRỰC TIẾP TỪ BẢNG ---');
        const { data: directData, error: directError } = await supabase
            .from('quiz_attempts_chapter3_quiz')
            .select('score, created_at')
            .eq('student_id', student.id)
            .order('created_at', { ascending: false })
            .limit(5);
            
        if (directError) {
            console.error('❌ Lỗi direct query:', directError);
        } else {
            console.log('✅ Direct data (5 lần gần nhất):', directData);
        }
        
        // 3. Kiểm tra view query
        console.log('\n--- 3. KIỂM TRA VIEW QUERY ---');
        const { data: viewData, error: viewDataError } = await supabase
            .from('leaderboard_chapter3_quiz')
            .select('*')
            .eq('full_name', student.full_name)
            .eq('class_name', student.class_name);
            
        if (viewDataError) {
            console.error('❌ Lỗi view query:', viewDataError);
        } else {
            console.log('✅ View query result:', viewData);
            console.log('📊 Highest score từ view:', viewData[0]?.highest_score);
        }
        
        // 4. Kiểm tra RLS policy
        console.log('\n--- 4. KIỂM TRA RLS POLICY ---');
        const { data: policyData, error: policyError } = await supabase
            .from('pg_policies')
            .select('policyname, qual, cmd, roles')
            .eq('tablename', 'quiz_attempts_chapter3_quiz');
            
        if (policyError) {
            console.error('❌ Lỗi policy query:', policyError);
        } else {
            console.log('✅ RLS Policies:', policyData);
        }
        
        // 5. Test query thủ công
        console.log('\n--- 5. TEST QUERY THỦ CÔNG ---');
        const manualQuery = `
            SELECT 
                s.full_name,
                s.class_name,
                MAX(q.score) as manual_highest_score,
                COUNT(q.id) as manual_total_attempts
            FROM students s
            JOIN quiz_attempts_chapter3_quiz q ON s.id = q.student_id
            WHERE s.full_name = '${student.full_name}' 
            AND s.class_name = '${student.class_name}'
            GROUP BY s.id, s.full_name, s.class_name
            ORDER BY manual_highest_score DESC
        `;
        
        const { data: manualData, error: manualError } = await supabase
            .rpc('exec_sql', { sql_query: manualQuery });
            
        if (manualError) {
            console.error('❌ Lỗi manual query:', manualError);
        } else {
            console.log('✅ Manual query result:', manualData);
        }
        
    } catch (error) {
        console.error('❌ Debug error:', error);
    }
}

// Chạy debug
debugView();
