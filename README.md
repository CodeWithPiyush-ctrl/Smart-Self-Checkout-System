# 🛒 SmartCart — AI-Powered Self-Checkout System

> Eliminating long billing queues at retail stores like JioMart, DMart, and Big Bazaar using a smart self-checkout web application.

![Tech Stack](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Claude AI](https://img.shields.io/badge/Claude_AI-D97757?style=for-the-badge&logo=anthropic&logoColor=white)

---

## 🎯 Problem Statement

In Indian retail stores, customers spend **20–30 minutes** waiting at billing counters after shopping. SmartCart solves this by letting customers scan items themselves as they shop, pay on their phone, and walk out — no queue, no waiting.

---

## ✨ Features

### 🛍️ Customer Portal
- Scan product barcodes to add items to trolley
- Live bill updates in real time (Socket.io)
- View itemized bill with GST breakdown and discounts
- Pay via UPI, Card, or Wallet (simulated)
- Get a QR code receipt instantly after payment

### 🛡️ Security Guard Portal
- Enter Order ID or paste QR code content
- Instant payment verification
- Clear GREEN ✅ (paid) or RED ❌ (not paid) status

### ⚙️ Admin Dashboard
- View all products with barcode, price, GST, stock
- One-click seed 25 demo products
- View all orders with payment status and details

### 🤖 AI Features (Claude API)
- Auto detects combo offers on cart items
- Suggests related products based on what's in cart
- Generates bill summary in English and Hindi
- Budget tips based on cart analysis

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite), React Router, Tailwind-style CSS |
| Backend | Node.js, Express.js, REST API |
| Database | MongoDB, Mongoose |
| Real-time | Socket.io (live cart updates) |
| Auth | JWT (JSON Web Tokens), bcryptjs |
| AI | Anthropic Claude API |
| QR Code | qrcode.react, qrcode (npm) |
| Deployment | Vercel (frontend), Render (backend), MongoDB Atlas |

---

## 🗂️ Project Structure

```
smartcart/
├── client/                    # React frontend (Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ScanPage.jsx       # Customer scanner
│   │   │   ├── CartPage.jsx       # Cart & bill
│   │   │   ├── PaymentPage.jsx    # Payment flow
│   │   │   ├── ReceiptPage.jsx    # QR receipt
│   │   │   ├── GuardPage.jsx      # Guard verification
│   │   │   └── AdminPage.jsx      # Admin dashboard
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── CartContext.jsx    # Global cart state
│   │   ├── hooks/
│   │   │   ├── useAI.js
│   │   │   ├── useOrders.js
│   │   │   └── useProducts.js
│   │   └── services/
│   │       └── api.js             # Axios API calls
│
├── server/                    # Node.js backend
│   ├── controllers/           # Business logic
│   ├── models/                # MongoDB schemas
│   ├── routes/                # API endpoints
│   ├── middleware/            # JWT auth
│   ├── config/                # DB connection
│   ├── utils/
│   │   └── seed.js            # DB seeder
│   └── server.js              # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free)
- Anthropic API key (for AI features)

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/smartcart-ai-checkout.git
cd smartcart-ai-checkout
```

### 2. Setup Backend
```bash
cd server
npm install
cp .env.example .env
# Fill in MONGO_URI and ANTHROPIC_API_KEY in .env
npm run dev
```

### 3. Seed the database
```bash
node utils/seed.js
```

### 4. Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

### 5. Open in browser
```
http://localhost:5173
```

---

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@smartcart.com | admin123 |
| Guard | guard@smartcart.com | guard123 |
| Customer | test@smartcart.com | test123 |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/scan/:barcode` | Fetch product by barcode |
| POST | `/api/products/seed` | Load demo products |
| GET | `/api/cart/:sessionId` | Get current cart |
| POST | `/api/cart/:sessionId/add` | Add item to cart |
| DELETE | `/api/cart/:sessionId/remove/:barcode` | Remove item |
| POST | `/api/orders` | Create order from cart |
| PATCH | `/api/orders/:id/pay` | Mark paid + generate QR |
| GET | `/api/orders/verify/:id` | Guard verification |
| POST | `/api/ai/suggestions` | AI product recommendations |
| POST | `/api/ai/summary` | AI bill summary |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

---

## 📱 App Flow

```
Customer enters store
        ↓
Scans items with barcode scanner (or types barcode)
        ↓
Live bill updates on phone in real time
        ↓
AI suggests offers and related products
        ↓
Customer pays via UPI/Card on phone
        ↓
QR code receipt generated instantly
        ↓
Shows QR to security guard at exit
        ↓
Guard scans → GREEN = paid → Customer exits
```

---

## 🌟 Why This Project

- 💡 Solves a **real problem** faced by millions of Indian shoppers daily
- 🏗️ **3-portal architecture** showing real-world multi-user system design
- 🤖 **AI integration** with Anthropic Claude for smart retail features
- ⚡ **Real-time updates** using WebSockets (Socket.io)
- 🔐 **Secure** JWT authentication with role-based access

---

## 📄 License

MIT License — feel free to use this project for learning and portfolio purposes.

---

## 👨‍💻 Author

**Piyush** — Thapar Institute of Engineering and Technology

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_LINKEDIN)
