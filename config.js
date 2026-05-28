// ==============================================
// FILE: config.js
// ==============================================
// Cấu hình chung cho toàn bộ ứng dụng

window.CONFIG = {
    supabaseUrl: 'https://bxffaxcimeturttxqrme.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZmZheGNpbWV0dXJ0dHhxcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MDk1MzQsImV4cCI6MjA4NTk4NTUzNH0.uU3H707Qjfd2X4iQN3K9KKhsvNZkYn8v8zB_5lthzr0',
    adminPassword: 'teacher123',
    storageKey: 'vatly11_student',
    // THÊM CẤU HÌNH MỚI
    appSettings: {
        allowRegistration: true,           // Cho phép đăng ký
        requireApproval: true,             // Cần phê duyệt
        defaultApproved: false,             // Mặc định chưa được duyệt
        adminEmails: ['nmtri.c3docbinhkieu@dongthap.edu.vn']    // Email admin nhận thông báo
    },
    
    // Thông tin các chương
    chapters: {
        1: { 
            name: 'Dao động',
            color: 'blue',
            icon: 'fa-wave-square',
            description: 'Dao động điều hòa, con lắc lò xo, con lắc đơn'
        },
        2: { 
            name: 'Sóng',
            color: 'green',
            icon: 'fa-water',
            description: 'Sóng cơ và sự truyền sóng, giao thoa sóng'
        },
        3: { 
            name: 'Điện trường',
            color: 'purple',
            icon: 'fa-bolt',
            description: 'Điện tích, điện trường, tụ điện'
        },
        4: { 
            name: 'Dòng điện không đổi',
            color: 'orange',
            icon: 'fa-magnet',
            description: 'Từ trường, cảm ứng điện từ'
        }
    },
    
    // Cài đặt chung
    totalQuestionsPerChapter: 50,
    pointsPerCorrect: 10
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
    
    if (window.__supabaseClient) {
        return window.__supabaseClient;
    }

    try {
        window.__supabaseClient = window.supabase?.createClient(
            window.CONFIG.supabaseUrl,
            window.CONFIG.supabaseKey,
            {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false,
                    detectSessionInUrl: false
                },
                global: {
                    headers: {
                        'x-application-name': 'vatly11-web'
                    }
                }
            }
        ) || null;

        return window.__supabaseClient;
    } catch (err) {
        console.error('❌ Lỗi khi tạo Supabase client:', err);
        return null;
    }
};

// Chuẩn hóa thông báo lỗi Supabase để dễ debug khi project bị pause/sleep
window.getSupabaseFriendlyError = function(error) {
    const raw = (error?.message || error?.details || String(error || '')).toLowerCase();

    const isPaused =
        raw.includes('project has been paused') ||
        raw.includes('project is paused') ||
        raw.includes('upstream connect error') ||
        raw.includes('service temporarily unavailable') ||
        raw.includes('failed to fetch') ||
        raw.includes('networkerror');

    if (isPaused) {
        return 'Supabase co the dang o trang thai sleep/tam dung. Neu website vua bat lai sau thoi gian nghi he, hay doi 30-60 giay roi thu lai. Nen bat che do keep-alive de tranh bi tam dung.';
    }

    return error?.message || 'Loi ket noi Supabase khong xac dinh.';
};