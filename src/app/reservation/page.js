import { ReservationClient } from "./ReservationClient";
import { services } from "@/data/services";

export const metadata = {
  title: "Reservation",
  description: "Book rooms, services, and queue slots at Horizon Booking.",
};

export default function ReservationPage() {
  const featuredService = services[0];

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Reservation center</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Secure your stay, wellness appointment, or event space with transparent queue management and instant payment options.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-[2fr,3fr]">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Featured spotlight</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {featuredService.description}
            </p>
            <dl className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <dt>Service</dt>
                <dd className="font-semibold text-slate-800 dark:text-slate-200">{featuredService.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt>From</dt>
                <dd className="font-semibold text-teal-600 dark:text-teal-300">${featuredService.price}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Queue priority</dt>
                <dd className="font-semibold text-slate-800 dark:text-slate-200">Included</dd>
              </div>
            </dl>
          </div>
          <ReservationClient />
        </div>
      </section>
    </div>
  );
}
