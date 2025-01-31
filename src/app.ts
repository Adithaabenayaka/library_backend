import express from 'express'
import configRouter from './routes/inventory.routes';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import { authenticateToken } from './middleware/authMiddleware';

const app = express();

// Middlewares
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/config",authenticateToken, configRouter)


connectDB().then(()=>{
    app.listen(3200,()=>{
        console.log(`App Running on `)
    })
})