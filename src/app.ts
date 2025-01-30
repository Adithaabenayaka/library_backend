import express from 'express'
import configRouter from './Routes/config.routes';

const app = express();

// Middlewares
app.use(express.json());
// app.use("/login", loginRoutes)
app.use("/config", configRouter)


app.listen(3020,()=>{
    console.log("App Running")
})