
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background: 4K Global 8000 in clouds */}
      <img
        src="/lovable-uploads/3837fbe1-9d47-412f-b5db-626752b6ceb3.png"
        alt="Global 8000 Jet in Clouds"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ minHeight: "100vh" }}
        draggable={false}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
      {/* Centered content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-6 text-center py-24">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Where Every Journey <br className="hidden md:block" /> Feels First Class
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 drop-shadow-md">
          Since 2017, SkyDragon Aero has redefined private aviation with a touch of elegance.
        </p>
        <Button
          onClick={scrollToQuote}
          size="lg"
          className="bg-white text-brand-blue hover:bg-gold hover:text-white rounded-full group transition-all duration-300 shadow-lg px-8"
        >
          Request Your Jet Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
