
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

// Add Google Fonts (Playfair Display) by including it into the <head> in index.html, or alternatively use Tailwind's font-serif, which will be Playfair Display if set in tailwind.config
// For this code, we assume the font is configured and use font-serif for luxury serif look.

const jetImageUrl = "/lovable-uploads/07c1d6b9-e132-4bce-899f-7af5d72eb44d.png"; // replace with your uploaded image

const HeroSection = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-end bg-gradient-to-b from-[#0a2342] via-[#295072] to-[#fbb17a] overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a2342 0%, #295072 60%, #fbb17a 100%)" }}
    >
      {/* Sky gradient background fills the section */}
      {/* Jet image, centered or right-aligned, with no overlays or text above */}
      <div className="w-full flex justify-center items-end pt-20 md:pt-32 select-none">
        <img
          src={jetImageUrl}
          alt="Gulfstream Jet in the Clouds"
          className="object-contain object-center max-h-[340px] md:max-h-[440px] w-auto drop-shadow-2xl"
          draggable={false}
          style={{
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>
      {/* Content below the jet */}
      <div className="relative w-full max-w-2xl px-6 mx-auto flex flex-col items-center justify-center pb-16 mt-10 md:mt-14 fade-in">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-5 leading-tight drop-shadow-lg">
          Where Every Journey<br className="hidden md:block" /> Feels First Class
        </h1>
        <p className="font-serif text-lg md:text-2xl text-white/90 mb-10 text-center">
          Since 2017, SkyDragon Aero has redefined private aviation with a touch of elegance.
        </p>
        <Button
          onClick={scrollToQuote}
          size="lg"
          className="rounded-full px-10 py-5 bg-gold text-black font-serif text-lg font-bold shadow-xl hover:bg-gold-dark hover:text-white transition-all border-2 border-gold-dark"
          style={{
            background: "linear-gradient(90deg, #D4AF37 0%, #B8860B 100%)",
            color: "#222",
            boxShadow: "0 6px 32px 0 rgba(0,0,0,0.18)",
          }}
        >
          Register Jet Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

