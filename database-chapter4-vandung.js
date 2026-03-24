// ==============================================
// FILE: database-chapter4-vandung.js
// ==============================================
// Ngân hàng câu hỏi bài tập vận dụng chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// Dạng bài tập trả lời ngắn (tính toán)
// ==============================================

window.questionsChapter4VanDung = [
    // ============================================
    // DẠNG 1: TÍNH CƯỜNG ĐỘ DÒNG ĐIỆN, ĐIỆN LƯỢNG, SỐ ELECTRON
    // Công thức: I = q/t; q = I.t; q = n.e
    // ============================================
    
    // Bài 1.1
    {
        type: "short-answer",
        q: "Một dòng điện không đổi chạy qua dây dẫn có cường độ 2 A. Tính điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn trong thời gian 5 giây. (Đơn vị: C)",
        answer: "10",
        expl: "q = I.t = 2 × 5 = 10 C"
    },
    
    // Bài 1.2
    {
        type: "short-answer",
        q: "Một dòng điện không đổi chạy qua dây dẫn trong 10 phút, điện lượng dịch chuyển qua tiết diện thẳng của dây là 1200 C. Tính cường độ dòng điện chạy qua dây. (Đơn vị: A)",
        answer: "2",
        expl: "t = 10 ph = 600 s; I = q/t = 1200/600 = 2 A"
    },
    
    // Bài 1.3
    {
        type: "short-answer",
        q: "Dòng điện chạy qua một dây dẫn có cường độ 0,5 A. Tính số electron dịch chuyển qua tiết diện thẳng của dây dẫn trong thời gian 1 phút. Cho e = 1,6.10⁻¹⁹ C. (Đáp án dạng a×10^b, ví dụ: 8,112×10^19)",
        answer: "1,875×10^20",
        expl: "t = 1 ph = 60 s; q = I.t = 0,5×60 = 30 C; n = q/|e| = 30/(1,6×10⁻¹⁹) = 1,875×10²⁰ electron"
    },
    
    // Bài 1.4
    {
        type: "short-answer",
        q: "Một dòng điện không đổi có cường độ 1,2 A. Hỏi trong thời gian bao lâu thì điện lượng dịch chuyển qua tiết diện thẳng của dây là 360 C? (Đơn vị: giây)",
        answer: "300",
        expl: "t = q/I = 360/1,2 = 300 s"
    },
    
    // Bài 1.5
    {
        type: "short-answer",
        q: "Trong dây dẫn kim loại, dòng điện được tạo thành do các electron tự do dịch chuyển có hướng. Biết cường độ dòng điện chạy qua dây là 0,8 A. Tính số electron đi qua tiết diện thẳng của dây trong 2 phút 30 giây. Cho e = 1,6.10⁻¹⁹ C. (Đáp án dạng a×10^b, ví dụ: 7,5×10^20)",
        answer: "7,5×10^20",
        expl: "t = 2 ph 30 s = 150 s; q = I.t = 0,8×150 = 120 C; n = q/|e| = 120/(1,6×10⁻¹⁹) = 7,5×10²⁰ electron"
    },
    
    // ============================================
    // DẠNG 2: TÍNH ĐIỆN TRỞ CỦA DÂY DẪN
    // Công thức: R = ρ.l/S; S = πr² = πd²/4
    // ============================================
    
    // Bài 2.1
    {
        type: "short-answer",
        q: "Một dây dẫn bằng đồng có chiều dài 10 m, tiết diện 2 mm². Biết điện trở suất của đồng là ρ = 1,7.10⁻⁸ Ω.m. Tính điện trở của dây dẫn. (Đơn vị: Ω)",
        answer: "0,085",
        expl: "S = 2 mm² = 2×10⁻⁶ m²; R = ρ.l/S = 1,7×10⁻⁸ × 10/(2×10⁻⁶) = 0,085 Ω"
    },
    
    // Bài 2.2
    {
        type: "short-answer",
        q: "Một dây dẫn bằng nhôm có chiều dài 50 m, điện trở suất ρ = 2,8.10⁻⁸ Ω.m, điện trở của dây là 0,7 Ω. Tính tiết diện của dây dẫn. (Đơn vị: mm²)",
        answer: "2",
        expl: "S = ρ.l/R = 2,8×10⁻⁸ × 50/0,7 = 2×10⁻⁶ m² = 2 mm²"
    },
    
    // Bài 2.3
    {
        type: "short-answer",
        q: "Một dây dẫn bằng constantan có chiều dài 20 m, đường kính tiết diện 1 mm. Biết điện trở suất của constantan là 0,5.10⁻⁶ Ω.m. Tính điện trở của dây dẫn. Lấy π = 3,14. (Đơn vị: Ω, làm tròn đến 2 chữ số thập phân)",
        answer: "12,74",
        expl: "d = 1 mm = 10⁻³ m; S = πd²/4 = 3,14×(10⁻³)²/4 ≈ 7,85×10⁻⁷ m²; R = ρ.l/S = 0,5×10⁻⁶ × 20/(7,85×10⁻⁷) ≈ 12,74 Ω"
    },
    
    // Bài 2.4
    {
        type: "short-answer",
        q: "Một dây dẫn hình trụ có điện trở 10 Ω, chiều dài 5 m, đường kính tiết diện 0,5 mm. Tính điện trở suất của vật liệu làm dây. Lấy π = 3,14. (Đơn vị: Ω.m, viết dạng a×10^-b, ví dụ: 3,92×10^-7)",
        answer: "3,92×10^-7",
        expl: "d = 0,5 mm = 5×10⁻⁴ m; S = πd²/4 = 3,14×(5×10⁻⁴)²/4 ≈ 1,96×10⁻⁷ m²; ρ = R.S/l = 10 × 1,96×10⁻⁷ / 5 = 3,92×10⁻⁷ Ω.m"
    },
    
    // Bài 2.5
    {
        type: "short-answer",
        q: "Một dây dẫn bằng đồng có điện trở 5 Ω ở nhiệt độ phòng. Người ta cắt dây thành hai đoạn bằng nhau rồi mắc song song. Tính điện trở tương đương của hai đoạn dây sau khi cắt. (Đơn vị: Ω)",
        answer: "1,25",
        expl: "Ban đầu R = 5 Ω, cắt làm hai đoạn bằng nhau, mỗi đoạn có R' = R/2 = 2,5 Ω. Mắc song song: R_tđ = R'/2 = 2,5/2 = 1,25 Ω"
    },
    
    // ============================================
    // DẠNG 3: ĐỊNH LUẬT ÔM CHO ĐOẠN MẠCH CHỨA ĐIỆN TRỞ THUẦN
    // Công thức: I = U/R; U = I.R; R = U/I
    // ============================================
    
    // Bài 3.1
    {
        type: "short-answer",
        q: "Đặt vào hai đầu điện trở R = 10 Ω một hiệu điện thế U = 20 V. Tính cường độ dòng điện chạy qua điện trở. (Đơn vị: A)",
        answer: "2",
        expl: "I = U/R = 20/10 = 2 A"
    },
    
    // Bài 3.2
    {
        type: "short-answer",
        q: "Một dòng điện 0,5 A chạy qua điện trở 12 Ω. Tính hiệu điện thế đặt vào hai đầu điện trở. (Đơn vị: V)",
        answer: "6",
        expl: "U = I.R = 0,5 × 12 = 6 V"
    },
    
    // Bài 3.3
    {
        type: "short-answer",
        q: "Đặt hiệu điện thế U = 12 V vào hai đầu một điện trở, đo được cường độ dòng điện là 0,4 A. Tính điện trở của đoạn mạch. (Đơn vị: Ω)",
        answer: "30",
        expl: "R = U/I = 12/0,4 = 30 Ω"
    },
    
    // Bài 3.4
    {
        type: "short-answer",
        q: "Một điện trở 15 Ω được mắc vào hiệu điện thế 9 V. Tính cường độ dòng điện chạy qua điện trở. (Đơn vị: A)",
        answer: "0,6",
        expl: "I = U/R = 9/15 = 0,6 A"
    },
    
    // Bài 3.5
    {
        type: "short-answer",
        q: "Khi đặt hiệu điện thế 12 V vào hai đầu một dây dẫn thì dòng điện chạy qua nó có cường độ 0,5 A. Nếu hiệu điện thế tăng lên 24 V thì cường độ dòng điện chạy qua dây là bao nhiêu? (Coi điện trở dây không đổi) (Đơn vị: A)",
        answer: "1",
        expl: "R = U₁/I₁ = 12/0,5 = 24 Ω; I₂ = U₂/R = 24/24 = 1 A"
    },
    
    // ============================================
    // DẠNG 4: GHÉP ĐIỆN TRỞ NỐI TIẾP, SONG SONG
    // Công thức: Nối tiếp: R_tđ = R₁ + R₂ + ...; Song song: 1/R_tđ = 1/R₁ + 1/R₂ + ...
    // ============================================
    
    // Bài 4.1
    {
        type: "short-answer",
        q: "Cho hai điện trở R₁ = 4 Ω, R₂ = 6 Ω mắc nối tiếp. Tính điện trở tương đương của đoạn mạch. (Đơn vị: Ω)",
        answer: "10",
        expl: "R_tđ = R₁ + R₂ = 4 + 6 = 10 Ω"
    },
    
    // Bài 4.2
    {
        type: "short-answer",
        q: "Cho hai điện trở R₁ = 3 Ω, R₂ = 6 Ω mắc song song. Tính điện trở tương đương của đoạn mạch. (Đơn vị: Ω)",
        answer: "2",
        expl: "R_tđ = (R₁×R₂)/(R₁+R₂) = (3×6)/(3+6) = 18/9 = 2 Ω"
    },
    
    // Bài 4.3
    {
        type: "short-answer",
        q: "Ba điện trở giống nhau, mỗi điện trở có giá trị 9 Ω được mắc nối tiếp. Tính điện trở tương đương. (Đơn vị: Ω)",
        answer: "27",
        expl: "R_tđ = 9 + 9 + 9 = 27 Ω"
    },
    
    // Bài 4.4
    {
        type: "short-answer",
        q: "Ba điện trở giống nhau, mỗi điện trở có giá trị 12 Ω được mắc song song. Tính điện trở tương đương. (Đơn vị: Ω)",
        answer: "4",
        expl: "R_tđ = R/n = 12/3 = 4 Ω"
    },
    
    // Bài 4.5
    {
        type: "short-answer",
        q: "Cho mạch điện gồm R₁ = 5 Ω nối tiếp với (R₂ = 10 Ω // R₃ = 10 Ω). Tính điện trở tương đương của toàn mạch. (Đơn vị: Ω)",
        answer: "10",
        expl: "R₂₃ = (10×10)/(10+10) = 5 Ω; R_tđ = R₁ + R₂₃ = 5 + 5 = 10 Ω"
    },
    
    // ============================================
    // DẠNG 5: ĐỊNH LUẬT ÔM CHO TOÀN MẠCH (MẠCH KÍN)
    // Công thức: I = ε/(R + r); U = ε - I.r
    // ============================================
    
    // Bài 5.1
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 6 V, điện trở trong 1 Ω được mắc với mạch ngoài có điện trở 5 Ω. Tính cường độ dòng điện chạy trong mạch. (Đơn vị: A)",
        answer: "1",
        expl: "I = ε/(R + r) = 6/(5 + 1) = 1 A"
    },
    
    // Bài 5.2
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 9 V, điện trở trong 0,5 Ω. Khi mạch kín, cường độ dòng điện đo được là 1,5 A. Tính điện trở mạch ngoài. (Đơn vị: Ω)",
        answer: "5,5",
        expl: "I = ε/(R + r) ⇒ R + r = ε/I = 9/1,5 = 6 Ω ⇒ R = 6 - 0,5 = 5,5 Ω"
    },
    
    // Bài 5.3
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 12 V, điện trở trong 2 Ω được nối với điện trở R = 4 Ω. Tính hiệu điện thế giữa hai cực của nguồn điện. (Đơn vị: V)",
        answer: "8",
        expl: "I = ε/(R + r) = 12/(4 + 2) = 2 A; U = ε - I.r = 12 - 2×2 = 8 V"
    },
    
    // Bài 5.4
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 6 V, điện trở trong 1 Ω. Mạch ngoài có điện trở R = 2 Ω. Tính công suất tiêu thụ trên điện trở R. (Đơn vị: W)",
        answer: "8",
        expl: "I = ε/(R + r) = 6/(2 + 1) = 2 A; P = I².R = 2² × 2 = 8 W"
    },
    
    // Bài 5.5
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 24 V, điện trở trong 2 Ω. Mạch ngoài gồm hai điện trở R₁ = 6 Ω và R₂ = 10 Ω mắc nối tiếp. Tính hiệu điện thế giữa hai đầu điện trở R₁. (Đơn vị: V, làm tròn đến 2 chữ số thập phân)",
        answer: "7,98",
        expl: "R_N = 6 + 10 = 16 Ω; I = ε/(R_N + r) = 24/(16 + 2) = 24/18 = 1,33 A; U₁ = I.R₁ = 1,33 × 6 = 7,98 V"
    },
    
    // ============================================
    // DẠNG 6: CÔNG – CÔNG SUẤT – NHIỆT LƯỢNG
    // Công thức: A = UIt = I²Rt = U²t/R; P = UI = I²R = U²/R; Q = I²Rt
    // ============================================
    
    // Bài 6.1
    {
        type: "short-answer",
        q: "Một bóng đèn có ghi 6V – 3W. Tính cường độ dòng điện định mức chạy qua đèn. (Đơn vị: A)",
        answer: "0,5",
        expl: "P = U.I ⇒ I = P/U = 3/6 = 0,5 A"
    },
    
    // Bài 6.2
    {
        type: "short-answer",
        q: "Một bếp điện có điện trở 50 Ω, cường độ dòng điện chạy qua bếp là 2 A. Tính công suất tỏa nhiệt của bếp. (Đơn vị: W)",
        answer: "200",
        expl: "P = I².R = 2² × 50 = 200 W"
    },
    
    // Bài 6.3
    {
        type: "short-answer",
        q: "Một đoạn mạch có hiệu điện thế 12 V, cường độ dòng điện 0,5 A chạy qua trong 10 phút. Tính công của dòng điện thực hiện. (Đơn vị: J)",
        answer: "3600",
        expl: "t = 10 ph = 600 s; A = U.I.t = 12 × 0,5 × 600 = 3600 J"
    },
    
    // Bài 6.4
    {
        type: "short-answer",
        q: "Một bóng đèn có ghi 220V – 100W được mắc vào hiệu điện thế 220 V. Tính điện năng tiêu thụ của đèn trong 2 giờ theo đơn vị kWh. (Đơn vị: kWh)",
        answer: "0,2",
        expl: "A = P.t = 0,1 kW × 2 h = 0,2 kWh"
    },
    
    // Bài 6.5
    {
        type: "short-answer",
        q: "Một ấm điện có ghi 220V – 1000W được sử dụng ở hiệu điện thế 220V để đun sôi 2 lít nước từ 25°C. Biết nhiệt dung riêng của nước là 4200 J/kg.K, hiệu suất của ấm là 90%. Tính thời gian đun sôi nước. (Đơn vị: giây, làm tròn đến số nguyên)",
        answer: "700",
        expl: "m = 2 kg; Q_i = m.c.Δt = 2×4200×(100-25) = 630000 J; H = Q_i/A ⇒ A = Q_i/H = 630000/0,9 = 700000 J; t = A/P = 700000/1000 = 700 s"
    },
    
    // ============================================
    // DẠNG 7: GHÉP NGUỒN ĐIỆN
    // Công thức: Nối tiếp: ε_b = ε₁ + ε₂ + ...; r_b = r₁ + r₂ + ...
    // Song song (các nguồn giống nhau): ε_b = ε; r_b = r/n
    // ============================================
    
    // Bài 7.1
    {
        type: "short-answer",
        q: "Hai nguồn điện giống nhau, mỗi nguồn có suất điện động 3 V, điện trở trong 1 Ω được ghép nối tiếp. Tính suất điện động của bộ nguồn. (Đơn vị: V)",
        answer: "6",
        expl: "ε_b = 3 + 3 = 6 V"
    },
    
    // Bài 7.2
    {
        type: "short-answer",
        q: "Hai nguồn điện giống nhau, mỗi nguồn có suất điện động 4,5 V, điện trở trong 0,5 Ω được ghép song song. Tính điện trở trong của bộ nguồn. (Đơn vị: Ω)",
        answer: "0,25",
        expl: "r_b = r/2 = 0,5/2 = 0,25 Ω"
    },
    
    // Bài 7.3
    {
        type: "short-answer",
        q: "Ba nguồn điện giống nhau, mỗi nguồn có suất điện động 2 V, điện trở trong 0,3 Ω được ghép nối tiếp. Tính suất điện động của bộ nguồn. (Đơn vị: V)",
        answer: "6",
        expl: "ε_b = 2 + 2 + 2 = 6 V"
    },
    
    // Bài 7.4
    {
        type: "short-answer",
        q: "Bốn nguồn điện giống nhau, mỗi nguồn có suất điện động 6 V, điện trở trong 2 Ω được ghép song song. Tính suất điện động của bộ nguồn. (Đơn vị: V)",
        answer: "6",
        expl: "ε_b = ε = 6 V"
    },
    
    // Bài 7.5
    {
        type: "short-answer",
        q: "Cho bộ nguồn gồm hai nguồn điện giống nhau ghép nối tiếp, mỗi nguồn có suất điện động 6 V, điện trở trong 1 Ω. Bộ nguồn được mắc với mạch ngoài gồm điện trở R = 10 Ω. Tính cường độ dòng điện chạy trong mạch. (Đơn vị: A)",
        answer: "1",
        expl: "ε_b = 6 + 6 = 12 V; r_b = 1 + 1 = 2 Ω; I = ε_b/(R + r_b) = 12/(10 + 2) = 1 A"
    },
    
    // ============================================
    // DẠNG 8: HIỆU SUẤT NGUỒN ĐIỆN
    // Công thức: H = U/ε = R/(R + r)
    // ============================================
    
    // Bài 8.1
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 12 V, hiệu điện thế giữa hai cực khi mạch kín là 10,8 V. Tính hiệu suất của nguồn điện. (Đơn vị: %)",
        answer: "90",
        expl: "H = (U/ε) × 100% = (10,8/12) × 100% = 90%"
    },
    
    // Bài 8.2
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 9 V, điện trở trong 1 Ω, mạch ngoài có điện trở 8 Ω. Tính hiệu suất của nguồn điện. (Đơn vị: %, làm tròn đến 1 chữ số thập phân)",
        answer: "88,9",
        expl: "H = R/(R + r) = 8/(8 + 1) = 8/9 ≈ 0,889 = 88,9%"
    },
    
    // Bài 8.3
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 24 V, điện trở trong 2 Ω. Khi mạch kín, hiệu suất của nguồn là 80%. Tính điện trở mạch ngoài. (Đơn vị: Ω)",
        answer: "8",
        expl: "H = R/(R + r) ⇒ 0,8 = R/(R + 2) ⇒ 0,8(R + 2) = R ⇒ 0,8R + 1,6 = R ⇒ 0,2R = 1,6 ⇒ R = 8 Ω"
    },
    
    // Bài 8.4
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 15 V, hiệu suất 75%. Tính hiệu điện thế giữa hai cực của nguồn khi mạch kín. (Đơn vị: V)",
        answer: "11,25",
        expl: "H = U/ε ⇒ U = H.ε = 0,75 × 15 = 11,25 V"
    },
    
    // Bài 8.5
    {
        type: "short-answer",
        q: "Một nguồn điện có suất điện động 12 V, điện trở trong 1 Ω được mắc với mạch ngoài gồm R₁ = 3 Ω nối tiếp R₂ = 5 Ω. Tính hiệu suất của nguồn điện. (Đơn vị: %, làm tròn đến 1 chữ số thập phân)",
        answer: "88,9",
        expl: "R_N = 3 + 5 = 8 Ω; H = R_N/(R_N + r) = 8/(8 + 1) = 8/9 ≈ 0,889 = 88,9%"
    }
];