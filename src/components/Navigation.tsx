
import React from "react";

const NAV_LINKS = [
  { name: "HOME", id: "home" },
  { name: "SERVICES", id: "services" },
  { name: "FLEET", id: "fleet" },
  { name: "CONTACT", id: "contact" },
];

const scrollToSection = (id: string) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation = () => (
  <nav className="w-full absolute top-0 left-0 right-0 z-30 px-0 pt-6">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/5225aa4a-906d-435b-80b6-7ea7a70058aa.png"
          alt="SkyDragon Logo"
          className="h-10 w-auto"
          style={{ maxHeight: 44, maxWidth: 155, objectFit: "contain" }}
        />
      </div>
      <div className="hidden md:flex gap-10">
        {NAV_LINKS.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className="text-white font-semibold tracking-wide text-lg hover:text-skyblue transition"
            style={{ letterSpacing: "0.03em" }}
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

export default Navigation;
