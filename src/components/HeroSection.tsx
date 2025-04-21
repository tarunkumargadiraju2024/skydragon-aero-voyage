
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
      {/* New homepage background image */}
      <img
        src="/lovable-uploads/29939d30-4866-4141-ab8d-76ee5217ae6d.png"
        alt="SkyDragon Jet Over Mountains"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ minHeight: "100vh" }}
        draggable={false}
      />
      {/* Overlay gradient for contrast */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />
      {/* Content */}
      <div className="container relative z-20 flex flex-col items-center justify-center mx-auto px-6">
        <div className="w-full max-w-4xl text-center">
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
      </div>
    </div>
  );
};

export default HeroSection;
