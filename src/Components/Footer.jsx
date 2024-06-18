import React from 'react'
import logo from "../assets/images/logo.png"

const Footer = () => {
    
  return (
    <div className='mt-4'>
        <div className='flex justify-center items-center'>
            <hr className='h-px w-[90%] bg-gray-400 opacity-50 outline-none border-none'/>

        </div>
        <div className='flex justify-between items-center pt-4 px-2 mx-20'>
            <div>
                <img  className="h-20" src={logo} alt="logo"/>
            </div>
            <div>
                <p className='text-sm'>&copy; 2024 Page by Nithin Web Dev. All rights reserved.</p>
            </div>

        </div>

    </div>
  )
}

export default Footer