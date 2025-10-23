import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { _DB } from "../../Backend/Firebase";
import { UserContext } from "../Context/Authcontext";
import { NavLink } from "react-router";

const MainPage = () => {
  
    const userDetails = useContext(UserContext) || "";
    const [userData, setUserData] = useState(null);
    const [showCard, setShowCard] = useState(true);
  

  useEffect(() => {
    if (userDetails?.uid) {
      const userDoc = doc(_DB, "users", userDetails.uid);
      const unsubscribe = onSnapshot(userDoc, (userinfo) => {
        setUserData(userinfo.data()); // ✅ safer way
      });
      return () => unsubscribe();
    } else {
      console.log("No user found");
    }
  }, [userDetails?.uid]);
  return (
    <>
      {showCard && !userData && userDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
            <button
              onClick={() => setShowCard(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
              aria-label="Close popup"
            >
              x
            </button>

            <p className="mb-4 text-gray-700">
              Only one step ahead{" "}
              <NavLink
                to="/profile/addprofile"
                className="text-blue-500 font-semibold hover:underline"
              >
                Add profile
              </NavLink>{" "}
              to enjoy Music World
            </p>
          </div>
        </div>
      )}

      <section>Main Page</section>
    </>
  );
};

export default MainPage;
