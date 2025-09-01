
import fs from "fs";
import path from "path";
import xlsx from "xlsx";
import Upload from "../models/Upload.js";

export async function uploadExcel(req, res) {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const filepath = req.file.path;

    // Parse workbook
    const workbook = xlsx.readFile(filepath, { cellDates: true });
    const sheetNames = workbook.SheetNames || [];
    const firstSheet = req.query.sheet || sheetNames[0];
    if (!firstSheet) return res.status(400).json({ message: "No sheets found in workbook" });

    const sheet = workbook.Sheets[firstSheet];
    // Use defval to keep empty cells, raw to not parse to dates automatically
    const json = xlsx.utils.sheet_to_json(sheet, { defval: null, raw: false });

    // Infer columns from union of keys
    const columnSet = new Set();
    json.forEach((row) => Object.keys(row).forEach((k) => columnSet.add(k)));
    const columns = Array.from(columnSet);

    // Persist history if DB available
    let saved = null;
    try {
      saved = await Upload.create({
        userId: req.user?.id,
        filename: path.basename(filepath),
        originalname: req.file.originalname,
        size: req.file.size,
        sheetNames,
        selectedSheet: firstSheet,
        columns,
        sampleRows: json.slice(0, 10),
      });
    } catch (e) {
      // ignore if no DB
    }

    // Clean up uploaded file
    fs.unlink(filepath, () => {});

    return res.json({
      message: "Parsed successfully",
      sheetNames,
      selectedSheet: firstSheet,
      columns,
      rows: json, // send all rows; client can slice
      upload: saved ? { id: saved._id } : null,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to parse Excel" });
  }
}

export async function listUploads(req, res) {
  try {
    const q = req.user?.id ? { userId: req.user.id } : {};
    const items = await Upload.find(q).sort({ createdAt: -1 }).limit(50);
    return res.json(items);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to load history" });
  }
}
