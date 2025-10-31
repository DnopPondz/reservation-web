import { validationResult } from "express-validator";
import { Payment } from "../models/Payment.js";

export async function listPayments(_req, res) {
  const payments = await Payment.find().populate({ path: "bookingId", populate: "userId serviceId" }).sort({ createdAt: -1 });
  res.json({ payments });
}

export async function recordPayment(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const payment = await Payment.create(req.body);
  res.status(201).json({ payment });
}

export async function verifyPayment(req, res) {
  const { id } = req.params;
  const payment = await Payment.findByIdAndUpdate(id, { verified: true }, { new: true });
  if (!payment) {
    return res.status(404).json({ message: "Payment not found" });
  }
  res.json({ payment });
}
