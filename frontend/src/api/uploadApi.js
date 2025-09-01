
const BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";
import { authHeader } from "./authApi.js";

export async function uploadExcel(file) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch(`${BASE}/api/upload/excel`, {
    method: "POST",
    headers: { ...authHeader() },
    body: fd,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Upload failed");
  return data;
}

export async function fetchHistory() {
  const res = await fetch(`${BASE}/api/upload/history`, {
    headers: { ...authHeader() },
  });
  if (!res.ok) throw new Error("Failed to load history");
  return await res.json();
}
