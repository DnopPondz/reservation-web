"use client";

import Link from "next/link";
import { useState } from "react";

export function AuthCard({ type = "login", onSubmit }) {
  const isLogin = type === "login";
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await onSubmit?.(formState);
      setMessage({ type: "success", text: isLogin ? "Welcome back!" : "Account created successfully" });
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Something went wrong" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-2 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
          {isLogin ? "Welcome back" : "Create account"}
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
          {isLogin ? "Log in to Horizon Booking" : "Register for Horizon Booking"}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {isLogin
            ? "Access your bookings, queue updates, and personalized services."
            : "Sign up as a guest user to start booking rooms, services, and queue slots."}
        </p>
      </div>

      {message && (
        <div
          className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
            message.type === "success"
              ? "border-teal-500/40 bg-teal-500/10 text-teal-700 dark:text-teal-200"
              : "border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {!isLogin && (
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Username
            <input
              name="username"
              value={formState.username}
              onChange={handleChange}
              required
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            />
          </label>
        )}
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
          Password
          <input
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            required
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Please wait..." : isLogin ? "Log in" : "Register"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
        {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
        <Link href={isLogin ? "/register" : "/login"} className="font-semibold text-teal-600 hover:text-teal-500">
          {isLogin ? "Sign up" : "Sign in"}
        </Link>
      </p>
    </div>
  );
}
