import React from 'react'

const About = () => {
  return (
    <div id='about' className='pb-0'>
                <div>
                    <br/> <br/>
                <p className='pt-30 text-4xl pl-40' >Hello! I'm Oliver Bennet</p>
                <br/>
                </div>
                <div className=' grid grid-cols-2 grid-rows-3 gap-2 space-1'>
                    <p className='pl-40 text-2xl text-gray-900'>A connoisseur of cityscapes and a <br/>storyteller through the lens,based in the<br/>vibrant heart of London.
                    <br/>
                    <br/>
                    <br/>
                    <br/> With over a decade of experience,I have<br/>
                    been capturing the essence of urban life, <br/>
                    one frame at a time.
                    <br/>
                    <br/><br/>
                    </p>
                     <img className='flex justify-end pt-4 ' src='/About.png' alt='Photograph' height={400} width={500} />
                     
               </div>
      
    </div>
  )
}

export default About
