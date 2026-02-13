// ==============================================
// FILE: database-chapter3.js
// ==============================================
// Ngân hàng câu hỏi chương 3: Điện trường (50 câu)

window.questionsChapter3 = [
    // Bài 11: Định luật Coulomb (10 câu)
    { 
        q: "Lực tương tác tĩnh điện giữa hai điện tích điểm tỉ lệ nghịch với:", 
        options: [
            "Tích độ lớn hai điện tích", 
            "Khoảng cách giữa hai điện tích", 
            "Bình phương khoảng cách giữa hai điện tích", 
            "Hằng số điện môi"
        ], 
        a: 2, 
        expl: "Theo định luật Coulomb: $F = k \\frac{|q_1q_2|}{\\varepsilon r^2}$. Lực $F$ tỉ lệ nghịch với bình phương khoảng cách $r^2$." 
    },
    { 
        q: "Hằng số điện môi của chân không bằng:", 
        options: ["0", "1", "2", "8,85.10^-12"], 
        a: 1, 
        expl: "Trong chân không, $\\varepsilon = 1$. Đây là giá trị nhỏ nhất của hằng số điện môi." 
    },
    { 
        q: "Đơn vị của hằng số $k$ trong công thức Coulomb là:", 
        options: ["$C^2/N.m^2$", "$N.m^2/C^2$", "$V/m$", "$N/C$"], 
        a: 1, 
        expl: "Từ công thức $F = k \\frac{q^2}{r^2} \\Rightarrow k = \\frac{F \\cdot r^2}{q^2}$ nên đơn vị là $N \\cdot m^2 / C^2$." 
    },
    { 
        q: "Nếu đồng thời tăng độ lớn mỗi điện tích lên 2 lần và giảm khoảng cách đi 2 lần thì lực Coulomb:", 
        options: ["Tăng 4 lần", "Tăng 8 lần", "Tăng 16 lần", "Không đổi"], 
        a: 2, 
        expl: "Tử số tăng $2 \\times 2 = 4$. Mẫu số giảm $2^2 = 4$. Tổng cộng lực tăng $4 \\times 4 = 16$ lần." 
    },
    { 
        q: "Hạt mang điện tích nguyên tố âm là:", 
        options: ["Proton", "Nơtron", "Electron", "Hạt nhân"], 
        a: 2, 
        expl: "Electron mang điện tích $-1,6 \\cdot 10^{-19} C$." 
    },
    { 
        q: "Lực tương tác giữa hai điện tích điểm $2 \\mu C$ và $-2 \\mu C$ cách nhau 10cm trong chân không là:", 
        options: ["3,6 N", "0,36 N", "36 N", "0,036 N"], 
        a: 1, 
        expl: "$F = 9 \\cdot 10^9 \\frac{|2 \\cdot 10^{-6} \\cdot (-2 \\cdot 10^{-6})|}{0,1^2} = 0,36 N$." 
    },
    { 
        q: "Trong các chất sau, chất nào dẫn điện tốt nhất?", 
        options: ["Nước tinh khiết", "Thủy tinh", "Đồng", "Gỗ khô"], 
        a: 2, 
        expl: "Đồng là kim loại có nhiều electron tự do nên dẫn điện tốt." 
    },
    { 
        q: "Đưa hai điện tích từ chân không vào môi trường có $\\varepsilon = 2$ thì lực tương tác:", 
        options: ["Tăng 2 lần", "Giảm 2 lần", "Giảm 4 lần", "Không đổi"], 
        a: 1, 
        expl: "Lực trong điện môi giảm $\\varepsilon$ lần so với chân không." 
    },
    { 
        q: "Khối lượng của một electron xấp xỉ bằng:", 
        options: ["$1,67 \\cdot 10^{-27} kg$", "$9,1 \\cdot 10^{-31} kg$", "$1,6 \\cdot 10^{-19} kg$", "$9,1 \\cdot 10^{-19} kg$"], 
        a: 1, 
        expl: "$m_e \\approx 9,1 \\cdot 10^{-31} kg$." 
    },
    { 
        q: "Hai điện tích điểm cùng dấu khi đặt gần nhau sẽ:", 
        options: ["Hút nhau", "Đẩy nhau", "Không tương tác", "Lúc hút lúc đẩy"], 
        a: 1, 
        expl: "Cùng dấu đẩy nhau, trái dấu hút nhau." 
    },

    // Bài 12: Điện trường (10 câu)
    { 
        q: "Vectơ cường độ điện trường $\\vec{E}$ tại một điểm đặc trưng cho điện trường về phương diện:", 
        options: ["Năng lượng", "Tác dụng lực", "Tốc độ", "Độ cao"], 
        a: 1, 
        expl: "$\\vec{E} = \\vec{F}/q$ đặc trưng cho khả năng tác dụng lực của điện trường." 
    },
    { 
        q: "Đơn vị của cường độ điện trường là:", 
        options: ["Vôn (V)", "Jun (J)", "Vôn trên mét (V/m)", "Ni-tơn (N)"], 
        a: 2, 
        expl: "Đơn vị chuẩn là $V/m$." 
    },
    { 
        q: "Đường sức điện của một điện tích điểm âm có chiều:", 
        options: ["Hướng ra xa nó", "Hướng về phía nó", "Song song với nhau", "Đường tròn"], 
        a: 1, 
        expl: "Đường sức điện đi vào điện tích âm." 
    },
    { 
        q: "Điện trường đều có các đường sức điện là:", 
        options: ["Các đường cong", "Các đường thẳng song song cách đều", "Các đường tròn", "Các đường thẳng đồng quy"], 
        a: 1, 
        expl: "Trong điện trường đều, $\\vec{E}$ tại mọi điểm là như nhau." 
    },
    { 
        q: "Công thức $E = k \\frac{|Q|}{r^2}$ dùng để tính cường độ điện trường của:", 
        options: ["Vật dẫn bất kì", "Điện tích điểm", "Tụ điện", "Dòng điện"], 
        a: 1, 
        expl: "Đây là công thức cho điện tích điểm gây ra tại điểm cách nó khoảng r." 
    },
    { 
        q: "Tại một điểm trong điện trường, nếu ta tăng độ lớn điện tích thử q lên 2 lần thì E tại đó:", 
        options: ["Tăng 2 lần", "Giảm 2 lần", "Không đổi", "Tăng 4 lần"], 
        a: 2, 
        expl: "Cường độ điện trường E chỉ phụ thuộc nguồn gây ra nó, không phụ thuộc điện tích thử q." 
    },
    { 
        q: "Nguyên lí chồng chất điện trường giúp ta tính E tổng hợp bằng cách:", 
        options: ["Cộng đại số các độ lớn", "Cộng vectơ các E thành phần", "Lấy hiệu các độ lớn", "Nhân các độ lớn"], 
        a: 1, 
        expl: "$\\vec{E} = \\vec{E_1} + \\vec{E_2} + ...$" 
    },
    { 
        q: "Đường sức điện không bao giờ:", 
        options: ["Đi ra từ điện tích dương", "Cắt nhau", "Tận cùng ở vô cực", "Có hình dạng đường thẳng"], 
        a: 1, 
        expl: "Các đường sức điện không bao giờ giao nhau tại một điểm." 
    },
    { 
        q: "Cường độ điện trường $E = 1000 V/m$, lực điện tác dụng lên $q = 1 \\mu C$ là:", 
        options: ["$10^{-3} N$", "$10^{-6} N$", "$1 N$", "$1000 N$"], 
        a: 0, 
        expl: "$F = qE = 10^{-6} \\cdot 1000 = 10^{-3} N$." 
    },
    { 
        q: "Trong điện trường đều, lực điện tác dụng lên một điện tích q là:", 
        options: ["Thay đổi theo vị trí", "Luôn bằng 0", "Không đổi về hướng và độ lớn", "Tỉ lệ với khoảng cách"], 
        a: 2, 
        expl: "Vì $\\vec{E}$ không đổi nên $\\vec{F} = q\\vec{E}$ cũng không đổi." 
    },

    // Bài 13: Điện thế - Thế năng (10 câu)
    { 
        q: "Công của lực điện trường khi q di chuyển trong điện trường đều là $A = qEd$. d là:", 
        options: ["Quãng đường đi", "Hình chiếu quãng đường lên phương đường sức", "Khoảng cách đầu cuối", "Bán kính quỹ đạo"], 
        a: 1, 
        expl: "d là hình chiếu của vectơ dịch chuyển lên phương của vectơ $\\vec{E}$." 
    },
    { 
        q: "Điện thế $V_M$ đặc trưng cho điện trường về mặt:", 
        options: ["Tác dụng lực", "Năng lượng (khả năng sinh công)", "Độ mạnh yếu", "Chiều của đường sức"], 
        a: 1, 
        expl: "Điện thế là đại lượng đặc trưng cho khả năng sinh công tại một điểm." 
    },
    { 
        q: "Hiệu điện thế $U_{MN}$ giữa hai điểm M và N bằng:", 
        options: ["$V_N - V_M$", "$V_M - V_N$", "$V_M + V_N$", "$V_M \\cdot V_N$"], 
        a: 1, 
        expl: "$U_{MN} = V_M - V_N$." 
    },
    { 
        q: "Công thức liên hệ $E$ và $U$ trong điện trường đều là:", 
        options: ["$U = E/d$", "$E = U \\cdot d$", "$E = U/d$", "$U = E \\cdot d^2$"], 
        a: 2, 
        expl: "Nhớ mẹo: 'U bằng E nhân d' hay 'E bằng U chia d'." 
    },
    { 
        q: "Một điện tích $2C$ dịch chuyển dưới hiệu điện thế $10V$ thì công lực điện là:", 
        options: ["5 J", "20 J", "0,2 J", "12 J"], 
        a: 1, 
        expl: "$A = qU = 2 \\cdot 10 = 20 J$." 
    },
    { 
        q: "Nếu một điện tích di chuyển vuông góc với đường sức điện thì công lực điện bằng:", 
        options: ["Cực đại", "0", "Cực tiểu", "qEd"], 
        a: 1, 
        expl: "Khi vuông góc, hình chiếu $d = 0 \\Rightarrow A = 0$." 
    },
    { 
        q: "Đơn vị của điện thế là:", 
        options: ["Jun (J)", "Vôn (V)", "Ni-tơn (N)", "Cu-lông (C)"], 
        a: 1, 
        expl: "Điện thế đo bằng Vôn." 
    },
    { 
        q: "Thế năng của một electron tại điểm có điện thế $V = 10V$ là:", 
        options: ["$1,6 \\cdot 10^{-18} J$", "$-1,6 \\cdot 10^{-18} J$", "$10 J$", "$-10 J$"], 
        a: 1, 
        expl: "$W = qV = (-1,6 \\cdot 10^{-19}) \\cdot 10 = -1,6 \\cdot 10^{-18} J$." 
    },
    { 
        q: "Khi di chuyển cùng chiều đường sức điện, điện thế sẽ:", 
        options: ["Tăng dần", "Giảm dần", "Không đổi", "Bằng 0"], 
        a: 1, 
        expl: "Vectơ $\\vec{E}$ luôn hướng từ nơi có điện thế cao sang nơi có điện thế thấp." 
    },
    { 
        q: "Công của lực điện trường không phụ thuộc vào:", 
        options: ["Điện tích q", "Cường độ điện trường", "Hình dạng quỹ đạo", "Vị trí điểm đầu cuối"], 
        a: 2, 
        expl: "Lực điện là lực thế, công không phụ thuộc hình dạng đường đi." 
    },

    // Bài 14: Tụ điện (10 câu)
    { 
        q: "Điện dung $C$ của tụ điện đặc trưng cho:", 
        options: ["Khả năng tích điện", "Khả năng tỏa nhiệt", "Độ bền của tụ", "Thể tích của tụ"], 
        a: 0, 
        expl: "$C$ càng lớn thì tụ tích được càng nhiều điện tích ở cùng một hiệu điện thế." 
    },
    { 
        q: "Công thức tính điện dung là:", 
        options: ["$C = QU$", "$C = Q/U$", "$C = U/Q$", "$C = 1/2 QU$"], 
        a: 1, 
        expl: "$C = Q/U$." 
    },
    { 
        q: "Năng lượng của tụ điện đã tích điện tỉ lệ thuận với:", 
        options: ["Hiệu điện thế U", "Bình phương hiệu điện thế $U^2$", "Căn bậc hai của U", "Nghịch lệ với U"], 
        a: 1, 
        expl: "$W = 1/2 CU^2$." 
    },
    { 
        q: "Đơn vị Fara ($F$) tương đương với:", 
        options: ["$1 V/C$", "$1 C/V$", "$1 J/C$", "$1 C \\cdot V$"], 
        a: 1, 
        expl: "Từ $C = Q/U$, đơn vị là $Coulomb / Volt$." 
    },
    { 
        q: "Khi ghép song song hai tụ điện $C_1$ và $C_2$, điện dung tương đương là:", 
        options: ["$C = C_1 + C_2$", "$C = C_1 \\cdot C_2 / (C_1+C_2)$", "$1/C = 1/C_1 + 1/C_2$", "$C = C_1 - C_2$"], 
        a: 0, 
        expl: "Song song thì cộng điện dung." 
    },
    { 
        q: "Một tụ điện ghi $10 \\mu F - 250V$. Số 250V cho biết:", 
        options: ["Hiệu điện thế tụ luôn có", "Hiệu điện thế định mức (tối đa)", "Hiệu điện thế nạp điện", "Suất điện động"], 
        a: 1, 
        expl: "Đây là giới hạn an toàn của tụ." 
    },
    { 
        q: "Để tăng điện dung của tụ điện phẳng, ta có thể:", 
        options: ["Tăng hiệu điện thế", "Giảm khoảng cách d giữa hai bản", "Giảm diện tích bản tụ", "Rút bớt điện tích"], 
        a: 1, 
        expl: "$C = \\frac{\\varepsilon S}{4\\pi kd}$, $C$ tỉ lệ nghịch với $d$." 
    },
    { 
        q: "Năng lượng của tụ điện tích trữ ở dạng:", 
        options: ["Năng lượng từ trường", "Năng lượng điện trường", "Cơ năng", "Hóa năng"], 
        a: 1, 
        expl: "Năng lượng nằm trong vùng không gian có điện trường giữa hai bản tụ." 
    },
    { 
        q: "Tụ điện có điện dung $2 \\mu F$, tích điện $4 \\mu C$. Hiệu điện thế là:", 
        options: ["8 V", "0,5 V", "2 V", "6 V"], 
        a: 2, 
        expl: "$U = Q/C = 4/2 = 2 V$." 
    },
    { 
        q: "Khi ngắt tụ khỏi nguồn rồi tăng khoảng cách 2 bản, đại lượng nào không đổi?", 
        options: ["Điện dung C", "Hiệu điện thế U", "Điện tích Q", "Năng lượng W"], 
        a: 2, 
        expl: "Ngắt khỏi nguồn thì điện tích bị cô lập nên $Q$ không đổi." 
    },

    // Câu tổng hợp (10 câu)
    { 
        q: "Nguyên tử trung hòa về điện vì:", 
        options: ["Có nhiều electron hơn proton", "Số proton bằng số electron", "Không có điện tích", "Hạt nhân mang điện âm"], 
        a: 1, 
        expl: "Điện tích dương của hạt nhân triệt tiêu điện tích âm của vỏ electron." 
    },
    { 
        q: "Hằng số điện môi của một chất cho biết lực tương tác điện giảm đi bao nhiêu lần so với:", 
        options: ["Kim loại", "Chân không", "Nước", "Không khí"], 
        a: 1, 
        expl: "Hằng số điện môi $\\varepsilon$ lấy chân không làm chuẩn." 
    },
    { 
        q: "Điện phổ là:", 
        options: ["Tập hợp các đường sức điện", "Bảng giá trị điện thế", "Hình ảnh các hạt bụi xếp theo đường sức", "Màu sắc của điện trường"], 
        a: 2, 
        expl: "Điện phổ giúp ta hình dung hình dạng các đường sức điện trong thực tế." 
    },
    { 
        q: "Khi đi ngược chiều đường sức điện của một điện trường đều, điện thế sẽ:", 
        options: ["Tăng", "Giảm", "Không đổi", "Bằng 0"], 
        a: 0, 
        expl: "Chiều $\\vec{E}$ là chiều giảm điện thế, nên đi ngược lại là tăng điện thế." 
    },
    { 
        q: "Một quả cầu kim loại mang điện $q$. Nếu chạm quả cầu này vào một quả cầu khác giống hệt đang trung hòa thì điện tích mỗi quả là:", 
        options: ["q", "2q", "q/2", "0"], 
        a: 2, 
        expl: "Nhiễm điện do tiếp xúc: điện tích chia đều cho hai vật giống nhau." 
    },
    { 
        q: "Công thức $A = q(V_M - V_N)$ đúng cho:", 
        options: ["Chỉ điện trường đều", "Mọi điện trường", "Chỉ điện tích điểm", "Chỉ tụ điện"], 
        a: 1, 
        expl: "Đây là định nghĩa tổng quát về công và điện thế." 
    },
    { 
        q: "Đơn vị $1 nC$ (nanocoulomb) bằng:", 
        options: ["$10^{-3} C$", "$10^{-6} C$", "$10^{-9} C$", "$10^{-12} C$"], 
        a: 2, 
        expl: "Nano là $10^{-9}$." 
    },
    { 
        q: "Bản chất của dòng điện trong kim loại là dòng dịch chuyển có hướng của:", 
        options: ["Ion dương", "Ion âm", "Electron tự do", "Proton"], 
        a: 2, 
        expl: "Kim loại dẫn điện nhờ các electron tự do." 
    },
    { 
        q: "Trong công thức Coulomb, nếu r tăng lên gấp đôi thì F thay đổi như thế nào?", 
        options: ["Tăng 2 lần", "Giảm 2 lần", "Tăng 4 lần", "Giảm 4 lần"], 
        a: 3, 
        expl: "$F \\sim 1/r^2$. r tăng 2 thì F giảm $2^2 = 4$ lần." 
    },
    { 
        q: "Một vật dẫn cân bằng điện thì cường độ điện trường tại một điểm bên trong vật dẫn bằng:", 
        options: ["Cực đại", "Bằng E mặt ngoài", "0", "Phụ thuộc hình dạng"], 
        a: 2, 
        expl: "Trong vật dẫn cân bằng, điện trường bằng 0 để các điện tích không di chuyển thêm nữa." 
    }
];