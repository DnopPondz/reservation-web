import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/payments", label: "Payments" },
];

export default function AdminLayout({ children }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
      <div className="rounded-3xl border border-teal-500/40 bg-teal-500/10 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Admin control center</h1>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          Monitor bookings, verify payments, and manage hotel services from a single dashboard.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/40 dark:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-8 pb-16">{children}</div>
    </div>
  );
}
