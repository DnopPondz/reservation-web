import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-500 via-teal-600 to-slate-900">
        <div className="absolute inset-y-0 right-0 w-1/2 translate-x-1/4 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center text-white">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to modernize your hospitality operations?</h2>
        <p className="text-base text-white/80">
          Launch Horizon Booking in days, not weeks. Connect your property, onboard your team, and give guests the confidence of instant confirmations and transparent queues.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/register"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-slate-100"
          >
            Create free account
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
