import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Reach out to the Horizon Booking team for assistance.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[2fr,3fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">Contact us</span>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">We're here to help</h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Whether you're launching Horizon Booking for your property or need support with an existing reservation, our team is on standby.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">Support hours</h2>
              <p className="mt-1">Monday – Friday, 8:00 AM to 8:00 PM (GMT+7)</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">Email</h2>
              <p className="mt-1">support@horizonbooking.com</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">Phone</h2>
              <p className="mt-1">+1 (555) 274-0022</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
          <ContactForm />
        </div>
      </section>
      <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800">
        <iframe
          title="Horizon Booking HQ"
          className="h-80 w-full"
          src="https://maps.google.com/maps?q=bangkok%20thailand&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </div>
  );
}
