export const metadata = {
  title: "About",
  description: "Learn about Horizon Booking's mission and team.",
};

const milestones = [
  {
    year: "2021",
    title: "Platform founded",
    description: "Built to help boutique hotels streamline digital reservations and queue management.",
  },
  {
    year: "2023",
    title: "Payment automation",
    description: "Introduced QR payments and slip verification workflows for finance teams.",
  },
  {
    year: "2024",
    title: "Global expansion",
    description: "Supporting properties across 12 countries with localized experiences.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">Our story</span>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
          Empowering hotels with end-to-end queue and booking intelligence
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
          Horizon Booking is the hospitality platform designed for busy teams. From real-time availability and digital payments to guest notifications and administrative oversight, we deliver a seamless journey for every reservation.
        </p>
      </section>
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {milestones.map((milestone) => (
          <article
            key={milestone.year}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">{milestone.year}</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{milestone.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{milestone.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
