// ==============================================
// FILE: database-chapter4-vandung.js
// ==============================================
// Ngân hàng câu hỏi bài tập vận dụng chương 4: Dòng điện không đổi
// Vật lí 11 - Chân trời sáng tạo
// Dạng bài tập trả lời ngắn
// ==============================================

window.questionsChapter4VanDung = [
    // ============================================
    // BÀI TẬP VẬN DỤNG - DẠNG TRẢ LỜI NGẮN
    // ============================================
    
    // Bài 1: Tính điện lượng và số electron
    {
        type: "short-answer",
        q: "Dòng điện không đổi có cường độ 2,5A chạy qua một dây dẫn. Tính điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn trong 3 phút. (Đơn vị: C)",
        answer: "450",
        expl: "q = I.t = 2,5A × 180s = 450 C"
    },
    
    // Bài 2: Tính số electron
    {
        type: "short-answer",
        q: "Trong 2 phút có 3×10²⁰ electron dịch chuyển qua tiết diện dây dẫn. Tính cường độ dòng điện. (Đơn vị: A, làm tròn đến 2 chữ số thập phân)",
        answer: "0,40",
        expl: "q = N.e = 3×10²⁰ × 1,6×10⁻¹⁹ = 48 C; I = q/t = 48/120 = 0,40 A"
    },
    
    // Bài 3: Tính vận tốc trôi electron
    {
        type: "short-answer",
        q: "Dây dẫn kim loại có tiết diện 1,5mm², mật độ electron tự do 8,5×10²⁸ electron/m³. Dòng điện qua dây có cường độ 3A. Tính vận tốc trôi của electron. (Đơn vị: mm/s, làm tròn đến 2 chữ số thập phân)",
        answer: "0,15",
        expl: "v = I/(nSe) = 3/(8,5×10²⁸ × 1,5×10⁻⁶ × 1,6×10⁻¹⁹) = 0,147×10⁻³ m/s ≈ 0,15 mm/s"
    },
    
    // Bài 4: Tính điện trở dây dẫn
    {
        type: "short-answer",
        q: "Một dây dẫn bằng đồng có chiều dài 200m, tiết diện 2mm². Điện trở suất của đồng là 1,7×10⁻⁸ Ωm. Tính điện trở của dây dẫn này. (Đơn vị: Ω)",
        answer: "1,7",
        expl: "R = ρ.l/S = 1,7×10⁻⁸ × 200/(2×10⁻⁶) = 1,7 Ω"
    },
    
    // Bài 5: Tính điện trở ở nhiệt độ khác
    {
        type: "short-answer",
        q: "Một dây dẫn có điện trở 5Ω ở 20°C. Biết hệ số nhiệt điện trở của vật liệu là 0,004 K⁻¹. Tính điện trở của dây dẫn ở 60°C. (Đơn vị: Ω)",
        answer: "5,8",
        expl: "R_t = R₀[1 + α(t-t₀)] = 5[1 + 0,004×40] = 5×1,16 = 5,8 Ω"
    },
    
    // Bài 6: Tính cường độ dòng điện (Định luật Ohm)
    {
        type: "short-answer",
        q: "Đặt hiệu điện thế 15V vào hai đầu dây dẫn có điện trở 3Ω. Tính cường độ dòng điện qua dây. (Đơn vị: A)",
        answer: "5",
        expl: "I = U/R = 15/3 = 5 A"
    },
    
    // Bài 7: Tính hiệu điện thế
    {
        type: "short-answer",
        q: "Dây dẫn có điện trở 8Ω, có dòng điện 1,5A chạy qua. Tính hiệu điện thế hai đầu dây. (Đơn vị: V)",
        answer: "12",
        expl: "U = I.R = 1,5×8 = 12 V"
    },
    
    // Bài 8: Tính điện trở tương đương (nối tiếp)
    {
        type: "short-answer",
        q: "Ba điện trở 2Ω, 3Ω và 5Ω mắc nối tiếp. Tính điện trở tương đương. (Đơn vị: Ω)",
        answer: "10",
        expl: "R = R₁ + R₂ + R₃ = 2 + 3 + 5 = 10 Ω"
    },
    
    // Bài 9: Tính điện trở tương đương (song song)
    {
        type: "short-answer",
        q: "Hai điện trở 6Ω và 12Ω mắc song song. Tính điện trở tương đương. (Đơn vị: Ω)",
        answer: "4",
        expl: "1/R = 1/6 + 1/12 = 3/12 → R = 12/3 = 4 Ω"
    },
    
    // Bài 10: Tính dòng điện trong mạch có nguồn
    {
        type: "short-answer",
        q: "Nguồn điện có suất điện động 12V, điện trở trong 1Ω mắc với điện trở ngoài 5Ω. Tính cường độ dòng điện trong mạch. (Đơn vị: A)",
        answer: "2",
        expl: "I = ε/(R+r) = 12/(5+1) = 2 A"
    },
    
    // Bài 11: Tính hiệu điện thế hai cực nguồn
    {
        type: "short-answer",
        q: "Nguồn điện có suất điện động 18V, điện trở trong 2Ω. Khi có dòng điện 3A chạy qua, tính hiệu điện thế hai cực nguồn. (Đơn vị: V)",
        answer: "12",
        expl: "U = ε - I.r = 18 - 3×2 = 12 V"
    },
    
    // Bài 12: Tính suất điện động
    {
        type: "short-answer",
        q: "Nguồn điện có điện trở trong 0,5Ω. Khi mắc với điện trở ngoài 9,5Ω có dòng điện 2A. Tính suất điện động của nguồn. (Đơn vị: V)",
        answer: "20",
        expl: "ε = I(R+r) = 2×(9,5+0,5) = 20 V"
    },
    
    // Bài 13: Tính điện trở trong nguồn
    {
        type: "short-answer",
        q: "Nguồn điện có suất điện động 15V. Khi mắc với điện trở ngoài 10Ω có hiệu điện thế hai cực 12V. Tính điện trở trong của nguồn. (Đơn vị: Ω)",
        answer: "2,5",
        expl: "I = U/R = 12/10 = 1,2A; r = (ε-U)/I = (15-12)/1,2 = 2,5 Ω"
    },
    
    // Bài 14: Tính công suất tiêu thụ
    {
        type: "short-answer",
        q: "Điện trở 20Ω mắc với hiệu điện thế 100V. Tính công suất tiêu thụ. (Đơn vị: W)",
        answer: "500",
        expl: "P = U²/R = 100²/20 = 500 W"
    },
    
    // Bài 15: Tính công suất (dùng I và R)
    {
        type: "short-answer",
        q: "Điện trở 8Ω có dòng điện 2,5A chạy qua. Tính công suất tiêu thụ. (Đơn vị: W)",
        answer: "50",
        expl: "P = I²R = 2,5²×8 = 50 W"
    },
    
    // Bài 16: Tính điện năng tiêu thụ
    {
        type: "short-answer",
        q: "Bóng đèn có công suất 60W hoạt động trong 5 giờ. Tính điện năng tiêu thụ. (Đơn vị: kWh)",
        answer: "0,3",
        expl: "A = P.t = 0,06kW × 5h = 0,3 kWh"
    },
    
    // Bài 17: Tính nhiệt lượng tỏa ra
    {
        type: "short-answer",
        q: "Điện trở 10Ω có dòng điện 2A chạy qua trong 5 phút. Tính nhiệt lượng tỏa ra. (Đơn vị: kJ)",
        answer: "12",
        expl: "Q = I²Rt = 2²×10×300 = 12000 J = 12 kJ"
    },
    
    // Bài 18: Tính hiệu suất nguồn
    {
        type: "short-answer",
        q: "Nguồn điện có suất điện động 20V, hiệu điện thế hai cực 16V khi hoạt động. Tính hiệu suất của nguồn. (Đơn vị: %)",
        answer: "80",
        expl: "η = U/ε × 100% = 16/20 × 100% = 80%"
    },
    
    // Bài 19: Tính điện trở bóng đèn
    {
        type: "short-answer",
        q: "Bóng đèn ghi 220V-100W. Tính điện trở của đèn khi hoạt động bình thường. (Đơn vị: Ω, làm tròn đến số nguyên)",
        answer: "484",
        expl: "R = U²/P = 220²/100 = 484 Ω"
    },
    
    // Bài 20: Tính dòng điện qua bóng đèn
    {
        type: "short-answer",
        q: "Bóng đèn ghi 220V-40W. Tính cường độ dòng điện qua đèn khi hoạt động bình thường. (Đơn vị: A, làm tròn đến 2 chữ số thập phân)",
        answer: "0,18",
        expl: "I = P/U = 40/220 ≈ 0,18 A"
    },
    
    // Bài 21: Mạch hỗn hợp - Tính điện trở tương đương
    {
        type: "short-answer",
        q: "Mạch có hai điện trở 4Ω mắc song song, sau đó mắc nối tiếp với điện trở 2Ω. Tính điện trở tương đương của mạch. (Đơn vị: Ω)",
        answer: "4",
        expl: "R_song song = (4×4)/(4+4) = 2Ω; R_tđ = 2 + 2 = 4 Ω"
    },
    
    // Bài 22: Ghép nguồn nối tiếp
    {
        type: "short-answer",
        q: "Hai nguồn điện có suất điện động 6V và 9V, điện trở trong lần lượt 1Ω và 2Ω mắc nối tiếp. Tính suất điện động tổng. (Đơn vị: V)",
        answer: "15",
        expl: "Ghép nối tiếp: ε_b = ε₁ + ε₂ = 6 + 9 = 15 V"
    },
    
    // Bài 23: Ghép nguồn song song
    {
        type: "short-answer",
        q: "Hai nguồn điện giống nhau có suất điện động 12V, điện trở trong 2Ω mắc song song. Tính điện trở trong tương đương. (Đơn vị: Ω)",
        answer: "1",
        expl: "Ghép song song giống nhau: r_b = r/2 = 2/2 = 1 Ω"
    },
    
    // Bài 24: Tính chi phí điện
    {
        type: "short-answer",
        q: "Thiết bị điện có công suất 2000W hoạt động 3 giờ mỗi ngày. Giá điện 2500 đồng/kWh. Tính tiền điện phải trả trong 30 ngày. (Đơn vị: nghìn đồng)",
        answer: "450",
        expl: "A = 2kW × 3h/ngày × 30ngày = 180 kWh; Tiền = 180 × 2500 = 450.000 đồng = 450 nghìn đồng"
    },
    
    // Bài 25: Tính chiều dài dây dẫn
    {
        type: "short-answer",
        q: "Dây dẫn đồng có điện trở 1,7Ω, tiết diện 1mm². Điện trở suất đồng là 1,7×10⁻⁸ Ωm. Tính chiều dài dây dẫn. (Đơn vị: m)",
        answer: "100",
        expl: "l = R.S/ρ = 1,7×1×10⁻⁶/(1,7×10⁻⁸) = 100 m"
    },
    
    // Bài 26: Tính tiết diện dây dẫn
    {
        type: "short-answer",
        q: "Dây dẫn đồng dài 50m có điện trở 0,85Ω. Điện trở suất đồng là 1,7×10⁻⁸ Ωm. Tính tiết diện của dây dẫn. (Đơn vị: mm²)",
        answer: "1",
        expl: "S = ρ.l/R = 1,7×10⁻⁸ × 50/0,85 = 1×10⁻⁶ m² = 1 mm²"
    },
    
    // Bài 27: Tính hệ số nhiệt điện trở
    {
        type: "short-answer",
        q: "Dây dẫn có điện resist 4Ω ở 0°C và 4,8Ω ở 100°C. Tính hệ số nhiệt điện trở của vật liệu. (Đơn vị: K⁻¹, làm tròn đến 4 chữ số thập phân)",
        answer: "0,0020",
        expl: "α = (R_t - R₀)/(R₀×Δt) = (4,8-4)/(4×100) = 0,8/400 = 0,002 K⁻¹"
    },
    
    // Bài 28: Tính dòng điện khi nối tắt
    {
        type: "short-answer",
        q: "Nguồn điện có suất điện động 12V, điện trở trong 0,2Ω. Khi nối tắt hai cực, tính cường độ dòng điện. (Đơn vị: A)",
        answer: "60",
        expl: "Khi nối tắt: I = ε/r = 12/0,2 = 60 A"
    },
    
    // Bài 29: Tính công suất tối đa
    {
        type: "short-answer",
        q: "Nguồn điện có ε = 10V, r = 2Ω. Công suất hữu ích tối đa là bao nhiêu? (Đơn vị: W)",
        answer: "12,5",
        expl: "Khi R = r, P_max = ε²/(4r) = 10²/(4×2) = 100/8 = 12,5 W"
    },
    
    // Bài 30: Tính thời gian hoạt động
    {
        type: "short-answer",
        q: "Pin 9V có dung lượng 500mAh. Cung cấp dòng điện 50mA. Tính thời gian hoạt động của pin. (Đơn vị: giờ)",
        answer: "10",
        expl: "t = Dung lượng/Dòng điện = 500mAh/50mA = 10 h"
    }
];
