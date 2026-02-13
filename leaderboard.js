// ==============================================
// FILE: leaderboard.js
// ==============================================
// Xử lý bảng xếp hạng

window.fetchLeaderboard = async function() {
    const supabase = window.getSupabase();
    if (!supabase) return [];
    
    try {
        const { data, error } = await supabase
            .from('leaderboard')
            .select('*')
            .limit(50);
        
        if (error) throw error;
        return data || [];
    } catch (err) {
        console.error('Lỗi lấy bảng xếp hạng:', err);
        return [];
    }
};