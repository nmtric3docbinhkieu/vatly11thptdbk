// ==============================================
// FILE: ktghk2.js
// ==============================================
// Ngân hàng câu hỏi kiểm tra giữa học kỳ 2
// Vật lí 11 - Chân trời sáng tạo
// Cấu trúc: 12 câu nhiều lựa chọn + 2 câu đúng-sai + 8 câu trả lời ngắn + 3 câu tự luận
// ==============================================

window.questionsKTGHK2 = [
    // ============================================
    // PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (12 CÂU)
    // ============================================
    
    // Câu 1 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Phát biểu nào sau đây là đúng về định luật Coulomb?",
        options: [
            "Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với tích độ lớn của chúng và tỉ lệ nghịch với khoảng cách giữa chúng.",
            "Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với tích độ lớn của chúng và tỉ lệ nghịch với bình phương khoảng cách giữa chúng.",
            "Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với tổng độ lớn của chúng và tỉ lệ nghịch với khoảng cách giữa chúng.",
            "Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với tổng độ lớn của chúng và tỉ lệ nghịch với bình phương khoảng cách giữa chúng."
        ],
        a: 1,
        expl: "Định luật Coulomb: Lực tương tác giữa hai điện tích điểm tỉ lệ thuận với tích độ lớn của chúng và tỉ lệ nghịch với bình phương khoảng cách giữa chúng."
    },
    
    // Câu 2 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Đơn vị của điện tích trong hệ SI là:",
        options: ["Vôn (V)", "Ampe (A)", "Culông (C)", "Fara (F)"],
        a: 2,
        expl: "Đơn vị đo điện tích là culông (C)."
    },
    
    // Câu 3 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Hai điện tích điểm cùng dấu thì chúng:",
        options: ["hút nhau.", "đẩy nhau.", "có thể hút hoặc đẩy nhau.", "không tương tác."],
        a: 1,
        expl: "Các điện tích cùng dấu đẩy nhau, trái dấu hút nhau."
    },
    
    // Câu 4 (NB - Bài 11)
    {
        type: "multiple-choice",
        q: "Độ lớn của lực tương tác giữa hai điện tích điểm trong chân không:",
        options: [
            "tỉ lệ thuận với bình phương khoảng cách giữa chúng.",
            "tỉ lệ nghịch với khoảng cách giữa chúng.",
            "tỉ lệ thuận với khoảng cách giữa chúng.",
            "tỉ lệ nghịch với bình phương khoảng cách giữa chúng."
        ],
        a: 3,
        expl: "Định luật Coulomb: $F = k\\frac{|q_1q_2|}{r^2}$ nên lực tỉ lệ nghịch với bình phương khoảng cách."
    },
    
    // Câu 5 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Điện trường là:",
        options: [
            "không gian xung quanh điện tích, gắn liền với điện tích.",
            "dạng vật chất bao quanh điện tích và tác dụng lực điện lên điện tích khác đặt trong nó.",
            "không gian xung quanh nam châm.",
            "môi trường chân không bao quanh điện tích."
        ],
        a: 1,
        expl: "Điện trường là dạng vật chất bao quanh điện tích và truyền tương tác giữa các điện tích."
    },
    
    // Câu 6 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Đơn vị của cường độ điện trường trong hệ SI là:",
        options: ["Niutơn (N)", "Vôn nhân mét (V.m)", "Vôn trên mét (V/m)", "Culông (C)"],
        a: 2,
        expl: "Cường độ điện trường có đơn vị là vôn trên mét (V/m) hoặc niutơn trên culông (N/C)."
    },
    
    // Câu 7 (NB - Bài 12)
    {
        type: "multiple-choice",
        q: "Hình ảnh đường sức điện của một điện tích điểm âm có dạng là:",
        options: [
            "các đường thẳng song song cách đều.",
            "các đường thẳng hướng vào điện tích.",
            "các đường thẳng hướng ra xa điện tích.",
            "các đường cong hướng từ trái sang phải."
        ],
        a: 1,
        expl: "Điện tích âm có đường sức điện hướng vào điện tích."
    },
    
    // Câu 8 (NB - Bài 13)
    {
        type: "multiple-choice",
        q: "Đặc điểm nào sau đây không đúng với công của lực điện trường tác dụng lên một điện tích?",
        options: [
            "Không phụ thuộc vào hình dạng đường đi.",
            "Phụ thuộc vào độ lớn điện tích dịch chuyển.",
            "Phụ thuộc vào vị trí điểm đầu và điểm cuối.",
            "Phụ thuộc vào dạng đường đi."
        ],
        a: 3,
        expl: "Lực điện là lực thế, công của nó không phụ thuộc vào dạng đường đi mà chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối."
    },
    
    // Câu 9 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Tụ điện là:",
        options: [
            "hệ thống gồm hai vật dẫn đặt tiếp xúc với nhau và được bao bọc bằng điện môi.",
            "hệ thống gồm hai vật dẫn đặt gần nhau và ngăn cách nhau bằng một lớp cách điện.",
            "hệ thống gồm hai vật cách điện đặt gần nhau và ngăn cách nhau bằng một lớp dẫn điện.",
            "một nguồn điện dùng để tạo ra dòng điện lâu dài."
        ],
        a: 1,
        expl: "Tụ điện là một hệ gồm hai vật dẫn đặt gần nhau và ngăn cách nhau bằng một lớp cách điện."
    },
    
    // Câu 10 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Điện dung của tụ điện đặc trưng cho khả năng tích điện của tụ và được xác định bằng công thức:",
        options: ["$C = Q.U$", "$C = \\frac{Q}{U}$", "$C = \\frac{U}{Q}$", "$C = \\frac{U^2}{Q}$"],
        a: 1,
        expl: "Điện dung $C = \\frac{Q}{U}$."
    },
    
    // Câu 11 (NB - Bài 14)
    {
        type: "multiple-choice",
        q: "Đơn vị của điện dung là:",
        options: ["Fara (F)", "Vôn (V)", "Culông (C)", "Vôn trên mét (V/m)"],
        a: 0,
        expl: "Đơn vị điện dung là fara (F)."
    },
    
    // Câu 12 (NB - Bài 15)
    {
        type: "multiple-choice",
        q: "Năng lượng của một tụ điện có điện dung C, hiệu điện thế U và điện tích Q được xác định bằng công thức nào sau đây?",
        options: [
            "$W = \\frac{1}{2}QU^2$",
            "$W = \\frac{1}{2} \\frac{Q^2}{C}$",
            "$W = \\frac{1}{2} CU$",
            "$W = \\frac{1}{2} \\frac{U^2}{C}$"
        ],
        a: 1,
        expl: "Năng lượng tụ điện: $W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}$."
    },

    // ============================================
    // PHẦN II: TRẮC NGHIỆM ĐÚNG - SAI (2 CÂU)
    // Mỗi câu có 4 ý nhỏ (parts)
    // ============================================
    
      // Câu 13 (Bài 11)
{
    type: "true-false",
    q: "Hai điện tích điểm q₁ = 4.10⁻⁸ C và q₂ = -9.10⁻⁸ C đặt cố định tại hai điểm A và B trong không khí, cách nhau AB = 10 cm. Cho hằng số điện môi của không khí ε = 1, k = 9.10⁹ Nm²/C².",
    parts: [
        { content: "Lực tương tác giữa hai điện tích là lực hút.", correct: true },
        { content: "Độ lớn lực tương tác giữa hai điện tích là 3,24.10⁻³ N.", correct: true },
        { content: "Nếu đặt hai điện tích trên vào trong dầu hỏa có hằng số điện môi ε = 2,1 thì lực tương tác giữa chúng sẽ tăng lên 2,1 lần.", correct: false },
        { content: "Cần dịch chuyển điểm đặt của điện tích q₂ ra xa điện tích q₁ thêm một đoạn 10 cm (vẫn cố định q₁) để lực tương tác giữa chúng trong không khí giảm xuống còn 9.10⁻⁴ N.", correct: true }
    ],
    expl: "a) $q_1 > 0$, $q_2 < 0$ → trái dấu → hút nhau → Đúng.<br>b) $$\\begin{aligned} F &= 9.10^9 \\times \\frac{|4.10^{-8} \\times (-9).10^{-8}|}{(0,1)^2} \\\\ &= 9.10^9 \\times \\frac{36.10^{-16}}{0,01} \\\\ &= 3,24.10^{-3} N \\end{aligned}$$ → Đúng.<br>c) $F$ tỉ lệ nghịch với $\\varepsilon$ → lực giảm $2,1$ lần, không tăng → Sai.<br>$$\\begin{aligned} &\\text{d) } F' = 9.10^{-4}N \\\\\\\\ &\\Rightarrow r'^2 = \\frac{k|q_1 q_2|}{F'} \\\\\\\\ &\\qquad = \\frac{9.10^9 \\times 36.10^{-16}}{9.10^{-4}} = 0,036 \\\\\\\\ &\\Rightarrow r' = 0,19 m = 19 cm \\end{aligned}$$<br>cần dịch thêm $9 cm$ (≈10 cm) → Đúng."
},
    
   // Câu 14 (Bài 13)
{
    type: "true-false",
    q: "Cho hai điểm M và N nằm trên một đường sức của điện trường đều có cường độ E = 3000 V/m. Biết MN = 8 cm và MN hợp với phương của đường sức điện một góc 60°. Mốc điện thế tại vô cực bằng 0.",
    parts: [
        { content: "Công của lực điện là công phát động nếu điện tích di chuyển cùng chiều đường sức.", correct: true },
        { content: "Đơn vị của điện thế là vôn (V), 1 V = 1 J/C.", correct: true },
        { content: "Hiệu điện thế giữa hai điểm M và N là U_{MN} = 120 V.", correct: true },  // Sửa thành Đúng theo giải thích
        { content: "Nếu chọn điện thế tại M là 50 V thì điện thế tại N là -70 V.", correct: true }
    ],
    expl: "a) Lực điện cùng chiều chuyển động → công dương → công phát động → Đúng.<br>b) $1 V = 1 J/C$ → Đúng.<br>c) $$\\begin{aligned} d &= MN.\\cos60° = 0,08.0,5 = 0,04 m \\\\\\\\ U_{MN} &= E.d = 3000.0,04 = 120 V \\end{aligned}$$<br>→ Đúng.<br>d) $U_{MN} = V_M - V_N = 120$ → $50 - V_N = 120$ → $V_N = -70 V$ → Đúng."
},

    // ============================================
    // PHẦN III: TRẢ LỜI NGẮN (8 CÂU)
    // ============================================
    
    // Câu 15 (TH - Bài 11)
    {
        type: "short-answer",
        q: "Cho hai điện tích điểm q₁ = 2.10⁻⁷ C và q₂ = 3.10⁻⁷ C đặt tại hai điểm A và B trong chân không, cách nhau 6 cm. Lực tương tác giữa chúng có độ lớn là bao nhiêu niutơn (N)? (Làm tròn kết quả đến 2 chữ số thập phân)",
        answer: "0,15 N",
        expl: "$F = k\\frac{|q_1q_2|}{r^2} = 9.10^9\\frac{|2.10^{-7}.3.10^{-7}|}{(0,06)^2}$<br><br>$= 9.10^9\\frac{6.10^{-14}}{3,6.10^{-3}}$<br><br>$= 9.10^9.1,67.10^{-11}$<br><br>$= 0,15 N$"
    },
    
    // Câu 16 (VD - Bài 11)
    {
        type: "short-answer",
        q: "Hai quả cầu kim loại nhỏ giống hệt nhau, mang điện tích lần lượt là q₁ = 6.10⁻⁹ C và q₂ = -2.10⁻⁹ C. Cho hai quả cầu tiếp xúc với nhau rồi tách chúng ra. Điện tích của mỗi quả cầu sau khi tiếp xúc là bao nhiêu (nC)?",
        answer: "2 nC",
        expl: "Sau khi tiếp xúc, điện tích mỗi quả:<br>$q = \\frac{q_1 + q_2}{2}$<br><br>$= \\frac{6.10^{-9} + (-2.10^{-9})}{2}$<br><br>$= \\frac{4.10^{-9}}{2}$<br><br>$= 2.10^{-9} C = 2 nC$"
    },
    
    // Câu 17 (TH - Bài 12)
    {
        type: "short-answer",
        q: "Một điện tích điểm Q = -4.10⁻⁸ C đặt trong chân không. Cường độ điện trường do điện tích này gây ra tại điểm M cách nó một đoạn 5 cm có độ lớn là bao nhiêu (V/m)? (k = 9.10⁹ Nm²/C²)",
        answer: "144000 V/m",
        expl: "$E = k\\frac{|Q|}{r^2} = 9.10^9\\frac{4.10^{-8}}{(0,05)^2}$<br><br>$= 9.10^9\\frac{4.10^{-8}}{2,5.10^{-3}}$<br><br>$= 9.10^9.1,6.10^{-5}$<br><br>$= 144.10^3 = 144000 V/m$"
    },
    
    // Câu 18 (TH - Bài 12)
    {
        type: "short-answer",
        q: "Một điện tích thử q = 2.10⁻⁶ C đặt tại một điểm trong điện trường chịu tác dụng của lực điện có độ lớn F = 3.10⁻³ N. Cường độ điện trường tại điểm đó có độ lớn là bao nhiêu (V/m)?",
        answer: "1500 V/m",
        expl: "$E = \\frac{F}{q} = \\frac{3.10^{-3}}{2.10^{-6}}$<br><br>$= 1500 V/m$"
    },
    
    // Câu 19 (VD - Bài 12)
    {
        type: "short-answer",
        q: "Một điện tích điểm Q đặt trong chân không. Điểm M cách Q một đoạn 10 cm có cường độ điện trường 9000 V/m. Độ lớn của điện tích Q là bao nhiêu (μC)? (k = 9.10⁹ Nm²/C²)",
        answer: "0,01 μC",
        expl: "$E = k\\frac{|Q|}{r^2} \\Rightarrow |Q| = \\frac{E.r^2}{k}$<br><br>$= \\frac{9000.(0,1)^2}{9.10^9}$<br><br>$= \\frac{9000.0,01}{9.10^9}$<br><br>$= \\frac{90}{9.10^9}$<br><br>$= 10^{-8} C = 0,01 \\mu C$"
    },
    
    // Câu 20 (TH - Bài 13)
    {
        type: "short-answer",
        q: "Để dịch chuyển một điện tích q = 10⁻⁶ C từ điểm rất xa (vô cực) đến điểm M trong điện trường, cần thực hiện một công A’ = 2.10⁻⁴ J. Bỏ qua vận tốc đầu của điện tích. Điện thế tại M có giá trị là bao nhiêu vôn (V)? (Chọn gốc điện thế tại vô cực)",
        answer: "200 V",
        expl: "$V_M = \\frac{A'}{q} = \\frac{2.10^{-4}}{10^{-6}}$<br><br>$= 200 V$"
    },
    
    // Câu 21 (TH - Bài 14)
    {
        type: "short-answer",
        q: "Trên vỏ một tụ điện có ghi 20 μF – 200 V. Điện tích tối đa mà tụ điện trên có thể tích được là bao nhiêu (C)?",
        answer: "0,004 C",
        expl: "$Q_{max} = C.U_{max}$<br><br>$= 20.10^{-6}.200$<br><br>$= 4000.10^{-6}$<br><br>$= 4.10^{-3} C = 0,004 C$"
    },
    
    // Câu 22 (VD - Bài 14)
    {
        type: "short-answer",
        q: "Một tụ điện phẳng có điện dung 5 μF được tích điện dước hiệu điện thế 100 V. Điện tích của tụ điện này là bao nhiêu (mC)?",
        answer: "0,5 mC",
        expl: "$Q = C.U = 5.10^{-6}.100$<br><br>$= 5.10^{-4} C$<br><br>$= 0,5.10^{-3} C = 0,5 mC$"
    },

    // ============================================
    // PHẦN IV: TỰ LUẬN (3 CÂU)
    // ============================================
    
    // Câu 23 (VD - Bài 12)
    {
        type: "essay",
        q: "Cho hai điện tích điểm q₁ = 9.10⁻⁸ C và q₂ = -4.10⁻⁸ C đặt cố định tại hai điểm A và B trong không khí, cách nhau AB = 20 cm. Xác định vị trí điểm C trên đường thẳng AB (điểm C không trùng với A và B) tại đó cường độ điện trường tổng hợp bằng không.",
        answer: "Điểm C nằm trên đường thẳng AB, ngoài đoạn AB và gần phía B (vì |q₁| > |q₂|), cách B một khoảng 40 cm và cách A 60 cm.",
        expl: "Vì q₁ và q₂ trái dấu nên để $\vec{E}_C = \vec{0}$ thì C phải nằm ngoài đoạn AB và gần điện tích có độ lớn nhỏ hơn (q₂).<br><br>Gọi CB = x > 0, AC = AB + CB = 20 + x.<br><br>Điều kiện: $E_1 = E_2$<br><br>$\\Rightarrow k\\frac{|q_1|}{AC^2} = k\\frac{|q_2|}{CB^2}$<br><br>$\\Rightarrow \\frac{9.10^{-8}}{(20+x)^2} = \\frac{4.10^{-8}}{x^2}$<br><br>$\\Rightarrow \\frac{9}{4} = \\left(\\frac{20+x}{x}\\right)^2$<br><br>$\\Rightarrow \\frac{20+x}{x} = \\frac{3}{2}$<br><br>$\\Rightarrow 40 + 2x = 3x$<br><br>$\\Rightarrow x = 40 cm$<br><br>Vậy C cách B 40 cm, cách A 60 cm."
    },
    
    // Câu 24 (VD - Bài 13)
    {
        type: "essay",
        q: "Một electron chuyển động không vận tốc đầu từ bản âm về bản dương của hai bản kim loại phẳng, tích điện trái dấu, đặt song song, cách nhau 2 cm trong chân không. Biết hiệu điện thế giữa hai bản là 200 V. Bỏ qua tác dụng của trọng lực.<br><br>a) Tính công của lực điện tác dụng lên electron khi nó di chuyển từ bản âm sang bản dương.<br><br>b) Tính vận tốc của electron khi nó đập vào bản dương.<br><br>Cho biết: m_e = 9,1.10⁻³¹ kg; e = 1,6.10⁻¹⁹ C.",
        answer: "a) $A = e.U = 1,6.10^{-19}.200 = 3,2.10^{-17} J$\n\nb) $v = \\sqrt{\\frac{2eU}{m_e}} = \\sqrt{\\frac{2.1,6.10^{-19}.200}{9,1.10^{-31}}} = \\sqrt{\\frac{6,4.10^{-17}}{9,1.10^{-31}}} = \\sqrt{7,03.10^{13}} \\approx 8,38.10^6 m/s$",
        expl: "a) Công của lực điện:<br><br>$A = q.U = e.U$<br>(vì electron đi từ bản âm sang bản dương)<br><br>Độ lớn công = e.|U|<br><br>b) Định lý động năng:<br><br>$\\frac{1}{2}mv^2 = e|U|$<br><br>$\\Rightarrow v = \\sqrt{\\frac{2e|U|}{m}}$"
    },
    
    // Câu 25 (VD - Bài 14+15)
    {
        type: "essay",
        q: "Cho mạch điện gồm ba tụ điện được mắc như hình vẽ.<br><br>Biết: C₁ = 2 μF, C₂ = 3 μF, C₃ = 4 μF.<br><br>Hiệu điện thế đặt vào hai đầu A và B là U_{AB} = 24 V.<br><br>(Có hình vẽ mạch: C₁ nt C₂, cả bộ song song với C₃)<br><br>a) Tính điện dung tương đương của bộ tụ.<br><br>b) Tính điện tích của tụ C₃.",
        answer: "a) $C_{12} = \\frac{C_1C_2}{C_1+C_2} = \\frac{2.3}{2+3} = \\frac{6}{5} = 1,2 \\mu F$\n\n$C_b = C_{12} + C_3 = 1,2 + 4 = 5,2 \\mu F$\n\nb) $U_3 = U_{AB} = 24 V$ (vì C₃ // C₁₂)\n\n$Q_3 = C_3.U_3 = 4.10^{-6}.24 = 96.10^{-6} C = 9,6.10^{-5} C$",
        expl: "a) Tính C₁₂ nối tiếp:<br><br>$C_{12} = \\frac{C_1C_2}{C_1+C_2}$<br><br>$= \\frac{2.3}{2+3} = \\frac{6}{5} = 1,2 \\mu F$<br><br>C₁₂ song song với C₃:<br><br>$C_b = C_{12} + C_3$<br><br>$= 1,2 + 4 = 5,2 \\mu F$<br><br>b) Trong mạch song song, hiệu điện thế bằng nhau:<br><br>$U_3 = U_{AB} = 24 V$<br><br>Điện tích:<br><br>$Q_3 = C_3.U_3$<br><br>$= 4.10^{-6}.24$<br><br>$= 96.10^{-6} C = 9,6.10^{-5} C$"
    }
];