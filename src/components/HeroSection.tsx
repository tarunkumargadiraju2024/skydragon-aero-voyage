
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl px-4 mt-auto mb-24">
        <Button
          onClick={scrollToQuote}
          size="lg"
          className="bg-brand-blue hover:bg-skyblue text-white rounded-full px-8"
        >
          Request Your Jet Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
