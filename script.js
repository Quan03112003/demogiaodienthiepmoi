// Thiệp Mừng Online Demo - JavaScript

class CardBuilder {
    constructor() {
        this.currentTemplate = null;
        this.cardData = {};
        this.init();
    }

    init() {
        this.bindEvents();
        this.generateTransactionCode();
    }

    bindEvents() {
        // Template selection
        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectTemplate(card.dataset.template);
            });
        });

        // Form inputs
        document.getElementById('cardForm').addEventListener('input', () => {
            this.updatePreview();
        });

        // Proceed to payment
        document.getElementById('proceedToPayment').addEventListener('click', () => {
            this.proceedToPayment();
        });

        // Mock payment
        document.getElementById('mockPayment').addEventListener('click', () => {
            this.mockPayment();
        });

        // Download card
        document.getElementById('downloadCard').addEventListener('click', () => {
            this.downloadCard();
        });

        // Share card
        document.getElementById('shareCard').addEventListener('click', () => {
            this.shareCard();
        });
    }

    selectTemplate(templateType) {
        this.currentTemplate = templateType;
        
        // Update modal title
        const modalTitle = document.querySelector('#cardBuilderModal .modal-title');
        const templateNames = {
            'birthday-basic': 'Sinh Nhật Cơ Bản',
            'wedding-advanced': 'Cưới Hỏi Nâng Cao',
            'tet-luxury': 'Tết Cao Cấp'
        };
        modalTitle.textContent = `Tạo Thiệp - ${templateNames[templateType]}`;

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('cardBuilderModal'));
        modal.show();

        // Update preview
        this.updatePreview();
    }

    updatePreview() {
        if (!this.currentTemplate) return;

        const senderName = document.getElementById('senderName').value || 'Tên người gửi';
        const recipientName = document.getElementById('recipientName').value || 'Tên người nhận';
        const message = document.getElementById('message').value || 'Lời chúc mừng...';
        const eventDate = document.getElementById('eventDate').value;

        const preview = document.getElementById('cardPreview');
        preview.className = `card-preview ${this.currentTemplate}`;
        
        preview.innerHTML = `
            <div class="preview-content">
                <h3>${this.getTemplateTitle()}</h3>
                <p>${message}</p>
                <div class="preview-name">${recipientName}</div>
                ${eventDate ? `<div class="preview-date">${this.formatDate(eventDate)}</div>` : ''}
            </div>
        `;

        // Store card data
        this.cardData = {
            template: this.currentTemplate,
            senderName,
            recipientName,
            message,
            eventDate,
            price: this.getTemplatePrice()
        };
    }

    getTemplateTitle() {
        const titles = {
            'birthday-basic': 'Chúc Mừng Sinh Nhật!',
            'wedding-advanced': 'Chúc Mừng Hôn Lễ!',
            'tet-luxury': 'Chúc Mừng Năm Mới!'
        };
        return titles[this.currentTemplate] || 'Thiệp Mừng';
    }

    getTemplatePrice() {
        const prices = {
            'birthday-basic': 50000,
            'wedding-advanced': 100000,
            'tet-luxury': 200000
        };
        return prices[this.currentTemplate] || 50000;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    proceedToPayment() {
        // Validate form
        const form = document.getElementById('cardForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Close card builder modal
        const cardModal = bootstrap.Modal.getInstance(document.getElementById('cardBuilderModal'));
        cardModal.hide();

        // Show payment modal
        this.showPaymentModal();
    }

    showPaymentModal() {
        const amount = this.cardData.price;
        const formattedAmount = new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
        
        document.getElementById('paymentAmount').textContent = formattedAmount;
        document.getElementById('paymentContent').textContent = `THIEP MUNG ${this.transactionCode}`;
        
        // Generate QR code placeholder
        this.generateQRCode();
        
        const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
        paymentModal.show();
    }

    generateQRCode() {
        const qrContainer = document.getElementById('qrCode');
        const bankInfo = {
            bank: 'Vietcombank',
            account: '1234567890',
            amount: this.cardData.price,
            content: `THIEP MUNG ${this.transactionCode}`
        };
        
        // Create QR code data (VietQR format)
        const qrData = `970415|${bankInfo.account}|${bankInfo.amount}|${bankInfo.content}`;
        
        qrContainer.innerHTML = `
            <div class="qr-code">
                <div style="width: 200px; height: 200px; background: #f0f0f0; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                    <div style="text-align: center;">
                        <i class="fas fa-qrcode fa-3x text-muted"></i>
                        <p class="mt-2 small">QR Code Demo</p>
                    </div>
                </div>
                <p class="mt-2 small text-muted">Dữ liệu: ${qrData}</p>
            </div>
        `;
    }

    generateTransactionCode() {
        this.transactionCode = 'TM' + Date.now().toString().slice(-6);
    }

    mockPayment() {
        // Show loading
        const button = document.getElementById('mockPayment');
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="loading"></span> Đang xử lý...';
        button.disabled = true;

        // Simulate payment processing
        setTimeout(() => {
            // Close payment modal
            const paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
            paymentModal.hide();

            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            // Reset button
            button.innerHTML = originalText;
            button.disabled = false;

            // Generate PDF download link
            this.generateDownloadLink();
        }, 2000);
    }

    generateDownloadLink() {
        // In real app, this would call backend API to generate PDF
        // For demo, we'll create a simple HTML page that can be printed as PDF
        const cardHTML = this.generateCardHTML();
        this.cardHTML = cardHTML;
    }

    generateCardHTML() {
        const { template, senderName, recipientName, message, eventDate } = this.cardData;
        
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Thiệp Mừng - ${this.getTemplateTitle()}</title>
    <style>
        body { 
            margin: 0; 
            padding: 20px; 
            font-family: Arial, sans-serif;
            background: white;
        }
        .card {
            width: 400px;
            height: 300px;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .card-content {
            text-align: center;
            z-index: 2;
        }
        .card-content h1 {
            font-size: 2rem;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .card-content p {
            font-size: 1.2rem;
            margin-bottom: 20px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .card-content .recipient {
            font-size: 1.1rem;
            opacity: 0.9;
            font-style: italic;
        }
        .card-content .sender {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-top: 20px;
        }
        .birthday-basic { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
        .wedding-advanced { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
        .tet-luxury { background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%); }
        .birthday-basic::before { content: '🎂'; position: absolute; top: 20px; right: 20px; font-size: 2rem; opacity: 0.3; }
        .wedding-advanced::before { content: '💒'; position: absolute; top: 20px; right: 20px; font-size: 2rem; opacity: 0.4; }
        .tet-luxury::before { content: '🏮'; position: absolute; top: 20px; right: 20px; font-size: 2rem; opacity: 0.4; }
        .birthday-basic::after { content: '🎈'; position: absolute; bottom: 20px; left: 20px; font-size: 1.5rem; opacity: 0.3; }
        .wedding-advanced::after { content: '💐'; position: absolute; bottom: 20px; left: 20px; font-size: 1.5rem; opacity: 0.4; }
        .tet-luxury::after { content: '🧧'; position: absolute; bottom: 20px; left: 20px; font-size: 1.5rem; opacity: 0.4; }
        @media print {
            body { margin: 0; padding: 0; }
            .card { box-shadow: none; }
        }
    </style>
</head>
<body>
    <div class="card ${template}">
        <div class="card-content">
            <h1>${this.getTemplateTitle()}</h1>
            <p>${message}</p>
            <div class="recipient">${recipientName}</div>
            ${eventDate ? `<div class="event-date">${this.formatDate(eventDate)}</div>` : ''}
            <div class="sender">Từ: ${senderName}</div>
        </div>
    </div>
    <div style="text-align: center; margin-top: 20px; color: #666;">
        <p>Thiệp được tạo bởi Thiệp Mừng Online</p>
        <p>Mã giao dịch: ${this.transactionCode}</p>
    </div>
</body>
</html>`;
    }

    downloadCard() {
        if (!this.cardHTML) return;

        // Create blob and download
        const blob = new Blob([this.cardHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `thiep-mung-${this.transactionCode}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Show success message
        alert('Thiệp đã được tải xuống! Bạn có thể mở file HTML và in thành PDF.');
    }

    shareCard() {
        // In real app, this would generate a shareable link
        const shareText = `Tôi vừa tạo một thiệp mừng đẹp trên Thiệp Mừng Online! Mã giao dịch: ${this.transactionCode}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Thiệp Mừng Online',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Đã copy link chia sẻ vào clipboard!');
            });
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CardBuilder();
});

// Add some smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
