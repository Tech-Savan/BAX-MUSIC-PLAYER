import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/Authcontext";
import { doc, onSnapshot } from "firebase/firestore";
import { _DB } from "../../../Backend/Firebase";

const ViewProfile = () => {
  const userDetails = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [genre, setGenre] = useState([]);
  const [md, setMd] = useState([]);

  useEffect(() => {
    const userDoc = doc(_DB, "users", userDetails.uid);
    const unsubscribe = onSnapshot(userDoc, (userinfo) => {
      const data = userinfo._document.data.value.mapValue.fields;
      setUserData(data);
      setGenre(
        data?.music_genre?.arrayValue?.values?.map((i) => i.stringValue) || []
      );
      setMd(
        data?.music_directors?.arrayValue?.values?.map((i) => i.stringValue) ||
          []
      );
    });

    return () => unsubscribe();
  }, [userDetails.uid]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-800">
      <div className="bg-gray-900 w-full lg:w-[25%] lg:min-h-screen flex flex-col items-center py-10 gap-6 text-white shadow-lg">
        <img
          src={userDetails.photoURL}
          alt="Profile"
          className="rounded-full h-40 w-40 border-4 border-purple-600 shadow-lg"
        />
        <div className="text-center">
          <p className="font-semibold text-2xl text-purple-400">
            {userDetails.displayName}
          </p>
          <p className="font-medium text-gray-300 break-words">
            {userDetails.email}
          </p>
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-10">
        <header className="text-3xl text-center text-purple-400 mb-8 font-bold">
          My Details
        </header>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-700 w-64 h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Name</p>
            <p className="text-lg text-center">
              {userData?.firstname?.stringValue}{" "}
              {userData?.lastname?.stringValue}
            </p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">E-mail</p>
            <p className="text-lg text-center">{userDetails?.email}</p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Date of Birth</p>
            <p className="text-lg text-center">
              {userData?.dob?.stringValue?.split("-").reverse().join("-")}
            </p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Age</p>
            <p className="text-lg text-center">{userData?.age?.stringValue}</p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Gender</p>
            <p className="text-lg text-center">
              {userData?.gender?.stringValue}
            </p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Phone No</p>
            <p className="text-lg text-center">
              {userData?.phoneno?.stringValue}
            </p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Language</p>
            <p className="text-lg text-center">
              {userData?.language?.stringValue}
            </p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Favourite Genre</p>
            <p className="text-lg text-center">{genre.join(", ") || "-"}</p>
          </div>

          <div className="bg-gray-700 w-64 min-h-40 flex flex-col justify-center items-center px-6 py-4 rounded-xl shadow hover:shadow-lg transition text-gray-200">
            <p className="font-semibold mb-2">Favourite Music Directors</p>
            <p className="text-lg text-center">{md.join(", ") || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
