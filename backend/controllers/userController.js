import { validationResult } from "express-validator";
import { User } from "../models/User.js";

export async function getProfile(req, res) {
  res.json({ user: req.user.toJSON() });
}

export async function updateProfile(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, phone, address, profileImage } = req.body;
  req.user.name = name;
  req.user.phone = phone;
  req.user.address = address;
  req.user.profileImage = profileImage;
  await req.user.save();

  res.json({ user: req.user.toJSON() });
}

export async function listUsers(_req, res) {
  const users = await User.find().sort({ createdAt: -1 });
  res.json({ users });
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const updates = req.body;
  const user = await User.findByIdAndUpdate(id, updates, { new: true });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ user });
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(204).send();
}
