// ==============================================
// FILE: database-chapter4-lythuyet.js
// ==============================================
// Ngân hàng câu hỏi trắc nghiệm lý thuyết chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// 80 câu trắc nghiệm lý thuyết thuần túy (không tính toán)
// ==============================================

window.questionsChapter4LyThuyet = [
    // ============================================
    // CÂU 1-15: KHÁI NIỆM DÒNG ĐIỆN VÀ CƯỜNG ĐỘ DÒNG ĐIỆN
    // ============================================
    
    // Câu 1
    {
        type: "multiple-choice",
        q: "Dòng điện là gì?",
        options: [
            "Dòng dịch chuyển có hướng của các điện tích.",
            "Dòng chuyển động của các electron tự do.",
            "Dòng chuyển động của các ion dương.",
            "Dòng chuyển động hỗn loạn của các phân tử."
        ],
        a: 0,
        expl: "Dòng điện là dòng dịch chuyển có hướng của các điện tích."
    },
    
    // Câu 2
    {
        type: "multiple-choice",
        q: "Chiều dòng điện được quy ước là chiều dịch chuyển có hướng của hạt nào?",
        options: [
            "Các electron.",
            "Các điện tích dương.",
            "Các ion âm.",
            "Các hạt nhân nguyên tử."
        ],
        a: 1,
        expl: "Chiều dòng điện được quy ước là chiều dịch chuyển có hướng của các điện tích dương."
    },
    
    // Câu 3
    {
        type: "multiple-choice",
        q: "Trong dây dẫn kim loại, dòng điện là dòng dịch chuyển có hướng của hạt nào?",
        options: [
            "Các ion dương.",
            "Các ion âm.",
            "Các electron tự do.",
            "Các nguyên tử kim loại."
        ],
        a: 2,
        expl: "Trong kim loại, dòng điện được tạo ra bởi sự dịch chuyển có hướng của các electron tự do."
    },
    
    // Câu 4
    {
        type: "multiple-choice",
        q: "Đại lượng vật lí nào đặc trưng cho tác dụng mạnh hay yếu của dòng điện?",
        options: [
            "Hiệu điện thế.",
            "Điện trở.",
            "Công suất.",
            "Cường độ dòng điện."
        ],
        a: 3,
        expl: "Cường độ dòng điện đặc trưng cho tác dụng mạnh, yếu của dòng điện."
    },
    
    // Câu 5
    {
        type: "multiple-choice",
        q: "Đơn vị của cường độ dòng điện trong hệ SI là gì?",
        options: [
            "Vôn (V).",
            "Ôm (Ω).",
            "Oát (W).",
            "Ampe (A)."
        ],
        a: 3,
        expl: "Cường độ dòng điện có đơn vị là ampe (A)."
    },
    
    // Câu 6
    {
        type: "multiple-choice",
        q: "Để duy trì một dòng điện trong mạch kín, cần có thiết bị nào sau đây?",
        options: [
            "Vật dẫn.",
            "Điện trở.",
            "Nguồn điện.",
            "Dây nối."
        ],
        a: 2,
        expl: "Nguồn điện tạo ra và duy trì hiệu điện thế, từ đó duy trì dòng điện."
    },
    
    // Câu 7
    {
        type: "multiple-choice",
        q: "Dòng điện không đổi là dòng điện có đặc điểm nào?",
        options: [
            "Chiều thay đổi, cường độ không đổi.",
            "Chiều không đổi, cường độ thay đổi.",
            "Chiều và cường độ không thay đổi theo thời gian.",
            "Chiều và cường độ luôn thay đổi."
        ],
        a: 2,
        expl: "Dòng điện không đổi là dòng điện có chiều và cường độ không thay đổi theo thời gian."
    },
    
    // Câu 8
    {
        type: "multiple-choice",
        q: "Trong chất điện phân, dòng điện được tạo ra bởi sự dịch chuyển của hạt nào?",
        options: [
            "Chỉ electron tự do.",
            "Chỉ ion dương.",
            "Cả ion dương và ion âm.",
            "Chỉ ion âm."
        ],
        a: 2,
        expl: "Trong chất điện phân, dòng điện được tạo ra bởi sự dịch chuyển có hướng của cả ion dương và ion âm."
    },
    
    // Câu 9
    {
        type: "multiple-choice",
        q: "Vận tốc trôi của electron trong kim loại khi có dòng điện có đặc điểm gì?",
        options: [
            "Rất lớn, gần bằng vận tốc ánh sáng.",
            "Có độ lớn khoảng 10² - 10³ m/s.",
            "Rất nhỏ, khoảng 10⁻⁴ - 10⁻³ m/s.",
            "Bằng 0 vì electron không di chuyển."
        ],
        a: 2,
        expl: "Vận tốc trôi của electron trong kim loại rất nhỏ, khoảng 10⁻⁴ - 10⁻³ m/s."
    },
    
    // Câu 10
    {
        type: "multiple-choice",
        q: "Khi đèn sáng ngay sau khi bật công tắc, điều này chứng tỏ điều gì?",
        options: [
            "Electron di chuyển với vận tốc rất lớn.",
            "Điện trường lan truyền với vận tốc lớn.",
            "Dòng điện xuất hiện ngay tức thời.",
            "Cả A, B, C đều đúng."
        ],
        a: 1,
        expl: "Đèn sáng ngay là do điện trường lan truyền với vận tốc rất lớn (gần bằng vận tốc ánh sáng), không phải do electron di chuyển nhanh."
    },
    
    // Câu 11
    {
        type: "multiple-choice",
        q: "Khi nói về dòng điện trong kim loại, phát biểu nào sau đây là đúng?",
        options: [
            "Dòng điện trong kim loại là dòng dịch chuyển có hướng của các ion dương.",
            "Dòng điện trong kim loại là dòng dịch chuyển có hướng của các electron tự do.",
            "Dòng điện trong kim loại là dòng dịch chuyển có hướng của cả electron và ion.",
            "Dòng điện trong kim loại là dòng dịch chuyển có hướng của các hạt nhân."
        ],
        a: 1,
        expl: "Trong kim loại, dòng điện là dòng dịch chuyển có hướng của các electron tự do."
    },
    
    // Câu 12
    {
        type: "multiple-choice",
        q: "Khi nối hai đầu dây dẫn với hai cực của nguồn điện, các electron tự do trong dây dẫn sẽ:",
        options: [
            "Đứng yên tại chỗ.",
            "Chuyển động hỗn loạn không ngừng.",
            "Dịch chuyển có hướng từ cực âm sang cực dương.",
            "Dịch chuyển có hướng từ cực dương sang cực âm."
        ],
        a: 2,
        expl: "Electron tự do mang điện tích âm nên dịch chuyển từ cực âm sang cực dương của nguồn."
    },
    
    // Câu 13
    {
        type: "multiple-choice",
        q: "Điện lượng là đại lượng đặc trưng cho:",
        options: [
            "Khả năng sinh công của dòng điện.",
            "Lượng điện tích dịch chuyển.",
            "Cường độ dòng điện.",
            "Hiệu điện thế giữa hai điểm."
        ],
        a: 1,
        expl: "Điện lượng là lượng điện tích dịch chuyển qua tiết diện thẳng của dây dẫn."
    },
    
    // Câu 14
    {
        type: "multiple-choice",
        q: "Trong các vật liệu sau, vật liệu nào là chất dẫn điện tốt nhất?",
        options: [
            "Nhôm.",
            "Sắt.",
            "Đồng.",
            "Bạc."
        ],
        a: 3,
        expl: "Bạc có điện trở suất nhỏ nhất trong các kim loại, dẫn điện tốt nhất."
    },
    
    // Câu 15
    {
        type: "multiple-choice",
        q: "Điều kiện để có dòng điện trong một vật là:",
        options: [
            "Vật đó phải là kim loại.",
            "Vật đó phải ở nhiệt độ phòng.",
            "Phải có hiệu điện thế đặt vào hai đầu vật và trong vật có các điện tích tự do.",
            "Vật đó phải được nối với nguồn điện."
        ],
        a: 2,
        expl: "Để có dòng điện cần có hiệu điện thế và các điện tích tự do trong vật."
    },
    
    // ============================================
    // CÂU 16-30: ĐIỆN TRỞ VÀ ĐỊNH LUẬT OHM
    // ============================================
    
    // Câu 16
    {
        type: "multiple-choice",
        q: "Điện trở của một vật dẫn đặc trưng cho tính chất gì?",
        options: [
            "Khả năng tích điện của vật dẫn.",
            "Khả năng dẫn điện tốt của vật dẫn.",
            "Khả năng cản trở dòng điện của vật dẫn.",
            "Khả năng sinh công của vật dẫn."
        ],
        a: 2,
        expl: "Điện trở đặc trưng cho khả năng cản trở dòng điện của vật dẫn."
    },
    
    // Câu 17
    {
        type: "multiple-choice",
        q: "Đơn vị của điện trở trong hệ SI là gì?",
        options: [
            "Vôn (V).",
            "Oát (W).",
            "Ampe (A).",
            "Ôm (Ω)."
        ],
        a: 3,
        expl: "Điện trở có đơn vị là ôm (Ω): 1 Ω = 1 V/A."
    },
    
    // Câu 18
    {
        type: "multiple-choice",
        q: "Định luật Ôm cho đoạn mạch chỉ chứa điện trở thuần phát biểu rằng:",
        options: [
            "Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở.",
            "Cường độ dòng điện tỉ lệ nghịch với hiệu điện thế và tỉ lệ thuận với điện trở.",
            "Cường độ dòng điện tỉ lệ thuận với cả hiệu điện thế và điện trở.",
            "Cường độ dòng điện không phụ thuộc vào hiệu điện thế."
        ],
        a: 0,
        expl: "Định luật Ôm: $I = \\frac{U}{R}$, I tỉ lệ thuận với U, tỉ lệ nghịch với R."
    },
    
    // Câu 19
    {
        type: "multiple-choice",
        q: "Điện trở của một dây dẫn kim loại đồng chất, tiết diện đều phụ thuộc vào yếu tố nào?",
        options: [
            "Chỉ phụ thuộc vào bản chất vật liệu.",
            "Chỉ phụ thuộc vào chiều dài và tiết diện.",
            "Phụ thuộc vào bản chất, chiều dài và tiết diện.",
            "Phụ thuộc vào khối lượng riêng của vật liệu."
        ],
        a: 2,
        expl: "$R = \\rho \\frac{l}{S}$, phụ thuộc vào điện trở suất (bản chất), chiều dài và tiết diện."
    },
    
    // Câu 20
    {
        type: "multiple-choice",
        q: "Điện trở suất của vật liệu có ý nghĩa gì?",
        options: [
            "Đặc trưng cho khả năng dẫn điện của vật liệu.",
            "Đặc trưng cho khả năng cách điện của vật liệu.",
            "Đặc trưng cho khối lượng riêng của vật liệu.",
            "Đặc trưng cho nhiệt độ nóng chảy của vật liệu."
        ],
        a: 0,
        expl: "Điện trở suất đặc trưng cho khả năng cản trở dòng điện (hay khả năng dẫn điện) của vật liệu."
    },
    
    // Câu 21
    {
        type: "multiple-choice",
        q: "Khi nhiệt độ của dây kim loại tăng, điện trở của nó thay đổi như thế nào?",
        options: [
            "Giảm xuống.",
            "Không thay đổi.",
            "Tăng lên.",
            "Lúc đầu tăng, sau giảm."
        ],
        a: 2,
        expl: "Khi nhiệt độ tăng, điện trở kim loại tăng do các ion dao động mạnh hơn, cản trở electron nhiều hơn."
    },
    
    // Câu 22
    {
        type: "multiple-choice",
        q: "Đường đặc trưng vôn – ampe (U-I) của một vật dẫn tuân theo định luật Ôm có dạng như thế nào?",
        options: [
            "Một đường cong đi qua gốc tọa độ.",
            "Một đường thẳng đi qua gốc tọa độ.",
            "Một đường thẳng không đi qua gốc tọa độ.",
            "Một đường parabol."
        ],
        a: 1,
        expl: "Theo định luật Ôm, U = I.R, đồ thị U theo I là đường thẳng đi qua gốc tọa độ."
    },
    
    // Câu 23
    {
        type: "multiple-choice",
        q: "Khi chiều dài dây dẫn tăng gấp đôi, các yếu tố khác không đổi thì điện trở của dây thay đổi như thế nào?",
        options: [
            "Giảm 2 lần.",
            "Không đổi.",
            "Tăng 4 lần.",
            "Tăng 2 lần."
        ],
        a: 3,
        expl: "Điện trở tỉ lệ thuận với chiều dài: $R \\sim l$."
    },
    
    // Câu 24
    {
        type: "multiple-choice",
        q: "Khi tiết diện dây dẫn tăng gấp đôi, các yếu tố khác không đổi thì điện trở của dây thay đổi như thế nào?",
        options: [
            "Tăng 2 lần.",
            "Giảm 2 lần.",
            "Tăng 4 lần.",
            "Không đổi."
        ],
        a: 1,
        expl: "Điện trở tỉ lệ nghịch với tiết diện: $R \\sim 1/S$."
    },
    
    // Câu 25
    {
        type: "multiple-choice",
        q: "Hệ số nhiệt điện trở α của kim loại có đơn vị là gì?",
        options: [
            "Ôm (Ω).",
            "K⁻¹.",
            "Ω.K.",
            "Không có đơn vị."
        ],
        a: 1,
        expl: "Hệ số nhiệt điện trở có đơn vị là K⁻¹ (hoặc °C⁻¹)."
    },
    
    // Câu 26
    {
        type: "multiple-choice",
        q: "Kim loại nào sau đây có điện trở suất nhỏ nhất (dẫn điện tốt nhất)?",
        options: [
            "Đồng.",
            "Nhôm.",
            "Vàng.",
            "Bạc."
        ],
        a: 3,
        expl: "Bạc có điện trở suất nhỏ nhất $1,62.10^{-8} \\Omega.m$, dẫn điện tốt nhất."
    },
    
    // Câu 27
    {
        type: "multiple-choice",
        q: "Đối với bóng đèn sợi đốt, điện trở của nó thay đổi như thế nào khi đèn sáng?",
        options: [
            "Giảm mạnh so với lúc chưa sáng.",
            "Tăng mạnh so với lúc chưa sáng.",
            "Không thay đổi.",
            "Lúc đầu tăng, sau giảm."
        ],
        a: 1,
        expl: "Khi đèn sáng, nhiệt độ dây tóc tăng cao làm điện trở tăng mạnh."
    },
    
    // Câu 28
    {
        type: "multiple-choice",
        q: "Điện trở nhiệt (thermistor) là linh kiện có đặc điểm gì?",
        options: [
            "Điện trở không phụ thuộc nhiệt độ.",
            "Điện trở biến thiên chậm theo nhiệt độ.",
            "Điện trở biến thiên rất nhanh theo nhiệt độ.",
            "Điện trở luôn có giá trị rất lớn."
        ],
        a: 2,
        expl: "Điện trở nhiệt là linh kiện có điện trở biến thiên rất nhanh theo nhiệt độ, dùng làm cảm biến nhiệt."
    },
    
    // Câu 29
    {
        type: "multiple-choice",
        q: "Dây đốt nóng trong các thiết bị gia dụng như bếp điện, ấm điện thường được làm bằng vật liệu nào?",
        options: [
            "Đồng.",
            "Nhôm.",
            "Bạc.",
            "Niken-crom (hợp kim)."
        ],
        a: 3,
        expl: "Niken-crom có điện trở suất lớn và chịu nhiệt cao, thích hợp làm dây đốt nóng."
    },
    
    // Câu 30
    {
        type: "multiple-choice",
        q: "Chất bán dẫn có đặc điểm điện trở như thế nào khi nhiệt độ tăng?",
        options: [
            "Điện trở tăng.",
            "Điện trở giảm.",
            "Điện trở không đổi.",
            "Điện trở tăng rồi giảm."
        ],
        a: 1,
        expl: "Chất bán dẫn có điện trở giảm khi nhiệt độ tăng (ngược với kim loại)."
    },
    
    // ============================================
    // CÂU 31-45: NGUỒN ĐIỆN VÀ SUẤT ĐIỆN ĐỘNG
    // ============================================
    
    // Câu 31
    {
        type: "multiple-choice",
        q: "Suất điện động của nguồn điện đặc trưng cho đại lượng nào?",
        options: [
            "Khả năng tích điện của nguồn.",
            "Khả năng tác dụng lực của nguồn.",
            "Khả năng sinh công của nguồn.",
            "Khả năng dự trữ năng lượng của nguồn."
        ],
        a: 2,
        expl: "Suất điện động đặc trưng cho khả năng sinh công của nguồn điện."
    },
    
    // Câu 32
    {
        type: "multiple-choice",
        q: "Đơn vị của suất điện động trong hệ SI là gì?",
        options: [
            "Ampe (A).",
            "Ôm (Ω).",
            "Oát (W).",
            "Vôn (V)."
        ],
        a: 3,
        expl: "Suất điện động có đơn vị là vôn (V)."
    },
    
    // Câu 33
    {
        type: "multiple-choice",
        q: "Trong nguồn điện, lực lạ có tác dụng gì?",
        options: [
            "Tạo ra điện trường bên trong nguồn.",
            "Làm các electron dịch chuyển từ cực dương sang cực âm bên trong nguồn.",
            "Làm các điện tích dương dịch chuyển từ cực âm sang cực dương bên trong nguồn.",
            "Làm các điện tích dương dịch chuyển từ cực dương sang cực âm."
        ],
        a: 2,
        expl: "Lực lạ làm các điện tích dương dịch chuyển từ cực âm sang cực dương bên trong nguồn."
    },
    
    // Câu 34
    {
        type: "multiple-choice",
        q: "Khi mạch ngoài hở (không có dòng điện chạy qua nguồn), hiệu điện thế giữa hai cực của nguồn điện có giá trị như thế nào so với suất điện động?",
        options: [
            "Nhỏ hơn.",
            "Lớn hơn.",
            "Bằng nhau.",
            "Có thể lớn hơn hoặc nhỏ hơn."
        ],
        a: 2,
        expl: "Khi mạch hở, không có dòng điện, U = ε."
    },
    
    // Câu 35
    {
        type: "multiple-choice",
        q: "Điện trở trong của nguồn điện là gì?",
        options: [
            "Điện trở của toàn bộ mạch điện.",
            "Điện trở của mạch ngoài.",
            "Điện trở của phần bên trong nguồn điện.",
            "Điện trở của dây dẫn nối."
        ],
        a: 2,
        expl: "Điện trở trong là điện trở của phần bên trong nguồn điện."
    },
    
    // Câu 36
    {
        type: "multiple-choice",
        q: "Khi nối tắt hai cực của một nguồn điện (đoản mạch), hiện tượng gì xảy ra?",
        options: [
            "Dòng điện rất nhỏ.",
            "Không có dòng điện.",
            "Dòng điện rất lớn, có thể gây cháy nổ.",
            "Nguồn điện ngừng hoạt động."
        ],
        a: 2,
        expl: "Khi nối tắt, R = 0, I = ε/r rất lớn, gây nguy hiểm cháy nổ."
    },
    
    // Câu 37
    {
        type: "multiple-choice",
        q: "Hiệu suất của nguồn điện được định nghĩa là tỉ số giữa:",
        options: [
            "Công suất hao phí và công suất toàn phần.",
            "Cường độ dòng điện và suất điện động.",
            "Công suất có ích và công suất toàn phần.",
            "Hiệu điện thế và cường độ dòng điện."
        ],
        a: 2,
        expl: "Hiệu suất nguồn điện: $\\eta = \\frac{P_{ich}}{P_{tp}} = \\frac{U}{\\varepsilon}$."
    },
    
    // Câu 38
    {
        type: "multiple-choice",
        q: "Khi ghép nối tiếp các nguồn điện, suất điện động của bộ nguồn được tính như thế nào?",
        options: [
            "Bằng hiệu các suất điện động.",
            "Bằng suất điện động của nguồn lớn nhất.",
            "Bằng trung bình cộng các suất điện động.",
            "Bằng tổng các suất điện động."
        ],
        a: 3,
        expl: "Ghép nối tiếp: $\\mathcal{E}_b = \\mathcal{E}_1 + \\mathcal{E}_2 + ... + \\mathcal{E}_n$."
    },
    
    // Câu 39
    {
        type: "multiple-choice",
        q: "Khi ghép nối tiếp các nguồn điện, điện trở trong của bộ nguồn được tính như thế nào?",
        options: [
            "Bằng hiệu các điện trở trong.",
            "Bằng điện trở trong của nguồn lớn nhất.",
            "Bằng tổng các điện trở trong.",
            "Bằng trung bình cộng các điện trở trong."
        ],
        a: 2,
        expl: "Ghép nối tiếp: $r_b = r_1 + r_2 + ... + r_n$."
    },
    
    // Câu 40
    {
        type: "multiple-choice",
        q: "Khi ghép song song các nguồn điện giống hệt nhau, suất điện động của bộ nguồn được tính như thế nào?",
        options: [
            "Bằng tổng các suất điện động.",
            "Bằng suất điện động của một nguồn.",
            "Bằng hiệu các suất điện động.",
            "Bằng tích các suất điện động."
        ],
        a: 1,
        expl: "Ghép song song các nguồn giống nhau: $\\mathcal{E}_b = \\mathcal{E}$."
    },
    
    // Câu 41
    {
        type: "multiple-choice",
        q: "Khi ghép song song các nguồn điện giống hệt nhau, điện trở trong của bộ nguồn được tính như thế nào?",
        options: [
            "Bằng tổng các điện trở trong.",
            "Bằng điện trở trong của một nguồn.",
            "Bằng điện trở trong của một nguồn chia cho số nguồn.",
            "Bằng tích các điện trở trong."
        ],
        a: 2,
        expl: "Ghép song song n nguồn giống nhau: $r_b = \\frac{r}{n}$."
    },
    
    // Câu 42
    {
        type: "multiple-choice",
        q: "Nguồn điện thực tế được đặc trưng bởi hai đại lượng nào?",
        options: [
            "Hiệu điện thế và cường độ dòng điện.",
            "Suất điện động và điện trở trong.",
            "Công suất và điện năng.",
            "Điện tích và điện dung."
        ],
        a: 1,
        expl: "Nguồn điện thực tế có suất điện động ε và điện trở trong r."
    },
    
    // Câu 43
    {
        type: "multiple-choice",
        q: "Khi nguồn điện cung cấp dòng điện cho mạch ngoài, hiệu điện thế giữa hai cực của nguồn có đặc điểm gì?",
        options: [
            "Lớn hơn suất điện động.",
            "Bằng suất điện động.",
            "Nhỏ hơn suất điện động.",
            "Bằng 0."
        ],
        a: 2,
        expl: "Khi có dòng điện, $U = \\varepsilon - Ir < \\varepsilon$."
    },
    
    // Câu 44
    {
        type: "multiple-choice",
        q: "Pin và acquy có điểm giống nhau cơ bản là:",
        options: [
            "Đều có thể sạc điện lại được.",
            "Đều tạo ra dòng điện nhờ phản ứng hóa học.",
            "Đều có suất điện động rất lớn.",
            "Đều có điện trở trong bằng 0."
        ],
        a: 1,
        expl: "Pin và acquy đều biến đổi hóa năng thành điện năng, tạo ra dòng điện nhờ phản ứng hóa học."
    },
    
    // Câu 45
    {
        type: "multiple-choice",
        q: "Khi sử dụng pin, ta không nên để pin ở nơi ẩm ướt vì:",
        options: [
            "Pin sẽ bị rỉ sét.",
            "Điện trở trong của pin tăng lên.",
            "Pin có thể bị chập mạch qua lớp vỏ ẩm.",
            "Pin sẽ bị giảm suất điện động."
        ],
        a: 2,
        expl: "Lớp vỏ ẩm có thể tạo đường dẫn điện làm pin bị chập, nhanh hết và gây nguy hiểm."
    },
    
    // ============================================
    // CÂU 46-60: CÔNG SUẤT VÀ ĐIỆN NĂNG
    // ============================================
    
    // Câu 46
    {
        type: "multiple-choice",
        q: "Đơn vị của công suất điện trong hệ SI là gì?",
        options: [
            "Jun (J).",
            "Vôn (V).",
            "Ampe (A).",
            "Oát (W)."
        ],
        a: 3,
        expl: "Công suất có đơn vị là oát (W)."
    },
    
    // Câu 47
    {
        type: "multiple-choice",
        q: "Công suất tiêu thụ điện của một đoạn mạch được tính bằng:",
        options: [
            "Tích của hiệu điện thế và thời gian.",
            "Tích của cường độ dòng điện và thời gian.",
            "Tích của hiệu điện thế và cường độ dòng điện.",
            "Thương của hiệu điện thế và cường độ dòng điện."
        ],
        a: 2,
        expl: "Công suất điện: $P = U.I$."
    },
    
    // Câu 48
    {
        type: "multiple-choice",
        q: "Hiệu ứng Joule là hiện tượng gì?",
        options: [
            "Sự phát sáng của dây dẫn khi có dòng điện.",
            "Sự tạo từ trường của dòng điện.",
            "Sự tỏa nhiệt trên dây dẫn khi có dòng điện chạy qua.",
            "Sự phân cực điện của dây dẫn."
        ],
        a: 2,
        expl: "Hiệu ứng Joule là hiện tượng tỏa nhiệt trên dây dẫn khi có dòng điện chạy qua."
    },
    
    // Câu 49
    {
        type: "multiple-choice",
        q: "Đơn vị của điện năng tiêu thụ thường dùng trong đời sống là:",
        options: [
            "Jun (J).",
            "Oát (W).",
            "Vôn (V).",
            "Kilôoát giờ (kWh)."
        ],
        a: 3,
        expl: "Trong đời sống, điện năng tiêu thụ thường tính bằng kWh."
    },
    
    // Câu 50
    {
        type: "multiple-choice",
        q: "Công suất của nguồn điện được tính bằng công thức nào?",
        options: [
            "$P_{ng} = U.I$",
            "$P_{ng} = I^2R$",
            "$P_{ng} = \\varepsilon.I$",
            "$P_{ng} = \\frac{U^2}{R}$"
        ],
        a: 2,
        expl: "Công suất của nguồn điện: $P_{ng} = \\varepsilon.I$."
    },
    
    // Câu 51
    {
        type: "multiple-choice",
        q: "Công suất hao phí trên điện trở trong của nguồn điện được tính bằng:",
        options: [
            "$P_{hp} = U.I$",
            "$P_{hp} = \\varepsilon.I$",
            "$P_{hp} = I^2r$",
            "$P_{hp} = \\frac{U^2}{r}$"
        ],
        a: 2,
        expl: "Công suất hao phí tỏa nhiệt trên điện trở trong: $P_{hp} = I^2r$."
    },
    
    // Câu 52
    {
        type: "multiple-choice",
        q: "Điều kiện để công suất tiêu thụ trên mạch ngoài đạt giá trị lớn nhất là:",
        options: [
            "$R >> r$",
            "$R << r$",
            "$R = r$",
            "$R = 2r$"
        ],
        a: 2,
        expl: "Công suất mạch ngoài lớn nhất khi $R = r$."
    },
    
    // Câu 53
    {
        type: "multiple-choice",
        q: "Khi điện trở mạch ngoài bằng điện trở trong của nguồn, hiệu suất của nguồn điện là bao nhiêu?",
        options: [
            "25%",
            "50%",
            "75%",
            "100%"
        ],
        a: 1,
        expl: "Khi R = r, $\\eta = \\frac{R}{R+r} = \\frac{R}{2R} = 0,5 = 50\\%$."
    },
    
    // Câu 54
    {
        type: "multiple-choice",
        q: "Nhiệt lượng tỏa ra trên dây dẫn khi có dòng điện chạy qua được xác định bởi định luật nào?",
        options: [
            "Định luật Ohm.",
            "Định luật Joule – Lenz.",
            "Định luật Coulomb.",
            "Định luật Faraday."
        ],
        a: 1,
        expl: "Định luật Joule – Lenz xác định nhiệt lượng tỏa ra trên dây dẫn: $Q = I^2Rt$."
    },
    
    // Câu 55
    {
        type: "multiple-choice",
        q: "Điện năng tiêu thụ của một thiết bị điện phụ thuộc vào những yếu tố nào?",
        options: [
            "Hiệu điện thế và thời gian sử dụng.",
            "Cường độ dòng điện và thời gian sử dụng.",
            "Công suất và thời gian sử dụng.",
            "Điện trở và hiệu điện thế."
        ],
        a: 2,
        expl: "Điện năng tiêu thụ: $A = P.t$, phụ thuộc vào công suất và thời gian."
    },
    
    // Câu 56
    {
        type: "multiple-choice",
        q: "Trên một bóng đèn có ghi 220V – 60W. Con số 60W có ý nghĩa gì?",
        options: [
            "Hiệu điện thế định mức của đèn.",
            "Cường độ dòng điện định mức của đèn.",
            "Công suất định mức của đèn.",
            "Điện trở của đèn khi hoạt động."
        ],
        a: 2,
        expl: "60W là công suất định mức của bóng đèn."
    },
    
    // Câu 57
    {
        type: "multiple-choice",
        q: "Công tơ điện (máy đếm điện năng) dùng để đo đại lượng nào?",
        options: [
            "Cường độ dòng điện.",
            "Hiệu điện thế.",
            "Công suất điện.",
            "Điện năng tiêu thụ."
        ],
        a: 3,
        expl: "Công tơ điện đo điện năng tiêu thụ (kWh)."
    },
    
    // Câu 58
    {
        type: "multiple-choice",
        q: "Khi dòng điện chạy qua một đoạn mạch chỉ chứa điện trở thuần, năng lượng điện được chuyển hóa chủ yếu thành dạng năng lượng nào?",
        options: [
            "Cơ năng.",
            "Quang năng.",
            "Hóa năng.",
            "Nhiệt năng."
        ],
        a: 3,
        expl: "Trên điện trở thuần, năng lượng điện chuyển hóa thành nhiệt năng."
    },
    
    // Câu 59
    {
        type: "multiple-choice",
        q: "Trong các thiết bị sau, thiết bị nào biến đổi điện năng thành cơ năng?",
        options: [
            "Bóng đèn.",
            "Bếp điện.",
            "Quạt điện.",
            "Bàn là."
        ],
        a: 2,
        expl: "Quạt điện biến đổi điện năng thành cơ năng (quay)."
    },
    
    // Câu 60
    {
        type: "multiple-choice",
        q: "1 kWh tương đương với bao nhiêu Jun?",
        options: [
            "1000 J",
            "3600 J",
            "36000 J",
            "3,6.10⁶ J"
        ],
        a: 3,
        expl: "1 kWh = 1000 W × 3600 s = 3,6.10⁶ J."
    },
    
    // ============================================
    // CÂU 61-75: GHÉP ĐIỆN TRỞ VÀ MẠCH ĐIỆN
    // ============================================
    
    // Câu 61
    {
        type: "multiple-choice",
        q: "Khi mắc các điện trở nối tiếp, đại lượng nào sau đây là như nhau đối với tất cả các điện trở?",
        options: [
            "Hiệu điện thế.",
            "Cường độ dòng điện.",
            "Công suất tiêu thụ.",
            "Nhiệt lượng tỏa ra."
        ],
        a: 1,
        expl: "Mạch nối tiếp có cường độ dòng điện bằng nhau qua các điện trở."
    },
    
    // Câu 62
    {
        type: "multiple-choice",
        q: "Khi mắc các điện trở song song, đại lượng nào sau đây là như nhau đối với tất cả các điện trở?",
        options: [
            "Cường độ dòng điện.",
            "Công suất tiêu thụ.",
            "Hiệu điện thế.",
            "Nhiệt lượng tỏa ra."
        ],
        a: 2,
        expl: "Mạch song song có hiệu điện thế bằng nhau trên các nhánh."
    },
    
    // Câu 63
    {
        type: "multiple-choice",
        q: "Khi mắc hai điện trở giống nhau song song, điện trở tương đương của đoạn mạch so với mỗi điện trở thành phần là:",
        options: [
            "Bằng nhau.",
            "Lớn gấp đôi.",
            "Bằng một nửa.",
            "Lớn gấp bốn."
        ],
        a: 2,
        expl: "Hai điện trở giống nhau mắc song song: $R_{td} = \\frac{R}{2}$."
    },
    
    // Câu 64
    {
        type: "multiple-choice",
        q: "Khi mắc hai điện trở giống nhau nối tiếp, điện trở tương đương của đoạn mạch so với mỗi điện trở thành phần là:",
        options: [
            "Bằng nhau.",
            "Bằng một nửa.",
            "Lớn gấp đôi.",
            "Lớn gấp bốn."
        ],
        a: 2,
        expl: "Hai điện trở giống nhau mắc nối tiếp: $R_{td} = 2R$."
    },
    
    // Câu 65
    {
        type: "multiple-choice",
        q: "Trong mạch điện song song, cường độ dòng điện chính (dòng điện tổng) có giá trị như thế nào so với các dòng điện nhánh?",
        options: [
            "Bằng dòng điện nhánh lớn nhất.",
            "Bằng dòng điện nhánh nhỏ nhất.",
            "Bằng tổng các dòng điện nhánh.",
            "Bằng trung bình cộng các dòng điện nhánh."
        ],
        a: 2,
        expl: "Mạch song song: $I = I_1 + I_2 + I_3 + ...$."
    },
    
    // Câu 66
    {
        type: "multiple-choice",
        q: "Trong mạch điện nối tiếp, hiệu điện thế tổng (giữa hai đầu đoạn mạch) có giá trị như thế nào so với các hiệu điện thế thành phần?",
        options: [
            "Bằng hiệu điện thế lớn nhất.",
            "Bằng hiệu điện thế nhỏ nhất.",
            "Bằng tổng các hiệu điện thế thành phần.",
            "Bằng trung bình cộng các hiệu điện thế thành phần."
        ],
        a: 2,
        expl: "Mạch nối tiếp: $U = U_1 + U_2 + U_3 + ...$."
    },
    
    // Câu 67
    {
        type: "multiple-choice",
        q: "Khi một điện trở trong mạch song song bị đứt (hở mạch), các điện trở còn lại có hoạt động không?",
        options: [
            "Không hoạt động.",
            "Vẫn hoạt động bình thường.",
            "Hoạt động yếu hơn.",
            "Có thể cháy hỏng."
        ],
        a: 1,
        expl: "Mạch song song: khi một nhánh hở, các nhánh khác vẫn hoạt động bình thường."
    },
    
    // Câu 68
    {
        type: "multiple-choice",
        q: "Khi một điện trở trong mạch nối tiếp bị đứt (hở mạch), hiện tượng gì xảy ra?",
        options: [
            "Các điện trở khác vẫn hoạt động.",
            "Dòng điện giảm một nửa.",
            "Cả mạch không có dòng điện.",
            "Dòng điện tăng gấp đôi."
        ],
        a: 2,
        expl: "Mạch nối tiếp: khi một vị trí hở, dòng điện bị ngắt, toàn mạch không hoạt động."
    },
    
    // Câu 69
    {
        type: "multiple-choice",
        q: "Các thiết bị điện trong gia đình thường được mắc với nhau theo cách nào?",
        options: [
            "Nối tiếp.",
            "Song song.",
            "Hỗn hợp.",
            "Tùy theo từng loại thiết bị."
        ],
        a: 1,
        expl: "Các thiết bị điện trong gia đình được mắc song song để hoạt động độc lập."
    },
    
    // Câu 70
    {
        type: "multiple-choice",
        q: "Công tắc điện trong mạch điện được mắc như thế nào với thiết bị cần điều khiển?",
        options: [
            "Song song.",
            "Nối tiếp.",
            "Nối đất.",
            "Có thể mắc tùy ý."
        ],
        a: 1,
        expl: "Công tắc được mắc nối tiếp với thiết bị để điều khiển dòng điện."
    },
    
    // Câu 71
    {
        type: "multiple-choice",
        q: "Khi thêm một điện trở song song vào mạch, điện trở tương đương của toàn mạch thay đổi như thế nào?",
        options: [
            "Tăng lên.",
            "Giảm xuống.",
            "Không đổi.",
            "Tăng rồi giảm."
        ],
        a: 1,
        expl: "Thêm nhánh song song làm điện trở tương đương giảm."
    },
    
    // Câu 72
    {
        type: "multiple-choice",
        q: "Khi thêm một điện trở nối tiếp vào mạch, điện trở tương đương của toàn mạch thay đổi như thế nào?",
        options: [
            "Giảm xuống.",
            "Không đổi.",
            "Tăng lên.",
            "Giảm rồi tăng."
        ],
        a: 2,
        expl: "Thêm điện trở nối tiếp làm điện trở tương đương tăng."
    },
    
    // Câu 73
    {
        type: "multiple-choice",
        q: "Để đo cường độ dòng điện chạy qua một thiết bị, ampe kế được mắc như thế nào?",
        options: [
            "Song song với thiết bị.",
            "Nối tiếp với thiết bị.",
            "Nối tiếp với nguồn.",
            "Song song với nguồn."
        ],
        a: 1,
        expl: "Ampe kế mắc nối tiếp với thiết bị cần đo dòng điện."
    },
    
    // Câu 74
    {
        type: "multiple-choice",
        q: "Để đo hiệu điện thế giữa hai đầu một thiết bị, vôn kế được mắc như thế nào?",
        options: [
            "Nối tiếp với thiết bị.",
            "Song song với thiết bị.",
            "Nối tiếp với nguồn.",
            "Bất kỳ vị trí nào."
        ],
        a: 1,
        expl: "Vôn kế mắc song song với thiết bị cần đo hiệu điện thế."
    },
    
    // Câu 75
    {
        type: "multiple-choice",
        q: "Ampe kế lý tưởng (đo chính xác) cần có điện trở như thế nào?",
        options: [
            "Rất lớn.",
            "Rất nhỏ.",
            "Bằng điện trở của mạch.",
            "Bằng 0."
        ],
        a: 1,
        expl: "Ampe kế lý tưởng có điện trở rất nhỏ để không ảnh hưởng đến dòng điện cần đo."
    },
    
    // ============================================
    // CÂU 76-80: ỨNG DỤNG VÀ AN TOÀN ĐIỆN
    // ============================================
    
    // Câu 76
    {
        type: "multiple-choice",
        q: "Cầu chì hoạt động dựa trên nguyên lý nào?",
        options: [
            "Hiệu ứng nhiệt điện.",
            "Hiệu ứng Joule (tỏa nhiệt).",
            "Định luật Ohm.",
            "Suất điện động cảm ứng."
        ],
        a: 1,
        expl: "Cầu chì hoạt động dựa trên hiệu ứng Joule: dòng điện quá lớn làm dây chì nóng chảy, ngắt mạch."
    },
    
    // Câu 77
    {
        type: "multiple-choice",
        q: "Nguy cơ lớn nhất khi dây dẫn điện bị quá tải (dòng điện quá lớn) là gì?",
        options: [
            "Giảm hiệu suất sử dụng điện.",
            "Tăng điện trở dây dẫn.",
            "Cháy nổ do tỏa nhiệt quá mức.",
            "Giảm điện áp nguồn."
        ],
        a: 2,
        expl: "Dây dẫn quá tải tỏa nhiệt lớn, có thể gây cháy nổ, nguy hiểm."
    },
    
    // Câu 78
    {
        type: "multiple-choice",
        q: "Khi chọn dây dẫn điện cho gia đình, yếu tố quan trọng nhất cần quan tâm là:",
        options: [
            "Màu sắc dây dẫn.",
            "Chiều dài dây dẫn.",
            "Tiết diện dây và dòng điện cho phép.",
            "Giá thành của dây."
        ],
        a: 2,
        expl: "Tiết diện dây phải phù hợp với dòng điện cho phép để tránh quá tải và cháy nổ."
    },
    
    // Câu 79
    {
        type: "multiple-choice",
        q: "Siêu dẫn là hiện tượng:",
        options: [
            "Điện trở của vật liệu bằng 0 ở nhiệt độ đủ thấp.",
            "Điện trở của vật liệu rất lớn ở nhiệt độ thường.",
            "Vật liệu dẫn điện tốt ở mọi nhiệt độ.",
            "Vật liệu cách điện ở nhiệt độ thấp."
        ],
        a: 0,
        expl: "Siêu dẫn là hiện tượng điện trở của vật liệu bằng 0 khi nhiệt độ dưới nhiệt độ tới hạn."
    },
    
    // Câu 80
    {
        type: "multiple-choice",
        q: "Khi sử dụng điện, để đảm bảo an toàn, ta cần:",
        options: [
            "Sử dụng dây dẫn có tiết diện nhỏ để tiết kiệm.",
            "Không sử dụng cầu chì để tránh mất điện.",
            "Ngắt nguồn điện trước khi sửa chữa thiết bị.",
            "Sử dụng nhiều thiết bị cùng lúc trên một ổ cắm."
        ],
        a: 2,
        expl: "Ngắt nguồn điện trước khi sửa chữa là biện pháp an toàn quan trọng nhất."
    }
];