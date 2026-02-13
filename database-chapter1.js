// ==============================================
// FILE: database-chapter1.js
// ==============================================
// Ngân hàng câu hỏi chương 1: Dao động cơ (50 câu)
// Theo sách giáo khoa Vật lí 11 - Chân trời sáng tạo

window.questionsChapter1 = [
    // ========== BÀI 1: MÔ TẢ DAO ĐỘNG (15 CÂU) ==========
    
    // Câu 1
    { 
        q: "Dao động cơ học là gì?", 
        options: [
            "Chuyển động lặp đi lặp lại quanh một vị trí đặc biệt gọi là vị trí cân bằng", 
            "Chuyển động thẳng đều", 
            "Chuyển động tròn đều", 
            "Chuyển động của vật dưới tác dụng của lực không đổi"
        ], 
        a: 0, 
        expl: "Dao động cơ học là sự chuyển động có giới hạn trong không gian của một vật quanh một vị trí xác định. Vị trí đó gọi là vị trí cân bằng." 
    },
    
    // Câu 2
    { 
        q: "Vị trí cân bằng trong dao động là:", 
        options: [
            "Vị trí vật đứng yên", 
            "Vị trí vật có vận tốc lớn nhất", 
            "Vị trí vật chịu tác dụng của lực kéo về bằng 0", 
            "Vị trí vật ở biên"
        ], 
        a: 2, 
        expl: "Vị trí cân bằng là vị trí mà vật chịu tác dụng của lực kéo về bằng 0, tại đó vật sẽ đứng yên nếu không có kích thích." 
    },
    
    // Câu 3
    { 
        q: "Dao động tuần hoàn là dao động mà:", 
        options: [
            "Trạng thái chuyển động được lặp lại như cũ sau những khoảng thời gian bằng nhau", 
            "Vật chuyển động tròn đều", 
            "Vật chuyển động thẳng đều", 
            "Vật dao động tắt dần"
        ], 
        a: 0, 
        expl: "Dao động mà trạng thái chuyển động của vật (vị trí và vận tốc) được lặp lại như cũ sau những khoảng thời gian bằng nhau được gọi là dao động tuần hoàn." 
    },
    
    // Câu 4
    { 
        q: "Ví dụ nào sau đây là dao động tuần hoàn?", 
        options: [
            "Quả lắc đồng hồ dao động", 
            "Xe chạy trên đường", 
            "Quả bóng rơi tự do", 
            "Vật trượt trên mặt phẳng nghiêng"
        ], 
        a: 0, 
        expl: "Quả lắc đồng hồ dao động qua lại quanh vị trí cân bằng, lặp đi lặp lại trạng thái sau mỗi chu kỳ." 
    },
    
    // Câu 5
    { 
        q: "Dao động tự do là dao động xảy ra dưới tác dụng của:", 
        options: [
            "Ngoại lực biến thiên", 
            "Chỉ nội lực của hệ", 
            "Lực ma sát", 
            "Trọng lực"
        ], 
        a: 1, 
        expl: "Dao động của hệ xảy ra dưới tác dụng chỉ của nội lực được gọi là dao động tự do (dao động riêng)." 
    },
    
    // Câu 6
    { 
        q: "Trong con lắc lò xo, lực đàn hồi là:", 
        options: [
            "Ngoại lực", 
            "Nội lực của hệ", 
            "Lực ma sát", 
            "Lực quán tính"
        ], 
        a: 1, 
        expl: "Trong con lắc lò xo, lực đàn hồi tác dụng lên vật là nội lực của hệ, làm vật dao động tự do." 
    },
    
    // Câu 7
    { 
        q: "Li độ của vật dao động là:", 
        options: [
            "Quãng đường vật đi được", 
            "Tọa độ của vật tính từ vị trí cân bằng", 
            "Vận tốc của vật", 
            "Gia tốc của vật"
        ], 
        a: 1, 
        expl: "Tọa độ của vật tính từ vị trí cân bằng tại mỗi thời điểm được gọi là li độ $x$ của vật dao động." 
    },
    
    // Câu 8
    { 
        q: "Biên độ dao động là:", 
        options: [
            "Độ lớn cực đại của li độ", 
            "Khoảng thời gian vật dao động", 
            "Số dao động trong một giây", 
            "Vận tốc cực đại"
        ], 
        a: 0, 
        expl: "Biên độ là độ lớn cực đại của li độ." 
    },
    
    // Câu 9
    { 
        q: "Dao động điều hòa là:", 
        options: [
            "Dao động có biên độ không đổi", 
            "Dao động tuần hoàn mà li độ là hàm cosin (hoặc sin) theo thời gian", 
            "Dao động có chu kỳ không đổi", 
            "Dao động có tần số không đổi"
        ], 
        a: 1, 
        expl: "Dao động điều hòa là dao động tuần hoàn mà li độ của vật dao động là một hàm cosin (hoặc sin) theo thời gian." 
    },
    
    // Câu 10
    { 
        q: "Chu kỳ dao động là:", 
        options: [
            "Số dao động trong một giây", 
            "Khoảng thời gian để vật thực hiện được một dao động", 
            "Thời gian vật đi từ biên này sang biên kia", 
            "Thời gian vật đi từ VTCB ra biên"
        ], 
        a: 1, 
        expl: "Chu kì dao động là khoảng thời gian để vật thực hiện được một dao động." 
    },
    
    // Câu 11
    { 
        q: "Tần số dao động được xác định bởi:", 
        options: [
            "Số dao động mà vật thực hiện được trong một giây", 
            "Thời gian thực hiện một dao động", 
            "Biên độ dao động", 
            "Vận tốc dao động"
        ], 
        a: 0, 
        expl: "Tần số dao động được xác định bởi số dao động mà vật thực hiện được trong một giây: $f = \\frac{1}{T}$." 
    },
    
    // Câu 12
    { 
        q: "Đơn vị của tần số trong hệ SI là:", 
        options: [
            "Giây (s)", 
            "Héc (Hz)", 
            "Mét (m)", 
            "Radian (rad)"
        ], 
        a: 1, 
        expl: "Trong hệ SI, tần số dao động có đơn vị là héc (Hz)." 
    },
    
    // Câu 13
    { 
        q: "Mối liên hệ giữa chu kỳ $T$ và tần số $f$ là:", 
        options: [
            "$f = T$", 
            "$f = \\frac{1}{T}$", 
            "$f = \\frac{T}{2}$", 
            "$f = 2T$"
        ], 
        a: 1, 
        expl: "Tần số $f = \\frac{1}{T}$, với $T$ là chu kỳ dao động." 
    },
    
    // Câu 14
    { 
        q: "Pha dao động đặc trưng cho:", 
        options: [
            "Độ lớn của dao động", 
            "Trạng thái của vật trong quá trình dao động", 
            "Tốc độ dao động", 
            "Năng lượng dao động"
        ], 
        a: 1, 
        expl: "Pha dao động là một đại lượng đặc trưng cho trạng thái của vật (li độ và vận tốc) trong quá trình dao động." 
    },
    
    // Câu 15
    { 
        q: "Vật thực hiện một dao động tương ứng với pha dao động thay đổi một lượng:", 
        options: [
            "$\\pi$ rad", 
            "$2\\pi$ rad", 
            "$\\frac{\\pi}{2}$ rad", 
            "$\\frac{3\\pi}{2}$ rad"
        ], 
        a: 1, 
        expl: "Vật thực hiện một dao động tương ứng với pha dao động thay đổi một lượng $2\\pi$ rad." 
    },

    // ========== BÀI 2: PHƯƠNG TRÌNH DAO ĐỘNG ĐIỀU HÒA (15 CÂU) ==========
    
    // Câu 16
    { 
        q: "Phương trình li độ của dao động điều hòa có dạng:", 
        options: [
            "$x = A \\cos(\\omega t + \\varphi_0)$", 
            "$x = A \\sin(\\omega t)$", 
            "$x = A \\tan(\\omega t + \\varphi_0)$", 
            "$x = A \\cot(\\omega t)$"
        ], 
        a: 0, 
        expl: "Phương trình li độ của vật dao động điều hòa: $x = A \\cos(\\omega t + \\varphi_0)$." 
    },
    
    // Câu 17
    { 
        q: "Trong phương trình $x = A \\cos(\\omega t + \\varphi_0)$, đại lượng $\\omega$ được gọi là:", 
        options: [
            "Tần số", 
            "Tần số góc", 
            "Chu kỳ", 
            "Pha ban đầu"
        ], 
        a: 1, 
        expl: "Trong phương trình dao động điều hòa, $\\omega$ là tần số góc, đơn vị rad/s." 
    },
    
    // Câu 18
    { 
        q: "Tần số góc $\\omega$ liên hệ với chu kỳ $T$ theo công thức:", 
        options: [
            "$\\omega = \\frac{2\\pi}{T}$", 
            "$\\omega = \\frac{T}{2\\pi}$", 
            "$\\omega = 2\\pi f$", 
            "Cả A và C"
        ], 
        a: 3, 
        expl: "Tần số góc $\\omega = \\frac{2\\pi}{T} = 2\\pi f$." 
    },
    
    // Câu 19
    { 
        q: "Phương trình vận tốc của vật dao động điều hòa là:", 
        options: [
            "$v = -\\omega A \\sin(\\omega t + \\varphi_0)$", 
            "$v = \\omega A \\cos(\\omega t + \\varphi_0 + \\frac{\\pi}{2})$", 
            "$v = -\\omega A \\sin(\\omega t + \\varphi_0 + \\pi)$", 
            "Cả A và B"
        ], 
        a: 3, 
        expl: "$v = \\omega A \\cos(\\omega t + \\varphi_0 + \\frac{\\pi}{2}) = -\\omega A \\sin(\\omega t + \\varphi_0)$." 
    },
    
    // Câu 20
    { 
        q: "Vận tốc của vật dao động điều hòa biến đổi:", 
        options: [
            "Cùng pha với li độ", 
            "Ngược pha với li độ", 
            "Sớm pha $\\frac{\\pi}{2}$ so với li độ", 
            "Trễ pha $\\frac{\\pi}{2}$ so với li độ"
        ], 
        a: 2, 
        expl: "Vận tốc sớm pha $\\frac{\\pi}{2}$ so với li độ." 
    },
    
    // Câu 21
    { 
        q: "Phương trình gia tốc của vật dao động điều hòa là:", 
        options: [
            "$a = -\\omega^2 x$", 
            "$a = \\omega^2 A \\cos(\\omega t + \\varphi_0 + \\pi)$", 
            "$a = -\\omega^2 A \\cos(\\omega t + \\varphi_0)$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "$a = -\\omega^2 x = -\\omega^2 A \\cos(\\omega t + \\varphi_0) = \\omega^2 A \\cos(\\omega t + \\varphi_0 + \\pi)$." 
    },
    
    // Câu 22
    { 
        q: "Gia tốc của vật dao động điều hòa biến đổi:", 
        options: [
            "Cùng pha với li độ", 
            "Ngược pha với li độ", 
            "Sớm pha $\\frac{\\pi}{2}$ so với li độ", 
            "Trễ pha $\\frac{\\pi}{2}$ so với li độ"
        ], 
        a: 1, 
        expl: "Gia tốc và li độ ngược pha nhau (lệch pha $\\pi$)." 
    },
    
    // Câu 23
    { 
        q: "Độ lệch pha giữa gia tốc và vận tốc là:", 
        options: [
            "$\\frac{\\pi}{2}$", 
            "$\\pi$", 
            "$\\frac{\\pi}{4}$", 
            "$0$"
        ], 
        a: 0, 
        expl: "Gia tốc sớm pha $\\frac{\\pi}{2}$ so với vận tốc (hoặc vận tốc trễ pha $\\frac{\\pi}{2}$ so với gia tốc)." 
    },
    
    // Câu 24
    { 
        q: "Tại vị trí biên, phát biểu nào sau đây đúng?", 
        options: [
            "Vận tốc cực đại, gia tốc cực tiểu", 
            "Vận tốc bằng 0, gia tốc có độ lớn cực đại", 
            "Vận tốc và gia tốc đều bằng 0", 
            "Vận tốc cực đại, gia tốc bằng 0"
        ], 
        a: 1, 
        expl: "Tại biên, $x = \\pm A$, $v = 0$, $a = -\\omega^2 x$ nên $|a| = \\omega^2 A$ (cực đại)." 
    },
    
    // Câu 25
    { 
        q: "Tại vị trí cân bằng, phát biểu nào sau đây đúng?", 
        options: [
            "Vận tốc bằng 0, gia tốc cực đại", 
            "Vận tốc cực đại, gia tốc bằng 0", 
            "Vận tốc và gia tốc đều cực đại", 
            "Vận tốc và gia tốc đều bằng 0"
        ], 
        a: 1, 
        expl: "Tại VTCB, $x = 0$, $v = \\omega A$ (cực đại), $a = -\\omega^2 x = 0$." 
    },
    
    // Câu 26
    { 
        q: "Tốc độ cực đại của vật dao động điều hòa là:", 
        options: [
            "$v_{\\text{max}} = \\omega A$", 
            "$v_{\\text{max}} = \\omega^2 A$", 
            "$v_{\\text{max}} = \\frac{A}{\\omega}$", 
            "$v_{\\text{max}} = \\omega A^2$"
        ], 
        a: 0, 
        expl: "$v_{\\text{max}} = \\omega A$ khi vật qua vị trí cân bằng." 
    },
    
    // Câu 27
    { 
        q: "Gia tốc cực đại của vật dao động điều hòa là:", 
        options: [
            "$a_{\\text{max}} = \\omega A$", 
            "$a_{\\text{max}} = \\omega^2 A$", 
            "$a_{\\text{max}} = \\frac{A}{\\omega}$", 
            "$a_{\\text{max}} = \\omega A^2$"
        ], 
        a: 1, 
        expl: "$a_{\\text{max}} = \\omega^2 A$ khi vật ở biên." 
    },
    
    // Câu 28
    { 
        q: "Một vật dao động điều hòa với biên độ 5 cm, tần số góc 2 rad/s. Tốc độ cực đại là:", 
        options: [
            "5 cm/s", 
            "10 cm/s", 
            "2,5 cm/s", 
            "20 cm/s"
        ], 
        a: 1, 
        expl: "$v_{\\text{max}} = \\omega A = 2 \\times 5 = 10$ cm/s." 
    },
    
    // Câu 29
    { 
        q: "Một vật dao động điều hòa với biên độ 4 cm, tần số góc 5 rad/s. Gia tốc cực đại là:", 
        options: [
            "20 cm/s²", 
            "40 cm/s²", 
            "60 cm/s²", 
            "100 cm/s²"
        ], 
        a: 3, 
        expl: "$a_{\\text{max}} = \\omega^2 A = 5^2 \\times 4 = 25 \\times 4 = 100$ cm/s²." 
    },
    
    // Câu 30
    { 
        q: "Một vật dao động điều hòa có phương trình $x = 5\\cos(4\\pi t)$ cm. Tần số góc là:", 
        options: [
            "$4\\pi$ rad/s", 
            "$4$ rad/s", 
            "$2$ Hz", 
            "$5$ cm"
        ], 
        a: 0, 
        expl: "Từ phương trình $x = 5\\cos(4\\pi t)$, suy ra $\\omega = 4\\pi$ rad/s." 
    },

    // ========== BÀI 3: NĂNG LƯỢNG TRONG DAO ĐỘNG ĐIỀU HÒA (10 CÂU) ==========
    
    // Câu 31
    { 
        q: "Thế năng của vật dao động điều hòa được tính theo công thức:", 
        options: [
            "$W_t = \\frac{1}{2} kx^2$", 
            "$W_t = \\frac{1}{2} m\\omega^2 A^2 \\cos^2(\\omega t + \\varphi_0)$", 
            "$W_t = \\frac{1}{2} m\\omega^2 x^2$", 
            "Cả A và B"
        ], 
        a: 3, 
        expl: "$W_t = \\frac{1}{2} kx^2 = \\frac{1}{2} m\\omega^2 A^2 \\cos^2(\\omega t + \\varphi_0)$." 
    },
    
    // Câu 32
    { 
        q: "Động năng của vật dao động điều hòa được tính theo công thức:", 
        options: [
            "$W_đ = \\frac{1}{2} mv^2$", 
            "$W_đ = \\frac{1}{2} m\\omega^2 A^2 \\sin^2(\\omega t + \\varphi_0)$", 
            "$W_đ = \\frac{1}{2} m\\omega^2 (A^2 - x^2)$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "$W_đ = \\frac{1}{2} mv^2 = \\frac{1}{2} m\\omega^2 A^2 \\sin^2(\\omega t + \\varphi_0) = \\frac{1}{2} m\\omega^2 (A^2 - x^2)$." 
    },
    
    // Câu 33
    { 
        q: "Cơ năng của vật dao động điều hòa là:", 
        options: [
            "$W = \\frac{1}{2} kA^2$", 
            "$W = \\frac{1}{2} m\\omega^2 A^2$", 
            "$W = \\frac{1}{2} kx^2 + \\frac{1}{2} mv^2$", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "$W = \\frac{1}{2} kA^2 = \\frac{1}{2} m\\omega^2 A^2 = W_t + W_đ$, không đổi theo thời gian." 
    },
    
    // Câu 34
    { 
        q: "Trong dao động điều hòa, cơ năng:", 
        options: [
            "Tỉ lệ thuận với bình phương biên độ", 
            "Không thay đổi theo thời gian", 
            "Bằng tổng động năng và thế năng", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Cơ năng $W = \\frac{1}{2} kA^2 = \\frac{1}{2} m\\omega^2 A^2$, không đổi, bằng tổng động năng và thế năng." 
    },
    
    // Câu 35
    { 
        q: "Thế năng và động năng trong dao động điều hòa biến đổi với tần số góc:", 
        options: [
            "Bằng tần số góc của li độ", 
            "Bằng 2 lần tần số góc của li độ", 
            "Bằng $\\frac{1}{2}$ tần số góc của li độ", 
            "Không đổi"
        ], 
        a: 1, 
        expl: "Thế năng và động năng biến đổi tuần hoàn với tần số góc $\\omega' = 2\\omega$." 
    },
    
    // Câu 36
    { 
        q: "Khi vật dao động điều hòa từ biên về vị trí cân bằng thì:", 
        options: [
            "Thế năng tăng, động năng giảm", 
            "Thế năng giảm, động năng tăng", 
            "Cả thế năng và động năng đều tăng", 
            "Cả thế năng và động năng đều giảm"
        ], 
        a: 1, 
        expl: "Từ biên về VTCB, $x$ giảm nên thế năng giảm, $v$ tăng nên động năng tăng." 
    },
    
    // Câu 37
    { 
        q: "Tại vị trí cân bằng:", 
        options: [
            "Thế năng cực đại, động năng cực tiểu", 
            "Thế năng cực tiểu, động năng cực đại", 
            "Thế năng và động năng bằng nhau", 
            "Thế năng và động năng đều cực đại"
        ], 
        a: 1, 
        expl: "Tại VTCB, $x = 0$ nên $W_t = 0$ (cực tiểu), $v = v_{\\text{max}}$ nên $W_đ = W_đ_{\\text{max}}$ (cực đại)." 
    },
    
    // Câu 38
    { 
        q: "Tại vị trí biên:", 
        options: [
            "Thế năng cực đại, động năng cực tiểu", 
            "Thế năng cực tiểu, động năng cực đại", 
            "Thế năng và động năng bằng nhau", 
            "Thế năng và động năng đều cực đại"
        ], 
        a: 0, 
        expl: "Tại biên, $x = \\pm A$ nên $W_t = W_t_{\\text{max}}$ (cực đại), $v = 0$ nên $W_đ = 0$ (cực tiểu)." 
    },
    
    // Câu 39
    { 
        q: "Vị trí mà động năng bằng thế năng ($W_đ = W_t$) có li độ:", 
        options: [
            "$x = \\pm \\frac{A}{\\sqrt{2}}$", 
            "$x = \\pm \\frac{A}{2}$", 
            "$x = \\pm A$", 
            "$x = 0$"
        ], 
        a: 0, 
        expl: "Khi $W_đ = W_t = \\frac{W}{2} \\Rightarrow \\frac{1}{2} kx^2 = \\frac{1}{2} \\cdot \\frac{1}{2} kA^2 \\Rightarrow x^2 = \\frac{A^2}{2} \\Rightarrow x = \\pm \\frac{A}{\\sqrt{2}}$." 
    },
    
    // Câu 40
    { 
        q: "Một vật dao động điều hòa với biên độ 6 cm. Khi vật có li độ 3 cm thì tỉ số động năng và thế năng là:", 
        options: [
            "1", 
            "2", 
            "3", 
            "4"
        ], 
        a: 2, 
        expl: "$\\frac{W_đ}{W_t} = \\frac{W - W_t}{W_t} = \\frac{\\frac{1}{2}kA^2 - \\frac{1}{2}kx^2}{\\frac{1}{2}kx^2} = \\frac{A^2 - x^2}{x^2} = \\frac{36 - 9}{9} = \\frac{27}{9} = 3$." 
    },

    // ========== BÀI 4: DAO ĐỘNG TẮT DẦN VÀ HIỆN TƯỢNG CỘNG HƯỞNG (10 CÂU) ==========
    
    // Câu 41
    { 
        q: "Dao động tắt dần là dao động có:", 
        options: [
            "Biên độ giảm dần theo thời gian", 
            "Chu kỳ giảm dần theo thời gian", 
            "Tần số giảm dần theo thời gian", 
            "Năng lượng tăng dần theo thời gian"
        ], 
        a: 0, 
        expl: "Dao động tắt dần là dao động có biên độ giảm dần theo thời gian do lực cản." 
    },
    
    // Câu 42
    { 
        q: "Nguyên nhân gây ra dao động tắt dần là:", 
        options: [
            "Lực cản của môi trường", 
            "Lực đàn hồi", 
            "Lực kéo về", 
            "Trọng lực"
        ], 
        a: 0, 
        expl: "Lực cản của môi trường làm tiêu hao năng lượng, khiến biên độ giảm dần." 
    },
    
    // Câu 43
    { 
        q: "Dao động duy trì là dao động:", 
        options: [
            "Có biên độ không đổi nhờ được bổ sung năng lượng đúng bằng phần năng lượng tiêu hao sau mỗi chu kỳ", 
            "Có biên độ giảm dần", 
            "Có tần số thay đổi", 
            "Không chịu tác dụng của lực cản"
        ], 
        a: 0, 
        expl: "Dao động duy trì được bổ sung năng lượng đúng bằng phần năng lượng tiêu hao sau mỗi chu kỳ." 
    },
    
    // Câu 44
    { 
        q: "Dao động cưỡng bức là dao động:", 
        options: [
            "Duy trì nhờ ngoại lực biến thiên điều hòa", 
            "Có biên độ giảm dần", 
            "Có tần số bằng tần số riêng", 
            "Không phụ thuộc vào ngoại lực"
        ], 
        a: 0, 
        expl: "Dao động cưỡng bức là dao động của vật dưới tác dụng của ngoại lực biến thiên điều hòa." 
    },
    
    // Câu 45
    { 
        q: "Hiện tượng cộng hưởng xảy ra khi:", 
        options: [
            "Tần số của lực cưỡng bức bằng tần số riêng của hệ", 
            "Biên độ dao động đạt giá trị cực đại", 
            "Lực cản rất nhỏ", 
            "Cả A và B"
        ], 
        a: 3, 
        expl: "Cộng hưởng xảy ra khi tần số góc của lực cưỡng bức bằng tần số góc riêng của hệ, biên độ đạt cực đại." 
    },
    
    // Câu 46
    { 
        q: "Khi cộng hưởng, biên độ dao động:", 
        options: [
            "Đạt giá trị cực đại", 
            "Đạt giá trị cực tiểu", 
            "Không đổi", 
            "Bằng 0"
        ], 
        a: 0, 
        expl: "Khi cộng hưởng, biên độ dao động cưỡng bức đạt giá trị cực đại." 
    },
    
    // Câu 47
    { 
        q: "Ví dụ nào sau đây là ứng dụng có lợi của hiện tượng cộng hưởng?", 
        options: [
            "Hộp đàn guitar", 
            "Cầu bị rung lắc mạnh khi có gió", 
            "Tòa nhà bị rung khi động đất", 
            "Cốc vỡ khi hát to"
        ], 
        a: 0, 
        expl: "Hộp đàn guitar được thiết kế để cộng hưởng, làm tăng âm lượng." 
    },
    
    // Câu 48
    { 
        q: "Để giảm thiểu tác hại của cộng hưởng, người ta thường:", 
        options: [
            "Tăng lực cản", 
            "Thay đổi tần số riêng của hệ", 
            "Sử dụng bộ giảm chấn", 
            "Cả A, B, C"
        ], 
        a: 3, 
        expl: "Có nhiều biện pháp như tăng lực cản, thay đổi tần số riêng, dùng bộ giảm chấn." 
    },
    
    // Câu 49
    { 
        q: "Bộ giảm chấn khối lượng (mass damper) trong tòa nhà Taipei 101 hoạt động dựa trên nguyên lý:", 
        options: [
            "Dao động tắt dần", 
            "Dao động cưỡng bức", 
            "Dao động duy trì", 
            "Hiện tượng cộng hưởng"
        ], 
        a: 3, 
        expl: "Bộ giảm chấn khối lượng là con lắc nặng dao động để triệt tiêu dao động của tòa nhà khi có cộng hưởng." 
    },
    
    // Câu 50
    { 
        q: "Khi lực cản môi trường tăng lên, biên độ dao động cưỡng bức cực đại:", 
        options: [
            "Tăng lên", 
            "Giảm xuống", 
            "Không đổi", 
            "Bằng 0"
        ], 
        a: 1, 
        expl: "Khi lực cản môi trường tăng, đỉnh của đường cong cộng hưởng thấp xuống, biên độ cực đại giảm." 
    }
];