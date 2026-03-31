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

window.questionsKTGHK2 = [
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
        expl: "Định luật Coulomb: $F = k\\frac{|q_1q_2|}{r^2}$, trong đó $k = 9.10^9 \\frac{Nm^2}{C^2}$"
    },
    
    // Câu 4 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Hai điện tích trái dấu khi đặt gần nhau trong chân không sẽ:",
        options: ["Lúc hút, lúc đẩy", "Không tương tác", "Đẩy nhau", "Hút nhau"],
        a: 3,
        expl: "Theo định luật Coulomb, hai điện tích trái dấu hút nhau."
    },
    
    // Câu 5 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Hằng số Coulomb trong hệ SI có giá trị xấp xỉ bằng:",
        options: ["$9.10^9 \\frac{Nm^2}{C^2}$", "$6.10^9 \\frac{Nm^2}{C^2}$", "$3.10^9 \\frac{Nm^2}{C^2}$", "$1.10^9 \\frac{Nm^2}{C^2}$"],
        a: 0,
        expl: "Hằng số Coulomb $k = 9.10^9 \\frac{Nm^2}{C^2}$ trong chân không."
    },
    
    // Câu 6 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Khi đặt hai điện tích vào môi trường điện môi, lực tương tác giữa chúng sẽ:",
        options: ["Tăng lên", "Giảm đi", "Không đổi", "Phụ thuộc vào điện môi"],
        a: 1,
        expl: "Trong điện môi, lực tương tác giảm đi: $F = k\\frac{|q_1q_2|}{\\varepsilon r^2}$"
    },
    
    // Câu 7 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Đơn vị của hằng số Coulomb trong hệ SI là:",
        options: ["$\\frac{Nm^2}{C^2}$", "$\\frac{N}{C}$", "$\\frac{C^2}{Nm^2}$", "$\\frac{Nm}{C}$"],
        a: 0,
        expl: "Hằng số Coulomb có đơn vị $\\frac{Nm^2}{C^2}$."
    },
    
    // Câu 8 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Phát biểu nào sau đây đúng khi nói về định luật Coulomb?",
        options: [
            "Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với tích độ lớn của hai điện tích.",
            "Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với bình phương khoảng cách giữa hai điện tích.",
            "Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với khoảng cách giữa hai điện tích.",
            "Đều đúng."
        ],
        a: 1,
        expl: "Định luật Coulomb: $F = k\\frac{|q_1q_2|}{r^2}$ - lực tỉ lệ thuận tích độ lớn và nghịch biến với bình phương khoảng cách."
    },
    
    // ========== BÀI 12: ĐIỆN TRƯỜNG (6 CÂU) ==========
    
    // Câu 9 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Điện trường là:",
        options: [
            "Lực tác dụng lên điện tích đặt trong điện trường.",
            "Đại lượng đặc trưng cho khả năng tác dụng lực của điện trường tại một điểm.",
            "Năng lượng mà điện trường có tại một điểm.",
            "Công suất của điện trường."
        ],
        a: 1,
        expl: "Điện trường là đại lượng vectơ đặc trưng cho khả năng tác dụng lực của điện trường tại một điểm trong không gian."
    },
    
    // Câu 10 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Cường độ điện trường tại một điểm có độ lớn bằng:",
        options: [
            "Lực tác dụng lên điện tích thử đặt tại điểm đó chia cho độ lớn điện tích thử.",
            "Độ lớn vectơ cường độ điện trường tại điểm đó.",
            "Thế năng điện tại điểm đó.",
            "Hiệu điện thế giữa điểm đó và vô cực."
        ],
        a: 1,
        expl: "Cường độ điện trường $\\vec{E} = \\frac{\\vec{F}}{q}$, độ lớn $E = \\frac{F}{|q|}$"
    },
    
    // Câu 11 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Đơn vị của cường độ điện trường trong hệ SI là:",
        options: ["N/C", "V/m", "C/m", "N·m²/C"],
        a: 0,
        expl: "Cường độ điện trường có đơn vị N/C (Newton trên Culông) hoặc V/m (Vôn trên mét)."
    },
    
    // Câu 12 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Đường sức điện là:",
        options: [
            "Đường nối các điểm có cùng thế năng điện.",
            "Đường mà tại mỗi điểm, tiếp tuyến của nó trùng với phương của vectơ cường độ điện trường.",
            "Đường mà vectơ cường độ điện trường tại các điểm trên đường có cùng độ lớn.",
            "Đường cong mà điện tích dương di chuyển theo đó."
        ],
        a: 1,
        expl: "Đường sức điện là đường mà tại mỗi điểm, tiếp tuyến của nó trùng với phương của vectơ cường độ điện trường."
    },
    
    // Câu 13 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Đặc điểm nào sau đây KHÔNG phải là đặc điểm của đường sức điện?",
        options: [
            "Các đường sức không bao giờ cắt nhau.",
            "Đường sức bắt đầu từ điện tích dương và kết thúc ở điện tích âm.",
            "Tại mỗi điểm chỉ có một đường sức đi qua.",
            "Đường sức của điện tích điểm là những đường thẳng."
        ],
        a: 2,
        expl: "Đường sức của điện tích điểm là những đường cong, không phải đường thẳng."
    },
    
    // Câu 14 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Điện trường đều là điện trường mà:",
        options: [
            "Các đường sức của nó song song với nhau.",
            "Vectơ cường độ điện trường tại mọi điểm đều bằng nhau.",
            "Các đường sức của nó cách đều nhau.",
            "Điện thế tại mọi điểm bằng nhau."
        ],
        a: 1,
        expl: "Điện trường đều có vectơ cường độ điện trường không đổi về độ lớn và phương."
    },
    
    // ========== BÀI 13: THẾ NĂNG ĐIỆN - ĐIỆN THẾ (3 CÂU) ==========
    
    // Câu 15 (NB - Bài 13)
    {
        type: "multiple-choice",
        q: "Công của lực điện khi dịch chuyển điện tích q trong điện trường từ điểm A đến điểm B được tính bằng:",
        options: [
            "$q(U_A - U_B)$",
            "$q\\vec{E} \\cdot \\vec{AB}$",
            "$\\frac{q}{2}(U_A + U_B)$",
            "$q(U_B - U_A)$"
        ],
        a: 0,
        expl: "Công của lực điện: $A_{AB} = q\\vec{E} \\cdot \\vec{AB} = qE\\cdot d\\cos\\alpha = q(U_A - U_B)$"
    },
    
    // Câu 16 (NB - Bài 13)
    {
        type: "multiple-choice",
        q: "Thế năng điện tại một điểm được định nghĩa là:",
        options: [
            "Công cần để dịch điện tích đơn vị từ vô cực đến điểm đó.",
            "Lực tác dụng lên điện tích đơn vị đặt tại điểm đó.",
            "Cường độ điện trường tại điểm đó.",
            "Hiệu điện thế giữa điểm đó và một điểm mốc khác."
        ],
        a: 0,
        expl: "Thế năng điện $W_A = A_{A\\infty} = qV_A$ là công cần để dịch điện tích đơn vị từ vô cực đến điểm A."
    },
    
    // Câu 17 (NB - Bài 13)
    {
        type: "multiple-choice",
        q: "Điện thế tại một điểm được định nghĩa là:",
        options: [
            "Thế năng điện tại điểm đó chia cho điện tích đơn vị.",
            "Cường độ điện trường tại điểm đó.",
            "Công của lực điện khi dịch điện tích đơn vị từ điểm đó.",
            "Hiệu điện thế giữa điểm đó và vô cực."
        ],
        a: 3,
        expl: "Điện thế $V_A = \\frac{W_A}{q} = \\frac{A_{A\\infty}}{q}$ là hiệu điện thế giữa điểm A và vô cực."
    },
    
    // ========== BÀI 14: TỤ ĐIỆN (7 CÂU) ==========
    
    // Câu 18 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Tụ điện là linh kiện điện tử dùng để:",
        options: [
            "Tăng điện thế trong mạch.",
            "Lưu trữ năng lượng điện và phóng năng lượng đó nhanh chóng.",
            "Chuyển đổi dòng xoay chiều thành dòng một chiều.",
            "Đo cường độ dòng điện."
        ],
        a: 1,
        expl: "Tụ điện có khả năng tích điện và phóng điện rất nhanh, dùng để lưu trữ năng lượng điện."
    },
    
    // Câu 19 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Điện dung của tụ điện được định nghĩa là:",
        options: [
            "Khả năng tích điện của tụ.",
            "Điện tích tối đa mà tụ có thể tích được.",
            "Hiệu điện thế tối đa mà tụ chịu được.",
            "Khả năng phóng điện của tụ."
        ],
        a: 0,
        expl: "Điện dung $C = \\frac{Q}{U}$ là độ lớn điện tích mà tụ có tích được khi đặt dưới hiệu điện thế 1V."
    },
    
    // Câu 20 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Đơn vị của điện dung trong hệ SI là:",
        options: ["Farad (F)", "Culomb (C)", "Volt (V)", "Henry (H)"],
        a: 0,
        expl: "Điện dung có đơn vị Farad (F), trong thực tế thường dùng µF, nF, pF."
    },
    
    // Câu 21 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Khi hai tụ điện mắc nối tiếp, điện dung tương đương được tính bằng:",
        options: [
            "$C_1 + C_2$",
            "$\\frac{C_1 C_2}{C_1 + C_2}$",
            "$\\frac{C_1 + C_2}{C_1 C_2}$",
            "$\\frac{C_1 C_2}{C_1 - C_2}$"
        ],
        a: 1,
        expl: "Nối tiếp: $\\frac{1}{C_{td}} = \\frac{1}{C_1} + \\frac{1}{C_2} \\Rightarrow C_{td} = \\frac{C_1 C_2}{C_1 + C_2}$"
    },
    
    // Câu 22 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Khi hai tụ điện mắc song song, điện dung tương đương được tính bằng:",
        options: [
            "$C_1 + C_2$",
            "$\\frac{C_1 C_2}{C_1 + C_2}$",
            "$\\frac{C_1 + C_2}{C_1 C_2}$",
            "$\\frac{C_1 C_2}{C_1 - C_2}$"
        ],
        a: 1,
        expl: "Song song: $C_{td} = C_1 + C_2$"
    },
    
    // Câu 23 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Năng lượng của tụ điện được tính bằng công thức:",
        options: [
            "$W = \\frac{1}{2}CU^2$",
            "$W = \\frac{1}{2}C^2U$",
            "$W = \\frac{1}{2}QU^2$",
            "$W = \\frac{1}{2}Q^2U$"
        ],
        a: 1,
        expl: "Năng lượng tụ điện: $W = \\frac{1}{2}CU^2 = \\frac{1}{2}Q^2U = \\frac{1}{2}CV^2$"
    },
    
    // Câu 24 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "So sánh với pin, tụ điện có ưu điểm gì?",
        options: [
            "Năng lượng lưu trữ lớn hơn.",
            "Tích/phóng điện nhanh hơn.",
            "Tuổi thọ cao hơn.",
            "Duy trì dòng điện lâu hơn."
        ],
        a: 1,
        expl: "Tụ điện có thể tích/phóng điện hàng triệu lần, nhanh hơn pin rất nhiều."
    },
    
    // ============================================
    // PHẦN II: ĐÚNG - SAI (4 CÂU)
    // ============================================
    
    // Câu 25 (VD - Bài 11) - Câu 1 phần Đúng-Sai
    {
        type: "true-false",
        q: "Trong chân không, hai điện tích điểm cùng dấu sẽ đẩy nhau. Đúng hay Sai?",
        parts: [
            { content: "Hai điện tích cùng dấu trong chân không luôn đẩy nhau.", correct: true },
            { content: "Độ lớn lực đẩy tỉ lệ thuận với tích độ lớn của hai điện tích.", correct: true },
            { content: "Nếu khoảng cách giữa hai điện tích tăng gấp đôi thì lực đẩy giảm đi một nửa.", correct: false },
            { content: "Hai điện tích dương đẩy nhau mạnh hơn hai điện tích âm.", correct: false }
        ],
        expl: [
            "a) Đúng - Định luật Coulomb.",
            "b) Đúng - $F = k\\frac{|q_1q_2|}{r^2}$.",
            "c) Sai - $F$ tỉ lệ nghịch với $r^2$.",
            "d) Sai - Lực đẩy không phụ thuộc vào dấu điện tích."
        ].join("<br>")
    },
    
    // Câu 26 (VD - Bài 12) - Câu 2 phần Đúng-Sai
    {
        type: "true-false",
        q: "Đường sức điện của điện tích điểm là những đường thẳng. Đúng hay Sai?",
        parts: [
            { content: "Đường sức điện của điện tích điểm là những đường thẳng.", correct: false },
            { content: "Các đường sức không bao giờ cắt nhau.", correct: true },
            { content: "Đường sức bắt đầu từ điện tích dương.", correct: true },
            { content: "Đường sức kết thúc ở điện tích âm.", correct: true }
        ],
        expl: [
            "a) Sai - Đường sức của điện tích điểm là những đường cong.",
            "b) Đúng - Đặc điểm của đường sức.",
            "c) Đúng - Các đường sức không cắt nhau.",
            "d) Đúng - Đặc điểm của đường sức."
        ].join("<br>")
    },
    
    // Câu 27 (VD - Bài 13) - Câu 3 phần Đúng-Sai
    {
        type: "true-false",
        q: "Công của lực điện khi dịch chuyển điện tích trong điện trường không phụ thuộc vào đường đi. Đúng hay Sai?",
        parts: [
            { content: "Công của lực điện chỉ phụ thuộc vào vị trí đầu và cuối.", correct: true },
            { content: "Công của lực điện có thể âm hoặc dương.", correct: true },
            { content: "Công của lực điện khi dịch chuyển theo đường sức điện thì bằng 0.", correct: true },
            { content: "Công của lực điện khi dịch chuyển ngược hướng với điện trường thì âm.", correct: true }
        ],
        expl: [
            "a) Đúng - Lực điện là lực thế, công chỉ phụ thuộc vào vị trí.",
            "b) Đúng - $A = \\Delta W = q\\Delta V$.",
            "c) Đúng - Khi $\\Delta V = 0$ thì $A = 0$.",
            "d) Đúng - Khi $\\Delta V < 0$ thì $A < 0$."
        ].join("<br>")
    },
    
    // Câu 28 (VD - Bài 13) - Câu 4 phần Đúng-Sai
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
        q: "Hai quả cầu kim loại nhỏ giống hệt nhau, mang điện tích lần lượt là q₁ = 5·10⁻⁹ C và q₂ = −3·10⁻⁹ C. Cho hai quả cầu tiếp xúc với nhau rồi tách chúng ra. Điện tích của mỗi quả cầu sau khi tiếp xúc là bao nhiêu (nội)?",
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
            "Công thức tính cường độ điện trường do điện tích điểm gây ra: $E = k\\frac{|Q|}{r^2}$",
            "Khi có hai điện tích, cường độ điện trường tổng hợp bằng không tại điểm thỏa mãn $E_1 = E_2$ và ngược chiều."
        ].join("<br>")
    }
];
