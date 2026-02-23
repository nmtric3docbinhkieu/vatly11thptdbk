// ==============================================
// FILE: database-chapter3.js
// ==============================================
// Ngân hàng câu hỏi chương 3: Điện trường (60 câu)
// Gồm: 30 câu nhận biết, 15 câu thông hiểu, 10 câu vận dụng thấp, 5 câu vận dụng cao

window.questionsChapter3 = [
    // ==============================================
    // PHẦN 1: NHẬN BIẾT (30 CÂU)
    // ==============================================
    
    // Câu 1: Nhận biết
    { 
        q: "Có mấy loại điện tích?", 
        options: ["1 loại", "2 loại", "3 loại", "4 loại"], 
        a: 1, 
        expl: "Có hai loại điện tích là điện tích dương (+) và điện tích âm (-)." 
    },
    
    // Câu 2: Nhận biết
    { 
        q: "Các điện tích cùng dấu thì:", 
        options: ["Hút nhau", "Đẩy nhau", "Không tương tác", "Vừa hút vừa đẩy"], 
        a: 1, 
        expl: "Các điện tích cùng dấu đẩy nhau, trái dấu hút nhau." 
    },
    
    // Câu 3: Nhận biết
    { 
        q: "Các điện tích trái dấu thì:", 
        options: ["Hút nhau", "Đẩy nhau", "Không tương tác", "Vừa hút vừa đẩy"], 
        a: 0, 
        expl: "Các điện tích trái dấu hút nhau, cùng dấu đẩy nhau." 
    },
    
    // Câu 4: Nhận biết
    { 
        q: "Đơn vị của điện tích trong hệ SI là:", 
        options: ["Ampe (A)", "Vôn (V)", "Culông (C)", "Fara (F)"], 
        a: 2, 
        expl: "Đơn vị đo điện tích là culông, kí hiệu là C." 
    },
    
    // Câu 5: Nhận biết
    { 
        q: "Điện tích nguyên tố có giá trị bằng:", 
        options: ["$1,6.10^{-19} C$", "$1,6.10^{-19} \\mu C$", "$1,6.10^{-19} nC$", "$1,6.10^{-19} pF$"], 
        a: 0, 
        expl: "Điện tích nguyên tố $e = 1,6.10^{-19} C$." 
    },
    
    // Câu 6: Nhận biết
    { 
        q: "Electron là hạt:", 
        options: ["Tích điện dương", "Tích điện âm", "Không mang điện", "Có thể mang điện dương hoặc âm"], 
        a: 1, 
        expl: "Electron là hạt tích điện âm và có độ lớn điện tích bằng điện tích nguyên tố." 
    },
    
    // Câu 7: Nhận biết
    { 
        q: "Proton là hạt:", 
        options: ["Tích điện dương", "Tích điện âm", "Không mang điện", "Có thể mang điện dương hoặc âm"], 
        a: 0, 
        expl: "Proton mang điện tích dương, nằm trong hạt nhân nguyên tử." 
    },
    
    // Câu 8: Nhận biết
    { 
        q: "Khi cọ xát thanh thủy tinh vào lụa, thanh thủy tinh nhiễm điện:", 
        options: ["Âm", "Dương", "Trung hòa", "Có thể âm hoặc dương"], 
        a: 1, 
        expl: "Khi cọ xát thanh thủy tinh với lụa, thanh thủy tinh nhiễm điện dương, mảnh lụa nhiễm điện âm." 
    },
    
    // Câu 9: Nhận biết
    { 
        q: "Khi cọ xát thanh nhựa vào vải khô, thanh nhựa nhiễm điện:", 
        options: ["Âm", "Dương", "Trung hòa", "Có thể âm hoặc dương"], 
        a: 0, 
        expl: "Khi cọ xát thanh nhựa với vải khô, thanh nhựa nhiễm điện âm, vải khô nhiễm điện dương." 
    },
    
    // Câu 10: Nhận biết
    { 
        q: "Theo thuyết electron, nguyên tử trung hòa về điện là do:", 
        options: ["Số proton bằng số electron", "Số proton bằng số neutron", "Số electron bằng số neutron", "Tổng điện tích âm lớn hơn tổng điện tích dương"], 
        a: 0, 
        expl: "Nguyên tử trung hòa về điện khi số proton (mang điện dương) bằng số electron (mang điện âm)." 
    },
    
    // Câu 11: Nhận biết
    { 
        q: "Định luật Coulomb mô tả lực tương tác giữa:", 
        options: ["Hai điện tích điểm", "Hai nam châm", "Hai dòng điện", "Điện tích và dòng điện"], 
        a: 0, 
        expl: "Định luật Coulomb mô tả lực tương tác tĩnh điện giữa hai điện tích điểm." 
    },
    
    // Câu 12: Nhận biết
    { 
        q: "Công thức của định luật Coulomb trong chân không là:", 
        options: ["$F = k\\frac{q_1q_2}{r}$", "$F = k\\frac{q_1q_2}{r^2}$", "$F = k\\frac{|q_1q_2|}{r}$", "$F = k\\frac{|q_1q_2|}{r^2}$"], 
        a: 3, 
        expl: "Công thức định luật Coulomb: $F = k\\frac{|q_1q_2|}{r^2}$ với $k = 9.10^9 \\frac{Nm^2}{C^2}$." 
    },
    
    // Câu 13: Nhận biết
    { 
        q: "Hằng số Coulomb có giá trị:", 
        options: ["$k = 9.10^9 \\frac{Nm^2}{C^2}$", "$k = 9.10^9 \\frac{Nm}{C}$", "$k = 9.10^{-9} \\frac{Nm^2}{C^2}$", "$k = 9.10^9 \\frac{C^2}{Nm^2}$"], 
        a: 0, 
        expl: "Trong hệ SI, $k = 9.10^9 \\frac{Nm^2}{C^2}$." 
    },
    
    // Câu 14: Nhận biết
    { 
        q: "Hằng số điện môi của chân không có giá trị:", 
        options: ["0", "1", "1,00059", "81"], 
        a: 1, 
        expl: "Hằng số điện môi của chân không bằng 1." 
    },
    
    // Câu 15: Nhận biết
    { 
        q: "Hằng số điện môi của không khí có giá trị:", 
        options: ["0", "1", "1,00059", "81"], 
        a: 2, 
        expl: "Hằng số điện môi của không khí là 1,00059 (gần bằng 1)." 
    },
    
    // Câu 16: Nhận biết
    { 
        q: "Điện trường là:", 
        options: ["Dạng vật chất bao quanh điện tích", "Khoảng không gian xung quanh điện tích", "Chân không xung quanh điện tích", "Từ trường xung quanh điện tích"], 
        a: 0, 
        expl: "Điện trường là dạng vật chất bao quanh điện tích và truyền tương tác giữa các điện tích." 
    },
    
    // Câu 17: Nhận biết
    { 
        q: "Cường độ điện trường được định nghĩa bằng công thức:", 
        options: ["$\\vec{E} = \\vec{F}.q$", "$\\vec{E} = \\frac{\\vec{F}}{q}$", "$\\vec{E} = \\frac{q}{\\vec{F}}$", "$\\vec{E} = \\vec{F} + q$"], 
        a: 1, 
        expl: "Cường độ điện trường $\\vec{E} = \\frac{\\vec{F}}{q}$, với $\\vec{F}$ là lực điện tác dụng lên điện tích thử q." 
    },
    
    // Câu 18: Nhận biết
    { 
        q: "Đơn vị của cường độ điện trường là:", 
        options: ["V", "C", "V/m", "F"], 
        a: 2, 
        expl: "Đơn vị cường độ điện trường là vôn trên mét (V/m) hoặc niuton trên culông (N/C)." 
    },
    
    // Câu 19: Nhận biết
    { 
        q: "Đường sức điện là đường:", 
        options: [
            "Có tiếp tuyến tại mỗi điểm trùng với vectơ cường độ điện trường tại điểm đó", 
            "Có phương vuông góc với vectơ cường độ điện trường", 
            "Có chiều ngược với vectơ cường độ điện trường", 
            "Có độ lớn tỉ lệ với cường độ điện trường"
        ], 
        a: 0, 
        expl: "Đường sức điện là đường mà tiếp tuyến tại mỗi điểm trùng với phương của vectơ cường độ điện trường tại điểm đó, chiều trùng với chiều của vectơ cường độ điện trường." 
    },
    
    // Câu 20: Nhận biết
    { 
        q: "Đường sức điện xuất phát từ:", 
        options: ["Điện tích âm, kết thúc ở điện tích dương", "Điện tích dương, kết thúc ở điện tích âm", "Điện tích dương, kết thúc ở vô cực", "Điện tích âm, kết thúc ở vô cực"], 
        a: 1, 
        expl: "Đường sức điện bắt đầu từ điện tích dương (hoặc ở vô cực) và kết thúc ở điện tích âm (hoặc ở vô cực)." 
    },
    
    // Câu 21: Nhận biết
    { 
        q: "Điện trường đều là điện trường có:", 
        options: [
            "Cường độ điện trường tại mọi điểm bằng nhau", 
            "Đường sức là những đường thẳng song song cách đều", 
            "Vectơ cường độ điện trường tại mọi điểm bằng nhau", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Điện trường đều có vectơ cường độ điện trường tại mọi điểm bằng nhau, đường sức là những đường thẳng song song và cách đều." 
    },
    
    // Câu 22: Nhận biết
    { 
        q: "Công thức liên hệ giữa cường độ điện trường và hiệu điện thế trong điện trường đều là:", 
        options: ["$E = U.d$", "$E = \\frac{U}{d}$", "$E = \\frac{d}{U}$", "$E = U + d$"], 
        a: 1, 
        expl: "Trong điện trường đều: $E = \\frac{U}{d}$ với d là khoảng cách giữa hai điểm trên phương đường sức." 
    },
    
    // Câu 23: Nhận biết
    { 
        q: "Điện dung của tụ điện được định nghĩa bằng công thức:", 
        options: ["$C = Q.U$", "$C = \\frac{Q}{U}$", "$C = \\frac{U}{Q}$", "$C = Q + U$"], 
        a: 1, 
        expl: "Điện dung $C = \\frac{Q}{U}$ đặc trưng cho khả năng tích điện của tụ." 
    },
    
    // Câu 24: Nhận biết
    { 
        q: "Đơn vị của điện dung là:", 
        options: ["Vôn (V)", "Culông (C)", "Fara (F)", "Tesla (T)"], 
        a: 2, 
        expl: "Đơn vị điện dung là fara (F)." 
    },
    
    // Câu 25: Nhận biết
    { 
        q: "1 µF bằng:", 
        options: ["$10^{-3} F$", "$10^{-6} F$", "$10^{-9} F$", "$10^{-12} F$"], 
        a: 1, 
        expl: "$1 \\mu F = 10^{-6} F$, $1 nF = 10^{-9} F$, $1 pF = 10^{-12} F$." 
    },
    
    // Câu 26: Nhận biết
    { 
        q: "Công thức tính năng lượng của tụ điện là:", 
        options: ["$W = QU$", "$W = \\frac{1}{2}QU$", "$W = \\frac{Q}{U}$", "$W = \\frac{U}{Q}$"], 
        a: 1, 
        expl: "Năng lượng tụ điện: $W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}$." 
    },
    
    // Câu 27: Nhận biết
    { 
        q: "Tụ điện không cho dòng điện nào đi qua?", 
        options: ["Dòng điện xoay chiều", "Dòng điện một chiều", "Cả dòng xoay chiều và một chiều", "Tất cả đều sai"], 
        a: 1, 
        expl: "Tụ điện không cho dòng điện một chiều đi qua nhưng cho dòng điện xoay chiều đi qua." 
    },
    
    // Câu 28: Nhận biết
    { 
        q: "Hiện tượng nhiễm điện do tiếp xúc là:", 
        options: ["Hai vật nhiễm điện cùng dấu", "Hai vật nhiễm điện trái dấu", "Vật trung hòa vẫn trung hòa", "Vật nhiễm điện hút vật trung hòa"], 
        a: 0, 
        expl: "Khi vật trung hòa tiếp xúc với vật nhiễm điện, hai vật sẽ nhiễm điện cùng dấu." 
    },
    
    // Câu 29: Nhận biết
    { 
        q: "Hiện tượng nhiễm điện do hưởng ứng là:", 
        options: ["Hai đầu vật nhiễm điện trái dấu", "Hai đầu vật nhiễm điện cùng dấu", "Vật nhiễm điện cùng dấu với vật kia", "Vật nhiễm điện trái dấu với vật kia"], 
        a: 0, 
        expl: "Khi vật dẫn trung hòa đặt gần vật nhiễm điện, hai đầu vật nhiễm điện trái dấu nhau." 
    },
    
    // Câu 30: Nhận biết
    { 
        q: "Khi tăng khoảng cách giữa hai điện tích lên 2 lần thì lực tương tác giữa chúng:", 
        options: ["Tăng 2 lần", "Giảm 2 lần", "Tăng 4 lần", "Giảm 4 lần"], 
        a: 3, 
        expl: "Lực Coulomb tỉ lệ nghịch với bình phương khoảng cách: $F \\sim \\frac{1}{r^2}$. Khi r tăng 2 lần, F giảm 4 lần." 
    },

    // ==============================================
    // PHẦN 2: THÔNG HIỂU (15 CÂU)
    // ==============================================
    
    // Câu 31: Thông hiểu
    { 
        q: "Hai điện tích điểm $q_1 = 2.10^{-8} C$ và $q_2 = -3.10^{-8} C$ đặt cách nhau 3 cm trong chân không. Lực tương tác giữa chúng có độ lớn:", 
        options: ["$6.10^{-3} N$", "$6.10^{-4} N$", "$6.10^{-5} N$", "$6.10^{-2} N$"], 
        a: 0, 
        expl: "$F = k\\frac{|q_1q_2|}{r^2} = 9.10^9\\frac{|2.10^{-8}.(-3).10^{-8}|}{(0,03)^2} = 9.10^9\\frac{6.10^{-16}}{9.10^{-4}} = 6.10^{-3} N$" 
    },
    
    // Câu 32: Thông hiểu
    { 
        q: "Một vật nhiễm điện dương là vật:", 
        options: ["Thừa electron", "Thiếu electron", "Thừa proton", "Thiếu proton"], 
        a: 1, 
        expl: "Vật nhiễm điện dương khi thiếu electron (số proton > số electron). Vật nhiễm điện âm khi thừa electron." 
    },
    
    // Câu 33: Thông hiểu
    { 
        q: "Khi đưa một vật nhiễm điện dương lại gần một quả cầu kim loại trung hòa về điện (không tiếp xúc) thì:", 
        options: ["Quả cầu nhiễm điện dương", "Quả cầu nhiễm điện âm", "Quả cầu vẫn trung hòa nhưng bị phân cực", "Quả cầu không bị ảnh hưởng"], 
        a: 2, 
        expl: "Đây là hiện tượng nhiễm điện do hưởng ứng. Quả cầu vẫn trung hòa nhưng điện tích phân bố lại: đầu gần vật nhiễm điện dương tích điện âm, đầu xa tích điện dương." 
    },
    
    // Câu 34: Thông hiểu
    { 
        q: "Một điện tích điểm $Q = 4.10^{-8} C$ đặt trong chân không. Cường độ điện trường do Q gây ra tại điểm M cách Q 2 cm có độ lớn:", 
        options: ["$9.10^5 V/m$", "$9.10^4 V/m$", "$9.10^3 V/m$", "$9.10^6 V/m$"], 
        a: 0, 
        expl: "$E = k\\frac{|Q|}{r^2} = 9.10^9\\frac{4.10^{-8}}{(0,02)^2} = 9.10^9\\frac{4.10^{-8}}{4.10^{-4}} = 9.10^5 V/m$" 
    },
    
    // Câu 35: Thông hiểu
    { 
        q: "Đường sức điện cho phép xác định:", 
        options: ["Phương và chiều của vectơ cường độ điện trường", "Độ lớn của cường độ điện trường", "Điện tích của nguồn", "Khoảng cách đến nguồn"], 
        a: 0, 
        expl: "Tiếp tuyến của đường sức điện tại một điểm cho biết phương, chiều của vectơ cường độ điện trường tại điểm đó. Mật độ đường sức cho biết độ lớn của cường độ điện trường." 
    },
    
    // Câu 36: Thông hiểu
    { 
        q: "Công của lực điện tác dụng lên điện tích q di chuyển từ điểm M đến điểm N trong điện trường đều:", 
        options: ["Phụ thuộc vào hình dạng đường đi", "Không phụ thuộc vào hình dạng đường đi", "Phụ thuộc vào vận tốc của điện tích", "Luôn bằng 0"], 
        a: 1, 
        expl: "Lực điện là lực thế, công của lực điện không phụ thuộc vào hình dạng đường đi mà chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối." 
    },
    
    // Câu 37: Thông hiểu
    { 
        q: "Hiệu điện thế giữa hai điểm M và N là $U_{MN} = 100 V$. Công của lực điện khi di chuyển electron từ M đến N là:", 
        options: ["$1,6.10^{-17} J$", "$-1,6.10^{-17} J$", "$1,6.10^{-19} J$", "$-1,6.10^{-19} J$"], 
        a: 1, 
        expl: "$A = q.U = (-1,6.10^{-19}).100 = -1,6.10^{-17} J$. Dấu âm thể hiện lực điện cản trở chuyển động của electron." 
    },
    
    // Câu 38: Thông hiểu
    { 
        q: "Một tụ điện phẳng có điện dung 20 µF, được tích điện dưới hiệu điện thế 50 V. Điện tích của tụ điện là:", 
        options: ["0,4 C", "0,04 C", "0,004 C", "0,001 C"], 
        a: 3, 
        expl: "$Q = C.U = 20.10^{-6}.50 = 1000.10^{-6} = 10^{-3} C = 0,001 C$" 
    },
    
    // Câu 39: Thông hiểu
    { 
        q: "Hai tụ điện có điện dung $C_1 = 2 µF$ và $C_2 = 4 µF$ mắc song song. Điện dung tương đương của bộ tụ là:", 
        options: ["1,33 µF", "2 µF", "4 µF", "6 µF"], 
        a: 3, 
        expl: "Mắc song song: $C_b = C_1 + C_2 = 2 + 4 = 6 µF$" 
    },
    
    // Câu 40: Thông hiểu
    { 
        q: "Hai tụ điện có điện dung $C_1 = 2 µF$ và $C_2 = 4 µF$ mắc nối tiếp. Điện dung tương đương của bộ tụ là:", 
        options: ["1,33 µF", "2 µF", "4 µF", "6 µF"], 
        a: 0, 
        expl: "Mắc nối tiếp: $\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4} \\Rightarrow C_b = \\frac{4}{3} \\approx 1,33 µF$" 
    },
    
    // Câu 41: Thông hiểu
    { 
        q: "Một điện tích q = 2.10⁻⁶ C di chuyển từ điểm A đến điểm B trong điện trường đều có cường độ E = 5000 V/m. Biết AB = 10 cm và AB hợp với đường sức điện một góc 60°. Công của lực điện là:", 
        options: ["$5.10^{-4} J$", "$5.10^{-3} J$", "$5.10^{-5} J$", "$5.10^{-2} J$"], 
        a: 0, 
        expl: "$A = q.E.d = q.E.AB.\\cos\\alpha = 2.10^{-6}.5000.0,1.\\cos60° = 2.10^{-6}.5000.0,1.0,5 = 5.10^{-4} J$" 
    },
    
    // Câu 42: Thông hiểu
    { 
        q: "Một electron bay vào điện trường đều theo phương vuông góc với đường sức với vận tốc đầu $v_0$. Chuyển động của electron có quỹ đạo là:", 
        options: ["Đường thẳng", "Đường tròn", "Đường parabol", "Đường elip"], 
        a: 2, 
        expl: "Electron chuyển động như vật ném ngang: theo phương vuông góc với điện trường là chuyển động thẳng đều, theo phương song song với điện trường là chuyển động thẳng nhanh dần đều. Quỹ đạo là đường parabol." 
    },
    
    // Câu 43: Thông hiểu
    { 
        q: "Khi tăng hiệu điện thế giữa hai bản tụ lên 2 lần thì năng lượng của tụ điện thay đổi thế nào?", 
        options: ["Tăng 2 lần", "Tăng 4 lần", "Giảm 2 lần", "Giảm 4 lần"], 
        a: 1, 
        expl: "Năng lượng tụ điện $W = \\frac{1}{2}CU^2$. Khi U tăng 2 lần, W tăng $2^2 = 4$ lần." 
    },
    
    // Câu 44: Thông hiểu
    { 
        q: "Một tụ điện phẳng có điện dung C, được tích điện đến hiệu điện thế U, sau đó ngắt khỏi nguồn. Nhúng tụ vào điện môi lỏng có $\\varepsilon = 2$ thì:", 
        options: ["Điện dung tăng 2 lần, hiệu điện thế giảm 2 lần", "Điện dung giảm 2 lần, hiệu điện thế tăng 2 lần", "Điện dung tăng 2 lần, hiệu điện thế không đổi", "Điện dung không đổi, hiệu điện thế giảm 2 lần"], 
        a: 0, 
        expl: "Khi ngắt khỏi nguồn, Q không đổi. Nhúng vào điện môi, $C' = \\varepsilon C = 2C$. $U' = \\frac{Q}{C'} = \\frac{Q}{2C} = \\frac{U}{2}$." 
    },
    
    // Câu 45: Thông hiểu
    { 
        q: "Hai điện tích điểm bằng nhau đặt trong dầu có $\\varepsilon = 2$, cách nhau 3 cm thì lực tương tác giữa chúng là $6.10^{-5} N$. Độ lớn mỗi điện tích là:", 
        options: ["$3.10^{-9} C$", "$6.10^{-9} C$", "$9.10^{-9} C$", "$12.10^{-9} C$"], 
        a: 1, 
        expl: "$F = k\\frac{q^2}{\\varepsilon r^2} \\Rightarrow q = r\\sqrt{\\frac{\\varepsilon F}{k}} = 0,03\\sqrt{\\frac{2.6.10^{-5}}{9.10^9}} = 0,03\\sqrt{\\frac{12.10^{-5}}{9.10^9}} = 0,03\\sqrt{1,33.10^{-14}} \\approx 6.10^{-9} C$" 
    },

    // ==============================================
    // PHẦN 3: VẬN DỤNG THẤP (10 CÂU)
    // ==============================================
    
    // Câu 46: Vận dụng thấp
    { 
        q: "Hai điện tích điểm bằng nhau đặt trong chân không cách nhau 4 cm thì lực tương tác giữa chúng là $2,025.10^{-5} N$. Độ lớn của mỗi điện tích là:", 
        options: ["$3.10^{-9} C$", "$6.10^{-9} C$", "$9.10^{-9} C$", "$12.10^{-9} C$"], 
        a: 1, 
        expl: "$F = k\\frac{q^2}{r^2} \\Rightarrow q = r\\sqrt{\\frac{F}{k}} = 0,04\\sqrt{\\frac{2,025.10^{-5}}{9.10^9}} = 0,04\\sqrt{2,25.10^{-15}} = 0,04.4,74.10^{-8} \\approx 6.10^{-9} C$" 
    },
    
    // Câu 47: Vận dụng thấp
    { 
        q: "Cho hai điện tích $q_1 = 4.10^{-8} C$ và $q_2 = -4.10^{-8} C$ đặt tại hai điểm A, B cách nhau 6 cm trong chân không. Xác định vectơ cường độ điện trường tổng hợp tại trung điểm M của AB.", 
        options: ["$E = 0$", "$E = 4.10^5 V/m$, hướng từ M đến B", "$E = 8.10^5 V/m$, hướng từ M đến B", "$E = 8.10^5 V/m$, hướng từ M đến A"], 
        a: 2, 
        expl: "$E_1 = k\\frac{|q_1|}{r^2} = 9.10^9\\frac{4.10^{-8}}{(0,03)^2} = 4.10^5 V/m$. $E_2 = k\\frac{|q_2|}{r^2} = 9.10^9\\frac{4.10^{-8}}{(0,03)^2} = 4.10^5 V/m$. Vì $q_1 > 0$ nên $\\vec{E_1}$ hướng ra xa A (từ M đến B), $q_2 < 0$ nên $\\vec{E_2}$ hướng về B (từ M đến B). Hai vectơ cùng hướng nên $E = E_1 + E_2 = 8.10^5 V/m$, hướng từ M đến B." 
    },
    
    // Câu 48: Vận dụng thấp
    { 
        q: "Một electron chuyển động với vận tốc ban đầu bằng 0, được gia tốc bởi hiệu điện thế 1000 V. Vận tốc của electron khi đến điện thế cao là bao nhiêu? Biết $m_e = 9,1.10^{-31} kg$, $e = 1,6.10^{-19} C$.", 
        options: ["$1,87.10^6 m/s$", "$1,87.10^7 m/s$", "$1,87.10^8 m/s$", "$1,87.10^9 m/s$"], 
        a: 1, 
        expl: "$\\frac{1}{2}mv^2 = eU \\Rightarrow v = \\sqrt{\\frac{2eU}{m}} = \\sqrt{\\frac{2.1,6.10^{-19}.1000}{9,1.10^{-31}}} = \\sqrt{3,52.10^{14}} \\approx 1,87.10^7 m/s$" 
    },
    
    // Câu 49: Vận dụng thấp
    { 
        q: "Một tụ điện phẳng không khí có điện dung 20 pF, khoảng cách giữa hai bản là 1 cm. Tính điện tích của tụ khi đặt vào hai bản một hiệu điện thế 100 V.", 
        options: ["$2.10^{-9} C$", "$2.10^{-10} C$", "$2.10^{-11} C$", "$2.10^{-12} C$"], 
        a: 0, 
        expl: "$Q = C.U = 20.10^{-12}.100 = 2.10^{-9} C$" 
    },
    
    // Câu 50: Vận dụng thấp
    { 
        q: "Cho bộ tụ gồm $C_1 = 2 µF$ mắc nối tiếp với $C_2 = 3 µF$. Bộ tụ được mắc vào nguồn có hiệu điện thế 100 V. Điện tích của bộ tụ là:", 
        options: ["$1,2.10^{-4} C$", "$2,4.10^{-4} C$", "$3,6.10^{-4} C$", "$5.10^{-4} C$"], 
        a: 0, 
        expl: "$\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6} \\Rightarrow C_b = \\frac{6}{5} = 1,2 µF = 1,2.10^{-6} F$. $Q = C_b.U = 1,2.10^{-6}.100 = 1,2.10^{-4} C$" 
    },
    
    // Câu 51: Vận dụng thấp
    { 
        q: "Một điện tích q = 5.10⁻⁶ C di chuyển từ điểm M đến điểm N trong điện trường, công của lực điện là $2.10^{-4} J$. Hiệu điện thế $U_{MN}$ là:", 
        options: ["40 V", "50 V", "60 V", "70 V"], 
        a: 0, 
        expl: "$U_{MN} = \\frac{A_{MN}}{q} = \\frac{2.10^{-4}}{5.10^{-6}} = 40 V$" 
    },
    
    // Câu 52: Vận dụng thấp
    { 
        q: "Hai bản kim loại phẳng song song cách nhau 2 cm, được tích điện trái dấu tạo ra điện trường đều giữa hai bản. Một electron thả không vận tốc đầu từ bản âm và đến bản dương với vận tốc $4.10^6 m/s$. Hiệu điện thế giữa hai bản là bao nhiêu? Biết $m_e = 9,1.10^{-31} kg$, $e = 1,6.10^{-19} C$.", 
        options: ["45,5 V", "50,5 V", "55,5 V", "60,5 V"], 
        a: 0, 
        expl: "$\\frac{1}{2}mv^2 = eU \\Rightarrow U = \\frac{mv^2}{2e} = \\frac{9,1.10^{-31}.(4.10^6)^2}{2.1,6.10^{-19}} = \\frac{9,1.10^{-31}.16.10^{12}}{3,2.10^{-19}} = \\frac{145,6.10^{-19}}{3,2.10^{-19}} = 45,5 V$" 
    },
    
    // Câu 53: Vận dụng thấp
    { 
        q: "Một tụ điện có điện dung 10 µF được tích điện đến hiệu điện thế 200 V. Năng lượng của tụ điện là:", 
        options: ["0,1 J", "0,2 J", "0,3 J", "0,4 J"], 
        a: 1, 
        expl: "$W = \\frac{1}{2}CU^2 = \\frac{1}{2}.10.10^{-6}.200^2 = \\frac{1}{2}.10.10^{-6}.40000 = 5.10^{-6}.40000 = 0,2 J$" 
    },
    
    // Câu 54: Vận dụng thấp
    { 
        q: "Ba tụ điện giống nhau có điện dung C = 2 µF được mắc nối tiếp. Điện dung tương đương của bộ tụ là:", 
        options: ["0,67 µF", "1 µF", "2 µF", "6 µF"], 
        a: 0, 
        expl: "$\\frac{1}{C_b} = \\frac{1}{C} + \\frac{1}{C} + \\frac{1}{C} = \\frac{3}{C} \\Rightarrow C_b = \\frac{C}{3} = \\frac{2}{3} \\approx 0,67 µF$" 
    },
    
    // Câu 55: Vận dụng thấp
    { 
        q: "Ba tụ điện giống nhau có điện dung C = 2 µF được mắc song song. Điện dung tương đương của bộ tụ là:", 
        options: ["0,67 µF", "1 µF", "2 µF", "6 µF"], 
        a: 3, 
        expl: "Mắc song song: $C_b = C + C + C = 3C = 3.2 = 6 µF$" 
    },

    // ==============================================
    // PHẦN 4: VẬN DỤNG CAO (5 CÂU)
    // ==============================================
    
    // Câu 56: Vận dụng cao
    { 
        q: "Hai quả cầu nhỏ giống nhau, mỗi quả có khối lượng 0,2 g, được treo bằng hai sợi dây mảnh, không dãn, cùng chiều dài 50 cm vào cùng một điểm. Khi truyền cho mỗi quả một điện tích q như nhau, chúng đẩy nhau và cách nhau 6 cm. Lấy $g = 10 m/s^2$. Điện tích q có độ lớn bằng:", 
        options: ["$1,28.10^{-8} C$", "$2,56.10^{-8} C$", "$3,6.10^{-8} C$", "$4,8.10^{-8} C$"], 
        a: 1, 
        expl: "Khi cân bằng, $\\tan\\alpha = \\frac{F}{P} = \\frac{r/2}{\\sqrt{l^2 - (r/2)^2}}$. Với $r = 0,06 m$, $l = 0,5 m$, $\\sqrt{l^2 - (r/2)^2} = \\sqrt{0,25 - (0,03)^2} = \\sqrt{0,25 - 0,0009} = \\sqrt{0,2491} \\approx 0,499$. $\\tan\\alpha = \\frac{0,03}{0,499} \\approx 0,06$. $F = P\\tan\\alpha = 0,2.10^{-3}.10.0,06 = 1,2.10^{-4} N$. $F = k\\frac{q^2}{r^2} \\Rightarrow q = r\\sqrt{\\frac{F}{k}} = 0,06\\sqrt{\\frac{1,2.10^{-4}}{9.10^9}} = 0,06\\sqrt{1,33.10^{-14}} = 0,06.1,15.10^{-7} \\approx 2,56.10^{-8} C$" 
    },
    
    // Câu 57: Vận dụng cao
    { 
        q: "Ba điện tích điểm $q_1 = 2.10^{-8} C$, $q_2 = -4.10^{-8} C$, $q_3 = 6.10^{-8} C$ đặt lần lượt tại ba đỉnh A, B, C của tam giác đều cạnh 6 cm trong chân không. Lực điện tổng hợp tác dụng lên điện tích $q_3$ có độ lớn xấp xỉ bằng:", 
        options: ["$7,94.10^{-3} N$", "$3.10^{-3} N$", "$6.10^{-3} N$", "$9.10^{-3} N$"], 
        a: 0, 
        expl: "$F_{13} = k\\frac{|q_1q_3|}{r^2} = 9.10^9\\frac{|2.10^{-8}.6.10^{-8}|}{0,06^2} = 9.10^9\\frac{12.10^{-16}}{36.10^{-4}} = 9.10^9.3,33.10^{-13} = 3.10^{-3} N$. $F_{23} = k\\frac{|q_2q_3|}{r^2} = 9.10^9\\frac{|(-4.10^{-8}).6.10^{-8}|}{0,06^2} = 9.10^9\\frac{24.10^{-16}}{36.10^{-4}} = 9.10^9.6,67.10^{-13} = 6.10^{-3} N$. Góc giữa $\\vec{F_{13}}$ và $\\vec{F_{23}}$ là 60° (do tam giác đều). $F = \\sqrt{F_{13}^2 + F_{23}^2 + 2F_{13}F_{23}\\cos60°} = \\sqrt{(3.10^{-3})^2 + (6.10^{-3})^2 + 2.3.10^{-3}.6.10^{-3}.0,5} = \\sqrt{9.10^{-6} + 36.10^{-6} + 18.10^{-6}} = \\sqrt{63.10^{-6}} = \\sqrt{63}.10^{-3} \\approx 7,94.10^{-3} N$" 
    },
    
    // Câu 58: Vận dụng cao
    { 
        q: "Một electron bay vào điện trường đều của một tụ điện phẳng theo phương song song với các đường sức với vận tốc đầu $v_0 = 2.10^7 m/s$. Biết chiều dài mỗi bản tụ là 5 cm, khoảng cách giữa hai bản là 2 cm, hiệu điện thế giữa hai bản là 200 V. Electron sẽ ra khỏi tụ điện ở vị trí cách bản dương một khoảng bao nhiêu?", 
        options: ["0,5 cm", "1 cm", "1,45 cm", "2 cm"], 
        a: 2, 
        expl: "$E = \\frac{U}{d} = \\frac{200}{0,02} = 10^4 V/m$. Gia tốc: $a = \\frac{eE}{m} = \\frac{1,6.10^{-19}.10^4}{9,1.10^{-31}} \\approx 1,76.10^{15} m/s^2$. Thời gian chuyển động trong tụ: $t = \\frac{l}{v_0} = \\frac{0,05}{2.10^7} = 2,5.10^{-9} s$. Độ lệch theo phương vuông góc: $y = \\frac{1}{2}at^2 = \\frac{1}{2}.1,76.10^{15}.(2,5.10^{-9})^2 = 0,5.1,76.10^{15}.6,25.10^{-18} = 5,5.10^{-3} m = 0,55 cm$. Electron bay vào từ bản âm, cách bản âm 0,55 cm. Vậy cách bản dương: $2 - 0,55 = 1,45 cm$." 
    },
    
    // Câu 59: Vận dụng cao
    { 
        q: "Một tụ điện phẳng không khí có điện dung $C = 500 pF$, được tích điện đến hiệu điện thế $U = 300 V$. Sau đó ngắt tụ khỏi nguồn và nhúng tụ vào điện môi lỏng có $\\varepsilon = 2$. Hiệu điện thế của tụ lúc này là:", 
        options: ["150 V", "300 V", "600 V", "75 V"], 
        a: 0, 
        expl: "Khi ngắt khỏi nguồn, điện tích Q không đổi. $Q = C.U = 500.10^{-12}.300 = 1,5.10^{-7} C$. Khi nhúng vào điện môi, $C' = \\varepsilon C = 2.500 = 1000 pF = 10^{-9} F$. $U' = \\frac{Q}{C'} = \\frac{1,5.10^{-7}}{10^{-9}} = 150 V$." 
    },
    
    // Câu 60: Vận dụng cao
    { 
        q: "Cho mạch điện gồm $C_1 = 1 µF$, $C_2 = 2 µF$, $C_3 = 3 µF$ mắc theo cách: $C_1$ nối tiếp $C_2$, cả bộ $C_{12}$ song song với $C_3$. Hiệu điện thế đặt vào hai đầu mạch là 100 V. Năng lượng của bộ tụ là:", 
        options: ["$2,5.10^{-3} J$", "$5.10^{-3} J$", "$7,5.10^{-3} J$", "$1,83.10^{-2} J$"], 
        a: 3, 
        expl: "$C_{12} = \\frac{C_1C_2}{C_1 + C_2} = \\frac{1.2}{1+2} = \\frac{2}{3} µF$. $C_b = C_{12} + C_3 = \\frac{2}{3} + 3 = \\frac{2}{3} + \\frac{9}{3} = \\frac{11}{3} µF = \\frac{11}{3}.10^{-6} F$. $W = \\frac{1}{2}C_bU^2 = \\frac{1}{2}.\\frac{11}{3}.10^{-6}.100^2 = \\frac{1}{2}.\\frac{11}{3}.10^{-6}.10^4 = \\frac{11}{6}.10^{-2} = 0,01833 J = 1,833.10^{-2} J$." 
    }
];