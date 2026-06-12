# 🛒 SmartCart — AI Self-Checkout System

A full-stack web app simulating an AI-powered self-checkout trolley for retail stores.

## Tech Stack
- **Frontend**: React (Vite) + React Router + Socket.io-client + QRCode.react
- **Backend**: Node.js + Express + Socket.io + QRCode
- **Database**: MongoDB (Mongoose)
- **AI**: Anthropic Claude API

## Getting Started

### 1. Clone & setup
```bash
git clone <your-repo-url>
```

### 2. Setup server
```bash
cd server
cp .env.example .env      # fill in your MONGO_URI and API keys
npm install
npm run dev               # starts on http://localhost:5000
```

### 3. Seed the database
```bash
curl -X POST http://localhost:5000/api/products/seed
```

### 4. Setup client
```bash
cd ../client
npm install
npm run dev               # starts on http://localhost:5173
```

## Portals
| URL | Who uses it |
|-----|------------|
| `/` | Customer — scan items |
| `/cart` | Customer — view bill & pay |
| `/receipt` | Customer — QR receipt after payment |
| `/guard` | Security guard — verify QR |
| `/admin` | Admin — manage products & orders |

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/scan/:barcode` | Fetch product by barcode |
| POST | `/api/products/seed` | Load 25 demo products |
| GET | `/api/cart/:sessionId` | Get current cart |
| POST | `/api/cart/:sessionId/add` | Add item to cart |
| POST | `/api/orders` | Create order from cart |
| PATCH | `/api/orders/:id/pay` | Mark paid + generate QR |
| GET | `/api/orders/verify/:id` | Guard verification |
| POST | `/api/ai/suggestions` | AI product recommendations |
| POST | `/api/ai/summary` | AI bill summary |
