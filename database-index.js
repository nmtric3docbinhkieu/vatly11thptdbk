// ==============================================
// FILE: database-index.js
// ==============================================
// File tổng hợp tất cả câu hỏi và kiến thức từ các chương

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
    // Đặc biệt cho chương 3: chỉ lấy 55 câu đầu tiên (bỏ 5 câu vận dụng cao)
    if (chapter === 3) {
        return [...questions].slice(0, 55).sort(() => Math.random() - 0.5);
    }
    return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
};

// Hàm lấy tóm tắt kiến thức theo chương
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
                // BÀI 11: Định luật Coulomb về tương tác tĩnh điện
                { 
                    title: "📘 BÀI 11: ĐỊNH LUẬT COULOMB VỀ TƯƠNG TÁC TĨNH ĐIỆN", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold text-red-600">1. HAI LOẠI ĐIỆN TÍCH</span></p>
                            <p><span class="font-bold">• Điện tích:</span> Có 2 loại - điện tích dương (+) và điện tích âm (-). Các điện tích cùng dấu đẩy nhau, trái dấu hút nhau.</p>
                            <p><span class="font-bold">• Điện tích điểm:</span> Vật tích điện có kích thước rất nhỏ so với khoảng cách đến vị trí ta xét.</p>
                            <p><span class="font-bold">• Điện tích nguyên tố:</span> $e = 1,6.10^{-19} C$. Electron mang điện tích âm, có độ lớn bằng điện tích nguyên tố. Mọi điện tích Q đều là bội số của điện tích nguyên tố: $Q = n.e$ (n là số tự nhiên).</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">2. SỰ NHIỄM ĐIỆN CỦA CÁC VẬT</span></p>
                            <ul class="list-disc pl-6">
                                <li><span class="font-bold">Do cọ xát:</span> Hai vật khác bản chất, trung hòa cọ xát → nhiễm điện trái dấu.</li>
                                <li><span class="font-bold">Do tiếp xúc:</span> Vật trung hòa tiếp xúc vật nhiễm điện → nhiễm điện cùng dấu.</li>
                                <li><span class="font-bold">Do hưởng ứng:</span> Vật dẫn trung hòa đặt gần vật nhiễm điện → hai đầu nhiễm điện trái dấu.</li>
                            </ul>
                            
                            <p><span class="font-bold text-red-600 mt-2">3. THUYẾT ELECTRON</span></p>
                            <p>Nguyên tử gồm hạt nhân (mang điện dương) và electron (mang điện âm) chuyển động xung quanh. Electron có thể bứt khỏi nguyên tử và di chuyển từ vật này sang vật khác.</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">4. ĐỊNH LUẬT COULOMB</span></p>
                            <p>Lực tương tác tĩnh điện giữa hai điện tích điểm đặt trong chân không:</p>
                            <p class="text-center">$F = k\\frac{|q_1.q_2|}{r^2}$</p>
                            <p>Trong đó: $k = 9.10^9 \\frac{Nm^2}{C^2}$ (hằng số Coulomb); $q_1, q_2$: độ lớn các điện tích (C); $r$: khoảng cách (m).</p>
                            
                            <p><span class="font-bold">• Trong môi trường điện môi:</span> $F = k\\frac{|q_1.q_2|}{\\varepsilon r^2}$</p>
                            
                            <p><span class="font-bold">• Hằng số điện môi của một số chất:</span> Chân không (1), Không khí (1,00059), Nước (81), Thủy tinh (5-10).</p>
                            
                            <p><span class="font-bold">• Nguyên lý chồng chất lực điện:</span> $\\vec{F}_q = \\vec{F}_{1q} + \\vec{F}_{2q} + ... + \\vec{F}_{nq}$</p>
                        </div>
                    `
                },
                
                // BÀI 12: Điện trường
                { 
                    title: "📘 BÀI 12: ĐIỆN TRƯỜNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold text-red-600">1. CƯỜNG ĐỘ ĐIỆN TRƯỜNG</span></p>
                            <p><span class="font-bold">• Khái niệm điện trường:</span> Điện trường là dạng vật chất bao quanh điện tích, truyền tương tác giữa các điện tích. Tính chất cơ bản: tác dụng lực điện lên các điện tích khác đặt trong nó.</p>
                            <p><span class="font-bold">• Cường độ điện trường:</span> Đại lượng đặc trưng cho điện trường về mặt tác dụng lực tại một điểm.</p>
                            <p class="text-center">$\\vec{E} = \\frac{\\vec{F}}{q}$; $E = \\frac{F}{q}$ (đơn vị: N/C hoặc V/m)</p>
                            
                            <p><span class="font-bold">• Cường độ điện trường của điện tích điểm Q:</span></p>
                            <p class="text-center">$E = k\\frac{|Q|}{\\varepsilon r^2}$</p>
                            <p>Chiều: hướng ra xa Q nếu Q > 0, hướng vào Q nếu Q < 0.</p>
                            
                            <p><span class="font-bold">• Nguyên lý chồng chất điện trường:</span> $\\vec{E} = \\vec{E}_1 + \\vec{E}_2 + ... + \\vec{E}_n$</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">2. ĐƯỜNG SỨC ĐIỆN</span></p>
                            <p><span class="font-bold">• Đường sức điện:</span> Là đường mà tiếp tuyến tại mỗi điểm trùng với vectơ cường độ điện trường tại điểm đó, chiều trùng với chiều của vectơ cường độ điện trường.</p>
                            <p><span class="font-bold">• Đặc điểm:</span> Tại mỗi điểm chỉ có một đường sức; là đường cong không kín; bắt đầu từ điện tích dương (hoặc vô cực) và kết thúc ở điện tích âm (hoặc vô cực).</p>
                            
                            <p><span class="font-bold">• Điện trường đều:</span> Có vectơ cường độ điện trường tại mọi điểm đều bằng nhau. Đường sức là những đường thẳng song song và cách đều nhau.</p>
                        </div>
                    `
                },
                
                // BÀI 13: Điện thế và thế năng điện
                { 
                    title: "📘 BÀI 13: ĐIỆN THẾ VÀ THẾ NĂNG ĐIỆN", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold text-red-600">1. CÔNG CỦA LỰC ĐIỆN</span></p>
                            <p>Trong điện trường đều: $A_{AB} = q.E.\\overline{A'B'}$ với $\\overline{A'B'}$ là hình chiếu của AB lên phương đường sức.</p>
                            <p><span class="font-bold">Đặc điểm:</span> Công của lực điện không phụ thuộc vào dạng đường đi, chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối. Lực điện là lực thế, điện trường là trường thế.</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">2. THẾ NĂNG ĐIỆN</span></p>
                            <p>$W_A = A_{A\\infty}$; $A_{AB} = W_A - W_B$; $W_A = qV_A$ (đơn vị: Jun - J)</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">3. ĐIỆN THẾ</span></p>
                            <p class="text-center">$V_A = \\frac{W_A}{q} = \\frac{A_{A\\infty}}{q} = \\frac{A'_{\\infty A}}{q}$ (đơn vị: Vôn - V)</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">4. HIỆU ĐIỆN THẾ</span></p>
                            <p class="text-center">$U_{AB} = V_A - V_B = \\frac{A_{AB}}{q}$</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">5. LIÊN HỆ GIỮA CĐĐT VÀ HIỆU ĐIỆN THẾ</span></p>
                            <p class="text-center">$E = \\frac{U}{d}$</p>
                            <p>Với $d$ là khoảng cách giữa hai điểm trên phương của vectơ cường độ điện trường. $d > 0$ nếu cùng chiều $\\vec{E}$, $d < 0$ nếu ngược chiều.</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">6. CHUYỂN ĐỘNG CỦA ĐIỆN TÍCH TRONG ĐIỆN TRƯỜNG ĐỀU</span></p>
                            <p><span class="font-bold">• Vận tốc ban đầu song song với $\\vec{E}$:</span> Chuyển động thẳng nhanh dần đều. $v = \\sqrt{\\frac{2qU}{m}}$</p>
                            <p><span class="font-bold">• Vận tốc ban đầu vuông góc với $\\vec{E}$:</span> Quỹ đạo parabol (giống ném ngang). Trên Ox: thẳng đều; trên Oy: nhanh dần đều với $a = \\frac{qE}{m}$.</p>
                        </div>
                    `
                },
                
                // BÀI 14: Tụ điện
                { 
                    title: "📘 BÀI 14: TỤ ĐIỆN", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold text-red-600">1. ĐIỆN MÔI TRONG ĐIỆN TRƯỜNG</span></p>
                            <p><span class="font-bold">• Điện môi:</span> Vật cách điện, không cho điện tích chạy qua. Ví dụ: nhựa, cao su, thủy tinh, sứ.</p>
                            <p><span class="font-bold">• Sự phân cực điện môi:</span> Khi đặt trong điện trường, các nguyên tử bị phân cực → hai mặt tích điện trái dấu → điện trường tổng hợp bên trong nhỏ hơn điện trường ngoài.</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">2. TỤ ĐIỆN</span></p>
                            <p><span class="font-bold">• Khái niệm:</span> Tụ điện là linh kiện điện tử dùng để tích điện và phóng điện trong mạch. Gồm hai vật dẫn đặt gần nhau, ngăn cách bởi lớp điện môi.</p>
                            <p><span class="font-bold">• Phân loại:</span> Theo hình dạng (tụ phẳng, tụ trụ, tụ cầu); theo điện môi (tụ không khí, tụ giấy, tụ hóa...).</p>
                            <p><span class="font-bold">• Quá trình nạp - phóng:</span> Nạp: nối với nguồn; Phóng: nối với điện trở.</p>
                            <p><span class="font-bold">• Đặc điểm:</span> Tụ điện không cho dòng điện một chiều đi qua, cho dòng xoay chiều đi qua.</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">3. ĐIỆN DUNG CỦA TỤ ĐIỆN</span></p>
                            <p class="text-center">$C = \\frac{Q}{U}$ (đơn vị: Fara - F)</p>
                            <p>$1 \\mu F = 10^{-6}F$, $1 nF = 10^{-9}F$, $1 pF = 10^{-12}F$.</p>
                            <p><span class="font-bold">• Tính chất:</span> Điện dung chỉ phụ thuộc vào cấu tạo tụ điện (hình dạng, kích thước, điện môi), không phụ thuộc vào U và Q.</p>
                            <p><span class="font-bold">• Hiệu điện thế giới hạn:</span> Mỗi tụ có hiệu điện thế tối đa có thể chịu được, nếu vượt quá tụ sẽ hỏng.</p>
                            
                            <p><span class="font-bold">• Tụ điện phẳng:</span> $C = \\frac{\\varepsilon S}{4\\pi k d}$ với $k = 9.10^9 Nm^2/C^2$</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">4. GHÉP TỤ ĐIỆN</span></p>
                            <p><span class="font-bold">• Nối tiếp:</span> $\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2} + ...$; $Q = Q_1 = Q_2 = ...$; $U = U_1 + U_2 + ...$</p>
                            <p><span class="font-bold">• Song song:</span> $C_b = C_1 + C_2 + ...$; $Q = Q_1 + Q_2 + ...$; $U = U_1 = U_2 = ...$</p>
                        </div>
                    `
                },
                
                // BÀI 15: Năng lượng điện trường
                { 
                    title: "📘 BÀI 15: NĂNG LƯỢNG ĐIỆN TRƯỜNG", 
                    content: `
                        <div class="space-y-3">
                            <p><span class="font-bold text-red-600">1. NĂNG LƯỢNG CỦA TỤ ĐIỆN</span></p>
                            <p>Khi tích điện cho tụ, nguồn điện thực hiện công. Công này được dự trữ trong tụ dưới dạng năng lượng điện trường.</p>
                            <p class="text-center">$W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}$</p>
                            <p>Trong đó: W - năng lượng (J); C - điện dung (F); U - hiệu điện thế (V); Q - điện tích (C).</p>
                            <p><span class="font-bold">Nhận xét:</span> Năng lượng tỉ lệ với bình phương hiệu điện thế và bình phương điện tích, tỉ lệ thuận với điện dung khi U không đổi.</p>
                            
                            <p><span class="font-bold text-red-600 mt-2">2. SO SÁNH TỤ ĐIỆN VỚI PIN</span></p>
                            <ul class="list-disc pl-6">
                                <li>Tụ điện: nạp/xả nhanh, hàng triệu lần không hỏng, năng lượng nhỏ, không duy trì dòng lâu.</li>
                                <li>Pin: nạp/xả chậm, số lần có hạn, năng lượng lớn, duy trì dòng lâu.</li>
                            </ul>
                            
                            <p><span class="font-bold text-red-600 mt-2">3. ỨNG DỤNG CỦA TỤ ĐIỆN</span></p>
                            <ul class="list-disc pl-6">
                                <li><span class="font-bold">Màn hình cảm ứng:</span> Cơ thể người tạo thành tụ điện với màn hình, vị trí chạm làm thay đổi điện dung.</li>
                                <li><span class="font-bold">Xe ô tô điện:</span> Kết hợp với pin để tăng tốc, tái tạo năng lượng khi phanh, kéo dài tuổi thọ pin.</li>
                                <li><span class="font-bold">Đèn flash máy ảnh:</span> Tích điện chậm, phóng nhanh tạo ánh sáng mạnh.</li>
                                <li><span class="font-bold">Máy khử rung tim:</span> Tích trữ năng lượng, phóng qua tim bệnh nhân.</li>
                                <li><span class="font-bold">Lọc nguồn, mạch dao động, micro điện dung,...</span></li>
                            </ul>
                            
                            <p><span class="font-bold text-red-600 mt-2">4. CÔNG THỨC QUAN TRỌNG CẦN NHỚ</span></p>
                            <ul class="list-disc pl-6">
                                <li>$C = \\frac{Q}{U}$</li>
                                <li>$C = \\frac{\\varepsilon S}{4\\pi k d}$ (tụ phẳng)</li>
                                <li>Ghép nối tiếp: $\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2}$</li>
                                <li>Ghép song song: $C_b = C_1 + C_2$</li>
                                <li>$W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}$</li>
                                <li>Khi tụ mắc với nguồn: U không đổi</li>
                                <li>Khi tụ tháo khỏi nguồn: Q không đổi</li>
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
                // BÀI 14: Từ trường (bài gốc trong database-index)
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