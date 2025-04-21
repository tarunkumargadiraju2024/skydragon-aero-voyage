
import React from "react";

const HeroSection = () => {
  const handleBookFlight = () => {
    // Scroll to quote section or open booking form (can adapt as needed)
    const section = document.getElementById("quote");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative"
      id="home"
      style={{
        background: `url("/lovable-uploads/98aab101-dfe3-479c-95de-23cb0c9b6485.png") center center / cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 pt-28 pb-10">
        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg mb-6" style={{ textShadow: "0 2px 14px #222" }}>
          Elevate Your Journey<br className="hidden md:inline" /> with SkyDragon Aero
        </h1>
        <p className="text-white text-lg md:text-xl text-center max-w-2xl mx-auto mb-10 font-medium" style={{ textShadow: "0 1px 8px #111" }}>
          Experience unparalleled luxury and precision in private aviation.
        </p>
        <button
          className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-brand-blue transition-all duration-200"
          onClick={handleBookFlight}
        >
          Book Your Flight
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
