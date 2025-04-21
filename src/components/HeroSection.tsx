
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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black overflow-hidden">
      {/* 4K HD Gulfstream in clouds */}
      <div className="relative w-full min-h-[65vh] flex items-end justify-center">
        <img
          src="/lovable-uploads/e7865d39-17d2-4276-ac35-df5d016c5a29.png"
          alt="Gulfstream Jet in the Clouds"
          className="w-full object-cover object-center"
          style={{
            minHeight: "50vh",
            maxHeight: "68vh",
            aspectRatio: "16/7",
          }}
          draggable={false}
        />
        {/* Subtle gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-black/60 pointer-events-none" />
      </div>
      {/* Centered text content below image */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center pt-10 pb-20 flex flex-col items-center">
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

