import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <div className='flex flex-col group shadow-lg w-[300px] h-[400px] bg-black overflow-hidden md:m-10 mx-auto my-10 border-b-2 border-[#ff8730] md:border-none rounded-xl'>
        <div className='w-full h-[70%] inset-0 bg-cover bg-center'>
          <img src={props.backgroundImage}/>
        </div>
        <div className='bg-black w-full h-[30%] px-3 py-2 font-regular'>
          <div className='flex gap-10 w-full h-[50%]'>
            <div className='w-[70%]'>
              <h2 className='text-md font-semibold text-white'>{props.title}</h2>
              <h3 className='text-white/50'>Color: {props.color}</h3>
            </div>
            <div className='w-[30%]'>
              <h1 className='text-xl font-bold text-white text-center'>{props.price}</h1>
            </div>
          </div>
          <div className='flex w-full gap-8 h-[50%]'>
            <div className='w-[80%]'>
              <p className='text-sm text-[#ff8730]'>{props.content}</p>
            </div>
            <div className='w-[20%] justify-center mx-auto'>
              <FontAwesomeIcon className='text-4xl text-center text-white hover:text-[#ff8730]' icon={faCartPlus} />
            </div>
            
            
          </div>
        </div>
        
    </div>
  )
}

export default Card