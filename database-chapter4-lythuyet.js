// ==============================================
// FILE: database-chapter4-lythuyet.js
// ==============================================
// Ngân hàng câu hỏi trắc nghiệm lý thuyết chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// 80 câu trắc nghiệm nhiều lựa chọn
// ==============================================

window.questionsChapter4LyThuyet = [
    // ============================================
    // CÂU 1-10: DÒNG ĐIỆN VÀ CƯỜNG ĐỘ DÒNG ĐIỆN
    // ============================================
    
    // Câu 1
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
    
    // Câu 2
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
    
    // Câu 3
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
    
    // Câu 4
    {
        type: "multiple-choice",
        q: "Đơn vị của cường độ dòng điện trong hệ SI là:",
        options: ["Ampe (A)", "Vôn (V)", "Ôm (Ω)", "Oát (W)"],
        a: 0,
        expl: "Cường độ dòng điện có đơn vị là ampe (A)."
    },
    
    // Câu 5
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
    
    // Câu 6
    {
        type: "multiple-choice",
        q: "Trong kim loại, dòng điện được tạo ra bởi sự dịch chuyển của:",
        options: [
            "Electron tự do",
            "Ion dương",
            "Ion âm",
            "Cả electron và ion"
        ],
        a: 0,
        expl: "Trong kim loại, dòng điện được tạo ra bởi sự dịch chuyển có hướng của các electron tự do."
    },
    
    // Câu 7
    {
        type: "multiple-choice",
        q: "Trong chất điện phân, dòng điện được tạo ra bởi sự dịch chuyển của:",
        options: [
            "Cả ion dương và ion âm",
            "Chỉ electron tự do",
            "Chỉ ion dương",
            "Chỉ ion âm"
        ],
        a: 0,
        expl: "Trong chất điện phân, dòng điện được tạo ra bởi sự dịch chuyển có hướng của cả ion dương và ion âm."
    },
    
    // Câu 8
    {
        type: "multiple-choice",
        q: "Vận tốc trôi của electron trong kim loại khi có dòng điện có độ lớn khoảng:",
        options: [
            "10⁻⁴ - 10⁻³ m/s",
            "10² - 10³ m/s",
            "10⁶ - 10⁷ m/s",
            "10⁸ - 10⁹ m/s"
        ],
        a: 0,
        expl: "Vận tốc trôi của electron trong kim loại rất nhỏ, khoảng 10⁻⁴ - 10⁻³ m/s."
    },
    
    // Câu 9
    {
        type: "multiple-choice",
        q: "Điện lượng dịch chuyển qua tiết diện của dây dẫn trong thời gian t là:",
        options: [
            "q = I.t",
            "q = I/t",
            "q = t/I",
            "q = I + t"
        ],
        a: 0,
        expl: "Từ công thức I = q/t suy ra q = I.t."
    },
    
    // Câu 10
    {
        type: "multiple-choice",
        q: "Khi có dòng điện cường độ 2A chạy qua dây dẫn trong 5 phút, điện lượng dịch chuyển là:",
        options: ["600 C", "300 C", "150 C", "1200 C"],
        a: 0,
        expl: "q = I.t = 2A × 300s = 600 C."
    },
    
    // ============================================
    // CÂU 11-25: ĐIỆN TRỞ VÀ ĐỊNH LUẬT OHM
    // ============================================
    
    // Câu 11
    {
        type: "multiple-choice",
        q: "Điện trở của một vật dẫn được xác định bằng công thức:",
        options: ["$R = \\frac{U}{I}$", "$R = \\frac{I}{U}$", "$R = U.I$", "$R = \\frac{U^2}{I}$"],
        a: 0,
        expl: "Điện trở $R = \\frac{U}{I}$."
    },
    
    // Câu 12
    {
        type: "multiple-choice",
        q: "Đơn vị của điện trở trong hệ SI là:",
        options: ["Ôm (Ω)", "Ampe (A)", "Vôn (V)", "Oát (W)"],
        a: 0,
        expl: "Điện trở có đơn vị là ôm (Ω): $1 \\Omega = 1 V/A$."
    },
    
    // Câu 13
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
    
    // Câu 14
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
    
    // Câu 15
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
    
    // Câu 16
    {
        type: "multiple-choice",
        q: "Khi tăng chiều dài dây dẫn lên 2 lần, các yếu tố khác không đổi thì điện trở:",
        options: ["Tăng 2 lần", "Giảm 2 lần", "Tăng 4 lần", "Không đổi"],
        a: 0,
        expl: "Điện trở tỉ lệ thuận với chiều dài: $R \\sim l$."
    },
    
    // Câu 17
    {
        type: "multiple-choice",
        q: "Khi tăng tiết diện dây dẫn lên 2 lần, các yếu tố khác không đổi thì điện trở:",
        options: ["Giảm 2 lần", "Tăng 2 lần", "Giảm 4 lần", "Không đổi"],
        a: 0,
        expl: "Điện trở tỉ lệ nghịch với tiết diện: $R \\sim 1/S$."
    },
    
    // Câu 18
    {
        type: "multiple-choice",
        q: "Đường đặc trưng vôn-ampe của dây dẫn kim loại ở nhiệt độ không đổi là:",
        options: [
            "Một đường thẳng đi qua gốc tọa độ",
            "Một đường cong đi qua gốc tọa độ",
            "Một đường thẳng không đi qua gốc tọa độ",
            "Một đường cong không đi qua gốc tọa độ"
        ],
        a: 0,
        expl: "Theo định luật Ohm, U = R.I, đồ thị U theo I là đường thẳng đi qua gốc tọa độ."
    },
    
    // Câu 19
    {
        type: "multiple-choice",
        q: "Điện trở của dây dẫn khi nhiệt độ tăng:",
        options: [
            "Tăng đối với kim loại, giảm đối với bán dẫn",
            "Giảm đối với kim loại, tăng đối với bán dẫn",
            "Tăng đối với cả kim loại và bán dẫn",
            "Giảm đối với cả kim loại và bán dẫn"
        ],
        a: 0,
        expl: "Điện trở kim loại tăng khi nhiệt độ tăng, ngược lại với bán dẫn."
    },
    
    // Câu 20
    {
        type: "multiple-choice",
        q: "Hệ số nhiệt điện trở α có đơn vị là:",
        options: ["K⁻¹", "Ω", "Ω/K", "Ω.K"],
        a: 0,
        expl: "Hệ số nhiệt điện trở có đơn vị là K⁻¹."
    },
    
    // Câu 21
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
        expl: "Công thức tính điện trở ở nhiệt độ t: $R_t = R_0[1 + \\alpha(t - t_0)]$."
    },
    
    // Câu 22
    {
        type: "multiple-choice",
        q: "Dây dẫn nào sau đây có điện trở nhỏ nhất cùng kích thước?",
        options: ["Dây bạc", "Dây đồng", "Dây nhôm", "Dây sắt"],
        a: 0,
        expl: "Bạc có điện trở suất nhỏ nhất trong các kim loại liệt kê."
    },
    
    // Câu 23
    {
        type: "multiple-choice",
        q: "Điện trở suất của đồng là:",
        options: [
            "$1,7.10^{-8} \\Omega.m$",
            "$2,8.10^{-8} \\Omega.m$",
            "$0,5.10^{-6} \\Omega.m$",
            "$12.10^{-8} \\Omega.m$"
        ],
        a: 0,
        expl: "Điện trở suất của đồng là $1,7.10^{-8} \\Omega.m$."
    },
    
    // Câu 24
    {
        type: "multiple-choice",
        q: "Khi có hiệu điện thế 6V đặt vào hai đầu dây dẫn có điện trở 3Ω, cường độ dòng điện là:",
        options: ["2 A", "0,5 A", "18 A", "9 A"],
        a: 0,
        expl: "Theo định luật Ohm: I = U/R = 6/3 = 2A."
    },
    
    // Câu 25
    {
        type: "multiple-choice",
        q: "Mắc nối tiếp hai điện trở R₁ = 2Ω và R₂ = 3Ω. Điện trở tương đương là:",
        options: ["5 Ω", "1 Ω", "6 Ω", "1,2 Ω"],
        a: 0,
        expl: "Mắc nối tiếp: R = R₁ + R₂ = 2 + 3 = 5Ω."
    },
    
    // ============================================
    // CÂU 26-40: NGUỒN ĐIỆN VÀ SUẤT ĐIỆN ĐỘNG
    // ============================================
    
    // Câu 26
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
    
    // Câu 27
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
    
    // Câu 28
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
    
    // Câu 29
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
    
    // Câu 30
    {
        type: "multiple-choice",
        q: "Đơn vị của suất điện động trong hệ SI là:",
        options: ["Vôn (V)", "Ampe (A)", "Ôm (Ω)", "Jun (J)"],
        a: 0,
        expl: "Suất điện động có đơn vị là vôn (V), giống như hiệu điện thế."
    },
    
    // Câu 31
    {
        type: "multiple-choice",
        q: "Điện trở trong của nguồn điện là:",
        options: [
            "Điện trở của phần bên trong nguồn điện.",
            "Điện trở của toàn bộ mạch.",
            "Điện trở của mạch ngoài.",
            "Điện tích bên trong nguồn điện."
        ],
        a: 0,
        expl: "Điện trở trong là điện trở của phần bên trong nguồn điện."
    },
    
    // Câu 32
    {
        type: "multiple-choice",
        q: "Khi nối tắt hai cực của một nguồn điện, cường độ dòng điện:",
        options: [
            "Tối đa và bằng ε/r",
            "Bằng 0",
            "Tối thiểu",
            "Bằng ε/R"
        ],
        a: 0,
        expl: "Khi nối tắt, R = 0, dòng điện tối đa: I = ε/r."
    },
    
    // Câu 33
    {
        type: "multiple-choice",
        q: "Hiệu suất của nguồn điện được tính bằng:",
        options: [
            "$\\eta = \\frac{U}{\\varepsilon}$",
            "$\\eta = \\frac{\\varepsilon}{U}$",
            "$\\eta = \\frac{I}{\\varepsilon}$",
            "$\\eta = \\frac{U}{I}$"
        ],
        a: 0,
        expl: "Hiệu suất của nguồn: $\\eta = \\frac{P_{ngoai}}{P_{toan}} = \\frac{UI}{\\varepsilon I} = \\frac{U}{\\varepsilon}$."
    },
    
    // Câu 34
    {
        type: "multiple-choice",
        q: "Để hiệu suất của nguồn điện đạt giá trị lớn nhất, cần:",
        options: [
            "Điện trở mạch ngoài lớn hơn nhiều so với điện trở trong",
            "Điện trở mạch ngoài nhỏ hơn nhiều so với điện trở trong",
            "Điện trở mạch ngoài bằng điện trở trong",
            "Điện trở mạch ngoài bằng 0"
        ],
        a: 0,
        expl: "Hiệu suất η = U/ε = ε/(R+r). Khi R >> r thì η → 1 (100%)."
    },
    
    // Câu 35
    {
        type: "multiple-choice",
        q: "Khi ghép nối tiếp hai nguồn điện có suất điện động ε₁, ε₂ và điện trở trong r₁, r₂ thì:",
        options: [
            "ε_b = ε₁ + ε₂, r_b = r₁ + r₂",
            "ε_b = ε₁ + ε₂, r_b = r₁ = r₂",
            "ε_b = |ε₁ - ε₂|, r_b = r₁ + r₂",
            "ε_b = ε₁ = ε₂, r_b = r₁ + r₂"
        ],
        a: 0,
        expl: "Ghép nối tiếp: ε_b = ε₁ + ε₂, r_b = r₁ + r₂."
    },
    
    // Câu 36
    {
        type: "multiple-choice",
        q: "Khi ghép song song hai nguồn điện giống hệt nhau thì:",
        options: [
            "ε_b = ε, r_b = r/2",
            "ε_b = 2ε, r_b = r/2",
            "ε_b = ε/2, r_b = 2r",
            "ε_b = ε, r_b = 2r"
        ],
        a: 0,
        expl: "Ghép song song hai nguồn giống nhau: ε_b = ε, r_b = r/2."
    },
    
    // Câu 37
    {
        type: "multiple-choice",
        q: "Công của lực lạ khi dịch chuyển điện tích q bên trong nguồn điện là:",
        options: [
            "A = ε.q",
            "A = U.q",
            "A = ε/q",
            "A = q/U"
        ],
        a: 0,
        expl: "A = ε.q, với ε là suất điện động của nguồn."
    },
    
    // Câu 38
    {
        type: "multiple-choice",
        q: "Nguồn điện thực tế có hai đại lượng đặc trưng là:",
        options: [
            "Suất điện động và điện trở trong",
            "Hiệu điện thế và cường độ dòng điện",
            "Công suất và điện năng",
            "Điện tích và điện tích"
        ],
        a: 0,
        expl: "Nguồn điện thực tế đặc trưng bởi suất điện động ε và điện trở trong r."
    },
    
    // Câu 39
    {
        type: "multiple-choice",
        q: "Khi nguồn điện cung cấp dòng điện cho mạch ngoài, hiệu điện thế hai cực:",
        options: [
            "Nhỏ hơn suất điện động",
            "Bằng suất điện động",
            "Lớn hơn suất điện động",
            "Bằng 0"
        ],
        a: 0,
        expl: "Khi có dòng điện, U = ε - Ir < ε."
    },
    
    // Câu 40
    {
        type: "multiple-choice",
        q: "Cường độ dòng điện trong mạch kín có nguồn điện được tính bằng:",
        options: [
            "$I = \\frac{\\varepsilon}{R + r}$",
            "$I = \\frac{\\varepsilon}{R}$",
            "$I = \\frac{U}{R + r}$",
            "$I = \\frac{U}{R}$"
        ],
        a: 0,
        expl: "Định luật Ohm cho mạch kín: I = ε/(R + r)."
    },
    
    // ============================================
    // CÂU 41-55: CÔNG SUẤT VÀ ĐIỆN NĂNG
    // ============================================
    
    // Câu 41
    {
        type: "multiple-choice",
        q: "Công thức tính công suất tiêu thụ điện của một đoạn mạch là:",
        options: ["$P = UI$", "$P = \\frac{U}{I}$", "$P = \\frac{I}{U}$", "$P = \\frac{U}{I^2}$"],
        a: 0,
        expl: "Công suất $P = UI$."
    },
    
    // Câu 42
    {
        type: "multiple-choice",
        q: "Đơn vị của công suất điện trong hệ SI là:",
        options: ["Oát (W)", "Jun (J)", "Vôn (V)", "Ampe (A)"],
        a: 0,
        expl: "Công suất có đơn vị là oát (W)."
    },
    
    // Câu 43
    {
        type: "multiple-choice",
        q: "Công thức tính điện năng tiêu thụ là:",
        options: [
            "A = P.t",
            "A = P/t",
            "A = t/P",
            "A = P + t"
        ],
        a: 0,
        expl: "Điện năng tiêu thụ: A = P.t."
    },
    
    // Câu 44
    {
        type: "multiple-choice",
        q: "Nhiệt lượng tỏa ra trên điện trở do hiệu ứng Joule được tính bằng:",
        options: [
            "Q = I²Rt",
            "Q = IRT",
            "Q = UIt",
            "Q = URt"
        ],
        a: 0,
        expl: "Nhiệt lượng Joule: Q = I²Rt."
    },
    
    // Câu 45
    {
        type: "multiple-choice",
        q: "Hiệu ứng Joule là:",
        options: [
            "Sự tỏa nhiệt trên dây dẫn khi có dòng điện chạy qua",
            "Sự phát sáng của dây dẫn khi có dòng điện",
            "Sự tạo từ trường của dòng điện",
            "Sự phân cực điện của dây dẫn"
        ],
        a: 0,
        expl: "Hiệu ứng Joule là hiện tượng tỏa nhiệt trên dây dẫn khi có dòng điện chạy qua."
    },
    
    // Câu 46
    {
        type: "multiple-choice",
        q: "Khi điện trở tăng lên, công suất tiêu thụ (với hiệu điện thế không đổi):",
        options: ["Giảm", "Tăng", "Không đổi", "Tăng rồi giảm"],
        a: 0,
        expl: "P = U²/R, khi U không đổi, R tăng thì P giảm."
    },
    
    // Câu 47
    {
        type: "multiple-choice",
        q: "Khi cường độ dòng điện tăng lên, công suất tiêu thụ (với điện trở không đổi):",
        options: ["Tăng theo bình phương", "Tăng tuyến tính", "Giảm", "Không đổi"],
        a: 0,
        expl: "P = I²R, khi R không đổi, P tăng theo bình phương của I."
    },
    
    // Câu 48
    {
        type: "multiple-choice",
        q: "Công suất của nguồn điện là:",
        options: [
            "P_ng = ε.I",
            "P_ng = U.I",
            "P_ng = I²r",
            "P_ng = U²/r"
        ],
        a: 0,
        expl: "Công suất của nguồn: P_ng = ε.I."
    },
    
    // Câu 49
    {
        type: "multiple-choice",
        q: "Công suất hữu ích trên mạch ngoài là:",
        options: [
            "P_ch = U.I",
            "P_ch = ε.I",
            "P_ch = I²r",
            "P_ch = U²/R"
        ],
        a: 0,
        expl: "Công suất hữu ích trên mạch ngoài: P_ch = U.I."
    },
    
    // Câu 50
    {
        type: "multiple-choice",
        q: "Công suất hao phí trên điện trở trong là:",
        options: [
            "P_hao = I²r",
            "P_hao = U.I",
            "P_hao = ε.I",
            "P_hao = U²/r"
        ],
        a: 0,
        expl: "Công suất hao phí trên điện trở trong: P_hao = I²r."
    },
    
    // Câu 51
    {
        type: "multiple-choice",
        q: "Điều kiện để công suất hữu ích đạt giá trị lớn nhất là:",
        options: [
            "R = r",
            "R >> r",
            "R << r",
            "R = 2r"
        ],
        a: 0,
        expl: "Công suất hữu ích lớn nhất khi R = r."
    },
    
    // Câu 52
    {
        type: "multiple-choice",
        q: "Khi R = r, hiệu suất của nguồn điện là:",
        options: ["50%", "100%", "25%", "75%"],
        a: 0,
        expl: "Khi R = r, η = U/ε = R/(R+r) = R/(2R) = 50%."
    },
    
    // Câu 53
    {
        type: "multiple-choice",
        q: "Một bóng đèn ghi 220V-60W. Điện trở của đèn khi hoạt động bình thường là:",
        options: ["806,7 Ω", "484 Ω", "366,7 Ω", "220 Ω"],
        a: 0,
        expl: "R = U²/P = 220²/60 = 48400/60 ≈ 806,7 Ω."
    },
    
    // Câu 54
    {
        type: "multiple-choice",
        q: "Một bóng đèn ghi 220V-60W. Cường độ dòng điện qua đèn khi hoạt động bình thường là:",
        options: ["0,27 A", "0,5 A", "1 A", "2 A"],
        a: 0,
        expl: "I = P/U = 60/220 ≈ 0,27 A."
    },
    
    // Câu 55
    {
        type: "multiple-choice",
        q: "Đơn vị của điện năng tiêu thụ thường dùng trong đời sống là:",
        options: ["kWh", "W.s", "J", "cal"],
        a: 0,
        expl: "Điện năng tiêu thụ thường tính bằng kWh."
    },
    
    // ============================================
    // CÂU 56-70: MẠCH ĐIỆN GHÉP NỐI
    // ============================================
    
    // Câu 56
    {
        type: "multiple-choice",
        q: "Khi mắc các điện trở nối tiếp, đại lượng nào không đổi qua từng điện trở?",
        options: ["Cường độ dòng điện", "Hiệu điện thế", "Công suất", "Điện trở"],
        a: 0,
        expl: "Mắc nối tiếp: cường độ dòng điện không đổi qua từng điện trở."
    },
    
    // Câu 57
    {
        type: "multiple-choice",
        q: "Khi mắc các điện trở song song, đại lượng nào không đổi trên từng điện trở?",
        options: ["Hiệu điện thế", "Cường độ dòng điện", "Công suất", "Điện trở"],
        a: 0,
        expl: "Mắc song song: hiệu điện thế không đổi trên từng điện trở."
    },
    
    // Câu 58
    {
        type: "multiple-choice",
        q: "Điện trở tương đương của hai điện trở R₁ và R₂ mắc song song là:",
        options: [
            "$\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
            "$R = R_1 + R_2$",
            "$R = \\frac{R_1 + R_2}{2}$",
            "$R = \\frac{R_1 R_2}{R_1 + R_2}$"
        ],
        a: 0,
        expl: "Mắc song song: 1/R = 1/R₁ + 1/R₂."
    },
    
    // Câu 59
    {
        type: "multiple-choice",
        q: "Khi mắc hai điện trở giống nhau R song song, điện trở tương đương là:",
        options: ["R/2", "2R", "R", "R²"],
        a: 0,
        expl: "R = R/2 khi mắc hai điện trở giống nhau song song."
    },
    
    // Câu 60
    {
        type: "multiple-choice",
        q: "Khi mắc hai điện trở giống nhau R nối tiếp, điện trở tương đương là:",
        options: ["2R", "R/2", "R", "R²"],
        a: 0,
        expl: "R = 2R khi mắc hai điện trở giống nhau nối tiếp."
    },
    
    // Câu 61
    {
        type: "multiple-choice",
        q: "Trong mạch song song, dòng điện chính bằng:",
        options: [
            "Tổng các dòng nhánh",
            "Dòng điện nhánh lớn nhất",
            "Dòng điện nhánh nhỏ nhất",
            "Trung bình các dòng nhánh"
        ],
        a: 0,
        expl: "Trong mạch song song: I = I₁ + I₂ + I₃ + ..."
    },
    
    // Câu 62
    {
        type: "multiple-choice",
        q: "Trong mạch nối tiếp, hiệu điện thế tổng bằng:",
        options: [
            "Tổng hiệu điện thế từng phần",
            "Hiệu điện thế lớn nhất",
            "Hiệu điện thế nhỏ nhất",
            "Hiệu điện thế trung bình"
        ],
        a: 0,
        expl: "Trong mạch nối tiếp: U = U₁ + U₂ + U₃ + ..."
    },
    
    // Câu 63
    {
        type: "multiple-choice",
        q: "Khi có một điện trở bị hỏng (hở mạch) trong mạch song song:",
        options: [
            "Các điện khác vẫn hoạt động bình thường",
            "Cả mạch đều hỏng",
            "Chỉ có điện trở hỏng không hoạt động",
            "Dòng điện tăng vọt"
        ],
        a: 0,
        expl: "Trong mạch song song, khi một nhánh hở thì các nhánh khác vẫn hoạt động."
    },
    
    // Câu 64
    {
        type: "multiple-choice",
        q: "Khi có một điện trở bị hỏng (hở mạch) trong mạch nối tiếp:",
        options: [
            "Cả mạch đều hỏng",
            "Các điện trở khác vẫn hoạt động",
            "Dòng điện giảm một nửa",
            "Dòng điện tăng gấp đôi"
        ],
        a: 0,
        expl: "Trong mạch nối tiếp, khi một vị trí hở thì cả mạch không có dòng điện."
    },
    
    // Câu 65
    {
        type: "multiple-choice",
        q: "Để đo điện trở của một thiết bị điện, ta dùng:",
        options: ["Vôn-ôm kế", "Ampe kế", "Vôn kế", "Ôm kế"],
        a: 0,
        expl: "Vôn-ôm kế (multimeter) có thể đo điện trở."
    },
    
    // Câu 66
    {
        type: "multiple-choice",
        q: "Khi mắc các thiết bị điện trong gia đình, chúng được mắc:",
        options: ["Song song", "Nối tiếp", "Vừa nối tiếp vừa song song", "Tùy chỉnh"],
        a: 0,
        expl: "Các thiết bị điện trong gia đình được mắc song song để hoạt động độc lập."
    },
    
    // Câu 67
    {
        type: "multiple-choice",
        q: "Công tắc trong mạch điện được mắc:",
        options: ["Nối tiếp với thiết bị", "Song song với thiết bị", "Nối đất", "Bất kỳ vị trí nào"],
        a: 0,
        expl: "Công tắc được mắc nối tiếp với thiết bị để điều khiển dòng điện."
    },
    
    // Câu 68
    {
        type: "multiple-choice",
        q: "Khi thêm một thiết bị vào mạch song song, điện trở tương đương của mạch:",
        options: ["Giảm", "Tăng", "Không đổi", "Tăng rồi giảm"],
        a: 0,
        expl: "Khi thêm nhánh song song, điện trở tương đương giảm."
    },
    
    // Câu 69
    {
        type: "multiple-choice",
        q: "Khi thêm một thiết bị vào mạch song song, dòng điện chính:",
        options: ["Tăng", "Giảm", "Không đổi", "Tăng rồi giảm"],
        a: 0,
        expl: "Khi R_tđ giảm, I_chính = U/R_tđ tăng."
    },
    
    // Câu 70
    {
        type: "multiple-choice",
        q: "Trong mạch hỗn hợp, cách tính điện trở tương đương là:",
        options: [
            "Tính từng phần rồi cộng lại",
            "Công thức đặc biệt cho mạch hỗn hợp",
            "Không thể tính được",
            "Tính trung bình các điện trở"
        ],
        a: 0,
        expl: "Mạch hỗn hợp được tính bằng cách chia thành các phần đơn giản rồi tính tổng hợp."
    },
    
    // ============================================
    // CÂU 71-80: CÁC VẤN ĐỀ THỰC TẾ
    // ============================================
    
    // Câu 71
    {
        type: "multiple-choice",
        q: "Dây dẫn điện trong nhà thường làm bằng đồng hoặc nhôm vì:",
        options: [
            "Có điện trở suất nhỏ",
            "Có giá thành rẻ",
            "Dễ gia công",
            "Bền bỉ"
        ],
        a: 0,
        expl: "Đồng và nhôm có điện trở suất nhỏ, dẫn điện tốt."
    },
    
    // Câu 72
    {
        type: "multiple-choice",
        q: "Dây đốt nóng trong các thiết bị gia dụng thường làm bằng:",
        options: [
            "Niken-crom hoặc crom-niken",
            "Đồng",
            "Nhôm",
            "Bạc"
        ],
        a: 0,
        expl: "Niken-crom có điện trở suất lớn và chịu nhiệt tốt."
    },
    
    // Câu 73
    {
        type: "multiple-choice",
        q: "Chất bán dẫn có đặc điểm điện trở:",
        options: [
            "Giảm khi nhiệt độ tăng",
            "Tăng khi nhiệt độ tăng",
            "Không đổi khi nhiệt độ thay đổi",
            "Tăng rồi giảm khi nhiệt độ tăng"
        ],
        a: 0,
        expl: "Chất bán dẫn có điện trở giảm khi nhiệt độ tăng."
    },
    
    // Câu 74
    {
        type: "multiple-choice",
        q: "Siêu dẫn là chất có điện trở:",
        options: [
            "Bằng 0 ở nhiệt độ đủ thấp",
            "Rất lớn ở mọi nhiệt độ",
            "Trung bình",
            "Tăng khi nhiệt độ giảm"
        ],
        a: 0,
        expl: "Siêu dẫn có điện trở bằng 0 ở nhiệt độ dưới nhiệt độ tới hạn."
    },
    
    // Câu 75
    {
        type: "multiple-choice",
        q: "Hiệu ứng nhiệt điện là hiện tượng:",
        options: [
            "Xuất hiện hiệu điện thế khi có sự khác biệt nhiệt độ",
            "Tỏa nhiệt khi có dòng điện",
            "Tạo từ trường khi có dòng điện",
            "Phát sáng khi có dòng điện"
        ],
        a: 0,
        expl: "Hiệu ứng nhiệt điện: sự xuất hiện hiệu điện thế khi có sự khác biệt nhiệt độ."
    },
    
    // Câu 76
    {
        type: "multiple-choice",
        q: "An-zen (zenner) là đi-ốt đặc biệt dùng để:",
        options: [
            "Ổn áp",
            "Chỉnh lưu",
            "Khuếch đại",
            "Chuyển đổi tần số"
        ],
        a: 0,
        expl: "An-zen dùng để ổn áp."
    },
    
    // Câu 77
    {
        type: "multiple-choice",
        q: "Khi chọn dây dẫn điện, cần quan tâm đến:",
        options: [
            "Tiết diện và dòng điện cho phép",
            "Chỉ màu sắc của dây",
            "Chỉ giá thành",
            "Chỉ chiều dài"
        ],
        a: 0,
        expl: "Tiết diện dây phải phù hợp với dòng điện cho phép để tránh quá nhiệt."
    },
    
    // Câu 78
    {
        type: "multiple-choice",
        q: "Nguy cơ lớn nhất khi dây dẫn điện quá tải là:",
        options: [
            "Cháy nổ",
            "Giảm hiệu suất",
            "Tăng điện trở",
            "Giảm điện áp"
        ],
        a: 0,
        expl: "Dây dẫn quá tải có thể gây cháy nổ do tỏa nhiệt quá mức."
    },
    
    // Câu 79
    {
        type: "multiple-choice",
        q: "Cầu chì hoạt động dựa trên nguyên lý:",
        options: [
            "Hiệu ứng Joule",
            "Định luật Ohm",
            "Hiệu ứng nhiệt điện",
            "Suất điện động"
        ],
        a: 0,
        expl: "Cầu chì hoạt động dựa trên hiệu ứng Joule - nóng chảy khi dòng điện quá lớn."
    },
    
    // Câu 80
    {
        type: "multiple-choice",
        q: "Trong các thiết bị điện tử, đi-ốt bán dẫn thường dùng để:",
        options: [
            "Cho dòng điện chạy một chiều",
            "Tăng điện áp",
            "Giảm điện trở",
            "Lọc nhiễu"
        ],
        a: 0,
        expl: "Đi-ốt bán dẫn có tính chỉnh lưu - cho dòng điện chạy một chiều."
    }
];
