import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesShowcase() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
            Rooms & Services
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Tailored experiences for every guest journey
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 dark:text-slate-400">
            Choose from premium rooms, spa experiences, and event-ready facilities. Track queue positions and manage every touchpoint from a single booking.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.name}</h3>
                  <span className="rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-600 dark:bg-teal-500/20 dark:text-teal-200">
                    ${service.price}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{service.description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-teal-600 dark:text-teal-300">
                  <span>Priority queue available</span>
                  <Link href="/reservation" className="inline-flex items-center gap-1">
                    Reserve now
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 10h10m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
