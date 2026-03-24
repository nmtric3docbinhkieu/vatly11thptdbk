// ==============================================
// FILE: database-chapter4-congthuc.js
// ==============================================
// Ngân hàng câu hỏi trắc nghiệm công thức chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// 40 câu trắc nghiệm về công thức, tên gọi, đơn vị các đại lượng
// ==============================================

window.questionsChapter4CongThuc = [
    // ============================================
    // CÂU 1-10: CÔNG THỨC CƠ BẢN VỀ DÒNG ĐIỆN
    // ============================================
    
    // Câu 1
    {
        type: "multiple-choice",
        q: "Công thức định nghĩa cường độ dòng điện không đổi là:",
        options: [
            "$I = \\frac{U}{R}$",
            "$I = \\frac{q}{t}$",
            "$I = \\frac{A}{q}$",
            "$I = \\frac{P}{U}$"
        ],
        a: 1,
        expl: "Cường độ dòng điện không đổi: $I = \\frac{q}{t}$."
    },
    
    // Câu 2
    {
        type: "multiple-choice",
        q: "Đơn vị của cường độ dòng điện trong hệ SI là:",
        options: [
            "Vôn (V)",
            "Ôm (Ω)",
            "Oát (W)",
            "Ampe (A)"
        ],
        a: 3,
        expl: "Cường độ dòng điện có đơn vị là ampe (A)."
    },
    
    // Câu 3
    {
        type: "multiple-choice",
        q: "Đơn vị của điện lượng (điện tích) trong hệ SI là:",
        options: [
            "Ampe (A)",
            "Vôn (V)",
            "Culông (C)",
            "Oát (W)"
        ],
        a: 2,
        expl: "Điện lượng có đơn vị là culông (C)."
    },
    
    // Câu 4
    {
        type: "multiple-choice",
        q: "Công thức liên hệ giữa cường độ dòng điện I, điện lượng q và thời gian t là:",
        options: [
            "$q = I^2 t$",
            "$q = \\frac{I}{t}$",
            "$q = I t$",
            "$q = \\frac{t}{I}$"
        ],
        a: 2,
        expl: "Điện lượng: $q = I.t$."
    },
    
    // Câu 5
    {
        type: "multiple-choice",
        q: "Công thức tính vận tốc trôi của hạt tải điện trong kim loại là:",
        options: [
            "$v = \\frac{I}{nS|q|}$",
            "$v = nS|q|I$",
            "$v = \\frac{nS|q|}{I}$",
            "$v = \\frac{I}{nS}$"
        ],
        a: 0,
        expl: "Vận tốc trôi: $v = \\frac{I}{nS|q|}$."
    },
    
    // Câu 6
    {
        type: "multiple-choice",
        q: "Tên gọi của đại lượng n trong công thức $v = \\frac{I}{nS|q|}$ là:",
        options: [
            "Khối lượng riêng",
            "Mật độ hạt tải điện",
            "Số Avogadro",
            "Nguyên tử lượng"
        ],
        a: 1,
        expl: "n là mật độ hạt tải điện (số hạt tải điện trong một đơn vị thể tích)."
    },
    
    // Câu 7
    {
        type: "multiple-choice",
        q: "Đơn vị của vận tốc trôi trong hệ SI là:",
        options: [
            "m/s",
            "m/s²",
            "m²/s",
            "m/s³"
        ],
        a: 0,
        expl: "Vận tốc có đơn vị là m/s."
    },
    
    // Câu 8
    {
        type: "multiple-choice",
        q: "Công thức xác định điện lượng dịch chuyển qua tiết diện dây dẫn là:",
        options: [
            "$q = I^2 R t$",
            "$q = U I t$",
            "$q = I t$",
            "$q = \\frac{U}{R} t$"
        ],
        a: 2,
        expl: "Điện lượng: $q = I t$."
    },
    
    // Câu 9
    {
        type: "multiple-choice",
        q: "Điện tích của electron có giá trị là:",
        options: [
            "$e = 1,6.10^{-19} C$",
            "$e = -1,6.10^{-19} C$",
            "$e = 9,1.10^{-31} C$",
            "$e = 1,6.10^{19} C$"
        ],
        a: 1,
        expl: "Điện tích của electron là $e = -1,6.10^{-19} C$."
    },
    
    // Câu 10
    {
        type: "multiple-choice",
        q: "Công thức tính số hạt tải điện (electron) dịch chuyển qua tiết diện dây dẫn là:",
        options: [
            "$n = \\frac{I}{q t}$",
            "$n = \\frac{q}{I t}$",
            "$n = \\frac{q}{e}$",
            "$n = \\frac{e}{q}$"
        ],
        a: 2,
        expl: "Số hạt tải điện: $n = \\frac{q}{|e|}$."
    },
    
    // ============================================
    // CÂU 11-20: CÔNG THỨC ĐIỆN TRỞ VÀ ĐỊNH LUẬT OHM
    // ============================================
    
    // Câu 11
    {
        type: "multiple-choice",
        q: "Công thức định luật Ôm cho đoạn mạch chỉ chứa điện trở thuần là:",
        options: [
            "$I = \\frac{U}{R}$",
            "$U = I^2 R$",
            "$R = \\frac{I}{U}$",
            "$I = \\frac{R}{U}$"
        ],
        a: 0,
        expl: "Định luật Ôm: $I = \\frac{U}{R}$."
    },
    
    // Câu 12
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
    
    // Câu 13
    {
        type: "multiple-choice",
        q: "Tên gọi của đại lượng ρ trong công thức $R = \\rho \\frac{l}{S}$ là:",
        options: [
            "Điện trở",
            "Điện dẫn suất",
            "Điện trở suất",
            "Hằng số điện môi"
        ],
        a: 2,
        expl: "ρ là điện trở suất, đặc trưng cho bản chất vật liệu."
    },
    
    // Câu 14
    {
        type: "multiple-choice",
        q: "Đơn vị của điện trở suất trong hệ SI là:",
        options: [
            "Ôm (Ω)",
            "Ôm mét (Ω.m)",
            "Ôm trên mét (Ω/m)",
            "Mét trên ôm (m/Ω)"
        ],
        a: 1,
        expl: "Điện trở suất có đơn vị là ôm mét (Ω.m)."
    },
    
    // Câu 15
    {
        type: "multiple-choice",
        q: "Đơn vị của điện trở trong hệ SI là:",
        options: [
            "Vôn (V)",
            "Ampe (A)",
            "Oát (W)",
            "Ôm (Ω)"
        ],
        a: 3,
        expl: "Điện trở có đơn vị là ôm (Ω): $1 Ω = 1 V/A$."
    },
    
    // Câu 16
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở tương đương của đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc nối tiếp là:",
        options: [
            "$R_{td} = R_1 + R_2$",
            "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2}$",
            "$\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
            "$R_{td} = |R_1 - R_2|$"
        ],
        a: 0,
        expl: "Mạch nối tiếp: $R_{td} = R_1 + R_2$."
    },
    
    // Câu 17
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở tương đương của đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc song song là:",
        options: [
            "$R_{td} = R_1 + R_2$",
            "$\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
            "$R_{td} = \\frac{R_1 + R_2}{R_1 R_2}$",
            "$R_{td} = R_1 R_2$"
        ],
        a: 1,
        expl: "Mạch song song: $\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$."
    },
    
    // Câu 18
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở của dây dẫn ở nhiệt độ t là:",
        options: [
            "$R_t = R_0[1 + \\alpha(t - t_0)]$",
            "$R_t = R_0[1 - \\alpha(t - t_0)]$",
            "$R_t = R_0\\alpha(t - t_0)$",
            "$R_t = \\frac{R_0}{1 + \\alpha(t - t_0)}$"
        ],
        a: 0,
        expl: "Điện trở phụ thuộc nhiệt độ: $R_t = R_0[1 + \\alpha(t - t_0)]$."
    },
    
    // Câu 19
    {
        type: "multiple-choice",
        q: "Tên gọi của đại lượng α trong công thức $R_t = R_0[1 + \\alpha(t - t_0)]$ là:",
        options: [
            "Hệ số nhiệt điện trở",
            "Hệ số dãn nở nhiệt",
            "Hệ số dẫn nhiệt",
            "Hệ số nhiệt dung"
        ],
        a: 0,
        expl: "α là hệ số nhiệt điện trở, đặc trưng cho sự thay đổi điện trở theo nhiệt độ."
    },
    
    // Câu 20
    {
        type: "multiple-choice",
        q: "Đơn vị của hệ số nhiệt điện trở α trong hệ SI là:",
        options: [
            "Ω",
            "K",
            "K⁻¹",
            "Ω/K"
        ],
        a: 2,
        expl: "Hệ số nhiệt điện trở có đơn vị là K⁻¹ (hoặc °C⁻¹)."
    },
    
    // ============================================
    // CÂU 21-30: CÔNG THỨC NGUỒN ĐIỆN VÀ MẠCH KÍN
    // ============================================
    
    // Câu 21
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
        expl: "Suất điện động: $\\mathcal{E} = \\frac{A}{q}$."
    },
    
    // Câu 22
    {
        type: "multiple-choice",
        q: "Đơn vị của suất điện động trong hệ SI là:",
        options: [
            "Ampe (A)",
            "Ôm (Ω)",
            "Oát (W)",
            "Vôn (V)"
        ],
        a: 3,
        expl: "Suất điện động có đơn vị là vôn (V)."
    },
    
    // Câu 23
    {
        type: "multiple-choice",
        q: "Công thức tính hiệu điện thế giữa hai cực của nguồn điện khi phát dòng điện là:",
        options: [
            "$U = \\mathcal{E} + Ir$",
            "$U = \\mathcal{E} - Ir$",
            "$U = I r$",
            "$U = \\mathcal{E}$"
        ],
        a: 1,
        expl: "Hiệu điện thế hai cực: $U = \\mathcal{E} - I r$."
    },
    
    // Câu 24
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
    
    // Câu 25
    {
        type: "multiple-choice",
        q: "Tên gọi của đại lượng r trong công thức $I = \\frac{\\mathcal{E}}{R + r}$ là:",
        options: [
            "Điện trở mạch ngoài",
            "Điện trở tương đương",
            "Điện trở trong của nguồn",
            "Điện trở suất"
        ],
        a: 2,
        expl: "r là điện trở trong của nguồn điện."
    },
    
    // Câu 26
    {
        type: "multiple-choice",
        q: "Công thức tính suất điện động của bộ nguồn gồm n nguồn giống nhau mắc nối tiếp là:",
        options: [
            "$\\mathcal{E}_b = \\mathcal{E}$",
            "$\\mathcal{E}_b = n\\mathcal{E}$",
            "$\\mathcal{E}_b = \\frac{\\mathcal{E}}{n}$",
            "$\\mathcal{E}_b = n^2\\mathcal{E}$"
        ],
        a: 1,
        expl: "Ghép nối tiếp: $\\mathcal{E}_b = n\\mathcal{E}$."
    },
    
    // Câu 27
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở trong của bộ nguồn gồm n nguồn giống nhau mắc nối tiếp là:",
        options: [
            "$r_b = r$",
            "$r_b = \\frac{r}{n}$",
            "$r_b = n r$",
            "$r_b = n^2 r$"
        ],
        a: 2,
        expl: "Ghép nối tiếp: $r_b = n r$."
    },
    
    // Câu 28
    {
        type: "multiple-choice",
        q: "Công thức tính suất điện động của bộ nguồn gồm n nguồn giống nhau mắc song song là:",
        options: [
            "$\\mathcal{E}_b = \\mathcal{E}$",
            "$\\mathcal{E}_b = n\\mathcal{E}$",
            "$\\mathcal{E}_b = \\frac{\\mathcal{E}}{n}$",
            "$\\mathcal{E}_b = n^2\\mathcal{E}$"
        ],
        a: 0,
        expl: "Ghép song song các nguồn giống nhau: $\\mathcal{E}_b = \\mathcal{E}$."
    },
    
    // Câu 29
    {
        type: "multiple-choice",
        q: "Công thức tính điện trở trong của bộ nguồn gồm n nguồn giống nhau mắc song song là:",
        options: [
            "$r_b = r$",
            "$r_b = n r$",
            "$r_b = \\frac{r}{n}$",
            "$r_b = n^2 r$"
        ],
        a: 2,
        expl: "Ghép song song: $r_b = \\frac{r}{n}$."
    },
    
    // Câu 30
    {
        type: "multiple-choice",
        q: "Công thức tính hiệu suất của nguồn điện là:",
        options: [
            "$H = \\frac{U}{\\mathcal{E}}$",
            "$H = \\frac{\\mathcal{E}}{U}$",
            "$H = \\frac{r}{R}$",
            "$H = \\frac{R}{r}$"
        ],
        a: 0,
        expl: "Hiệu suất nguồn: $H = \\frac{U}{\\mathcal{E}} = \\frac{R}{R+r}$."
    },
    
    // ============================================
    // CÂU 31-40: CÔNG THỨC CÔNG SUẤT VÀ ĐIỆN NĂNG
    // ============================================
    
    // Câu 31
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
    
    // Câu 32
    {
        type: "multiple-choice",
        q: "Đơn vị của công suất trong hệ SI là:",
        options: [
            "Jun (J)",
            "Vôn (V)",
            "Ampe (A)",
            "Oát (W)"
        ],
        a: 3,
        expl: "Công suất có đơn vị là oát (W)."
    },
    
    // Câu 33
    {
        type: "multiple-choice",
        q: "Công thức tính điện năng tiêu thụ của một đoạn mạch là:",
        options: [
            "$A = U I t$",
            "$A = \\frac{U}{I} t$",
            "$A = U I^2 t$",
            "$A = \\frac{U^2}{I} t$"
        ],
        a: 0,
        expl: "Điện năng tiêu thụ: $A = U I t$."
    },
    
    // Câu 34
    {
        type: "multiple-choice",
        q: "Đơn vị của điện năng trong hệ SI là:",
        options: [
            "Oát (W)",
            "Vôn (V)",
            "Jun (J)",
            "Ampe (A)"
        ],
        a: 2,
        expl: "Điện năng có đơn vị là jun (J)."
    },
    
    // Câu 35
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
    
    // Câu 36
    {
        type: "multiple-choice",
        q: "Công thức tính công suất tỏa nhiệt trên điện trở R là:",
        options: [
            "$P = U I$",
            "$P = I^2 R$",
            "$P = \\frac{U^2}{R}$",
            "Cả A, B, C đều đúng"
        ],
        a: 3,
        expl: "Công suất tỏa nhiệt có thể tính bằng các công thức tương đương: $P = U I = I^2 R = \\frac{U^2}{R}$."
    },
    
    // Câu 37
    {
        type: "multiple-choice",
        q: "Công thức tính công suất của nguồn điện là:",
        options: [
            "$P_{ng} = U I$",
            "$P_{ng} = I^2 R$",
            "$P_{ng} = \\mathcal{E} I$",
            "$P_{ng} = \\frac{U^2}{R}$"
        ],
        a: 2,
        expl: "Công suất của nguồn: $P_{ng} = \\mathcal{E} I$."
    },
    
    // Câu 38
    {
        type: "multiple-choice",
        q: "Công thức tính công suất hao phí trên điện trở trong của nguồn là:",
        options: [
            "$P_{hp} = \\mathcal{E} I$",
            "$P_{hp} = U I$",
            "$P_{hp} = I^2 r$",
            "$P_{hp} = \\frac{U^2}{r}$"
        ],
        a: 2,
        expl: "Công suất hao phí: $P_{hp} = I^2 r$."
    },
    
    // Câu 39
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
    
    // Câu 40
    {
        type: "multiple-choice",
        q: "1 kWh tương đương với bao nhiêu Jun?",
        options: [
            "1000 J",
            "3600 J",
            "3,6.10⁵ J",
            "3,6.10⁶ J"
        ],
        a: 3,
        expl: "1 kWh = 1000 W × 3600 s = 3,6.10⁶ J."
    }
];