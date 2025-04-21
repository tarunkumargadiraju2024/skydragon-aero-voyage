
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen relative bg-black"
      id="home"
      style={{
        backgroundImage: 'url("/lovable-uploads/2bff38cc-160b-4311-b63d-9362a4cee43d.png")',
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Logo top left */}
      <div className="absolute top-6 left-6 z-30">
        <img
          src="/lovable-uploads/2bff38cc-160b-4311-b63d-9362a4cee43d.png"
          alt="SkyDragon Logo"
          className="h-12 w-auto"
          style={{ maxHeight: 48, maxWidth: 180, objectFit: "contain" }}
        />
      </div>

      {/* Overlay gradient slightly bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

      {/* Text content positioned slightly below center but above bottom */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-start justify-end min-h-[60vh] py-20 sm:py-28">
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg" style={{ letterSpacing: "0.02em" }}>
          Elevate Your Journey<br />with SkyDragon Aero
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
