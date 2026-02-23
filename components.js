// ==============================================
// FILE: components.js (ĐÃ SỬA LỖI)
// ==============================================

// Component màn hình chọn chương - ĐÂY LÀ HÀM, KHÔNG PHẢI HTML THUẦN
window.ChapterSelectionScreen = function({ onSelectChapter, onLogout, student }) {
    // Tạo element bằng React.createElement hoặc dùng JSX (đang dùng Babel)
    return React.createElement('div', { className: "flex items-center justify-center min-h-screen p-4" },
        React.createElement('div', { className: "glass-panel p-10 text-center max-w-md w-full relative" },
            // Nút đăng xuất
            React.createElement('button', { onClick: onLogout, className: "absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:bg-slate-100" },
                React.createElement('i', { className: "fas fa-sign-out-alt" })
            ),
            // Tên học sinh
            React.createElement('div', { className: "mb-2 py-2 px-4 rounded-xl bg-blue-50 inline-block text-blue-700 text-sm font-semibold" },
                React.createElement('i', { className: "fas fa-user mr-2" }),
                student?.full_name + ' - ' + student?.class_name
            ),
            // Tiêu đề
            React.createElement('h1', { className: "text-3xl font-black text-slate-800 mb-2" }, "VẬT LÍ 11"),
            React.createElement('p', { className: "text-slate-500 mb-8" }, "Chọn chương để làm bài"),
            // Grid các chương
            React.createElement('div', { className: "grid gap-4" },
                // Tạo mảng [1,2,3,4] và map
                [1,2,3,4].map(function(ch) {
                    var chapter = window.CONFIG.chapters[ch];
                    var colors = {1: 'blue', 2: 'green', 3: 'purple', 4: 'orange'};
                    var color = colors[ch];
                    
                    return React.createElement('button', {
                        key: ch,
                        onClick: function() { onSelectChapter(ch); },
                        className: "p-6 bg-white border-2 border-" + color + "-200 rounded-2xl hover:border-" + color + "-500 hover:bg-" + color + "-50 transition-all text-left flex items-center"
                    },
                        React.createElement('div', { className: "w-12 h-12 bg-" + color + "-100 rounded-xl flex items-center justify-center mr-4" },
                            React.createElement('i', { className: "fas " + chapter.icon + " text-" + color + "-600 text-xl" })
                        ),
                        React.createElement('div', null,
                            React.createElement('div', { className: "font-black text-slate-800 text-lg" }, "Chương " + ch),
                            React.createElement('div', { className: "text-slate-600 text-sm" }, chapter.name)
                        )
                    );
                })
            ),
            // Nút admin
            React.createElement('button', {
                onClick: function() { if (window.setAdminMode) window.setAdminMode(true); },
                className: "w-full mt-6 pt-4 border-t border-slate-200 text-slate-400 text-xs hover:text-slate-600"
            }, "Giáo viên: Xuất Excel kết quả")
        )
    );
};

// Component màn hình chọn hoạt động cho chương 3 (có thí nghiệm ảo)
window.Chapter3ActivityScreen = function({ onSelectActivity, onLogout, student }) {
    return React.createElement('div', { className: "flex items-center justify-center min-h-screen p-4" },
        React.createElement('div', { className: "glass-panel p-10 text-center max-w-2xl w-full relative" },
            // Nút đăng xuất
            React.createElement('button', { onClick: onLogout, className: "absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:bg-slate-100" },
                React.createElement('i', { className: "fas fa-sign-out-alt" })
            ),
            // Tên học sinh
            React.createElement('div', { className: "mb-2 py-2 px-4 rounded-xl bg-blue-50 inline-block text-blue-700 text-sm font-semibold" },
                React.createElement('i', { className: "fas fa-user mr-2" }),
                student?.full_name + ' - ' + student?.class_name
            ),
            // Tiêu đề
            React.createElement('h1', { className: "text-3xl font-black text-slate-800 mb-2" }, "CHƯƠNG 3: ĐIỆN TRƯỜNG"),
            React.createElement('p', { className: "text-slate-500 mb-8" }, "Chọn hoạt động để bắt đầu"),
            
            // Grid các hoạt động
            React.createElement('div', { className: "grid gap-6 md:grid-cols-3" },
                // Lý thuyết
                React.createElement('button', {
                    onClick: function() { onSelectActivity('theory'); },
                    className: "p-6 bg-white border-2 border-blue-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                },
                    React.createElement('div', { className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4" },
                        React.createElement('i', { className: "fas fa-book text-blue-600 text-xl" })
                    ),
                    React.createElement('div', { className: "font-black text-slate-800 text-lg mb-2" }, "Lý thuyết"),
                    React.createElement('div', { className: "text-slate-600 text-sm" }, "Tóm tắt kiến thức về điện trường")
                ),
                
                // Thí nghiệm ảo
                React.createElement('button', {
                    onClick: function() { onSelectActivity('experiments'); },
                    className: "p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                },
                    React.createElement('div', { className: "w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4" },
                        React.createElement('i', { className: "fas fa-flask text-green-600 text-xl" })
                    ),
                    React.createElement('div', { className: "font-black text-slate-800 text-lg mb-2" }, "Thí nghiệm ảo"),
                    React.createElement('div', { className: "text-slate-600 text-sm" }, "Thực hành các thí nghiệm tương tác")
                ),
                
                // Bài tập trắc nghiệm
                React.createElement('button', {
                    onClick: function() { onSelectActivity('quiz'); },
                    className: "p-6 bg-white border-2 border-purple-200 rounded-2xl hover:border-purple-500 hover:bg-purple-50 transition-all text-left"
                },
                    React.createElement('div', { className: "w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4" },
                        React.createElement('i', { className: "fas fa-tasks text-purple-600 text-xl" })
                    ),
                    React.createElement('div', { className: "font-black text-slate-800 text-lg mb-2" }, "Bài tập"),
                    React.createElement('div', { className: "text-slate-600 text-sm" }, "Làm bài tập trắc nghiệm")
                ),
                
                // Giải Bài tập ôn
                React.createElement('button', {
                    onClick: function() { onSelectActivity('solve'); },
                    className: "p-6 bg-white border-2 border-green-200 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                },
                    React.createElement('div', { className: "w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4" },
                        React.createElement('i', { className: "fas fa-chalkboard-teacher text-green-600 text-xl" })
                    ),
                    React.createElement('div', { className: "font-black text-slate-800 text-lg mb-2" }, "Giải Bài tập ôn"),
                    React.createElement('div', { className: "text-slate-600 text-sm" }, "Giải chi tiết 60 câu hỏi")
                )
            ),
            
            // Nút quay lại
            React.createElement('button', {
                onClick: function() { onSelectActivity('back'); },
                className: "w-full mt-8 pt-4 border-t border-slate-200 text-slate-400 text-sm hover:text-slate-600"
            }, "Quay lại chọn chương")
        )
    );
};

// Component màn hình chọn thí nghiệm ảo
window.ExperimentsScreen = function({ onSelectExperiment, onBack }) {
    const experiments = [
        {
            id: 'coulomb',
            name: 'Định luật Coulomb',
            description: 'Khám phá lực tương tác giữa các điện tích',
            icon: 'fa-bolt',
            color: 'yellow',
            file: 'dinhluatcoulomb.html'
        },
        {
            id: 'sunhiemdien',
            name: 'Sự nhiễm điện',
            description: 'Thí nghiệm cọ xát, tiếp xúc và hưởng ứng',
            icon: 'fa-hand-sparkles',
            color: 'purple',
            file: 'sunhiemdien.html'
        },
        {
            id: 'electric-field',
            name: 'Điện trường',
            description: 'Trực quan hóa đường sức điện và điện trường',
            icon: 'fa-project-diagram',
            color: 'blue',
            file: 'experiment-electric-field.html'
        },
        {
            id: 'capacitor',
            name: 'Tụ điện',
            description: 'Tìm hiểu về tụ điện và năng lượng tích tụ',
            icon: 'fa-microchip',
            color: 'green',
            file: 'experiment-capacitor.html'
        }
    ];
    
    return React.createElement('div', { className: "max-w-4xl mx-auto px-4 py-10" },
        React.createElement('div', { className: "glass-panel p-8 md:p-10" },
            // Header
            React.createElement('div', { className: "flex items-center justify-between mb-8" },
                React.createElement('div', null,
                    React.createElement('h1', { className: "text-2xl md:text-3xl font-black text-slate-800" }, "THÍ NGHIỆM ẢO"),
                    React.createElement('p', { className: "text-slate-500 font-semibold mt-1" }, "Chương 3: Điện trường")
                ),
                React.createElement('button', { onClick: onBack, className: "p-3 rounded-xl bg-slate-100 hover:bg-slate-200" },
                    React.createElement('i', { className: "fas fa-arrow-left" })
                )
            ),
            
            // Grid các thí nghiệm
            React.createElement('div', { className: "grid gap-6 md:grid-cols-3" },
                experiments.map(function(exp) {
                    return React.createElement('button', {
                        key: exp.id,
                        onClick: function() { onSelectExperiment(exp); },
                        className: "p-6 bg-white border-2 border-" + exp.color + "-200 rounded-2xl hover:border-" + exp.color + "-500 hover:bg-" + exp.color + "-50 transition-all text-left"
                    },
                        React.createElement('div', { className: "w-16 h-16 bg-" + exp.color + "-100 rounded-xl flex items-center justify-center mb-4" },
                            React.createElement('i', { className: "fas " + exp.icon + " text-" + exp.color + "-600 text-2xl" })
                        ),
                        React.createElement('div', { className: "font-black text-slate-800 text-lg mb-2" }, exp.name),
                        React.createElement('div', { className: "text-slate-600 text-sm mb-4" }, exp.description),
                        React.createElement('div', { className: "text-blue-600 font-semibold text-sm" },
                            "Bắt đầu thí nghiệm ",
                            React.createElement('i', { className: "fas fa-arrow-right ml-1" })
                        )
                    );
                })
            )
        )
    );
};

// Component màn hình chi tiết thí nghiệm
window.ExperimentDetailScreen = function({ experiment, onBack }) {
    // Nếu là thí nghiệm Coulomb hoặc Sự nhiễm điện, nhúng trực tiếp nội dung HTML
    if (experiment.id === 'coulomb' || experiment.id === 'sunhiemdien') {
        return React.createElement('div', { className: "min-h-screen bg-slate-50" },
            React.createElement('div', { className: "bg-white border-b-2 border-slate-200 px-4 py-3 flex items-center justify-between" },
                React.createElement('div', { className: "flex items-center gap-3" },
                    React.createElement('button', { 
                        onClick: onBack, 
                        className: "p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                    }, React.createElement('i', { className: "fas fa-arrow-left text-slate-700" })),
                    React.createElement('h1', { className: "text-lg font-black text-slate-800" }, experiment.name)
                ),
                React.createElement('div', { className: "text-sm text-slate-500" }, "Chương 3: Điện trường")
            ),
            React.createElement('div', { 
                className: "w-full",
                dangerouslySetInnerHTML: { __html: `
                    <iframe 
                        src="${experiment.file}" 
                        style="width: 100%; height: calc(100vh - 60px); border: none; display: block;"
                        onload="this.style.height = this.contentWindow.document.body.scrollHeight + 'px'"
                    ></iframe>
                ` }
            })
        );
    }
    
    // Các thí nghiệm khác (chưa có nội dung)
    return React.createElement('div', { className: "max-w-4xl mx-auto px-4 py-10" },
        React.createElement('div', { className: "glass-panel p-8 text-center" },
            React.createElement('div', { className: "flex items-center justify-between mb-6" },
                React.createElement('button', { onClick: onBack, className: "p-3 rounded-xl bg-slate-100 hover:bg-slate-200" },
                    React.createElement('i', { className: "fas fa-arrow-left" })
                ),
                React.createElement('h1', { className: "text-2xl font-black text-slate-800" }, experiment.name)
            ),
            React.createElement('div', { className: "py-20" },
                React.createElement('i', { className: "fas fa-tools text-6xl text-slate-300 mb-4" }),
                React.createElement('h2', { className: "text-xl font-bold text-slate-600 mb-2" }, "Đang phát triển"),
                React.createElement('p', { className: "text-slate-500" }, "Thí nghiệm này sẽ sớm có mặt!")
            )
        )
    );
};

window.SummaryScreen = function({ chapter, onBack, onStart }) {
    var summary = window.getChapterSummary ? window.getChapterSummary(chapter) : { title: "", topics: [] };
    
    // Process MathJax when component mounts
    React.useEffect(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            setTimeout(() => {
                const elements = document.querySelectorAll('.tex2jax_process');
                if (elements.length > 0) {
                    window.MathJax.typesetPromise(Array.from(elements))
                        .catch((err) => console.log('MathJax error:', err));
                }
            }, 100);
        }
    }, [chapter]);
    
    return React.createElement('div', { className: "max-w-3xl mx-auto px-4 py-10 tex2jax_process" },
        React.createElement('div', { className: "glass-panel p-8 md:p-10 mb-6 border-t-8 border-blue-500" },
            // Header
            React.createElement('div', { className: "flex items-center justify-between mb-8" },
                React.createElement('div', null,
                    React.createElement('h1', { className: "text-2xl md:text-3xl font-black text-slate-800" },
                        "TÓM TẮT " + (summary.title || "")
                    ),
                    React.createElement('p', { className: "text-slate-500 font-semibold mt-1" },
                        window.CONFIG.chapters[chapter]?.name
                    )
                ),
                React.createElement('button', { onClick: onBack, className: "p-3 rounded-xl bg-slate-100 hover:bg-slate-200" },
                    React.createElement('i', { className: "fas fa-arrow-left" })
                )
            ),
            // Nội dung ôn tập
            React.createElement('div', { className: "space-y-6" },
                (summary.topics || []).map(function(topic, idx) {
                    return React.createElement('div', { key: idx, className: "bg-blue-50/50 border-2 border-blue-100 rounded-2xl p-6" },
                        React.createElement('h3', { className: "text-lg font-bold text-slate-800 mb-3" }, topic.title),
                        React.createElement(window.LaTeXText, { 
                            className: "text-slate-700",
                            text: topic.content
                        })
                    );
                })
            ),
            // Nút bắt đầu
            React.createElement('button', { onClick: onStart, className: "mt-8 w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all" },
                "BẮT ĐẦU LÀM BÀI",
                React.createElement('i', { className: "fas fa-chevron-right ml-3" })
            )
        )
    );
};

// Component màn hình làm bài
// Component để hiển thị text có LaTeX
window.LaTeXText = function({ text, className }) {
    const elementRef = React.useRef(null);
    
    React.useEffect(() => {
        if (elementRef.current && window.MathJax && window.MathJax.typesetPromise) {
            setTimeout(() => {
                window.MathJax.typesetPromise([elementRef.current])
                    .catch((err) => console.log('MathJax error:', err));
            }, 50);
        }
    }, [text]);
    
    return React.createElement('span', { 
        ref: elementRef,
        className: className 
    }, text);
};

// Component màn hình giải bài tập ôn
window.SolveExercisesScreen = function({ onBack, chapter }) {
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [answeredQuestions, setAnsweredQuestions] = React.useState(new Set());
    const [timeLeft, setTimeLeft] = React.useState(1800); // 30 phút
    const [isTimerActive, setIsTimerActive] = React.useState(false);
    const [warningCount, setWarningCount] = React.useState(0);
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    // Load câu hỏi từ database
    React.useEffect(() => {
        let allQuestions = [];
        
        if (chapter === 3) {
            // Lấy trực tiếp từ database để giữ nguyên thứ tự 1-60
            allQuestions = window.questionsChapter3 || [];
        }
        
        // Giữ nguyên thứ tự từ 1-60, không xáo trộn
        setQuestions(allQuestions);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowAnswer(false);
        setScore(0);
        setAnsweredQuestions(new Set());
        setTimeLeft(1800);
        setIsTimerActive(true);
        setWarningCount(0);
    }, [chapter]);

    // Process MathJax when component updates or questions change
    React.useEffect(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            setTimeout(() => {
                const elements = document.querySelectorAll('.tex2jax_process');
                if (elements.length > 0) {
                    window.MathJax.typesetPromise(Array.from(elements))
                        .catch((err) => console.log('MathJax error:', err));
                }
            }, 100);
        }
    }, [currentQuestionIndex, showAnswer, questions]);

    // Timer
    React.useEffect(() => {
        if (!isTimerActive || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsTimerActive(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isTimerActive, timeLeft]);

    // Format thời gian
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Xử lý cảnh báo
    React.useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden && isTimerActive) {
                setWarningCount(prev => prev + 1);
                if (window.playSound) window.playSound('warning');
            }
        };

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [isTimerActive]);

    const handleAnswerSelect = (answerIndex) => {
        if (showAnswer) return;
        setSelectedAnswer(answerIndex);
    };

    const handleShowAnswer = () => {
        if (selectedAnswer === null) return;
        
        setShowAnswer(true);
        const isCorrect = selectedAnswer === questions[currentQuestionIndex].a;
        
        if (isCorrect && !answeredQuestions.has(currentQuestionIndex)) {
            const newScore = score + 0.2; // 0.2đ/câu
            setScore(newScore);
            setAnsweredQuestions(prev => new Set(prev).add(currentQuestionIndex));
            if (window.playSound) window.playSound('correct');
        } else if (!isCorrect) {
            if (window.playSound) window.playSound('wrong');
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowAnswer(false);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setSelectedAnswer(null);
            setShowAnswer(false);
        }
    };

    const handleJumpToQuestion = (index) => {
        setCurrentQuestionIndex(index);
        setSelectedAnswer(null);
        setShowAnswer(false);
    };

    if (questions.length === 0) {
        return React.createElement('div', { className: "min-h-screen bg-slate-50 flex items-center justify-center" },
            React.createElement('div', { className: "text-center" },
                React.createElement('div', { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" }),
                React.createElement('p', { className: "text-slate-600" }, "Đang tải câu hỏi...")
            )
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return React.createElement('div', { className: "min-h-screen bg-slate-50" },
        // Header
        React.createElement('div', { className: "bg-white border-b-2 border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10" },
            React.createElement('div', { className: "flex items-center gap-3" },
                React.createElement('button', { 
                    onClick: onBack, 
                    className: "p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                }, React.createElement('i', { className: "fas fa-arrow-left text-slate-700" })),
                React.createElement('div', null,
                    React.createElement('h1', { className: "text-lg font-black text-slate-800" }, "Giải Bài tập ôn"),
                    React.createElement('p', { className: "text-sm text-slate-500" }, `Chương ${chapter}: Điện trường`)
                )
            ),
            React.createElement('div', { className: "flex items-center gap-4" },
                // Timer
                React.createElement('div', { 
                    className: `flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-sm font-bold ${
                        timeLeft < 300 ? 'bg-red-100 text-red-700' : 
                        timeLeft < 600 ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-green-100 text-green-700'
                    }`
                },
                    React.createElement('i', { className: "fas fa-clock" }),
                    formatTime(timeLeft)
                ),
                // Score
                React.createElement('div', { className: "flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg font-mono text-sm font-bold" },
                    React.createElement('i', { className: "fas fa-star" }),
                    `${score.toFixed(1)}đ`
                ),
                // Progress
                React.createElement('div', { className: "flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-bold" },
                    React.createElement('i', { className: "fas fa-chart-line" }),
                    `${currentQuestionIndex + 1}/${questions.length}`
                )
            )
        ),

        // Progress bar
        React.createElement('div', { className: "w-full bg-slate-200 h-1" },
            React.createElement('div', { 
                className: "bg-gradient-to-r from-blue-500 to-purple-600 h-1 transition-all duration-300",
                style: { width: `${progress}%` }
            })
        ),

        // Warnings
        (warningCount > 0 || isFullscreen) && React.createElement('div', { className: "mx-4 mt-4" },
            warningCount > 0 && React.createElement('div', { 
                className: "bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-2 flex items-center gap-3" 
            },
                React.createElement('i', { className: "fas fa-exclamation-triangle" }),
                React.createElement('span', null, `Cảnh báo: Bạn đã tắt màn hình hoặc chuyển tab ${warningCount} lần`)
            ),
            isFullscreen && React.createElement('div', { 
                className: "bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-3 rounded-lg flex items-center gap-3" 
            },
                React.createElement('i', { className: "fas fa-expand" }),
                React.createElement('span', null, "Đang ở chế độ toàn màn hình")
            )
        ),

        // Question navigation
        React.createElement('div', { className: "max-w-4xl mx-auto px-4 py-6" },
            React.createElement('div', { className: "glass-panel p-6 mb-6" },
                React.createElement('div', { className: "flex items-center justify-between mb-4" },
                    React.createElement('h2', { className: "text-xl font-bold text-slate-800" }, "Danh sách câu hỏi"),
                    React.createElement('div', { className: "flex gap-2" },
                        React.createElement('button', {
                            onClick: handlePrevious,
                            disabled: currentQuestionIndex === 0,
                            className: "px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium transition-colors"
                        }, React.createElement('i', { className: "fas fa-chevron-left" })),
                        React.createElement('button', {
                            onClick: handleNext,
                            disabled: currentQuestionIndex === questions.length - 1,
                            className: "px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium transition-colors"
                        }, React.createElement('i', { className: "fas fa-chevron-right" }))
                    )
                ),
                React.createElement('div', { className: "grid grid-cols-10 gap-2 max-h-60 overflow-y-auto p-2 bg-slate-50 rounded-lg" },
                    questions.map((_, index) => {
                        const isAnswered = answeredQuestions.has(index);
                        const isCurrent = index === currentQuestionIndex;
                        return React.createElement('button', {
                            key: index,
                            onClick: () => handleJumpToQuestion(index),
                            className: `p-2 rounded-lg text-sm font-medium transition-all ${
                                isCurrent ? 'bg-blue-600 text-white scale-105' :
                                isAnswered ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                                'bg-white hover:bg-slate-100 text-slate-600'
                            }`
                        }, index + 1);
                    })
                )
            )
        ),

        // Main content
        React.createElement('div', { className: "max-w-4xl mx-auto px-4 pb-6" },
            React.createElement('div', { className: "glass-panel p-8" },
                // Question header
                React.createElement('div', { className: "flex items-center justify-between mb-6" },
                    React.createElement('div', { className: "flex items-center gap-3" },
                        React.createElement('span', { 
                            className: "bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold"
                        }, `Câu ${currentQuestionIndex + 1}`),
                        currentQuestion && React.createElement('span', { 
                            className: `px-3 py-1.5 rounded-lg text-xs font-bold ${
                                currentQuestionIndex < 30 ? 'bg-green-100 text-green-700' :
                                currentQuestionIndex < 45 ? 'bg-yellow-100 text-yellow-700' :
                                currentQuestionIndex < 55 ? 'bg-orange-100 text-orange-700' :
                                'bg-red-100 text-red-700'
                            }`
                        }, 
                            currentQuestionIndex < 30 ? 'Nhận biết' :
                            currentQuestionIndex < 45 ? 'Thông hiểu' :
                            currentQuestionIndex < 55 ? 'Vận dụng thấp' :
                            'Vận dụng cao'
                        )
                    )
                ),

                // Question content
                currentQuestion && React.createElement('div', { className: "space-y-6" },
                    // Question text
                    React.createElement('div', { className: "bg-slate-50 p-6 rounded-xl border border-slate-200" },
                        React.createElement(window.LaTeXText, { 
                            className: "text-lg text-slate-800 leading-relaxed",
                            text: currentQuestion.q
                        })
                    ),

                    // Options
                    React.createElement('div', { className: "space-y-3" },
                        currentQuestion.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrect = showAnswer && index === currentQuestion.a;
                            const isWrong = showAnswer && isSelected && index !== currentQuestion.a;
                            
                            return React.createElement('button', {
                                key: index,
                                onClick: () => handleAnswerSelect(index),
                                disabled: showAnswer,
                                className: `w-full text-left p-4 rounded-xl border-2 transition-all text-left ${
                                    isCorrect ? 'bg-green-50 border-green-500 text-green-800' :
                                    isWrong ? 'bg-red-50 border-red-500 text-red-800' :
                                    isSelected ? 'bg-blue-50 border-blue-500 text-blue-800' :
                                    'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700'
                                } ${showAnswer ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'}`
                            },
                            React.createElement('div', { className: "flex items-center justify-between" },
                                React.createElement('div', { className: "flex items-center gap-3" },
                                    React.createElement('span', { 
                                        className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                            isCorrect ? 'bg-green-600 text-white' :
                                            isWrong ? 'bg-red-600 text-white' :
                                            isSelected ? 'bg-blue-600 text-white' :
                                            'bg-slate-200 text-slate-600'
                                        }`
                                    }, String.fromCharCode(65 + index)),
                                    React.createElement(window.LaTeXText, { 
                                        className: "text-base leading-relaxed",
                                        text: option
                                    })
                                ),
                                (isCorrect || isWrong) && React.createElement('i', {
                                    className: `fas ${isCorrect ? 'fa-check text-green-600' : 'fa-times text-red-600'}`
                                })
                            )
                        );
                        })
                    ),

                    // Explanation
                    showAnswer && React.createElement('div', { 
                        className: "bg-blue-50 border border-blue-200 p-6 rounded-xl" 
                    },
                        React.createElement('div', { className: "flex items-center gap-2 mb-3" },
                            React.createElement('i', { className: "fas fa-lightbulb text-blue-600" }),
                            React.createElement('h4', { className: "font-bold text-blue-800" }, "Giải thích")
                        ),
                        React.createElement(window.LaTeXText, { 
                            className: "text-slate-700 leading-relaxed",
                            text: currentQuestion.expl
                        })
                    ),

                    // Action buttons
                    React.createElement('div', { className: "flex gap-3 justify-center mt-6" },
                        !showAnswer && React.createElement('button', {
                            onClick: handleShowAnswer,
                            disabled: selectedAnswer === null,
                            className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all hover:scale-[1.02] flex items-center gap-2"
                        },
                            React.createElement('i', { className: "fas fa-eye" }),
                            "Xem đáp án"
                        ),
                        showAnswer && React.createElement('button', {
                            onClick: handleNext,
                            disabled: currentQuestionIndex === questions.length - 1,
                            className: "px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all hover:scale-[1.02] flex items-center gap-2"
                        },
                            React.createElement('i', { className: "fas fa-arrow-right" }),
                            currentQuestionIndex === questions.length - 1 ? "Hoàn thành" : "Câu tiếp theo"
                        )
                    )
                )
            )
        )
    )
    
    return React.createElement('div', { className: "max-w-2xl mx-auto px-4 py-10 tex2jax_process" },
        // Cảnh báo gian lận
        showCheatAlert ? React.createElement('div', { className: "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl animate-pulse" },
            React.createElement('div', { className: "flex items-center gap-3" },
                React.createElement('i', { className: "fas fa-exclamation-triangle text-2xl" }),
                React.createElement('div', null,
                    React.createElement('div', { className: "font-bold" }, "CẢNH BÁO GIAN LẬN!"),
                    React.createElement('div', { className: "text-sm" }, "Bạn đã rời khỏi tab thi. Lần " + cheatWarnings)
                )
            )
        ) : null,
        
        // Header
        React.createElement('div', { className: "flex justify-between items-center mb-6" },
            React.createElement('div', { className: "bg-white px-4 py-2 rounded-xl shadow-sm border font-bold" },
                "Câu " + (currentIdx + 1) + "/" + totalQuestions
            ),
            React.createElement('div', { className: "flex items-center gap-2" },
                React.createElement('div', { className: "bg-green-100 text-green-700 px-3 py-2 rounded-xl border text-sm" },
                    React.createElement('i', { className: "fas fa-clock mr-1" }),
                    formatTime(elapsedTime)
                ),
                cheatWarnings > 0 ? React.createElement('div', { className: "bg-red-100 text-red-600 px-3 py-2 rounded-xl border text-sm" },
                    React.createElement('i', { className: "fas fa-exclamation-triangle mr-1" }),
                    cheatWarnings
                ) : null,
                React.createElement('div', { className: "bg-blue-600 px-6 py-2 rounded-xl shadow-md text-white font-black" },
                    React.createElement('i', { className: "fas fa-star mr-2 text-yellow-300" }),
                    score.toFixed(1)  // Thêm .toFixed(1)
                )
            )
        ),
        
        // Progress bar
        React.createElement('div', { className: "w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden" },
            React.createElement('div', { 
                className: "bg-blue-500 h-full rounded-full transition-all", 
                style: { width: ((currentIdx + 1) / totalQuestions * 100) + '%' }
            })
        ),
        
        // Explanation
        showExpl ? React.createElement('div', { className: "explanation-anim bg-white border-2 border-blue-500 p-8 rounded-3xl shadow-xl mb-8" },
            React.createElement('div', { className: "flex items-center mb-4 text-blue-600 font-bold uppercase tracking-widest text-sm" },
                React.createElement('div', { className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3" },
                    React.createElement('i', { className: "fas fa-brain text-xs" })
                ),
                "Phân tích"
            ),
            React.createElement('div', { className: "text-lg text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100 italic" },
                question?.expl
            ),
            React.createElement('button', { onClick: onNext, className: "mt-8 w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all" },
                currentIdx === totalQuestions - 1 ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO',
                React.createElement('i', { className: "fas fa-chevron-right ml-3" })
            )
        ) : null,
        
        // Question
        React.createElement('div', { className: "glass-panel p-8 md:p-12 mb-6" },
            React.createElement('h2', { className: "text-xl md:text-2xl font-extrabold text-slate-800 mb-10 leading-snug" },
                question?.q
            ),
            // Options
            React.createElement('div', { className: "grid gap-4" },
                (question?.options || []).map(function(opt, i) {
                    var style = "border-slate-100 text-slate-700 hover:border-blue-200 hover:bg-blue-50";
                    if (selected !== null) {
                        if (i === question.a) style = "border-green-500 bg-green-50 text-green-700 font-bold ring-2 ring-green-100";
                        else if (i === selected) style = "border-red-500 bg-red-50 text-red-700 font-bold ring-2 ring-red-100";
                        else style = "border-transparent text-slate-300 opacity-50";
                    }
                    
                    return React.createElement('button', {
                        key: i,
                        disabled: selected !== null,
                        onClick: function() { onSelect(i); },
                        className: "p-5 rounded-2xl border-2 text-left flex items-center shadow-sm transition-all " + style
                    },
                        React.createElement('div', { 
                            className: "w-10 h-10 rounded-xl flex items-center justify-center mr-4 font-bold transition-colors " +
                                (selected === null ? 'bg-slate-100 text-slate-500' : 
                                (i === question.a ? 'bg-green-500 text-white' : 'bg-red-500 text-white'))
                        }, String.fromCharCode(65 + i)),
                        React.createElement('span', { className: "text-lg" }, opt)
                    );
                })
            )
        )
    );
};

// QuizScreen component for regular quiz functionality
window.QuizScreen = function({ question, currentIdx, totalQuestions, score, elapsedTime, cheatWarnings, onSelect, onNext, showExpl }) {
    // Process MathJax when component updates
    React.useEffect(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            setTimeout(() => {
                const elements = document.querySelectorAll('.tex2jax_process');
                if (elements.length > 0) {
                    window.MathJax.typesetPromise(Array.from(elements))
                        .catch((err) => console.log('MathJax error:', err));
                }
            }, 100);
        }
    }, [currentIdx, showExpl, question]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return React.createElement('div', { className: "min-h-screen bg-slate-50" },
        React.createElement('div', { className: "max-w-2xl mx-auto px-4 py-10 tex2jax_process" },
            // Header
            React.createElement('div', { className: "flex justify-between items-center mb-6" },
                React.createElement('div', { className: "bg-white px-4 py-2 rounded-xl shadow-sm border font-bold" },
                    "Câu " + (currentIdx + 1) + "/" + totalQuestions
                ),
                React.createElement('div', { className: "flex items-center gap-2" },
                    React.createElement('div', { className: "bg-green-100 text-green-700 px-3 py-2 rounded-xl border text-sm" },
                        React.createElement('i', { className: "fas fa-clock mr-1" }),
                        formatTime(elapsedTime)
                    ),
                    React.createElement('div', { className: "bg-blue-600 px-6 py-2 rounded-xl shadow-md text-white font-black" },
                        React.createElement('i', { className: "fas fa-star mr-2 text-yellow-300" }),
                        score.toFixed(1)
                    )
                )
            ),
            
            // Progress bar
            React.createElement('div', { className: "w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden" },
                React.createElement('div', { 
                    className: "bg-blue-500 h-full rounded-full transition-all", 
                    style: { width: ((currentIdx + 1) / totalQuestions * 100) + '%' }
                })
            ),
            
            // Explanation
            showExpl ? React.createElement('div', { className: "explanation-anim bg-white border-2 border-blue-500 p-8 rounded-3xl shadow-xl mb-8" },
                React.createElement('div', { className: "flex items-center mb-4 text-blue-600 font-bold uppercase tracking-widest text-sm" },
                    React.createElement('div', { className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3" },
                        React.createElement('i', { className: "fas fa-brain text-xs" })
                    ),
                    "Phân tích"
                ),
                React.createElement(window.LaTeXText, { 
                    className: "text-lg text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100 italic",
                    text: question?.expl
                }),
                React.createElement('button', { onClick: onNext, className: "mt-8 w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all" },
                    currentIdx === totalQuestions - 1 ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO',
                    React.createElement('i', { className: "fas fa-chevron-right ml-3" })
                )
            ) : null,
            
            // Question
            React.createElement('div', { className: "glass-panel p-8 md:p-12 mb-6" },
                React.createElement(window.LaTeXText, { 
                    className: "text-xl md:text-2xl font-extrabold text-slate-800 mb-10 leading-snug",
                    text: question?.q
                }),
                // Options
                React.createElement('div', { className: "grid gap-4" },
                    (question?.options || []).map(function(opt, i) {
                        var style = "border-slate-100 text-slate-700 hover:border-blue-200 hover:bg-blue-50";
                        
                        return React.createElement('button', {
                            key: i,
                            onClick: function() { onSelect(i); },
                            className: "p-5 rounded-2xl border-2 text-left flex items-center shadow-sm transition-all " + style
                        },
                            React.createElement('div', { 
                                className: "w-10 h-10 rounded-xl flex items-center justify-center mr-4 font-bold transition-colors bg-slate-100 text-slate-500"
                            }, String.fromCharCode(65 + i)),
                            React.createElement(window.LaTeXText, { 
                                className: "text-lg",
                                text: opt
                            })
                        );
                    })
                )
            )
        )
    );
};