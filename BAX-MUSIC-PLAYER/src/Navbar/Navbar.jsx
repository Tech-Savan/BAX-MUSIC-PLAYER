import { useContext } from "react";
import Menu from "./NavBefore/Menu";
import Menu1 from "./NavAfter/Menu1";
import { UserContext } from "../Context/Authcontext";
import { NavLink } from "react-router";

export const Navbar = () => {
  let userDetails = useContext(UserContext);

  return (
    <>
      <nav className="flex h-20 w-full border-b justify-between px-5 items-center bg-amber-400">
        <div className="flex gap-3 items-center">
          <NavLink to="/">
            <div className="ml-13">LOGO</div>
          </NavLink>
        </div>
        <div>{userDetails ? <Menu1 /> : <Menu />}</div>
      </nav>
    </>
  );
};
