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
    <section className="relative flex flex-col items-center w-full min-h-screen bg-black overflow-hidden pb-0 pt-[64px] md:pt-[80px]">
      {/* Airplane Image Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img
          src="/lovable-uploads/f62912c6-4eb6-424d-bdc8-bd37bc56fe6b.png"
          alt="Private Jet flying over snowy mountains"
          className="w-full h-full object-cover object-left-top"
          draggable={false}
          style={{
            objectPosition: "left top",
          }}
        />
        {/* Strong overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center mt-[60px] sm:mt-[70px] md:mt-[80px] text-center">
        {/* Headline */}
        <h1
          className="font-serif text-white font-bold drop-shadow-xl mb-8 text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-tight"
          style={{ letterSpacing: "0.005em" }}
        >
          Where Every Journey <br className="hidden md:block" /> Feels First Class
        </h1>
        {/* Subheadline and Button Stack */}
        <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
          <p
            className="text-white/90 font-medium text-lg xs:text-xl md:text-2xl drop-shadow-md"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
          >
            Since 2017, SkyDragon Aero has redefined private aviation with a touch of elegance.
          </p>
          <Button
            onClick={scrollToQuote}
            size="lg"
            className="bg-white text-blue-800 hover:bg-blue-700 hover:text-white rounded-full font-semibold transition-all duration-300 shadow-lg px-8 text-base xs:text-lg"
          >
            Request Your Jet Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      {/* Add space at bottom for breathing room */}
      <div className="h-20 sm:h-28 lg:h-32" />
    </section>
  );
};

export default HeroSection;
