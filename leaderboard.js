// ==============================================
// FILE: leaderboard.js
// ==============================================
// Xử lý bảng xếp hạng

window.fetchLeaderboard = async function() {
    const supabase = window.getSupabase();
    if (!supabase) return [];
    
    try {
        const { data, error } = await supabase
            .from('leaderboard_chapter3')
            .select('*')
            .limit(50);
        
        if (error) {
            console.error('Lỗi leaderboard:', error);
            return [];
        }
        
        return data || [];
    } catch (err) {
        console.error('Lỗi fetchLeaderboard:', err);
        return [];
    }
};