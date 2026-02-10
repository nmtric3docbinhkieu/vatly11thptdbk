# 🔧 Hướng Dẫn Sửa Lỗi FetchError

## ❌ Triệu chứng
Khi chạy file `index.html`, console hiển thị:
```
Uncaught (in promise) {name: 'FetchError'}
```

---

## ✅ Nguyên Nhân & Cách Sửa (4 Bước)

### **Bước 1: Kiểm tra Supabase Configuration** 🔐

Mở file [index.html](index.html) và tìm đoạn:

```javascript
const CONFIG = {
    supabaseUrl: 'https://bxffaxcimeturttxqrme.supabase.co',
    supabaseKey: 'eyJhbGciOi...',
    adminPassword: 'teacher123'
};
```

#### **✓ Điều kiện:**
1. **supabaseUrl** phải là URL thực từ Supabase (dạng: `https://xxxxx.supabase.co`)
2. **supabaseKey** phải là Anon Public Key từ Settings > API > anon public
3. **KHÔNG** được chứa từ `YOUR_` (ví dụ: `YOUR_PROJECT`, `YOUR_ANON_KEY`)

#### **Cách lấy credentials từ Supabase:**
1. Đăng nhập [supabase.com](https://supabase.com)
2. Chọn project của bạn
3. Vào **Settings** → **API** → **Project URL** (copy vào `supabaseUrl`)
4. Copy **Anon (public)** key vào `supabaseKey`

---

### **Bước 2: Kiểm tra Network Connection** 🌐

Mở **Console** (F12 → Tab **Console**) và xem dòng nào:
- ✅ **Xanh**: `✅ Supabase kết nối thành công`
- ❌ **Đỏ**: `❌ Lỗi Supabase:...`

**Nếu báo lỗi:**
- [ ] Kiểm tra **Internet connection** có tốt không
- [ ] Kiểm tra **Firewall** có chặn không
- [ ] Kiểm tra Supabase URL **không có typo**
- [ ] Test ping `https://xxxxx.supabase.co` có response không

---

### **Bước 3: Nếu Vẫn Lỗi - Cách Debug Chi Tiết** 🔍

Mở **Developer Tools** (F12) &rarr; Tab **Console** và liên tiếp check:

#### **Test 1: Kiểm tra Supabase Library**
Chạy lệnh này trong console:
```javascript
console.log('Supabase loaded?', !!window.supabase);
```
- ✅ **true** = Thư viện load thành công
- ❌ **false** = Có vấn đề với CDN

#### **Test 2: Kiểm tra CONFIG**
```javascript
console.log(CONFIG.supabaseUrl, CONFIG.supabaseKey.substring(0,20)+'...');
```
Kiểm tra URL và Key có **đúng giá trị** không.

#### **Test 3: Thực hành kết nối thủ công**
```javascript
const testClient = window.supabase.createClient(CONFIG.supabaseUrl, CONFIG.supabaseKey);
testClient.from('students').select('count').limit(1).then(r => console.log('Kết quả:', r));
```
- Nếu thành công, sẽ thấy: `Kết quả: {data: [...], error: null}`
- Nếu lỗi, xem error chi tiết

---

### **Bước 4: Chế Độ Offline Fallback** 📱

**Nếu Supabase không hoạt động**, ứng dụng vẫn chạy ở **mode offline**:
- ✅ Có thể làm quiz **bình thường**
- ⚠️ Kết quả **không được lưu**
- ⚠️ Bảng xếp hạng **không hiện**

**Cách kiểm tra chế độ:**
Vào **Console** &rarr; tìm dòng:
- `⚠️ Supabase chưa kết nối được. Ứng dụng vẫn chạy được ở mode offline.`

Điều này **bình thường** nếu Supabase tạm chưa sẵn sàng.

---

## 🚀 Kiểm tra Nhanh

Làm theo checklist:

- [ ] Cập nhật `supabaseUrl` **đúng** trong `CONFIG`
- [ ] Cập nhật `supabaseKey` **đúng** trong `CONFIG`
- [ ] Mở Console (F12) → xem có lỗi gì **trong dòng đầu tiên**
- [ ] Chạy lệnh `console.log('Supabase loaded?', !!window.supabase)` → kiểm tra **true/false**
- [ ] **F5 refresh** page sau khi sửa

---

## 📞 Nếu Vẫn Có Vấn Đề

Ghi lại:
1. **Lỗi chính xác** từ Console
2. **Supabase URL** (che mất ID dự án)
3. **Browser version**
4. **Screenshot Console**

Rồi liên hệ giáo viên phụ trách!

---

## 📝 Ghi Chú

- **FetchError** thường xuất phát từ **network request thất bại**
- Có thể Supabase URL/Key sai, network không tốt, hoặc Supabase server down
- Code đã được cập nhật với **error logging tốt hơn** để dễ debug
- Các thông báo lỗi giúp xác định **chính xác vấn đề** 🎯

---

**Happy Learning! 🎓**
