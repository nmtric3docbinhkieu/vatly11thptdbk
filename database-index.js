// ==============================================
// FILE: database-index.js
// ==============================================
// File tổng hợp tất cả câu hỏi từ các chương

// Hàm lấy câu hỏi theo chương
window.getQuestionsByChapter = function(chapter, count = 50) {
    let questions = [];
    
    switch(chapter) {
        case 1:
            questions = window.questionsChapter1 || [];
            break;
        case 2:
            questions = window.questionsChapter2 || [];
            break;
        case 3:
            questions = window.questionsChapter3 || [];
            break;
        case 4:
            questions = window.questionsChapter4 || [];
            break;
        default:
            questions = window.questionsChapter3 || [];
    }
    
    // Nếu không đủ câu hỏi, tạo câu hỏi mẫu
    if (questions.length < count) {
        console.warn(`Chương ${chapter} chỉ có ${questions.length} câu, thiếu ${count - questions.length} câu`);
        // Tạo câu hỏi mẫu cho số câu còn thiếu
        for (let i = questions.length; i < count; i++) {
            questions.push({
                q: `Câu hỏi mẫu chương ${chapter} - ${i+1}`,
                options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
                a: 0,
                expl: "Đây là câu hỏi mẫu. Vui lòng cập nhật câu hỏi thực tế."
            });
        }
    }
    
    // Trộn ngẫu nhiên và lấy đủ số lượng
    return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
};

// Hàm lấy tóm tắt kiến thức theo chương
// ==============================================
// FILE: database-index.js (BẢN ĐẦY ĐỦ - ÔN TẬP CHI TIẾT)
// ==============================================

window.getChapterSummary = function(chapter) {
    const summaries = {
        1: {
            title: "DAO ĐỘNG CƠ",
            topics: [
                // BÀI 1: Mô tả dao động
                { 
                    title: "📘 BÀI 1: MÔ TẢ DAO ĐỘNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Dao động cơ:</span> Là chuyển động qua lại quanh một vị trí đặc biệt gọi là vị trí cân bằng.</p>
                            <p><span class="font-bold">• Dao động tuần hoàn:</span> Là dao động mà trạng thái chuyển động của vật được lặp lại như cũ sau những khoảng thời gian bằng nhau.</p>
                            <p><span class="font-bold">• Dao động tự do (dao động riêng):</span> Là dao động của hệ xảy ra dưới tác dụng chỉ của nội lực. Chu kì chỉ phụ thuộc đặc tính của hệ.</p>
                            <p><span class="font-bold">• Các đại lượng đặc trưng:</span></p>
                            <ul class="list-disc pl-6">
                                <li>Li độ $x$: tọa độ của vật tính từ vị trí cân bằng.</li>
                                <li>Biên độ $A$: độ lớn cực đại của li độ ($A > 0$).</li>
                                <li>Chu kì $T$: khoảng thời gian để vật thực hiện một dao động (đơn vị: giây).</li>
                                <li>Tần số $f$: số dao động vật thực hiện trong một giây ($f = 1/T$, đơn vị: Hz).</li>
                                <li>Tần số góc $\\omega$: liên hệ $\\omega = 2\\pi f = 2\\pi/T$ (rad/s).</li>
                                <li>Pha dao động $\\omega t + \\varphi$: đại lượng đặc trưng cho trạng thái của vật tại thời điểm $t$.</li>
                                <li>Pha ban đầu $\\varphi$: pha tại thời điểm $t = 0$.</li>
                            </ul>
                        </div>
                    `
                },
                
                // BÀI 2: Phương trình dao động điều hòa
                { 
                    title: "📘 BÀI 2: PHƯƠNG TRÌNH DAO ĐỘNG ĐIỀU HÒA", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Định nghĩa:</span> Dao động điều hòa là dao động tuần hoàn mà li độ của vật là một hàm cosin (hoặc sin) theo thời gian.</p>
                            <p><span class="font-bold">• Phương trình li độ:</span> $x = A\\cos(\\omega t + \\varphi)$</p>
                            <p><span class="font-bold">• Phương trình vận tốc:</span> $v = x' = -\\omega A\\sin(\\omega t + \\varphi) = \\omega A\\cos\\left(\\omega t + \\varphi + \\frac{\\pi}{2}\\right)$</p>
                            <p><span class="font-bold">• Phương trình gia tốc:</span> $a = v' = -\\omega^2 A\\cos(\\omega t + \\varphi) = -\\omega^2 x = \\omega^2 A\\cos\\left(\\omega t + \\varphi + \\pi\\right)$</p>
                            <p><span class="font-bold">• Độ lệch pha:</span></p>
                            <ul class="list-disc pl-6">
                                <li>Vận tốc sớm pha $\\pi/2$ so với li độ.</li>
                                <li>Gia tốc ngược pha với li độ.</li>
                                <li>Gia tốc sớm pha $\\pi/2$ so với vận tốc.</li>
                            </ul>
                            <p><span class="font-bold">• Giá trị cực đại:</span></p>
                            <ul class="list-disc pl-6">
                                <li>$v_{max} = \\omega A$ (tại VTCB: $x = 0$)</li>
                                <li>$a_{max} = \\omega^2 A$ (tại biên: $x = \\pm A$)</li>
                            </ul>
                            <p><span class="font-bold">• Hệ thức độc lập với thời gian:</span> $A^2 = x^2 + \\left(\\frac{v}{\\omega}\\right)^2$</p>
                        </div>
                    `
                },
                
                // BÀI 3: Năng lượng trong dao động điều hòa
                { 
                    title: "📘 BÀI 3: NĂNG LƯỢNG TRONG DAO ĐỘNG ĐIỀU HÒA", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Động năng:</span> $W_đ = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2 A^2 \\sin^2(\\omega t + \\varphi)$</p>
                            <p><span class="font-bold">• Thế năng (con lắc lò xo):</span> $W_t = \\frac{1}{2}kx^2 = \\frac{1}{2}m\\omega^2 A^2 \\cos^2(\\omega t + \\varphi)$</p>
                            <p><span class="font-bold">• Cơ năng:</span> $W = W_đ + W_t = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2$ (hằng số)</p>
                            <p><span class="font-bold">• Nhận xét:</span></p>
                            <ul class="list-disc pl-6">
                                <li>Trong quá trình dao động, động năng và thế năng biến đổi tuần hoàn với tần số góc $\\omega' = 2\\omega$, chu kì $T' = T/2$.</li>
                                <li>Tại VTCB ($x=0$): $W_t = 0$, $W_đ$ cực đại.</li>
                                <li>Tại biên ($x = \\pm A$): $W_t$ cực đại, $W_đ = 0$.</li>
                                <li>Khi $W_đ = nW_t$: $x = \\pm \\frac{A}{\\sqrt{n+1}}$, $v = \\pm \\omega A \\sqrt{\\frac{n}{n+1}}$.</li>
                                <li>Khi $W_đ = W_t$: $x = \\pm \\frac{A}{\\sqrt{2}}$, $v = \\pm \\frac{\\omega A}{\\sqrt{2}}$.</li>
                            </ul>
                        </div>
                    `
                },
                
                // BÀI 4: Con lắc lò xo
                { 
                    title: "📘 BÀI 4: CON LẮC LÒ XO", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Cấu tạo:</span> Vật nhỏ khối lượng $m$ gắn vào lò xo có độ cứng $k$, dao động dọc theo trục lò xo.</p>
                            <p><span class="font-bold">• Tần số góc:</span> $\\omega = \\sqrt{\\frac{k}{m}}$</p>
                            <p><span class="font-bold">• Chu kì:</span> $T = 2\\pi \\sqrt{\\frac{m}{k}}$</p>
                            <p><span class="font-bold">• Lực kéo về (lực hồi phục):</span> $F = -kx = -m\\omega^2 x$</p>
                            <p><span class="font-bold">• Năng lượng:</span></p>
                            <ul class="list-disc pl-6">
                                <li>Động năng: $W_đ = \\frac{1}{2}mv^2$</li>
                                <li>Thế năng đàn hồi: $W_t = \\frac{1}{2}kx^2$</li>
                                <li>Cơ năng: $W = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2$</li>
                            </ul>
                            <p><span class="font-bold">• Lực đàn hồi:</span> $F_{đh} = k\\Delta l$ (với con lắc lò xo thẳng đứng: $\\Delta l = mg/k$ tại VTCB)</p>
                        </div>
                    `
                },
                
                // BÀI 5: Con lắc đơn
                { 
                    title: "📘 BÀI 5: CON LẮC ĐƠN", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Cấu tạo:</span> Vật nhỏ khối lượng $m$ treo ở đầu sợi dây không dãn, chiều dài $l$, dao động với góc lệch nhỏ ($\\alpha \\le 10^\\circ$).</p>
                            <p><span class="font-bold">• Tần số góc:</span> $\\omega = \\sqrt{\\frac{g}{l}}$</p>
                            <p><span class="font-bold">• Chu kì:</span> $T = 2\\pi \\sqrt{\\frac{l}{g}}$</p>
                            <p><span class="font-bold">• Lực kéo về:</span> $F = -m\\frac{g}{l}s$ (với $s = l\\alpha$ là li độ cong)</p>
                            <p><span class="font-bold">• Năng lượng (góc lệch lớn):</span> $W = mgl(1-\\cos\\alpha_0)$</p>
                            <p><span class="font-bold">• Vận tốc:</span> $v = \\sqrt{2gl(\\cos\\alpha - \\cos\\alpha_0)}$</p>
                            <p><span class="font-bold">• Lực căng dây:</span> $T = mg(3\\cos\\alpha - 2\\cos\\alpha_0)$</p>
                        </div>
                    `
                },
                
                // BÀI 6: Dao động tắt dần – Dao động cưỡng bức – Hiện tượng cộng hưởng
                { 
                    title: "📘 BÀI 6: DAO ĐỘNG TẮT DẦN – CƯỠNG BỨC – CỘNG HƯỞNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Dao động tắt dần:</span> Là dao động có biên độ giảm dần theo thời gian do tác dụng của lực cản. Nguyên nhân: lực cản của môi trường làm tiêu hao năng lượng.</p>
                            <p><span class="font-bold">• Dao động duy trì:</span> Được bù năng lượng đúng bằng phần năng lượng tiêu hao sau mỗi chu kì, giữ cho biên độ không đổi.</p>
                            <p><span class="font-bold">• Dao động cưỡng bức:</span> Là dao động của vật dưới tác dụng của ngoại lực biến thiên tuần hoàn. Đặc điểm: có tần số bằng tần số của ngoại lực, biên độ phụ thuộc vào độ chênh lệch tần số và lực cản.</p>
                            <p><span class="font-bold">• Hiện tượng cộng hưởng:</span> Xảy ra khi tần số của lực cưỡng bức bằng tần số riêng của hệ ($f = f_0$). Biên độ dao động đạt giá trị cực đại.</p>
                            <p><span class="font-bold">• Ứng dụng và tác hại:</span> Cộng hưởng có lợi (hộp đàn, lò vi sóng) và có hại (làm gãy cầu, đổ nhà). Biện pháp giảm hại: tăng lực cản, thay đổi tần số riêng.</p>
                        </div>
                    `
                }
            ]
        },
        
        // CHƯƠNG 2: SÓNG CƠ
        2: {
            title: "SÓNG CƠ",
            topics: [
                // BÀI 7: Sóng cơ và sự truyền sóng
                { 
                    title: "📘 BÀI 7: SÓNG CƠ VÀ SỰ TRUYỀN SÓNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Định nghĩa:</span> Sóng cơ là dao động lan truyền trong môi trường vật chất. Khi sóng truyền, các phần tử môi trường chỉ dao động tại chỗ, không truyền đi theo sóng. Quá trình truyền sóng là quá trình truyền năng lượng.</p>
                            <p><span class="font-bold">• Phân loại:</span></p>
                            <ul class="list-disc pl-6">
                                <li><span class="font-bold">Sóng ngang:</span> Phương dao động vuông góc với phương truyền sóng. Truyền được trong chất rắn và trên bề mặt chất lỏng. Ví dụ: sóng trên mặt nước.</li>
                                <li><span class="font-bold">Sóng dọc:</span> Phương dao động trùng với phương truyền sóng. Truyền được trong chất rắn, lỏng, khí. Ví dụ: sóng âm.</li>
                            </ul>
                            <p><span class="font-bold">• Các đại lượng đặc trưng:</span></p>
                            <ul class="list-disc pl-6">
                                <li>Chu kì $T$ (s), tần số $f$ (Hz): bằng chu kì, tần số của nguồn.</li>
                                <li>Biên độ $A$: biên độ dao động của phần tử môi trường.</li>
                                <li>Bước sóng $\\lambda$ (m): quãng đường sóng truyền trong một chu kì, cũng là khoảng cách giữa hai điểm gần nhất dao động cùng pha.</li>
                                <li>Tốc độ truyền sóng $v$ (m/s): $v = \\lambda f = \\frac{\\lambda}{T}$</li>
                            </ul>
                            <p><span class="font-bold">• Phương trình sóng:</span> Giả sử nguồn tại O: $u_O = A\\cos(\\omega t)$. Tại điểm M cách O đoạn $d$: $u_M = A\\cos\\left(\\omega t - \\frac{2\\pi d}{\\lambda}\\right)$.</p>
                            <p><span class="font-bold">• Độ lệch pha:</span> $\\Delta\\varphi = \\frac{2\\pi d}{\\lambda}$.</p>
                            <ul class="list-disc pl-6">
                                <li>Cùng pha: $\\Delta\\varphi = 2k\\pi \\Rightarrow d = k\\lambda$</li>
                                <li>Ngược pha: $\\Delta\\varphi = (2k+1)\\pi \\Rightarrow d = (k + \\frac{1}{2})\\lambda$</li>
                                <li>Vuông pha: $\\Delta\\varphi = (2k+1)\\frac{\\pi}{2} \\Rightarrow d = (k + \\frac{1}{4})\\lambda$</li>
                            </ul>
                        </div>
                    `
                },
                
                // BÀI 8: Giao thoa sóng
                { 
                    title: "📘 BÀI 8: GIAO THOA SÓNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Điều kiện giao thoa:</span> Hai sóng kết hợp: cùng phương, cùng tần số, độ lệch pha không đổi theo thời gian.</p>
                            <p><span class="font-bold">• Phương trình giao thoa:</span> Tại điểm M cách hai nguồn $d_1, d_2$, dao động tổng hợp: $u_M = 2A\\cos\\left(\\pi\\frac{d_2 - d_1}{\\lambda}\\right)\\cos\\left(\\omega t - \\pi\\frac{d_1 + d_2}{\\lambda}\\right)$.</p>
                            <p><span class="font-bold">• Biên độ dao động tổng hợp:</span> $A_M = 2A\\left|\\cos\\left(\\pi\\frac{d_2 - d_1}{\\lambda}\\right)\\right|$</p>
                            <p><span class="font-bold">• Vị trí cực đại giao thoa (biên độ cực đại):</span> $d_2 - d_1 = k\\lambda$ (với $k = 0, \\pm1, \\pm2,...$)</p>
                            <p><span class="font-bold">• Vị trí cực tiểu giao thoa (biên độ cực tiểu):</span> $d_2 - d_1 = (k + \\frac{1}{2})\\lambda$</p>
                            <p><span class="font-bold">• Khoảng vân giao thoa $i$:</span> khoảng cách giữa hai cực đại (hoặc hai cực tiểu) liên tiếp trên đoạn nối hai nguồn: $i = \\frac{\\lambda}{2}$.</p>
                        </div>
                    `
                },
                
                // BÀI 9: Sóng dừng
                { 
                    title: "📘 BÀI 9: SÓNG DỪNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Định nghĩa:</span> Sóng dừng là sóng có các nút và bụng cố định trong không gian, do sự giao thoa của sóng tới và sóng phản xạ.</p>
                            <p><span class="font-bold">• Nút sóng:</span> điểm luôn đứng yên. <span class="font-bold">Bụng sóng:</span> điểm dao động với biên độ cực đại.</p>
                            <p><span class="font-bold">• Khoảng cách:</span></p>
                            <ul class="list-disc pl-6">
                                <li>Giữa hai nút liên tiếp (hoặc hai bụng liên tiếp): $\\lambda/2$</li>
                                <li>Giữa một nút và một bụng liên tiếp: $\\lambda/4$</li>
                            </ul>
                            <p><span class="font-bold">• Điều kiện có sóng dừng:</span></p>
                            <ul class="list-disc pl-6">
                                <li><span class="font-bold">Hai đầu cố định (nút ở hai đầu):</span> $l = k\\frac{\\lambda}{2}$ ($k$ = 1,2,3...). Số bụng = $k$, số nút = $k+1$.</li>
                                <li><span class="font-bold">Một đầu cố định, một đầu tự do (nút ở đầu cố định, bụng ở đầu tự do):</span> $l = (2k+1)\\frac{\\lambda}{4}$ ($k$ = 0,1,2...). Số bụng = số nút = $k+1$.</li>
                            </ul>
                            <p><span class="font-bold">• Đặc điểm:</span> Biên độ dao động của bụng là $2A$. Tại điểm phản xạ cố định, sóng phản xạ ngược pha với sóng tới.</p>
                        </div>
                    `
                }
            ]
        },
        
        // CHƯƠNG 3: ĐIỆN TRƯỜNG
        3: {
            title: "ĐIỆN TRƯỜNG",
            topics: [
                // BÀI 10: Điện tích – Định luật Coulomb
                { 
                    title: "📘 BÀI 10: ĐIỆN TÍCH – ĐỊNH LUẬT COULOMB", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Sự nhiễm điện:</span> Vật có thể bị nhiễm điện do cọ xát, tiếp xúc hoặc hưởng ứng. Điện tích có hai loại: dương (+) và âm (-). Các điện tích cùng dấu đẩy nhau, trái dấu hút nhau.</p>
                            <p><span class="font-bold">• Định luật Coulomb:</span> Lực tương tác giữa hai điện tích điểm $q_1, q_2$ đặt cách nhau khoảng $r$ trong môi trường có hằng số điện môi $\\varepsilon$:</p>
                            <p class="text-center">$F = k\\frac{|q_1q_2|}{\\varepsilon r^2}$</p>
                            <p>với $k = 9.10^9 \\, Nm^2/C^2$ (hằng số Coulomb).</p>
                            <p><span class="font-bold">• Đơn vị điện tích:</span> Coulomb (C). Điện tích nguyên tố: $e = 1,6.10^{-19} C$. Electron mang điện $-e$, proton mang điện $+e$.</p>
                            <p><span class="font-bold">• Hằng số điện môi $\\varepsilon$:</span> Đặc trưng cho tính cách điện của môi trường. $\\varepsilon \\ge 1$, với chân không $\\varepsilon = 1$.</p>
                            <p><span class="font-bold">• Thuyết electron:</span> Electron có thể di chuyển từ vật này sang vật khác, làm vật nhiễm điện âm (thừa e) hoặc dương (thiếu e).</p>
                        </div>
                    `
                },
                
                // BÀI 11: Điện trường
                { 
                    title: "📘 BÀI 11: ĐIỆN TRƯỜNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Khái niệm:</span> Điện trường là môi trường vật chất tồn tại xung quanh điện tích và tác dụng lực lên điện tích khác đặt trong nó.</p>
                            <p><span class="font-bold">• Cường độ điện trường $\\vec{E}$:</span> Đặc trưng cho điện trường về mặt tác dụng lực. $\\vec{E} = \\frac{\\vec{F}}{q}$ (đơn vị: V/m hoặc N/C).</p>
                            <p><span class="font-bold">• Cường độ điện trường của điện tích điểm Q:</span> $E = k\\frac{|Q|}{\\varepsilon r^2}$, hướng ra xa Q nếu Q > 0, hướng vào Q nếu Q < 0.</p>
                            <p><span class="font-bold">• Nguyên lí chồng chất điện trường:</span> $\\vec{E} = \\vec{E_1} + \\vec{E_2} + ...$</p>
                            <p><span class="font-bold">• Đường sức điện:</span> Là đường mà tiếp tuyến tại mỗi điểm trùng với vectơ cường độ điện trường tại điểm đó. Qua mỗi điểm chỉ có một đường sức. Đường sức điện xuất phát từ điện tích dương, kết thúc ở điện tích âm. Nơi E lớn thì đường sức dày.</p>
                            <p><span class="font-bold">• Điện trường đều:</span> Có vectơ cường độ điện trường tại mọi điểm đều bằng nhau. Đường sức là những đường thẳng song song cách đều.</p>
                        </div>
                    `
                },
                
                // BÀI 12: Điện thế – Thế năng điện
                { 
                    title: "📘 BÀI 12: ĐIỆN THẾ – THẾ NĂNG ĐIỆN", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Công của lực điện:</span> Công của lực điện tác dụng lên điện tích q khi di chuyển trong điện trường đều: $A = qEd$, với d là hình chiếu của độ dời lên phương đường sức. Công không phụ thuộc hình dạng đường đi, chỉ phụ thuộc vị trí đầu và cuối.</p>
                            <p><span class="font-bold">• Thế năng của điện tích trong điện trường:</span> $W_M = V_M q$, với $V_M$ là điện thế tại M.</p>
                            <p><span class="font-bold">• Điện thế $V_M$:</span> $V_M = \\frac{W_M}{q} = k\\frac{Q}{\\varepsilon r}$ (đối với điện tích điểm Q). Đơn vị: Vôn (V).</p>
                            <p><span class="font-bold">• Hiệu điện thế $U_{MN}$:</span> $U_{MN} = V_M - V_N = \\frac{A_{MN}}{q}$</p>
                            <p><span class="font-bold">• Liên hệ giữa E và U trong điện trường đều:</span> $E = \\frac{U}{d}$ (d là khoảng cách giữa hai điểm theo phương đường sức).</p>
                        </div>
                    `
                },
                
                // BÀI 13: Tụ điện
                { 
                    title: "📘 BÀI 13: TỤ ĐIỆN", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Tụ điện:</span> Là hệ hai vật dẫn đặt gần nhau, ngăn cách bởi lớp điện môi. Dùng để tích trữ năng lượng điện.</p>
                            <p><span class="font-bold">• Điện dung $C$:</span> $C = \\frac{Q}{U}$ (đơn vị: Fara – F). $1\\mu F = 10^{-6}F$, $1nF = 10^{-9}F$, $1pF = 10^{-12}F$.</p>
                            <p><span class="font-bold">• Tụ điện phẳng:</span> $C = \\frac{\\varepsilon \\varepsilon_0 S}{d}$, với $\\varepsilon_0 = \\frac{1}{4\\pi k.10^9} = 8,85.10^{-12} F/m$.</p>
                            <p><span class="font-bold">• Năng lượng tụ điện:</span> $W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}$</p>
                            <p><span class="font-bold">• Ghép tụ điện:</span></p>
                            <ul class="list-disc pl-6">
                                <li><span class="font-bold">Song song:</span> $C_b = C_1 + C_2$, $U_b = U_1 = U_2$, $Q_b = Q_1 + Q_2$.</li>
                                <li><span class="font-bold">Nối tiếp:</span> $\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2}$, $Q_b = Q_1 = Q_2$, $U_b = U_1 + U_2$.</li>
                            </ul>
                        </div>
                    `
                }
            ]
        },
        
        // CHƯƠNG 4: TỪ TRƯỜNG
        4: {
            title: "TỪ TRƯỜNG",
            topics: [
                // BÀI 14: Từ trường
                { 
                    title: "📘 BÀI 14: TỪ TRƯỜNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Nam châm:</span> Nam châm có hai cực: Bắc (N) và Nam (S). Các cực cùng tên đẩy nhau, khác tên hút nhau.</p>
                            <p><span class="font-bold">• Từ trường:</span> Là môi trường vật chất tồn tại xung quanh nam châm hoặc dòng điện, tác dụng lực từ lên nam châm hoặc dòng điện khác đặt trong nó.</p>
                            <p><span class="font-bold">• Cảm ứng từ $\\vec{B}$:</span> Đặc trưng cho từ trường về mặt tác dụng lực. Đơn vị: Tesla (T).</p>
                            <p><span class="font-bold">• Đường sức từ:</span> Là những đường cong vẽ trong không gian có từ trường, sao cho tiếp tuyến tại mỗi điểm trùng với vectơ cảm ứng từ tại điểm đó. Quy tắc: đường sức từ đi ra từ cực Bắc, đi vào cực Nam.</p>
                            <p><span class="font-bold">• Từ trường đều:</span> Có các đường sức từ song song, cách đều, cùng chiều. Ví dụ: từ trường trong lòng nam châm chữ U.</p>
                        </div>
                    `
                },
                
                // BÀI 15: Lực từ
                { 
                    title: "📘 BÀI 15: LỰC TỪ", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Lực từ tác dụng lên đoạn dây dẫn mang dòng điện:</span> $F = BIl\\sin\\alpha$, với $\\alpha$ là góc giữa $\\vec{B}$ và đoạn dây.</p>
                            <p><span class="font-bold">• Quy tắc bàn tay trái:</span> Đặt bàn tay trái sao cho các đường sức từ hướng vào lòng bàn tay, chiều từ cổ tay đến ngón tay giữa là chiều dòng điện. Khi đó ngón cái choãi ra 90° chỉ chiều của lực từ.</p>
                            <p><span class="font-bold">• Lực Lo-ren-xơ:</span> Lực từ tác dụng lên hạt mang điện chuyển động trong từ trường. $f = |q|vB\\sin\\theta$, với $\\theta$ là góc giữa $\\vec{v}$ và $\\vec{B}$.</p>
                            <p><span class="font-bold">• Quy tắc bàn tay trái cho lực Lo-ren-xơ:</span> Đặt bàn tay trái sao cho $\\vec{B}$ hướng vào lòng bàn tay, chiều từ cổ tay đến ngón tay giữa là chiều $\\vec{v}$ nếu $q > 0$ (ngược chiều $\\vec{v}$ nếu $q < 0$). Khi đó ngón cái chỉ chiều $\\vec{f}$.</p>
                        </div>
                    `
                },
                
                // BÀI 16: Từ trường của dòng điện
                { 
                    title: "📘 BÀI 16: TỪ TRƯỜNG CỦA DÒNG ĐIỆN", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Dòng điện thẳng dài vô hạn:</span> $B = 2.10^{-7}\\frac{I}{r}$ (tại điểm cách dây $r$). Đường sức từ là các đường tròn đồng tâm, chiều xác định bằng quy tắc nắm tay phải.</p>
                            <p><span class="font-bold">• Dòng điện tròn:</span> $B = 2\\pi.10^{-7}\\frac{I}{R}$ (tại tâm vòng dây bán kính $R$). Chiều: quy tắc nắm tay phải.</p>
                            <p><span class="font-bold">• Ống dây hình trụ (solenoid):</span> $B = 4\\pi.10^{-7}nI$, với $n = N/l$ là số vòng dây trên mét. Từ trường trong ống dây là từ trường đều.</p>
                        </div>
                    `
                },
                
                // BÀI 17: Cảm ứng điện từ
                { 
                    title: "📘 BÀI 17: CẢM ỨNG ĐIỆN TỪ", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold">• Từ thông $\\Phi$:</span> $\\Phi = BS\\cos\\alpha$, với $\\alpha$ là góc giữa $\\vec{B}$ và pháp tuyến $\\vec{n}$ của mặt phẳng $S$. Đơn vị: Vê-be (Wb).</p>
                            <p><span class="font-bold">• Hiện tượng cảm ứng điện từ:</span> Khi từ thông qua mạch kín biến thiên thì trong mạch xuất hiện dòng điện cảm ứng.</p>
                            <p><span class="font-bold">• Định luật Faraday:</span> Suất điện động cảm ứng $e_c = -\\frac{\\Delta\\Phi}{\\Delta t}$ (độ lớn $|e_c| = \\left|\\frac{\\Delta\\Phi}{\\Delta t}\\right|$).</p>
                            <p><span class="font-bold">• Định luật Lenz:</span> Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông sinh ra nó.</p>
                            <p><span class="font-bold">• Hiện tượng tự cảm:</span> Là hiện tượng cảm ứng điện từ xảy ra trong một mạch có dòng điện biến thiên, do sự biến thiên từ thông qua mạch gây ra.</p>
                            <p><span class="font-bold">• Suất điện động tự cảm:</span> $e_{tc} = -L\\frac{\\Delta i}{\\Delta t}$, với $L$ là độ tự cảm (đơn vị Henry – H). $L = 4\\pi.10^{-7}n^2V$ đối với ống dây.</p>
                            <p><span class="font-bold">• Năng lượng từ trường trong ống dây:</span> $W = \\frac{1}{2}Li^2$.</p>
                        </div>
                    `
                }
            ]
        }
    };
    
    return summaries[chapter] || summaries[1];
};