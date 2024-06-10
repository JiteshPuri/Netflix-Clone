
import React from 'react'
import Burger from './Burger'



const Navbar = () => {
  
  return (
    <>
    <Burger/>
    <nav>
    <div className='flex items-center justify-between p-4  z-10 relative w-full '>
      
        <h1 className=' flex text-red-600 text-4xl ml-11 cursor-pointer '>NETFLIX</h1>
        <div>
          
        <button className='text-white pr-4'>Sign In</button>
        <button className=' text-white  px-6 py-3  rounded bg-red-600 '>Sign Up</button>
        </div>
        <img
          src="/public/Rock.png"
          alt="image 1"
          />
    </div>
    </nav>
    </>
  )
}

export default Navbar