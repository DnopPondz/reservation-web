import { dashboardStats } from "@/data/dashboard";

const cards = [
  {
    key: "totalUsers",
    label: "Total users",
    description: "Registered guests and admins",
  },
  {
    key: "activeBookings",
    label: "Active bookings",
    description: "Pending or approved",
  },
  {
    key: "totalRevenue",
    label: "Revenue (USD)",
    description: "All verified payments",
  },
  {
    key: "pendingPayments",
    label: "Pending slips",
    description: "Awaiting verification",
  },
];

export function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.key}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{card.label}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
            {card.key === "totalRevenue" ? `$${dashboardStats[card.key].toLocaleString()}` : dashboardStats[card.key]}
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
