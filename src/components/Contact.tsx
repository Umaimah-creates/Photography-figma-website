

// components/ContactForm.js
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black grid grid-cols-3 gap-0 colspan-2 pb-4'>
        <div id='contact'>
            <h1 className='text-6xl text-yellow-500 text-center pt-12 '>"I'd love<p className='text-6xl text-white text-center pl-8 '>to hear <br/> from you."</p> <br/></h1>
            <p className='text-gray-600 text-sm text-center '> Whether you're interested in booking a<br/>
            photoshoot or just want to say hello, feel<br/> free to drop me a message. </p>
           
        </div>
        
        <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-md flex justify-end pr-20">
        <h2 className="mb-6 text-xl font-semibold text-center ">Contact Us</h2>
        <form>
          {/* Full Name Section */}
          <div className="mb-4">
            <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-700 bg-black-800">Full Name</label>
            <input type="text" id="full-name" className="block w-full px-4 py-2 border border-gray-300 rounded-t-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your name" />
          </div>
  
          {/* Email Address Section */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" className="block w-full px-4 py-2 border border-gray-300 rounded-t-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your email" />
          </div>
  
          {/* Phone Number Section */}
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" className="block w-full px-4 py-2 border border-gray-300 rounded-t-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your phone number" />
          </div>
  
          {/* Message Section */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" className="block w-full px-4 py-2 border border-gray-300 rounded-t-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Type your message here..."></textarea>
          </div>
  
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 text-black bg-yellow-500 rounded-lg hover:bg-white focus:outline-none focus:ring focus:ring-blue-200">Submit</button>
          </div>
        </form>
      </div>

      
    </div>
  )
}

export default Contact

  