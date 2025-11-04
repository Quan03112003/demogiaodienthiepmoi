# 📋 Mô Tả Chi Tiết Backend .NET 8 API - 4.000.000 VNĐ

## 🎯 Tổng Quan

**Backend .NET 8 Web API** sẽ cung cấp các API endpoints để xử lý dữ liệu, kết nối với SQL Server, và phục vụ cho Frontend Angular.

---

## 🗄️ DATABASE & MODELS

### **1. Database Setup**

**Công việc:**
- ✅ Thiết kế database schema
- ✅ Kết nối SQL Server (Server: DESKTOP-8HS4LSS, Database: thiepmoi)
- ✅ Tạo tables với relationships
- ✅ Tạo indexes, constraints
- ✅ Seed data (templates mẫu)

**Thời gian:** 4-6 giờ  
**Chi phí:** 1.000.000 VNĐ

---

### **2. Models (Entity Framework Core)**

#### **Template Model**
```csharp
- Id (int, Primary Key)
- Name (string, required) - Tên mẫu thiệp
- Category (string) - Loại: Cưới, Sinh nhật, Tết, ...
- Price (decimal) - Giá thiệp
- ThumbnailUrl (string) - URL ảnh thumbnail
- Description (string) - Mô tả
- HtmlContent (string) - HTML template (nếu cần)
- IsActive (bool) - Trạng thái hoạt động
- CreatedAt (DateTime) - Ngày tạo
- UpdatedAt (DateTime?) - Ngày cập nhật
```

#### **Order Model**
```csharp
- Id (int, Primary Key)
- OrderCode (string, unique) - Mã đơn hàng (auto generate)
- TemplateId (int, Foreign Key) - ID mẫu thiệp đã chọn
- SenderName (string, required) - Tên người gửi
- RecipientName (string, required) - Tên người nhận
- Message (string, required) - Lời chúc
- EventDate (DateTime?) - Ngày sự kiện (optional)
- ImageUrl (string?) - URL ảnh đã upload
- VideoUrl (string?) - URL video đã upload
- QrCodeUrl (string?) - URL QR code đã upload
- AudioUrl (string?) - URL nhạc nền đã upload
- Effect (string) - Hiệu ứng: elegant, festive, romantic, modern
- Amount (decimal) - Số tiền thanh toán
- PaymentStatus (string) - Trạng thái: Pending, Paid, Failed
- PayerName (string?) - Tên người thanh toán
- PayerEmail (string?) - Email người thanh toán
- PayerPhone (string?) - Số điện thoại người thanh toán
- PaymentMethod (string?) - Phương thức: vnpay, momo, bank
- CreatedAt (DateTime) - Ngày tạo
- UpdatedAt (DateTime?) - Ngày cập nhật
- UserId (int?, Foreign Key) - ID user (nếu đã đăng nhập)
```

#### **User Model** (nếu cần)
```csharp
- Id (int, Primary Key)
- Email (string, unique, required) - Email
- PasswordHash (string, required) - Mật khẩu đã hash
- FullName (string, required) - Họ tên
- Phone (string?) - Số điện thoại
- Role (string) - Vai trò: User, Admin
- CreatedAt (DateTime) - Ngày tạo
```

**Thời gian:** 4-6 giờ  
**Chi phí:** 800.000 VNĐ

---

## 🔌 API ENDPOINTS

### **1. Templates API**

#### **GET /api/templates**
- **Mô tả:** Lấy danh sách templates
- **Query params:**
  - `category` (optional): Filter theo category
  - `search` (optional): Tìm kiếm theo tên
  - `page` (optional): Số trang
  - `pageSize` (optional): Số items mỗi trang
- **Response:** List templates với pagination
- **Thời gian:** 2 giờ

#### **GET /api/templates/{id}**
- **Mô tả:** Lấy chi tiết template
- **Response:** Template object
- **Thời gian:** 1 giờ

#### **POST /api/templates** (Admin only)
- **Mô tả:** Tạo template mới
- **Request body:** Template data (Name, Category, Price, ...)
- **Response:** Template vừa tạo
- **Thời gian:** 2 giờ

#### **PUT /api/templates/{id}** (Admin only)
- **Mô tả:** Cập nhật template
- **Request body:** Template data cần update
- **Response:** Template đã cập nhật
- **Thời gian:** 2 giờ

#### **DELETE /api/templates/{id}** (Admin only)
- **Mô tả:** Xóa template
- **Response:** Success message
- **Thời gian:** 1 giờ

**Tổng thời gian:** 8 giờ  
**Chi phí:** 1.200.000 VNĐ

---

### **2. Orders API**

#### **GET /api/orders**
- **Mô tả:** Lấy danh sách đơn hàng
- **Query params:**
  - `status` (optional): Filter theo trạng thái (Pending, Paid, Failed)
  - `userId` (optional): Filter theo user
  - `page`, `pageSize`: Pagination
- **Response:** List orders với pagination
- **Thời gian:** 2 giờ

#### **GET /api/orders/{id}**
- **Mô tả:** Lấy chi tiết đơn hàng
- **Response:** Order object với đầy đủ thông tin
- **Thời gian:** 1 giờ

#### **POST /api/orders**
- **Mô tả:** Tạo đơn hàng mới
- **Request body:**
  ```json
  {
    "templateId": 1,
    "senderName": "Nguyễn Văn A",
    "recipientName": "Nguyễn Thị B",
    "message": "Chúc mừng sinh nhật!",
    "eventDate": "2025-02-15",
    "imageUrl": "https://...",
    "videoUrl": "https://...",
    "qrCodeUrl": "https://...",
    "audioUrl": "https://...",
    "effect": "elegant",
    "amount": 50000,
    "payerName": "Nguyễn Văn A",
    "payerEmail": "email@example.com",
    "payerPhone": "0901234567"
  }
  ```
- **Xử lý:**
  - Tạo OrderCode tự động (VD: THIEP-20250128-001)
  - Lưu vào database với PaymentStatus = "Pending"
  - Trả về order vừa tạo
- **Response:** Order object
- **Thời gian:** 3 giờ

#### **PUT /api/orders/{id}**
- **Mô tả:** Cập nhật đơn hàng
- **Request body:** Order data cần update
- **Response:** Order đã cập nhật
- **Thời gian:** 2 giờ

#### **PUT /api/orders/{id}/confirm-payment** (Admin only)
- **Mô tả:** Xác nhận thanh toán (Admin xác nhận thủ công)
- **Xử lý:**
  - Cập nhật PaymentStatus: "Pending" → "Paid"
  - Cập nhật UpdatedAt
- **Response:** Order đã cập nhật
- **Thời gian:** 1 giờ

#### **DELETE /api/orders/{id}** (Admin only)
- **Mô tả:** Xóa đơn hàng
- **Response:** Success message
- **Thời gian:** 1 giờ

**Tổng thời gian:** 10 giờ  
**Chi phí:** 1.500.000 VNĐ

---

### **3. Users API (Đăng Nhập/Đăng Ký Đơn Giản)**

#### **POST /api/users/register**
- **Mô tả:** Đăng ký user mới
- **Request body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "fullName": "Nguyễn Văn A",
    "phone": "0901234567"
  }
  ```
- **Xử lý:**
  - Check email đã tồn tại chưa
  - Hash password bằng BCrypt
  - Tạo user mới với Role = "User"
  - Lưu vào database
- **Response:** User object (không có password)
- **Thời gian:** 2 giờ

#### **POST /api/users/login**
- **Mô tả:** Đăng nhập user
- **Request body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Xử lý:**
  - Tìm user theo email
  - Verify password với BCrypt
  - Nếu đúng → Trả về user info (không có password)
  - Nếu sai → Trả về lỗi
- **Response:** User object (không có password)
- **Lưu ý:** Không dùng JWT, chỉ trả về user info
- **Thời gian:** 2 giờ

#### **GET /api/users/me** (Optional)
- **Mô tả:** Lấy thông tin user hiện tại
- **Response:** User object
- **Thời gian:** 1 giờ

**Tổng thời gian:** 5 giờ  
**Chi phí:** 500.000 VNĐ

---

### **4. Admin API**

#### **POST /api/admin/login**
- **Mô tả:** Đăng nhập admin
- **Request body:**
  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```
- **Xử lý:** Tương tự user login, nhưng check Role = "Admin"
- **Response:** Admin user object
- **Thời gian:** 1 giờ

#### **GET /api/admin/dashboard**
- **Mô tả:** Lấy thống kê dashboard
- **Response:**
  ```json
  {
    "totalOrdersToday": 10,
    "revenueToday": 500000,
    "pendingOrders": 5,
    "recentOrders": [...]
  }
  ```
- **Thời gian:** 2 giờ

**Tổng thời gian:** 3 giờ  
**Chi phí:** 400.000 VNĐ

---

## 🔧 SERVICES & BUSINESS LOGIC

### **1. FileUploadService**

**Chức năng:**
- ✅ Upload ảnh (JPG, PNG) - Lưu vào thư mục `wwwroot/uploads/images`
- ✅ Upload video (MP4, WebM) - Lưu vào thư mục `wwwroot/uploads/videos`
- ✅ Upload QR code (PNG, JPG) - Lưu vào thư mục `wwwroot/uploads/qrcodes`
- ✅ Upload audio (MP3, WAV) - Lưu vào thư mục `wwwroot/uploads/audios`
- ✅ Validation: Kiểm tra file size, file type
- ✅ Generate unique filename (tránh trùng)
- ✅ Trả về URL file để lưu vào database

**API Endpoints:**
- `POST /api/upload/image`
- `POST /api/upload/video`
- `POST /api/upload/qrcode`
- `POST /api/upload/audio`

**Thời gian:** 6-8 giờ  
**Chi phí:** 800.000 VNĐ

---

### **2. OrderService**

**Chức năng:**
- ✅ Tạo OrderCode tự động: `THIEP-{YYYYMMDD}-{Number}`
  - VD: THIEP-20250128-001
- ✅ Validate order data trước khi lưu
- ✅ Tính toán giá tiền (từ Template.Price)
- ✅ Cập nhật PaymentStatus
- ✅ Generate order summary

**Thời gian:** 2-3 giờ  
**Chi phí:** 300.000 VNĐ

---

### **3. TemplateService**

**Chức năng:**
- ✅ Validate template data
- ✅ Seed templates mẫu (nếu database trống)
- ✅ Filter, search templates

**Thời gian:** 2 giờ  
**Chi phí:** 200.000 VNĐ

---

## 🔐 AUTHENTICATION & AUTHORIZATION (ĐƠN GIẢN)

### **Chức năng:**
- ✅ Password hashing với BCrypt
- ✅ Check username/password trong database
- ✅ Trả về user info sau khi login (không dùng JWT)
- ✅ Middleware đơn giản để check admin role
- ✅ Role-based authorization cơ bản

**Thời gian:** 4-6 giờ  
**Chi phí:** 300.000 VNĐ

**Lưu ý:**
- ❌ Không dùng JWT Token phức tạp
- ❌ Không có refresh token
- ❌ Không có OAuth, Social login
- ✅ Chỉ đơn giản: Check trong database, trả về user info

---

## 🧪 TESTING & BUG FIXES

### **Công việc:**
- ✅ Test tất cả API endpoints
- ✅ Test file upload (ảnh, video, QR, audio)
- ✅ Test CRUD operations
- ✅ Test validation
- ✅ Test với SQL Server
- ✅ Fix bugs phát sinh

**Thời gian:** 4-6 giờ  
**Chi phí:** 200.000 VNĐ

---

## 📊 TỔNG KẾT

| Hạng mục | Thời gian | Chi phí |
|----------|-----------|---------|
| **Database Setup** | 4-6h | 1.000.000 |
| **Models & Migrations** | 4-6h | 800.000 |
| **Templates API** | 8h | 1.200.000 |
| **Orders API** | 10h | 1.500.000 |
| **Users API (Đơn giản)** | 5h | 500.000 |
| **Admin API** | 3h | 400.000 |
| **File Upload Service** | 6-8h | 800.000 |
| **Order Service** | 2-3h | 300.000 |
| **Template Service** | 2h | 200.000 |
| **Auth (Đơn giản)** | 4-6h | 300.000 |
| **Testing & Bug Fix** | 4-6h | 200.000 |
| **TỔNG** | **52-64 giờ** | **4.000.000** |

---

## ⚠️ LƯU Ý QUAN TRỌNG

### **Thanh Toán:**
- ❌ **CHƯA TÍCH HỢP thanh toán thật** (VNPay, MoMo, Casso.vn)
- ✅ Chỉ lưu đơn hàng vào database với status "Pending"
- ✅ Admin xác nhận thanh toán **THỦ CÔNG** qua API `PUT /api/orders/{id}/confirm-payment`
- ✅ Không có webhook, không có tự động check payment

### **Đăng Nhập/Đăng Ký:**
- ✅ **ĐƠN GIẢN** - Không dùng JWT phức tạp
- ✅ Chỉ hash password, check trong database
- ✅ Trả về user info (không có token)
- ❌ Không có refresh token, OAuth, Social login

### **Không Bao Gồm:**
- ❌ Tích hợp thanh toán thật
- ❌ Generate PDF thiệp
- ❌ Email notifications
- ❌ JWT Token authentication phức tạp
- ❌ Real-time notifications (SignalR)
- ❌ Advanced admin features (Reports, Analytics phức tạp)
- ❌ Caching (Redis)
- ❌ Background jobs
- ❌ File storage cloud (AWS S3, Azure Blob)

---

## 📝 CÁCH TRÌNH BÀY CHO KHÁCH HÀNG

### **Mẫu mô tả ngắn gọn:**

**"Backend .NET 8 API - 4.000.000 VNĐ**

Bao gồm:
- Thiết kế database (SQL Server), tạo Models, Migrations
- API Templates: CRUD (thêm, sửa, xóa, list, search, filter)
- API Orders: CRUD, tạo đơn hàng, xác nhận thanh toán (admin)
- API Users: Đăng ký, đăng nhập đơn giản
- API Admin: Đăng nhập admin, dashboard thống kê
- File Upload Service: Upload ảnh, video, QR code, audio
- Authentication đơn giản (hash password, check trong database)
- Kết nối SQL Server (DESKTOP-8HS4LSS, database: thiepmoi)

**Lưu ý:**
- Chưa tích hợp thanh toán thật (admin xác nhận thủ công)
- Đăng nhập/đăng ký đơn giản (không JWT phức tạp)
- Không bao gồm: Generate PDF, Email notifications, Real-time notifications"**

---

## 🔗 API DOCUMENTATION

### **Base URL:** `https://api.thiepmungonline.vn/api`

### **Endpoints chính:**

| Method | Endpoint | Mô tả | Auth |
|--------|----------|-------|------|
| GET | `/templates` | Lấy danh sách templates | Public |
| GET | `/templates/{id}` | Lấy chi tiết template | Public |
| POST | `/templates` | Tạo template mới | Admin |
| PUT | `/templates/{id}` | Cập nhật template | Admin |
| DELETE | `/templates/{id}` | Xóa template | Admin |
| GET | `/orders` | Lấy danh sách đơn hàng | Public/User |
| GET | `/orders/{id}` | Lấy chi tiết đơn | Public/User |
| POST | `/orders` | Tạo đơn hàng mới | Public |
| PUT | `/orders/{id}` | Cập nhật đơn | Admin |
| PUT | `/orders/{id}/confirm-payment` | Xác nhận thanh toán | Admin |
| POST | `/users/register` | Đăng ký | Public |
| POST | `/users/login` | Đăng nhập | Public |
| POST | `/admin/login` | Đăng nhập admin | Public |
| GET | `/admin/dashboard` | Thống kê dashboard | Admin |
| POST | `/upload/image` | Upload ảnh | Public |
| POST | `/upload/video` | Upload video | Public |
| POST | `/upload/qrcode` | Upload QR code | Public |
| POST | `/upload/audio` | Upload audio | Public |

---

*Last Updated: 2025-01-28*

