import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
    method: { type: String, enum: ["QR", "bank"], required: true },
    amount: { type: Number, required: true },
    slipImage: { type: String },
    verified: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export const Payment = mongoose.model("Payment", paymentSchema);
