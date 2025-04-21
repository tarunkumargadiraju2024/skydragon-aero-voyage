
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
    <section
      className="relative flex items-start justify-center w-full min-h-screen overflow-hidden bg-black pt-[55px]" // Increased padding to push content further down
      style={{ minHeight: "100vh" }}
    >
      {/* Background image removed, so no img or overlay here */}
      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-3xl px-4">
        <h1
          className="font-serif text-white font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-xl mb-6"
          style={{
            letterSpacing: "0.01em",
            textShadow: "0 4px 24px rgba(0,0,0,0.43)",
          }}
        >
          Where Every Journey <br className="hidden md:block" /> Feels First Class
        </h1>
        <p
          className="text-white/90 font-medium mb-10 text-base xs:text-lg md:text-2xl drop-shadow"
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.45)",
          }}
        >
          Since 2017, SkyDragon Aero has redefined private aviation<br className="hidden sm:block" /> with a touch of elegance.
        </p>
        <Button
          onClick={scrollToQuote}
          size="lg"
          className="bg-gold hover:bg-gold-dark text-gray-900 font-semibold rounded px-8 py-3 text-lg shadow-lg transition-colors duration-300"
          style={{ minWidth: 180 }}
        >
          Register Jet Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

