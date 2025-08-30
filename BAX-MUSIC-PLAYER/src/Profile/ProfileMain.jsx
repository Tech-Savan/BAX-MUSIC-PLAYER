import React, { useContext } from "react";
import { UserContext } from "../Context/Authcontext";
import { doc } from "firebase/firestore";
import { _DB } from "../../Backend/Firebase";

const ProfileMain = () => {
  let authuser = useContext(UserContext);
  if (authuser?.uid) {
    let userDataCOllections = doc(_DB, "user_Details", authuser.uid);
    console.log(authuser);
  }
  return (
    <div className=" h-full w-full">
      <header className="bg-blue-400   w-full flex flex-col items-center">
        <img src={authuser?.photoURL} className="h-30 rounded-full mt-5" />
        <p>{authuser?.displayName}</p>
        <p>{authuser?.email}</p>
      </header>
      <main className="bg-green-500 h-135 w-full p-8 ">
        <div className="flex flex-wrap gap-10">
          <div className="border-1 p-2 px-5 rounded-md flex flex-col text-center">
            <span className="font-bold">Username</span>
            <span className="font-semibold">{authuser?.displayName}</span>
          </div>
            <div className="border-1 p-2 px-5 rounded-md flex flex-col text-center">
              <span className="font-bold">E-mail</span>
              <span className="font-semibold">{authuser?.email}</span>
            </div>
            <div className="border-1 p-2 px-5 rounded-md flex flex-col text-center">
              <span className="font-bold">DOB</span>
              <span className="font-semibold"></span>
            </div>
            <div className="border-1 p-2 px-5 rounded-md flex flex-col text-center">
              <span className="font-bold">Age</span>
              <span className="font-semibold"></span>
            </div>
            <div className="border-1 p-2 px-5 rounded-md flex flex-col text-center">
              <span className="font-bold">Language</span>
              <span className="font-semibold"></span>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileMain;
