import { validationResult } from "express-validator";
import { Booking } from "../models/Booking.js";

export async function listBookings(req, res) {
  const bookings = await Booking.find({ userId: req.user._id })
    .populate("serviceId")
    .sort({ createdAt: -1 });
  res.json({ bookings });
}

export async function createBooking(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const booking = await Booking.create({ ...req.body, userId: req.user._id });
  res.status(201).json({ booking });
}
