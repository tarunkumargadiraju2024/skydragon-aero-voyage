
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/lovable-uploads/ef8440ce-df27-4bc6-93f5-62edd4f0b62a.png')",
        }}
      />
      <div className="relative z-10 text-center text-white px-4 py-16 bg-black/30">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Journey</h1>
        <p className="text-xl md:text-2xl mb-8">Experience Unparalleled Luxury in the Skies</p>
      </div>
    </section>
  );
};

export default HeroSection;
