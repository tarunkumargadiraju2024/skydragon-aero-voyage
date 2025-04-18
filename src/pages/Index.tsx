import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FleetSection from "@/components/FleetSection";
import ServicesSection from "@/components/ServicesSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FleetSection />
      <ServicesSection />
      <QuoteFormSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
