# 📚 Tài Liệu Dự Án: Thiệp Mừng Online

## 📋 Mục Lục
1. [Tổng Quan Dự Án](#tổng-quan-dự-án)
2. [Luồng Người Dùng (User Flow)](#luồng-người-dùng-user-flow)
3. [Luồng Quản Trị (Admin Flow)](#luồng-quản-trị-admin-flow)
4. [Kiến Trúc Hệ Thống](#kiến-trúc-hệ-thống)
5. [Database Schema](#database-schema)
6. [API Endpoints](#api-endpoints)
7. [Hướng Phát Triển](#hướng-phát-triển)
8. [Trang Quản Trị](#trang-quản-trị)

---

## 🎯 Tổng Quan Dự Án

### Mục Đích
Nền tảng bán thiệp mừng online cho phép người dùng:
- Chọn mẫu thiệp theo mức giá (50k, 100k, 200k)
- Tùy chỉnh thiệp (ảnh, lời chúc, QR code)
- Thanh toán qua QR VietQR
- Tải thiệp PDF sau khi thanh toán thành công

### Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: ASP.NET Core Web API (.NET 8)
- **Database**: SQL Server
- **Payment**: QR VietQR + Mock API
- **PDF**: QuestPDF hoặc DinkToPdf

---

## 🔄 Luồng Người Dùng (User Flow)

### 1. Trang Chủ (Home Page)
**URL**: `/` hoặc `index.html#home`

**Chức năng:**
- Hiển thị hero section với CTA "Tạo Thiệp Ngay"
- Video demo sản phẩm
- Preview mẫu thiệp nổi bật
- Giới thiệu tính năng

**User Actions:**
- Click "Tạo Thiệp Ngay" → Chuyển đến #templates
- Click "Xem Mẫu" → Scroll đến section Templates
- Đăng nhập/Đăng ký (nếu muốn lưu thiệp)

---

### 2. Danh Sách Mẫu Thiệp (Templates)
**URL**: `#templates`

**Chức năng:**
- Hiển thị grid các mẫu thiệp
- Filter theo loại (Cưới, Sinh nhật, Tết, v.v.)
- Mỗi template card hiển thị:
  - Hình ảnh preview
  - Tên mẫu
  - Giá (50k/100k/200k)
  - Tags (loại, tính năng)
  - Nút "Chọn" và "Xem trước"

**User Actions:**
- Chọn filter → Lọc templates theo loại
- Click "Chọn" → Mở modal form tạo thiệp
- Click "Xem trước" → Xem full preview

---

### 3. Form Tạo Thiệp (Card Builder Modal)
**Trigger**: Click nút "Chọn" trên template card

**Chức năng:**
- Form 2 cột: Form nhập liệu | Preview real-time
- **Form nhập liệu:**
  - Mẫu thiệp đã chọn (read-only)
  - Tên người gửi *
  - Tên người nhận *
  - Lời chúc *
  - Ngày sự kiện (optional)
  - Upload ảnh (optional)
  - Upload QR Code (optional)
  
- **Preview real-time:**
  - Hiển thị thiệp theo thời gian thực khi nhập
  - Cập nhật ngay khi upload ảnh/QR

**User Actions:**
- Nhập thông tin → Preview tự động cập nhật
- Upload ảnh/QR → Hiển thị trong preview
- Click "Tạo Thiệp" → Chuyển đến trang thanh toán
- Click "Hủy" → Đóng modal

**Validation:**
- Họ tên, Email: Required
- Phone: 10-11 chữ số
- Message: Required, min 10 ký tự

---

### 4. Trang Thanh Toán (Payment)
**URL**: Modal hoặc `/payment/{orderId}`

**Chức năng:**
- Hiển thị thông tin đơn hàng:
  - Mẫu thiệp đã chọn
  - Tổng tiền (50k/100k/200k)
  - QR Code VietQR để quét thanh toán
  - Thông tin ngân hàng:
    - Ngân hàng: (từ admin config)
    - STK: (từ admin config)
    - Chủ TK: (từ admin config)
    - Nội dung: THIEP MUNG {transactionCode}

**User Actions:**
- Quét QR code → Chuyển đến app banking
- Chuyển khoản → Quay lại trang
- Hệ thống tự động check payment (polling mỗi 3 giây)
- Sau 5-10 giây → Tự động chuyển đến trang download

**Mock Payment Flow:**
1. User click "Mock Thanh Toán" (demo)
2. Delay 2 giây
3. Update Order.PaymentStatus = "Paid"
4. Generate PDF thiệp
5. Chuyển đến trang thành công

---

### 5. Trang Thành Công & Download (Success)
**URL**: `/success/{orderId}` hoặc Modal

**Chức năng:**
- Hiển thị thông báo "Thanh toán thành công"
- Preview thiệp đã tạo
- Nút "Tải Thiệp PDF"
- Nút "Chia Sẻ Link"
- Thông tin đơn hàng:
  - Mã giao dịch
  - Ngày tạo
  - Trạng thái

**User Actions:**
- Click "Tải Thiệp PDF" → Download file PDF
- Click "Chia Sẻ Link" → Copy link hoặc mở share dialog
- Link chia sẻ: `/view/{orderId}` (cho người nhận xem thiệp)

---

### 6. Xem Thiệp (Public View)
**URL**: `/view/{orderId}` (không cần đăng nhập)

**Chức năng:**
- Hiển thị thiệp mừng đã tạo
- Hiệu ứng đẹp mắt
- Có thể chơi nhạc nền (nếu có)
- QR Code (nếu có) để nhận tiền mừng

**User Actions:**
- Xem thiệp
- Scan QR để nhận tiền (nếu có)
- Chia sẻ link cho người khác

---

## 👨‍💼 Luồng Quản Trị (Admin Flow)

### 1. Trang Đăng Nhập Admin
**URL**: `/admin/login`

**Chức năng:**
- Form đăng nhập với username/password
- Validate credentials
- Tạo session/JWT token

**Admin Actions:**
- Nhập username/password
- Click "Đăng nhập"
- Nếu đúng → Redirect đến `/admin/dashboard`
- Nếu sai → Hiển thị lỗi

---

### 2. Dashboard (Bảng Điều Khiển)
**URL**: `/admin/dashboard`

**Chức năng:**
- **Thống kê tổng quan:**
  - Tổng số đơn hàng hôm nay
  - Doanh thu hôm nay
  - Doanh thu tháng này
  - Số lượng thiệp đã tạo
  
- **Biểu đồ:**
  - Doanh thu theo ngày (7 ngày gần nhất)
  - Top mẫu thiệp bán chạy
  - Phân bố theo loại thiệp
  
- **Đơn hàng mới nhất:**
  - Bảng danh sách 10 đơn hàng mới nhất
  - Filter: Tất cả / Đã thanh toán / Chưa thanh toán
  - Quick actions: Xem chi tiết, Xác nhận thanh toán

**Admin Actions:**
- Xem thống kê
- Click vào đơn hàng → Xem chi tiết
- Click "Xác nhận thanh toán" → Cập nhật trạng thái

---

### 3. Quản Lý Mẫu Thiệp (Templates Management)
**URL**: `/admin/templates`

**Chức năng:**
- **Danh sách mẫu thiệp:**
  - Bảng hiển thị: ID, Tên, Loại, Giá, Thumbnail, Trạng thái, Actions
  - Search theo tên/loại
  - Filter: Tất cả / Đang hoạt động / Tạm dừng
  - Pagination
  
- **Thêm mẫu mới:**
  - Form:
    - Tên mẫu *
    - Loại (dropdown: Cưới, Sinh nhật, Tết, v.v.) *
    - Giá (50k/100k/200k) *
    - Mô tả
    - Upload thumbnail
    - Upload HTML template file
    - Trạng thái (Active/Inactive)
  
- **Sửa mẫu:**
  - Form tương tự thêm, pre-filled với data hiện tại
  
- **Xóa mẫu:**
  - Confirm dialog trước khi xóa
  - Không cho xóa nếu có đơn hàng đang dùng

**Admin Actions:**
- Click "Thêm mới" → Mở form thêm
- Click "Sửa" trên template → Mở form sửa
- Click "Xóa" → Confirm và xóa
- Click "Kích hoạt/Tắt" → Toggle status

---

### 4. Quản Lý Đơn Hàng (Orders Management)
**URL**: `/admin/orders`

**Chức năng:**
- **Danh sách đơn hàng:**
  - Bảng hiển thị:
    - Mã đơn hàng
    - Mẫu thiệp
    - Khách hàng (Tên, Email, Phone)
    - Tổng tiền
    - Trạng thái thanh toán
    - Ngày tạo
    - Actions (Xem, Download PDF, Xác nhận thanh toán)
  
  - Filter:
    - Trạng thái: Tất cả / Đã thanh toán / Chưa thanh toán / Đã hủy
    - Khoảng thời gian: Hôm nay / 7 ngày / 30 ngày / Tùy chọn
    - Search: Mã đơn, Email, Phone
  
  - Sort: Ngày tạo (mới nhất), Tổng tiền (cao → thấp)
  
- **Xem chi tiết đơn hàng:**
  - Thông tin khách hàng
  - Thông tin thiệp (lời chúc, ảnh, QR)
  - Thông tin thanh toán:
    - Mã giao dịch
    - Trạng thái
    - Ngày thanh toán
    - Hình ảnh bill (nếu có)
  - Preview thiệp
  - Actions:
    - Download PDF
    - Xác nhận thanh toán (nếu chưa thanh toán)
    - Gửi email cho khách
    - In hóa đơn

**Admin Actions:**
- Click vào đơn hàng → Xem chi tiết
- Click "Xác nhận thanh toán" → Cập nhật trạng thái + Gửi email
- Click "Download PDF" → Tải thiệp PDF
- Filter/Search để tìm đơn hàng

---

### 5. Cấu Hình Ngân Hàng (Bank Settings)
**URL**: `/admin/bank-settings`

**Chức năng:**
- **Form cấu hình:**
  - Tên ngân hàng * (dropdown: Vietcombank, Techcombank, MB Bank, v.v.)
  - Số tài khoản *
  - Tên chủ tài khoản *
  - Logo ngân hàng (upload)
  - Trạng thái (Active/Inactive)
  - Ghi chú (nội dung chuyển khoản mặc định)

- **Lịch sử thay đổi:**
  - Bảng log các lần thay đổi cấu hình
  - Ai thay đổi, khi nào, thay đổi gì

**Admin Actions:**
- Cập nhật thông tin ngân hàng
- Upload logo
- Lưu thay đổi → Cập nhật QR code generation

---

### 6. Quản Lý Tài Khoản (Account Management)
**URL**: `/admin/accounts`

**Chức năng:**
- **Danh sách tài khoản:**
  - Bảng hiển thị: Username, Email, Vai trò, Trạng thái, Ngày tạo
  - Filter: Tất cả / Admin / Staff
  - Search: Username, Email
  
- **Thêm tài khoản admin:**
  - Form:
    - Username *
    - Email *
    - Password *
    - Vai trò (Admin / Staff) *
    - Trạng thái (Active/Inactive)

**Admin Actions:**
- Thêm tài khoản mới
- Sửa thông tin tài khoản
- Khóa/Mở khóa tài khoản
- Reset mật khẩu

---

### 7. Báo Cáo & Thống Kê (Reports & Analytics)
**URL**: `/admin/reports`

**Chức năng:**
- **Báo cáo doanh thu:**
  - Theo ngày (biểu đồ line)
  - Theo tháng (biểu đồ bar)
  - Theo loại thiệp (pie chart)
  - Export Excel/PDF
  
- **Thống kê đơn hàng:**
  - Tổng số đơn hàng
  - Tỷ lệ thanh toán thành công
  - Đơn hàng bị hủy
  - Top khách hàng
  
- **Thống kê mẫu thiệp:**
  - Mẫu bán chạy nhất
  - Mẫu ít được chọn
  - Phân bố theo giá (50k/100k/200k)

**Admin Actions:**
- Chọn khoảng thời gian
- Chọn loại báo cáo
- Export file Excel/PDF
- In báo cáo

---

## 🏗️ Kiến Trúc Hệ Thống

### Frontend Structure
```
thiepmoi/
├── index.html          # Trang chủ, templates, contact
├── admin/
│   ├── login.html      # Đăng nhập admin
│   ├── dashboard.html  # Bảng điều khiển
│   ├── templates.html  # Quản lý mẫu thiệp
│   ├── orders.html     # Quản lý đơn hàng
│   ├── bank-settings.html  # Cấu hình ngân hàng
│   ├── accounts.html   # Quản lý tài khoản
│   └── reports.html    # Báo cáo & thống kê
├── css/
│   ├── main.css        # Styles chung
│   └── admin.css       # Styles admin
├── js/
│   ├── main.js         # Scripts chung
│   ├── card-builder.js # Logic tạo thiệp
│   └── admin.js        # Scripts admin
└── assets/
    ├── images/         # Hình ảnh
    └── templates/       # HTML templates
```

### Backend Structure
```
ThiepMoiAPI/
├── Controllers/
│   ├── TemplatesController.cs
│   ├── OrdersController.cs
│   ├── PaymentController.cs
│   ├── AdminController.cs
│   └── AuthController.cs
├── Models/
│   ├── Template.cs
│   ├── Order.cs
│   ├── BankSetting.cs
│   └── User.cs
├── Services/
│   ├── PdfService.cs
│   ├── QRService.cs
│   ├── PaymentService.cs
│   └── EmailService.cs
├── Data/
│   └── ApplicationDbContext.cs
└── Migrations/
```

---

## 🗄️ Database Schema

### Bảng Templates (Mẫu Thiệp)
```sql
CREATE TABLE Templates (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(255) NOT NULL,
    Category NVARCHAR(50) NOT NULL, -- Cưới, Sinh nhật, Tết, v.v.
    Price DECIMAL(10,2) NOT NULL, -- 50000, 100000, 200000
    Description NVARCHAR(MAX),
    HtmlTemplate NVARCHAR(MAX) NOT NULL, -- HTML template với placeholders
    ThumbnailUrl NVARCHAR(500),
    IsActive BIT DEFAULT 1,
    CreatedDate DATETIME DEFAULT GETDATE(),
    UpdatedDate DATETIME
);
```

### Bảng Orders (Đơn Hàng)
```sql
CREATE TABLE Orders (
    Id INT PRIMARY KEY IDENTITY(1,1),
    OrderCode NVARCHAR(50) UNIQUE NOT NULL, -- TM20250101001
    TemplateId INT FOREIGN KEY REFERENCES Templates(Id),
    
    -- Thông tin khách hàng
    CustomerName NVARCHAR(255) NOT NULL,
    CustomerEmail NVARCHAR(255),
    CustomerPhone NVARCHAR(20),
    
    -- Thông tin thiệp (JSON)
    CardData NVARCHAR(MAX) NOT NULL, -- JSON: senderName, recipientName, message, eventDate, imageUrl, qrCodeUrl
    
    -- Thông tin thanh toán
    TotalAmount DECIMAL(10,2) NOT NULL,
    PaymentStatus NVARCHAR(20) DEFAULT 'Pending', -- Pending, Paid, Failed, Cancelled
    TransactionCode NVARCHAR(50), -- Mã giao dịch để check payment
    PaidDate DATETIME,
    PaymentImageUrl NVARCHAR(500), -- Ảnh bill chuyển khoản (nếu admin xác nhận thủ công)
    
    -- Files
    PdfFilePath NVARCHAR(500), -- Đường dẫn file PDF đã generate
    
    -- Timestamps
    CreatedDate DATETIME DEFAULT GETDATE(),
    UpdatedDate DATETIME
);
```

### Bảng BankSettings (Cấu Hình Ngân Hàng)
```sql
CREATE TABLE BankSettings (
    Id INT PRIMARY KEY IDENTITY(1,1),
    BankName NVARCHAR(100) NOT NULL, -- Vietcombank, Techcombank, v.v.
    AccountNumber NVARCHAR(50) NOT NULL,
    AccountName NVARCHAR(255) NOT NULL,
    LogoUrl NVARCHAR(500),
    DefaultContent NVARCHAR(255), -- Nội dung chuyển khoản mặc định
    IsActive BIT DEFAULT 1,
    CreatedDate DATETIME DEFAULT GETDATE(),
    UpdatedDate DATETIME
);
```

### Bảng Users (Tài Khoản Admin)
```sql
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) UNIQUE NOT NULL,
    Email NVARCHAR(255) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    Role NVARCHAR(20) DEFAULT 'Staff', -- Admin, Staff
    IsActive BIT DEFAULT 1,
    CreatedDate DATETIME DEFAULT GETDATE(),
    LastLoginDate DATETIME
);
```

### Bảng AuditLogs (Log Thay Đổi)
```sql
CREATE TABLE AuditLogs (
    Id INT PRIMARY KEY IDENTITY(1,1),
    UserId INT FOREIGN KEY REFERENCES Users(Id),
    Action NVARCHAR(50), -- Create, Update, Delete
    TableName NVARCHAR(50), -- Orders, Templates, v.v.
    RecordId INT,
    OldData NVARCHAR(MAX), -- JSON
    NewData NVARCHAR(MAX), -- JSON
    CreatedDate DATETIME DEFAULT GETDATE()
);
```

---

## 🔌 API Endpoints

### Public APIs

#### Templates
```
GET    /api/templates              # Lấy danh sách mẫu thiệp (active only)
GET    /api/templates/{id}        # Lấy chi tiết mẫu thiệp
GET    /api/templates?category=   # Filter theo loại
```

#### Orders
```
POST   /api/orders                 # Tạo đơn hàng mới
GET    /api/orders/{id}            # Lấy chi tiết đơn hàng
GET    /api/orders/{id}/check-payment  # Check trạng thái thanh toán
POST   /api/orders/{id}/generate-qr    # Generate QR code thanh toán
GET    /api/orders/{id}/download       # Download PDF thiệp
GET    /view/{orderCode}           # Xem thiệp public (không cần auth)
```

### Admin APIs (Cần Authentication)

#### Authentication
```
POST   /api/admin/login            # Đăng nhập admin
POST   /api/admin/logout           # Đăng xuất
GET    /api/admin/me               # Lấy thông tin admin hiện tại
```

#### Templates Management
```
GET    /api/admin/templates        # Lấy danh sách (có filter, pagination)
POST   /api/admin/templates        # Thêm mẫu mới
PUT    /api/admin/templates/{id}   # Sửa mẫu
DELETE /api/admin/templates/{id}   # Xóa mẫu
```

#### Orders Management
```
GET    /api/admin/orders           # Lấy danh sách đơn hàng
GET    /api/admin/orders/{id}      # Chi tiết đơn hàng
PUT    /api/admin/orders/{id}/confirm-payment  # Xác nhận thanh toán
POST   /api/admin/orders/{id}/send-email       # Gửi email cho khách
```

#### Bank Settings
```
GET    /api/admin/bank-settings    # Lấy cấu hình hiện tại
PUT    /api/admin/bank-settings   # Cập nhật cấu hình
```

#### Dashboard
```
GET    /api/admin/dashboard/stats  # Thống kê tổng quan
GET    /api/admin/dashboard/revenue-chart  # Biểu đồ doanh thu
```

---

## 🚀 Hướng Phát Triển

### Phase 1: Backend API (Tuần 1-2)
**Mục tiêu**: Xây dựng API cơ bản

1. **Setup Project**
   - Tạo .NET Core Web API project
   - Setup Entity Framework Core
   - Tạo database schema và migrations
   - Seed data mẫu (templates, admin user)

2. **Templates API**
   - CRUD operations
   - Upload thumbnail
   - Upload HTML template
   - Filter và search

3. **Orders API**
   - Create order
   - Generate transaction code
   - Generate QR code
   - Check payment status (mock)

4. **PDF Generation**
   - Service generate PDF từ HTML template
   - Replace placeholders với data thực
   - Lưu file PDF vào wwwroot/pdfs/

### Phase 2: Payment Integration (Tuần 3)
**Mục tiêu**: Tích hợp thanh toán thật

1. **VietQR Integration**
   - Generate QR code với thông tin ngân hàng
   - Format: `970415|{account}|{amount}|{content}`

2. **Payment Verification**
   - Option 1: Tích hợp Casso.vn API
   - Option 2: Tích hợp Sepay.vn API
   - Option 3: Webhook từ ngân hàng
   - Polling mechanism (nếu không có webhook)

### Phase 3: Admin Panel Frontend (Tuần 4)
**Mục tiêu**: Xây dựng giao diện quản trị

1. **Authentication**
   - Login page
   - Session management
   - Protected routes

2. **Dashboard**
   - Thống kê tổng quan
   - Charts (sử dụng Chart.js)
   - Recent orders list

3. **Templates Management**
   - List view với search/filter
   - Add/Edit form
   - Upload files
   - Preview template

4. **Orders Management**
   - List view với filter
   - Order detail modal
   - Confirm payment
   - Download PDF

5. **Bank Settings**
   - Form cấu hình
   - Preview QR code

### Phase 4: Enhancements (Tuần 5-6)
**Mục tiêu**: Cải thiện UX và tính năng

1. **Email Notifications**
   - Gửi email khi đơn hàng tạo
   - Gửi email khi thanh toán thành công
   - Gửi link download PDF

2. **Public View Page**
   - Trang `/view/{orderCode}` để xem thiệp
   - Responsive design
   - Share buttons

3. **Analytics**
   - Track views
   - Track downloads
   - User behavior analytics

4. **Improvements**
   - Loading states
   - Error handling
   - Form validation
   - Responsive design cho mobile

### Phase 5: Production (Tuần 7)
**Mục tiêu**: Deploy và launch

1. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests
   - Performance testing

2. **Deployment**
   - Setup production database
   - Deploy backend API (Azure/AWS)
   - Deploy frontend (Netlify/Vercel)
   - Setup domain và SSL

3. **Documentation**
   - API documentation (Swagger)
   - User guide
   - Admin guide

---

## 🎨 Trang Quản Trị - Chi Tiết

### 1. Layout Chung
**File**: `admin/layout.html` hoặc component chung

**Components:**
- **Sidebar Menu** (bên trái):
  - Dashboard
  - Quản lý mẫu thiệp
  - Quản lý đơn hàng
  - Cấu hình ngân hàng
  - Quản lý tài khoản
  - Báo cáo & thống kê
  - Đăng xuất
  
- **Header** (trên cùng):
  - Logo
  - Thông tin admin (tên, avatar)
  - Notifications (nếu có)
  
- **Main Content** (giữa):
  - Breadcrumbs
  - Page content

### 2. Dashboard Design
**Component Structure:**
```
┌─────────────────────────────────────────┐
│  Header (Logo, User Info, Logout)      │
├──────────┬──────────────────────────────┤
│          │  📊 Thống Kê Tổng Quan      │
│ Sidebar  │  ┌────────┐ ┌────────┐     │
│          │  │ Orders │ │ Revenue│     │
│ - Dash   │  └────────┘ └────────┘     │
│ - Temps  │  ┌────────┐ ┌────────┐     │
│ - Orders │  │Templates││  Today │     │
│ - Bank   │  └────────┘ └────────┘     │
│ - ...    │                             │
│          │  📈 Biểu Đồ Doanh Thu       │
│          │  [Line Chart: 7 ngày]       │
│          │                             │
│          │  📋 Đơn Hàng Mới Nhất       │
│          │  [Table: 10 orders]         │
└──────────┴──────────────────────────────┘
```

### 3. Templates Management Design
**Component Structure:**
```
┌─────────────────────────────────────────┐
│  Quản Lý Mẫu Thiệp                     │
├─────────────────────────────────────────┤
│  [Search] [Filter: All/Active] [+Thêm] │
├─────────────────────────────────────────┤
│  ┌────┬─────────┬──────┬──────┬──────┐ │
│  │Thumb│ Tên    │ Loại │ Giá  │Actions│ │
│  ├────┼─────────┼──────┼──────┼──────┤ │
│  │[img]│Romance │Cưới  │200k  │[Edit]│ │
│  │    │Bloom   │      │      │[Del] │ │
│  └────┴─────────┴──────┴──────┴──────┘ │
│  [Pagination: 1 2 3 ...]               │
└─────────────────────────────────────────┘

Modal: Thêm/Sửa Template
┌─────────────────────────────────────────┐
│  Thêm Mẫu Thiệp Mới                [X] │
├─────────────────────────────────────────┤
│  Tên mẫu:        [________________]    │
│  Loại:           [Dropdown ▼]          │
│  Giá:            [50000]                │
│  Mô tả:          [_____________]        │
│  Thumbnail:      [Upload 📷]            │
│  HTML Template:  [Upload 📄]            │
│  Trạng thái:     [○] Active [ ] Inactive│
│                  [Hủy] [Lưu]            │
└─────────────────────────────────────────┘
```

### 4. Orders Management Design
**Component Structure:**
```
┌─────────────────────────────────────────┐
│  Quản Lý Đơn Hàng                      │
├─────────────────────────────────────────┤
│  [Search] [Filter: All/Paid/Pending]   │
│  [Date Range: ___ to ___]              │
├─────────────────────────────────────────┤
│  ┌──────┬────────┬────────┬──────┬─────┐ │
│  │Mã ĐH │Khách   │Tiền    │Status│Action│ │
│  ├──────┼────────┼────────┼──────┼─────┤ │
│  │TM001 │Nguyễn A│200,000 │✅Paid│[View]│ │
│  └──────┴────────┴────────┴──────┴─────┘ │
└─────────────────────────────────────────┘

Modal: Chi Tiết Đơn Hàng
┌─────────────────────────────────────────┐
│  Chi Tiết Đơn Hàng: TM001          [X] │
├─────────────────────────────────────────┤
│  📋 Thông Tin Khách Hàng               │
│  - Tên: Nguyễn Văn A                   │
│  - Email: abc@email.com                │
│  - Phone: 0901234567                   │
│                                         │
│  🎴 Thông Tin Thiệp                     │
│  - Mẫu: Romance Bloom                  │
│  - Lời chúc: [Preview...]              │
│  [Preview Image]                       │
│                                         │
│  💳 Thông Tin Thanh Toán               │
│  - Mã GD: ABC123XYZ                    │
│  - Trạng thái: ✅ Đã thanh toán        │
│  - Ngày: 2025-01-01 10:30             │
│                                         │
│  [Download PDF] [Gửi Email] [In HD]   │
└─────────────────────────────────────────┘
```

### 5. Security Features
- **Authentication**: JWT tokens hoặc session-based
- **Authorization**: Role-based (Admin vs Staff)
- **CSRF Protection**: Anti-forgery tokens
- **Rate Limiting**: Prevent abuse
- **Input Validation**: Server-side validation
- **SQL Injection Prevention**: Parameterized queries
- **XSS Prevention**: Sanitize inputs

### 6. Admin Features Checklist
- [ ] Đăng nhập/Đăng xuất
- [ ] Dashboard với thống kê
- [ ] CRUD Templates
- [ ] Upload files (thumbnail, HTML)
- [ ] CRUD Orders
- [ ] Xác nhận thanh toán thủ công
- [ ] Download PDF từ admin
- [ ] Gửi email cho khách
- [ ] Cấu hình ngân hàng
- [ ] Quản lý tài khoản
- [ ] Báo cáo & thống kê
- [ ] Export Excel/PDF
- [ ] Audit logs
- [ ] Search & Filter
- [ ] Pagination

---

## 📝 Notes

### Priority Features
1. **High**: Backend API, Payment integration, Admin panel cơ bản
2. **Medium**: Email notifications, Analytics, Public view page
3. **Low**: Advanced analytics, Multi-language, Mobile app

### Important Considerations
- **Performance**: Cache templates, optimize database queries
- **Scalability**: Design for high traffic
- **Security**: Protect sensitive data (payment info, admin credentials)
- **UX**: Make admin panel intuitive and fast
- **Maintenance**: Code documentation, error logging

---

**Tài liệu này sẽ được cập nhật thường xuyên khi dự án phát triển.**

*Last Updated: 2025-01-28*




