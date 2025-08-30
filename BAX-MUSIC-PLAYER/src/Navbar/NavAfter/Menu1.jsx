import React, { useContext } from "react";
import { _Auth } from "../../../Backend/Firebase";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router";

const Menu1 = () => {
  async function logout() {
   try{
     await signOut(_Auth);
   }catch(e){
    console.log(e)
   }
  }
  return (
    <>
      <div className="flex gap-2 items-center">
        <NavLink to="/profile">
        <img
          className="h-13 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
        </NavLink>
        <button
          className="border-0 h-8 px-4 py-1 bg-red-500 rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  );
};
export default Menu1;
