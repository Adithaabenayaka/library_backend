import bcrypt from "bcryptjs";
import User from "../database/models/user.model";
import { generateToken } from "./lib/jwt";

export const registerUser = async (email: string, password: string)=> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    return generateToken({ userId: user._id, email: user.email });
};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    return generateToken({ userId: user._id, email: user.email });
};
