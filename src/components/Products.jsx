import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import LaptopVideo from '../assets/laptopvid1.mp4'

import {FreeMode, Pagination, Navigation} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { ServiceData } from '../constants/Products'

function Products() {
  return (
    <div className='flex item-center justify-center flex-col h-auto md:h-screen md:mt-10 overflow-hidden'>
      <h1 className='font-bold text-[#ff8730] text-4xl text-center my-14'>Featured Products</h1>
      <Swiper
        breakpoints={{
          500:{
            slidesPerView: 2,
            spaceBetween: 10
          },
          900:{
            slidesPerView: 3,
            spaceBetween: 15
          }
        }}
        navigation={true}
        freeMode={true}
        pagination ={{
          clickable: true,
        }}
        modules ={[FreeMode, Pagination, Navigation]}
        className='max-w-[85%]'
        >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
              <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[200px] w-[225px] lg:h-[300px] lg:w-[400px] overflow-hidden cursor-pointer mx-auto'>
                <div
                className='absolute inset-0 bg-cover bg-center'
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
      <div className='md:h-100% md:grid md:grid-cols-2 w-100% my-16 mx-8 md:mx-48 gap-5'>
        <video className='md:w-[600px] w-full rounded-lg my-14 md:my-0' src={LaptopVideo} loop autoPlay muted/>
        <div className='mx-4'>
          <div className='flex space-x-2 text-3xl font-semibold mb-5 md:mb-4'>
            <h1 className='text-[#ff8730]'>Elevate</h1><h1 className='text-white'>Your Device</h1>
          </div>
          
          <p className='w-100% md:w-[500px] text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque eum quidem a error aut voluptatem sunt, assumenda optio officia voluptates minus ex? Soluta optio nam adipisci magni necessitatibus ipsam!</p>
          <br/>
          <p className='w-100% md:w-[500px] text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, mollitia atque facere ex amet earum tempore numquam commodi! Rerum eaque iure velit nulla autem nisi hic dignissimos modi tempore qui?</p>
        </div>
      </div>
    </div>
  )
}

export default Products