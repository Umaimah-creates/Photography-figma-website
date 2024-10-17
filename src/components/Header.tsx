import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
        <div className='h-[800px]  '>
        <h1 className='text-black-500 bg-white-100 text-4xl text-center pt-12 font-bold font-sans '>Urban stories<br/>
        through the lens
               </h1>
               <p className='text-gray-800 text-sm text-center pt-3  '>Capturing the unseen rythms of the city</p>
               <div className='flex items-center justify-center pt-3'>
               <button  className='rounded-lg bg-yellow-300 text-black-400 item-center'> Discover my journey</button>
               </div>
               <div className='pt-3 flex items-center justify-center' >
                <img src='/Header.png ' alt='photograph' height={590} width={1000}/>
               </div>
              
              </div>
        
      
    </div>
  )
}

export default Header
