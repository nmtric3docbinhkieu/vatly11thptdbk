// ==============================================
// FILE: kiemtrachuong3.js - 40 câu hoàn chỉnh
// ==============================================
// Ngân hàng câu hỏi kiểm tra chương 3 - 40 câu
// Vật lí 11 - Năm học 2025-2026
// Cấu trúc: 
// - Phần I: Trắc nghiệm nhiều lựa chọn (24 câu)
//   + Bài 11: Định luật Coulomb (8 câu)
//   + Bài 12: Điện trường (6 câu)
//   + Bài 13: Thế năng điện - Điện thế (3 câu)
//   + Bài 14: Tụ điện (7 câu)
// - Phần II: Đúng - Sai (4 câu)
// - Phần III: Trả lời ngắn (8 câu)
// - Phần IV: Tự luận (4 câu)
// ==============================================

window.questionsChapter3 = [
    // ============================================
    // PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (24 CÂU)
    // ============================================
    
    // ========== BÀI 11: ĐỊNH LUẬT COULOMB (8 CÂU) ==========
    
    // Câu 1 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Trong hệ đơn vị SI, đơn vị đo điện tích là:",
        options: ["Newton (N)", "Coulomb (C)", "Volt (V)", "Farad (F)"],
        a: 1,
        expl: "Theo hệ SI, điện tích cơ bản được định nghĩa là Coulomb (C)."
    },
    
    // Câu 2 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Hai điện tích cùng dấu khi đặt gần nhau trong chân không sẽ:",
        options: ["Lúc hút, lúc đẩy", "Không tương tác", "Đẩy nhau", "Hút nhau"],
        a: 2,
        expl: "Theo định luật Coulomb, hai điện tích cùng dấu đẩy nhau; trái dấu hút nhau."
    },
    
    // Câu 3 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Theo định luật Coulomb, độ lớn của lực tương tác giữa hai điện tích điểm tỉ lệ thuận với:",
        options: [
            "Khoảng cách giữa hai điện tích.",
            "Bình phương khoảng cách giữa hai điện tích.",
            "Tích độ lớn của hai điện tích.",
            "Tổng độ lớn của hai điện tích."
        ],
        a: 2,
        expl: "Công thức $F = \\frac{k|q_1q_2|}{r^2}$ cho thấy $F \\propto |q_1q_2|$."
    },
    
    // Câu 4 (TH - Bài 11)
    {
        type: "multiple-choice",
        q: "Nếu giữ nguyên độ lớn điện tích nhưng tăng khoảng cách giữa hai điện tích điểm lên 3 lần thì lực Coulomb sẽ:",
        options: ["Tăng lên 3 lần.", "Giảm đi 3 lần.", "Tăng lên 9 lần.", "Giảm đi 9 lần."],
        a: 3,
        expl: "Vì $F \\propto \\frac{1}{r^2}$, khi $r \\to 3r$ thì $F \\to \\frac{F}{9}$."
    },
    
    // Câu 5 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Phương của lực tương tác giữa hai điện tích điểm có đặc điểm:",
        options: [
            "Luôn nằm theo phương thẳng đứng.",
            "Trùng với đường thẳng nối hai điện tích điểm đó.",
            "Vuông góc với đường thẳng nối hai điện tích điểm.",
            "Luôn nằm theo phương ngang."
        ],
        a: 1,
        expl: "Lực Coulomb tác dụng dọc theo đường nối hai điện tích (vector $\\vec{r}$)."
    },
    
    // Câu 6 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Hằng số điện môi của môi trường chân không được quy ước bằng:",
        options: ["0", "1", "9", "2"],
        a: 1,
        expl: "Theo quy ước, $\\varepsilon = 1$ cho chân không."
    },
    
    // Câu 7 (TH - Bài 11)
    {
        type: "multiple-choice",
        q: "Khi đưa hai điện tích điểm từ chân không vào trong một chất lỏng điện môi có hằng số điện môi = 2 (giữ nguyên khoảng cách), lực tương tác giữa chúng sẽ:",
        options: ["Giảm đi 2 lần.", "Tăng lên 2 lần.", "Giảm đi 4 lần.", "Không thay đổi."],
        a: 0,
        expl: "$F = \\frac{k|q_1q_2|}{\\varepsilon r^2}$, $\\varepsilon = 2$ nên $F' = \\frac{F}{2}$."
    },
    
    // Câu 8 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Yếu tố nào sau đây không ảnh hưởng đến độ lớn của lực tương tác tĩnh điện giữa hai điện tích điểm?",
        options: [
            "Khoảng cách giữa hai điện tích.",
            "Độ lớn của các điện tích.",
            "Bản chất của môi trường (điện môi).",
            "Khối lượng của các hạt mang điện."
        ],
        a: 3,
        expl: "Định luật Coulomb không phụ thuộc vào khối lượng."
    },
    
    // ========== BÀI 12: ĐIỆN TRƯỜNG (6 CÂU) ==========
    
    // Câu 9 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Điện trường là:",
        options: [
            "Một dạng vật chất bao quanh các hạt mang điện và truyền tương tác giữa các điện tích.",
            "Một môi trường chất lỏng đặc biệt dùng để hòa tan các điện tích.",
            "Một lực hút hoặc đẩy xuất hiện khi các vật mang điện chạm vào nhau.",
            "Một vùng không gian bao quanh các vật có khối lượng lớn."
        ],
        a: 0,
        expl: "Điện trường là dạng vật chất đặc biệt bao quanh điện tích và truyền tương tác giữa các điện tích."
    },
    
    // Câu 10 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Đại lượng đặc trưng cho độ mạnh yếu của điện trường tại một điểm về phương diện tác dụng lực là cường độ điện trường. Trong hệ SI, đơn vị của cường độ điện trường là:",
        options: ["Newton trên mét (N/m)", "Coulomb trên mét (C/m)", "Vôn trên mét (V/m)", "Vôn (V)"],
        a: 2,
        expl: "Đơn vị của cường độ điện trường là V/m (tương đương N/C)."
    },
    
    // Câu 11 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Điện trường của một điện tích điểm có đặc điểm là:",
        options: [
            "Luôn là điện trường đều ở mọi điểm trong không gian.",
            "Có cường độ điện trường tại các điểm khác nhau là như nhau.",
            "Điện trường tồn tại trong vùng không gian bao quanh điện tích điểm đó.",
            "Chỉ xuất hiện khi có một điện tích khác đặt vào gần nó."
        ],
        a: 2,
        expl: "Điện trường tồn tại quanh điện tích điểm, không phụ thuộc vào điện tích thử."
    },
    
    // Câu 12 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Hình dạng đường sức điện trường của một điện tích điểm dương là:",
        options: [
            "Những đường thẳng song song cách đều nhau.",
            "Những đường thẳng có hướng đi vào điện tích.",
            "Những đường tròn đồng tâm nằm xung quanh điện tích.",
            "Những đường thẳng có hướng đi ra xa điện tích."
        ],
        a: 3,
        expl: "Đường sức của điện tích dương hướng ra ngoài từ điện tích."
    },
    
    // Câu 13 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Đặc điểm đường sức điện của một điện tích điểm âm là:",
        options: [
            "Các đường thẳng có chiều hướng về phía điện tích âm.",
            "Các đường thẳng có chiều hướng ra xa điện tích âm.",
            "Các đường cong khép kín không có điểm đầu và điểm cuối.",
            "Các đường thẳng nằm ngang song song với nhau."
        ],
        a: 0,
        expl: "Đường sức của điện tích âm hướng vào điện tích."
    },
    
    // Câu 14 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Điện trường đều thường tồn tại trong vùng không gian:",
        options: [
            "Ở xung quanh một quả cầu tích điện đều.",
            "Giữa hai bản kim loại phẳng, đặt song song và tích điện trái dấu.",
            "Giữa hai điện tích điểm có độ lớn bằng nhau nhưng trái dấu.",
            "Ở gần một sợi dây dẫn thẳng dài vô hạn tích điện."
        ],
        a: 1,
        expl: "Giữa hai bản tụ phẳng song song tích điện trái dấu tạo ra điện trường đều."
    },
    
    // ========== BÀI 13: THẾ NĂNG ĐIỆN – ĐIỆN THẾ (3 CÂU) ==========
    
    // Câu 15 (NB - Bài 13)
    {
        type: "multiple-choice",
        q: "Trong hệ SI, đơn vị của điện thế và hiệu điện thế là:",
        options: ["Jun (J)", "Vôn (V)", "Vôn trên mét (V/m)", "Coulomb (C)"],
        a: 1,
        expl: "Đơn vị của điện thế là Vôn (V). 1 V = 1 J/C."
    },
    
    // Câu 16 (NB - Bài 13)
    {
        type: "multiple-choice",
        q: "Đặc điểm nào sau đây là đặc điểm của công của lực điện trường khi điện tích di chuyển trong điện trường tĩnh?",
        options: [
            "Phụ thuộc vào hình dạng đường đi của điện tích.",
            "Chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối của đường đi.",
            "Luôn dương nếu điện tích dương di chuyển.",
            "Luôn âm nếu điện tích âm di chuyển."
        ],
        a: 1,
        expl: "Lực điện là lực thế, công của lực điện không phụ thuộc vào hình dạng đường đi mà chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối."
    },
    
    // Câu 17 (NB - Bài 13)
    {
        type: "multiple-choice",
        q: "Thế năng của một điện tích q đặt tại điểm M trong điện trường đặc trưng cho:",
        options: [
            "Khả năng tích điện của điện tích q.",
            "Độ lớn của điện trường tại điểm M.",
            "Khả năng sinh công của điện trường khi đặt điện tích q tại điểm M.",
            "Lực tác dụng lên điện tích q tại điểm M."
        ],
        a: 2,
        expl: "Thế năng W = qV, thể hiện khả năng sinh công của điện trường."
    },
    
    // ========== BÀI 14: TỤ ĐIỆN (7 CÂU) ==========
    
    // Câu 18 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Tụ điện là một hệ thống gồm:",
        options: [
            "Hai vật dẫn đặt tiếp xúc với nhau và được bao quanh bởi môi trường dẫn điện.",
            "Hai vật dẫn đặt gần nhau và ngăn cách nhau bằng một lớp cách điện (điện môi).",
            "Hai vật cách điện đặt gần nhau và ngăn cách nhau bằng một lớp vật dẫn.",
            "Một vật dẫn và một vật cách điện đặt xen kẽ nhau."
        ],
        a: 1,
        expl: "Định nghĩa chuẩn của tụ điện: hệ hai vật dẫn đặt gần nhau, ngăn cách bằng lớp điện môi."
    },
    
    // Câu 19 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Trong cấu tạo của tụ điện, lớp môi trường nằm giữa hai bản tụ phải là:",
        options: [
            "Môi trường dẫn điện tốt (như đồng, nhôm).",
            "Môi trường điện môi (cách điện).",
            "Môi trường chân không có dòng điện chạy qua.",
            "Dung dịch axit hoặc muối dẫn điện."
        ],
        a: 1,
        expl: "Lớp giữa hai bản tụ phải là điện môi (cách điện) để tích điện."
    },
    
    // Câu 20 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Điện dung của tụ điện là đại lượng đặc trưng cho:",
        options: [
            "Khả năng tích điện của tụ điện ở một hiệu điện thế nhất định.",
            "Khả năng chịu nhiệt của tụ điện khi làm việc.",
            "Độ lớn điện tích mà tụ điện luôn luôn có sẵn.",
            "Khả năng dẫn điện của tụ điện khi nối vào nguồn điện."
        ],
        a: 0,
        expl: "Điện dung đặc trưng cho khả năng tích điện: Q = CU."
    },
    
    // Câu 21 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Trong hệ SI, đơn vị đo điện dung của tụ điện là:",
        options: ["Coulomb (C)", "Vôn trên mét (V/m)", "Fara (F)", "Vôn (V)"],
        a: 2,
        expl: "Đơn vị điện dung là Fara (F)."
    },
    
    // Câu 22 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Công thức liên hệ giữa điện tích Q, điện dung C và hiệu điện thế U của một tụ điện là:",
        options: ["Q = C/U", "Q = CU", "Q = U/C", "Q = C + U"],
        a: 1,
        expl: "Điện dung được định nghĩa: $C = \\frac{Q}{U} \\Rightarrow Q = CU$."
    },
    
    // Câu 23 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Nguyên tắc để tích điện cho tụ điện là:",
        options: [
            "Nối hai bản của tụ điện với hai cực của một nguồn điện.",
            "Cọ xát hai bản của tụ điện vào nhau.",
            "Đặt tụ điện vào trong một điện trường đều.",
            "Nối một bản của tụ điện với nguồn điện, bản còn lại để hở."
        ],
        a: 0,
        expl: "Nối tụ với nguồn điện tạo hiệu điện thế giữa hai bản tụ."
    },
    
    // Câu 24 (TH - Bài 14)
    {
        type: "multiple-choice",
        q: "Điện dung của một tụ điện phẳng phụ thuộc vào yếu tố nào sau đây?",
        options: [
            "Điện tích đã tích được trên tụ điện.",
            "Hiệu điện thế giữa hai bản tụ điện.",
            "Bản chất điện môi, diện tích đối diện và khoảng cách giữa hai bản tụ.",
            "Thời gian tụ điện được nối với nguồn điện."
        ],
        a: 2,
        expl: "Điện dung tụ phẳng: $C = \\frac{\\varepsilon \\varepsilon_0 S}{d}$ phụ thuộc vào ε (bản chất điện môi), S (diện tích đối diện), d (khoảng cách)."
    },

    // ============================================
    // PHẦN II: TRẮC NGHIỆM ĐÚNG - SAI (4 CÂU)
    // ============================================
    
    // Câu 25 (Bài 11) - Câu 1 phần Đúng-Sai
    {
        type: "true-false",
        q: "Xét hai điện tích điểm q₁ = 2·10⁻⁸ C và q₂ = −8·10⁻⁸ C đặt cố định tại hai điểm cách nhau r = 4 cm trong chân không. Biết ε = 1, k = 9·10⁹ Nm²/C².",
        parts: [
            { content: "Độ lớn lực tương tác tĩnh điện giữa hai điện tích này khi đặt trong chân không là 9·10⁻³ N.", correct: true },
            { content: "Nếu giữ nguyên khoảng cách và độ lớn điện tích nhưng đưa chúng vào môi trường điện môi, lực tương tác sẽ luôn lớn hơn lực tương tác trong chân không.", correct: false },
            { content: "Lực tương tác giữa hai điện tích này là lực hút vì chúng trái dấu nhau.", correct: true },
            { content: "Để lực tương tác giữa hai điện tích này có độ lớn là 2,25·10⁻³ N, ta cần thay đổi khoảng cách giữa chúng thành 8 cm.", correct: true }
        ],
        expl: [
            "a) $F = k\\frac{|q_1q_2|}{r^2}$",
            "$= 9.10^9\\frac{2.10^{-8}.8.10^{-8}}{(0,04)^2}$",
            "$= 9.10^9\\frac{16.10^{-16}}{0,0016}$",
            "$= 9.10^9.10^{-12} = 9.10^{-3} N$ → Đúng.",
            "b) Trong điện môi $\\varepsilon > 1$, $F' = F/\\varepsilon < F$ → Sai.",
            "c) $q_1 > 0$, $q_2 < 0$ trái dấu → hút nhau → Đúng.",
            "d) $F' = F/4 \\Rightarrow r' = 2r = 8$ cm (vì $F \\propto 1/r^2$) → Đúng."
        ].join("<br>")
    },
    
    // Câu 26 (Bài 11) - Câu 2 phần Đúng-Sai
    {
        type: "true-false",
        q: "Hai điện tích điểm giống nhau có độ lớn q₁ = q₂ = 2·10⁻⁷ C đặt cách nhau một khoảng r = 6 cm trong một môi trường có hằng số điện môi ε.",
        parts: [
            { content: "Khi đặt hai điện tích này vào trong dầu hòa ε = 2 mà vẫn giữ nguyên khoảng cách r lực tương tác giữa chúng sẽ giảm đi 2 lần so với khi đặt trong chân không.", correct: true },
            { content: "Trong tất cả các môi trường cách điện, lực tương tác giữa hai điện tích điểm (với cùng khoảng cách và độ lớn) đạt giá trị lớn nhất khi chúng được đặt trong môi trường chân không.", correct: true },
            { content: "Đơn vị của điện tích trong công thức định luật Coulomb là Coulomb (C).", correct: true },
            { content: "Nếu đặt hai điện tích q₁ = q₂ = 2·10⁻⁷ C trong chân không và lực đẩy giữa chúng đo được là 0,1 N, thì khoảng cách giữa hai điện tích đó xấp xỉ là 6 cm.", correct: true }
        ],
        expl: [
            "a) $F' = F/\\varepsilon = F/2$ → Đúng.",
            "b) $\\varepsilon \\geq 1$, nhỏ nhất ở chân không ⇒ $F$ lớn nhất → Đúng.",
            "c) Đơn vị SI của điện tích là Coulomb → Đúng.",
            "d) $r = \\sqrt{\\frac{kq^2}{F}}$",
            "$= \\sqrt{\\frac{9.10^9.(2.10^{-7})^2}{0,1}}$",
            "$= \\sqrt{\\frac{9.10^9.4.10^{-14}}{0,1}}$",
            "$= \\sqrt{\\frac{3,6.10^{-4}}{0,1}} = \\sqrt{3,6.10^{-3}}$",
            "$= \\sqrt{0,0036} = 0,06 m = 6 cm$ → Đúng."
        ].join("<br>")
    },

    // Câu 27 (Bài 13) - Câu 1 phần Đúng-Sai
    {
        type: "true-false",
        q: "Cho hai điểm M và N nằm trên một đường sức của điện trường đều có cường độ E = 4000 V/m. Biết MN = 10 cm và MN hợp với phương của đường sức điện một góc 60°. Mốc điện thế tại vô cực bằng 0.",
        parts: [
            { content: "Công của lực điện là công phát động nếu điện tích di chuyển cùng chiều đường sức.", correct: true },
            { content: "Đơn vị của điện thế là vôn (V), 1V = 1J/C.", correct: true },
            { content: "Hiệu điện thế giữa hai điểm M và N là UMN = 200 V.", correct: true },
            { content: "Nếu chọn điện thế tại M là 50 V thì điện thế tại N là −150 V.", correct: true }
        ],
        expl: [
            "a) Điện tích dương di chuyển cùng chiều đường sức ⇒ công dương → Đúng.",
            "b) Định nghĩa chuẩn: $1V = 1J/C$ → Đúng.",
            "c) $U_{MN} = E·(MN\\cos60°)$",
            "$= 4000·0,1·0,5$",
            "$= 200 V$ → Đúng.",
            "d) $V_N = V_M - U_{MN}$",
            "$= 50 - 200$",
            "$= -150 V$ → Đúng."
        ].join("<br>")
    },

    // Câu 28 (Bài 13) - Câu 2 phần Đúng-Sai
    {
        type: "true-false",
        q: "Giả sử có một đám mây phân thành hai tầng: tầng trên tích điện dương (điện thế cao Vₐ) và tầng dưới tích điện âm (điện thế thấp V₆). Khoảng không gian giữa hai tầng mây có một điện trường hướng từ trên xuống dưới.",
        parts: [
            { content: "Nếu biết khoảng cách giữa hai tầng mây là 800 m và hiệu điện thế giữa chúng là 1.600.000 V, thì cường độ điện trường trung bình giữa hai tầng mây là 2000 V/m.", correct: true },
            { content: "Cường độ điện trường giữa hai tầng mây tỉ lệ thuận với hiệu điện thế giữa chúng nếu khoảng cách không đổi.", correct: true },
            { content: "Khi đặt một điện tích dương q vào khoảng không gian giữa hai tầng mây này, điện tích q sẽ có xu hướng dịch chuyển từ nơi có điện thế cao (tầng trên) xuống nơi có điện thế thấp (tầng dưới).", correct: true },
            { content: "Nếu hiệu điện thế giữa tầng trên và tầng dưới là Uₐ₆ = 800.000 V và điện thế tại tầng dưới được chọn làm mốc V₆ = 0 V, thì điện thế tại tầng trên là 800.000 V.", correct: true }
        ],
        expl: [
            "a) $E = U/d$",
            "$= 1.600.000/800$",
            "$= 2000 V/m$ → Đúng.",
            "b) $E = U/d$ (điện trường đều) → Đúng.",
            "c) Điện tích dương chuyển từ nơi điện thế cao đến nơi điện thế thấp → Đúng.",
            "d) $V_A = V_B + U_{AB}$",
            "$= 800.000 V$ → Đúng."
        ].join("<br>")
    },

    // ============================================
    // PHẦN III: TRẢ LỜI NGẮN (8 CÂU)
    // ============================================

    // Câu 29 (VD - Bài 11)
    {
        type: "short-answer",
        q: "Hai quả cầu A, B có kích thước nhỏ được đặt cách nhau một khoảng 12 cm trong chân không. Biết quả cầu A có điện tích −6,0·10⁻⁷ C và quả cầu B có điện tích 4,0·10⁻⁷ C. Tính lực tương tác giữa hai quả cầu (theo đơn vị N, làm tròn đến 3 chữ số thập phân).",
        answer: "0,150 N",
        expl: [
            "$F = k\\frac{|q_Aq_B|}{r^2}$",
            "$= 9.10^9.\\frac{6,0.10^{-7}.4,0.10^{-7}}{(0,12)^2}$",
            "$= 9.10^9.\\frac{24.10^{-14}}{0,0144}$",
            "$= 9.10^9.\\frac{2,4.10^{-13}}{0,0144}$",
            "$= 9.10^9.1,6667.10^{-11}$",
            "$= 0,15 N$ (chính xác 0,15)"
        ].join("<br>")
    },

    // Câu 30 (TH - Bài 11)
    {
        type: "short-answer",
        q: "Cho hai điện tích điểm q₁ = 1·10⁻⁷ C và q₂ = 2·10⁻⁷ C đặt tại hai điểm A và B trong chân không, cách nhau 3 cm. Lực tương tác giữa chúng có độ lớn là bao nhiêu niutơn (N)? (Làm tròn kết quả đến 2 chữ số thập phân)",
        answer: "0,20 N",
        expl: [
            "$F = 9.10^9.\\frac{1.10^{-7}.2.10^{-7}}{(0,03)^2}$",
            "$= 9.10^9.\\frac{2.10^{-14}}{0,0009}$",
            "$= 9.10^9.2,222.10^{-11}$",
            "$= 0,2 N$"
        ].join("<br>")
    },

    // Câu 31 (VD - Bài 11)
    {
        type: "short-answer",
        q: "Hai quả cầu kim loại nhỏ giống hệt nhau, mang điện tích lần lượt là q₁ = 5·10⁻⁹ C và q₂ = −3·10⁻⁹ C. Cho hai quả cầu tiếp xúc với nhau rồi tách chúng ra. Điện tích của mỗi quả cầu sau khi tiếp xúc là bao nhiêu (nC)?",
        answer: "1 nC",
        expl: [
            "Tổng điện tích bảo toàn: $5.10^{-9} + (-3.10^{-9}) = 2.10^{-9}$ C.",
            "Hai quả giống nhau ⇒ mỗi quả: $1.10^{-9}$ C = 1 nC."
        ].join("<br>")
    },

    // Câu 32 (TH - Bài 12)
    {
        type: "short-answer",
        q: "Một điện tích thử q = 5·10⁻⁶ C đặt tại một điểm trong điện trường chịu tác dụng của lực điện có độ lớn F = 0,01 N. Cường độ điện trường tại điểm đó có độ lớn là bao nhiêu (V/m)?",
        answer: "2000 V/m",
        expl: [
            "$E = \\frac{F}{q}$",
            "$= \\frac{0,01}{5.10^{-6}}$",
            "$= 2000 V/m$"
        ].join("<br>")
    },

    // Câu 33 (VD - Bài 12)
    {
        type: "short-answer",
        q: "Một điện tích điểm Q đặt trong chân không. Điểm M cách Q một đoạn 10 cm có cường độ điện trường 4500 V/m. Độ lớn của điện tích Q là bao nhiêu (µC)? (k = 9·10⁹ Nm²/C²)",
        answer: "0,005 µC",
        expl: [
            "$E = k\\frac{Q}{r^2} \\Rightarrow Q = \\frac{E r^2}{k}$",
            "$= \\frac{4500.(0,1)^2}{9.10^9}$",
            "$= \\frac{4500.0,01}{9.10^9}$",
            "$= \\frac{45}{9.10^9} = 5.10^{-9} C = 0,005 \\mu C$"
        ].join("<br>")
    },

    // Câu 34 (TH - Bài 13)
    {
        type: "short-answer",
        q: "Để dịch chuyển một điện tích q = 2·10⁻⁶ C từ điểm rất xa (vô cực) đến điểm M trong điện trường, cần thực hiện một công A′ = 4·10⁻⁴ J. Bỏ qua vận tốc đầu của điện tích. Điện thế tại M có giá trị là bao nhiêu vôn (V)? (Chọn gốc điện thế tại vô cực)",
        answer: "200 V",
        expl: [
            "$A' = qV_M \\Rightarrow V_M = \\frac{A'}{q}$",
            "$= \\frac{4.10^{-4}}{2.10^{-6}}$",
            "$= 200 V$"
        ].join("<br>")
    },

    // Câu 35 (TH - Bài 14)
    {
        type: "short-answer",
        q: "Trên vỏ một tụ điện có ghi 25 µF – 200 V. Điện tích tối đa mà tụ điện trên có thể tích được là bao nhiêu (C)?",
        answer: "0,005 C",
        expl: [
            "$Q_{max} = C.U_{max}$",
            "$= 25.10^{-6}.200$",
            "$= 5000.10^{-6} = 0,005 C$"
        ].join("<br>")
    },

    // Câu 36 (TH - Bài 14)
    {
        type: "short-answer",
        q: "Một tụ điện phẳng có điện dung 4 µF được tích điện dưới hiệu điện thế 200 V. Điện tích của tụ điện này là bao nhiêu (mC)?",
        answer: "0,8 mC",
        expl: [
            "$Q = C.U$",
            "$= 4.10^{-6}.200$",
            "$= 800.10^{-6} C = 0,8 mC$"
        ].join("<br>")
    },

    // ============================================
    // PHẦN IV: TỰ LUẬN (4 CÂU)
    // ============================================

    // Câu 37 (VD - Bài 14) - Cấu hình mới: C1//C2 nối tiếp C3
    {
        type: "essay",
        q: "Cho mạch điện gồm ba tụ điện được mắc như hình vẽ. Biết: C₁ = 2 µF, C₂ = 3 µF, C₃ = 4 µF. Hiệu điện thế đặt vào hai đầu A và B là Uₐ₆ = 24 V. (Cấu hình: C₁ và C₂ mắc song song, cả bộ nối tiếp với C₃).<br><br>a) Tính điện dung tương đương của bộ tụ.<br><br>b) Tính điện tích của tụ C₃.",
        answer: [
            "a) $C_{12} = C_1 + C_2$",
            "$= 2 + 3 = 5 \\mu F$",
            "$C_{td} = \\frac{C_{12} \\cdot C_3}{C_{12} + C_3}$",
            "$= \\frac{5 \\cdot 4}{5 + 4} = \\frac{20}{9} \\approx 2,222 \\mu F$",
            "",
            "b) $U_{AB} = 24 V$, điện tích của bộ: $Q = C_{td} \\cdot U_{AB}$",
            "$= \\frac{20}{9} \\cdot 24 = \\frac{480}{9} = \\frac{160}{3} \\approx 53,33 \\mu C$",
            "Vì mạch nối tiếp nên điện tích trên C₃ bằng điện tích của bộ: $Q_3 = Q = 53,33 \\mu C$"
        ].join("<br>"),
        expl: [
            "a) Tính $C_{12}$ song song: $C_{12} = C_1 + C_2$",
            "Sau đó $C_{12}$ nối tiếp với $C_3$: $C_{td} = \\frac{C_{12}C_3}{C_{12}+C_3}$",
            "",
            "b) Trong mạch nối tiếp, điện tích trên các tụ bằng nhau và bằng điện tích của bộ. Tính $Q = C_{td}U$."
        ].join("<br>")
    },

    // Câu 38 (VD - Bài 13)
    {
        type: "essay",
        q: "Một electron chuyển động không vận tốc đầu từ bản âm về bản dương của hai bản kim loại phẳng, tích điện trái dấu, đặt song song, cách nhau 2 cm trong chân không. Biết hiệu điện thế giữa hai bản là 100 V. Bỏ qua tác dụng của trọng lực.<br><br>a) Tính công của lực điện tác dụng lên electron khi nó di chuyển từ bản âm sang bản dương.<br><br>b) Tính vận tốc của electron khi nó đập vào bản dương.<br><br>Cho: $m_e = 9,1.10^{-31} kg$; $e = 1,6.10^{-19} C$.",
        answer: [
            "a) $A = |q|U$",
            "$= 1,6.10^{-19}.100$",
            "$= 1,6.10^{-17} J$",
            "",
            "b) $\\frac{1}{2}mv^2 = A \\Rightarrow v = \\sqrt{\\frac{2A}{m}}$",
            "$= \\sqrt{\\frac{2.1,6.10^{-17}}{9,1.10^{-31}}}$",
            "$= \\sqrt{\\frac{3,2.10^{-17}}{9,1.10^{-31}}}$",
            "$= \\sqrt{3,516.10^{13}} \\approx 5,93.10^6 m/s$"
        ].join("<br>"),
        expl: [
            "a) Công của lực điện: A = qU, với q là điện tích của electron (lấy độ lớn).",
            "b) Định lý động năng: Độ biến thiên động năng bằng công của lực điện."
        ].join("<br>")
    },

    // Câu 39 (VD - Bài 12)
    {
        type: "essay",
        q: "Tại một điểm M trong chân không, cách điện tích điểm Q một khoảng r = 20 cm, người ta đo được điện trường có độ lớn là E = 9000 V/m. Hãy xác định độ lớn của điện tích Q.",
        answer: [
            "$E = k\\frac{Q}{r^2} \\Rightarrow Q = \\frac{E r^2}{k}$",
            "$= \\frac{9000.(0,2)^2}{9.10^9}$",
            "$= \\frac{9000.0,04}{9.10^9}$",
            "$= \\frac{360}{9.10^9} = 4.10^{-8} C$"
        ].join("<br>"),
        expl: "Công thức tính cường độ điện trường do điện tích điểm gây ra: $E = k\\frac{|Q|}{r^2}$"
    },

    // Câu 40 (VD - Bài 12) - Dạng tìm vị trí E tổng hợp bằng 0
    {
        type: "essay",
        q: "Hai điện tích điểm q₁ = 9.10⁻⁸ C và q₂ = 4.10⁻⁸ C đặt tại hai điểm A và B cách nhau 10 cm trong chân không. Xác định vị trí điểm C trên đường thẳng AB mà tại đó cường độ điện trường tổng hợp bằng không.",
        answer: [
            "Gọi C là điểm cần tìm, đặt CA = x, CB = y, với x + y = 10 cm (nếu C nằm giữa A và B).",
            "Tại C, cường độ điện trường do q₁ và q₂ gây ra cùng phương, ngược chiều và có độ lớn bằng nhau:",
            "$E_1 = E_2 \\Rightarrow k\\frac{|q_1|}{x^2} = k\\frac{|q_2|}{y^2}$",
            "$\\Rightarrow \\frac{x}{y} = \\sqrt{\\frac{q_1}{q_2}} = \\sqrt{\\frac{9.10^{-8}}{4.10^{-8}}} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2}$",
            "Vậy $x = \\frac{3}{2}y$.",
            "Kết hợp $x + y = 10$ cm, ta có:",
            "$\\frac{3}{2}y + y = 10 \\Rightarrow \\frac{5}{2}y = 10 \\Rightarrow y = 4$ cm, $x = 6$ cm.",
            "Vậy điểm C nằm trên đoạn AB, cách A 6 cm và cách B 4 cm."
        ].join("<br>"),
        expl: [
            "Điều kiện để cường độ điện trường tổng hợp bằng 0 là các vectơ cường độ điện trường do từng điện tích gây ra tại C phải cùng phương, ngược chiều và cùng độ lớn.",
            "Vì hai điện tích cùng dấu nên điểm C nằm giữa A và B.",
            "Giải hệ phương trình từ tỉ lệ và khoảng cách."
        ].join("<br>")
    }
];

// Dành riêng cho kiểm tra giữa học kỳ 2
window.questionsKTGHK2 = [...window.questionsChapter3];