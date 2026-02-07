# Cách đưa bài tập Vật Lí 11 lên online để gửi link cho học sinh

File `index.html` (trang bài tập Vật Lí 11) hiện chạy offline. Để học sinh mở được bằng link (online), bạn có thể dùng một trong các cách sau. **Tất cả đều miễn phí.**

---

## Cách 1: Vercel (nên dùng – có sẵn cấu hình)

Bạn đã có file `vercel.json` trong project, nên dùng Vercel rất thuận tiện.

### Bước 1: Đẩy code lên GitHub (nếu chưa có)

1. Tạo tài khoản [GitHub](https://github.com) (miễn phí).
2. Tạo repository mới (New repository), đặt tên ví dụ: `vatly11`.
3. Trên máy, mở thư mục project trong Terminal/PowerShell và chạy:

```bash
git init
git add .
git commit -m "Deploy bai tap Vat Ly 11"
git branch -M main
git remote add origin https://github.com/TEN-BAN-GITHUB/vatly11.git
git push -u origin main
```

(Thay `TEN-BAN-GITHUB` và `vatly11` bằng tên GitHub và tên repo của bạn.)

### Bước 2: Deploy lên Vercel

1. Vào [vercel.com](https://vercel.com), đăng nhập bằng tài khoản GitHub.
2. Chọn **Add New** → **Project**.
3. Chọn repository `vatly11` (hoặc tên repo bạn đã tạo).
4. Bấm **Deploy** (không cần đổi cài đặt).
5. Đợi vài chục giây, Vercel sẽ cho bạn một link dạng:  
   **`https://vatly11-xxxx.vercel.app`**

### Gửi cho học sinh

- Gửi link **`https://vatly11-xxxx.vercel.app`** (hoặc link Vercel hiển thị) cho học sinh.
- Học sinh mở link trên điện thoại hoặc máy tính, không cần cài gì thêm.

**Lưu ý:** Nếu bạn dùng Supabase (lưu điểm, đăng nhập), nhớ cập nhật `CONFIG` trong `index.html` với `supabaseUrl` và `supabaseKey` đúng trước khi push lên GitHub (theo `HUONG-DAN-SETUP.md`).

---

## Cách 2: Netlify Drop (nhanh, không cần GitHub)

Không cần tạo repo, chỉ cần kéo thả thư mục.

1. Vào [app.netlify.com/drop](https://app.netlify.com/drop).
2. Đăng nhập Netlify (hoặc đăng ký miễn phí bằng email/Google).
3. Kéo **cả thư mục** chứa `vatly11chuong3.html` (và `vercel.json` nếu muốn) vào vùng “Drop your site here”.
4. Netlify sẽ tạo site và cho link dạng: **`https://tên-ngẫu-nhiên.netlify.app`**.
5. Gửi link này cho học sinh.

Trang chủ mặc định là `index.html` nên chỉ cần gửi link gốc cho học sinh.

---

## Cách 3: GitHub Pages

1. Đẩy project lên GitHub (giống Bước 1 ở Cách 1).
2. Vào repository trên GitHub → **Settings** → **Pages**.
3. Ở **Source** chọn **Deploy from a branch**.
4. Branch chọn **main**, folder chọn **/ (root)** → **Save**.
5. Đợi 1–2 phút, trang sẽ có tại:  
   **`https://TEN-BAN-GITHUB.github.io/vatly11/`**
6. Gửi link: **`https://TEN-BAN-GITHUB.github.io/vatly11/`** (hoặc `.../vatly11/index.html`) cho học sinh.

---

## Tóm tắt

| Cách        | Ưu điểm                    | Gửi cho học sinh                    |
|------------|----------------------------|-------------------------------------|
| **Vercel** | Có sẵn `vercel.json`, link gọn | `https://tên-project.vercel.app`   |
| **Netlify Drop** | Không cần GitHub, kéo thả | `https://tên.netlify.app` |
| **GitHub Pages** | Miễn phí, gắn với GitHub | `https://username.github.io/vatly11/` |

Chỉ cần gửi **một link**; học sinh mở bằng trình duyệt (Chrome, Cốc Cốc, Safari…) là làm bài được.
