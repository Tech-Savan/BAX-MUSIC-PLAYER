import React from 'react'
import { NavLink } from 'react-router'

const ProfileSide = () => {
  return (
    <div className='w-[30%] bg-blue-950 text-white h-[calc(100vh-80px)]'>
        <ul className='flex flex-col gap-0'>
            <NavLink to="/profile">                 <li className="border-0 p-3 rounded-md pl-[15%]   hover:bg-[#595656]/40">Profile</li></NavLink>
            <NavLink to="/profile/editprofile">     <li className="border-0 p-3 rounded-md pl-[15%] hover:bg-[#595656]/40">Edit Profile</li></NavLink>
            <NavLink to="/profile/password_reset">  <li className="border-0 p-3 rounded-md pl-[15%] hover:bg-[#595656]/40">Reset Password</li></NavLink>
        </ul>
    </div>
  )
}

export default ProfileSide