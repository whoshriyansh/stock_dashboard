import { BellRinging, EnvelopeSimple, List } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../context/ThemeToggle";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-base-100 text-base-content py-4 px-6 shadow-md flex justify-between lg:justify-end items-center">
      {/* Hamburger icon for mobile */}
      <button onClick={toggleSidebar} className="lg:hidden">
        <List size={24} />
      </button>

      <div className="flex items-center gap-3">
        <EnvelopeSimple size={24} />
        <BellRinging size={24} />
        <ThemeToggle />
        <NavLink to="/settings" className="flex items-center space-x-2">
          <img
            src="https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="flex flex-col items-start font-medium text-base">
            Modi Ji
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
