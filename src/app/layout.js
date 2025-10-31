import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/store/auth-context";

export const metadata = {
  title: {
    default: "Horizon Booking — Hotel & Queue Management",
    template: "%s · Horizon Booking",
  },
  description:
    "Modern hotel and queue booking platform with secure payments, real-time notifications, and a powerful admin console.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-50 text-slate-900">
      <body className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-slate-50 pb-20 pt-10 dark:bg-slate-950">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
