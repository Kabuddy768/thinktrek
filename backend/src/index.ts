import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import authorRoutes from './Author/author.router';
import blogRoutes from './Blog/blog.router';
import path from 'path';
import fs from 'fs';
import uploadRouter from './uploads/upload.router';

dotenv.config();
const app = express();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" } // Allow serving uploaded files
}));

// CORS configuration with whitelist
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '*').split(',').map(origin => origin.trim());

app.use(cors({
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serves static uploads folder
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Routes
authorRoutes(app);
blogRoutes(app);
app.use('/upload', uploadRouter);

const PORT = process.env.PORT || 8088;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${NODE_ENV} mode`);
});

export default app;