
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/aaf65ddc-4719-4c06-bcbd-cd299d2017f1.png" 
              alt="SkyDragon Aero Logo" 
              className="h-10 w-10 rounded-md mr-3 bg-white p-1"
            />
            <div>
              <h3 className="font-bold text-xl">
                <span className="text-[#0068C1]">Sky</span>
                <span className="text-brand-red">Dragon</span> Aero
              </h3>
              <p className="text-white/70 text-sm">Elevating your journey since 2017</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm mt-1">
              &copy; {currentYear} SkyDragon Aero Pvt.Ltd. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col items-center text-white/60 text-sm">
          <div className="text-right flex items-center gap-2">
            <Mail className="h-5 w-5 inline-block mr-2" />
            Email: ops@skydragonaero.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
