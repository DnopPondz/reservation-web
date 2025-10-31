import { AdminNotifications } from "@/components/admin/AdminNotifications";
import { DashboardCards } from "@/components/admin/DashboardCards";
import { BookingHistoryList } from "@/components/ui/BookingHistoryList";

export const metadata = {
  title: "Admin dashboard",
  description: "Monitor guests, bookings, services, and payments.",
};

export default function AdminDashboardPage() {
  return (
    <>
      <DashboardCards />
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Latest guest bookings</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            A snapshot of recent guest reservations awaiting approval or already scheduled.
          </p>
          <div className="mt-6 space-y-4">
            <BookingHistoryList />
          </div>
        </section>
        <AdminNotifications />
      </div>
    </>
  );
}
