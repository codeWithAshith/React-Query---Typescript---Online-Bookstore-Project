import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex items-center justify-between p-4">
        <NavLink
          className="self-center text-2xl font-semibold whitespace-nowrap"
          to="/"
        >
          BookStore
        </NavLink>

        <ul className="font-medium flex rounded-lg gap-4">
          <li>
            <NavLink className="p-2 text-white bg-blue-700 rounded" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2 text-gray-900 rounded hover:bg-gray-100"
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2 text-gray-900 rounded hover:bg-gray-100"
              to="/login"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
