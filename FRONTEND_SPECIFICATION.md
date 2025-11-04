# 📋 Mô Tả Chi Tiết Frontend Angular - 3.000.000 VNĐ

## 🎯 Tổng Quan

**Frontend Angular** sẽ chuyển đổi giao diện HTML hiện tại thành ứng dụng Angular, kết nối với Backend API để xử lý dữ liệu động.

---

## 📱 CÁC TRANG & COMPONENTS

### **1. TRANG CHỦ (Home Page)**

**Mô tả:**
- Chuyển đổi từ `index.html` hiện tại
- Hiển thị hero section, packages, templates, gallery, testimonials, FAQ, contact
- **Dữ liệu:** Lấy từ API (templates, packages)

**Tính năng:**
- ✅ Hiển thị danh sách templates từ API (thay vì hardcode)
- ✅ Filter templates theo category (Cưới, Sinh nhật, Tết, ...)
- ✅ Click "Chọn" → Mở form tạo thiệp
- ✅ Click "Đăng nhập/Đăng ký" → Mở modal

**Thời gian:** 4-6 giờ

---

### **2. DANH SÁCH TEMPLATES**

**Mô tả:**
- Trang hiển thị tất cả mẫu thiệp
- Grid layout với search và filter

**Tính năng:**
- ✅ Lấy danh sách templates từ API: `GET /api/templates`
- ✅ Filter theo category (dropdown)
- ✅ Search templates (tìm theo tên)
- ✅ Pagination (nếu có nhiều templates)
- ✅ Click vào template → Mở form tạo thiệp

**Thời gian:** 4-5 giờ

---

### **3. FORM TẠO THIỆP (Card Builder)**

**Mô tả:**
- Modal form 2 cột: Form nhập liệu | Preview real-time
- Người dùng điền thông tin và xem preview ngay

**Tính năng:**

#### **Cột 1: Form Nhập Liệu**
- ✅ **Thông tin cơ bản:**
  - Tên người gửi * (required)
  - Tên người nhận * (required)
  - Lời chúc * (required, textarea)
  - Ngày sự kiện (date picker, optional)
  
- ✅ **Upload Files:**
  - Upload ảnh (JPG, PNG) - Hiển thị preview
  - Upload video (MP4, WebM) - Tối đa 50MB
  - Upload QR Code (PNG, JPG) - Hiển thị preview
  - Upload nhạc nền (MP3, WAV) - Optional
  
- ✅ **Tùy chọn:**
  - Chọn hiệu ứng (dropdown: Trang nghiêm, Lễ hội, Lãng mạn, Hiện đại)

#### **Cột 2: Preview Real-time**
- ✅ Hiển thị thiệp theo thời gian thực
- ✅ Cập nhật ngay khi user nhập/chọn/upload
- ✅ Hiển thị đầy đủ: ảnh, video, QR, lời chúc, tên người gửi/nhận

#### **Xử lý:**
- ✅ Validate form (required fields, file size, file type)
- ✅ Upload files lên server → Lấy URL về
- ✅ Click "Tạo Thiệp" → Gọi API `POST /api/orders` để tạo đơn hàng
- ✅ Sau khi tạo đơn → Chuyển đến trang thanh toán

**Thời gian:** 8-10 giờ

---

### **4. TRANG THANH TOÁN (Payment)**

**Mô tả:**
- Modal hoặc trang riêng để thanh toán
- **QUAN TRỌNG:** Chưa tích hợp thanh toán thật, chỉ MOCK

**Tính năng:**

#### **Bước 1: Chọn Gói**
- ✅ Hiển thị 3 gói: Cơ Bản (Free), Nâng Cao (50k), Cao Cấp (2 triệu)
- ✅ Click chọn gói → Hiển thị giá
- ✅ Click "Tiếp tục" → Chuyển đến form thanh toán

#### **Bước 2: Form Thanh Toán**
- ✅ **Thông tin thanh toán:**
  - Họ tên người thanh toán *
  - Email *
  - Số điện thoại * (validation: 10-11 số)
  
- ✅ **Phương thức thanh toán:**
  - Hiển thị 3 options: VNPay, MoMo, Chuyển khoản
  - **Lưu ý:** Chỉ hiển thị, chưa tích hợp thật
  
- ✅ **Thông tin chuyển khoản:**
  - Hiển thị STK ngân hàng (từ admin config)
  - Hiển thị tên ngân hàng
  - Hiển thị nội dung chuyển khoản: `THIEP MUNG {orderCode}`

#### **Bước 3: Xác Nhận**
- ✅ Click "Xác nhận thanh toán" → Gọi API `POST /api/orders/{id}/payment`
- ✅ **Lưu vào database với status: "Pending"**
- ✅ Hiển thị thông báo: "Đã gửi yêu cầu thanh toán. Admin sẽ xác nhận sau khi nhận được chuyển khoản."
- ✅ **Admin xác nhận thủ công** sau khi khách chuyển khoản

**Thời gian:** 5-6 giờ

---

### **5. ĐĂNG NHẬP/ĐĂNG KÝ**

**Mô tả:**
- Modal đăng nhập/đăng ký
- **ĐƠN GIẢN:** Không dùng JWT phức tạp

**Tính năng:**

#### **Đăng Ký:**
- ✅ Form: Họ tên, Email, Số điện thoại, Mật khẩu
- ✅ Validation: Email format, phone 10-11 số, password min 6 ký tự
- ✅ Gọi API `POST /api/users/register`
- ✅ Sau khi đăng ký thành công → Lưu user info vào localStorage
- ✅ Đóng modal, hiển thị thông báo thành công

#### **Đăng Nhập:**
- ✅ Form: Email, Mật khẩu
- ✅ Gọi API `POST /api/users/login`
- ✅ Nếu thành công → Lưu user info vào localStorage
- ✅ Đóng modal, hiển thị tên user trên header

#### **Xử lý:**
- ✅ Lưu user info vào localStorage (không dùng JWT)
- ✅ Check localStorage để biết user đã đăng nhập chưa
- ✅ Nút "Đăng xuất" → Xóa localStorage

**Thời gian:** 4-5 giờ

---

### **6. TRANG ADMIN (Admin Panel)**

#### **6.1. Admin Login**
- ✅ Form đăng nhập: Username, Password
- ✅ Gọi API `POST /api/admin/login`
- ✅ Lưu admin info vào localStorage
- ✅ Auth guard đơn giản: Check localStorage có admin info không

**Thời gian:** 2 giờ

---

#### **6.2. Admin Dashboard**
- ✅ Hiển thị thống kê cơ bản:
  - Tổng số đơn hàng hôm nay
  - Doanh thu hôm nay
  - Số đơn chưa thanh toán
- ✅ Danh sách đơn hàng mới nhất (10 đơn)
- ✅ Gọi API `GET /api/admin/dashboard`

**Thời gian:** 3-4 giờ

---

#### **6.3. Quản Lý Templates**
- ✅ **Danh sách templates:**
  - Table hiển thị: Tên, Category, Giá, Trạng thái
  - Search, filter
  - Pagination
  
- ✅ **Thêm template:**
  - Form: Tên, Category, Giá, Mô tả, Upload thumbnail
  - Gọi API `POST /api/templates`
  
- ✅ **Sửa template:**
  - Form tương tự, pre-fill data
  - Gọi API `PUT /api/templates/{id}`
  
- ✅ **Xóa template:**
  - Confirm dialog
  - Gọi API `DELETE /api/templates/{id}`

**Thời gian:** 6-8 giờ

---

#### **6.4. Quản Lý Đơn Hàng**
- ✅ **Danh sách đơn hàng:**
  - Table hiển thị: Mã đơn, Tên khách, Số tiền, Trạng thái, Ngày tạo
  - Filter theo trạng thái: Tất cả / Pending / Paid / Failed
  - Search theo mã đơn, tên khách
  - Pagination
  
- ✅ **Xem chi tiết đơn:**
  - Modal hiển thị đầy đủ thông tin đơn
  - Xem thiệp đã tạo (preview)
  
- ✅ **Xác nhận thanh toán:**
  - Nút "Xác nhận thanh toán" trên đơn hàng
  - Gọi API `PUT /api/orders/{id}/confirm-payment`
  - Cập nhật status: "Pending" → "Paid"
  - **Lưu ý:** Admin xác nhận thủ công sau khi khách chuyển khoản

**Thời gian:** 6-8 giờ

---

## 🔧 SERVICES & UTILITIES

### **1. TemplateService**
```typescript
- getTemplates(): Lấy danh sách templates
- getTemplateById(id): Lấy chi tiết template
- filterTemplates(category): Lọc theo category
- searchTemplates(keyword): Tìm kiếm templates
```

**Thời gian:** 2 giờ

---

### **2. OrderService**
```typescript
- createOrder(orderData): Tạo đơn hàng mới
- getOrderById(id): Lấy chi tiết đơn
- getMyOrders(): Lấy đơn của user hiện tại
- updatePaymentStatus(orderId, status): Cập nhật trạng thái thanh toán
```

**Thời gian:** 2 giờ

---

### **3. AuthService**
```typescript
- login(email, password): Đăng nhập
- register(userData): Đăng ký
- logout(): Đăng xuất
- isLoggedIn(): Check đã đăng nhập chưa
- getCurrentUser(): Lấy thông tin user hiện tại
```

**Thời gian:** 2 giờ

---

### **4. FileUploadService**
```typescript
- uploadImage(file): Upload ảnh
- uploadVideo(file): Upload video
- uploadQRCode(file): Upload QR code
- uploadAudio(file): Upload audio
- getUploadProgress(): Theo dõi tiến trình upload
```

**Thời gian:** 3-4 giờ

---

### **5. AdminService**
```typescript
- adminLogin(credentials): Đăng nhập admin
- getDashboardStats(): Lấy thống kê dashboard
- getOrders(filter): Lấy danh sách đơn hàng
- confirmPayment(orderId): Xác nhận thanh toán
```

**Thời gian:** 2 giờ

---

## 📊 TỔNG KẾT

| Hạng mục | Thời gian | Chi phí |
|----------|-----------|---------|
| **Setup & Configuration** | 4-6h | 500.000 |
| **Home Page** | 4-6h | 500.000 |
| **Templates List** | 4-5h | 500.000 |
| **Card Builder Form** | 8-10h | 1.200.000 |
| **Payment (Mock)** | 5-6h | 800.000 |
| **Auth (Đơn giản)** | 4-5h | 500.000 |
| **Admin Panel** | 15-20h | 2.000.000 |
| **Services** | 8-10h | 800.000 |
| **Testing & Polish** | 4-6h | 500.000 |
| **TỔNG** | **56-74 giờ** | **3.000.000** |

---

## ⚠️ LƯU Ý QUAN TRỌNG

### **Thanh Toán:**
- ❌ **CHƯA TÍCH HỢP thanh toán thật** (VNPay, MoMo, Casso.vn)
- ✅ Chỉ làm **MOCK** - Lưu vào database với status "Pending"
- ✅ Admin xác nhận thanh toán **THỦ CÔNG** sau khi khách chuyển khoản
- ✅ Hiển thị thông tin chuyển khoản (STK, ngân hàng) cho khách

### **Đăng Nhập/Đăng Ký:**
- ✅ **ĐƠN GIẢN** - Không dùng JWT phức tạp
- ✅ Lưu user info vào localStorage (không bảo mật cao)
- ✅ Session đơn giản, không có refresh token

### **Không Bao Gồm:**
- ❌ Tích hợp thanh toán thật
- ❌ JWT Token authentication phức tạp
- ❌ Social login (Google, Facebook)
- ❌ Unit tests
- ❌ Advanced animations
- ❌ PWA (Progressive Web App)

---

## 📝 CÁCH TRÌNH BÀY CHO KHÁCH HÀNG

### **Mẫu mô tả ngắn gọn:**

**"Frontend Angular - 3.000.000 VNĐ**

Bao gồm:
- Chuyển đổi giao diện HTML hiện tại sang Angular
- Trang chủ, danh sách templates, form tạo thiệp
- Form thanh toán (mock - chưa tích hợp thật)
- Đăng nhập/đăng ký đơn giản
- Trang quản trị: Dashboard, Quản lý templates, Quản lý đơn hàng
- Kết nối với Backend API
- Upload files (ảnh, video, QR, audio)
- Preview thiệp real-time

**Lưu ý:**
- Chưa tích hợp thanh toán thật (admin xác nhận thủ công)
- Đăng nhập/đăng ký đơn giản (không JWT phức tạp)"**

---

*Last Updated: 2025-01-28*

