
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
    <section className="w-full bg-black">
      {/* Aircraft image alone at top */}
      <div className="w-full max-h-[80vh] overflow-hidden relative">
        <img
          src="/lovable-uploads/29939d30-4866-4141-ab8d-76ee5217ae6d.png"
          alt="SkyDragon Jet Over Mountains"
          className="w-full h-auto object-cover object-center"
          draggable={false}
          style={{ maxHeight: "80vh" }}
        />
      </div>

      {/* Text content below image */}
      <div className="container mx-auto px-6 py-16 max-w-4xl text-center">
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

