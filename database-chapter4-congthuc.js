// ==============================================
// FILE: database-chapter4-congthuc.js
// ==============================================
// Ngân hàng câu hỏi trắc nghiệm công thức chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// 40 câu trắc nghiệm nhiều lựa chọn về công thức và tính toán
// ==============================================

window.questionsChapter4CongThuc = [
    // ============================================
    // CÂU 1-10: CÔNG THỨC CƠ BẢN VỀ DÒNG ĐIỆN
    // ============================================
    
    // Câu 1
    {
        type: "multiple-choice",
        q: "Một dòng điện có cường độ 3A chạy qua dây dẫn trong 2 phút. Điện lượng dịch chuyển qua tiết diện dây dẫn là:",
        options: ["360 C", "180 C", "720 C", "90 C"],
        a: 0,
        expl: "q = I.t = 3A × 120s = 360 C"
    },
    
    // Câu 2
    {
        type: "multiple-choice",
        q: "Trong 30 giây có 24 C điện lượng dịch chuyển qua tiết diện dây dẫn. Cường độ dòng điện là:",
        options: ["0,8 A", "1,2 A", "0,6 A", "1,5 A"],
        a: 0,
        expl: "I = q/t = 24/30 = 0,8 A"
    },
    
    // Câu 3
    {
        type: "multiple-choice",
        q: "Số electron dịch chuyển qua tiết diện dây dẫn trong 1 phút khi có dòng điện 2A là:",
        options: ["7,5×10²⁰ electron", "1,25×10²⁰ electron", "3,75×10²⁰ electron", "5,0×10²⁰ electron"],
        a: 0,
        expl: "q = I.t = 2×60 = 120 C; N = q/e = 120/(1,6×10⁻¹⁹) = 7,5×10²⁰ electron"
    },
    
    // Câu 4
    {
        type: "multiple-choice",
        q: "Một dây dẫn có tiết diện 2mm², mật độ electron 8,5×10²⁸ electron/m³. Khi có dòng điện 1,7A, vận tốc trôi electron là:",
        options: ["0,125 mm/s", "0,25 mm/s", "0,0625 mm/s", "0,5 mm/s"],
        a: 0,
        expl: "v = I/(nSe) = 1,7/(8,5×10²⁸ × 2×10⁻⁶ × 1,6×10⁻¹⁹) = 0,125×10⁻³ m/s = 0,125 mm/s"
    },
    
    // Câu 5
    {
        type: "multiple-choice",
        q: "Khi có dòng điện 3A chạy qua dây dẫn trong 10 giây, số electron dịch chuyển là:",
        options: ["1,875×10²⁰ electron", "3,75×10²⁰ electron", "9,375×10¹⁹ electron", "7,5×10²⁰ electron"],
        a: 0,
        expl: "q = I.t = 3×10 = 30 C; N = q/e = 30/(1,6×10⁻¹⁹) = 1,875×10²⁰ electron"
    },
    
    // Câu 6
    {
        type: "multiple-choice",
        q: "Dây dẫn có tiết diện 1mm², mật độ electron 8,5×10²⁸ electron/m³, vận tốc trôi electron 0,1mm/s. Cường độ dòng điện là:",
        options: ["1,36 A", "0,68 A", "2,72 A", "0,34 A"],
        a: 0,
        expl: "I = nSve = 8,5×10²⁸ × 1×10⁻⁶ × 0,1×10⁻³ × 1,6×10⁻¹⁹ = 1,36 A"
    },
    
    // Câu 7
    {
        type: "multiple-choice",
        q: "Trong 5 phút, có 4,8×10²¹ electron dịch chuyển qua tiết diện dây dẫn. Cường độ dòng điện là:",
        options: ["2,56 A", "1,28 A", "5,12 A", "0,64 A"],
        a: 0,
        expl: "q = N.e = 4,8×10²¹ × 1,6×10⁻¹⁹ = 768 C; I = q/t = 768/300 = 2,56 A"
    },
    
    // Câu 8
    {
        type: "multiple-choice",
        q: "Dòng điện 1,5A chạy qua dây dẫn trong 3 phút. Số electron dịch chuyển là:",
        options: ["1,6875×10²¹ electron", "8,4375×10²⁰ electron", "3,375×10²¹ electron", "4,21875×10²⁰ electron"],
        a: 0,
        expl: "q = I.t = 1,5×180 = 270 C; N = q/e = 270/(1,6×10⁻¹⁹) = 1,6875×10²¹ electron"
    },
    
    // Câu 9
    {
        type: "multiple-choice",
        q: "Dây dẫn có vận tốc trôi electron 0,2mm/s, tiết diện 1,5mm², mật độ electron 8,5×10²⁸ electron/m³. Cường độ dòng điện là:",
        options: ["4,08 A", "2,04 A", "8,16 A", "1,02 A"],
        a: 0,
        expl: "I = nSve = 8,5×10²⁸ × 1,5×10⁻⁶ × 0,2×10⁻³ × 1,6×10⁻¹⁹ = 4,08 A"
    },
    
    // Câu 10
    {
        type: "multiple-choice",
        q: "Để có cường độ dòng điện 2A trong dây dẫn có tiết diện 2mm², mật độ electron 8,5×10²⁸ electron/m³, vận tốc trôi electron cần là:",
        options: ["0,147 mm/s", "0,0735 mm/s", "0,294 mm/s", "0,03675 mm/s"],
        a: 0,
        expl: "v = I/(nSe) = 2/(8,5×10²⁸ × 2×10⁻⁶ × 1,6×10⁻¹⁹) = 0,147×10⁻³ m/s = 0,147 mm/s"
    },
    
    // ============================================
    // CÂU 11-20: ĐIỆN TRỞ VÀ ĐỊNH LUẬT OHM
    // ============================================
    
    // Câu 11
    {
        type: "multiple-choice",
        q: "Dây dẫn đồng dài 100m, tiết diện 1mm². Điện trở của dây là (ρ_đồng = 1,7×10⁻⁸ Ωm):",
        options: ["1,7 Ω", "0,17 Ω", "17 Ω", "0,017 Ω"],
        a: 0,
        expl: "R = ρ.l/S = 1,7×10⁻⁸ × 100/(1×10⁻⁶) = 1,7 Ω"
    },
    
    // Câu 12
    {
        type: "multiple-choice",
        q: "Dây dẫn nhôm dài 50m, tiết diện 2mm². Điện trở của dây là (ρ_nhôm = 2,8×10⁻⁸ Ωm):",
        options: ["0,7 Ω", "1,4 Ω", "0,35 Ω", "2,8 Ω"],
        a: 0,
        expl: "R = ρ.l/S = 2,8×10⁻⁸ × 50/(2×10⁻⁶) = 0,7 Ω"
    },
    
    // Câu 13
    {
        type: "multiple-choice",
        q: "Khi đặt hiệu điện thế 12V vào hai đầu dây dẫn có điện trở 3Ω, cường độ dòng điện là:",
        options: ["4 A", "0,25 A", "36 A", "9 A"],
        a: 0,
        expl: "I = U/R = 12/3 = 4 A"
    },
    
    // Câu 14
    {
        type: "multiple-choice",
        q: "Dây dẫn có điện trở 5Ω khi có dòng điện 2A chạy qua. Hiệu điện thế hai đầu dây là:",
        options: ["10 V", "2,5 V", "20 V", "0,4 V"],
        a: 0,
        expl: "U = I.R = 2×5 = 10 V"
    },
    
    // Câu 15
    {
        type: "multiple-choice",
        q: "Dây dẫn có điện trở 8Ω ở 20°C. Hệ số nhiệt điện trở α = 0,004 K⁻¹. Điện trở ở 50°C là:",
        options: ["9,6 Ω", "10,4 Ω", "8,96 Ω", "7,04 Ω"],
        a: 0,
        expl: "R_t = R₀[1 + α(t-t₀)] = 8[1 + 0,004×30] = 8×1,12 = 8,96 Ω"
    },
    
    // Câu 16
    {
        type: "multiple-choice",
        q: "Dây dẫn có điện trở 10Ω ở 0°C, điện trở 12Ω ở 50°C. Hệ số nhiệt điện trở của vật liệu là:",
        options: ["0,004 K⁻¹", "0,002 K⁻¹", "0,006 K⁻¹", "0,008 K⁻¹"],
        a: 0,
        expl: "α = (R_t - R₀)/(R₀×Δt) = (12-10)/(10×50) = 2/500 = 0,004 K⁻¹"
    },
    
    // Câu 17
    {
        type: "multiple-choice",
        q: "Hai điện trở 6Ω và 12Ω mắc nối tiếp. Điện trở tương đương là:",
        options: ["18 Ω", "8 Ω", "4 Ω", "72 Ω"],
        a: 0,
        expl: "R = R₁ + R₂ = 6 + 12 = 18 Ω"
    },
    
    // Câu 18
    {
        type: "multiple-choice",
        q: "Hai điện trở 6Ω và 12Ω mắc song song. Điện trở tương đương là:",
        options: ["4 Ω", "18 Ω", "8 Ω", "3 Ω"],
        a: 0,
        expl: "1/R = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 → R = 12/3 = 4 Ω"
    },
    
    // Câu 19
    {
        type: "multiple-choice",
        q: "Ba điện trở giống nhau 9Ω mắc song song. Điện trở tương đương là:",
        options: ["3 Ω", "9 Ω", "27 Ω", "1 Ω"],
        a: 0,
        expl: "R = R₀/n = 9/3 = 3 Ω"
    },
    
    // Câu 20
    {
        type: "multiple-choice",
        q: "Ba điện trở giống nhau 3Ω mắc nối tiếp. Điện trở tương đương là:",
        options: ["9 Ω", "3 Ω", "1 Ω", "6 Ω"],
        a: 0,
        expl: "R = n.R₀ = 3×3 = 9 Ω"
    },
    
    // ============================================
    // CÂU 21-30: NGUỒN ĐIỆN VÀ MẠCH KÍN
    // ============================================
    
    // Câu 21
    {
        type: "multiple-choice",
        q: "Nguồn điện có suất điện động 12V, điện trở trong 1Ω mắc với điện trở ngoài 5Ω. Cường độ dòng điện trong mạch là:",
        options: ["2 A", "12 A", "2,4 A", "1,7 A"],
        a: 0,
        expl: "I = ε/(R+r) = 12/(5+1) = 2 A"
    },
    
    // Câu 22
    {
        type: "multiple-choice",
        q: "Nguồn điện có suất điện động 6V, điện trở trong 0,5Ω. Khi có dòng điện 1A chạy qua, hiệu điện thế hai cực là:",
        options: ["5,5 V", "6 V", "6,5 V", "4,5 V"],
        a: 0,
        expl: "U = ε - I.r = 6 - 1×0,5 = 5,5 V"
    },
    
    // Câu 23
    {
        type: "multiple-choice",
        q: "Khi nối tắt nguồn điện có suất điện động 9V, điện trở trong 0,5Ω, cường độ dòng điện là:",
        options: ["18 A", "9 A", "4,5 A", "0,056 A"],
        a: 0,
        expl: "Khi nối tắt: I = ε/r = 9/0,5 = 18 A"
    },
    
    // Câu 24
    {
        type: "multiple-choice",
        q: "Nguồn điện có ε = 24V, r = 2Ω mắc với R = 10Ω. Hiệu suất của nguồn là:",
        options: ["83,3%", "100%", "50%", "16,7%"],
        a: 0,
        expl: "I = 24/(10+2) = 2A; U = 24 - 2×2 = 20V; η = U/ε = 20/24 = 0,833 = 83,3%"
    },
    
    // Câu 25
    {
        type: "multiple-choice",
        q: "Hai nguồn điện giống nhau ε = 6V, r = 1Ω mắc nối tiếp. Suất điện động và điện trở tổng là:",
        options: ["ε_b = 12V, r_b = 2Ω", "ε_b = 6V, r_b = 2Ω", "ε_b = 12V, r_b = 1Ω", "ε_b = 6V, r_b = 1Ω"],
        a: 0,
        expl: "Ghép nối tiếp: ε_b = ε₁ + ε₂ = 12V; r_b = r₁ + r₂ = 2Ω"
    },
    
    // Câu 26
    {
        type: "multiple-choice",
        q: "Hai nguồn điện giống nhau ε = 4V, r = 0,5Ω mắc song song. Suất điện động và điện trở tổng là:",
        options: ["ε_b = 4V, r_b = 0,25Ω", "ε_b = 8V, r_b = 0,25Ω", "ε_b = 4V, r_b = 1Ω", "ε_b = 2V, r_b = 0,5Ω"],
        a: 0,
        expl: "Ghép song song giống nhau: ε_b = ε = 4V; r_b = r/2 = 0,25Ω"
    },
    
    // Câu 27
    {
        type: "multiple-choice",
        q: "Nguồn điện có ε = 15V, khi mắc với R = 4Ω có dòng điện 2,5A. Điện trở trong của nguồn là:",
        options: ["2 Ω", "1 Ω", "3 Ω", "0,5 Ω"],
        a: 0,
        expl: "I = ε/(R+r) → 2,5 = 15/(4+r) → 4+r = 6 → r = 2Ω"
    },
    
    // Câu 28
    {
        type: "multiple-choice",
        q: "Nguồn điện có r = 1Ω, khi mắc với R = 9Ω có hiệu điện thế hai cực 18V. Suất điện động của nguồn là:",
        options: ["20 V", "18 V", "16 V", "22 V"],
        a: 0,
        expl: "I = U/R = 18/9 = 2A; ε = U + I.r = 18 + 2×1 = 20V"
    },
    
    // Câu 29
    {
        type: "multiple-choice",
        q: "Mạch gồm nguồn ε = 12V, r = 1Ω và hai điện trở R₁ = 3Ω, R₂ = 6Ω mắc nối tiếp. Dòng điện trong mạch là:",
        options: ["1,33 A", "2 A", "1,5 A", "1 A"],
        a: 0,
        expl: "R = R₁ + R₂ = 3 + 6 = 9Ω; I = ε/(R+r) = 12/(9+1) = 1,2A"
    },
    
    // Câu 30
    {
        type: "multiple-choice",
        q: "Mạch gồm nguồn ε = 10V, r = 0,5Ω và hai điện trở R₁ = 4Ω, R₂ = 4Ω mắc song song. Dòng điện chính là:",
        options: ["2,22 A", "2,5 A", "2 A", "1,78 A"],
        a: 0,
        expl: "R_N = (4×4)/(4+4) = 2Ω; I = ε/(R_N+r) = 10/(2+0,5) = 4A"
    },
    
    // ============================================
    // CÂU 31-40: CÔNG SUẤT VÀ ĐIỆN NĂNG
    // ============================================
    
    // Câu 31
    {
        type: "multiple-choice",
        q: "Bóng đèn ghi 220V-100W. Điện trở của đèn khi hoạt động là:",
        options: ["484 Ω", "220 Ω", "100 Ω", "2,2 Ω"],
        a: 0,
        expl: "R = U²/P = 220²/100 = 48400/100 = 484 Ω"
    },
    
    // Câu 32
    {
        type: "multiple-choice",
        q: "Bóng đèn ghi 220V-60W. Cường độ dòng điện qua đèn khi hoạt động là:",
        options: ["0,27 A", "0,5 A", "3,67 A", "1,09 A"],
        a: 0,
        expl: "I = P/U = 60/220 ≈ 0,27 A"
    },
    
    // Câu 33
    {
        type: "multiple-choice",
        q: "Điện trở 20Ω mắc với hiệu điện thế 100V. Công suất tiêu thụ là:",
        options: ["500 W", "200 W", "1000 W", "250 W"],
        a: 0,
        expl: "P = U²/R = 100²/20 = 10000/20 = 500 W"
    },
    
    // Câu 34
    {
        type: "multiple-choice",
        q: "Điện trở 10Ω có dòng điện 3A chạy qua. Công suất tiêu thụ là:",
        options: ["90 W", "30 W", "300 W", "900 W"],
        a: 0,
        expl: "P = I²R = 3²×10 = 90 W"
    },
    
    // Câu 35
    {
        type: "multiple-choice",
        q: "Bếp điện có công suất 1500W hoạt động trong 2 giờ. Điện năng tiêu thụ là:",
        options: ["3 kWh", "1500 Wh", "3000 Wh", "1,5 kWh"],
        a: 0,
        expl: "A = P.t = 1,5kW × 2h = 3 kWh"
    },
    
    // Câu 36
    {
        type: "multiple-choice",
        q: "Điện trở 5Ω có dòng điện 2A chạy qua trong 10 phút. Nhiệt lượng tỏa ra là:",
        options: ["12000 J", "7200 J", "600 J", "1200 J"],
        a: 0,
        expl: "Q = I²Rt = 2²×5×600 = 12000 J"
    },
    
    // Câu 37
    {
        type: "multiple-choice",
        q: "Nguồn điện có ε = 12V, r = 1Ω, I = 2A. Công suất của nguồn là:",
        options: ["24 W", "20 W", "4 W", "48 W"],
        a: 0,
        expl: "P_ng = ε.I = 12×2 = 24 W"
    },
    
    // Câu 38
    {
        type: "multiple-choice",
        q: "Nguồn điện có ε = 12V, r = 1Ω, I = 2A. Công suất hữu ích là:",
        options: ["20 W", "24 W", "4 W", "48 W"],
        a: 0,
        expl: "U = ε - I.r = 12 - 2×1 = 10V; P_ch = U.I = 10×2 = 20 W"
    },
    
    // Câu 39
    {
        type: "multiple-choice",
        q: "Nguồn điện có ε = 12V, r = 1Ω, I = 2A. Công suất hao phí là:",
        options: ["4 W", "20 W", "24 W", "48 W"],
        a: 0,
        expl: "P_hao = I²r = 2²×1 = 4 W"
    },
    
    // Câu 40
    {
        type: "multiple-choice",
        q: "Máy sấy tóc có công suất 1200W hoạt động 15 phút mỗi ngày. Trong 30 ngày, điện năng tiêu thụ là:",
        options: ["9 kWh", "18 kWh", "0,3 kWh", "540 kWh"],
        a: 0,
        expl: "A = P.t = 1,2kW × 0,25h/ngày × 30ngày = 9 kWh"
    }
];
