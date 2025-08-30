import React from 'react'
import ProfileSide from './ProfileSide'
import ProfileMain from './ProfileMain'
import { Outlet } from 'react-router'

const ProfileContainer = () => {
  return (
    <div className='flex'>
        <ProfileSide/>
        <Outlet/>
    </div>
  )
}

export default ProfileContainer