
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
      {/* New airplane image as background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/lovable-uploads/18eb2d9a-6f54-42c5-a55b-24027e0cffee.png"
          alt="Two private jets flying over water with islands in background"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Centered content on top of the image */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Text and button removed as per user request */}
      </div>
    </section>
  );
};

export default HeroSection;
