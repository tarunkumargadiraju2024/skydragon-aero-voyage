
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const jetImageSrc = "/lovable-uploads/29939d30-4866-4141-ab8d-76ee5217ae6d.png"; // Replace with your newly uploaded image's filename

const HeroSection = () => {
  // On mobile, scroll to quote section when CTA is tapped
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-black flex flex-col items-center overflow-hidden pb-0">
      {/* Hero content (headline/subtext) with extra padding */}
      <div className="relative z-10 w-full max-w-3xl mx-auto
        flex flex-col items-center text-center
        pt-16 pb-8
        md:pt-32 md:pb-12
        px-4
        "
        style={{
          minHeight: "280px",
          // Ensure enough room for logo at the top
        }}
      >
        <h1 className="font-serif text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.14)"
            }}
        >
          Where Every Journey <br className="hidden md:block" /> Feels First Class
        </h1>
        <p className="text-base xs:text-lg md:text-2xl text-white/90 mb-0 md:mb-2 drop-shadow-md max-w-xl mx-auto px-2"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.22)"
            }}
        >
          Since 2017, SkyDragon Aero has redefined private aviation with a touch of elegance.
        </p>
      </div>

      {/* Jet image as responsive background/banner */}
      <div
        className="relative w-full h-[260px] xs:h-[290px] md:h-[450px] flex justify-center items-end z-0 overflow-x-hidden"
        style={{
          // On mobile, extra bottom padding to avoid cutting off nose
          minHeight: 200,
          background: "#000"
        }}
      >
        <img
          src={jetImageSrc}
          alt="Private Jet flying"
          className="w-full h-full max-h-full object-contain object-bottom pointer-events-none select-none"
          style={{
            // On iPhone 13 Pro (and up), ensure full jet visible
            // Prevents objectFit cutting off important image
            // The image layer fills width and contains jet vertically.
          }}
          draggable={false}
          aria-hidden
        />
        {/* Subtle bottom fade for image if desired */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
      </div>

      {/* CTA now below the jet image */}
      <div className="relative w-full bg-white py-7 flex flex-col items-center shadow-md rounded-t-2xl -mt-3 z-20 px-4">
        <Button
          onClick={scrollToQuote}
          size="lg"
          className="bg-brand-blue text-white hover:bg-skyblue rounded-full group transition-all duration-200 shadow-lg px-8 text-base md:text-lg font-semibold"
        >
          Request Your Jet Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

