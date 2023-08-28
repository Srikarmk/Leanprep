import React from 'react'
import camera from "../assets/VideoCamera.svg"
const Nav = () => {
  return (
    <div className='flex items-center p-8 px-10'>
        <div>
            <h1 className='text-4xl font-bold w-[927px]'>Lean<span className='text-[#000AFF]'>Prep</span></h1>
        </div>
        <ul className='flex items-center justify-between w-[100%] text-2xl font-semibold'>
            <li>About US</li>
            <li>Pricing</li>
            <li><button className='flex border-2 text-[#000AFF] rounded-lg border-[#000AFF] items-center text-2xl px-5 justify-'>Demo<span className='ml-2'><img src={camera} alt="" /></span></button></li>
        </ul>
    </div>
  )
}

export default Nav