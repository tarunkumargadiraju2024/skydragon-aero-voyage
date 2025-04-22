
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <img 
        src="/lovable-uploads/967ddae8-3152-46c2-ad92-4568157fa4c1.png" 
        alt="Private jets flying over ocean" 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative z-10 text-center text-white px-4 md:px-8 lg:px-16 mt-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Elevate Your Journey
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto">
          Experience Unparalleled Luxury in the Skies
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
