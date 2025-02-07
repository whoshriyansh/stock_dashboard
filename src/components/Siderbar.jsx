import {
  BookmarkSimple,
  ChartBar,
  Diamond,
  EnvelopeSimple,
  SquaresFour,
  User,
  UsersThree,
} from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Siderbar = () => {
  return (
    <nav className="w-60 bg-primary h-full p-4">
      <div className="flex items-center justify-start text-2xl font-semibold gap-2 mb-6">
        <span>
          <Diamond size={32} weight="bold" className="text-orange-500" />
        </span>
        Stockin
      </div>
      <ul className="space-y-4">
        <li>
          <NavLink
            className="flex items-center justify-start gap-1 p-2 hover:bg-secondary/10 hover:rounded-md  font-medium"
            to="/"
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: "#000", border: 2, borderRadius: 5 }
                : {};
            }}
          >
            <span>
              <SquaresFour size={24} color="#4D4D4D" />
            </span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center justify-start gap-1 p-2 hover:bg-secondary/10 hover:rounded-md  font-medium"
            to="/stock"
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: "#000", border: 2, borderRadius: 5 }
                : {};
            }}
          >
            <span>
              <ChartBar size={24} color="#4D4D4D" />
            </span>
            Stocks List
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center justify-start gap-1 p-2 hover:bg-secondary/10 hover:rounded-md  font-medium"
            to="/settings"
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: "#000", border: 2, borderRadius: 5 }
                : {};
            }}
          >
            <span>
              <BookmarkSimple size={24} color="#4D4D4D" />
            </span>
            Market Movers
          </NavLink>
        </li>
      </ul>
      {/* SECOND MENU  */}
      <div className="mb-3 mt-5">
        <p className="text-primary_gray font-normal">My Account</p>
      </div>
      <ul className="space-y-4">
        <li>
          <NavLink
            className="flex items-center justify-start gap-1 p-2 hover:bg-secondary/10 hover:rounded-md  font-medium"
            to="/"
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: "#000", border: 2, borderRadius: 5 }
                : {};
            }}
          >
            <span>
              <UsersThree size={24} color="#4D4D4D" />
            </span>
            My Linkedin
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center justify-start gap-1 p-2 hover:bg-secondary/10 hover:rounded-md  font-medium"
            to="/stock"
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: "#000", border: 2, borderRadius: 5 }
                : {};
            }}
          >
            <span>
              <User size={24} color="#4D4D4D" />
            </span>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center justify-start gap-1 p-2 hover:bg-secondary/10 hover:rounded-md  font-medium"
            to="/settings"
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: "#000", border: 2, borderRadius: 5 }
                : {};
            }}
          >
            <span>
              <EnvelopeSimple size={24} color="#4D4D4D" />
            </span>
            Contact Us
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className="flex items-center justify-start gap-1 p-2 hover:bg-secondary/10 hover:rounded-md  font-medium"
            to="/settings"
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: "#000", border: 2, borderRadius: 5 }
                : {};
            }}
          >
            <span>
              <SignOut size={24} color="#4D4D4D" />
            </span>
            Logout
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Siderbar;
