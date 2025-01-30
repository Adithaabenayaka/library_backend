import express from 'express'
import configRouter from './routes/inventory.routes';
import connectDB from './config/db';

const app = express();

// Middlewares
app.use(express.json());
// app.use("/login", loginRoutes) 
app.use("/config", configRouter)


connectDB().then(()=>{
    app.listen(3200,()=>{
        console.log(`App Running on `)
    })
})