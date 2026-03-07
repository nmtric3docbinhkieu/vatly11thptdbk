// ==============================================
// FILE: database-chapter4.js
// ==============================================
// Ngân hàng câu hỏi chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// 38 câu hỏi theo 4 dạng của Công văn 7991/BGDĐT-GDTrH
// ==============================================

window.questionsChapter4 = [
    // ============================================
    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (16 CÂU)
    // ============================================
    
    // Câu 1 (NB - Bài 16)
    {
        type: "multiple-choice",
        q: "Dòng điện là:",
        options: [
            "Dòng dịch chuyển có hướng của các điện tích",
            "Dòng chuyển động của các electron",
            "Dòng chuyển động của các ion dương",
            "Dòng chuyển động của các điện tích tự do"
        ],
        a: 0,
        expl: "Dòng điện là dòng dịch chuyển có hướng của các điện tích."
    },
    
    // Câu 2 (NB - Bài 16)
    {
        type: "multiple-choice",
        q: "Cường độ dòng điện không đổi được xác định bằng công thức:",
        options: [
            "$I = \\frac{q}{t}$",
            "$I = \\frac{U}{R}$",
            "$I = \\frac{A}{q}$",
            "$I = \\frac{P}{U}$"
        ],
        a: 0,
        expl: "Cường độ dòng điện không đổi: $I = \\frac{q}{t}$."
    },
    
    // Câu 3 (NB - Bài 16)
    {
        type: "multiple-choice",
        q: "Chiều dòng điện được quy ước là:",
        options: [
            "Chiều dịch chuyển có hướng của các điện tích dương",
            "Chiều dịch chuyển có hướng của các điện tích âm",
            "Chiều dịch chuyển có hướng của các electron",
            "Chiều dịch chuyển có hướng của các ion"
        ],
        a: 0,
        expl: "Chiều dòng điện được quy ước là chiều dịch chuyển có hướng của các điện tích dương (ngược với chiều dịch chuyển của electron)."
    },
    
    // Câu 4 (TH - Bài 16)
    {
        type: "multiple-choice",
        q: "Đơn vị của cường độ dòng điện trong hệ SI là:",
        options: ["Ampe (A)", "Vôn (V)", "Ôm (Ω)", "Oát (W)"],
        a: 0,
        expl: "Cường độ dòng điện có đơn vị là ampe (A)."
    },
    
    // Câu 5 (TH - Bài 16)
    {
        type: "multiple-choice",
        q: "Dòng điện không đổi là dòng điện có:",
        options: [
            "Chiều và cường độ không thay đổi theo thời gian",
            "Chiều không đổi, cường độ thay đổi theo thời gian",
            "Chiều thay đổi, cường độ không đổi",
            "Chiều và cường độ luôn thay đổi"
        ],
        a: 0,
        expl: "Dòng điện không đổi là dòng điện có chiều và cường độ không thay đổi theo thời gian."
    },
    
    // Câu 6 (NB - Bài 17)
    {
        type: "multiple-choice",
        q: "Điện trở của một vật dẫn được xác định bằng công thức:",
        options: ["$R = \\frac{U}{I}$", "$R = \\frac{I}{U}$", "$R = U.I$", "$R = \\frac{U^2}{I}$"],
        a: 0,
        expl: "Điện trở $R = \\frac{U}{I}$."
    },
    
    // Câu 7 (NB - Bài 17)
    {
        type: "multiple-choice",
        q: "Đơn vị của điện trở trong hệ SI là:",
        options: ["Ôm (Ω)", "Ampe (A)", "Vôn (V)", "Oát (W)"],
        a: 0,
        expl: "Điện trở có đơn vị là ôm (Ω): $1 \\Omega = 1 V/A$."
    },
    
    // Câu 8 (TH - Bài 17)
    {
        type: "multiple-choice",
        q: "Phát biểu nào sau đây là **đúng** với nội dung định luật Ohm?",
        options: [
            "Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn và tỉ lệ nghịch với điện trở của dây.",
            "Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với điện trở của dây dẫn.",
            "Cường độ dòng điện chạy qua dây dẫn tỉ lệ nghịch với hiệu điện thế đặt vào hai đầu dây dẫn.",
            "Cường độ dòng điện chạy qua dây dẫn không phụ thuộc vào hiệu điện thế."
        ],
        a: 0,
        expl: "Định luật Ohm: $I = \\frac{U}{R}$, cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở."
    },
    
    // Câu 9 (NB - Bài 17)
    {
        type: "multiple-choice",
        q: "Điện trở của một dây dẫn kim loại phụ thuộc vào yếu tố nào?",
        options: [
            "Chiều dài, tiết diện và bản chất vật liệu.",
            "Chiều dài và hiệu điện thế.",
            "Tiết diện và cường độ dòng điện.",
            "Bản chất vật liệu và thời gian dòng điện chạy qua."
        ],
        a: 0,
        expl: "$R = \\rho \\frac{l}{S}$, phụ thuộc vào điện trở suất $\\rho$ (bản chất vật liệu), chiều dài $l$, tiết diện $S$."
    },
    
    // Câu 10 (TH - Bài 17)
    {
        type: "multiple-choice",
        q: "Điện trở suất của vật liệu càng lớn thì:",
        options: [
            "Vật liệu dẫn điện càng kém.",
            "Vật liệu dẫn điện càng tốt.",
            "Vật liệu có khả năng cách điện càng kém.",
            "Vật liệu có khối lượng riêng càng lớn."
        ],
        a: 0,
        expl: "Điện trở suất đặc trưng cho khả năng cản trở dòng điện. Điện trở suất càng lớn, vật dẫn điện càng kém."
    },
    
    // Câu 11 (NB - Bài 18)
    {
        type: "multiple-choice",
        q: "Suất điện động của nguồn điện đặc trưng cho:",
        options: [
            "Khả năng sinh công của nguồn điện.",
            "Khả năng tích điện của nguồn điện.",
            "Khả năng tác dụng lực của nguồn điện.",
            "Khả năng dự trữ năng lượng của nguồn điện."
        ],
        a: 0,
        expl: "Suất điện động của nguồn điện là đại lượng vật lí đặc trưng cho khả năng sinh công của nguồn điện."
    },
    
    // Câu 12 (NB - Bài 18)
    {
        type: "multiple-choice",
        q: "Công thức tính suất điện động của nguồn điện là:",
        options: [
            "$\\mathcal{E} = \\frac{A}{q}$",
            "$\\mathcal{E} = \\frac{q}{A}$",
            "$\\mathcal{E} = A.q$",
            "$\\mathcal{E} = \\frac{U}{I}$"
        ],
        a: 0,
        expl: "$\\mathcal{E} = \\frac{A}{q}$, với $A$ là công của lực lạ làm di chuyển điện tích $q$ từ cực âm đến cực dương bên trong nguồn điện."
    },
    
    // Câu 13 (TH - Bài 18)
    {
        type: "multiple-choice",
        q: "Mắc hai đầu một nguồn điện có suất điện động ε và điện trở trong r vào một mạch điện kín. Hiệu điện thế giữa hai cực của nguồn điện là:",
        options: [
            "$U = \\varepsilon - Ir$",
            "$U = \\varepsilon + Ir$",
            "$U = \\frac{\\varepsilon}{r}$",
            "$U = \\varepsilon$"
        ],
        a: 0,
        expl: "$U = \\varepsilon - Ir$, với $r$ là điện trở trong của nguồn."
    },
    
    // Câu 14 (TH - Bài 18)
    {
        type: "multiple-choice",
        q: "Khi mạch ngoài hở, hiệu điện thế giữa hai cực của nguồn điện:",
        options: [
            "Bằng suất điện động của nguồn.",
            "Lớn hơn suất điện động của nguồn.",
            "Nhỏ hơn suất điện động của nguồn.",
            "Bằng 0."
        ],
        a: 0,
        expl: "Khi mạch hở, không có dòng điện, hiệu điện thế giữa hai cực bằng suất điện động của nguồn."
    },
    
    // Câu 15 (NB - Bài 19)
    {
        type: "multiple-choice",
        q: "Công thức tính công suất tiêu thụ điện của một đoạn mạch là:",
        options: ["$P = UI$", "$P = \\frac{U}{I}$", "$P = \\frac{I}{U}$", "$P = \\frac{U}{I^2}$"],
        a: 0,
        expl: "Công suất $P = UI$."
    },
    
    // Câu 16 (NB - Bài 19)
    {
        type: "multiple-choice",
        q: "Đơn vị của công suất điện trong hệ SI là:",
        options: ["Oát (W)", "Jun (J)", "Vôn (V)", "Ampe (A)"],
        a: 0,
        expl: "Công suất có đơn vị là oát (W)."
    },
    
    // ============================================
    // DẠNG 2: TRẮC NGHIỆM ĐÚNG - SAI (8 CÂU)
    // ============================================
    
    // Câu 17 (Bài 16)
    {
        type: "true-false",
        q: "Cho dòng điện không đổi có cường độ I = 2 A chạy qua một dây dẫn kim loại. Biết điện tích electron là e = 1,6.10⁻¹⁹ C.",
        parts: [
            { content: "Điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn trong 5 giây là 10 C.", correct: true },
            { content: "Số electron dịch chuyển qua tiết diện thẳng trong 1 giây là 1,25.10¹⁹ hạt.", correct: true },
            { content: "Chiều dòng điện trong dây dẫn kim loại cùng chiều với chiều dịch chuyển của các electron.", correct: false },
            { content: "Nếu mật độ electron trong dây dẫn là n = 8,5.10²⁸ hạt/m³ và tiết diện dây là 2 mm² thì vận tốc trôi của electron xấp xỉ 0,074 mm/s.", correct: true }
        ],
        expl: "a) q = I.t = 2.5 = 10 C → Đúng. b) N = I/e = 2/(1,6.10⁻¹⁹) = 1,25.10¹⁹ → Đúng. c) Trong kim loại, chiều dòng điện ngược chiều electron → Sai. d) v = I/(nSe) = 2/(8,5.10²⁸.2.10⁻⁶.1,6.10⁻¹⁹) ≈ 0,074 mm/s → Đúng."
    },
    
    // Câu 18 (Bài 16)
    {
        type: "true-false",
        q: "Một dòng điện không đổi chạy qua một dây dẫn kim loại. Biết trong thời gian 2 phút, điện lượng dịch chuyển qua tiết diện thẳng của dây là 120 C.",
        parts: [
            { content: "Cường độ dòng điện qua dây dẫn là 1 A.", correct: true },
            { content: "Số electron dịch chuyển qua tiết diện thẳng trong 1 giây là 6,25.10¹⁸ hạt.", correct: true },
            { content: "Nếu thời gian dòng điện chạy tăng lên gấp đôi thì điện lượng dịch chuyển cũng tăng gấp đôi.", correct: true },
            { content: "Nếu tiết diện dây dẫn tăng lên 2 lần, các yếu tố khác không đổi thì vận tốc trôi của electron giảm 2 lần.", correct: true }
        ],
        expl: "a) I = q/t = 120/120 = 1 A → Đúng. b) N = I/e = 1/(1,6.10⁻¹⁹) = 6,25.10¹⁸ → Đúng. c) q = I.t, I không đổi, t tăng 2 lần → q tăng 2 lần → Đúng. d) v = I/(nSe), S tăng 2 lần → v giảm 2 lần → Đúng."
    },
    
    // Câu 19 (Bài 17)
    {
        type: "true-false",
        q: "Một dây dẫn bằng đồng có chiều dài 100 m, tiết diện 2 mm². Điện trở suất của đồng là ρ = 1,7.10⁻⁸ Ωm.",
        parts: [
            { content: "Điện trở của dây dẫn được tính bằng công thức $R = \\rho \\frac{\\ell}{S}$.", correct: true },
            { content: "Điện trở của dây dẫn trên có giá trị 0,85 Ω.", correct: true },
            { content: "Nếu đặt hiệu điện thế 12 V vào hai đầu dây thì cường độ dòng điện qua dây xấp xỉ 14,12 A.", correct: true },
            { content: "Đường đặc trưng vôn-ampe của dây dẫn kim loại ở nhiệt độ không đổi là một đường cong đi qua gốc tọa độ.", correct: false }
        ],
        expl: "a) Công thức đúng → Đúng. b) R = 1,7.10⁻⁸ × 100/(2.10⁻⁶) = 0,85 Ω → Đúng. c) I = U/R = 12/0,85 ≈ 14,12 A → Đúng. d) Đường đặc trưng vôn-ampe là đường thẳng, không phải đường cong → Sai."
    },
    
    // Câu 20 (Bài 17)
    {
        type: "true-false",
        q: "Một dây dẫn bằng nhôm có điện trở suất ρ = 2,8.10⁻⁸ Ωm, chiều dài 50 m, tiết diện 0,5 mm².",
        parts: [
            { content: "Điện trở của dây dẫn là 2,8 Ω.", correct: true },
            { content: "Nếu tăng chiều dài dây lên 2 lần thì điện trở tăng 2 lần.", correct: true },
            { content: "Nếu tăng tiết diện dây lên 2 lần thì điện trở giảm 2 lần.", correct: true },
            { content: "Nếu thay dây nhôm bằng dây đồng có cùng kích thước thì điện trở giảm.", correct: true }
        ],
        expl: "a) R = 2,8.10⁻⁸ × 50/(0,5.10⁻⁶) = 2,8 Ω → Đúng. b) R ∼ l → Đúng. c) R ∼ 1/S → Đúng. d) Đồng có điện trở suất nhỏ hơn nhôm → Đúng."
    },
    
    // Câu 21 (Bài 18)
    {
        type: "true-false",
        q: "Một nguồn điện có suất điện động ε = 12 V và điện trở trong r = 1 Ω được mắc với mạch ngoài là điện trở R = 5 Ω tạo thành mạch kín.",
        parts: [
            { content: "Cường độ dòng điện trong mạch là 2 A.", correct: true },
            { content: "Hiệu điện thế giữa hai cực của nguồn điện là 10 V.", correct: true },
            { content: "Công của lực lạ khi dịch chuyển điện tích 5 C bên trong nguồn là 60 J.", correct: true },
            { content: "Nếu nối tắt hai cực của nguồn bằng dây dẫn có điện trở không đáng kể thì cường độ dòng điện trong mạch là 12 A.", correct: true }
        ],
        expl: "a) I = ε/(R+r) = 12/(5+1) = 2 A → Đúng. b) U = ε - Ir = 12 - 2.1 = 10 V → Đúng. c) A = ε.q = 12.5 = 60 J → Đúng. d) Khi nối tắt, I = ε/r = 12/1 = 12 A → Đúng."
    },
    
    // Câu 22 (Bài 18)
    {
        type: "true-false",
        q: "Một nguồn điện có suất điện động ε = 24 V, điện trở trong r = 2 Ω. Mắc nguồn với mạch ngoài là điện trở R.",
        parts: [
            { content: "Khi R = 10 Ω, cường độ dòng điện trong mạch là 2 A.", correct: true },
            { content: "Khi R = 10 Ω, hiệu điện thế hai cực nguồn là 20 V.", correct: true },
            { content: "Khi R = 0 (ngắn mạch), cường độ dòng điện trong mạch là 12 A.", correct: true },
            { content: "Hiệu suất của nguồn khi R = 10 Ω là khoảng 83,3%.", correct: true }
        ],
        expl: "a) I = 24/(10+2) = 2 A → Đúng. b) U = 24 - 2.2 = 20 V → Đúng. c) I = 24/2 = 12 A → Đúng. d) H = U/ε = 20/24 = 0,833 = 83,3% → Đúng."
    },
    
    // Câu 23 (Bài 19)
    {
        type: "true-false",
        q: "Một bóng đèn có ghi 220V - 100W được mắc vào hiệu điện thế 220 V.",
        parts: [
            { content: "Điện trở của đèn khi hoạt động bình thường là 484 Ω.", correct: true },
            { content: "Cường độ dòng điện qua đèn khi hoạt động bình thường xấp xỉ 0,455 A.", correct: true },
            { content: "Nhiệt lượng tỏa ra trên đèn trong 1 giờ là 360.000 J.", correct: true },
            { content: "Nếu mắc đèn vào hiệu điện thế 110 V, công suất tiêu thụ của đèn là 50 W.", correct: false }
        ],
        expl: "a) R = U²/P = 220²/100 = 484 Ω → Đúng. b) I = P/U = 100/220 ≈ 0,455 A → Đúng. c) Q = P.t = 100.3600 = 360.000 J → Đúng. d) Khi U giảm 2 lần, P giảm 4 lần → P = 25 W, không phải 50 W → Sai."
    },
    
    // Câu 24 (Bài 19)
    {
        type: "true-false",
        q: "Một bếp điện có điện trở 40 Ω hoạt động với hiệu điện thế 220 V.",
        parts: [
            { content: "Công suất của bếp là 1210 W.", correct: true },
            { content: "Cường độ dòng điện qua bếp là 5,5 A.", correct: true },
            { content: "Nhiệt lượng bếp tỏa ra trong 30 phút là 2.178.000 J.", correct: true },
            { content: "Nếu mắc bếp vào hiệu điện thế 110 V, công suất giảm 4 lần so với ban đầu.", correct: true }
        ],
        expl: "a) P = U²/R = 220²/40 = 48400/40 = 1210 W → Đúng. b) I = U/R = 220/40 = 5,5 A → Đúng. c) Q = P.t = 1210.1800 = 2.178.000 J → Đúng. d) P ∼ U², U giảm 2 lần → P giảm 4 lần → Đúng."
    },
    
    // ============================================
    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (8 CÂU)
    // ============================================
    
    // Câu 25 (Bài 16)
    {
        type: "short-answer",
        q: "Dòng điện không đổi có cường độ 1,5 A chạy qua một dây dẫn. Tính số electron dịch chuyển qua tiết diện thẳng của dây dẫn trong 1 phút. (Điền kết quả dưới dạng a.bc × 10²⁰)",
        answer: "5,62 × 10²⁰",
        expl: "Điện lượng: q = I.t = 1,5.60 = 90 C. Số electron: N = q/e = 90/(1,6.10⁻¹⁹) = 5,625.10²⁰ hạt."
    },
    
    // Câu 26 (Bài 16)
    {
        type: "short-answer",
        q: "Một dây dẫn kim loại có tiết diện 1 mm², mật độ electron tự do là 8,5.10²⁸ hạt/m³. Dòng điện qua dây có cường độ 2 A. Tính vận tốc trôi của electron. (Đơn vị: mm/s, lấy 2 chữ số thập phân)",
        answer: "0,15 mm/s",
        expl: "v = I/(nSe) = 2/(8,5.10²⁸ × 10⁻⁶ × 1,6.10⁻¹⁹) = 2/(13,6.10³) = 1,47.10⁻⁴ m/s = 0,147 mm/s ≈ 0,15 mm/s"
    },
    
    // Câu 27 (Bài 17)
    {
        type: "short-answer",
        q: "Một dây dẫn bằng nhôm có điện trở suất ρ = 2,8.10⁻⁸ Ωm, chiều dài 200 m, tiết diện 1 mm². Tính điện trở của dây dẫn này. (Đơn vị: Ω)",
        answer: "5,6 Ω",
        expl: "R = ρ.l/S = 2,8.10⁻⁸ × 200/(1.10⁻⁶) = 2,8.10⁻⁸ × 2.10⁸ = 5,6 Ω"
    },
    
    // Câu 28 (Bài 17)
    {
        type: "short-answer",
        q: "Một dây dẫn bằng đồng có điện trở 10 Ω ở 20°C. Biết hệ số nhiệt điện trở của đồng là 0,004 K⁻¹. Tính điện trở của dây dẫn ở 50°C. (Đơn vị: Ω, lấy 1 chữ số thập phân)",
        answer: "11,2 Ω",
        expl: "R_t = R₀[1 + α(t - t₀)] = 10[1 + 0,004.(50-20)] = 10(1 + 0,12) = 11,2 Ω"
    },
    
    // Câu 29 (Bài 18)
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 24 V và điện trở trong 2 Ω. Mắc nguồn với một điện trở R = 10 Ω thành mạch kín. Tính hiệu điện thế giữa hai cực của nguồn. (Đơn vị: V)",
        answer: "20 V",
        expl: "I = ε/(R+r) = 24/(10+2) = 2 A; U = ε - Ir = 24 - 2.2 = 20 V"
    },
    
    // Câu 30 (Bài 18)
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 12 V. Khi mắc nguồn với mạch ngoài là điện trở R = 5 Ω thì hiệu điện thế hai cực nguồn là 10 V. Tính điện trở trong của nguồn. (Đơn vị: Ω)",
        answer: "1 Ω",
        expl: "I = U/R = 10/5 = 2 A; r = (ε - U)/I = (12 - 10)/2 = 1 Ω"
    },
    
    // Câu 31 (Bài 19)
    {
        type: "short-answer",
        q: "Một bếp điện có điện trở 50 Ω hoạt động với hiệu điện thế 220 V. Tính nhiệt lượng mà bếp tỏa ra trong 15 phút. (Đơn vị: kJ, lấy số nguyên)",
        answer: "871 kJ",
        expl: "P = U²/R = 220²/50 = 48400/50 = 968 W; Q = P.t = 968 × 15 × 60 = 871.200 J = 871,2 kJ ≈ 871 kJ"
    },
    
    // Câu 32 (Bài 19)
    {
        type: "short-answer",
        q: "Một động cơ điện có công suất 500 W hoạt động liên tục trong 2 giờ. Tính điện năng tiêu thụ. (Đơn vị: kWh)",
        answer: "1 kWh",
        expl: "A = P.t = 0,5 kW × 2 h = 1 kWh"
    },
    
    // ============================================
    // DẠNG 4: TỰ LUẬN (6 CÂU)
    // ============================================
    
    // Câu 33 (Bài 16 - 2 điểm)
    {
        type: "essay",
        q: "Một dòng điện không đổi có cường độ 3 A chạy qua một dây dẫn kim loại.\na) Tính điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn trong 2 phút.\nb) Tính số electron dịch chuyển qua tiết diện thẳng trong thời gian trên.\nc) Biết dây dẫn có tiết diện 1,5 mm², mật độ electron tự do là 8,5.10²⁸ hạt/m³. Tính vận tốc trôi của electron.",
        answer: "a) q = I.t = 3 × 120 = 360 C\nb) N = q/e = 360/(1,6.10⁻¹⁹) = 2,25.10²¹ hạt\nc) v = I/(nSe) = 3/(8,5.10²⁸ × 1,5.10⁻⁶ × 1,6.10⁻¹⁹) = 3/(20,4.10³) = 1,47.10⁻⁴ m/s = 0,147 mm/s",
        expl: "Áp dụng công thức I = q/t → q = I.t. Số electron N = q/e. Vận tốc trôi v = I/(nSe)."
    },
    
    // Câu 34 (Bài 16 - 2 điểm)
    {
        type: "essay",
        q: "Một dây dẫn kim loại có tiết diện 2 mm², mật độ electron tự do là 8,5.10²⁸ hạt/m³. Khi có dòng điện chạy qua, vận tốc trôi của electron là 0,1 mm/s.\na) Tính cường độ dòng điện qua dây.\nb) Tính điện lượng dịch chuyển qua tiết diện thẳng của dây trong 10 phút.\nc) Tính số electron dịch chuyển qua tiết diện thẳng trong thời gian trên.",
        answer: "a) I = nSve = 8,5.10²⁸ × 2.10⁻⁶ × 0,1.10⁻³ × 1,6.10⁻¹⁹ = 8,5.10²⁸ × 2.10⁻⁶ × 10⁻⁴ × 1,6.10⁻¹⁹ = 8,5 × 2 × 1,6 × 10⁻¹ = 27,2 × 10⁻¹ = 2,72 A\nb) q = I.t = 2,72 × 600 = 1632 C\nc) N = q/e = 1632/(1,6.10⁻¹⁹) = 1,02.10²² hạt",
        expl: "Áp dụng công thức I = nSve, q = I.t, N = q/e."
    },
    
    // Câu 35 (Bài 17 - 2 điểm)
    {
        type: "essay",
        q: "Một dây dẫn bằng constantan có chiều dài 50 m, tiết diện 0,5 mm². Điện trở suất của constantan là 0,5.10⁻⁶ Ωm.\na) Tính điện trở của dây dẫn.\nb) Nếu đặt hiệu điện thế 24 V vào hai đầu dây, tính cường độ dòng điện qua dây.\nc) Mắc dây dẫn này vào một nguồn điện có suất điện động 30 V, điện trở trong 2 Ω. Tính cường độ dòng điện trong mạch và hiệu điện thế giữa hai đầu dây.",
        answer: "a) R = ρ.l/S = 0,5.10⁻⁶ × 50/(0,5.10⁻⁶) = 0,5.10⁻⁶ × 10⁸ = 50 Ω\nb) I = U/R = 24/50 = 0,48 A\nc) I = ε/(R+r) = 30/(50+2) = 30/52 ≈ 0,577 A; U = I.R = 0,577 × 50 ≈ 28,85 V (hoặc U = ε - Ir = 30 - 0,577.2 = 28,85 V)",
        expl: "Áp dụng công thức R = ρ.l/S, định luật Ohm I = U/R, và công thức mạch kín."
    },
    
    // Câu 36 (Bài 18 - 2 điểm)
    {
        type: "essay",
        q: "Cho mạch điện gồm nguồn điện có suất điện động ε = 18 V, điện trở trong r = 1 Ω, mạch ngoài gồm điện trở R₁ = 4 Ω và R₂ = 5 Ω mắc nối tiếp.\na) Tính cường độ dòng điện trong mạch.\nb) Tính hiệu điện thế giữa hai đầu mỗi điện trở.\nc) Tính công suất của nguồn và công suất tiêu thụ ở mạch ngoài.\nd) Tính hiệu suất của nguồn điện.",
        answer: "a) R_N = R₁ + R₂ = 4 + 5 = 9 Ω; I = ε/(R_N + r) = 18/(9 + 1) = 18/10 = 1,8 A\nb) U₁ = I.R₁ = 1,8.4 = 7,2 V; U₂ = I.R₂ = 1,8.5 = 9 V; U = U₁ + U₂ = 7,2 + 9 = 16,2 V\nc) P_ng = ε.I = 18.1,8 = 32,4 W; P = U.I = 16,2.1,8 = 29,16 W\nd) H = U/ε = 16,2/18 = 0,9 = 90%",
        expl: "Áp dụng định luật Ohm cho mạch kín và các công thức công suất."
    },
    
    // Câu 37 (Bài 18 - 2 điểm)
    {
        type: "essay",
        q: "Cho mạch điện gồm hai nguồn điện ghép nối tiếp, mỗi nguồn có suất điện động 6 V và điện trở trong 0,5 Ω. Mạch ngoài gồm điện trở R₁ = 8 Ω và R₂ = 12 Ω mắc song song.\na) Tính suất điện động và điện trở trong của bộ nguồn.\nb) Tính điện trở tương đương mạch ngoài.\nc) Tính cường độ dòng điện qua mạch chính.\nd) Tính hiệu điện thế giữa hai đầu mỗi điện trở.",
        answer: "a) ε_b = ε₁ + ε₂ = 6 + 6 = 12 V; r_b = r₁ + r₂ = 0,5 + 0,5 = 1 Ω\nb) 1/R_N = 1/R₁ + 1/R₂ = 1/8 + 1/12 = (3+2)/24 = 5/24 → R_N = 24/5 = 4,8 Ω\nc) I = ε_b/(R_N + r_b) = 12/(4,8 + 1) = 12/5,8 ≈ 2,07 A\nd) U = I.R_N = 2,07 × 4,8 ≈ 9,94 V; Vì R₁ // R₂ nên U₁ = U₂ = U = 9,94 V",
        expl: "Áp dụng công thức ghép nguồn nối tiếp, ghép điện trở song song và định luật Ohm."
    },
    
    // Câu 38 (Bài 19 - 2 điểm)
    {
        type: "essay",
        q: "Một bình nóng lạnh có ghi 220V - 2000W được sử dụng với hiệu điện thế 220 V.\na) Tính điện trở của bình nóng lạnh.\nb) Tính cường độ dòng điện qua bình.\nc) Tính tiền điện phải trả cho việc sử dụng bình trong 30 ngày, mỗi ngày 45 phút, biết giá điện là 2.500 đồng/kWh.\nd) Giả sử dây đốt nóng của bình được làm bằng niken có điện trở suất 0,4.10⁻⁶ Ωm, tiết diện 0,5 mm². Tính chiều dài của dây đốt nóng.",
        answer: "a) R = U²/P = 220²/2000 = 48400/2000 = 24,2 Ω\nb) I = P/U = 2000/220 ≈ 9,09 A\nc) t = 30 × 45 × 60 = 81.000 s = 22,5 giờ; A = P.t = 2 × 22,5 = 45 kWh; Tiền = 45 × 2500 = 112.500 đồng\nd) l = R.S/ρ = (24,2 × 0,5.10⁻⁶)/(0,4.10⁻⁶) = 12,1/0,4 = 30,25 m",
        expl: "Áp dụng các công thức về công suất, điện năng tiêu thụ và điện trở dây dẫn."
    }
];