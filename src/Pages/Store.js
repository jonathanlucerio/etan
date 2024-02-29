import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import Carousel from '../constants/Carousel';
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'


function Store() {
  let slides = [slide1, slide2, slide3]
  return (
    <div className='md:mx-48 mx-10'>
        <div className='md:flex md:gap-3 mt-5'>
          <div className='hidden md:block w-[350px] h-screen border-white/50 border-2 bg-transparent backdrop-blur-lg rounded-md'>
            <h1 className='text-[#ff8730] text-center p-3 text-xl'>Category</h1>
            <div className='grid w-[90%] mx-auto grid-cols-2'>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='category1' className='mr-1'></input>
                <label htmlFor='category1' className='text-white hover:text-[#ff8730]'>Laptop</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='category2' className='mr-1'></input>
                <label htmlFor='category2' className='text-white hover:text-[#ff8730]'>Phone</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='category3' className='mr-1'></input>
                <label htmlFor='category3' className='text-white hover:text-[#ff8730]'>Tablet</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='category4' className='mr-1'></input>
                <label htmlFor='category4' className='text-white hover:text-[#ff8730]'>Watch</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='category5' className='mr-1'></input>
                <label htmlFor='category5' className='text-white hover:text-[#ff8730]'>EarBuds</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='category6' className='mr-1'></input>
                <label htmlFor='category6' className='text-white hover:text-[#ff8730]'>Camera</label>
              </div>
            </div>
            <hr className='w-[80%] opacity-40 h-1 bg-gray-300 mx-auto rounded-lg my-3'/>
            <h1 className='text-[#ff8730] text-center p-3 text-xl'>Brands</h1>
            <div className='grid w-[90%] mx-auto grid-cols-2'>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='brand1' className='mr-1'></input>
                <label htmlFor='brand1' className='text-white hover:text-[#ff8730]'>Apple</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='brand2' className='mr-1'></input>
                <label htmlFor='brand2' className='text-white hover:text-[#ff8730]'>Samsung</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='brand3' className='mr-1'></input>
                <label htmlFor='brand3' className='text-white hover:text-[#ff8730]'>Acer</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='brand4' className='mr-1'></input>
                <label htmlFor='brand4' className='text-white hover:text-[#ff8730]'>Asus</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='brand5' className='mr-1'></input>
                <label htmlFor='brand5' className='text-white hover:text-[#ff8730]'>Lenovo</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='brand6' className='mr-1'></input>
                <label htmlFor='brand6' className='text-white hover:text-[#ff8730]'>Xiaomi</label>
              </div>
            </div>
            <hr className='w-[80%] opacity-40 h-1 bg-gray-300 mx-auto rounded-lg my-3'/>
            <h1 className='text-[#ff8730] text-center p-3 text-xl'>Status</h1>
            <div className='grid w-[90%] mx-auto grid-cols-2'>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='status1' className='mr-1'></input>
                <label htmlFor='status1' className='text-white hover:text-[#ff8730]'>Brand New</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='status2' className='mr-1'></input>
                <label htmlFor='status' className='text-white hover:text-[#ff8730]'>Used</label>
              </div>
            </div>
          </div>
          <div className='w-full md:w-[1100px] h-screen'>
            <div className='flex justify-between w-full h-[60px] bg-white/20 backdrop-blur-lg rounded-md border-2 border-white/30 items-center md:px-10 px-5'>
              <input type='search' name='search' placeholder='Search' className='h-[35px] md:w-[250px] w-[180px] rounded-md border-white/50 bg-white border-2 px-3 md:mx-auto mx-[5px] text-black'></input>
              <div className='text-2xl text-white space-x-5 md:ml-96 items-center'>
                <FontAwesomeIcon icon={faHeart}/>
                <FontAwesomeIcon icon={faShoppingBag}/>
              </div>
            </div>
            <div className='w-full m-auto h-[400px] mt-5 rounded-lg'>
              <Carousel slides={slides} />
            </div>
            
            
          </div> 
        </div>


        <div className='w-full h-screen'></div>
        

    </div>
  )
}

export default Store