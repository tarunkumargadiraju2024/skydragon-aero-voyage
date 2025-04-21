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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Update to new airplane image background, remove overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/lovable-uploads/b31030fc-3bbc-4677-bcf5-edcc715c42a7.png"
          alt="Gulfstream G600 private jet at sunset"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>
      {/* No overlaid text or button */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* No text or button as per user request */}
      </div>
    </section>
  );
};

export default HeroSection;
