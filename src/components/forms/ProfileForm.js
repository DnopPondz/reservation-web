"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/store/auth-context";

export function ProfileForm({ onSubmit }) {
  const { user, setUser } = useAuth();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profileImage: "",
  });
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setFormState({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        profileImage: user.profileImage || "",
      });
      setPreview(user.profileImage || null);
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result ?? null);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await onSubmit?.(formState);
      setUser({ ...user, ...formState, profileImage: preview || formState.profileImage });
      setMessage({ type: "success", text: "Profile updated successfully" });
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Failed to update profile" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Profile information</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Keep your contact information and profile picture up to date to receive timely notifications.
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

      <div className="flex flex-col items-start gap-6 sm:flex-row">
        <label className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center text-xs font-medium text-slate-500 transition hover:border-teal-400 hover:text-teal-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
          <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
          {preview ? (
            <img src={preview} alt="Profile preview" className="h-full w-full rounded-3xl object-cover" />
          ) : (
            <>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 5v14m-7-7h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Upload photo
            </>
          )}
        </label>
        <div className="flex-1 grid gap-6 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Full name
            <input
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Email address
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
            Phone number
            <input
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="e.g. +1 555 1234"
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 sm:col-span-2">
            Address
            <textarea
              name="address"
              value={formState.address}
              onChange={handleChange}
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              placeholder="Street, city, country"
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
