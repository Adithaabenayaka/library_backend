import { Response } from "express";

// Success Reponse
export const successResponse = (
  res: Response,
  message: string,
  data: any = null,
  statusCode: number = 200
) => {
  const response: any = {
    success: true,
    message,
  };

  if (data !== null && data !== undefined) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

// Error Reponse
export const errorResponse = (
  res: Response,
  message: string ,
  error: any = null,
  statusCode: number = 500
) => {
  const response: any = {
    success: false,
    message,
  };

  if(error!==null){
    response.error = error
  }
  return res.status(statusCode).json(response);
};
