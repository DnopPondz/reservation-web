import { BookingHistoryList } from "@/components/ui/BookingHistoryList";

export const metadata = {
  title: "Booking history",
  description: "Track reservations, payments, and queue statuses.",
};

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Booking history</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Review previous reservations, payment confirmations, and queue updates. We keep you informed every step of the way.
        </p>
      </section>
      <div className="mt-8">
        <BookingHistoryList />
      </div>
    </div>
  );
}
