import { BellRinging, EnvelopeSimple } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-primary text-primary_gray py-5 px-5 flex justify-between items-center gap-3">
      <div className=" flex gap-3">
        <EnvelopeSimple size={24} />
        <BellRinging size={24} />
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
