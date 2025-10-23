import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { _Auth } from "../../../Backend/Firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
const Register = () => {
  let navigator = useNavigate();
  let [eye1, setEye1] = useState(false);
  let [eye2, setEye2] = useState(false);
  let [data, setData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userconfirmpassword: "",
  });
  let { username, useremail, userpassword, userconfirmpassword } = data;
  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (userpassword === userconfirmpassword) {
        let userData = await createUserWithEmailAndPassword(
          _Auth,
          useremail,
          userpassword
        );
        await sendEmailVerification(userData.user);
        toast.success(
          <div>
            <strong>Registered Successfully!</strong>
            <p>Please verify from mail(Check spam also)</p>
          </div>
        );
        await updateProfile(userData.user, {
          displayName: data.username,
          photoURL:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        });
        navigator("/login");
      } else {
        toast.error("password not matched");
      }
    } catch (error) {
      toast.error(error.code.replace("auth/", ""));
    }
  }
return (
  <div className="flex">
    <section className="flex justify-center pt-15 h-[89vh] w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <form className="flex flex-col gap-6 w-[80%]" onSubmit={handleSubmit}>
        <header className="text-4xl text-center text-white font-extrabold tracking-wide">
          LOGO
        </header>

        <main className="flex flex-col gap-5 p-6 rounded-2xl shadow-xl
          bg-gradient-to-br from-[#1e293b] via-[#273548] to-[#1e293b] relative overflow-hidden border border-[#334155]">

          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-300 font-medium">Username:</label>
            <input
              id="username"
              type="text"
              placeholder="Enter Your Username"
              value={username}
              onChange={handleChange}
              className="border border-[#334155] rounded-lg h-11 p-3 bg-[#0f172a] text-gray-200
                focus:outline-none focus:ring-2 focus:ring-teal-400
                transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="useremail" className="text-gray-300 font-medium">Email-ID:</label>
            <input
              id="useremail"
              type="email"
              placeholder="Enter Your Email ID"
              value={useremail}
              onChange={handleChange}
              className="border border-[#334155] rounded-lg h-11 p-3 bg-[#0f172a] text-gray-200
                focus:outline-none focus:ring-2 focus:ring-teal-400
                transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
            />
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="userpassword" className="text-gray-300 font-medium">Password:</label>
            <input
              id="userpassword"
              type={eye1 ? "text" : "password"}
              value={userpassword}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="border border-[#334155] rounded-lg h-11 p-3 bg-[#0f172a] text-gray-200
                focus:outline-none focus:ring-2 focus:ring-teal-400
                transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
            />
            <span
              className="absolute right-3 bottom-3 text-gray-400 cursor-pointer hover:text-teal-400 transition-colors duration-300"
              onClick={() => setEye1(!eye1)}
            >
              {eye1 ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="userconfirmpassword" className="text-gray-300 font-medium">Confirm Password:</label>
            <input
              id="userconfirmpassword"
              type={eye2 ? "text" : "password"}
              value={userconfirmpassword}
              onChange={handleChange}
              placeholder="Re-enter Your Password"
              className="border border-[#334155] rounded-lg h-11 p-3 bg-[#0f172a] text-gray-200
                focus:outline-none focus:ring-2 focus:ring-teal-400
                transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
            />
            <span
              className="absolute right-3 bottom-3 text-gray-400 cursor-pointer hover:text-teal-400 transition-colors duration-300"
              onClick={() => setEye2(!eye2)}
            >
              {eye2 ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <input
            type="submit"
            value="Register"
            className="rounded-lg bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500
              text-white font-semibold h-11 shadow-lg cursor-pointer transition-all duration-300
              hover:scale-105 hover:shadow-teal-500/40"
          />

          <div className="text-center text-gray-300">
            Already registered?{" "}
            <NavLink to="/login" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
              Login
            </NavLink>
          </div>
        </main>
      </form>
    </section>

    <section
      className="w-full hidden lg:block bg-no-repeat bg-cover bg-center rounded-l-xl"
      style={{
        backgroundImage:
          "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJ1Y3huZnZlNWJqaWE2dGhsa3JzNnk5MTR2bDRna3Nxc3J2eHBvOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Sl7OlpTiHi9pPPZKp4/giphy.webp)"
      }}
    ></section>
  </div>
);

};

export default Register;
