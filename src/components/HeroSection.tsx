
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <img 
        src="/lovable-uploads/a3b51585-92bc-4694-975d-ac8a5cb4cdde.png"
        alt="Gulfstream private jet flying over ocean" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
    </section>
  );
};

export default HeroSection;
