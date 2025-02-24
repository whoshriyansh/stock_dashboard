import {
  BookmarkSimple,
  Diamond,
  DiamondsFour,
  SquaresFour,
  UsersThree,
  ArrowCircleLeft,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    icon: <BookmarkSimple size={24} />,
    subMenu: [
      { name: "Default", to: "/" },
      { name: "Analytics", to: "/analytics" },
    ],
  },
  {
    name: "Components",
    icon: <DiamondsFour size={24} />,
    subMenu: [
      { name: "Modals", to: "/modals" },
      { name: "Input Fields", to: "/input-field" },
    ],
  },
  {
    name: "Account",
    icon: <UsersThree size={24} />,
    subMenu: [
      { name: "Login", to: "/login" },
      { name: "Register", to: "/register" },
      { name: "Reset Password", to: "/reset-password" },
    ],
  },
  {
    name: "Others",
    icon: <SquaresFour size={24} />,
    subMenu: [
      { name: "Support", to: "/support" },
      { name: "FAQ", to: "/faq" },
    ],
  },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const toggleSubMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <aside
      className={`bg-card h-screen p-4 fixed lg:relative w-60 transition-transform duration-300 z-10 
      ${isOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between text-2xl font-semibold mb-6 border-b-1 border-dashed border-primary-purple py-2">
        <div className="flex items-center gap-2 lg:hidden text-primary-purple">
          <Diamond size={32} weight="bold" />
          Stockin
        </div>
        <button onClick={closeSidebar} className="lg:hidden">
          <ArrowCircleLeft size={28} className="text-primary-purple" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name} className="relative">
            {/* Main Menu Item (Not a Link) */}
            <div
              className={`flex items-center justify-between p-3 rounded-lg transition cursor-pointer  
              ${
                openMenu === item.name
                  ? "bg-primary-purple text-primary-text font-bold"
                  : "hover:bg-[#8957FF]/30"
              }`}
              onClick={() => toggleSubMenu(item.name)}
            >
              <div className="flex items-center gap-2 text-primary-text">
                {item.icon}
                <span>{item.name}</span>
              </div>
              <span className="text-primary-text">
                {openMenu === item.name ? (
                  <CaretUp size={20} />
                ) : (
                  <CaretDown size={20} />
                )}
              </span>
            </div>

            {/* Submenu Items */}
            {item.subMenu && openMenu === item.name && (
              <ul className="ml-6 mt-1 space-y-2">
                {item.subMenu.map((sub) => (
                  <li key={sub.name}>
                    <NavLink
                      to={sub.to}
                      className={`flex items-center p-2 rounded-lg transition text-sm text-secondary-text
                      ${
                        activeItem === sub.name
                          ? "bg-[#8957FF]/80 font-semibold"
                          : "hover:bg-[#8957FF]/10"
                      }`}
                      onClick={() => {
                        setActiveItem(sub.name);
                        closeSidebar();
                      }}
                    >
                      {sub.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
