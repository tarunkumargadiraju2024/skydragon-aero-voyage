
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
          className="w-full h-[250px] sm:h-[340px] md:h-[410px] lg:h-[500px] object-contain object-top mx-auto z-0"
          draggable={false}
          style={{
            objectPosition: "center top",
            // Attempt to never cut off the nose
            // Responsive height depending on screen
          }}
        />
        {/* Stronger overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Place spacing below the jet image to avoid headline overlap */}
        <div className="h-[260px] sm:h-[340px] md:h-[410px] lg:h-[500px] w-full" />
        {/* Headline */}
        <h1
          className="font-serif text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold
            text-center mb-6 drop-shadow-xl"
          style={{
            textShadow: "0 4px 22px rgba(0,0,0,0.52), 0 1px 0 #0008",
            letterSpacing: "0.005em",
            marginTop: 0,
          }}>
          Where Every Journey <br className="hidden md:block" /> Feels First Class
        </h1>
        <div className="flex flex-col items-center gap-5 w-full max-w-xl px-6 mx-auto">
          <p
            className="text-base xs:text-lg md:text-2xl font-medium text-white/90 text-center drop-shadow-md"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Since 2017, SkyDragon Aero has redefined private aviation with a touch of elegance.
          </p>
          <Button
            onClick={scrollToQuote}
            size="lg"
            className="mt-0 bg-white text-blue-800 hover:bg-blue-700 hover:text-white rounded-full font-semibold transition-all duration-300 shadow-lg px-8 text-base xs:text-lg"
          >
            Request Your Jet Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      {/* Add space at bottom for breathability */}
      <div className="h-16 sm:h-24 lg:h-32" />
    </section>
  );
};

export default HeroSection;
