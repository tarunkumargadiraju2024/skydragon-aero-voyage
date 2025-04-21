
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with video overlay, fallback to image */}
      <div className="absolute inset-0 z-0">
        {/* 4K loop video background, muted, faded with overlay gradient */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center absolute inset-0"
          poster="/lovable-uploads/b597ec11-ba38-43e1-914c-02efd1f86f18.png"
        >
          <source src="/flight-loop.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img
            src="/lovable-uploads/b597ec11-ba38-43e1-914c-02efd1f86f18.png"
            alt="Flight over clouds"
            className="w-full h-full object-cover object-center"
          />
        </video>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 to-skyblue/50 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow leading-tight">
            Where Every Journey <br className="hidden md:block" /> Feels First Class
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Since 2017, SkyDragon Aero has redefined private aviation with a touch of elegance.
          </p>
          <Button 
            onClick={scrollToQuote} 
            size="lg" 
            className="bg-white text-brand-blue hover:bg-gold hover:text-white rounded-full group transition-all duration-300"
          >
            Request Your Jet Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Floating cloud decorations */}
        <div className="absolute -bottom-2 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;
