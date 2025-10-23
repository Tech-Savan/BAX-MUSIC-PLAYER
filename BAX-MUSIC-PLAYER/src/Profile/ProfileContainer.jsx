import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { UserContext } from "../Context/Authcontext";
import toast from "react-hot-toast";

const ProfileContainer = () => {
  let userDetails = useContext(UserContext);
  console.log(userDetails);
  function authuser() {
    return (
      <div className="flex">
        <Outlet />
      </div>
    );
  }
  return <>{userDetails && authuser()}</>;
};

export default ProfileContainer;
