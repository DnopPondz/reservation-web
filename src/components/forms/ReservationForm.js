"use client";

import { useState } from "react";
import { services } from "@/data/services";

const paymentMethods = [
  { id: "qr", label: "QR Code" },
  { id: "bank", label: "Bank Transfer" },
];

export function ReservationForm({ onSubmit }) {
  const [serviceId, setServiceId] = useState(services[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [payment, setPayment] = useState(paymentMethods[0]?.id ?? "qr");
  const [slipPreview, setSlipPreview] = useState(null);
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSlipChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      setSlipPreview(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => setSlipPreview(e.target?.result ?? null);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await onSubmit?.({ serviceId, date, time, paymentMethod: payment, note });
      setMessage({ type: "success", text: "Reservation submitted successfully!" });
      setDate("");
      setTime("");
      setNote("");
      setSlipPreview(null);
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Failed to submit reservation" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Create a reservation</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Select your preferred room or service, pick a schedule, and choose a payment method. Our team will notify you once the booking is approved.
        </p>
      </div>

      {message && (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            message.type === "success"
              ? "border-teal-500/40 bg-teal-500/10 text-teal-700 dark:text-teal-200"
              : "border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Service / Room
          <select
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Date
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Time
          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </label>
        <div className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Payment method
          <div className="grid gap-3 md:grid-cols-2">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className={`flex cursor-pointer flex-col gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                  payment === method.id
                    ? "border-teal-500 bg-teal-500/10 text-teal-700 dark:border-teal-400 dark:bg-teal-500/20 dark:text-teal-100"
                    : "border-slate-200 bg-white text-slate-600 hover:border-teal-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment-method"
                  value={method.id}
                  checked={payment === method.id}
                  onChange={() => setPayment(method.id)}
                  className="hidden"
                />
                {method.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {payment === "bank" && (
        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Upload payment slip
            <input
              type="file"
              accept="image/*"
              onChange={handleSlipChange}
              className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-500 transition hover:border-teal-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
            />
          </label>
          {slipPreview && (
            <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-200">Preview</span>
              <img src={slipPreview} alt="Slip preview" className="h-40 w-full rounded-2xl object-cover" />
            </div>
          )}
        </div>
      )}

      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Notes (optional)
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={4}
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          placeholder="Share arrival details or queue preferences"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting reservation..." : "Submit reservation"}
      </button>
    </form>
  );
}
