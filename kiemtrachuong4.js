// ==============================================
// FILE: kiemtrachuong4-fixed.js - 40 câu hoàn chỉnh
// ==============================================
// Ngân hàng câu hỏi kiểm tra chương 4: Dòng điện không đổi
// Vật lí 11 - Năm học 2025-2026
// Cấu trúc: 
// - Phần I: Trắc nghiệm nhiều lựa chọn (24 câu)
//   + Bài 16: Dòng điện - Cường độ dòng điện (5 câu)
//   + Bài 17: Điện trở - Định luật Ohm (6 câu)
//   + Bài 18: Nguồn điện - Suất điện động (5 câu)
//   + Bài 19: Công suất - Điện năng (4 câu)
//   + Bài 20: Ghép nguồn điện - Đoạn mạch (4 câu)
// - Phần II: Đúng - Sai (4 câu)
// - Phần III: Trả lời ngắn (8 câu)
// - Phần IV: Tự luận (4 câu)
// ==============================================

window.questionsKTChuong4 = [
    // ============================================
    // PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (24 CÂU)
    // ============================================
    
    // ========== BÀI 16: DÒNG ĐIỆN - CƯỜNG ĐỘ DÒNG ĐIỆN (5 CÂU) ==========
    
    // Câu 1 (NB - Bài 16)
    {
        type: "multiple-choice",
        q: "Dòng điện là:",
        options: [
            "Dòng dịch chuyển có hướng của các điện tích.",
            "Dòng chuyển động của các electron.",
            "Dòng chuyển động của các ion dương.",
            "Dòng chuyển động hỗn loạn của các phân tử."
        ],
        a: 0,
        expl: "Dòng điện là dòng dịch chuyển có hướng của các điện tích."
    },
    
    // Câu 2 (NB - Bài 16)
    {
        type: "multiple-choice",
        q: "Chiều dòng điện được quy ước là chiều dịch chuyển có hướng của:",
        options: [
            "Các electron.",
            "Các điện tích dương.",
            "Các ion âm.",
            "Các hạt nhân nguyên tử."
        ],
        a: 1,
        expl: "Chiều dòng điện được quy ước là chiều dịch chuyển có hướng của các điện tích dương."
    },
    
    // Câu 3 (NB - Bài 16)
    {
        type: "multiple-choice",
        q: "Trong dây dẫn kim loại, dòng điện là dòng dịch chuyển có hướng của:",
        options: [
            "Các ion dương.",
            "Các ion âm.",
            "Các electron tự do.",
            "Các nguyên tử kim loại."
        ],
        a: 2,
        expl: "Trong kim loại, dòng điện được tạo ra bởi sự dịch chuyển có hướng của các electron tự do."
    },
    
    // Câu 4 (NB - Bài 16)
    {
        type: "multiple-choice",
        q: "Đơn vị của cường độ dòng điện trong hệ SI là:",
        options: ["Vôn (V)", "Ôm (Ω)", "Oát (W)", "Ampe (A)"],
        a: 3,
        expl: "Cường độ dòng điện có đơn vị là ampe (A)."
    },
    
    // Câu 5 (TH - Bài 16)
    {
        type: "multiple-choice",
        q: "Dòng điện không đổi là dòng điện có:",
        options: [
            "Chiều thay đổi, cường độ không đổi.",
            "Chiều không đổi, cường độ thay đổi.",
            "Chiều và cường độ không thay đổi theo thời gian.",
            "Chiều và cường độ luôn thay đổi."
        ],
        a: 2,
        expl: "Dòng điện không đổi là dòng điện có chiều và cường độ không thay đổi theo thời gian."
    },
    
    // ========== BÀI 17: ĐIỆN TRỞ - ĐỊNH LUẬT OHM (6 CÂU) ==========
    
    // Câu 6 (NB - Bài 17)
    {
        type: "multiple-choice",
        q: "Điện trở của một vật dẫn đặc trưng cho tính chất gì?",
        options: [
            "Khả năng tích điện của vật dẫn.",
            "Khả năng dẫn điện tốt của vật dẫn.",
            "Khả năng cản trở dòng điện của vật dẫn.",
            "Khả năng sinh công của vật dẫn."
        ],
        a: 2,
        expl: "Điện trở đặc trưng cho khả năng cản trở dòng điện của vật dẫn."
    },
    
    // Câu 7 (NB - Bài 17)
    {
        type: "multiple-choice",
        q: "Đơn vị của điện trở trong hệ SI là:",
        options: ["Vôn (V)", "Ampe (A)", "Oát (W)", "Ôm (Ω)"],
        a: 3,
        expl: "Điện trở có đơn vị là ôm (Ω): 1 Ω = 1 V/A."
    },
    
    // Câu 8 (NB - Bài 17)
    {
        type: "multiple-choice",
        q: "Định luật Ôm cho đoạn mạch chỉ chứa điện trở thuần phát biểu rằng:",
        options: [
            "Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở.",
            "Cường độ dòng điện tỉ lệ nghịch với hiệu điện thế và tỉ lệ thuận với điện trở.",
            "Cường độ dòng điện tỉ lệ thuận với cả hiệu điện thế và điện trở.",
            "Cường độ dòng điện không phụ thuộc vào hiệu điện thế."
        ],
        a: 0,
        expl: "Định luật Ôm: I = U/R, I tỉ lệ thuận với U, tỉ lệ nghịch với R."
    },
    
    // Câu 9 (TH - Bài 17)
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở của một dây dẫn kim loại đồng chất, tiết diện đều là:",
        options: [
            "$R = \\rho \\frac{S}{l}$",
            "$R = \\rho \\frac{l}{S}$",
            "$R = \\frac{l}{\\rho S}$",
            "$R = \\frac{S}{\\rho l}$"
        ],
        a: 1,
        expl: "Điện trở dây dẫn: $R = \\rho \\frac{l}{S}$."
    },
    
    // Câu 10 (TH - Bài 17)
    {
        type: "multiple-choice",
        q: "Khi nhiệt độ của dây kim loại tăng, điện trở của nó thay đổi như thế nào?",
        options: [
            "Giảm xuống.",
            "Không thay đổi.",
            "Tăng lên.",
            "Lúc đầu tăng, sau giảm."
        ],
        a: 2,
        expl: "Khi nhiệt độ tăng, điện trở kim loại tăng do các ion dao động mạnh hơn."
    },
    
    // Câu 11 (TH - Bài 17)
    {
        type: "multiple-choice",
        q: "Đường đặc trưng vôn - ampe của một vật dẫn tuân theo định luật Ôm có dạng:",
        options: [
            "Một đường cong đi qua gốc tọa độ.",
            "Một đường thẳng đi qua gốc tọa độ.",
            "Một đường thẳng không đi qua gốc tọa độ.",
            "Một đường parabol."
        ],
        a: 1,
        expl: "Theo định luật Ôm, U = I.R, đồ thị U theo I là đường thẳng đi qua gốc tọa độ."
    },
    
    // ========== BÀI 18: NGUỒN ĐIỆN - SUẤT ĐIỆN ĐỘNG (5 CÂU) ==========
    
    // Câu 12 (NB - Bài 18)
    {
        type: "multiple-choice",
        q: "Suất điện động của nguồn điện đặc trưng cho:",
        options: [
            "Khả năng tích điện của nguồn.",
            "Khả năng tác dụng lực của nguồn.",
            "Khả năng sinh công của nguồn.",
            "Khả năng dự trữ năng lượng của nguồn."
        ],
        a: 2,
        expl: "Suất điện động đặc trưng cho khả năng sinh công của nguồn điện."
    },
    
    // Câu 13 (NB - Bài 18)
    {
        type: "multiple-choice",
        q: "Đơn vị của suất điện động trong hệ SI là:",
        options: ["Ampe (A)", "Ôm (Ω)", "Oát (W)", "Vôn (V)"],
        a: 3,
        expl: "Suất điện động có đơn vị là vôn (V)."
    },
    
    // Câu 14 (TH - Bài 18)
    {
        type: "multiple-choice",
        q: "Công thức tính hiệu điện thế giữa hai cực của nguồn điện khi phát dòng điện là:",
        options: [
            "$U = \\mathcal{E} + Ir$",
            "$U = \\mathcal{E} - Ir$",
            "$U = Ir$",
            "$U = \\mathcal{E}$"
        ],
        a: 1,
        expl: "Hiệu điện thế hai cực: $U = \\mathcal{E} - I r$."
    },
    
    // Câu 15 (TH - Bài 18)
    {
        type: "multiple-choice",
        q: "Công thức định luật Ôm cho toàn mạch (mạch kín) là:",
        options: [
            "$I = \\frac{U}{R}$",
            "$I = \\frac{\\mathcal{E}}{R}$",
            "$I = \\frac{\\mathcal{E}}{R + r}$",
            "$I = \\frac{\\mathcal{E}}{r}$"
        ],
        a: 2,
        expl: "Định luật Ôm cho toàn mạch: $I = \\frac{\\mathcal{E}}{R + r}$."
    },
    
    // Câu 16 (TH - Bài 18)
    {
        type: "multiple-choice",
        q: "Khi mạch ngoài hở (không có dòng điện chạy qua nguồn), hiệu điện thế giữa hai cực của nguồn điện có giá trị:",
        options: [
            "Nhỏ hơn suất điện động.",
            "Lớn hơn suất điện động.",
            "Bằng suất điện động.",
            "Bằng 0."
        ],
        a: 2,
        expl: "Khi mạch hở, không có dòng điện, U = ε."
    },
    
    // ========== BÀI 19: CÔNG SUẤT - ĐIỆN NĂNG (4 CÂU) ==========
    
    // Câu 17 (NB - Bài 19)
    {
        type: "multiple-choice",
        q: "Đơn vị của công suất điện trong hệ SI là:",
        options: ["Jun (J)", "Vôn (V)", "Ampe (A)", "Oát (W)"],
        a: 3,
        expl: "Công suất có đơn vị là oát (W)."
    },
    
    // Câu 18 (NB - Bài 19)
    {
        type: "multiple-choice",
        q: "Công thức tính công suất tiêu thụ điện của một đoạn mạch là:",
        options: [
            "$P = \\frac{U}{I}$",
            "$P = U I$",
            "$P = \\frac{I}{U}$",
            "$P = \\frac{U^2}{I}$"
        ],
        a: 1,
        expl: "Công suất điện: $P = U I$."
    },
    
    // Câu 19 (TH - Bài 19)
    {
        type: "multiple-choice",
        q: "Công thức tính nhiệt lượng tỏa ra trên điện trở (định luật Joule – Lenz) là:",
        options: [
            "$Q = U I t$",
            "$Q = I^2 R t$",
            "$Q = \\frac{U^2}{R} t$",
            "$Q = \\frac{I^2}{R} t$"
        ],
        a: 1,
        expl: "Nhiệt lượng tỏa ra: $Q = I^2 R t$."
    },
    
    // Câu 20 (TH - Bài 19)
    {
        type: "multiple-choice",
        q: "Đơn vị của điện năng tiêu thụ thường dùng trong đời sống là:",
        options: [
            "Jun (J)",
            "Oát (W)",
            "Vôn (V)",
            "Kilôoát giờ (kWh)"
        ],
        a: 3,
        expl: "Trong đời sống, điện năng tiêu thụ thường tính bằng kWh."
    },
    
    // ========== BÀI 20: GHÉP NGUỒN ĐIỆN - ĐOẠN MẠCH (4 CÂU) ==========
    
    // Câu 21 (TH - Bài 20)
    {
        type: "multiple-choice",
        q: "Khi ghép nối tiếp hai nguồn điện giống nhau, suất điện động của bộ nguồn được tính bằng:",
        options: [
            "$\\mathcal{E}_b = \\mathcal{E}$",
            "$\\mathcal{E}_b = 2\\mathcal{E}$",
            "$\\mathcal{E}_b = \\frac{\\mathcal{E}}{2}$",
            "$\\mathcal{E}_b = \\mathcal{E}^2$"
        ],
        a: 1,
        expl: "Ghép nối tiếp hai nguồn giống nhau: $\\mathcal{E}_b = 2\\mathcal{E}$."
    },
    
    // Câu 22 (TH - Bài 20)
    {
        type: "multiple-choice",
        q: "Khi ghép song song hai nguồn điện giống nhau, điện trở trong của bộ nguồn được tính bằng:",
        options: [
            "$r_b = r$",
            "$r_b = 2r$",
            "$r_b = \\frac{r}{2}$",
            "$r_b = \\frac{r}{4}$"
        ],
        a: 2,
        expl: "Ghép song song hai nguồn giống nhau: $r_b = \\frac{r}{2}$."
    },
    
    // Câu 23 (TH - Bài 20)
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở tương đương của đoạn mạch gồm hai điện trở R₁ và R₂ mắc nối tiếp là:",
        options: [
            "$R_{td} = R_1 + R_2$",
            "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2}$",
            "$\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
            "$R_{td} = |R_1 - R_2|$"
        ],
        a: 0,
        expl: "Mạch nối tiếp: $R_{td} = R_1 + R_2$."
    },
    
    // Câu 24 (TH - Bài 20)
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở tương đương của đoạn mạch gồm hai điện trở R₁ và R₂ mắc song song là:",
        options: [
            "$R_{td} = R_1 + R_2$",
            "$\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
            "$R_{td} = \\frac{R_1 + R_2}{R_1 R_2}$",
            "$R_{td} = R_1 R_2$"
        ],
        a: 1,
        expl: "Mạch song song: $\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$."
    },
    
    // ============================================
    // PHẦN II: ĐÚNG - SAI (4 CÂU)
    // ============================================
    
    // Câu 25 (VD - Bài 16 + 17) - Định luật Ôm
    {
        type: "true-false",
        q: "Xét đoạn mạch chỉ chứa điện trở thuần. Đúng hay Sai với các phát biểu sau?",
        parts: [
            { content: "Cường độ dòng điện chạy qua đoạn mạch tỉ lệ thuận với hiệu điện thế đặt vào hai đầu đoạn mạch.", correct: true },
            { content: "Điện trở của đoạn mạch tỉ lệ nghịch với cường độ dòng điện chạy qua nó.", correct: false },
            { content: "Đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện vào hiệu điện thế là một đường thẳng đi qua gốc tọa độ.", correct: true },
            { content: "Khi nhiệt độ tăng, điện trở của dây kim loại giảm.", correct: false }
        ],
        expl: [
            "a) Đúng - Định luật Ôm: I = U/R, I tỉ lệ thuận với U.",
            "b) Sai - Điện trở là đại lượng đặc trưng cho vật dẫn, không phụ thuộc I.",
            "c) Đúng - Đồ thị I theo U là đường thẳng qua gốc tọa độ.",
            "d) Sai - Khi nhiệt độ tăng, điện trở kim loại tăng."
        ].join("<br>")
    },
    
    // Câu 26 (VD - Bài 18) - Nguồn điện và mạch kín
    {
        type: "true-false",
        q: "Xét một nguồn điện có suất điện động ε và điện trở trong r. Đúng hay Sai với các phát biểu sau?",
        parts: [
            { content: "Khi mạch ngoài hở, hiệu điện thế giữa hai cực của nguồn bằng suất điện động.", correct: true },
            { content: "Khi mạch kín, hiệu điện thế giữa hai cực của nguồn luôn lớn hơn suất điện động.", correct: false },
            { content: "Khi điện trở mạch ngoài càng nhỏ, cường độ dòng điện trong mạch càng lớn.", correct: true },
            { content: "Khi xảy ra đoản mạch, cường độ dòng điện có giá trị rất lớn.", correct: true }
        ],
        expl: [
            "a) Đúng - Mạch hở: I = 0 nên U = ε.",
            "b) Sai - Mạch kín: U = ε - Ir < ε.",
            "c) Đúng - I = ε/(R+r), R giảm thì I tăng.",
            "d) Đúng - Khi R = 0, I = ε/r rất lớn."
        ].join("<br>")
    },
    
    // Câu 27 (VD - Bài 19) - Công suất và điện năng
    {
        type: "true-false",
        q: "Xét một đoạn mạch tiêu thụ điện. Đúng hay Sai với các phát biểu sau?",
        parts: [
            { content: "Công suất tiêu thụ điện được tính bằng tích của hiệu điện thế và cường độ dòng điện.", correct: true },
            { content: "Điện năng tiêu thụ của đoạn mạch tỉ lệ thuận với thời gian dòng điện chạy qua.", correct: true },
            { content: "Nhiệt lượng tỏa ra trên điện trở tỉ lệ nghịch với bình phương cường độ dòng điện.", correct: false },
            { content: "1 kWh = 3,6.10⁶ J.", correct: true }
        ],
        expl: [
            "a) Đúng - P = U.I.",
            "b) Đúng - A = P.t.",
            "c) Sai - Q = I².R.t, tỉ lệ thuận với bình phương I.",
            "d) Đúng - 1 kWh = 1000W × 3600s = 3,6.10⁶ J."
        ].join("<br>")
    },
    
    // Câu 28 (VD - Bài 20) - Ghép điện trở và nguồn
    {
        type: "true-false",
        q: "Xét mạch điện gồm các điện trở và nguồn điện. Đúng hay Sai với các phát biểu sau?",
        parts: [
            { content: "Điện trở tương đương của đoạn mạch nối tiếp luôn lớn hơn mỗi điện trở thành phần.", correct: true },
            { content: "Điện trở tương đương của đoạn mạch song song luôn nhỏ hơn mỗi điện trở thành phần.", correct: true },
            { content: "Ghép nối tiếp các nguồn điện làm tăng điện trở trong của bộ nguồn.", correct: true },
            { content: "Ghép song song các nguồn điện làm tăng suất điện động của bộ nguồn.", correct: false }
        ],
        expl: [
            "a) Đúng - R_td = R₁ + R₂ + ... > Rᵢ.",
            "b) Đúng - 1/R_td = 1/R₁ + 1/R₂ + ... ⇒ R_td < Rᵢ.",
            "c) Đúng - r_b = r₁ + r₂ + ...",
            "d) Sai - Song song nguồn giống nhau: ε_b = ε (không đổi)."
        ].join("<br>")
    },
    
    // ============================================
    // PHẦN III: TRẢ LỜI NGẮN (8 CÂU)
    // ============================================
    
    // Câu 29 (TH - Bài 16)
    {
        type: "short-answer",
        q: "Một dòng điện không đổi có cường độ 2,5 A chạy qua dây dẫn trong 2 phút. Tính điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn. (Đơn vị: C)",
        answer: "300",
        expl: "t = 2 phút = 120 s; q = I.t = 2,5 × 120 = 300 C"
    },
    
    // Câu 30 (TH - Bài 16)
    {
        type: "short-answer",
        q: "Trong 20 giây có 40 C điện lượng dịch chuyển qua tiết diện dây dẫn. Tính cường độ dòng điện. (Đơn vị: A)",
        answer: "2",
        expl: "I = q/t = 40/20 = 2 A"
    },
    
    // Câu 31 (TH - Bài 17)
    {
        type: "short-answer",
        q: "Dây dẫn đồng dài 100 m, tiết diện 1 mm². Điện trở suất của đồng là 1,7.10⁻⁸ Ω.m. Tính điện trở của dây. (Đơn vị: Ω)",
        answer: "1,7",
        expl: "S = 1 mm² = 10⁻⁶ m²; R = ρ.l/S = 1,7.10⁻⁸ × 100/10⁻⁶ = 1,7 Ω"
    },
    
    // Câu 32 (TH - Bài 17)
    {
        type: "short-answer",
        q: "Đặt hiệu điện thế 12 V vào hai đầu dây dẫn có điện trở 3 Ω. Tính cường độ dòng điện qua dây. (Đơn vị: A)",
        answer: "4",
        expl: "I = U/R = 12/3 = 4 A"
    },
    
    // Câu 33 (TH - Bài 18)
    {
        type: "short-answer",
        q: "Nguồn điện có suất điện động 12 V, điện trở trong 1 Ω được mắc với điện trở ngoài 5 Ω. Tính cường độ dòng điện trong mạch. (Đơn vị: A)",
        answer: "2",
        expl: "I = ε/(R + r) = 12/(5 + 1) = 2 A"
    },
    
    // Câu 34 (TH - Bài 18)
    {
        type: "short-answer",
        q: "Nguồn điện có suất điện động 18 V, điện trở trong 2 Ω. Khi có dòng điện 3 A chạy qua, tính hiệu điện thế hai cực nguồn. (Đơn vị: V)",
        answer: "12",
        expl: "U = ε - I.r = 18 - 3×2 = 12 V"
    },
    
    // Câu 35 (TH - Bài 19)
    {
        type: "short-answer",
        q: "Điện trở 20 Ω được mắc với hiệu điện thế 100 V. Tính công suất tiêu thụ. (Đơn vị: W)",
        answer: "500",
        expl: "P = U²/R = 100²/20 = 500 W"
    },
    
    // Câu 36 (TH - Bài 19)
    {
        type: "short-answer",
        q: "Bóng đèn ghi 220V - 100W. Tính điện trở của đèn khi hoạt động bình thường. (Đơn vị: Ω, làm tròn đến số nguyên)",
        answer: "484",
        expl: "R = U²/P = 220²/100 = 484 Ω"
    },
    
    // ============================================
    // PHẦN IV: TỰ LUẬN (4 CÂU)
    // ============================================
    
    // Câu 37 (VD - Bài 16 + 17) - Mạch hỗn hợp điện trở
    {
        type: "essay",
        q: "Cho mạch điện gồm ba điện trở R₁ = 6 Ω, R₂ = 12 Ω, R₃ = 8 Ω được mắc như sau: R₁ nối tiếp với (R₂ song song R₃). Hiệu điện thế đặt vào hai đầu đoạn mạch là U = 24 V.<br><br>a) Tính điện trở tương đương của đoạn mạch.<br><br>b) Tính cường độ dòng điện chạy qua mỗi điện trở.",
        answer: [
            "a) Điện trở tương đương của R₂ và R₃ mắc song song:",
            "$R_{23} = \\frac{R_2 R_3}{R_2 + R_3} = \\frac{12.8}{12+8} = \\frac{96}{20} = 4,8 \\Omega$",
            "Điện trở tương đương toàn mạch:",
            "$R_{td} = R_1 + R_{23} = 6 + 4,8 = 10,8 \\Omega$",
            "",
            "b) Cường độ dòng điện mạch chính:",
            "$I = \\frac{U}{R_{td}} = \\frac{24}{10,8} \\approx 2,22 A$",
            "Vì R₁ nối tiếp nên $I_1 = I = 2,22 A$",
            "Hiệu điện thế giữa hai đầu R₂ và R₃:",
            "$U_{23} = I.R_{23} = 2,22 \\times 4,8 \\approx 10,66 V$",
            "Dòng điện qua R₂: $I_2 = \\frac{U_{23}}{R_2} = \\frac{10,66}{12} \\approx 0,89 A$",
            "Dòng điện qua R₃: $I_3 = \\frac{U_{23}}{R_3} = \\frac{10,66}{8} \\approx 1,33 A$"
        ].join("<br>"),
        expl: "Mạch hỗn hợp: tính R_td từ trong ra ngoài, sau đó tính I tổng, rồi tính U và I từng nhánh."
    },
    
    // Câu 38 (VD - Bài 18) - Mạch kín có nguồn
    {
        type: "essay",
        q: "Một nguồn điện có suất điện động 12 V và điện trở trong 1 Ω được mắc với mạch ngoài gồm điện trở R = 5 Ω.<br><br>a) Tính cường độ dòng điện chạy trong mạch.<br><br>b) Tính hiệu điện thế giữa hai cực của nguồn.<br><br>c) Tính công suất tiêu thụ trên điện trở R và công suất hao phí trên điện trở trong của nguồn.",
        answer: [
            "a) Cường độ dòng điện:",
            "$I = \\frac{\\varepsilon}{R + r} = \\frac{12}{5 + 1} = 2 A$",
            "",
            "b) Hiệu điện thế hai cực nguồn:",
            "$U = \\varepsilon - I.r = 12 - 2×1 = 10 V$",
            "",
            "c) Công suất tiêu thụ trên R:",
            "$P_R = I^2.R = 2^2 × 5 = 20 W$",
            "Công suất hao phí trên điện trở trong:",
            "$P_{hp} = I^2.r = 2^2 × 1 = 4 W$"
        ].join("<br>"),
        expl: "Áp dụng định luật Ôm cho toàn mạch, công thức U = ε - Ir và công thức tính công suất."
    },
    
    // Câu 39 (VD - Bài 19) - Nhiệt lượng và điện năng
    {
        type: "essay",
        q: "Một bếp điện có điện trở 50 Ω, được mắc vào hiệu điện thế 220 V.<br><br>a) Tính công suất của bếp điện.<br><br>b) Tính nhiệt lượng tỏa ra của bếp trong 30 phút (theo đơn vị kJ).<br><br>c) Nếu giá điện là 2500 đồng/kWh, tính tiền điện phải trả khi sử dụng bếp trong 2 giờ.",
        answer: [
            "a) Công suất của bếp:",
            "$P = \\frac{U^2}{R} = \\frac{220^2}{50} = \\frac{48400}{50} = 968 W$",
            "",
            "b) Nhiệt lượng tỏa ra trong 30 phút (1800 giây):",
            "$Q = P.t = 968 × 1800 = 1.742.400 J = 1742,4 kJ$",
            "",
            "c) Điện năng tiêu thụ trong 2 giờ:",
            "$A = P.t = 0,968 kW × 2 h = 1,936 kWh$",
            "Tiền điện: $1,936 × 2500 = 4840$ đồng"
        ].join("<br>"),
        expl: "Áp dụng công thức tính công suất P = U²/R, nhiệt lượng Q = P.t, và điện năng tính bằng kWh."
    },
    
    // Câu 40 (VD - Bài 20) - Ghép nguồn điện
    {
        type: "essay",
        q: "Cho hai nguồn điện giống nhau, mỗi nguồn có suất điện động 6 V và điện trở trong 1 Ω. Các nguồn được ghép nối tiếp với nhau, sau đó mắc với mạch ngoài gồm điện trở R = 10 Ω.<br><br>a) Tính suất điện động và điện trở trong của bộ nguồn.<br><br>b) Tính cường độ dòng điện chạy trong mạch.<br><br>c) Tính hiệu điện thế giữa hai cực của bộ nguồn.",
        answer: [
            "a) Suất điện động của bộ nguồn:",
            "$\\varepsilon_b = \\varepsilon_1 + \\varepsilon_2 = 6 + 6 = 12 V$",
            "Điện trở trong của bộ nguồn:",
            "$r_b = r_1 + r_2 = 1 + 1 = 2 \\Omega$",
            "",
            "b) Cường độ dòng điện trong mạch:",
            "$I = \\frac{\\varepsilon_b}{R + r_b} = \\frac{12}{10 + 2} = 1 A$",
            "",
            "c) Hiệu điện thế giữa hai cực của bộ nguồn:",
            "$U = \\varepsilon_b - I.r_b = 12 - 1×2 = 10 V$"
        ].join("<br>"),
        expl: "Ghép nối tiếp: ε_b = ε₁ + ε₂, r_b = r₁ + r₂. Sau đó áp dụng định luật Ôm cho toàn mạch."
    }
];