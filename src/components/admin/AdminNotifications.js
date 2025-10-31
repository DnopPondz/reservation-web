import { adminNotifications } from "@/data/dashboard";

export function AdminNotifications() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent activity</h2>
        <span className="text-xs font-medium uppercase tracking-wide text-teal-600 dark:text-teal-300">Live feed</span>
      </div>
      <ul className="mt-6 space-y-4">
        {adminNotifications.map((notification) => (
          <li key={notification.id} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{notification.message}</p>
            <span className="mt-1 block text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {notification.time}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
