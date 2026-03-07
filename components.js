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
                            text: topic.content,
                            isHTML: true
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
window.LaTeXText = function({ text, className, isHTML = false }) {
    const elementRef = React.useRef(null);
    
    React.useEffect(() => {
        if (elementRef.current && window.MathJax && window.MathJax.typesetPromise) {
            const delay = isHTML ? 200 : 100; // Tăng delay cho HTML content
            setTimeout(() => {
                window.MathJax.typesetPromise([elementRef.current])
                    .catch((err) => console.log('MathJax error:', err));
            }, delay);
        }
    }, [text]);
    
    if (isHTML) {
        return React.createElement('div', { 
            ref: elementRef,
            className: className,
            dangerouslySetInnerHTML: { __html: text }
        });
    } else {
        return React.createElement('span', { 
            ref: elementRef,
            className: className 
        }, text);
    }
};

// Component màn hình giải bài tập ôn
window.SolveExercisesScreen = function({ onBack, chapter }) {
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [answeredQuestions, setAnsweredQuestions] = React.useState(new Set());
    const [userAnswers, setUserAnswers] = React.useState({}); // Lưu đáp án của từng câu
    const [viewedAnswers, setViewedAnswers] = React.useState(new Set()); // Lưu các câu đã xem đáp án
    const [showResults, setShowResults] = React.useState(false); // Hiển thị kết quả cuối cùng
    const [elapsedTime, setElapsedTime] = React.useState(0); // Thời gian đã trôi qua (giây)
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
        setUserAnswers({}); // Reset đáp án
        setViewedAnswers(new Set()); // Reset câu đã xem đáp án
        setShowResults(false); // Reset màn hình kết quả
        setElapsedTime(0);
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

    // Khôi phục selectedAnswer và showAnswer khi chuyển câu
    React.useEffect(() => {
        setSelectedAnswer(userAnswers[currentQuestionIndex] || null);
        setShowAnswer(viewedAnswers.has(currentQuestionIndex));
    }, [currentQuestionIndex]);

    // Timer đếm thời gian thực thi
    React.useEffect(() => {
        if (!isTimerActive) return;

        const timer = setInterval(() => {
            setElapsedTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isTimerActive]);

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
        // Nếu câu này đã có đáp án được lưu rồi thì không cho chọn lại
        if (userAnswers[currentQuestionIndex] !== undefined) return;
        
        // Chỉ setSelectedAnswer, chưa lưu vào userAnswers
        setSelectedAnswer(answerIndex);
    };

    const handleShowAnswer = () => {
        if (selectedAnswer === null) return;
        
        // Lưu đáp án vào userAnswers khi bấm Xem đáp án
        const newAnswers = { ...userAnswers, [currentQuestionIndex]: selectedAnswer };
        setUserAnswers(newAnswers);
        
        // Đánh dấu câu đã xem đáp án
        setViewedAnswers(prev => new Set(prev).add(currentQuestionIndex));
        
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
            setShowAnswer(false);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setShowAnswer(false);
        }
    };

    const handleJumpToQuestion = (index) => {
        setCurrentQuestionIndex(index);
        setShowAnswer(false);
    };

    const handleComplete = async () => {
        // Tính kết quả
        let correctCount = 0;
        Object.keys(userAnswers).forEach(questionIndex => {
            if (userAnswers[questionIndex] === questions[questionIndex].a) {
                correctCount++;
            }
        });
        
        const finalScore = Math.round((correctCount / questions.length) * 50); // Tối đa 50 điểm
        const timeInMinutes = Math.floor(elapsedTime / 60);
        
        // Debug
        console.log('=== DEBUG HANDLE COMPLETE ===');
        console.log('Correct count:', correctCount);
        console.log('Total questions:', questions.length);
        console.log('Final score:', finalScore);
        console.log('Elapsed time:', elapsedTime);
        console.log('Warning count:', warningCount);
        console.log('Current student:', window.currentStudent);
        
        // Lưu kết quả vào Supabase
        const supabase = window.getSupabase();
        console.log('Supabase:', supabase);
        
        // Lấy thông tin học sinh từ localStorage
        const studentInfo = JSON.parse(localStorage.getItem(window.CONFIG.storageKey) || 'null');
        console.log('Student info from localStorage:', studentInfo);
        console.log('Student info type:', typeof studentInfo);
        console.log('Student ID:', studentInfo?.id);
        console.log('Student ID type:', typeof studentInfo?.id);
        
        if (supabase && studentInfo) {
            console.log('Attempting to save to exercise_attempts_chapter3...');
            try {
                const insertData = {
                    student_id: studentInfo.id,
                    correct_answers: correctCount,
                    total_questions: questions.length,
                    score: parseInt(Math.round(finalScore)), // Chắc chắn là integer
                    time_taken: elapsedTime,
                    cheat_warnings: warningCount,
                    chapter: 3,
                    created_at: new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString() // +7 giờ
                };
                console.log('Insert data:', insertData);
                console.log('Insert data keys:', Object.keys(insertData));
                console.log('Insert data types:', Object.entries(insertData).map(([k, v]) => [k, typeof v]));
                
                const { data, error } = await supabase.from('exercise_attempts_chapter3').insert([insertData]);
                console.log('Insert result:', { data, error });
                
                if (error) {
                    console.error('Lỗi khi lưu kết quả:', error);
                    console.error('Error details:', error.details);
                    console.error('Error hint:', error.hint);
                    alert('Lỗi khi lưu kết quả: ' + error.message);
                } else {
                    alert(`Hoàn thành! Đúng ${correctCount}/${questions.length} câu.`);
                }
            } catch (err) {
                console.error('Lỗi khi lưu kết quả:', err);
                alert('Lỗi khi lưu kết quả: ' + err.message);
            }
        } else {
            console.log('Cannot save - missing supabase or studentInfo');
            if (!supabase) alert('Chưa kết nối database.');
            if (!studentInfo) alert('Chưa đăng nhập.');
        }
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
                        elapsedTime > 1800 ? 'bg-red-100 text-red-700' : 
                        elapsedTime > 900 ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-green-100 text-green-700'
                    }`
                },
                    React.createElement('i', { className: "fas fa-clock" }),
                    formatTime(elapsedTime)
                ),
                // Score
                React.createElement('div', { className: "flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg font-mono text-sm font-bold" },
                    React.createElement('i', { className: "fas fa-star" }),
                    `${(score || 0).toFixed(1)}đ`
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
                        const userAnswer = userAnswers[index];
                        const isAnswered = userAnswer !== undefined;
                        const isCurrent = index === currentQuestionIndex;
                        const isCorrect = isAnswered && userAnswer === questions[index].a;
                        
                        return React.createElement('button', {
                            key: index,
                            onClick: () => handleJumpToQuestion(index),
                            className: `p-2 rounded-lg text-sm font-medium transition-all ${
                                isCurrent ? 'bg-blue-600 text-white scale-105' :
                                isCorrect ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                                isAnswered ? 'bg-red-100 text-red-700 hover:bg-red-200' :
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
                            const userAnswer = userAnswers[currentQuestionIndex];
                            const hasViewedAnswer = viewedAnswers.has(currentQuestionIndex);
                            const isSelected = userAnswer === index || (!hasViewedAnswer && selectedAnswer === index);
                            const isCorrect = index === currentQuestion.a;
                            const isWrong = isSelected && !isCorrect;
                            
                            return React.createElement('button', {
                                key: index,
                                onClick: () => handleAnswerSelect(index),
                                disabled: userAnswers[currentQuestionIndex] !== undefined,
                                className: `w-full text-left p-4 rounded-xl border-2 transition-all text-left ${
                                    isCorrect && hasViewedAnswer ? 'bg-green-50 border-green-500 text-green-800' :
                                    isWrong && hasViewedAnswer ? 'bg-red-50 border-red-500 text-red-800' :
                                    isSelected && !hasViewedAnswer ? 'bg-blue-50 border-blue-500 text-blue-800' :
                                    'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700'
                                } ${userAnswers[currentQuestionIndex] !== undefined ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'}`
                            },
                            React.createElement('div', { className: "flex items-center justify-between" },
                                React.createElement('div', { className: "flex items-center gap-3" },
                                    React.createElement('span', { 
                                        className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                            isCorrect && hasViewedAnswer ? 'bg-green-600 text-white' :
                                            isWrong && hasViewedAnswer ? 'bg-red-600 text-white' :
                                            isSelected && !hasViewedAnswer ? 'bg-blue-600 text-white' :
                                            'bg-slate-200 text-slate-600'
                                        }`
                                    }, String.fromCharCode(65 + index)),
                                    React.createElement(window.LaTeXText, { 
                                        className: "text-base leading-relaxed",
                                        text: option
                                    })
                                ),
                                (isCorrect || isWrong) && hasViewedAnswer && React.createElement('i', {
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
                            text: currentQuestion.expl,
                            isHTML: true
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
                            onClick: currentQuestionIndex === questions.length - 1 ? handleComplete : handleNext,
                            disabled: currentQuestionIndex === questions.length - 1 && !showAnswer,
                            className: "px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all hover:scale-[1.02] flex items-center gap-2"
                        },
                            React.createElement('i', { className: "fas fa-" + (currentQuestionIndex === questions.length - 1 ? "check" : "arrow-right") }),
                            currentQuestionIndex === questions.length - 1 ? "Nộp bài" : "Câu tiếp theo"
                        )
                    )
                )
            )
        )
    )
};

// QuizScreen component for regular quiz functionality
window.QuizScreen = function({ question, currentIdx, totalQuestions, score, elapsedTime, cheatWarnings, onSelect, onNext, showExpl }) {
    // State for true-false selections
    const [trueFalseSelections, setTrueFalseSelections] = React.useState({});
    
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

    // Reset true-false selections when question changes
    React.useEffect(() => {
        setTrueFalseSelections({});
    }, [currentIdx, question]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Handle true-false selection
    const handleTrueFalseSelect = (partIndex, value) => {
        const newSelections = { ...trueFalseSelections, [partIndex]: value };
        setTrueFalseSelections(newSelections);
        
        // Check if all parts are selected
        const questionType = question?.type || 'multiple-choice';
        if (questionType === 'true-false' && Object.keys(newSelections).length === question.parts.length) {
            // All parts selected, submit all answers
            onSelect(newSelections);
        }
    };

    // Render different question types
    const renderQuestionOptions = () => {
        const questionType = question?.type || 'multiple-choice';
        
        switch (questionType) {
            case 'multiple-choice':
                return React.createElement('div', { className: "grid gap-4" },
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
                );
                
            case 'true-false':
                return React.createElement('div', { className: "grid gap-4" },
                    (question?.parts || []).map(function(part, i) {
                        const isSelected = trueFalseSelections[i] !== undefined;
                        const selectedValue = trueFalseSelections[i];
                        
                        return React.createElement('div', { 
                            key: i, 
                            className: "p-5 rounded-2xl border-2 border-slate-200 bg-white shadow-sm" 
                        },
                            React.createElement('div', { className: "flex items-start gap-4" },
                                React.createElement('div', { 
                                    className: "flex gap-3 mt-1"
                                },
                                    React.createElement('button', {
                                        onClick: function() { handleTrueFalseSelect(i, 'true'); },
                                        disabled: isSelected,
                                        className: `px-4 py-2 rounded-lg border-2 font-bold transition-colors ${
                                            selectedValue === 'true' 
                                                ? 'bg-green-500 text-white border-green-500' 
                                                : 'border-green-200 text-green-700 hover:bg-green-50'
                                        } ${isSelected ? 'cursor-not-allowed opacity-50' : ''}`
                                    }, "ĐÚNG"),
                                    React.createElement('button', {
                                        onClick: function() { handleTrueFalseSelect(i, 'false'); },
                                        disabled: isSelected,
                                        className: `px-4 py-2 rounded-lg border-2 font-bold transition-colors ${
                                            selectedValue === 'false' 
                                                ? 'bg-red-500 text-white border-red-500' 
                                                : 'border-red-200 text-red-700 hover:bg-red-50'
                                        } ${isSelected ? 'cursor-not-allowed opacity-50' : ''}`
                                    }, "SAI")
                                ),
                                React.createElement('div', { className: "flex-1" },
                                    React.createElement('div', { className: "font-bold text-slate-800 mb-2" },
                                        "Câu " + (i + 1) + "."
                                    ),
                                    React.createElement(window.LaTeXText, { 
                                        className: "text-slate-700",
                                        text: part.content
                                    })
                                )
                            )
                        );
                    }),
                    // Progress indicator for true-false
                    React.createElement('div', { className: "mt-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200" },
                        React.createElement('div', { className: "flex items-center justify-between" },
                            React.createElement('span', { className: "text-blue-700 font-bold" }, 
                                "Đã chọn: " + Object.keys(trueFalseSelections).length + "/" + question.parts.length
                            ),
                            Object.keys(trueFalseSelections).length === question.parts.length && 
                                React.createElement('span', { className: "text-green-600 font-bold animate-pulse" }, 
                                    "✓ Hoàn thành - Đang kiểm tra..."
                                )
                        )
                    )
                );
                
            case 'short-answer':
                return React.createElement('div', { className: "space-y-6" },
                    React.createElement('div', { className: "bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl" },
                        React.createElement('div', { className: "flex items-center gap-2 mb-3 text-blue-700" },
                            React.createElement('i', { className: "fas fa-edit" }),
                            React.createElement('span', { className: "font-bold" }, "Nhập câu trả lời của bạn:")
                        ),
                        React.createElement('input', {
                            type: "text",
                            placeholder: "Nhập đáp án...",
                            className: "w-full px-4 py-3 rounded-xl border-2 border-blue-200 text-lg focus:border-blue-400 focus:outline-none",
                            onKeyDown: function(e) {
                                if (e.key === 'Enter' && e.target.value.trim()) {
                                    onSelect(e.target.value.trim());
                                }
                            }
                        })
                    ),
                    React.createElement('div', { className: "bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl" },
                        React.createElement('div', { className: "flex items-center gap-2 text-amber-700" },
                            React.createElement('i', { className: "fas fa-info-circle" }),
                            React.createElement('span', { className: "font-bold" }, "Gợi ý:")
                        ),
                        React.createElement('div', { className: "text-amber-800 mt-2" },
                            "Nhập đáp án và nhấn Enter. Đáp án có thể chứa số, đơn vị và công thức."
                        )
                    )
                );
                
            case 'essay':
                return React.createElement('div', { className: "space-y-6" },
                    React.createElement('div', { className: "bg-green-50 border-2 border-green-200 p-6 rounded-2xl" },
                        React.createElement('div', { className: "flex items-center gap-2 mb-4 text-green-700" },
                            React.createElement('i', { className: "fas fa-pen" }),
                            React.createElement('span', { className: "font-bold text-lg" }, "Dạng bài tự luận")
                        ),
                        React.createElement('div', { className: "bg-white p-4 rounded-xl border border-green-100" },
                            React.createElement('div', { className: "flex items-center gap-2 text-green-600 mb-2" },
                                React.createElement('i', { className: "fas fa-lightbulb" }),
                                React.createElement('span', { className: "font-bold" }, "Hướng dẫn:")
                            ),
                            React.createElement('ul', { className: "list-disc list-inside text-green-800 space-y-1" },
                                React.createElement('li', null, "Làm bài trên giấy nháp"),
                                React.createElement('li', null, "Soạn thảo câu trả lời đầy đủ, rõ ràng"),
                                React.createElement('li', null, "Khi đã hoàn thành, bấm nút bên dưới")
                            )
                        )
                    ),
                    React.createElement('button', {
                        onClick: function() { onSelect('essay-completed'); },
                        className: "w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3"
                    },
                        React.createElement('i', { className: "fas fa-check-circle" }),
                        "ĐÃ HOÀN THÀNH BÀI LÀM"
                    )
                );
                
            default:
                return React.createElement('div', { className: "text-center py-8 text-slate-500" },
                    "Đang tải câu hỏi..."
                );
        }
    };

    return React.createElement('div', { className: "min-h-screen bg-slate-50" },
        React.createElement('div', { className: "max-w-4xl mx-auto px-4 py-10 tex2jax_process" },
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
            
            // Question type indicator
            React.createElement('div', { className: "mb-6" },
                function() {
                    const type = question?.type || 'multiple-choice';
                    const typeInfo = {
                        'multiple-choice': { icon: 'fa-list-check', color: 'blue', text: 'Trắc nghiệm nhiều lựa chọn' },
                        'true-false': { icon: 'fa-check-circle', color: 'purple', text: 'Trắc nghiệm Đúng - Sai' },
                        'short-answer': { icon: 'fa-edit', color: 'orange', text: 'Trắc nghiệm trả lời ngắn' },
                        'essay': { icon: 'fa-pen', color: 'green', text: 'Tự luận' }
                    };
                    const info = typeInfo[type] || typeInfo['multiple-choice'];
                    
                    return React.createElement('div', { 
                        className: `bg-${info.color}-100 border-2 border-${info.color}-200 px-4 py-3 rounded-xl flex items-center gap-3` 
                    },
                        React.createElement('i', { 
                            className: `fas ${info.icon} text-${info.color}-600 font-bold` 
                        }),
                        React.createElement('span', { 
                            className: `font-bold text-${info.color}-700` 
                        }, info.text)
                    );
                }()
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
                    text: question?.expl,
                    isHTML: true
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
                renderQuestionOptions()
            )
        )
    );
};