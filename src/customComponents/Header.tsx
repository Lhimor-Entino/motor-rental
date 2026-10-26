
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Menu } from "lucide-react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white ">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">ENTINO Rental</div>

      {/* CTA Button */}
      <Link to="/units">
        <ShinyButton className="shadow-2xl bg-slate-800" >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
            Book Now
          </span>
        </ShinyButton>
      </Link>
      {/* Mobile Menu Icon */}
      <button className="md:hidden">
        <Menu className="h-6 w-6 text-gray-700" />
      </button>
    </header>
  );
};

export default Header;
