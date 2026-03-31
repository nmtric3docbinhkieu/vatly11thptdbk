# MCP Database Connector cho VatLy11

Hướng dẫn cài đặt và sử dụng MCP Database để kết nối tự động với Supabase, đặc biệt cho việc lưu kết quả trắc nghiệm công thức chương 4.

## 🎯 Mục đích chính

Tự động tạo bảng dữ liệu và lưu kết quả học sinh khi làm bài trắc nghiệm **công thức chương 4** mà không cần thao tác thủ công.

## Cài đặt

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Cấu hình environment
File `.env` đã được tạo tự động với cấu hình Supabase của bạn.

### 3. Tạo bảng dữ liệu (QUAN TRỌNG)

**Cách 1: Sử dụng MCP tool**
```
Sử dụng tool auto_create_tables để lấy script SQL
```

**Cách 2: Thủ công**
1. Mở Supabase Dashboard: https://bxffaxcimeturttxqrme.supabase.co
2. Vào SQL Editor
3. Copy toàn bộ nội dung file `setup-database.sql`
4. Paste và click "Run"

## 🛠️ Các công cụ MCP có sẵn

### Tools quan trọng cho chương 4

#### 1. `auto_create_tables`
- **Mục đích**: Tự động tạo tất cả bảng cần thiết
- **Sử dụng**: Chạy 1 lần để thiết lập database
- **Kết quả**: Tạo 4 bảng chính

#### 2. `save_chapter4_formula_score` ⭐
- **Mục đích**: Lưu kết quả trắc nghiệm công thức chương 4
- **Input bắt buộc**:
  - `student_id`: ID học sinh
  - `formula_category`: Danh mục công thức
  - `score`: Điểm số (0-100)
  - `correct_answers`: Số câu đúng
  - `total_questions`: Tổng số câu
- **Input tùy chọn**:
  - `time_taken`: Thời gian làm bài (giây)
  - `difficulty_level`: easy/medium/hard
  - `answers`: JSON chi tiết câu trả lời

#### 3. `get_leaderboard`
- **Mục đích**: Lấy bảng xếp hạng
- **Sử dụng**: `chapter=4` để xem xếp hạng chương 4

### Tools khác
- `query_students` - Xem danh sách học sinh
- `get_student_scores` - Xem điểm của học sinh cụ thể
- `add_student_score` - Thêm điểm chung

## 📊 Cấu trúc bảng dữ liệu

### 1. `students`
- `id`: UUID primary key
- `name`: Tên học sinh
- `email`: Email (unique)
- `class_name`: Lớp học
- `student_id`: Mã học sinh (unique)
- `is_approved`: Đã duyệt chưa

### 2. `chapter4_formula_scores` ⭐ (Quan trọng nhất)
- `id`: UUID primary key
- `student_id`: Reference đến students
- `formula_category`: Danh mục công thức
- `score`: Điểm số
- `correct_answers`: Số câu đúng
- `total_questions`: Tổng số câu
- `time_taken`: Thời gian làm bài
- `difficulty_level`: Mức độ
- `answers`: JSON chi tiết
- `completed_at`: Thời gian hoàn thành

### 3. `leaderboard`
- Tự động cập nhật khi có kết quả mới
- `best_score`: Điểm cao nhất
- `total_attempts`: Số lần thử
- `average_score`: Điểm trung bình

## 🚀 Ví dụ sử dụng thực tế

### Bước 1: Tạo bảng dữ liệu
```
Sử dụng tool auto_create_tables
```

### Bước 2: Lưu kết quả học sinh làm bài công thức
```
Sử dụng tool save_chapter4_formula_score với:
- student_id: "student123"
- formula_category: "dong_dien_khong_doi"
- score: 85
- correct_answers: 8
- total_questions: 10
- time_taken: 300
- difficulty_level: "medium"
```

### Bước 3: Xem bảng xếp hạng
```
Sử dụng tool get_leaderboard với:
- chapter: 4
- limit: 10
```

## 🔗 Tích hợp với Claude Desktop

Thêm vào `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "vatly11-database": {
      "command": "node",
      "args": ["mcp-server.js"],
      "cwd": "d:\\OneDrive - moet.edu.vn\\CÁ NHÂN\\VIẾT APP\\VATLY11"
    }
  }
}
```

## 📝 Danh mục công thức chương 4

Gợi ý các `formula_category`:
- `dong_dien_khong_doi`: Dòng điện không đổi
- `coulomb`: Định luật Coulomb
- `dien_truong`: Điện trường
- `tu_dien`: Tụ điện
- `cam_ung_dien_tu`: Cảm ứng điện từ
- `dong_dien_phat`: Dòng điện cảm ứng

## ✅ Kiểm tra hoạt động

1. **Tạo bảng**: Chạy `auto_create_tables`
2. **Test lưu điểm**: Chạy `save_chapter4_formula_score`
3. **Kiểm tra**: Chạy `get_leaderboard` với `chapter=4`

## 🔒 Bảo mật

- Row Level Security đã được cấu hình
- Học sinh chỉ xem được kết quả của mình
- Admin có thể xem tất cả kết quả

## 📞 Hỗ trợ

Nếu gặp lỗi:
1. Kiểm tra kết nối Supabase
2. Đảm bảo đã tạo bảng dữ liệu
3. Xem log trong Supabase Dashboard
