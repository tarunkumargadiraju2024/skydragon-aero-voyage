
import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/197afe42-db1c-4829-b91a-1b4046d873fb.png';
    img.onload = () => console.log('Image loaded successfully');
    img.onerror = (error) => console.error('Image failed to load', error);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/lovable-uploads/197afe42-db1c-4829-b91a-1b4046d873fb.png')",
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
