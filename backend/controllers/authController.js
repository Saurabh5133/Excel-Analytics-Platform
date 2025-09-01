
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) return res.status(400).json({ message: "All fields are required" });
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    return res.status(201).json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "dev-secret", { expiresIn: "7d" });
    return res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
