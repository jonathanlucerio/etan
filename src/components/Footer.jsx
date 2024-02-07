import React from 'react';
import appstore from '../assets/appstore.png';

function Footer() {
  return (
    <div className='w-100% md:h-[500px] rounded-t-[100px] bg-black'>
        <div className='w-[80%] h-[100px] flex items-center mx-auto border-b-4 border-[#ff8730] border-opacity-60'>
            <ul className='text-[#ff8730] md:flex mx-auto'>
                <li className='px-16'>CONTACT</li>
                <li className='px-16'>SUPPORT</li>
                <li className='px-16'>TERMS AND CONDITIONS</li>
                <li className='px-16'>PRIVACY POLICY</li>
            </ul>
        </div>
        <div className=' flex w-full h-[300px] items-center mx-auto justify-center gap-[100px]'>
            <div className='text-white text-center w-[500px]'>
                <h2 className='text-l my-3'>Available on App Store and Google Play</h2>
                <div className='flex justify-between w-[500px] my-5'>
                    <img className='w-[200px]' src={appstore} alt='app store'/>
                    <img className='w-[200px]' src={appstore} alt='app store'/>
                </div>
                
            </div>
            <div className='text-white text-center w-[500px] items-center'>
                <h2 className='text-l my-3'>Learn more about our Store</h2>
                <input className='w-[350px] h-[50px] rounded-[10px] border-2 px-5 py-3 mb-3 mx-[50px] border-[#ff8730] bg-black text-white' placeholder='Enter Your Email Here'></input>
                <button type='submit' className='w-[200px] h-[40px] bg-[#ff8730] rounded-full text-black font-semibold text-xl'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer