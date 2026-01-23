// Dữ liệu mẫu cho chương 1 (Điện tích. Điện trường)
const chapterData = {
    1: {
        title: "Chương I: Điện tích. Điện trường",
        knowledge: [
            {
                title: "Điện tích",
                content: "Vật mang điện còn gọi là vật tích điện hay điện tích. Có hai loại điện tích: điện tích dương và điện tích âm.",
                formula: "q = n.e (với e = 1,6.10^{-19} C)",
                interactive: "Tương tác: Đưa thanh nhựa lại gần giấy vụn để quan sát hiện tượng nhiễm điện"
            },
            {
                title: "Định luật Coulomb",
                content: "Lực tương tác giữa hai điện tích điểm đứng yên tỉ lệ thuận với tích độ lớn của hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng.",
                formula: "F = k.|q1.q2|/r² (với k = 9.10^9 N.m²/C²)",
                interactive: "Mô phỏng: Thay đổi khoảng cách và độ lớn điện tích để quan sát sự thay đổi của lực tương tác"
            },
            {
                title: "Điện trường",
                content: "Điện trường là môi trường tồn tại xung quanh điện tích và tác dụng lực điện lên các điện tích khác đặt trong nó.",
                formula: "E = F/q",
                interactive: "Mô phỏng đường sức điện trường của điện tích điểm"
            }
        ],
        practiceQuestions: [
            {
                question: "Có mấy loại điện tích?",
                options: ["1 loại", "2 loại", "3 loại", "4 loại"],
                correct: 1
            },
            {
                question: "Đơn vị của điện tích là gì?",
                options: ["Newton (N)", "Coulomb (C)", "Volt (V)", "Ampe (A)"],
                correct: 1
            },
            {
                question: "Hai điện tích cùng dấu thì:",
                options: ["Hút nhau", "Đẩy nhau", "Không tương tác", "Cả A và B"],
                correct: 1
            },
            {
                question: "Công thức tính lực tương tác giữa hai điện tích điểm:",
                options: ["F = m.a", "F = k.|q1.q2|/r", "F = k.|q1.q2|/r²", "F = q.E"],
                correct: 2
            },
            {
                question: "Hằng số k trong định luật Coulomb có giá trị:",
                options: ["9.10^9 N.m²/C²", "6,67.10^-11 N.m²/kg²", "1,6.10^-19 C", "6,02.10^23"],
                correct: 0
            },
            {
                question: "Bài tập: Hai điện tích q1 = 2μC và q2 = -3μC đặt cách nhau 10cm trong chân không. Tính lực tương tác giữa chúng.",
                options: ["5,4 N hút", "5,4 N đẩy", "54 N hút", "54 N đẩy"],
                correct: 0
            },
            {
                question: "Bài tập: Điện tích điểm q = 5.10^-9 C đặt trong điện trường có cường độ E = 2000 V/m. Tính lực điện tác dụng lên điện tích.",
                options: ["10^-5 N", "10^-4 N", "10^-6 N", "10^-7 N"],
                correct: 0
            }
        ],
        homeworkQuestions: [
            {
                question: "Phát biểu nào sau đây là đúng về điện tích?",
                options: [
                    "Vật mang điện chỉ có điện tích dương",
                    "Có hai loại điện tích: dương và âm",
                    "Điện tích âm lớn hơn điện tích dương",
                    "Vật trung hòa không chứa điện tích"
                ],
                correct: 1
            },
            {
                question: "Điện tích của electron có giá trị:",
                options: [
                    "e = +1,6.10^-19 C",
                    "e = -1,6.10^-19 C",
                    "e = +9,1.10^-31 C",
                    "e = -9,1.10^-31 C"
                ],
                correct: 1
            },
            // Thêm 8 câu hỏi khác tương tự...
        ]
    },
    // Các chương khác sẽ được thêm sau
};

// Biến toàn cục
let currentChapter = null;
let studentInfo = null;

// Đăng ký thông tin học sinh
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    studentInfo = {
        fullName: document.getElementById('fullName').value,
        className: document.getElementById('className').value,
        studentId: document.getElementById('studentId').value
    };
    
    // Hiển thị thông tin đã đăng ký
    document.getElementById('displayName').textContent = studentInfo.fullName;
    document.getElementById('displayClass').textContent = studentInfo.className;
    document.getElementById('displayId').textContent = studentInfo.studentId;
    
    document.getElementById('studentInfoDisplay').style.display = 'block';
    
    // Lưu vào localStorage
    localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
    
    alert('Thông tin đã được lưu thành công!');
});

// Kiểm tra nếu đã có thông tin học sinh trong localStorage
window.addEventListener('load', function() {
    const savedInfo = localStorage.getItem('studentInfo');
    if (savedInfo) {
        studentInfo = JSON.parse(savedInfo);
        document.getElementById('fullName').value = studentInfo.fullName;
        document.getElementById('className').value = studentInfo.className;
        document.getElementById('studentId').value = studentInfo.studentId;
        
        document.getElementById('displayName').textContent = studentInfo.fullName;
        document.getElementById('displayClass').textContent = studentInfo.className;
        document.getElementById('displayId').textContent = studentInfo.studentId;
        document.getElementById('studentInfoDisplay').style.display = 'block';
    }
});

// Xử lý chọn chương học
document.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', function() {
        if (!studentInfo) {
            alert('Vui lòng nhập thông tin học sinh trước!');
            document.getElementById('student-registration').scrollIntoView({ behavior: 'smooth' });
            return;
        }
        
        currentChapter = this.getAttribute('data-chapter');
        showLessonContent(currentChapter);
    });
});

// Hiển thị nội dung bài học
function showLessonContent(chapterId) {
    document.getElementById('chapter-selection').style.display = 'none';
    document.getElementById('lesson-content').style.display = 'block';
    
    const chapter = chapterData[chapterId];
    document.getElementById('lessonTitle').textContent = chapter.title;
    
    // Hiển thị tab kiến thức đầu tiên
    showTab('knowledge');
    loadKnowledgeContent(chapter);
    loadPracticeQuestions(chapter);
    loadHomeworkQuestions(chapter);
}

// Quay lại chọn chương
document.getElementById('backToChapters').addEventListener('click', function() {
    document.getElementById('chapter-selection').style.display = 'block';
    document.getElementById('lesson-content').style.display = 'none';
});

// Xử lý chuyển tab
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        showTab(tabId);
    });
});

function showTab(tabId) {
    // Ẩn tất cả các tab
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Xóa active từ tất cả các nút tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hiển thị tab được chọn
    document.getElementById(`${tabId}-tab`).classList.add('active');
    
    // Đánh dấu nút tab đang active
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
}

// Tải nội dung kiến thức
function loadKnowledgeContent(chapter) {
    const container = document.querySelector('.knowledge-content');
    container.innerHTML = '';
    
    chapter.knowledge.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'knowledge-item';
        
        itemDiv.innerHTML = `
            <h3><i class="fas fa-lightbulb"></i> ${item.title}</h3>
            <p>${item.content}</p>
            <div class="formula-box">${item.formula}</div>
            <div class="interactive-section">
                <h4><i class="fas fa-flask"></i> Tương tác/Thí nghiệm ảo</h4>
                <p>${item.interactive}</p>
                <button class="btn-submit" onclick="runSimulation(${index})">
                    <i class="fas fa-play"></i> Chạy mô phỏng
                </button>
            </div>
        `;
        
        container.appendChild(itemDiv);
    });
}

// Tải câu hỏi bài tập vận dụng
function loadPracticeQuestions(chapter) {
    const container = document.querySelector('#practice-tab .quiz-container');
    container.innerHTML = '';
    
    chapter.practiceQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <h4>Câu ${index + 1}: ${q.question}</h4>
            <div class="options-container">
                ${q.options.map((option, i) => `
                    <label class="option">
                        <input type="radio" name="practice_q${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

// Tải câu hỏi bài tập về nhà
function loadHomeworkQuestions(chapter) {
    const container = document.querySelector('#homework-tab .quiz-container');
    container.innerHTML = '';
    
    chapter.homeworkQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <h4>Câu ${index + 1}: ${q.question}</h4>
            <div class="options-container">
                ${q.options.map((option, i) => `
                    <label class="option">
                        <input type="radio" name="homework_q${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

// Nộp bài tập vận dụng
document.getElementById('submitPractice').addEventListener('click', function() {
    if (!studentInfo) {
        alert('Vui lòng nhập thông tin học sinh trước!');
        return;
    }
    
    const chapter = chapterData[currentChapter];
    let score = 0;
    const totalQuestions = chapter.practiceQuestions.length;
    
    chapter.practiceQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="practice_q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    
    const resultDiv = document.getElementById('practiceResult');
    const percentage = (score / totalQuestions * 100).toFixed(1);
    
    resultDiv.innerHTML = `
        <h3><i class="fas fa-chart-line"></i> Kết quả bài tập vận dụng</h3>
        <p><strong>Số câu đúng:</strong> ${score}/${totalQuestions}</p>
        <p><strong>Tỷ lệ đúng:</strong> ${percentage}%</p>
        <p><strong>Đánh giá:</strong> ${percentage >= 80 ? 'Xuất sắc' : percentage >= 60 ? 'Khá' : 'Cần cố gắng hơn'}</p>
    `;
    
    // Lưu kết quả
    saveResult('practice', score, totalQuestions);
});

// Nộp bài tập về nhà
document.getElementById('submitHomework').addEventListener('click', function() {
    if (!studentInfo) {
        alert('Vui lòng nhập thông tin học sinh trước!');
        return;
    }
    
    const chapter = chapterData[currentChapter];
    let score = 0;
    const totalQuestions = chapter.homeworkQuestions.length;
    
    chapter.homeworkQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="homework_q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    
    const resultDiv = document.getElementById('homeworkResult');
    const percentage = (score / totalQuestions * 100).toFixed(1);
    
    resultDiv.innerHTML = `
        <h3><i class="fas fa-chart-line"></i> Kết quả bài tập về nhà</h3>
        <p><strong>Số câu đúng:</strong> ${score}/${totalQuestions}</p>
        <p><strong>Tỷ lệ đúng:</strong> ${percentage}%</p>
        <p><strong>Đánh giá:</strong> ${percentage >= 80 ? 'Xuất sắc' : percentage >= 60 ? 'Khá' : 'Cần cố gắng hơn'}</p>
    `;
    
    // Lưu kết quả
    saveResult('homework', score, totalQuestions);
});

// Lưu kết quả vào localStorage
function saveResult(type, score, total) {
    if (!studentInfo) return;
    
    const result = {
        studentId: studentInfo.studentId,
        studentName: studentInfo.fullName,
        className: studentInfo.className,
        chapter: currentChapter,
        type: type,
        score: score,
        total: total,
        percentage: (score / total * 100).toFixed(1),
        timestamp: new Date().toISOString()
    };
    
    // Lấy kết quả cũ từ localStorage
    let allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
    
    // Kiểm tra xem đã có kết quả cho chương này chưa
    const existingIndex = allResults.findIndex(r => 
        r.studentId === result.studentId && 
        r.chapter === result.chapter && 
        r.type === result.type
    );
    
    if (existingIndex >= 0) {
        allResults[existingIndex] = result;
    } else {
        allResults.push(result);
    }
    
    localStorage.setItem('studentResults', JSON.stringify(allResults));
}

// Chạy mô phỏng (hàm mẫu)
function runSimulation(index) {
    alert(`Mô phỏng cho kiến thức ${index + 1} đang chạy...\n\nTrong phiên bản đầy đủ, đây sẽ là thí nghiệm ảo tương tác.`);
}

// Kiểm tra 45 phút
document.getElementById('startExam').addEventListener('click', function() {
    if (!studentInfo) {
        alert('Vui lòng nhập thông tin học sinh trước!');
        return;
    }
    
    alert('Tính năng kiểm tra 45 phút sẽ được kích hoạt khi giáo viên yêu cầu.');
});