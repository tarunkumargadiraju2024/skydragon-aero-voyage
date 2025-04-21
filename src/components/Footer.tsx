
import { Heart, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center justify-center w-full md:w-auto">
            <img 
              src="/lovable-uploads/36b523db-e216-4743-9932-5a648081de26.png" 
              alt="SkyDragon Aero Logo" 
              className="h-16 w-auto"
            />
          </div>
          <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
            {/* Empty placeholder for future content or spacing */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p className="max-w-2xl mx-auto flex items-center justify-center gap-2 mt-1">
            <Mail className="h-5 w-5 inline-block mr-2" />
            Email: ops@skydragonaero.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
