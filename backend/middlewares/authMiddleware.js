
import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  try {
    const hdr = req.headers.authorization || "";
    const token = hdr.startsWith("Bearer ") ? hdr.slice(7) : null;
    if (!token) return res.status(401).json({ message: "Missing token" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev-secret");
    req.user = { id: decoded.id };
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
