import React from 'react'
import Nav from "./Nav"
const Home= () => {
    
  return (
    <div className='h-screen bgland w-[100vw]'>
        <Nav></Nav>
        <div className='flex justify-center mt-[6rem] '>
            <div className='px-10 w-[60%]'>
            <h1 className='flex justify-center text-4xl'>Don't let nerves get the best of you – practice makes perfect!</h1>
            <div className='flex justify-center mt-20'><p className=''>Welcome to LeanPrep! The ultimate destination for honing your interview skills. Whether you're a fresh graduate, career changer, or seasoned professional, we've got you covered. Our comprehensive library of mock interview questions and expert tips will help you ace any job interview. </p></div>
            <div className='flex justify-center mt-20'><button className='w-[310px] h-[39px] mx-auto text-white rounded-lg bg-[#000AFF]'>Join Our Program</button></div>
            <div className='flex space-x-2 justify-center mt-5'>
                <p>Already a member? </p>
                <a href="#" className='underline'>Login</a>
            </div>
            </div>
            <div className=''></div>
        </div>
    </div>
  )
}

export default Home; 