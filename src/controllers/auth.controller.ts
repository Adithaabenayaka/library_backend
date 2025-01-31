import { Request, Response } from "express";
import { registerUser, loginUser } from "../service/user.service";
import { errorResponse, successResponse } from "../service/lib/responseManager";

class authController {
  // Register a user
  registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await registerUser(email, password);
      successResponse(
        res,
        "User registered successfully",
        {token},
        res.statusCode
      );
    } catch (error: any) {
      errorResponse(res, error.message || error, error, res.statusCode);
    }
  };

    // Login user
  loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await loginUser(email, password);
      successResponse(res, "Login successful", {token}, res.statusCode);
    } catch (error: any) {
      errorResponse(res, error.message || error, error, res.statusCode);
    }
  };
}

export default new authController();
