
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import authMiddleware from "../middlewares/authMiddleware.js";
import { uploadExcel, listUploads } from "../controllers/uploadController.js";

const router = express.Router();

// Ensure uploads dir exists
const uploadDir = path.resolve("uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  },
});

function excelFileFilter(_req, file, cb) {
  const ok = /\.xlsx?$/.test(file.originalname.toLowerCase());
  if (!ok) return cb(new Error("Only .xls or .xlsx files are allowed"));
  cb(null, true);
}

const upload = multer({ storage, fileFilter: excelFileFilter, limits: { fileSize: 25 * 1024 * 1024 } });

// Public for now; add authMiddleware to protect: router.post("/excel", authMiddleware, ...)
router.post("/excel", upload.single("file"), uploadExcel);
router.get("/history", listUploads);

export default router;
