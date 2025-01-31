import Router from "express";
import authController from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register",authController.registerUser)
authRoutes.post("/login",authController.loginUser)


export default authRoutes;
