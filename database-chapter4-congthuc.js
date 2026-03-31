// ==============================================
// FILE: database-chapter4-congthuc.js
// ==============================================
// Ngân hàng câu hỏi trắc nghiệm công thức chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// 60 câu trắc nghiệm về công thức, tên gọi, đơn vị các đại lượng
// ==============================================

window.questionsChapter4CongThuc = [
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
    
    // Câu 6
    {
        type: "multiple-choice",
        q: "Trong công thức $q = n.e$, đại lượng e là:",
        options: [
            "Điện tích của proton",
            "Điện tích của electron",
            "Điện tích của nơtron",
            "Điện tích của ion"
        ],
        a: 1,
        expl: "e là điện tích của electron."
    },
    
    // Câu 7
    {
        type: "multiple-choice",
        q: "Giá trị của điện tích electron là:",
        options: [
            "$e = 1,6.10^{-19} C$",
            "$e = -1,6.10^{-19} C$",
            "$e = 9,1.10^{-31} C$",
            "$e = 1,6.10^{19} C$"
        ],
        a: 1,
        expl: "Điện tích của electron là $e = -1,6.10^{-19} C$."
    },
    
    // Câu 8
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
    
    // Câu 9
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
    
    // Câu 10
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
    
    // Câu 11
    {
        type: "multiple-choice",
        q: "Đơn vị của mật độ hạt tải điện n trong hệ SI là:",
        options: [
            "hạt/m",
            "hạt/m²",
            "hạt/m³",
            "hạt/s"
        ],
        a: 2,
        expl: "Mật độ hạt tải điện có đơn vị là hạt/m³."
    },
    
    // Câu 12
    {
        type: "multiple-choice",
        q: "Trong công thức $I = nSve$, đại lượng S là:",
        options: [
            "Chiều dài dây dẫn",
            "Tiết diện thẳng của dây dẫn",
            "Điện trở suất",
            "Cường độ dòng điện"
        ],
        a: 1,
        expl: "S là tiết diện thẳng của dây dẫn."
    },
    
    // Câu 13
    {
        type: "multiple-choice",
        q: "Đơn vị của tiết diện thẳng S trong hệ SI là:",
        options: [
            "m",
            "m²",
            "m³",
            "mm²"
        ],
        a: 1,
        expl: "Tiết diện thẳng có đơn vị là m²."
    },
    
    // Câu 14
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
        expl: "Điện trở có đơn vị là ôm (Ω)."
    },
    
    // Câu 16
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
    
    // Câu 17
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
    
    // Câu 18
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
    
    // Câu 19
    {
        type: "multiple-choice",
        q: "Trong công thức $R = \\rho \\frac{l}{S}$, đại lượng l là:",
        options: [
            "Tiết diện dây dẫn",
            "Chiều dài dây dẫn",
            "Điện trở suất",
            "Điện trở"
        ],
        a: 1,
        expl: "l là chiều dài dây dẫn."
    },
    
    // Câu 20
    {
        type: "multiple-choice",
        q: "Đơn vị của chiều dài l trong hệ SI là:",
        options: [
            "mm",
            "cm",
            "m",
            "km"
        ],
        a: 2,
        expl: "Chiều dài có đơn vị là mét (m)."
    },
    
    // Câu 21
    {
        type: "multiple-choice",
        q: "Khi hiệu điện thế U đặt vào hai đầu điện trở R tăng gấp đôi, cường độ dòng điện I thay đổi thế nào? (theo công thức I = U/R)",
        options: [
            "Giảm một nửa",
            "Không đổi",
            "Tăng gấp đôi",
            "Tăng gấp bốn"
        ],
        a: 2,
        expl: "Theo định luật Ôm, nếu U tăng gấp đôi thì I cũng tăng gấp đôi."
    },
    
    // Câu 22
    {
        type: "multiple-choice",
        q: "Khi điện trở R tăng gấp đôi, hiệu điện thế U không đổi, cường độ dòng điện I thay đổi thế nào? (theo I = U/R)",
        options: [
            "Giảm một nửa",
            "Không đổi",
            "Tăng gấp đôi",
            "Tăng gấp bốn"
        ],
        a: 0,
        expl: "Theo định luật Ôm, nếu R tăng gấp đôi thì I giảm một nửa."
    },
    
    // Câu 23
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
    
    // Câu 24
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
    
    // Câu 25
    {
        type: "multiple-choice",
        q: "Trong công thức $\\mathcal{E} = \\frac{A}{q}$, đại lượng A là:",
        options: [
            "Cường độ dòng điện",
            "Công của lực lạ",
            "Hiệu điện thế",
            "Điện trở"
        ],
        a: 1,
        expl: "A là công của lực lạ."
    },
    
    // Câu 26
    {
        type: "multiple-choice",
        q: "Đơn vị của công A trong hệ SI là:",
        options: [
            "Oát (W)",
            "Vôn (V)",
            "Ampe (A)",
            "Jun (J)"
        ],
        a: 3,
        expl: "Công có đơn vị là jun (J)."
    },
    
    // Câu 27
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
    
    // Câu 28
    {
        type: "multiple-choice",
        q: "Tên gọi của đại lượng r trong công thức $U = \\mathcal{E} - Ir$ là:",
        options: [
            "Điện trở mạch ngoài",
            "Điện trở tương đương",
            "Điện trở trong của nguồn",
            "Điện trở suất"
        ],
        a: 2,
        expl: "r là điện trở trong của nguồn."
    },
    
    // Câu 29
    {
        type: "multiple-choice",
        q: "Đơn vị của điện trở trong r là:",
        options: [
            "Vôn (V)",
            "Ampe (A)",
            "Oát (W)",
            "Ôm (Ω)"
        ],
        a: 3,
        expl: "Điện trở có đơn vị là ôm (Ω)."
    },
    
    // Câu 30
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
    
    // Câu 31
    {
        type: "multiple-choice",
        q: "Trong công thức $I = \\frac{\\mathcal{E}}{R + r}$, đại lượng R là:",
        options: [
            "Điện trở trong của nguồn",
            "Điện trở mạch ngoài",
            "Điện trở suất",
            "Điện trở tương đương"
        ],
        a: 1,
        expl: "R là điện trở mạch ngoài."
    },
    
    // Câu 32
    {
        type: "multiple-choice",
        q: "Khi mạch ngoài hở (không có dòng điện), hiệu điện thế giữa hai cực của nguồn có giá trị:",
        options: [
            "$U = 0$",
            "$U = \\mathcal{E}$",
            "$U = \\mathcal{E} + Ir$",
            "$U = Ir$"
        ],
        a: 1,
        expl: "Khi mạch hở, $U = \\mathcal{E}$."
    },
    
    // Câu 33
    {
        type: "multiple-choice",
        q: "Khi xảy ra đoản mạch (nối tắt hai cực của nguồn), cường độ dòng điện được tính bằng:",
        options: [
            "$I = \\frac{\\mathcal{E}}{R}$",
            "$I = \\frac{\\mathcal{E}}{r}$",
            "$I = \\frac{U}{R}$",
            "$I = 0$"
        ],
        a: 1,
        expl: "Khi đoản mạch, $I = \\frac{\\mathcal{E}}{r}$."
    },
    
    // Câu 34
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
    
    // Câu 35
    {
        type: "multiple-choice",
        q: "Hiệu suất của nguồn điện còn được tính bằng công thức:",
        options: [
            "$H = \\frac{R}{R + r}$",
            "$H = \\frac{r}{R + r}$",
            "$H = \\frac{R}{r}$",
            "$H = \\frac{r}{R}$"
        ],
        a: 0,
        expl: "Hiệu suất: $H = \\frac{R}{R+r}$."
    },
    
    // Câu 36
    {
        type: "multiple-choice",
        q: "Khi điện trở mạch ngoài R rất lớn so với điện trở trong r, hiệu suất của nguồn điện:",
        options: [
            "Tiến tới 0",
            "Tiến tới 50%",
            "Tiến tới 100%",
            "Tiến tới vô cùng"
        ],
        a: 2,
        expl: "Khi $R >> r$, $H = \\frac{R}{R+r} \\approx 1$ (100%)."
    },
    
    // Câu 37
    {
        type: "multiple-choice",
        q: "Khi điện trở mạch ngoài R bằng điện trở trong r, hiệu suất của nguồn điện là:",
        options: [
            "0%",
            "25%",
            "50%",
            "100%"
        ],
        a: 2,
        expl: "Khi $R = r$, $H = \\frac{R}{R+r} = \\frac{r}{r+r} = 50\\%$."
    },
    
    // Câu 38
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
    
    // Câu 39
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
    
    // Câu 40
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
    
    // Câu 41
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
    
    // Câu 42
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
    
    // Câu 43
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
    
    // Câu 44
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
    
    // Câu 45
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
    
    // Câu 46
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
    
    // Câu 47
    {
        type: "multiple-choice",
        q: "Công thức tính nhiệt lượng tỏa ra trên điện trở (định luật Joule – Lenz) là:",
        options: [
            "$Q = U I t$",
            "$Q = I^2 R t$",
            "$Q = \\frac{U^2}{R} t$",
            "Cả A, B, C đều đúng"
        ],
        a: 3,
        expl: "Nhiệt lượng tỏa ra có thể tính bằng các công thức tương đương: $Q = U I t = I^2 R t = \\frac{U^2}{R} t$."
    },
    
    // Câu 48
    {
        type: "multiple-choice",
        q: "Đơn vị của nhiệt lượng Q trong hệ SI là:",
        options: [
            "Oát (W)",
            "Vôn (V)",
            "Jun (J)",
            "Ampe (A)"
        ],
        a: 2,
        expl: "Nhiệt lượng có đơn vị là jun (J)."
    },
    
    // Câu 49
    {
        type: "multiple-choice",
        q: "1 kWh (kilôoát giờ) tương đương với bao nhiêu Jun?",
        options: [
            "1000 J",
            "3600 J",
            "3,6.10⁵ J",
            "3,6.10⁶ J"
        ],
        a: 3,
        expl: "1 kWh = 1000 W × 3600 s = 3,6.10⁶ J."
    },
    
    // Câu 50
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
    
    // Câu 51
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
    
    // Câu 52
    {
        type: "multiple-choice",
        q: "Công thức tính công suất có ích (trên mạch ngoài) là:",
        options: [
            "$P_{ich} = \\mathcal{E} I$",
            "$P_{ich} = I^2 r$",
            "$P_{ich} = U I$",
            "$P_{ich} = \\frac{U^2}{r}$"
        ],
        a: 2,
        expl: "Công suất có ích: $P_{ich} = U I$."
    },
    
    // Câu 53
    {
        type: "multiple-choice",
        q: "Mối liên hệ giữa công suất toàn phần, công suất có ích và công suất hao phí là:",
        options: [
            "$P_{ng} = P_{ich} + P_{hp}$",
            "$P_{ng} = P_{ich} - P_{hp}$",
            "$P_{ng} = P_{ich} \\times P_{hp}$",
            "$P_{ng} = \\frac{P_{ich}}{P_{hp}}$"
        ],
        a: 0,
        expl: "Công suất toàn phần bằng tổng công suất có ích và công suất hao phí."
    },
    
    // Câu 54
    {
        type: "multiple-choice",
        q: "Từ công thức $I = \\frac{U}{R}$, nếu biết I và U, muốn tính R ta dùng:",
        options: [
            "$R = U.I$",
            "$R = \\frac{U}{I}$",
            "$R = \\frac{I}{U}$",
            "$R = U^2 I$"
        ],
        a: 1,
        expl: "Từ $I = \\frac{U}{R}$ suy ra $R = \\frac{U}{I}$."
    },
    
    // Câu 55
    {
        type: "multiple-choice",
        q: "Từ công thức $R = \\rho \\frac{l}{S}$, nếu biết R, ρ và S, muốn tính l ta dùng:",
        options: [
            "$l = \\frac{R.S}{\\rho}$",
            "$l = \\frac{R}{\\rho.S}$",
            "$l = \\frac{\\rho.S}{R}$",
            "$l = R.\\rho.S$"
        ],
        a: 0,
        expl: "Từ $R = \\rho \\frac{l}{S}$ suy ra $l = \\frac{R.S}{\\rho}$."
    },
    
    // Câu 56
    {
        type: "multiple-choice",
        q: "Từ công thức $v = \\frac{I}{nS|q|}$, nếu biết v, n, S và |q|, muốn tính I ta dùng:",
        options: [
            "$I = v.n.S.|q|$",
            "$I = \\frac{v}{n.S.|q|}$",
            "$I = \\frac{n.S.|q|}{v}$",
            "$I = v.n.S$"
        ],
        a: 0,
        expl: "Từ $v = \\frac{I}{nS|q|}$ suy ra $I = v.n.S.|q|$."
    },
    
    // Câu 57
    {
        type: "multiple-choice",
        q: "Từ công thức $U = \\mathcal{E} - Ir$, nếu biết U, ε và I, muốn tính r ta dùng:",
        options: [
            "$r = \\frac{\\mathcal{E} - U}{I}$",
            "$r = \\frac{U - \\mathcal{E}}{I}$",
            "$r = \\frac{\\mathcal{E} + U}{I}$",
            "$r = \\frac{I}{\\mathcal{E} - U}$"
        ],
        a: 0,
        expl: "Từ $U = \\mathcal{E} - Ir$ suy ra $r = \\frac{\\mathcal{E} - U}{I}$."
    },
    
    // Câu 58
    {
        type: "multiple-choice",
        q: "Từ công thức $I = \\frac{\\mathcal{E}}{R + r}$, nếu biết I, ε và r, muốn tính R ta dùng:",
        options: [
            "$R = \\frac{\\mathcal{E}}{I} - r$",
            "$R = \\frac{\\mathcal{E}}{I} + r$",
            "$R = \\frac{I}{\\mathcal{E}} - r$",
            "$R = \\frac{I}{\\mathcal{E}} + r$"
        ],
        a: 0,
        expl: "Từ $I = \\frac{\\mathcal{E}}{R + r}$ suy ra $R = \\frac{\\mathcal{E}}{I} - r$."
    },
    
    // Câu 59
    {
        type: "multiple-choice",
        q: "Từ công thức $P = U I$, nếu biết P và U, muốn tính I ta dùng:",
        options: [
            "$I = \\frac{P}{U}$",
            "$I = \\frac{U}{P}$",
            "$I = P.U$",
            "$I = \\frac{P}{U^2}$"
        ],
        a: 0,
        expl: "Từ $P = U I$ suy ra $I = \\frac{P}{U}$."
    },
    
    // Câu 60
    {
        type: "multiple-choice",
        q: "Từ công thức $P = I^2 R$, nếu biết P và I, muốn tính R ta dùng:",
        options: [
            "$R = \\frac{P}{I^2}$",
            "$R = \\frac{I^2}{P}$",
            "$R = P.I^2$",
            "$R = \\frac{P}{I}$"
        ],
        a: 0,
        expl: "Từ $P = I^2 R$ suy ra $R = \\frac{P}{I^2}$."
    }
];
