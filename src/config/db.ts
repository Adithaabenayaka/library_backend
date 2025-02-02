import mongoose from "mongoose";
import { baseApp } from "../env";

const connectDB = async () => {
    try {
      await mongoose.connect(baseApp.MONGO_URI);
      console.log("MongoDB Connected...");
    } catch (error) {
      console.error("MongoDB Connection Failed:", error);
      process.exit(1);
    }
  };

  export default connectDB