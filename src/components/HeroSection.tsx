
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <img 
        src="/lovable-uploads/4108e2de-d48d-4029-8ce8-71f5fbee303b.png" 
        alt="Gulfstream jets flying over water" 
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
