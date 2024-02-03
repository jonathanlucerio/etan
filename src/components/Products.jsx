import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import {FreeMode, Pagination, Navigation, Mousewheel, Keyboard} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { ServiceData } from '../constants/Products'

function Products() {
  return (
    <div className='flex item-center justify-center flex-col h-screen bg-black'>
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
        cssMode={true}
        navigation={true}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        pagination ={{
          clickable: true,
        }}
        modules ={[FreeMode, Pagination, Navigation, Mousewheel, Keyboard]}
        className='max-w-[90%]'
        >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
              <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[200px] w-[225px] lg:h-[400px] lg:w-[450px] overflow-hidden cursor-pointer mx-auto'>
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
    </div>
  )
}

export default Products