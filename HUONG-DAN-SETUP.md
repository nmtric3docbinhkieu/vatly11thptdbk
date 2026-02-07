# Hướng dẫn thiết lập Webapp Vật Lí 11 - Đăng nhập & Xuất Excel

## 1. Tạo tài khoản Supabase (miễn phí)

1. Truy cập [supabase.com](https://supabase.com) và đăng ký
2. Tạo dự án mới (New Project)
3. Đợi vài phút để dự án được khởi tạo

## 2. Tạo bảng trong Supabase

1. Vào **SQL Editor** trong dashboard Supabase
2. Chọn **New Query**
3. Copy toàn bộ nội dung file `supabase-setup.sql` và paste vào
4. Chọn **Run** để thực thi

## 3. Lấy thông tin kết nối

1. Vào **Settings** (biểu tượng bánh răng) → **API**
2. Sao chép:
   - **Project URL** (ví dụ: `https://abcdefgh.supabase.co`)
   - **anon public** key (phần `anon` trong API Keys)

## 4. Cấu hình trong file HTML

Mở file `index.html` và tìm phần `CONFIG` (khoảng dòng 45):

```javascript
const CONFIG = {
    supabaseUrl: 'https://YOUR_PROJECT.supabase.co',  // Thay bằng Project URL
    supabaseKey: 'YOUR_SUPABASE_ANON_KEY',            // Thay bằng anon key
    adminPassword: 'teacher123'                       // Đổi mật khẩu giáo viên
};
```

- **supabaseUrl**: Dán Project URL vừa copy
- **supabaseKey**: Dán anon public key
- **adminPassword**: Đặt mật khẩu riêng để xuất file Excel (mặc định: `teacher123`)

## 5. Deploy lên Vercel

### Cách 1: Deploy thư mục hiện tại

1. Đăng nhập [vercel.com](https://vercel.com)
2. Kéo thả thư mục dự án vào Vercel, hoặc kết nối GitHub
3. Vercel sẽ tự nhận diện và deploy

### Cách 2: Dùng Vercel CLI

```bash
npm i -g vercel
cd vatly11
vercel
```

**Lưu ý**: Trang chính là `index.html`. File `vercel.json` đã cấu hình sẵn:

```json
{
  "rewrites": [{ "source": "/", "destination": "/index.html" }]
}
```

## 6. Sử dụng

### Học sinh

- **Đăng ký lần đầu**: Nhập Họ tên, Lớp, Mật khẩu → Chọn "Đăng ký"
- **Đăng nhập lần sau**: Nhập Họ tên, Lớp, Mật khẩu đã đăng ký → Chọn "Đăng nhập"
- Sau khi đăng nhập: Ôn tập kiến thức → Làm trắc nghiệm
- Kết quả tự động được lưu mỗi khi hoàn thành bài làm

### Giáo viên

- Trên màn hình đăng nhập hoặc trang chủ: Click **"Giáo viên: Xuất Excel kết quả"**
- Nhập mật khẩu giáo viên (đã cấu hình trong CONFIG)
- Chọn **"Xuất Excel"** → File Excel sẽ được tải về

### Nội dung file Excel

| Cột | Nội dung |
|-----|----------|
| STT | Số thứ tự |
| Họ và tên | Họ tên học sinh |
| Lớp | Lớp học |
| Số lần làm bài | Tổng số lần đã làm trắc nghiệm |
| Điểm cao nhất | Điểm tốt nhất trong các lần làm |
| Điểm trung bình | Điểm trung bình tất cả các lần |
| Lần đầu làm | Thời gian lần làm đầu tiên |
| Lần cuối làm | Thời gian lần làm gần nhất |

## Khắc phục sự cố

- **"Ứng dụng chưa được cấu hình"**: Kiểm tra lại supabaseUrl và supabaseKey
- **"Lỗi xuất file"**: Đảm bảo đã chạy xong file `supabase-setup.sql`
- **"Sai mật khẩu giáo viên"**: Kiểm tra adminPassword trong CONFIG
