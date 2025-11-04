# 💰 Ước Tính Chi Phí - Web Cơ Bản CRUD

## 📊 Tình Trạng Hiện Tại

**Đã có:**
- ✅ Giao diện frontend (HTML/CSS/JS) - **ĐẸP, HOÀN THIỆN**
- ✅ Flow: Chọn thiệp → Tạo thiệp → Thanh toán → Download
- ✅ Modal forms, preview real-time
- ✅ Responsive design

**Cần làm:**
- 🔨 Backend .NET API (CRUD cơ bản)
- 🔨 Database SQL Server
- 🔨 Frontend Angular kết nối API
- 🔨 Admin panel CRUD
- ⏸️ Thanh toán (làm sau)

---

## 💵 Chi Phí Phát Triển - Web Cơ Bản

### **PHASE 1: Backend API (.NET) - 2 Tuần**
**Chi phí: 8.000.000 - 12.000.000 VNĐ**

| Công việc | Giờ | Chi phí (VNĐ) |
|-----------|-----|---------------|
| **Setup Project** | | |
| - Tạo .NET Web API project | 2h | 500.000 |
| - Setup Entity Framework Core | 2h | 500.000 |
| - Kết nối SQL Server | 2h | 500.000 |
| **Database & Models** | | |
| - Tạo Models (Template, Order, User) | 4h | 1.000.000 |
| - Tạo Migrations | 2h | 500.000 |
| - Seed data (templates mẫu) | 2h | 500.000 |
| **Controllers & Services** | | |
| - TemplatesController (CRUD) | 6h | 1.500.000 |
| - OrdersController (CRUD) | 6h | 1.500.000 |
| - UsersController (CRUD) | 4h | 1.000.000 |
| - File Upload Service | 4h | 1.000.000 |
| **Testing & Bug Fix** | 6h | 1.500.000 |
| **Tổng** | **40 giờ** | **10.000.000** |

**Lưu ý:**
- Chỉ làm CRUD cơ bản (Create, Read, Update, Delete)
- Chưa tích hợp thanh toán
- Chưa generate PDF (làm sau)

---

### **PHASE 2: Frontend Angular - 2 Tuần**
**Chi phí: 8.000.000 - 12.000.000 VNĐ**

| Công việc | Giờ | Chi phí (VNĐ) |
|-----------|-----|---------------|
| **Setup Angular** | | |
| - Tạo Angular project | 2h | 500.000 |
| - Setup routing, services | 3h | 750.000 |
| - Kết nối API (HttpClient) | 3h | 750.000 |
| **Components** | | |
| - Home page (dùng lại HTML hiện tại) | 4h | 1.000.000 |
| - Templates list (kết nối API) | 4h | 1.000.000 |
| - Card builder form (kết nối API) | 6h | 1.500.000 |
| - Payment modal (mock, chưa tích hợp) | 3h | 750.000 |
| - Contact form | 2h | 500.000 |
| **Admin Panel** | | |
| - Login page | 3h | 750.000 |
| - Dashboard (đơn giản) | 4h | 1.000.000 |
| - Templates CRUD page | 6h | 1.500.000 |
| - Orders CRUD page | 6h | 1.500.000 |
| **Testing & Polish** | 4h | 1.000.000 |
| **Tổng** | **50 giờ** | **12.500.000** |

**Lưu ý:**
- Tái sử dụng giao diện HTML hiện tại
- Chỉ cần kết nối với API
- Admin panel đơn giản, không cầu kỳ

---

### **PHASE 3: Testing & Deploy - 1 Tuần**
**Chi phí: 3.000.000 - 5.000.000 VNĐ**

| Công việc | Giờ | Chi phí (VNĐ) |
|-----------|-----|---------------|
| Testing end-to-end | 6h | 1.500.000 |
| Fix bugs | 4h | 1.000.000 |
| Deploy backend | 3h | 750.000 |
| Deploy frontend | 2h | 500.000 |
| Training cơ bản | 2h | 500.000 |
| **Tổng** | **17 giờ** | **4.250.000** |

---

## 📊 TỔNG CHI PHÍ PHÁT TRIỂN

### **Gói Cơ Bản (Web CRUD)**
**Tổng: 19.000.000 - 29.000.000 VNĐ**

**Thời gian: 5 tuần (1 tháng +)**

**Bao gồm:**
- ✅ Backend .NET API (CRUD)
- ✅ Database SQL Server
- ✅ Frontend Angular (kết nối API)
- ✅ Admin panel CRUD
- ✅ Deploy & Testing

**KHÔNG bao gồm:**
- ❌ Tích hợp thanh toán (làm sau)
- ❌ Generate PDF (làm sau)
- ❌ Email notifications (làm sau)

---

## 🖥️ Chi Phí Infrastructure (Năm Đầu)

| Hạng mục | Chi phí/tháng | Chi phí/năm |
|----------|---------------|-------------|
| **VPS Việt Nam** (2GB RAM) | 200.000 | 2.400.000 |
| **Domain .com** | - | 250.000 |
| **SSL (Let's Encrypt)** | 0 | 0 |
| **Frontend Hosting (Netlify)** | 0 | 0 |
| **Tổng** | **200.000** | **2.650.000** |

---

## 💡 Đề Xuất Chi Phí Cho Khách Hàng

### **GÓI 1: Web Cơ Bản CRUD (Khuyến nghị)**
**Tổng: 20.000.000 - 25.000.000 VNĐ**

**Bao gồm:**
- Backend API cơ bản
- Frontend Angular
- Admin panel CRUD
- Deploy & hosting năm đầu
- Hỗ trợ 1 tháng đầu

**Phân kỳ thanh toán:**
- **Đợt 1 (40%):** 8.000.000 VNĐ - Khi bắt đầu
- **Đợt 2 (40%):** 8.000.000 VNĐ - Khi hoàn thành backend
- **Đợt 3 (20%):** 4.000.000 VNĐ - Khi deploy xong

**Tổng: 20.000.000 VNĐ**

---

### **Nâng Cấp Sau (Khi Cần)**

| Tính năng | Chi phí |
|-----------|---------|
| Tích hợp thanh toán (Casso.vn) | 5.000.000 VNĐ |
| Generate PDF thiệp | 3.000.000 VNĐ |
| Email notifications | 2.000.000 VNĐ |
| Public view page (`/view/{orderId}`) | 2.000.000 VNĐ |

**Tổng nâng cấp:** 12.000.000 VNĐ (nếu cần)

---

## 📋 So Sánh Chi Phí

| Hạng mục | Gói Startup (Cũ) | **Web CRUD (Mới)** | Tiết kiệm |
|----------|------------------|-------------------|-----------|
| Backend API | 12.000.000 | 10.000.000 | -2.000.000 |
| Frontend | 8.500.000 | 12.500.000 | +4.000.000 |
| Admin Panel | 9.000.000 | (bao gồm trong Frontend) | -9.000.000 |
| Testing & Deploy | 5.000.000 | 4.250.000 | -750.000 |
| **Tổng phát triển** | **34.500.000** | **26.750.000** | **-7.750.000** |
| Hosting (năm đầu) | 2.650.000 | 2.650.000 | 0 |
| **TỔNG NĂM ĐẦU** | **37.150.000** | **29.400.000** | **-7.750.000** |

---

## 🎯 Kết Luận & Đề Xuất

### **Đề Xuất Cho Khách Hàng:**

**Gói Web Cơ Bản: 20.000.000 - 25.000.000 VNĐ**

**Lý do:**
- ✅ Giao diện đã có sẵn (tiết kiệm 30-40% chi phí)
- ✅ Chỉ cần làm backend API và kết nối
- ✅ Admin panel đơn giản, không cầu kỳ
- ✅ Chưa tích hợp thanh toán (giảm chi phí)

**Lộ trình:**
1. **Tuần 1-2:** Backend API (.NET)
2. **Tuần 3-4:** Frontend Angular (kết nối API)
3. **Tuần 5:** Testing & Deploy

**Sau khi chạy được:**
- Test với dữ liệu thật
- Nếu cần → Nâng cấp thanh toán, PDF (12 triệu)

**Chi phí hàng năm (sau năm đầu):**
- Hosting: 2.650.000 VNĐ/năm
- Bảo trì (nếu cần): 1.000.000 - 2.000.000 VNĐ/tháng

---

## 📝 Lưu Ý

1. **Chi phí trên dựa trên:**
   - Bạn đã có giao diện HTML đẹp
   - Chỉ cần làm backend + kết nối
   - Admin panel đơn giản

2. **Có thể giảm thêm nếu:**
   - Bạn tự deploy
   - Bạn tự test
   - Bỏ qua một số tính năng không cần thiết

3. **Nên đầu tư:**
   - Backend API ổn định
   - Database backup
   - SSL certificate

---

**Tài liệu này phù hợp hơn với yêu cầu thực tế của bạn!**

*Last Updated: 2025-01-28*

