import React from 'react';
import appstore from '../assets/appstore.png';
import googleplay from '../assets/googleplay.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='w-100% h-[900px] md:h-[500px] rounded-t-[100px] bg-black mx-auto'>
        <div className='w-[80%] h-[200px] md:h-[100px] flex items-center mx-auto border-b-4 border-[#ff8730] border-opacity-70'>
            <ul className='text-[#ff8730] md:flex mx-auto'>
                <li className='px-16 py-3 md:py-0'>CONTACT</li>
                <li className='px-16 py-3 md:py-0'>SUPPORT</li>
                <li className='px-16 py-3 md:py-0'>TERMS AND CONDITIONS</li>
                <li className='px-16 py-3 md:py-0'>PRIVACY POLICY</li>
            </ul>
        </div>
        <div className='md:flex w-90% md:w-full h-[400px] md:h-[200px] items-center mx-auto justify-center gap-[100px] py-6'>
            <div className='text-white text-center md:w-[500px] w-full'>
                <h2 className='text-l my-3'>Available on App Store and Google Play</h2>
                <div className='md:flex justify-between md:w-[500px] w-full my-5 mx-auto items-center'>
                    <img className='w-[200px] mx-auto' src={appstore} alt='app store'/>
                    <img className='w-[200px] mx-auto' src={googleplay} alt='app store'/>
                </div>
                
            </div>
            <div className='text-white text-center md:w-[500px] w-full items-center'>
                <h2 className='text-l my-3'>Learn more about our Store</h2>
                <input className='w-[300px] md:w-[350px] h-[50px] rounded-[10px] border-2 px-5 py-3 mb-3 mx-[50px] border-[#ff8730] bg-black text-white' placeholder='Enter Your Email Here'></input>
                <button type='submit' className='w-[200px] h-[40px] bg-[#ff8730] rounded-full text-black font-semibold text-xl'>Subscribe</button>
            </div>
        </div>
        <div className='w-full h-[200px] mx-auto justify-center items-center'>
            <div className='text-center text-5xl text-[#ff8730] justify-between space-x-5 my-6'>
                <a href='#'><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                <a href='#'><FontAwesomeIcon icon={faSquareFacebook} /></a>
                <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='#'><FontAwesomeIcon icon={faTelegram} /></a>          
            </div>
            <h1 className='text-5xl text-[#ff8730] text-center mb-2'>ETAN</h1>
            <h3 className='text-white text-xl opacity-60 text-center mb-6'>© 2024 All Rights Reserved. Jonathan Lucerio</h3>
        </div>
    </div>
  )
}

export default Footer