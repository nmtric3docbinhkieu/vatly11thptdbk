// ==============================================
// FILE: database-chapter2.js
// ==============================================
// Ngân hàng câu hỏi chương 2: Sóng cơ (50 câu)
// Theo sách giáo khoa Vật lí 11 - Chân trời sáng tạo

window.questionsChapter2 = [
    // ========== BÀI 5: SÓNG VÀ SỰ TRUYỀN SÓNG (15 CÂU) ==========
    
    // Câu 1
    { 
        q: "Sóng cơ là:", 
        options: [
            "Dao động lan truyền trong môi trường vật chất", 
            "Chuyển động của các phần tử vật chất", 
            "Sự truyền năng lượng", 
            "Cả A và C"
        ], 
        a: 3, 
        expl: "Sóng cơ là dao động lan truyền trong môi trường vật chất. Khi sóng truyền đi, phần tử môi trường không truyền theo phương truyền sóng mà chỉ dao động tại chỗ. Quá trình truyền sóng là quá trình truyền năng lượng." 
    },
    
    // Câu 2
    { 
        q: "Khi sóng truyền đi, các phần tử môi trường:", 
        options: [
            "Truyền theo phương truyền sóng", 
            "Dao động tại chỗ", 
            "Đứng yên", 
            "Chuyển động thẳng đều"
        ], 
        a: 1, 
        expl: "Khi sóng truyền đi, phần tử môi trường không truyền theo phương truyền sóng mà chỉ dao động tại chỗ." 
    },
    
    // Câu 3
    { 
        q: "Sóng dọc là sóng có phương dao động của các phần tử:", 
        options: [
            "Vuông góc với phương truyền sóng", 
            "Trùng với phương truyền sóng", 
            "Tạo góc 45° với phương truyền sóng", 
            "Bất kỳ"
        ], 
        a: 1, 
        expl: "Sóng dọc là sóng mà phương dao động của mỗi phần tử môi trường trùng với phương truyền sóng." 
    },
    
    // Câu 4
    { 
        q: "Sóng ngang là sóng có phương dao động của các phần tử:", 
        options: [
            "Trùng với phương truyền sóng", 
            "Vuông góc với phương truyền sóng", 
            "Tạo góc 30° với phương truyền sóng", 
            "Song song với phương truyền sóng"
        ], 
        a: 1, 
        expl: "Sóng ngang là sóng mà phương dao động của mỗi phần tử môi trường vuông góc với phương truyền sóng." 
    },
    
    // Câu 5
    { 
        q: "Ví dụ nào sau đây là sóng dọc?", 
        options: [
            "Sóng âm trong không khí", 
            "Sóng trên mặt nước", 
            "Sóng trên dây đàn hồi", 
            "Sóng ánh sáng"
        ], 
        a: 0, 
        expl: "Sóng âm trong không khí là sóng dọc, các phần tử không khí dao động theo phương truyền sóng." 
    },
    
    // Câu 6
    { 
        q: "Ví dụ nào sau đây là sóng ngang?", 
        options: [
            "Sóng âm trong không khí", 
            "Sóng trên mặt nước", 
            "Sóng trên lò xo khi nén dãn", 
            "Sóng trong chất lỏng"
        ], 
        a: 1, 
        expl: "Sóng trên mặt nước là sóng ngang, các phần tử nước dao động thẳng đứng, vuông góc với phương truyền sóng ngang." 
    },
    
    // Câu 7
    { 
        q: "Hiện tượng phản xạ sóng là:", 
        options: [
            "Sóng đổi phương truyền khi gặp vật cản", 
            "Sóng đi qua vật cản", 
            "Sóng bị uốn cong khi qua khe hẹp", 
            "Sóng truyền từ môi trường này sang môi trường khác"
        ], 
        a: 0, 
        expl: "Khi sóng truyền đến mặt phân cách với môi trường khác, một phần của sóng tới được truyền ngược lại vào môi trường ban đầu. Đây là hiện tượng phản xạ sóng." 
    },
    
    // Câu 8
    { 
        q: "Hiện tượng khúc xạ sóng là:", 
        options: [
            "Sóng đổi phương truyền khi đi từ môi trường này sang môi trường khác", 
            "Sóng bị phản xạ khi gặp vật cản", 
            "Sóng bị uốn cong khi qua khe hẹp", 
            "Sóng truyền thẳng trong môi trường đồng nhất"
        ], 
        a: 0, 
        expl: "Hiện tượng sóng đổi phương truyền khi đi từ một môi trường này sang một môi trường khác được gọi là hiện tượng khúc xạ." 
    },
    
    // Câu 9
    { 
        q: "Hiện tượng nhiễu xạ sóng là:", 
        options: [
            "Sóng đổi phương truyền khi đi qua khe hẹp hoặc vật cản", 
            "Sóng bị phản xạ", 
            "Sóng bị khúc xạ", 
            "Sóng giao thoa với nhau"
        ], 
        a: 0, 
        expl: "Nhiễu xạ là hiện tượng sóng thay đổi phương truyền và lan rộng khi đi qua khe hẹp hoặc gặp vật cản." 
    },
    
    // Câu 10
    { 
        q: "Đặc trưng của sóng là:", 
        options: [
            "Phản xạ", 
            "Khúc xạ", 
            "Nhiễu xạ", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Một số hiện tượng đặc trưng cho sóng là phản xạ, khúc xạ, nhiễu xạ." 
    },
    
    // Câu 11
    { 
        q: "Sóng điện từ khác sóng cơ ở điểm:", 
        options: [
            "Có thể truyền trong chân không", 
            "Là sóng ngang", 
            "Mang năng lượng", 
            "Có hiện tượng phản xạ, khúc xạ"
        ], 
        a: 0, 
        expl: "Sóng điện từ có thể lan truyền trong chân không, trong khi sóng cơ cần môi trường vật chất." 
    },
    
    // Câu 12
    { 
        q: "Ánh sáng có bản chất là:", 
        options: [
            "Sóng cơ", 
            "Sóng điện từ", 
            "Hạt vật chất", 
            "Sóng dọc"
        ], 
        a: 1, 
        expl: "Ánh sáng có bản chất là sóng điện từ." 
    },
    
    // Câu 13
    { 
        q: "Khi sóng âm truyền từ không khí vào nước, đại lượng nào thay đổi?", 
        options: [
            "Tần số", 
            "Chu kỳ", 
            "Tốc độ truyền sóng", 
            "Pha dao động"
        ], 
        a: 2, 
        expl: "Tốc độ truyền sóng phụ thuộc vào môi trường, khi đổi môi trường tốc độ thay đổi. Tần số và chu kỳ không đổi." 
    },
    
    // Câu 14
    { 
        q: "Trong hiện tượng phản xạ sóng, sóng phản xạ có:", 
        options: [
            "Cùng tần số với sóng tới", 
            "Cùng bước sóng với sóng tới", 
            "Có thể cùng pha hoặc ngược pha với sóng tới tùy theo điều kiện biên", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Sóng phản xạ có cùng tần số, bước sóng với sóng tới. Tại điểm phản xạ, nếu đầu cố định thì sóng phản xạ ngược pha, nếu đầu tự do thì cùng pha." 
    },
    
    // Câu 15
    { 
        q: "Để quan sát hiện tượng nhiễu xạ ánh sáng, kích thước của lỗ tròn cần:", 
        options: [
            "Rất lớn", 
            "Cỡ khoảng một phần mười milimét", 
            "Bất kỳ", 
            "Nhỏ hơn bước sóng ánh sáng"
        ], 
        a: 1, 
        expl: "Khi lỗ tròn có đường kính cỡ khoảng một phần mười milimét, ta quan sát được hiện tượng nhiễu xạ ánh sáng." 
    },

    // ========== BÀI 6: CÁC ĐẶC TRƯNG VẬT LÍ CỦA SÓNG (15 CÂU) ==========
    
    // Câu 16
    { 
        q: "Chu kỳ sóng là:", 
        options: [
            "Chu kỳ dao động của nguồn sóng", 
            "Thời gian để sóng truyền đi một bước sóng", 
            "Số dao động trong một giây", 
            "Khoảng cách giữa hai đỉnh sóng liên tiếp"
        ], 
        a: 0, 
        expl: "Chu kì và tần số của sóng lần lượt là chu kì và tần số của nguồn sóng." 
    },
    
    // Câu 17
    { 
        q: "Tần số sóng là:", 
        options: [
            "Tần số dao động của nguồn sóng", 
            "Số bước sóng trong một giây", 
            "Số dao động trong một đơn vị thời gian", 
            "Cả A và C"
        ], 
        a: 3, 
        expl: "Tần số sóng là tần số dao động của nguồn, cũng là số dao động trong một giây." 
    },
    
    // Câu 18
    { 
        q: "Biên độ sóng tại một điểm là:", 
        options: [
            "Biên độ dao động của phần tử môi trường tại điểm đó", 
            "Khoảng cách từ điểm đó đến nguồn", 
            "Tốc độ dao động của phần tử", 
            "Năng lượng sóng tại điểm đó"
        ], 
        a: 0, 
        expl: "Biên độ sóng tại một điểm là biên độ dao động của phần tử môi trường tại điểm đó." 
    },
    
    // Câu 19
    { 
        q: "Bước sóng là:", 
        options: [
            "Quãng đường sóng truyền đi trong một chu kỳ", 
            "Khoảng cách giữa hai điểm gần nhau nhất dao động cùng pha", 
            "Khoảng cách giữa hai đỉnh sóng liên tiếp", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Bước sóng $\\lambda$ là quãng đường sóng truyền đi trong một chu kỳ, cũng là khoảng cách giữa hai điểm gần nhau nhất dao động cùng pha, hay giữa hai đỉnh sóng liên tiếp." 
    },
    
    // Câu 20
    { 
        q: "Công thức liên hệ giữa bước sóng $\\lambda$, tốc độ truyền sóng $v$ và chu kỳ $T$ là:", 
        options: [
            "$\\lambda = vT$", 
            "$\\lambda = \\frac{v}{T}$", 
            "$\\lambda = \\frac{T}{v}$", 
            "$\\lambda = vf$"
        ], 
        a: 0, 
        expl: "Bước sóng $\\lambda = vT$, với $v$ là tốc độ truyền sóng, $T$ là chu kỳ." 
    },
    
    // Câu 21
    { 
        q: "Công thức liên hệ giữa bước sóng $\\lambda$, tốc độ truyền sóng $v$ và tần số $f$ là:", 
        options: [
            "$\\lambda = vf$", 
            "$\\lambda = \\frac{v}{f}$", 
            "$\\lambda = \\frac{f}{v}$", 
            "$\\lambda = v^2f$"
        ], 
        a: 1, 
        expl: "$\\lambda = \\frac{v}{f}$, vì $f = \\frac{1}{T}$." 
    },
    
    // Câu 22
    { 
        q: "Tốc độ truyền sóng phụ thuộc vào:", 
        options: [
            "Tần số sóng", 
            "Biên độ sóng", 
            "Bản chất môi trường", 
            "Năng lượng sóng"
        ], 
        a: 2, 
        expl: "Tốc độ truyền sóng phụ thuộc vào tính chất của môi trường như mật độ, tính đàn hồi, nhiệt độ, áp suất." 
    },
    
    // Câu 23
    { 
        q: "Sóng âm có tần số dưới 16 Hz được gọi là:", 
        options: [
            "Sóng hạ âm", 
            "Sóng siêu âm", 
            "Âm thanh nghe được", 
            "Sóng âm tần"
        ], 
        a: 0, 
        expl: "Sóng hạ âm có tần số nhỏ hơn 16 Hz." 
    },
    
    // Câu 24
    { 
        q: "Sóng âm có tần số trên 20.000 Hz được gọi là:", 
        options: [
            "Sóng hạ âm", 
            "Sóng siêu âm", 
            "Âm thanh nghe được", 
            "Sóng vô tuyến"
        ], 
        a: 1, 
        expl: "Sóng siêu âm có tần số lớn hơn 20.000 Hz." 
    },
    
    // Câu 25
    { 
        q: "Tai người có thể nghe được âm có tần số trong khoảng:", 
        options: [
            "16 Hz - 20.000 Hz", 
            "Dưới 16 Hz", 
            "Trên 20.000 Hz", 
            "20 Hz - 20.000 Hz"
        ], 
        a: 0, 
        expl: "Sóng âm nghe được có tần số từ 16 Hz đến 20.000 Hz." 
    },
    
    // Câu 26
    { 
        q: "Cường độ sóng $I$ được định nghĩa là:", 
        options: [
            "Năng lượng sóng truyền qua một đơn vị diện tích trong một đơn vị thời gian", 
            "Năng lượng sóng", 
            "Công suất sóng", 
            "Biên độ sóng"
        ], 
        a: 0, 
        expl: "Cường độ sóng $I$ là năng lượng sóng truyền qua một đơn vị diện tích trong một đơn vị thời gian, đơn vị W/m²: $I = \\frac{E}{S\\Delta t} = \\frac{\\mathcal{P}}{S}$." 
    },
    
    // Câu 27
    { 
        q: "Đơn vị của cường độ sóng là:", 
        options: [
            "W", 
            "W/m²", 
            "J", 
            "J/m²"
        ], 
        a: 1, 
        expl: "Cường độ sóng có đơn vị là W/m²." 
    },
    
    // Câu 28
    { 
        q: "Trên cùng phương truyền sóng, hai điểm dao động cùng pha cách nhau:", 
        options: [
            "$k\\lambda$ ($k$ nguyên)", 
            "$(k + \\frac{1}{2})\\lambda$", 
            "$\\frac{k\\lambda}{2}$", 
            "$(k + \\frac{1}{4})\\lambda$"
        ], 
        a: 0, 
        expl: "Các điểm dao động cùng pha cách nhau $k\\lambda$ ($k = 0, \\pm 1, \\pm 2,...$)." 
    },
    
    // Câu 29
    { 
        q: "Trên cùng phương truyền sóng, hai điểm dao động ngược pha cách nhau:", 
        options: [
            "$k\\lambda$", 
            "$(k + \\frac{1}{2})\\lambda$", 
            "$\\frac{k\\lambda}{2}$", 
            "$(k + \\frac{1}{4})\\lambda$"
        ], 
        a: 1, 
        expl: "Các điểm dao động ngược pha cách nhau $(k + \\frac{1}{2})\\lambda$." 
    },
    
    // Câu 30
    { 
        q: "Mức cường độ âm $L$ được tính theo công thức:", 
        options: [
            "$L = 10 \\lg\\left(\\frac{I}{I_0}\\right)$ (dB)", 
            "$L = \\lg\\left(\\frac{I}{I_0}\\right)$ (dB)", 
            "$L = 10 \\ln\\left(\\frac{I}{I_0}\\right)$ (dB)", 
            "$L = \\frac{I}{I_0}$ (dB)"
        ], 
        a: 0, 
        expl: "Mức cường độ âm $L = 10 \\lg\\left(\\frac{I}{I_0}\\right)$ (dB), với $I_0 = 10^{-12}$ W/m² là cường độ âm chuẩn." 
    },

    // ========== BÀI 7: SÓNG ĐIỆN TỪ (5 CÂU) ==========
    
    // Câu 31
    { 
        q: "Sóng điện từ là:", 
        options: [
            "Sự lan truyền trong không gian của điện từ trường biến thiên", 
            "Sóng cơ học", 
            "Dao động của các phần tử vật chất", 
            "Sóng dọc"
        ], 
        a: 0, 
        expl: "Sóng điện từ là sự lan truyền trong không gian của điện từ trường biến thiên." 
    },
    
    // Câu 32
    { 
        q: "Sóng điện từ có bản chất là:", 
        options: [
            "Sóng ngang", 
            "Sóng dọc", 
            "Vừa ngang vừa dọc", 
            "Không xác định"
        ], 
        a: 0, 
        expl: "Sóng điện từ là sóng ngang, các vectơ điện trường và từ trường vuông góc với nhau và vuông góc với phương truyền." 
    },
    
    // Câu 33
    { 
        q: "Tốc độ truyền sóng điện từ trong chân không là:", 
        options: [
            "$3.10^8$ m/s", 
            "$340$ m/s", 
            "$3.10^5$ m/s", 
            "$3.10^3$ m/s"
        ], 
        a: 0, 
        expl: "Tốc độ truyền sóng điện từ trong chân không là $c = 3.10^8$ m/s." 
    },
    
    // Câu 34
    { 
        q: "Chiết suất $n$ của một môi trường được xác định bởi:", 
        options: [
            "$n = \\frac{c}{v}$", 
            "$n = \\frac{v}{c}$", 
            "$n = \\frac{\\lambda}{\\lambda_0}$", 
            "$n = \\frac{f}{f_0}$"
        ], 
        a: 0, 
        expl: "Chiết suất $n = \\frac{c}{v}$, với $c$ là tốc độ ánh sáng trong chân không, $v$ là tốc độ trong môi trường." 
    },
    
    // Câu 35
    { 
        q: "Thứ tự các sóng điện từ có bước sóng từ nhỏ đến lớn là:", 
        options: [
            "Tia γ, tia X, tia tử ngoại, ánh sáng nhìn thấy, tia hồng ngoại, sóng vô tuyến", 
            "Sóng vô tuyến, tia hồng ngoại, ánh sáng nhìn thấy, tia tử ngoại, tia X, tia γ", 
            "Tia X, tia γ, tia tử ngoại, ánh sáng nhìn thấy, tia hồng ngoại, sóng vô tuyến", 
            "Ánh sáng nhìn thấy, tia hồng ngoại, tia tử ngoại, tia X, tia γ, sóng vô tuyến"
        ], 
        a: 0, 
        expl: "Thang sóng điện từ: tia γ (bước sóng ngắn nhất), tia X, tia tử ngoại, ánh sáng nhìn thấy, tia hồng ngoại, sóng vô tuyến (bước sóng dài nhất)." 
    },

    // ========== BÀI 8: GIAO THOA SÓNG (10 CÂU) ==========
    
    // Câu 36
    { 
        q: "Hiện tượng giao thoa sóng là:", 
        options: [
            "Hiện tượng hai sóng kết hợp gặp nhau, tăng cường hoặc làm suy yếu nhau tại một số vị trí", 
            "Hiện tượng sóng đổi phương truyền khi gặp vật cản", 
            "Hiện tượng sóng bị uốn cong khi qua khe hẹp", 
            "Hiện tượng sóng đổi phương khi qua mặt phân cách"
        ], 
        a: 0, 
        expl: "Hiện tượng giao thoa sóng là hiện tượng hai sóng kết hợp gặp nhau, tăng cường nhau hoặc làm suy yếu nhau tại một số vị trí trong môi trường." 
    },
    
    // Câu 37
    { 
        q: "Điều kiện để có giao thoa sóng là hai nguồn sóng phải:", 
        options: [
            "Dao động cùng phương, cùng tần số, độ lệch pha không đổi", 
            "Dao động cùng biên độ", 
            "Dao động cùng pha", 
            "Dao động ngược pha"
        ], 
        a: 0, 
        expl: "Hai nguồn kết hợp là hai nguồn dao động cùng phương, cùng tần số và có độ lệch pha không đổi theo thời gian." 
    },
    
    // Câu 38
    { 
        q: "Trong giao thoa sóng, những điểm dao động với biên độ cực đại khi hiệu đường đi từ hai nguồn đến điểm đó bằng:", 
        options: [
            "$k\\lambda$ ($k$ nguyên)", 
            "$(k + \\frac{1}{2})\\lambda$", 
            "$(2k + 1)\\frac{\\lambda}{2}$", 
            "$\\frac{k\\lambda}{2}$"
        ], 
        a: 0, 
        expl: "Những điểm có biên độ cực đại khi $d_2 - d_1 = k\\lambda$ ($k = 0, \\pm 1, \\pm 2,...$)." 
    },
    
    // Câu 39
    { 
        q: "Trong giao thoa sóng, những điểm dao động với biên độ cực tiểu khi hiệu đường đi từ hai nguồn đến điểm đó bằng:", 
        options: [
            "$k\\lambda$", 
            "$(k + \\frac{1}{2})\\lambda$", 
            "$\\frac{k\\lambda}{2}$", 
            "$(2k + 1)\\lambda$"
        ], 
        a: 1, 
        expl: "Những điểm có biên độ cực tiểu khi $d_2 - d_1 = (k + \\frac{1}{2})\\lambda$ ($k = 0, \\pm 1, \\pm 2,...$)." 
    },
    
    // Câu 40
    { 
        q: "Trong thí nghiệm giao thoa ánh sáng Young, khoảng vân $i$ được xác định bởi công thức:", 
        options: [
            "$i = \\frac{\\lambda D}{a}$", 
            "$i = \\frac{\\lambda a}{D}$", 
            "$i = \\frac{a D}{\\lambda}$", 
            "$i = \\frac{\\lambda}{a D}$"
        ], 
        a: 0, 
        expl: "Khoảng vân $i = \\frac{\\lambda D}{a}$, với $\\lambda$ là bước sóng, $a$ là khoảng cách hai khe, $D$ là khoảng cách từ hai khe đến màn." 
    },
    
    // Câu 41
    { 
        q: "Vị trí vân sáng trên màn trong thí nghiệm Young được xác định:", 
        options: [
            "$x_s = k\\frac{\\lambda D}{a}$ ($k$ nguyên)", 
            "$x_s = (k + \\frac{1}{2})\\frac{\\lambda D}{a}$", 
            "$x_s = k\\frac{\\lambda a}{D}$", 
            "$x_s = (k + \\frac{1}{2})\\frac{\\lambda a}{D}$"
        ], 
        a: 0, 
        expl: "Vân sáng tại vị trí $x_s = k\\frac{\\lambda D}{a}$ với $k = 0, \\pm 1, \\pm 2,...$." 
    },
    
    // Câu 42
    { 
        q: "Vị trí vân tối trên màn trong thí nghiệm Young được xác định:", 
        options: [
            "$x_t = k\\frac{\\lambda D}{a}$", 
            "$x_t = (k + \\frac{1}{2})\\frac{\\lambda D}{a}$", 
            "$x_t = k\\frac{\\lambda a}{D}$", 
            "$x_t = (k + \\frac{1}{2})\\frac{\\lambda a}{D}$"
        ], 
        a: 1, 
        expl: "Vân tối tại vị trí $x_t = (k + \\frac{1}{2})\\frac{\\lambda D}{a}$." 
    },
    
    // Câu 43
    { 
        q: "Khoảng cách giữa hai vân sáng liên tiếp bằng:", 
        options: [
            "$i$", 
            "$2i$", 
            "$\\frac{i}{2}$", 
            "$\\frac{\\lambda D}{2a}$"
        ], 
        a: 0, 
        expl: "Khoảng cách giữa hai vân sáng liên tiếp là khoảng vân $i$." 
    },
    
    // Câu 44
    { 
        q: "Trong thí nghiệm Young, nếu tăng khoảng cách từ hai khe đến màn thì khoảng vân:", 
        options: [
            "Tăng", 
            "Giảm", 
            "Không đổi", 
            "Có thể tăng hoặc giảm"
        ], 
        a: 0, 
        expl: "$i = \\frac{\\lambda D}{a}$, $D$ tăng thì $i$ tăng." 
    },
    
    // Câu 45
    { 
        q: "Trong thí nghiệm Young, nếu tăng khoảng cách giữa hai khe thì khoảng vân:", 
        options: [
            "Tăng", 
            "Giảm", 
            "Không đổi", 
            "Có thể tăng hoặc giảm"
        ], 
        a: 1, 
        expl: "$i = \\frac{\\lambda D}{a}$, $a$ tăng thì $i$ giảm." 
    },

    // ========== BÀI 9: SÓNG DỪNG (5 CÂU) ==========
    
    // Câu 46
    { 
        q: "Sóng dừng là sóng có:", 
        options: [
            "Các nút và bụng cố định trong không gian", 
            "Biên độ không đổi", 
            "Tần số thay đổi", 
            "Năng lượng không đổi"
        ], 
        a: 0, 
        expl: "Sóng dừng là sóng có các nút sóng và bụng sóng cố định trong không gian." 
    },
    
    // Câu 47
    { 
        q: "Trong sóng dừng, khoảng cách giữa hai nút sóng liên tiếp là:", 
        options: [
            "$\\frac{\\lambda}{2}$", 
            "$\\lambda$", 
            "$\\frac{\\lambda}{4}$", 
            "$2\\lambda$"
        ], 
        a: 0, 
        expl: "Hai nút sóng liên tiếp cách nhau $\\frac{\\lambda}{2}$." 
    },
    
    // Câu 48
    { 
        q: "Trong sóng dừng, khoảng cách giữa hai bụng sóng liên tiếp là:", 
        options: [
            "$\\frac{\\lambda}{2}$", 
            "$\\lambda$", 
            "$\\frac{\\lambda}{4}$", 
            "$2\\lambda$"
        ], 
        a: 0, 
        expl: "Hai bụng sóng liên tiếp cách nhau $\\frac{\\lambda}{2}$." 
    },
    
    // Câu 49
    { 
        q: "Điều kiện để có sóng dừng trên sợi dây có hai đầu cố định là chiều dài dây:", 
        options: [
            "$l = n\\frac{\\lambda}{2}$ ($n = 1,2,3...$)", 
            "$l = n\\lambda$ ($n = 1,2,3...$)", 
            "$l = (2n + 1)\\frac{\\lambda}{4}$", 
            "$l = (2n + 1)\\frac{\\lambda}{2}$"
        ], 
        a: 0, 
        expl: "$l = n\\frac{\\lambda}{2} = n\\frac{v}{2f}$ với $n = 1,2,3,...$." 
    },
    
    // Câu 50
    { 
        q: "Tại điểm phản xạ cố định, sóng phản xạ:", 
        options: [
            "Ngược pha với sóng tới", 
            "Cùng pha với sóng tới", 
            "Vuông pha với sóng tới", 
            "Lệch pha $\\frac{\\pi}{4}$"
        ], 
        a: 0, 
        expl: "Với đầu dây cố định, tại điểm phản xạ, sóng phản xạ ngược pha với sóng tới." 
    }
];