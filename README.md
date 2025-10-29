# 🎉 Thiệp Mừng Online - Demo

## Mô tả
Demo đơn giản của nền tảng tạo thiệp mừng online với HTML/CSS/JS thuần.

## Tính năng Demo
- ✅ **3 mẫu thiệp đẹp**: Sinh nhật cơ bản, Cưới hỏi nâng cao, Tết cao cấp
- ✅ **Tạo thiệp tương tác**: Nhập thông tin, preview real-time
- ✅ **Mock thanh toán**: QR code giả lập, flow thanh toán hoàn chỉnh
- ✅ **Export thiệp**: Tải file HTML (có thể in thành PDF)
- ✅ **Responsive design**: Hoạt động tốt trên mobile/desktop

## Cách sử dụng

### 1. Mở demo
```bash
# Mở file index.html trong trình duyệt
# Hoặc dùng live server
npx live-server
```

### 2. Tạo thiệp
1. Chọn mẫu thiệp (50k/100k/200k)
2. Nhập thông tin: tên người gửi, người nhận, lời chúc
3. Xem preview thiệp real-time
4. Nhấn "Tiếp tục thanh toán"

### 3. Thanh toán (Mock)
1. Quét QR code (demo)
2. Nhấn "Mock Thanh Toán" để giả lập
3. Chờ 2 giây xử lý
4. Tải thiệp HTML hoặc chia sẻ

## Cấu trúc file
```
├── index.html          # Trang chính
├── style.css           # CSS styling
├── script.js           # JavaScript logic
└── README.md           # Hướng dẫn
```

## Tính năng chi tiết

### Mẫu thiệp
- **Sinh nhật cơ bản (50k)**: Gradient hồng, emoji bánh kem
- **Cưới hỏi nâng cao (100k)**: Gradient vàng, emoji nhà thờ
- **Tết cao cấp (200k)**: Gradient vàng-đỏ, emoji đèn lồng

### Mock Payment
- QR code VietQR format (demo)
- Thông tin ngân hàng giả lập
- Xử lý thanh toán 2 giây
- Mã giao dịch unique

### Export thiệp
- File HTML có thể in thành PDF
- Responsive design
- Thông tin đầy đủ: người gửi, người nhận, lời chúc
- Mã giao dịch để tracking

## Hạn chế Demo
- ❌ Không có database (dữ liệu không lưu trữ)
- ❌ Không có thanh toán thật
- ❌ Không có backend API
- ❌ Thiệp chỉ là HTML tĩnh (không có animation)

## Phát triển thêm
Để làm sản phẩm thật cần:
- Backend API (.NET/Node.js)
- Database (SQL Server/MySQL)
- Payment gateway (Casso/Sepay)
- PDF generation service
- Animation/effects cho thiệp

## Chi phí ước tính
- **Demo này**: 2 triệu VNĐ ✅
- **Sản phẩm thật**: 50-70 triệu VNĐ
- **Enterprise**: 80-100 triệu VNĐ

---
*Demo được tạo bởi AI Assistant - Phiên bản 1.0*
