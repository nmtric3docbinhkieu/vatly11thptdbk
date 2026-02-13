// ==============================================
// FILE: config.js
// ==============================================
// Cấu hình chung cho toàn bộ ứng dụng

window.CONFIG = {
    // Supabase configuration
    supabaseUrl: 'https://bxffaxcimeturttxqrme.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZmZheGNpbWV0dXJ0dHhxcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MDk1MzQsImV4cCI6MjA4NTk4NTUzNH0.uU3H707Qjfd2X4iQN3K9KKhsvNZkYn8v8zB_5lthzr0',
    
    // Mật khẩu giáo viên
    adminPassword: 'teacher123',
    
    // Thông tin các chương
    chapters: {
        1: { 
            name: 'Chương 1: Dao động cơ',
            color: 'blue',
            icon: 'fa-wave-square',
            description: 'Dao động điều hòa, con lắc lò xo, con lắc đơn'
        },
        2: { 
            name: 'Chương 2: Sóng cơ',
            color: 'green',
            icon: 'fa-water',
            description: 'Sóng cơ và sự truyền sóng, giao thoa sóng'
        },
        3: { 
            name: 'Chương 3: Điện trường',
            color: 'purple',
            icon: 'fa-bolt',
            description: 'Điện tích, điện trường, tụ điện'
        },
        4: { 
            name: 'Chương 4: Từ trường',
            color: 'orange',
            icon: 'fa-magnet',
            description: 'Từ trường, cảm ứng điện từ'
        }
    },
    
    // Cài đặt chung
    totalQuestionsPerChapter: 50,
    pointsPerCorrect: 10,
    storageKey: 'vatly11_student'
};

// Hàm tiện ích lấy Supabase client
window.getSupabase = function() {
    if (!window.CONFIG.supabaseUrl || window.CONFIG.supabaseUrl.includes('YOUR_PROJECT')) {
        console.error('❌ Supabase URL chưa được cấu hình!');
        return null;
    }
    if (!window.CONFIG.supabaseKey || window.CONFIG.supabaseKey.includes('YOUR_ANON_KEY')) {
        console.error('❌ Supabase Key chưa được cấu hình!');
        return null;
    }
    
    try {
        return window.supabase?.createClient(window.CONFIG.supabaseUrl, window.CONFIG.supabaseKey) || null;
    } catch (err) {
        console.error('❌ Lỗi khi tạo Supabase client:', err);
        return null;
    }
};