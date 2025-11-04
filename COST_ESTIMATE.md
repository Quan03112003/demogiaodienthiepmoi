# 💰 Ước Tính Chi Phí Dự Án: Thiệp Mừng Online

## 📊 Tổng Quan

**Tình trạng hiện tại:**
- ✅ Frontend Angular (đã có giao diện demo)
- ✅ Backend .NET C# (đã có API cơ bản)
- ✅ SQL Server database
- ✅ Trang quản trị admin
- ✅ Trang client (người dùng)
- ❌ Chưa tích hợp thanh toán (tạm thời bỏ qua)

**Mục tiêu:** Đơn giản hóa, chi phí hợp lý, có thể nâng cấp sau

---

## 💵 Phân Tích Chi Phí Theo Giai Đoạn

### **GÓI CƠ BẢN (MVP - Minimum Viable Product)**
*Phù hợp cho khách hàng thu nhập bình thường, muốn test thị trường*

#### **Phase 1: Hoàn Thiện Backend API (Tuần 1-2)**
**Chi phí: 8.000.000 - 12.000.000 VNĐ**

| Công việc | Thời gian | Chi phí (VNĐ) |
|-----------|-----------|---------------|
| Setup database & migrations | 4 giờ | 1.000.000 |
| Templates API (CRUD) | 8 giờ | 2.000.000 |
| Orders API (CRUD + Payment mock) | 12 giờ | 3.000.000 |
| PDF Generation service | 8 giờ | 2.000.000 |
| QR Code generation (VietQR) | 4 giờ | 1.000.000 |
| Testing & bug fixes | 8 giờ | 2.000.000 |
| Deploy & setup | 4 giờ | 1.000.000 |
| **Tổng** | **48 giờ** | **12.000.000** |

**Lưu ý:** Nếu bạn tự làm, có thể giảm 30-40% chi phí.

---

#### **Phase 2: Tích Hợp Frontend Angular (Tuần 3)**
**Chi phí: 5.000.000 - 8.000.000 VNĐ**

| Công việc | Thời gian | Chi phí (VNĐ) |
|-----------|-----------|---------------|
| Kết nối Angular với API | 8 giờ | 2.000.000 |
| Form tạo thiệp + Preview | 10 giờ | 2.500.000 |
| Trang thanh toán + QR | 6 giờ | 1.500.000 |
| Trang download PDF | 4 giờ | 1.000.000 |
| Testing & responsive | 6 giờ | 1.500.000 |
| **Tổng** | **34 giờ** | **8.500.000** |

---

#### **Phase 3: Hoàn Thiện Admin Panel (Tuần 4)**
**Chi phí: 6.000.000 - 10.000.000 VNĐ**

| Công việc | Thời gian | Chi phí (VNĐ) |
|-----------|-----------|---------------|
| Dashboard với thống kê | 8 giờ | 2.000.000 |
| CRUD Templates (admin) | 6 giờ | 1.500.000 |
| Quản lý Orders | 8 giờ | 2.000.000 |
| Cấu hình ngân hàng | 4 giờ | 1.000.000 |
| Upload files (thumbnail, HTML) | 4 giờ | 1.000.000 |
| Testing & polish | 6 giờ | 1.500.000 |
| **Tổng** | **36 giờ** | **9.000.000** |

---

#### **Phase 4: Testing & Deploy (Tuần 5)**
**Chi phí: 3.000.000 - 5.000.000 VNĐ**

| Công việc | Thời gian | Chi phí (VNĐ) |
|-----------|-----------|---------------|
| End-to-end testing | 8 giờ | 2.000.000 |
| Fix bugs & optimize | 6 giờ | 1.500.000 |
| Setup production server | 4 giờ | 1.000.000 |
| Training cho khách hàng | 2 giờ | 500.000 |
| **Tổng** | **20 giờ** | **5.000.000** |

---

### **📊 TỔNG CHI PHÍ PHÁT TRIỂN (Gói Cơ Bản)**
**Tổng: 22.000.000 - 35.000.000 VNĐ**

*Thời gian: 5 tuần (1 tháng +)*

---

## 🖥️ Chi Phí Infrastructure & Hosting

### **Gói Cơ Bản (Phù hợp cho khách hàng thu nhập bình thường)**

#### **1. Hosting Backend (.NET Core)**
| Nhà cung cấp | Gói | Chi phí/tháng | Chi phí/năm |
|-------------|-----|---------------|-------------|
| **Azure App Service** | Basic B1 | 880.000 VNĐ | 10.560.000 VNĐ |
| **AWS EC2** | t3.micro | 600.000 VNĐ | 7.200.000 VNĐ |
| **VPS Việt Nam** | 2GB RAM | 200.000 VNĐ | 2.400.000 VNĐ ⭐ |
| **Shared Hosting** | .NET hosting | 150.000 VNĐ | 1.800.000 VNĐ ⭐⭐ |

**Khuyến nghị:** VPS Việt Nam hoặc Shared Hosting để tiết kiệm

---

#### **2. Hosting Frontend (Angular)**
| Nhà cung cấp | Chi phí/tháng | Chi phí/năm |
|-------------|---------------|-------------|
| **Netlify** | Miễn phí | 0 VNĐ ⭐⭐⭐ |
| **Vercel** | Miễn phí | 0 VNĐ ⭐⭐⭐ |
| **GitHub Pages** | Miễn phí | 0 VNĐ ⭐⭐⭐ |
| **Azure Static Web Apps** | Miễn phí | 0 VNĐ ⭐⭐⭐ |

**Khuyến nghị:** Netlify hoặc Vercel (miễn phí, dễ deploy)

---

#### **3. Database SQL Server**
| Nhà cung cấp | Gói | Chi phí/tháng | Chi phí/năm |
|-------------|-----|---------------|-------------|
| **Azure SQL Database** | Basic (5 DTU) | 1.200.000 VNĐ | 14.400.000 VNĐ |
| **SQL Server on VPS** | (bao gồm trong VPS) | 0 VNĐ | 0 VNĐ ⭐ |
| **SQL Server Express** | (local hoặc VPS) | 0 VNĐ | 0 VNĐ ⭐⭐ |

**Khuyến nghị:** Dùng SQL Server Express trên VPS (miễn phí, đủ cho dự án nhỏ)

---

#### **4. Domain Name**
| Loại | Chi phí/năm |
|------|-------------|
| .com | 250.000 - 350.000 VNĐ |
| .vn | 400.000 - 600.000 VNĐ |
| .com.vn | 500.000 - 800.000 VNĐ |

**Khuyến nghị:** .com (250.000 VNĐ/năm)

---

#### **5. SSL Certificate**
| Loại | Chi phí/năm |
|------|-------------|
| **Let's Encrypt** | Miễn phí ⭐⭐⭐ |
| Comodo SSL | 500.000 - 1.000.000 VNĐ |

**Khuyến nghị:** Let's Encrypt (miễn phí, tự động renew)

---

### **📊 TỔNG CHI PHÍ INFRASTRUCTURE (Năm đầu)**
**Tối thiểu: 2.400.000 - 3.000.000 VNĐ/năm**
- VPS Việt Nam: 2.400.000 VNĐ/năm
- Domain: 250.000 VNĐ/năm
- SSL: 0 VNĐ (miễn phí)
- Frontend hosting: 0 VNĐ (miễn phí)

**Tối đa: 27.000.000 VNĐ/năm** (nếu dùng Azure/AWS premium)

---

## 💳 Chi Phí Tích Hợp Thanh Toán (Sau Này)

### **Option 1: Casso.vn (Khuyến nghị)**
- **Gói dùng thử:** 7 ngày miễn phí
- **Gói cơ bản:** 50.000 VNĐ/tháng
- **Gói nâng cao:** 100.000 - 200.000 VNĐ/tháng
- **Setup fee:** Miễn phí

**Tổng năm đầu:** 600.000 - 2.400.000 VNĐ

---

### **Option 2: Sepay.vn**
- **Gói free:** 0 VNĐ (giới hạn 100 giao dịch/tháng)
- **Gói paid:** 100.000 - 300.000 VNĐ/tháng
- **Setup fee:** Miễn phí

**Tổng năm đầu:** 0 - 3.600.000 VNĐ

---

### **Option 3: Tự Xác Nhận Thủ Công (Tạm thời)**
- **Chi phí:** 0 VNĐ
- **Cách hoạt động:** Khách chuyển khoản → Admin vào trang quản trị xác nhận thủ công
- **Phù hợp:** Giai đoạn đầu, số lượng đơn hàng ít

---

## 🛠️ Chi Phí Bảo Trì & Nâng Cấp

### **Bảo Trì Hàng Tháng (Optional)**
| Hạng mục | Chi phí/tháng |
|----------|---------------|
| Bug fixes nhỏ | 500.000 - 1.000.000 VNĐ |
| Cập nhật tính năng nhỏ | 1.000.000 - 2.000.000 VNĐ |
| Support khách hàng | 1.000.000 - 2.000.000 VNĐ |
| Backup & monitoring | 500.000 VNĐ |

**Gói bảo trì cơ bản:** 2.000.000 - 3.000.000 VNĐ/tháng

---

## 📋 ĐỀ XUẤT CÁC GÓI GIÁ CHO KHÁCH HÀNG

### **GÓI 1: STARTUP (Khuyến nghị cho khách hàng thu nhập bình thường)**
**Tổng chi phí: 25.000.000 - 30.000.000 VNĐ**

**Bao gồm:**
- ✅ Hoàn thiện backend API
- ✅ Tích hợp Angular frontend
- ✅ Hoàn thiện admin panel
- ✅ Testing & deploy
- ✅ Setup hosting (VPS + domain)
- ✅ SSL miễn phí
- ✅ Training cơ bản
- ✅ Hỗ trợ 1 tháng đầu

**Không bao gồm:**
- ❌ Tích hợp thanh toán tự động (dùng xác nhận thủ công)
- ❌ Email notifications
- ❌ Advanced analytics

**Thời gian:** 5 tuần

---

### **GÓI 2: STANDARD**
**Tổng chi phí: 35.000.000 - 40.000.000 VNĐ**

**Bao gồm tất cả Gói 1 +**
- ✅ Tích hợp thanh toán Casso.vn
- ✅ Email notifications
- ✅ Public view page (`/view/{orderCode}`)
- ✅ Analytics cơ bản
- ✅ Hỗ trợ 3 tháng đầu

**Thời gian:** 6-7 tuần

---

### **GÓI 3: PREMIUM**
**Tổng chi phí: 50.000.000 - 60.000.000 VNĐ**

**Bao gồm tất cả Gói 2 +**
- ✅ Advanced analytics
- ✅ Multi-language support
- ✅ Mobile app (PWA)
- ✅ Advanced admin features
- ✅ Hỗ trợ 6 tháng đầu
- ✅ Bảo trì 1 năm

**Thời gian:** 8-10 tuần

---

## 💡 KHUYẾN NGHỊ

### **Cho Khách Hàng Thu Nhập Bình Thường:**

**Gợi ý 1: Gói Startup (25-30 triệu)**
- Phù hợp với ngân sách hạn chế
- Có thể test thị trường
- Nâng cấp sau khi có doanh thu

**Gợi ý 2: Phân Kỳ Thanh Toán**
- **Đợt 1 (30%):** 7.500.000 VNĐ - Khi bắt đầu dự án
- **Đợt 2 (40%):** 10.000.000 VNĐ - Khi hoàn thành backend
- **Đợt 3 (30%):** 7.500.000 VNĐ - Khi hoàn thành và deploy

**Tổng:** 25.000.000 VNĐ

---

### **Lộ Trình Nâng Cấp Sau:**

**Tháng 1-3:** Chạy với thanh toán thủ công
- Admin xác nhận thanh toán
- Chi phí: 0 VNĐ

**Tháng 4-6:** Tích hợp Casso.vn (nếu có doanh thu)
- Chi phí: 50.000 VNĐ/tháng
- Tự động hóa thanh toán

**Tháng 7-12:** Nâng cấp tính năng
- Email notifications: 2.000.000 VNĐ
- Analytics: 3.000.000 VNĐ
- Public view page: 2.000.000 VNĐ

---

## 📊 BẢNG SO SÁNH CHI PHÍ

| Hạng mục | Gói Startup | Gói Standard | Gói Premium |
|----------|-------------|-------------|-------------|
| **Phát triển** | 25.000.000 | 30.000.000 | 45.000.000 |
| **Hosting (năm đầu)** | 2.650.000 | 2.650.000 | 5.000.000 |
| **Thanh toán (năm đầu)** | 0 | 600.000 | 2.400.000 |
| **Bảo trì (năm đầu)** | 0 | 6.000.000 | 12.000.000 |
| **TỔNG NĂM ĐẦU** | **27.650.000** | **39.250.000** | **64.400.000** |
| **Từ năm 2** | 2.650.000/năm | 8.650.000/năm | 19.400.000/năm |

---

## 🎯 KẾT LUẬN & ĐỀ XUẤT

### **Đề Xuất Cho Khách Hàng Thu Nhập Bình Thường:**

**Gói Startup (25-30 triệu VNĐ)**
- ✅ Đủ tính năng cơ bản để vận hành
- ✅ Thanh toán thủ công (không mất phí)
- ✅ Có thể nâng cấp sau
- ✅ Chi phí hợp lý

**Lộ trình:**
1. **Tuần 1-5:** Phát triển và deploy
2. **Tháng 1-3:** Vận hành với thanh toán thủ công
3. **Tháng 4+:** Nâng cấp tính năng nếu cần

**Chi phí hàng năm sau năm đầu:**
- Hosting: 2.650.000 VNĐ/năm
- Thanh toán (nếu có): 600.000 VNĐ/năm
- **Tổng:** ~3.250.000 VNĐ/năm

---

## 📝 LƯU Ý

1. **Chi phí trên dựa trên:**
   - Bạn đã có giao diện demo
   - Cần hoàn thiện backend và tích hợp
   - Chưa tính thanh toán tự động

2. **Có thể giảm chi phí nếu:**
   - Bạn tự làm một phần
   - Sử dụng hosting miễn phí/nhỏ
   - Bỏ qua một số tính năng không cần thiết

3. **Nên đầu tư:**
   - Hosting ổn định (VPS Việt Nam)
   - Backup dữ liệu
   - SSL certificate

4. **Có thể hoãn:**
   - Thanh toán tự động (dùng thủ công)
   - Email notifications (gửi thủ công)
   - Advanced analytics

---

**Tài liệu này có thể điều chỉnh theo nhu cầu thực tế của khách hàng.**

*Last Updated: 2025-01-28*

