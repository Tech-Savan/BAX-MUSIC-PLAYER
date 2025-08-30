import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
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
            
        )
        await updateProfile(userData.user,{
          displayName:data.username,
          photoURL:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        })
        navigator("/login");
      } else {
        toast.error("password not matched");
      }
    } catch (error) {
      toast.error(error.code.replace("auth/",""));
    }
  }
  return (
    <>
      <div className="flex justify-center w-[100vw] h-[calc(100vh-80px)]">
        <section className="w-[50%] h-[100%] hidden lg:block bg-red-500"></section>
        <section className="flex flex-col items-center w-full lg:w-[50%] p-8 ">
          <main>
            <form
              className="flex flex-col gap-3 pt-8 pl-8 pr-8 pb-6 bg-white shadow-2xl"
              onSubmit={handleSubmit}
            >
              <h1 className="text-3xl text-center text-pink-600 font-bold">
                Register
              </h1>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className="w-[280px] border-2 h-[35px] p-2"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="useremail">E-mail:</label>
                <input
                  type="email"
                  id="useremail"
                  className="w-[280px] border-2 h-[35px] p-2"
                  value={useremail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-0.5 relative">
                <label htmlFor="userpassword">Password:</label>
                <input
                  type={eye1 ? "text" : "password"}
                  id="userpassword"
                  className="w-[280px] border-2 h-[35px] p-2"
                  value={userpassword}
                  onChange={handleChange}
                  required
                />
                <span
                  onClick={() => setEye1(!eye1)}
                  className="absolute top-9 right-2"
                >
                  {eye1 ? (
                    <IoEyeSharp className="text-black" />
                  ) : (
                    <FaEyeSlash className="text-black" />
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 relative">
                <label htmlFor="userconfirmpassword">Re-Enter Password:</label>
                <input
                  type={eye2 ? "text" : "password"}
                  id="userconfirmpassword"
                  className="w-[280px] border-2 h-[35px] p-2"
                  value={userconfirmpassword}
                  onChange={handleChange}
                />
                <span
                  onClick={() => setEye2(!eye2)}
                  className="absolute top-9 right-2"
                >
                  {eye2 ? (
                    <IoEyeSharp className="text-black" />
                  ) : (
                    <FaEyeSlash className="text-black" />
                  )}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 w-[280px] h-[35px] text-white hover:cursor-pointer "
                >
                  Register
                </button>
              </div>
              <div className="flex justify-center gap-4">
                <h1>Already Registered? </h1>
                <NavLink to="/login" className="text-blue-600">
                  Login
                </NavLink>
              </div>
            </form>
          </main>
        </section>
      </div>
    </>
  );
};

export default Register;
