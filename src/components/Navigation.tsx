
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <img
            src="/lovable-uploads/cbcbfb79-30e8-46a8-84fc-79750f7d0abd.png"
            alt="SkyDragon Logo"
            className={cn(
              "h-12 w-auto",
              isScrolled ? "" : "bg-black/90 rounded-md p-1"
            )}
            style={{
              maxHeight: 46,
              maxWidth: 168,
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
          <h3 className="font-bold text-xl">
            <span className="text-[#33C3F0]">Sky</span>
            <span className="text-brand-red">Dragon</span>
          </h3>
        </div>

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
