import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { generateToken } from "../utils/token.js";
import { User } from "../models/User.js";

export async function register(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { username, email, password, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: "Email already in use" });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hash, role: role || "user" });

  const token = generateToken(user);
  res
    .cookie("token", token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" })
    .status(201)
    .json({ token, user: user.toJSON() });
}

export async function login(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user);
  res
    .cookie("token", token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" })
    .json({ token, user: user.toJSON() });
}

export function logout(_req, res) {
  res.clearCookie("token").status(204).send();
}
