import { Booking } from "../models/Booking.js";

export async function listAllBookings(_req, res) {
  const bookings = await Booking.find().populate("userId serviceId").sort({ createdAt: -1 });
  res.json({ bookings });
}

export async function updateBookingStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  const booking = await Booking.findByIdAndUpdate(id, { status }, { new: true });
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }
  res.json({ booking });
}
