import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Login from "../Navbar/NavBefore/Login";
import Register from "../Navbar/NavBefore/Register";
import MainPage from "../Main/MainPage";
import ProfileContainer from "../Profile/ProfileContainer";
import ProfileEditor from "../Profile/profilesider/ProfileEditor";
import ReserPassword from "../Profile/profilesider/ReserPassword";
import Addprofile from "../Profile/profilesider/Addprofile";
import ViewProfile from "../Profile/profilesider/ViewProfile";
import AddSong from "../Main/AddSong";
export let myMap = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/addsong",
        element: <AddSong />,
      },
      {
        path: "/profile",
        element: <ProfileContainer />,
        children: [
          {
            path: "/profile/addprofile",
            element: <Addprofile />,
          },
          {
            path: "/profile/viewprofile",
            element: <ViewProfile />,
          },
          {
            path: "/profile/editprofile",
            element: <ProfileEditor />,
          },
          {
            path: "/profile/password_reset",
            element: <ReserPassword />,
          },
        ],
      },
    ],
  },
]);
