import { validationResult } from "express-validator";
import { Service } from "../models/Service.js";

export async function listServices(_req, res) {
  const services = await Service.find({}).sort({ createdAt: -1 });
  res.json({ services });
}

export async function createService(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const service = await Service.create(req.body);
  res.status(201).json({ service });
}

export async function updateService(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const service = await Service.findByIdAndUpdate(id, req.body, { new: true });
  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }
  res.json({ service });
}

export async function deleteService(req, res) {
  const { id } = req.params;
  await Service.findByIdAndDelete(id);
  res.status(204).send();
}
