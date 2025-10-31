const steps = [
  {
    id: 1,
    title: "Plan & discover",
    description: "Browse curated rooms and services, compare amenities, and confirm availability in real time.",
  },
  {
    id: 2,
    title: "Book & pay securely",
    description: "Select preferred schedule, reserve queue slots, and pay via QR code or bank transfer slip upload.",
  },
  {
    id: 3,
    title: "Manage effortlessly",
    description: "Track approvals, receive notifications, and manage profiles while admins monitor operations.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Streamlined journeys for guests and teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Every part of the reservation process is connected—from discovery to payment verification and queue notifications—giving everyone clarity and control.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-lg font-semibold text-teal-600 dark:bg-teal-500/20 dark:text-teal-200">
                {step.id.toString().padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
