import React from "react";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <>
      <ul className="flex gap-2">
        <NavLink to="/login">
          <li className="bg-blue-500 px-5 py-3 rounded-md">Login</li>
        </NavLink>
        <NavLink to="/register">
          <li className="bg-red-500 px-5 py-3 rounded-md">Register</li>
        </NavLink>
      </ul>
    </>
  );
};

export default Menu;
