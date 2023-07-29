import React from "react";
import NavbarComponent from "./Navbar.component";
import { Outlet } from "react-router";

const LayoutComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
