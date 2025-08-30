import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Aside = () => {
  return (
    <div id="side" className='w-[50%] lg:w-[30%] h-[100vh] bg-blue-600 absolute transform -translate-x-full  transition-transform duration-500 ease-in-out'>
        <div onClick={()=>{
           document.getElementById("side").classList.remove("translate-x-0");
          document.getElementById("side").classList.add("-translate-x-full");
        }} className='p-6'> <IoMdClose size={34} /></div>
      <div className='pt-0'>
      <ul className='bold flex flex-col gap-0 text-white '>
        <li className="border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8">Profile</li>
        <li className='border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8'>Home</li>
        <li className='border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8'>Trending Hits</li>
        <li className='border-0 rounded-md p-2 mx-1 hover:bg-white/30 pl-8'>Playlists</li>
        
      </ul>
      </div>
  
    </div>
  )
}
export default Aside