
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between bg-black overflow-hidden">
      <img 
        src="/lovable-uploads/a3b51585-92bc-4694-975d-ac8a5cb4cdde.png"
        alt="Gulfstream private jet flying over ocean" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="relative z-10 mt-auto mb-16">
        <Button
          onClick={scrollToQuote}
          variant="default"
          size="lg"
          className="bg-brand-blue hover:bg-skyblue text-white rounded-full px-8 py-6 text-lg"
        >
          Request Your Jet
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
