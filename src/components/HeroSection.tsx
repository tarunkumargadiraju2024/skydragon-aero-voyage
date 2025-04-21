
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Aircraft background image (cover) */}
      <img
        src="/lovable-uploads/56a72db8-18e1-4706-9c53-a27cc0103819.png"
        alt="SkyDragon Jet"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ minHeight: "100vh" }}
        draggable={false}
      />
      {/* Overlay gradient for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 to-black/10 pointer-events-none" />
      {/* Content */}
      <div className="container relative z-20 flex flex-col items-center justify-center mx-auto px-6">
        {/* Spacer to move content below the aircraft */}
        <div className="h-[40vh] md:h-[48vh] lg:h-[45vh]" />
        <div className="w-full text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow leading-tight drop-shadow-lg">
            Where Every Journey <br className="hidden md:block" /> Feels First Class
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
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
        {/* Optional: bottom gradient for smoothness */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;
