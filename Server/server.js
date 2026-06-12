import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// ── Route imports (add as you build each feature) ──
import productRoutes from './routes/productRoutes.js';
import cartRoutes    from './routes/cartRoutes.js';
import orderRoutes   from './routes/orderRoutes.js';
import authRoutes    from './routes/authRoutes.js';
import aiRoutes      from './routes/aiRoutes.js';

dotenv.config();
connectDB();

const app  = express();
const http = createServer(app);

// ── Socket.io (real-time cart updates) ───────────
const io = new Server(http, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`🔌 Client connected: ${socket.id}`);

  socket.on('join_cart', (sessionId) => {
    socket.join(sessionId);
    console.log(`🛒 Socket joined cart session: ${sessionId}`);
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

// Make io accessible in controllers
app.set('io', io);

// ── Middleware ────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────
app.use('/api/auth',     authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart',     cartRoutes);
app.use('/api/orders',   orderRoutes);
app.use('/api/ai',       aiRoutes);

// ── Health check ──────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    message: '🛒 SmartCart API is running',
    version: '1.0.0',
    status:  'healthy',
  });
});

// ── 404 handler ───────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Global error handler ──────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

// ── Start server ──────────────────────────────────
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log(`🚀 SmartCart server running on http://localhost:${PORT}`);
});
