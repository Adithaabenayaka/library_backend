import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { baseApp } from "../../env";

const SECRET_KEY: Secret = baseApp.JWT_SECRET_KEY; 

export const generateToken = (payload: object, expiresIn: string = "1h") => {
    const options: SignOptions = {
        algorithm: "HS256",
        expiresIn: expiresIn as SignOptions["expiresIn"],
    };
    return jwt.sign(payload, SECRET_KEY, options);
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};
