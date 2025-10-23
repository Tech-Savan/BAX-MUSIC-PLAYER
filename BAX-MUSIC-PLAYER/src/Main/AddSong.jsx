import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { _DB } from "../../Backend/Firebase";
import { UserContext } from "../Context/Authcontext";

const AddSong = () => {
  return (
    <>
      <section className="bg-gray-500 h-[calc(100vh-80px)] w-full flex flex-col items-center pt-10">
        <h1 className="text-2xl text-teal-300 font-extrabold">Add Song</h1>
        <form>
          <label htmlFor="songName">Enter you song name: </label>
          <input
            type="text"
            id="songName"
            className="w-[100px] border-amber-50 border-2"
          />
        </form>
      </section>
    </>
  );
};

export default AddSong;
