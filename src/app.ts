import express from 'express';
import booksPvtRouter from './routes/bookspvt.routes';
import booksRouter from './routes/books.routes';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import { authenticateToken } from './middleware/authMiddleware';
import cors from 'cors';
import path from 'path';
import { baseApp } from './env';

const app = express();

app.use(cors({
    origin: "*",
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
}));

app.use("/public", express.static(path.join(__dirname, "..", "public")));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/books", booksRouter)
app.use("/config",authenticateToken, booksPvtRouter)


connectDB().then(()=>{
    app.listen(baseApp.PORT,()=>{
        console.log(`App Running on `)
    })
})