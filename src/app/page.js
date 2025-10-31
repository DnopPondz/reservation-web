import { CallToAction } from "@/components/landing/CallToAction";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ServicesShowcase } from "@/components/landing/ServicesShowcase";
import { Testimonials } from "@/components/landing/Testimonials";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ServicesShowcase />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
