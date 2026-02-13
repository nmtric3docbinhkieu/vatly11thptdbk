// ==============================================
// FILE: database-index.js
// ==============================================
// File tổng hợp tất cả câu hỏi từ các chương

// Hàm lấy câu hỏi theo chương
window.getQuestionsByChapter = function(chapter, count = 50) {
    let questions = [];
    
    switch(chapter) {
        case 1:
            questions = window.questionsChapter1 || [];
            break;
        case 2:
            questions = window.questionsChapter2 || [];
            break;
        case 3:
            questions = window.questionsChapter3 || [];
            break;
        case 4:
            questions = window.questionsChapter4 || [];
            break;
        default:
            questions = window.questionsChapter3 || [];
    }
    
    // Nếu không đủ câu hỏi, tạo câu hỏi mẫu
    if (questions.length < count) {
        console.warn(`Chương ${chapter} chỉ có ${questions.length} câu, thiếu ${count - questions.length} câu`);
        // Tạo câu hỏi mẫu cho số câu còn thiếu
        for (let i = questions.length; i < count; i++) {
            questions.push({
                q: `Câu hỏi mẫu chương ${chapter} - ${i+1}`,
                options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
                a: 0,
                expl: "Đây là câu hỏi mẫu. Vui lòng cập nhật câu hỏi thực tế."
            });
        }
    }
    
    // Trộn ngẫu nhiên và lấy đủ số lượng
    return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
};

// Hàm lấy tóm tắt kiến thức theo chương
window.getChapterSummary = function(chapter) {
    const summaries = {
        1: {
            title: "DAO ĐỘNG CƠ",
            topics: [
                { title: "Dao động điều hòa", content: "Phương trình: $x = A\\cos(\\omega t + \\varphi)$" },
                { title: "Con lắc lò xo", content: "Tần số góc: $\\omega = \\sqrt{\\frac{k}{m}}$" },
                { title: "Con lắc đơn", content: "Tần số góc: $\\omega = \\sqrt{\\frac{g}{l}}$" },
                { title: "Năng lượng", content: "$W = \\frac{1}{2}m\\omega^2A^2$" }
            ]
        },
        2: {
            title: "SÓNG CƠ",
            topics: [
                { title: "Đại cương sóng cơ", content: "Bước sóng: $\\lambda = vT = \\frac{v}{f}$" },
                { title: "Giao thoa sóng", content: "Điều kiện: $d_2 - d_1 = k\\lambda$" },
                { title: "Sóng dừng", content: "Nút sóng, bụng sóng" }
            ]
        },
        3: {
            title: "ĐIỆN TRƯỜNG",
            topics: [
                { title: "Định luật Coulomb", content: "$F = k\\frac{|q_1q_2|}{\\varepsilon r^2}$" },
                { title: "Cường độ điện trường", content: "$E = k\\frac{|Q|}{r^2}$" },
                { title: "Công - Điện thế", content: "$A = q(V_M - V_N)$" },
                { title: "Tụ điện", content: "$C = \\frac{Q}{U}$" }
            ]
        },
        4: {
            title: "TỪ TRƯỜNG",
            topics: [
                { title: "Từ trường", content: "Cảm ứng từ: $\\vec{B}$" },
                { title: "Lực từ", content: "$F = BIl\\sin\\alpha$" },
                { title: "Cảm ứng điện từ", content: "Suất điện động cảm ứng" }
            ]
        }
    };
    
    return summaries[chapter] || summaries[3];
};