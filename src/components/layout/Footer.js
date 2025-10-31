import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Rooms", href: "/reservation" },
      { label: "Spa", href: "/reservation" },
      { label: "Events", href: "/reservation" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-200">
              HB
            </span>
            Horizon Booking
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Premium hotel and queue management platform offering seamless reservations, secure payments, and real-time updates.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-teal-600 dark:hover:text-teal-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        © {new Date().getFullYear()} Horizon Booking. All rights reserved.
      </div>
    </footer>
  );
}
