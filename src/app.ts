import express from 'express';
import configRouter from './routes/inventory.routes';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import { authenticateToken } from './middleware/authMiddleware';
import cors from 'cors';
import path from 'path';

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
app.use("/config",authenticateToken, configRouter)


connectDB().then(()=>{
    app.listen(3200,()=>{
        console.log(`App Running on `)
    })
})