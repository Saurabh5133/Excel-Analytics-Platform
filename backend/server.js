
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/upload.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

// Health
app.get("/", (_req, res) => res.json({ ok: true, name: "Excel Analytics API" }));

// DB + start
async function start() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.warn("⚠️  MONGO_URI not set. Running without database — history persistence disabled.");
    } else {
      await mongoose.connect(uri, { autoIndex: true });
      console.log("✅ MongoDB connected");
    }
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
