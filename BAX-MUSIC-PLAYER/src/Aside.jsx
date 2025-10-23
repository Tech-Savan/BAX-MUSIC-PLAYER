import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router";
import { _DB } from "../Backend/Firebase";
import { UserContext } from "./Context/Authcontext";

const Aside = () => {
  const userDetails = useContext(UserContext) || "";
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (userDetails.uid) {
      const userDoc = doc(_DB, "users", userDetails.uid);
      const unsubscribe = onSnapshot(userDoc, (userinfo) => {
        const datass = userinfo._document.data.value.mapValue.fields;
        setUserData(datass);
        console.log(userData);
      });
      return () => unsubscribe();
    } else {
      console.log(null);
    }
  }, [userDetails.uid]);
  return (
    <div
      id="side"
      className="z-10 w-[50%] lg:w-[30%] h-[100vh] bg-[#101530] absolute transform -translate-x-full  transition-transform duration-500 ease-in-out"
    >
      <div
        onClick={() => {
          document.getElementById("side").classList.remove("translate-x-0");
          document.getElementById("side").classList.add("-translate-x-full");
        }}
        className="p-6 text-white"
      >
        {" "}
        <IoMdClose size={34} />
      </div>
      <div className="pt-0">
        <ul className="bold flex flex-col gap-0 text-white ">
          <NavLink
            to="/"
            onClick={() => {
              document.getElementById("side").classList.remove("translate-x-0");
              document
                .getElementById("side")
                .classList.add("-translate-x-full");
            }}
          >
            {" "}
            <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">
              Home
            </li>
          </NavLink>
          <NavLink>
            {" "}
            <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">
              Trending
            </li>
          </NavLink>
          <NavLink>
            {" "}
            <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">
              playlist
            </li>
          </NavLink>
          <NavLink>
            {" "}
            <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">
              library
            </li>
          </NavLink>
          {userData?.usertype?.stringValue === "admin" && (
            <>
              <NavLink
                to="/addsong"
                onClick={() => {
                  document
                    .getElementById("side")
                    .classList.remove("translate-x-0");
                  document
                    .getElementById("side")
                    .classList.add("-translate-x-full");
                }}
              >
                <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">
                  Add Song
                </li>
              </NavLink>
              <NavLink>
                <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">
                  Remove Song
                </li>
              </NavLink>
              <NavLink>
                <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">
                  Edit Song
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Aside;
