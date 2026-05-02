import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

// middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3001",
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.options("*", cors({ origin: allowedOrigins, credentials: true }));

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

(async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
    
    //routes
    app.use("/api/user", userRoute);
    app.use("/api/message", messageRoute);
    
    server.listen(PORT, () => {
      console.log(`Server is Running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
})();
