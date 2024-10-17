import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimonials' className='pb-12 pt-10'>
        <h1 className='text-2xl text-bold ml-4'>Testimonials</h1>
        <div className="flex flex-col md:flex-row space-x-4">
    <div className="bg-white shadow-md border border-gray-900 p-4 pl-4 w-full md:w-1/3">
        <p className="mt-2">"Oliver's unique eye for urban<br/>
        landscapes has brought our campaign<br/>
        to life. His ability to C apture the soul of <br/>
        the city is unparalleled."<br/>
        <br/>
        Emily Clark<br/>Marketing Director-Cityscape Magazine</p>
    </div >
    <div className="bg-white shadow-md border border-gray-900 p-4 w-full md:w-1/3">
        <p className="mt-2">"I hired Oliver for a personal <br/>
        photoshoot,and he exceeded all<br/>
        expectations.His work is not just<br/>
        photography;it's storytelling at it's<br/> finest".<br/><br/>
        Liam Thompson
        <br/>Entrepreneur</p>
    </div>
    <div className="bg-white shadow-md border border-gray-900 p-4 w-full md:w-1/3">
        
        <p className="mt-2">"Oliver's workshop opened my eyes to <br/> 
        the beauty of urban photography. His <br/>guidance and techniques were<br/> invaluable. A true master of his craft".
        <br/> <br/>
        Sarah Jenkins<br/>Aspiring Photographer</p>
    </div>
</div>

      
    </div>
  )
}

export default Testimonials
