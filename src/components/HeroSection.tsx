
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
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/lovable-uploads/d7ac2a04-8d65-4535-96fd-6845f52253f3.png"
          alt="Private jet flying in the sky"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Where Every Journey<br />Feels First Class
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Since 2017, SkyDragon Aero has redefined private aviation with a touch of elegance.
        </p>
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
