import  {  useState } from "react";
import {  NavLink } from "react-router";
import toast from 'react-hot-toast';
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
        toast.success("Login Successfully")
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
    <>
      <div className="flex">
        <section className="flex justify-center pt-15 h-[89vh] w-full  bg-gray-100">
          <form
            className=" flex flex-col gap-5 w-[80%]"
            onSubmit={handleSubmit}
          >
            <header className="text-2xl  text-center">Logo</header>
            <main className="flex flex-col gap-3 p-5 bg-white border-0  rounded-md shadow-2xl">
              <div>
                <ul className="flex justify-between">
                  <li>Login</li>
                  <NavLink to="/register">
                    {" "}
                    <li className="text-blue-700 bg-purp hover:text-blue-900">
                      Sign In
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="flex flex-col">
                <label htmlFor="useremail">Email-ID:</label>
                <input
                  id="useremail"
                  type="email"
                  placeholder="Enter Your Email ID"
                  className="border-1 rounded-md h-9 p-2"
                  value={useremail}
                  onChange={handleInput}
                />
              </div>
              <div className="flex flex-col relative">
                <label htmlFor="userpassword">Password:</label>
                <input
                  id="userpassword"
                  type={eye ? "password" : "text"}
                  value={userpassword}
                  onChange={handleInput}
                  placeholder="Enter Your Password"
                  className="border-1 rounded-md h-9 p-2 "
                />
                <span
                  className="absolute right-1 bottom-3 "
                  onClick={handleEye}
                >
                  {eye ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <input
                type="submit"
                value="Login"
                className="border-1 rounded-md bg-blue-600 h-10 "
              />
              <NavLink className="text-center text-blue-700 ">
                Forgot Password!
              </NavLink>
            </main>
          </form>
        </section>
        <section className=" w-full bg-red-500 hidden lg:block"></section>
      </div>
    </>
  );
};

export default Login;
