"use client";

import { useState } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setFormState({ name: "", email: "", message: "" });
      setMessage({ type: "success", text: "Your message has been sent. We'll get back to you shortly." });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to send message" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Name
        <input
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Email
        <input
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Message
        <textarea
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
