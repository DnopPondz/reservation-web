import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 60%)" }} />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24 text-center text-white md:flex-row md:items-start md:text-left">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            All-in-one hospitality suite
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hotel & Queue Booking made effortless for guests and administrators
          </h1>
          <p className="text-lg text-slate-200">
            Horizon Booking empowers hotels to deliver premium experiences with seamless reservations, secure payments, real-time notifications, and a modern admin cockpit that keeps operations in sync.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/reservation"
              className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
            >
              Start a Reservation
            </Link>
            <Link
              href="/admin"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore Admin Panel
            </Link>
          </div>
          <dl className="grid gap-6 text-left sm:grid-cols-3">
            {[
              { label: "Monthly bookings", value: "2.5k+" },
              { label: "Queue waiting time", value: "-48%" },
              { label: "Customer satisfaction", value: "4.8/5" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <dt className="text-sm uppercase tracking-wide text-slate-200">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-white">Queue Overview</h2>
              <p className="mt-2 text-sm text-slate-300">Upcoming services with queue positions in real time.</p>
              <ul className="mt-6 space-y-4">
                {[
                  { name: "Executive Suite Check-in", time: "Today • 14:00", status: "In progress", position: "02" },
                  { name: "Spa Therapy", time: "Today • 16:30", status: "Awaiting", position: "05" },
                  { name: "Conference Hall Setup", time: "Tomorrow • 09:00", status: "Scheduled", position: "12" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-slate-300">{item.time}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-wide text-teal-300">{item.status}</span>
                      <div className="mt-1 text-2xl font-semibold text-white">#{item.position}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
