import {
  BookmarkSimple,
  ChartBar,
  Diamond,
  EnvelopeSimple,
  SquaresFour,
  User,
  UsersThree,
  X,
} from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    to: "/",
    icon: <BookmarkSimple size={24} color="#4D4D4D" />,
  },
  {
    name: "Orders",
    to: "#",
    icon: <EnvelopeSimple size={24} color="#4D4D4D" />,
  },
  {
    name: "Customers",
    to: "#",
    icon: <UsersThree size={24} color="#4D4D4D" />,
  },
  {
    name: "Invoice",
    to: "#",
    icon: <SquaresFour size={24} color="#4D4D4D" />,
  },
  {
    name: "Settings",
    to: "#",
    icon: <User size={24} color="#4D4D4D" />,
  },
  {
    name: "Charts",
    to: "#",
    icon: <ChartBar size={24} color="#4D4D4D" />,
  },
];

const Siderbar = ({ isOpen, closeSidebar }) => {
  return (
    <aside
      className={`bg-base-200 text-base-content h-screen p-4 fixed lg:relative w-60 transition-transform duration-300 z-50 
      ${isOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between text-2xl font-semibold mb-6">
        <div className="flex items-center gap-2">
          <Diamond size={32} weight="bold" className="text-primary" />
          Stockin
        </div>
        <button onClick={closeSidebar} className="lg:hidden">
          <X size={24} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              className="flex items-center justify-start gap-1 p-2 rounded-lg transition hover:bg-primary hover:text-white"
              to={item.to}
              onClick={closeSidebar}
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: "hsl(var(--p))",
                      color: {},
                      borderRadius: 5,
                    }
                  : {}
              }
            >
              <span>{item.icon}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Siderbar;
