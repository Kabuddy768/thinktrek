import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import authorRoutes from './Author/author.router';
import blogRoutes from './Blog/blog.router';
import uploadRouter from './uploads/upload.router';

dotenv.config();
const app = express();

// --- Security middleware ---
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" } // Allow serving uploaded files
}));

// --- CORS configuration ---
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim());

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin) return callback(null, true); // allow non-browser requests
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: Origin ${origin} not allowed`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Handle preflight OPTIONS requests globally (Express 5 compatible)
app.options('/*', cors(corsOptions));

// --- Body parser ---
app.use(express.json());

// --- Ensure uploads directory exists ---
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// --- Serve static uploads folder ---
app.use('/uploads', express.static(uploadsDir));

// --- Routes ---
authorRoutes(app);
blogRoutes(app);
app.use('/upload', uploadRouter);

// --- Catch-all route for health check or SPA fallback if needed ---
app.get('/', (_req, res) => {
  res.send('API is running 🚀');
});

// --- Error handling middleware ---
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  if (err.message.includes('CORS')) {
    return res.status(403).json({ message: err.message });
  }
  res.status(500).json({ message: 'Internal Server Error' });
});

// --- Start server ---
const PORT = process.env.PORT || 8088;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${NODE_ENV} mode`);
});

export default app;
