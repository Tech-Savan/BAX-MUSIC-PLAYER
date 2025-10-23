import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import Aside from "./Aside";
import { UserContext } from "./Context/Authcontext";
const Layout = () => {
  function siderbaropen() {
    document.getElementById("side").classList.remove("-translate-x-full");
    document.getElementById("side").classList.add("translate-x-0");
  }
  const userDetails = useContext(UserContext);
  return (
    <div className="flex">
      <span onClick={siderbaropen} className="absolute top-6 left-5 text-white">
        <FaBars size={34} />
      </span>
      <Aside id="side" />
      <div className="flex-1">
        <Toaster />
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
