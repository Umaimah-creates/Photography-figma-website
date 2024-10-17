import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { TiSocialTwitterCircular } from "react-icons/ti";


const Navbar = () => {
  return (
    <div className=' border-b border-gray-400 h-[5em] pt-3 grid grid-cols-3 gap-4 grid-rows-5 row-span-2'>
        <div><a href='#about' className='text-2xl pl-3'>About</a>
        <a href='#portfolio' className='text-2xl pl-5 pt-8 '>Portfolio</a>
        <a href='#testimonials' className='text-2xl pl-5 pt-8'>Testimonials</a>
        <a href='#contact' className='text-2xl pl-5 pt-8 mt-8'>Contact</a>
        </div>


        <div><h1 className='text-center text-2xl'>Oliver Bennet</h1>
        <p className='text-center'>Street Photographer</p>
        </div>
        <div className='text-3xl flex justify-end pt-4'><CiFacebook/><FiInstagram/><TiSocialTwitterCircular/></div>
        </div>
   
  )
}

export default Navbar

