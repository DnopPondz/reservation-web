const testimonials = [
  {
    quote:
      "Horizon Booking transformed our check-in experience. Guests love the queue visibility and the admin console keeps the team aligned in real time.",
    name: "Isabel Moreno",
    role: "General Manager, Azure Bay Hotel",
  },
  {
    quote:
      "Slip verification used to be a bottleneck. Now our finance team approves payments in minutes, and guests receive instant confirmations.",
    name: "David Chen",
    role: "Finance Director, Skyline Suites",
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <div className="md:w-1/3">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Trusted by hotels worldwide</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Delivering hospitality excellence</h2>
            <p className="mt-4 text-sm text-slate-300">
              Operations teams rely on Horizon Booking for clear visibility into guest journeys and the flexibility to scale premium services.
            </p>
          </div>
          <div className="md:w-2/3 space-y-6">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-lg backdrop-blur"
              >
                <blockquote className="text-lg leading-relaxed text-slate-100">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6">
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs uppercase tracking-wide text-teal-200">{testimonial.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
