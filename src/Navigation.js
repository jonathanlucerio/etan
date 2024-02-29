import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from './assets/etan1.png'
import { Outlet, NavLink} from 'react-router-dom'

const Navigation = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    
    }
  return (
    
    <div className='flex justify-between items-center h-24 w-100% mx-auto md:mx-40 px-4 text-white'>
        <img className='w-[150px]' src={logo} alt='logo'/>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#ff8730] cursor-pointer'>
                <NavLink to='/etan'>Home</NavLink>
            </li>
            <li className='p-4 hover:text-[#ff8730] cursor-pointer'>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li className='p-4 hover:text-[#ff8730] cursor-pointer'>
                <NavLink to='/store'>Store</NavLink>
            </li>
            <li className='p-4 hover:text-[#ff8730] cursor-pointer'>
                <NavLink to='/signin'>Sign In</NavLink>
            </li>
        </ul>

        <Outlet />
        
        <div onClick={handleNav} className='block md:hidden'>
            {nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-transparent backdrop-blur-xl ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <img className='w-[150px] mt-6 ml-4' src={logo} alt='logo'/>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'><NavLink to='/etan'>Home</NavLink></li>
                <li className='p-4 border-b border-gray-600'><NavLink to='/about'>About</NavLink></li>
                <li className='p-4 border-b border-gray-600'><NavLink to='/store'>Store</NavLink></li>
                <li className='p-4 border-b border-gray-600'><NavLink to='/signin'>Sign In</NavLink></li>
            </ul>
        </div>
    </div>
  ) 
}



export default Navigation