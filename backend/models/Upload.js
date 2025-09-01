
import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    filename: String,
    originalname: String,
    size: Number,
    sheetNames: [String],
    selectedSheet: String,
    columns: [String],
    sampleRows: { type: Array, default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Upload || mongoose.model("Upload", uploadSchema);
