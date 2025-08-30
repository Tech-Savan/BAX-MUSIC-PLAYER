import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { _Auth } from "../../Backend/Firebase";
export let UserContext = createContext();
const Authcontext = ({ children }) => {
  let [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const unsubscribe  = onAuthStateChanged(_Auth, (userInfo) => {
      if (userInfo?.emailVerified) {
        setUserDetails(userInfo);
      } else setUserDetails(null);
    });
    return ()=>unsubscribe ();
  },[]);
  return (
    <UserContext.Provider value={userDetails }>
      {children}
    </UserContext.Provider>
  );
};

export default Authcontext;
