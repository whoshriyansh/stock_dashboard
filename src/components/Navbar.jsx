import {
  BellRinging,
  Diamond,
  EnvelopeSimple,
  List,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../context/ThemeToggle";
import { Button } from "./ui/Buttons";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-card text-primary-text py-4 px-2 md:px-4 shadow-md flex justify-between items-center">
      {/* Hamburger icon for mobile */}
      <div>
        <button onClick={toggleSidebar} className="lg:hidden">
          <List size={24} />
        </button>

        <div className="lg:flex items-center justify-between text-2xl font-semibold hidden">
          <div className="flex items-center gap-2 text-primary-purple">
            <Diamond size={32} weight="bold" />
            Stockin
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="purple">Connect</Button>
        <Button variant="pur_border">
          <EnvelopeSimple size={20} />
        </Button>
        <Button variant="pur_border">
          <BellRinging size={20} />
        </Button>
        <ThemeToggle />
        <NavLink to="/settings" className="flex items-center space-x-2">
          <img
            src="https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg"
            alt="User"
            className="w-8 h-8 md:h-9 md:w-9 rounded-lg"
          />
          <span className="lg:flex flex-col items-start font-medium text-base hidden">
            Modi Ji
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
