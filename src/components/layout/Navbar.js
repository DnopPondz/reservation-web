"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/store/auth-context";

const clientLinks = [
  { href: "/", label: "Home" },
  { href: "/reservation", label: "Reservation" },
  { href: "/history", label: "History" },
  { href: "/profile", label: "Profile" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-slate-800 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-300">
            HB
          </span>
          Horizon Booking
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {clientLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1 transition-colors hover:text-teal-600 dark:hover:text-teal-300 ${
                isActive(link.href) ? "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-200" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user?.role === "admin" && (
            <Link
              href="/admin"
              className={`rounded-full px-3 py-1 transition-colors hover:text-teal-600 dark:hover:text-teal-300 ${
                pathname.startsWith("/admin")
                  ? "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-200"
                  : ""
              }`}
            >
              Admin
            </Link>
          )}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="text-sm text-slate-500 dark:text-slate-300">Hi, {user.name || user.username || "Guest"}</span>
              <button
                onClick={logout}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-200"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/login"
                className="rounded-full border border-teal-500 px-4 py-2 text-sm font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500"
              >
                Register
              </Link>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-teal-500 hover:text-teal-500 dark:border-slate-700 dark:text-slate-300 md:hidden"
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-2">
            {clientLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-200 ${
                  isActive(link.href)
                    ? "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-200"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user?.role === "admin" && (
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className={`rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-200 ${
                  pathname.startsWith("/admin")
                    ? "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-200"
                    : ""
                }`}
              >
                Admin
              </Link>
            )}
            <div className="border-t border-slate-200 pt-3 dark:border-slate-700">
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-200"
                >
                  Logout
                </button>
              ) : (
                <div className="flex gap-2">
                  <Link
                    href="/login"
                    className="flex-1 rounded-full border border-teal-500 px-4 py-2 text-center text-sm font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="flex-1 rounded-full bg-teal-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
