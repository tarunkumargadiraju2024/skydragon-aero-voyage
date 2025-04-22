
import React from "react";

const HeroSection = () => {
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
    </section>
  );
};

export default HeroSection;
