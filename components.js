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

// Component màn hình ôn tập
window.SummaryScreen = function({ chapter, onBack, onStart }) {
    var summary = window.getChapterSummary ? window.getChapterSummary(chapter) : { title: "", topics: [] };
    
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
                        React.createElement('div', { className: "text-slate-700" }, topic.content)
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
window.QuizScreen = function({ 
    question, currentIdx, totalQuestions, score, elapsedTime, 
    cheatWarnings, showCheatAlert, selected, onSelect, showExpl, onNext 
}) {
    var formatTime = window.formatTime || function(s) { return s ? Math.floor(s/60) + ':' + (s%60).toString().padStart(2,'0') : '0:00'; };
    
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
                    score
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
        ),
        
        // Explanation
        showExpl ? React.createElement('div', { className: "explanation-anim bg-white border-2 border-blue-500 p-8 rounded-3xl shadow-xl mb-12" },
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
        ) : null
    );
};