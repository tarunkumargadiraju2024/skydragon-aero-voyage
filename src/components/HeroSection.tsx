
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between bg-black overflow-hidden">
      <img 
        src="/lovable-uploads/a3b51585-92bc-4694-975d-ac8a5cb4cdde.png"
        alt="Gulfstream private jet flying over ocean" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-black/50 py-4">
        <p className="text-sm font-light">
          SkyDragon Aero Group
        </p>
        <p className="text-xs text-white/70">
          SKYDRAGON AERO SOLUTIONS PRIVATE LIMITED
        </p>
        <p className="text-xs text-white/70">
          SkyDragon Aero Pvt.Ltd
        </p>
        <p className="text-xs text-white/70 mt-2">
          Elevating your journey since 2017
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
