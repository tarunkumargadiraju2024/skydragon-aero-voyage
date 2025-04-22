
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
          src="/lovable-uploads/a65110eb-4615-4d94-a681-ffc3ae7b2ce8.png"
          alt="Two private jets flying over ocean"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>
      <div className="relative z-10 text-center max-w-4xl px-4 mt-auto mb-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
          Where Every Journey<br />
          Feels First Class
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white/80 font-light">
          Since 2017, SkyDragon Aero redefined private aviation
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
