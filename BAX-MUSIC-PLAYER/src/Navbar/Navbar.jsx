import Menu from "./NavBefore/Menu";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav
      className="flex h-20 w-full justify-between px-6 items-center
      bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]
      shadow-lg border-b border-[#334155] transition-all duration-500"
    >
      <div className="flex items-center gap-4">
        <NavLink to="/">
          <div
            className="text-2xl ml-10 font-extrabold bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400
            bg-clip-text text-transparent
            hover:scale-105 hover:from-teal-300 hover:to-teal-200
            transition-all duration-300 cursor-pointer"
          >
            LOGO
          </div>
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        <Menu />
      </div>
    </nav>
  );
};
