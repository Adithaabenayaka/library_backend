import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { errorResponse } from "../service/lib/responseManager";
import { baseApp } from "../env";

const SECRET_KEY = baseApp.JWT_SECRET_KEY;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        errorResponse(res,"Unauthorized: No token provided");
        return;
    }

    const token = authHeader?.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as any).user = decoded; 
        next();
    } catch (error) {
        errorResponse(res,"Forbidden: Invalid token");
    }
};
