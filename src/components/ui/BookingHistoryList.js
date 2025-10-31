import { bookingHistory } from "@/data/bookings";
import { StatusBadge } from "./StatusBadge";

export function BookingHistoryList() {
  return (
    <section className="space-y-4">
      {bookingHistory.map((booking) => (
        <article
          key={booking.id}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{booking.serviceName}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {new Date(booking.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
                {" • "}
                {booking.time}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={booking.status} />
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">${booking.amount}</span>
            </div>
          </div>
          <dl className="mt-4 grid gap-4 text-sm text-slate-600 dark:text-slate-400 md:grid-cols-3">
            <div>
              <dt className="font-semibold text-slate-500 dark:text-slate-300">Booking ID</dt>
              <dd className="mt-1 text-slate-600 dark:text-slate-200">{booking.id}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500 dark:text-slate-300">Payment</dt>
              <dd className="mt-1 text-slate-600 dark:text-slate-200">{booking.paymentMethod}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500 dark:text-slate-300">Status update</dt>
              <dd className="mt-1 text-slate-600 dark:text-slate-200">
                {booking.status === "approved"
                  ? "Approved by admin. See you soon!"
                  : booking.status === "pending"
                  ? "Awaiting confirmation."
                  : booking.status === "completed"
                  ? "Completed successfully."
                  : "Rejected. Contact support."}
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </section>
  );
}
