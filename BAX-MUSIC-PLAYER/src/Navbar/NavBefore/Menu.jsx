import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../../Context/Authcontext";
import { signOut, updateProfile } from "firebase/auth";
import { _Auth, _DB } from "../../../Backend/Firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Menu = () => {
  const userDetails = useContext(UserContext) || "";
  const [userData, setUserData] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (userDetails.uid) {
      const userDoc = doc(_DB, "users", userDetails.uid);
      const unsubscribe = onSnapshot(userDoc, (userinfo) => {
        const datass = userinfo._document.data.value.mapValue.fields;
        setUserData(datass);
      });
      return () => unsubscribe();
    } else {
      console.log(null);
    }
  }, [userDetails.uid]);

  async function logout() {
    try {
      await signOut(_Auth);
      window.location.assign("/login");
    } catch (e) {
      console.log(e);
    }
  }

  function anonymousUser() {
    return (
      <ul className="flex gap-2">
        <NavLink to="/login">
          <li
            className="bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500
            text-white px-5 py-3 rounded-md shadow-md 
            hover:scale-105 hover:shadow-teal-500/40 transition-all duration-300 cursor-pointer"
          >
            Login
          </li>
        </NavLink>
        <NavLink to="/register">
          <li
            className="bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500
            text-white px-5 py-3 rounded-md shadow-md 
            hover:scale-105 hover:shadow-teal-500/40 transition-all duration-300 cursor-pointer"
          >
            Register
          </li>
        </NavLink>
      </ul>
    );
  }

  function authUser() {
    return (
      <div className="flex flex-col items-center relative">
        <img
          className="h-12 w-12 lg:h-14 rounded-full cursor-pointer border-2 border-teal-400 shadow-md hover:shadow-teal-500/40 transition duration-300"
          onClick={() => setOpen(!open)}
          src={userDetails.photoURL}
          alt="user profile"
        />
        <div
          className={`absolute top-14 w-44 bg-gradient-to-b from-[#1e293b] via-[#273548] to-[#1e293b]
            text-gray-200 rounded-md overflow-hidden shadow-xl transition-all duration-300 ease-in-out
            ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {userData ? (
            <ul className="flex flex-col">
              <NavLink to="/profile/viewprofile">
                <li
                  className="px-5 py-2 hover:bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600
                  cursor-pointer rounded-md text-white transition-all duration-300"
                  onClick={() => setOpen(!open)}
                >
                  View Profile
                </li>
              </NavLink>
              <NavLink to="/profile/editprofile">
                <li
                  className="px-5 py-2 hover:bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600
                  cursor-pointer rounded-md text-white transition-all duration-300"
                  onClick={() => setOpen(!open)}
                >
                  Edit Profile
                </li>
              </NavLink>
              {userDetails.photoURL !=
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" && (
                <li
                  className="px-5 py-2 hover:bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600
                  cursor-pointer rounded-md text-white transition-all duration-300"
                  onClick={async () => {
                    setOpen(!open);
                    await updateProfile(userDetails, {
                      photoURL:
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                    });
                    console.log(userDetails);
                  }}
                >
                  Remove photo
                </li>
              )}
              <hr className="border-gray-600 my-1" />
              <li
                className="px-5 py-2 hover:bg-gradient-to-r from-red-600 via-red-500 to-red-600
                cursor-pointer rounded-md text-red-400 transition-all duration-300 hover:text-white"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col">
              <NavLink to="/profile/addprofile">
                <li
                  className="px-5 py-2 hover:bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600
                  cursor-pointer rounded-md text-white transition-all duration-300"
                  onClick={() => setOpen(!open)}
                >
                  Add Profile
                </li>
              </NavLink>

              <hr className="border-gray-600 my-1" />
              <li
                className="px-5 py-2 hover:bg-gradient-to-r from-red-600 via-red-500 to-red-600
                cursor-pointer rounded-md text-red-400 transition-all duration-300 hover:text-white"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }

  return <>{userDetails ? authUser() : anonymousUser()}</>;
};

export default Menu;
