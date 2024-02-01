import React from 'react'
import { ReactTyped } from "react-typed";
import Laptop from '../assets/Laptop1.png'

const Hero = () => {
  return (
    <div className='text-white md:flex space-x-10 mx-8'>
        <div className='w-[600px] md:max-w-[800px] md:mt-[-96px] h-[500px] mt-10 md:h-screen flex flex-col justify-center gap-0 sm:ml-auto md:ml-40 ml-auto'>
            <div className='flex text-2xl md:text-3xl font-bold space-x-2'>
              <h1 className='font-bold'>An Intellectual </h1><h1 className='text-[#ff8730]'>Imagination</h1>
            </div>
            
            <div className='flex items-center'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>A trustworthy store to buy </p>
                <ReactTyped  className='md:text-3xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
                strings={['Laptop', 'Phone', 'Tablet']} typeSpeed={120} backSpeed={140} loop 
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 max-w-[300px] md:max-w-[600px]'>Time to turn on the latest consumer electronics in your life.</p>
            <button className='bg-[#ff8730] w-[200px] rounded-full font-bold my-6 py-3 text-black'>Shop Now</button>
        </div>
        <div>
          <img src={Laptop} alt="/" className='w-[900px] md:mt-[120px] justify-center'></img>
        </div>
    </div>
  )
}

export default Hero