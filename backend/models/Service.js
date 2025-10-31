import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Service = mongoose.model("Service", serviceSchema);
