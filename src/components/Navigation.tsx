
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scrolling for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-12",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/aaf65ddc-4719-4c06-bcbd-cd299d2017f1.png" 
            alt="SkyDragon Aero Logo" 
            className="h-10 w-10 rounded-md"
          />
          <span className={`font-bold text-xl ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            SkyDragon
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {["about", "fleet", "services", "quote", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm font-medium hover:text-skyblue transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("quote")}
            variant="default"
            size="sm"
            className="bg-brand-blue hover:bg-skyblue text-white rounded-full px-6"
          >
            Request Your Jet
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary-foreground z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            {["about", "fleet", "services", "quote", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-lg font-medium text-gray-800 hover:text-skyblue transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("quote")}
              variant="default"
              className="bg-brand-blue hover:bg-skyblue text-white rounded-full px-8"
            >
              Request Your Jet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
