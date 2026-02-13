// ==============================================
// FILE: database-chapter4.js
// ==============================================
// Ngân hàng câu hỏi chương 4: Dòng điện, mạch điện (50 câu)
// Theo sách giáo khoa Vật lí 11 - Chân trời sáng tạo

window.questionsChapter4 = [
    // ========== BÀI 16: DÒNG ĐIỆN - CƯỜNG ĐỘ DÒNG ĐIỆN (10 CÂU) ==========
    
    // Câu 1
    { 
        q: "Dòng điện là:", 
        options: [
            "Dòng dịch chuyển có hướng của các điện tích", 
            "Dòng chuyển động của các electron", 
            "Dòng chuyển động của các ion", 
            "Dòng chuyển động của các proton"
        ], 
        a: 0, 
        expl: "Dòng điện là dòng dịch chuyển có hướng của các điện tích." 
    },
    
    // Câu 2
    { 
        q: "Chiều dòng điện được quy ước là:", 
        options: [
            "Chiều dịch chuyển có hướng của các điện tích dương", 
            "Chiều dịch chuyển của các electron", 
            "Chiều từ cực âm sang cực dương", 
            "Chiều dịch chuyển của các ion âm"
        ], 
        a: 0, 
        expl: "Chiều dòng điện được quy ước là chiều dịch chuyển có hướng của các điện tích dương (ngược với chiều dịch chuyển của electron)." 
    },
    
    // Câu 3
    { 
        q: "Cường độ dòng điện là đại lượng đặc trưng cho:", 
        options: [
            "Tác dụng mạnh hay yếu của dòng điện", 
            "Tốc độ dịch chuyển của điện tích", 
            "Khả năng sinh công của dòng điện", 
            "Mật độ điện tích"
        ], 
        a: 0, 
        expl: "Cường độ dòng điện là đại lượng đặc trưng cho tác dụng mạnh hay yếu của dòng điện." 
    },
    
    // Câu 4
    { 
        q: "Công thức xác định cường độ dòng điện là:", 
        options: [
            "$I = \\frac{\\Delta q}{\\Delta t}$", 
            "$I = q.t$", 
            "$I = \\frac{\\Delta t}{\\Delta q}$", 
            "$I = q^2 t$"
        ], 
        a: 0, 
        expl: "$I = \\frac{\\Delta q}{\\Delta t}$, với $\\Delta q$ là điện lượng dịch chuyển qua tiết diện thẳng trong thời gian $\\Delta t$." 
    },
    
    // Câu 5
    { 
        q: "Đơn vị của cường độ dòng điện trong hệ SI là:", 
        options: [
            "Ampe (A)", 
            "Vôn (V)", 
            "Ôm (Ω)", 
            "Culông (C)"
        ], 
        a: 0, 
        expl: "Cường độ dòng điện có đơn vị là ampe (A)." 
    },
    
    // Câu 6
    { 
        q: "Dòng điện không đổi là dòng điện có:", 
        options: [
            "Chiều và cường độ không thay đổi theo thời gian", 
            "Chiều không đổi, cường độ thay đổi", 
            "Cường độ không đổi, chiều thay đổi", 
            "Chiều và cường độ đều thay đổi"
        ], 
        a: 0, 
        expl: "Dòng điện không đổi là dòng điện có chiều và cường độ không thay đổi theo thời gian." 
    },
    
    // Câu 7
    { 
        q: "1 Culông (C) được định nghĩa là:", 
        options: [
            "Điện lượng chuyển qua tiết diện thẳng của dây dẫn trong 1s khi có dòng điện không đổi cường độ 1A chạy qua", 
            "Điện tích của $6,25.10^{18}$ electron", 
            "Điện tích của 1 proton", 
            "Cả A và B"
        ], 
        a: 3, 
        expl: "1 C là điện lượng chuyển qua tiết diện thẳng của dây dẫn trong 1s khi có dòng điện không đổi cường độ 1A chạy qua, cũng tương đương điện tích của $6,25.10^{18}$ electron: $1C = 1A.1s = 1A.s$." 
    },
    
    // Câu 8
    { 
        q: "Một dòng điện không đổi có cường độ 2A chạy qua dây dẫn. Điện lượng chuyển qua tiết diện thẳng trong 5 giây là:", 
        options: [
            "10 C", 
            "2,5 C", 
            "0,4 C", 
            "7 C"
        ], 
        a: 0, 
        expl: "$q = I.t = 2 \\times 5 = 10$ C." 
    },
    
    // Câu 9
    { 
        q: "Vận tốc trôi của các hạt tải điện tỉ lệ với:", 
        options: [
            "Cường độ dòng điện", 
            "Hiệu điện thế", 
            "Điện trở", 
            "Nhiệt độ"
        ], 
        a: 0, 
        expl: "Vận tốc trôi của các hạt tải điện tỉ lệ với cường độ dòng điện chạy trong vật dẫn." 
    },
    
    // Câu 10
    { 
        q: "Công thức liên hệ giữa vận tốc trôi $v$ và cường độ dòng điện $I$ là:", 
        options: [
            "$v = \\frac{I}{nS|q|}$", 
            "$v = \\frac{nS|q|}{I}$", 
            "$v = I.nS|q|$", 
            "$v = \\frac{I.nS}{|q|}$"
        ], 
        a: 0, 
        expl: "$v = \\frac{I}{nS|q|}$, với $n$ là mật độ hạt tải điện, $S$ là tiết diện, $q$ là điện tích mỗi hạt." 
    },

    // ========== BÀI 17: ĐIỆN TRỞ - ĐỊNH LUẬT OHM (10 CÂU) ==========
    
    // Câu 11
    { 
        q: "Điện trở của một vật dẫn là đại lượng đặc trưng cho:", 
        options: [
            "Khả năng cản trở dòng điện của vật dẫn", 
            "Khả năng dẫn điện của vật dẫn", 
            "Tốc độ dịch chuyển của điện tích", 
            "Mật độ electron tự do"
        ], 
        a: 0, 
        expl: "Điện trở của một vật dẫn là đại lượng đặc trưng cho khả năng cản trở dòng điện của vật dẫn." 
    },
    
    // Câu 12
    { 
        q: "Công thức xác định điện trở là:", 
        options: [
            "$R = \\frac{U}{I}$", 
            "$R = \\frac{I}{U}$", 
            "$R = U.I$", 
            "$R = \\frac{U^2}{I}$"
        ], 
        a: 0, 
        expl: "Điện trở $R = \\frac{U}{I}$." 
    },
    
    // Câu 13
    { 
        q: "Đơn vị của điện trở trong hệ SI là:", 
        options: [
            "Ôm (Ω)", 
            "Vôn (V)", 
            "Ampe (A)", 
            "Oát (W)"
        ], 
        a: 0, 
        expl: "Điện trở có đơn vị là ôm (Ω): $1 \\Omega = 1 V/A$." 
    },
    
    // Câu 14
    { 
        q: "Nguyên nhân chính gây ra điện trở của kim loại là:", 
        options: [
            "Sự va chạm của các electron với các ion dương ở nút mạng", 
            "Sự chuyển động nhiệt của các electron", 
            "Sự mất trật tự của mạng tinh thể", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Các electron va chạm với ion dương ở nút mạng, chuyển động nhiệt của electron và sự mất trật tự mạng tinh thể đều gây cản trở dòng điện, tạo ra điện trở." 
    },
    
    // Câu 15
    { 
        q: "Điện trở của một đoạn dây dẫn kim loại phụ thuộc vào:", 
        options: [
            "Chiều dài dây", 
            "Tiết diện dây", 
            "Bản chất vật liệu", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "$R = \\rho \\frac{l}{S}$, phụ thuộc vào điện trở suất $\\rho$ (bản chất vật liệu), chiều dài $l$, tiết diện $S$." 
    },
    
    // Câu 16
    { 
        q: "Định luật Ohm phát biểu rằng:", 
        options: [
            "Cường độ dòng điện qua điện trở tỉ lệ thuận với hiệu điện thế đặt vào hai đầu điện trở", 
            "Cường độ dòng điện tỉ lệ nghịch với điện trở", 
            "$I = \\frac{U}{R}$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Định luật Ohm: $I = \\frac{U}{R}$, cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở." 
    },
    
    // Câu 17
    { 
        q: "Đường đặc trưng vôn - ampe của vật dẫn kim loại ở nhiệt độ xác định có dạng:", 
        options: [
            "Đường thẳng đi qua gốc tọa độ", 
            "Đường cong", 
            "Đường thẳng song song với trục U", 
            "Đường thẳng song song với trục I"
        ], 
        a: 0, 
        expl: "Đường đặc trưng vôn - ampe của vật dẫn kim loại ở nhiệt độ xác định là đường thẳng đi qua gốc tọa độ." 
    },
    
    // Câu 18
    { 
        q: "Khi nhiệt độ tăng, điện trở của kim loại:", 
        options: [
            "Tăng", 
            "Giảm", 
            "Không đổi", 
            "Có thể tăng hoặc giảm"
        ], 
        a: 0, 
        expl: "Khi nhiệt độ tăng, các ion dao động mạnh hơn, cản trở electron nhiều hơn, điện trở tăng." 
    },
    
    // Câu 19
    { 
        q: "Điện trở nhiệt PTC (Positive Temperature Coefficient) có đặc điểm:", 
        options: [
            "Điện trở tăng khi nhiệt độ tăng", 
            "Điện trở giảm khi nhiệt độ tăng", 
            "Điện trở không đổi", 
            "Điện trở thay đổi không theo quy luật"
        ], 
        a: 0, 
        expl: "PTC là điện trở nhiệt hệ số dương, điện trở tăng khi nhiệt độ tăng." 
    },
    
    // Câu 20
    { 
        q: "Điện trở nhiệt NTC (Negative Temperature Coefficient) có đặc điểm:", 
        options: [
            "Điện trở tăng khi nhiệt độ tăng", 
            "Điện trở giảm khi nhiệt độ tăng", 
            "Điện trở không đổi", 
            "Điện trở thay đổi không theo quy luật"
        ], 
        a: 1, 
        expl: "NTC là điện trở nhiệt hệ số âm, điện trở giảm khi nhiệt độ tăng." 
    },

    // ========== BÀI 18: NGUỒN ĐIỆN (10 CÂU) ==========
    
    // Câu 21
    { 
        q: "Nguồn điện là thiết bị:", 
        options: [
            "Tạo ra và duy trì hiệu điện thế để duy trì dòng điện trong mạch", 
            "Cung cấp điện tích cho mạch", 
            "Tạo ra dòng điện", 
            "Biến đổi các dạng năng lượng thành điện năng"
        ], 
        a: 0, 
        expl: "Nguồn điện là thiết bị tạo ra và duy trì sự chênh lệch điện thế, nhằm duy trì dòng điện trong mạch kín." 
    },
    
    // Câu 22
    { 
        q: "Suất điện động của nguồn điện đặc trưng cho:", 
        options: [
            "Khả năng sinh công của nguồn điện", 
            "Khả năng tạo ra dòng điện lớn", 
            "Điện trở trong của nguồn", 
            "Hiệu điện thế giữa hai cực"
        ], 
        a: 0, 
        expl: "Suất điện động của nguồn điện là đại lượng vật lí đặc trưng cho khả năng sinh công của nguồn điện." 
    },
    
    // Câu 23
    { 
        q: "Công thức xác định suất điện động $\\mathcal{E}$ là:", 
        options: [
            "$\\mathcal{E} = \\frac{A}{q}$", 
            "$\\mathcal{E} = \\frac{q}{A}$", 
            "$\\mathcal{E} = A.q$", 
            "$\\mathcal{E} = \\frac{A^2}{q}$"
        ], 
        a: 0, 
        expl: "$\\mathcal{E} = \\frac{A}{q}$, với $A$ là công của lực lạ làm di chuyển điện tích $q$ từ cực âm đến cực dương bên trong nguồn điện." 
    },
    
    // Câu 24
    { 
        q: "Đơn vị của suất điện động là:", 
        options: [
            "Vôn (V)", 
            "Ampe (A)", 
            "Ôm (Ω)", 
            "Oát (W)"
        ], 
        a: 0, 
        expl: "Suất điện động có đơn vị là vôn (V), cùng đơn vị với hiệu điện thế." 
    },
    
    // Câu 25
    { 
        q: "Điện trở trong của nguồn điện là:", 
        options: [
            "Đại lượng đặc trưng cho sự cản trở dòng điện bên trong nguồn", 
            "Điện trở của dây dẫn nối với nguồn", 
            "Điện trở của mạch ngoài", 
            "Điện trở của các thiết bị tiêu thụ"
        ], 
        a: 0, 
        expl: "Điện trở trong của nguồn là đại lượng đặc trưng cho việc cản trở sự dịch chuyển của các điện tích bên trong nguồn điện, thường kí hiệu là $r$ (Ω)." 
    },
    
    // Câu 26
    { 
        q: "Khi nguồn điện không nối với mạch ngoài, hiệu điện thế giữa hai cực của nguồn:", 
        options: [
            "Bằng suất điện động của nguồn", 
            "Nhỏ hơn suất điện động", 
            "Lớn hơn suất điện động", 
            "Bằng 0"
        ], 
        a: 0, 
        expl: "Khi mạch hở, không có dòng điện, hiệu điện thế giữa hai cực bằng suất điện động của nguồn." 
    },
    
    // Câu 27
    { 
        q: "Hiệu điện thế giữa hai cực của nguồn điện khi phát dòng điện $I$ được xác định:", 
        options: [
            "$U = \\mathcal{E} - Ir$", 
            "$U = \\mathcal{E} + Ir$", 
            "$U = \\mathcal{E}$", 
            "$U = Ir$"
        ], 
        a: 0, 
        expl: "$U = \\mathcal{E} - Ir$, với $r$ là điện trở trong của nguồn." 
    },
    
    // Câu 28
    { 
        q: "Khi ghép nối tiếp $n$ nguồn điện giống nhau ($\\mathcal{E}$, $r$), suất điện động của bộ nguồn là:", 
        options: [
            "$\\mathcal{E}_b = n\\mathcal{E}$", 
            "$\\mathcal{E}_b = \\mathcal{E}$", 
            "$\\mathcal{E}_b = \\frac{\\mathcal{E}}{n}$", 
            "$\\mathcal{E}_b = n^2\\mathcal{E}$"
        ], 
        a: 0, 
        expl: "$\\mathcal{E}_b = \\mathcal{E}_1 + \\mathcal{E}_2 + ... + \\mathcal{E}_n = n\\mathcal{E}$." 
    },
    
    // Câu 29
    { 
        q: "Khi ghép nối tiếp $n$ nguồn điện giống nhau ($\\mathcal{E}$, $r$), điện trở trong của bộ nguồn là:", 
        options: [
            "$r_b = nr$", 
            "$r_b = \\frac{r}{n}$", 
            "$r_b = r$", 
            "$r_b = n^2r$"
        ], 
        a: 0, 
        expl: "$r_b = r_1 + r_2 + ... + r_n = nr$." 
    },
    
    // Câu 30
    { 
        q: "Một pin có suất điện động 1,5 V, điện trở trong 0,5 Ω. Khi nối pin với điện trở ngoài 2,5 Ω, hiệu điện thế giữa hai cực pin là:", 
        options: [
            "1,25 V", 
            "1,5 V", 
            "1,75 V", 
            "2,0 V"
        ], 
        a: 0, 
        expl: "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{1,5}{2,5 + 0,5} = \\frac{1,5}{3} = 0,5$ A. $U = IR = 0,5 \\times 2,5 = 1,25$ V." 
    },

    // ========== BÀI 19: NĂNG LƯỢNG ĐIỆN - CÔNG SUẤT ĐIỆN (10 CÂU) ==========
    
    // Câu 31
    { 
        q: "Năng lượng tiêu thụ của một đoạn mạch được xác định bởi công thức:", 
        options: [
            "$A = UIt$", 
            "$A = \\frac{U^2}{R}t$", 
            "$A = I^2Rt$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "$A = UIt = I^2Rt = \\frac{U^2}{R}t$." 
    },
    
    // Câu 32
    { 
        q: "Công suất tiêu thụ điện của một đoạn mạch được xác định bởi:", 
        options: [
            "$\\mathcal{P} = UI$", 
            "$\\mathcal{P} = \\frac{A}{t}$", 
            "$\\mathcal{P} = I^2R$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Công suất $\\mathcal{P} = \\frac{A}{t} = UI = I^2R = \\frac{U^2}{R}$." 
    },
    
    // Câu 33
    { 
        q: "Đơn vị của công suất trong hệ SI là:", 
        options: [
            "Oát (W)", 
            "Jun (J)", 
            "Vôn (V)", 
            "Ampe (A)"
        ], 
        a: 0, 
        expl: "Công suất có đơn vị là oát (W)." 
    },
    
    // Câu 34
    { 
        q: "Nhiệt lượng tỏa ra trên điện trở $R$ khi có dòng điện $I$ chạy qua trong thời gian $t$ được tính bằng:", 
        options: [
            "$Q = I^2Rt$", 
            "$Q = UIt$", 
            "$Q = \\frac{U^2}{R}t$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Theo định luật Joule - Lenz: $Q = I^2Rt = UIt = \\frac{U^2}{R}t$." 
    },
    
    // Câu 35
    { 
        q: "Định luật Joule - Lenz phát biểu rằng:", 
        options: [
            "Nhiệt lượng tỏa ra trên điện trở tỉ lệ thuận với bình phương cường độ dòng điện, điện trở và thời gian dòng điện chạy qua", 
            "Nhiệt lượng tỏa ra trên điện trở tỉ lệ thuận với hiệu điện thế và thời gian", 
            "Nhiệt lượng tỏa ra trên điện trở tỉ lệ nghịch với điện trở", 
            "Cả A và B"
        ], 
        a: 3, 
        expl: "Định luật Joule - Lenz: $Q = I^2Rt = UIt$, cả hai dạng đều đúng." 
    },
    
    // Câu 36
    { 
        q: "Công suất tỏa nhiệt trên điện trở $R$ được xác định:", 
        options: [
            "$\\mathcal{P} = I^2R$", 
            "$\\mathcal{P} = \\frac{U^2}{R}$", 
            "$\\mathcal{P} = UI$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "$\\mathcal{P} = UI = I^2R = \\frac{U^2}{R}$." 
    },
    
    // Câu 37
    { 
        q: "Năng lượng toàn phần của nguồn điện khi phát dòng điện $I$ trong thời gian $t$ là:", 
        options: [
            "$A_0 = \\mathcal{E}It$", 
            "$A_0 = UIt$", 
            "$A_0 = I^2rt$", 
            "$A_0 = \\frac{U^2}{R}t$"
        ], 
        a: 0, 
        expl: "$A_0 = \\mathcal{E}It$, đây là công của lực lạ thực hiện, cũng là năng lượng toàn phần do nguồn cung cấp." 
    },
    
    // Câu 38
    { 
        q: "Công suất toàn phần của nguồn điện là:", 
        options: [
            "$\\mathcal{P}_0 = \\mathcal{E}I$", 
            "$\\mathcal{P}_0 = UI$", 
            "$\\mathcal{P}_0 = I^2r$", 
            "$\\mathcal{P}_0 = \\frac{\\mathcal{E}^2}{R}$"
        ], 
        a: 0, 
        expl: "$\\mathcal{P}_0 = \\mathcal{E}I$." 
    },
    
    // Câu 39
    { 
        q: "Hiệu suất của nguồn điện được xác định bởi:", 
        options: [
            "$H = \\frac{U}{\\mathcal{E}}$", 
            "$H = \\frac{\\mathcal{E}}{U}$", 
            "$H = \\frac{\\mathcal{P}}{\\mathcal{P}_0}$", 
            "Cả A và C"
        ], 
        a: 3, 
        expl: "Hiệu suất $H = \\frac{\\mathcal{P}}{\\mathcal{P}_0} = \\frac{U}{\\mathcal{E}}$. Thường tính bằng phần trăm: $H = \\frac{U}{\\mathcal{E}} \\times 100\\%$." 
    },
    
    // Câu 40
    { 
        q: "Một bóng đèn có ghi 220V - 100W. Điện trở của đèn khi hoạt động bình thường là:", 
        options: [
            "484 Ω", 
            "242 Ω", 
            "220 Ω", 
            "100 Ω"
        ], 
        a: 0, 
        expl: "$R = \\frac{U^2}{\\mathcal{P}} = \\frac{220^2}{100} = \\frac{48400}{100} = 484$ Ω." 
    },

    // ========== BÀI 20: THỰC HÀNH XÁC ĐỊNH SUẤT ĐIỆN ĐỘNG VÀ ĐIỆN TRỞ TRONG CỦA PIN (10 CÂU) ==========
    
    // Câu 41
    { 
        q: "Để đo suất điện động của pin, ta có thể dùng vôn kế mắc như thế nào?", 
        options: [
            "Mắc trực tiếp vào hai cực của pin khi mạch ngoài hở", 
            "Mắc nối tiếp với pin", 
            "Mắc song song với điện trở ngoài", 
            "Mắc nối tiếp với điện trở ngoài"
        ], 
        a: 0, 
        expl: "Khi mạch hở, hiệu điện thế giữa hai cực của nguồn bằng suất điện động. Nếu vôn kế có điện trở rất lớn (cỡ MΩ) thì số chỉ gần đúng bằng $\\mathcal{E}$." 
    },
    
    // Câu 42
    { 
        q: "Trong thí nghiệm đo suất điện động và điện trở trong của pin, cần đo các đại lượng:", 
        options: [
            "Cường độ dòng điện $I$ và hiệu điện thế $U$ giữa hai đầu biến trở", 
            "Điện trở $R$", 
            "Công suất", 
            "Nhiệt lượng"
        ], 
        a: 0, 
        expl: "Cần đo các cặp giá trị $(I, U)$ ứng với các giá trị khác nhau của biến trở để vẽ đồ thị $U(I)$." 
    },
    
    // Câu 43
    { 
        q: "Đồ thị $U$ theo $I$ trong thí nghiệm xác định suất điện động và điện trở trong có dạng:", 
        options: [
            "Đường thẳng", 
            "Đường cong", 
            "Đường tròn", 
            "Parabol"
        ], 
        a: 0, 
        expl: "$U = \\mathcal{E} - Ir$, đồ thị $U(I)$ là đường thẳng có hệ số góc là $-r$." 
    },
    
    // Câu 44
    { 
        q: "Từ đồ thị $U(I)$, suất điện động $\\mathcal{E}$ được xác định là:", 
        options: [
            "Giao điểm của đường thẳng với trục tung (khi $I = 0$)", 
            "Giao điểm với trục hoành", 
            "Độ dốc của đường thẳng", 
            "Diện tích dưới đồ thị"
        ], 
        a: 0, 
        expl: "Khi $I = 0$, $U = \\mathcal{E}$. Do đó, giao điểm của đường thẳng với trục tung cho giá trị $\\mathcal{E}$." 
    },
    
    // Câu 45
    { 
        q: "Từ đồ thị $U(I)$, điện trở trong $r$ được xác định là:", 
        options: [
            "Độ dốc của đường thẳng (lấy giá trị tuyệt đối)", 
            "Giao điểm với trục tung", 
            "Giao điểm với trục hoành", 
            "Diện tích dưới đồ thị"
        ], 
        a: 0, 
        expl: "$U = \\mathcal{E} - Ir$, độ dốc của đường thẳng là $-r$, do đó $r$ bằng giá trị tuyệt đối của độ dốc." 
    },
    
    // Câu 46
    { 
        q: "Trong thí nghiệm đo suất điện động và điện trở trong, cần lấy ít nhất bao nhiêu cặp số liệu $(I, U)$?", 
        options: [
            "5 cặp", 
            "2 cặp", 
            "3 cặp", 
            "10 cặp"
        ], 
        a: 0, 
        expl: "Cần lấy ít nhất 5 cặp số liệu để giảm sai số trong quá trình xử lí số liệu." 
    },
    
    // Câu 47
    { 
        q: "Vai trò của biến trở trong thí nghiệm là:", 
        options: [
            "Thay đổi cường độ dòng điện trong mạch", 
            "Bảo vệ mạch điện", 
            "Đo cường độ dòng điện", 
            "Đo hiệu điện thế"
        ], 
        a: 0, 
        expl: "Biến trở dùng để thay đổi cường độ dòng điện, từ đó thu được các cặp giá trị $(I, U)$ khác nhau." 
    },
    
    // Câu 48
    { 
        q: "Khi đo suất điện động bằng vôn kế mắc trực tiếp vào hai cực pin, số chỉ vôn kế:", 
        options: [
            "Gần đúng bằng suất điện động nếu vôn kế có điện trở rất lớn", 
            "Chính xác bằng suất điện động", 
            "Nhỏ hơn suất điện động", 
            "Lớn hơn suất điện động"
        ], 
        a: 0, 
        expl: "Nếu vôn kế có điện trở rất lớn (cỡ MΩ), dòng điện qua vôn kế rất nhỏ, số chỉ gần đúng bằng $\\mathcal{E}$." 
    },
    
    // Câu 49
    { 
        q: "Nguyên nhân gây sai số trong thí nghiệm có thể là:", 
        options: [
            "Dụng cụ đo có sai số", 
            "Đọc kết quả không chính xác", 
            "Pin cũ có điện trở trong thay đổi", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Có nhiều nguyên nhân gây sai số như dụng cụ đo (sai số của đồng hồ), cách đọc kết quả, pin cũ có điện trở trong thay đổi." 
    },
    
    // Câu 50
    { 
        q: "Khi pin đã qua sử dụng, điện trở trong của pin thường:", 
        options: [
            "Tăng lên", 
            "Giảm xuống", 
            "Không đổi", 
            "Bằng 0"
        ], 
        a: 0, 
        expl: "Pin cũ có điện trở trong lớn hơn pin mới do các phản ứng hóa học làm suy giảm chất lượng, các chất điện phân bị cạn kiệt." 
    }
];