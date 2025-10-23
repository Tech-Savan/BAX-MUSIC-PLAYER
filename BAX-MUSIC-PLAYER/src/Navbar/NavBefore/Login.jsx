import { useState } from "react";
import { NavLink } from "react-router";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { _Auth } from "../../../Backend/Firebase";
const Login = () => {
  let [eye, setEye] = useState(true);

  let [data, setData] = useState({
    useremail: "",
    userpassword: "",
  });
  let { useremail, userpassword } = data;
  function handleInput(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let userData = await signInWithEmailAndPassword(
        _Auth,
        useremail,
        userpassword
      );
      if (userData.user.emailVerified) {
        toast.success("Login Successfully");
        window.location.assign("/");
      } else {
        toast.error("Email is not verified");
      }
    } catch (error) {
      toast.error(error.code);
    }
  }
  function handleEye() {
    setEye(!eye);
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
            <label htmlFor="useremail" className="text-gray-300 font-medium">Email-ID:</label>
            <input
              id="useremail"
              type="email"
              placeholder="Enter Your Email ID"
              value={useremail}
              onChange={handleInput}
              className="border border-[#334155] rounded-lg h-11 p-3 bg-[#0f172a] text-gray-200 
                focus:outline-none focus:ring-2 focus:ring-teal-400
                transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
            />
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="userpassword" className="text-gray-300 font-medium">Password:</label>
            <input
              id="userpassword"
              type={eye ? "password" : "text"}
              value={userpassword}
              onChange={handleInput}
              placeholder="Enter Your Password"
              className="border border-[#334155] rounded-lg h-11 p-3 bg-[#0f172a] text-gray-200 
                focus:outline-none focus:ring-2 focus:ring-teal-400
                transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
            />
            <span
              className="absolute right-3 bottom-3 text-gray-400 cursor-pointer hover:text-teal-400 transition-colors duration-300"
              onClick={handleEye}
            >
              {eye ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <input
            type="submit"
            value="Login"
            className="rounded-lg bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500
              text-white font-semibold h-11 shadow-lg cursor-pointer transition-all duration-300
              hover:scale-105 hover:shadow-teal-500/40"
          />

          <NavLink className="text-center text-teal-400 hover:text-teal-300 transition-colors duration-300">
            Forgot Password?
          </NavLink>
        </main>
      </form>
    </section>

    <section
      className="w-full hidden lg:block bg-no-repeat bg-cover bg-center rounded-l-xl"
      style={{ 
        backgroundImage: "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJ1Y3huZnZlNWJqaWE2dGhsa3JzNnk5MTR2bDRna3Nxc3J2eHBvOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Sl7OlpTiHi9pPPZKp4/giphy.webp)" 
      }}
    ></section>
  </div>
);



};

export default Login;
