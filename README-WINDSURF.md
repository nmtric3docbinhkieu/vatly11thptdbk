# 🚀 MCP Database cho Windsurf - VatLy11

**Cấu hình MCP cho Windsurf để quản lý trắc nghiệm công thức chương 4**

## 🎯 Mục tiêu

Tự động tạo bảng và lưu kết quả trắc nghiệm công thức chương 4 **KHÔNG CẦN THAO TÁC THỦ CÔNG**

## 🛠️ Các bước cấu hình

### Bước 1: Mở Windsurf MCP Configuration

1. Mở Windsurf
2. Vào **Cascade** (biểu tượng góc trái màn hình)
3. Nhấp vào **biểu tượng búa** (MCP Servers)
4. Chọn **Configure**

### Bước 2: Cấu hình MCP Server

1. File `mcp_config.json` sẽ mở ra
2. **XÓA TOÀN BỘ** nội dung cũ
3. **COPY** và **PASTE** nội dung sau:

```json
{
  "mcpServers": {
    "vatly11-database": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": ["d:\\OneDrive - moet.edu.vn\\CÁ NHÂN\\VIẾT APP\\VATLY11\\mcp-server-auto.js"],
      "cwd": "d:\\OneDrive - moet.edu.vn\\CÁ NHÂN\\VIẾT APP\\VATLY11",
      "env": {
        "SUPABASE_URL": "https://bxffaxcimeturttxqrme.supabase.co",
        "SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZmZheGNpbWV0dXJ0dHhxcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MDk1MzQsImV4cCI6MjA4NTk4NTUzNH0.uU3H707Qjfd2X4iQN3K9KKhsvNZkYn8v8zB_5lthzr0",
        "MCP_SERVER_NAME": "vatly11-database",
        "MCP_SERVER_VERSION": "1.0.0"
      }
    }
  }
}
```

### Bước 3: Lưu và Restart

1. **Lưu file** (Ctrl + S)
2. **Đóng Windsurf hoàn toàn**
3. **Mở lại Windsurf**

### Bước 4: Kiểm tra kết nối

1. Vào lại **Cascade → biểu tượng búa**
2. Nếu thấy **đèn xanh** và các tools hiện ra → **THÀNH CÔNG!**

## 🎯 Sử dụng MCP trong Windsurf

### 1. Tạo bảng dữ liệu:
```
"Tạo bảng dữ liệu cho trắc nghiệm công thức chương 4"
```

### 2. Lưu kết quả học sinh:
```
"Lưu kết quả: Nguyễn Văn A, 11A1, công thức dòng điện, 8 điểm, 8/10 câu đúng"
```

### 3. Xem bảng xếp hạng:
```
"Xem bảng xếp hạng công thức chương 4"
```

## 🛠️ Tools có sẵn

- `create_chapter4_formula_tables` - Tự động tạo bảng
- `save_formula_score` - Tự động lưu kết quả
- `get_formula_leaderboard` - Tự động lấy xếp hạng

## ✅ Kiểm tra hoạt động

Sau khi cấu hình xong, thử các lệnh:

1. **Kiểm tra kết nối:**
   ```
   "Kiểm tra kết nối MCP database"
   ```

2. **Tạo bảng:**
   ```
   "Tạo bảng dữ liệu cho trắc nghiệm công thức chương 4"
   ```

3. **Test lưu điểm:**
   ```
   "Lưu kết quả test: Trần Thị B, 11A2, định luật Coulomb, 9 điểm, 9/10"
   ```

## 🔥 TÍNH NĂNG TỰ ĐỘNG

✅ **Tự động tạo bảng** trên Supabase  
✅ **Tự động tạo học sinh** nếu chưa có  
✅ **Tự động lưu kết quả**  
✅ **Tự động cập nhật xếp hạng**  
✅ **KHÔNG CẦN** thao tác thủ công  

## ⚠️ Lưu ý quan trọng

- Đảm bảo đường dẫn đúng với máy của bạn
- Nếu node.exe ở vị trí khác, cập nhật đường dẫn trong `command`
- File `mcp-server-auto.js` phải tồn tại trong thư mục project

## 🎉 HOÀN TẤT!

Bây giờ bạn có thể sử dụng MCP để quản lý trắc nghiệm công thức chương 4 **HOÀN TOÀN TỰ ĐỘNG** trong Windsurf!
