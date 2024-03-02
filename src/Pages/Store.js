import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Carousel from '../constants/Carousel';
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import {FreeMode, Pagination, Navigation} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { ServiceData } from '../constants/Products'
import Card from '../components/Card';


function Store() {
  let slides = [slide1, slide2, slide3]
  return (
    <div className='md:mx-48 mx-10'>
        <div className='md:flex md:gap-3 w-full md:h-[900px] h-[600px]'>
          <div className='hidden md:block w-[350px] h-[872px] border-white/50 border-2 bg-white/10 backdrop-blur-lg rounded-md'>
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
                <label htmlFor='brand5' className='text-white hover:text-[#ff8730]'>Sony</label>
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
                <label htmlFor='status2' className='text-white hover:text-[#ff8730]'>Used</label>
              </div>
            </div>
            <hr className='w-[80%] opacity-40 h-1 bg-gray-300 mx-auto rounded-lg my-3'/>
            <h1 className='text-[#ff8730] text-center p-3 text-xl'>Price</h1>
            <div className='grid w-[90%] mx-auto grid-cols-2'>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='price1' className='mr-1'></input>
                <label htmlFor='price1' className='text-white hover:text-[#ff8730]'>0 - $20</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='price2' className='mr-1'></input>
                <label htmlFor='price2' className='text-white hover:text-[#ff8730]'>$20 - $50</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='price3' className='mr-1'></input>
                <label htmlFor='price3' className='text-white hover:text-[#ff8730]'>$50 - $100</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='price4' className='mr-1'></input>
                <label htmlFor='price4' className='text-white hover:text-[#ff8730]'>$100 - $500</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='price5' className='mr-1'></input>
                <label htmlFor='price5' className='text-white hover:text-[#ff8730]'>$500 - $1000</label>
              </div>
              <div className='flex ml-8 my-2'>
                <input type='checkbox' id='price6' className='mr-1'></input>
                <label htmlFor='price6' className='text-white hover:text-[#ff8730]'>$1000+</label>
              </div>
            </div>
            <hr className='w-[80%] opacity-40 h-1 bg-gray-300 mx-auto rounded-lg my-3'/>
            <h1 className='text-[#ff8730] text-center p-3 text-xl'>Color</h1>
            <div className='grid w-[90%] mx-auto grid-cols-5'>
              <button className='w-8 h-8 bg-[#ffffff] rounded-full focus:ring-4 focus:ring-[#ff8730] mx-auto'></button>
              <button className='w-8 h-8 bg-[#000000] rounded-full focus:ring-4 focus:ring-[#ff8730] mx-auto'></button>
              <button className='w-8 h-8 bg-[#868686] rounded-full focus:ring-4 focus:ring-[#ff8730] mx-auto'></button>
              <button className='w-8 h-8 bg-[#922525] rounded-full focus:ring-4 focus:ring-[#ff8730] mx-auto'></button>
              <button className='w-8 h-8 bg-[#2d4fbe] rounded-full focus:ring-4 focus:ring-[#ff8730] mx-auto'></button>
            </div>
          </div>
          <div className='w-full md:w-[1100px] md:h-screen h-[550px]'>
            <div className='flex justify-between w-full h-[60px] bg-white/10 backdrop-blur-lg rounded-md border-2 border-white/30 items-center md:px-10 px-5'>
              <input type='search' name='search' placeholder='Search' className='h-[35px] md:w-[250px] w-[180px] rounded-md border-white/50 bg-white border-2 px-3 text-black'></input>
              <div className='text-2xl text-white space-x-5 md:ml-96 items-center'>
                <FontAwesomeIcon icon={faHeart}/>
                <FontAwesomeIcon icon={faShoppingBag}/>
              </div>
            </div>
            <div className='w-full h-auto m-auto md:h-[400px] mt-5 rounded-lg'>
              <Carousel slides={slides} />
            </div>
            <h1 className='text-2xl font-semibold text-[#ff8730] mt-10 mb-5 ml-5'>Featured</h1>
            <div className='w-full md:h-[400px] h-[200px]'>
              <Swiper
                  breakpoints={{
                    500:{
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    900:{
                      slidesPerView: 4,
                      spaceBetween: 5
                    }
                  }}
                  navigation={true}
                  freeMode={true}
                  pagination ={{
                    clickable: true,
                  }}
                  modules ={[FreeMode, Pagination, Navigation]}
                  className='w-full'
                  >
                  {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[200px] w-[225px] lg:h-[300px] lg:w-[250px] overflow-hidden cursor-pointer mx-auto'>
                          <div
                            className='absolute inset-0 bg-cover bg-center w-full'
                            style={{ backgroundImage:  `url(${item.backgroundImage})`}}
                          />
                          <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'/>
                          <div className='relative flex flex-col gap-3'>
                            <item.icon className='text-[#ff8730] group-hover:text-[#ff8730] w-[32px] h-[32px]'/>
                            <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                          </div>
                          <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-[#ff8730] group-hover:rotate-45 duration-100'/>
                          
                        </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
          </div> 
        </div>


        <div className='grid md:grid-cols-4 grid-cols-1 w-full h-auto border-2 border-white/50 rounded-xl'>
          {ServiceData.map((item) =>(
            <Card key={item.title}
                backgroundImage = {item.backgroundImage}
                title = {item.title}
                color = {item.color}
                price = {item.price}
                content = {item.content}
             />
          ))}
        </div>
        

    </div>
  )
}

export default Store