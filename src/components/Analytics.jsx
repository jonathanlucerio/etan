import React from 'react'
import Service from '../assets/customer-service.jpg'
import Secure from '../assets/secure-shopping.jpg'
import Delivery from '../assets/fast-delivery.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white pt-12 rounded-tr-[100px]' style={{backgroundImage: `url(${require('../assets/bg1.png')})`}}>
        <div className='flex text-3xl justify-center text-center font-bold py-10 md:text-4xl'>
            <h1>Why Choose</h1><h1 className='pl-2 text-[#ff8730]'>Us?</h1>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 items-center gap-20 pt-5'>
            <div className='max-w-[80%] mx-auto md:max-w-[300px]'>
                <img src={Service} alt="/" className='rounded-2xl mx-auto drop-shadow-lg'/>
                <h3 class='font-bold text-2xl text-center py-6 mx-auto md:text-4xl'>Exceptional Costumer Service</h3>
            </div>
            <div className='max-w-[80%] mx-auto md:max-w-[300px] pb-10'>
                <img src={Secure} alt="/" className='rounded-2xl mx-auto drop-shadow-lg'/>
                <h3 class='font-bold text-2xl text-center py-6 mx-auto md:text-4xl'>Secure Online Shopping</h3>
            </div>
            <div className='max-w-[80%] mx-auto md:max-w-[300px]'>
                <img src={Delivery} alt="/" className='rounded-2xl mx-auto drop-shadow-lg'/>
                <h3 class='font-bold text-2xl text-center py-6 mx-auto md:text-4xl'>Super Fast Delivery and Service</h3>
            </div>
        </div>

        <div className='flex justify-center w-full h-[650px] md:h-60 bg-black mt-8 rounded-tr-[100px]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 justify-center items-center gap-28 md:gap-52 py-14'>
                <div className='mx-auto text-center'>
                    <h1 className='text-[#ff8730] text-5xl font-bold'>10,000+</h1>
                    <h1 className='text-white text-3xl font-bold'>Employees</h1>
                </div>
                <div  className='mx-auto text-center'>
                    <h1 className='text-[#ff8730] text-5xl font-bold'>10M+</h1>
                    <h1 className='text-white text-3xl font-bold'>Gadgets Sold</h1>
                </div>
                <div  className='mx-auto text-center'>
                    <h1 className='text-[#ff8730] text-5xl font-bold'>24 Hrs</h1>
                    <h1 className='text-white text-3xl font-bold'>Express Delivery</h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Analytics