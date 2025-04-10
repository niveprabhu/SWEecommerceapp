import React, { useState } from 'react'
import { assets, icons } from '../assets/assets'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible,setVisible] = useState(false);

  let sidebarWidthClass = 'w-0';
      if (visible) {
        sidebarWidthClass = 'w-full';
      }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={assets.logo} className='w-36' alt=''/>
      <ul className='hidden sm:flex gap-5 text-sm text-slate-100'>
        <NavLink to='/' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/movie' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>Movies Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={icons.search_icon} className='w-5 cursor-pointer' alt=""/>
        <div className='group relative'>
          <img src={icons.profile_icon} className='w-5 cursor-pointer' alt=""/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-700'>
              <NavLink to='/myprofile'><p className='cursor-pointer hover:text-black'>My Profile</p></NavLink>
              <NavLink to='/cart'><p className='cursor-pointer hover:text-black'>Orders</p></NavLink>
              <NavLink to='/login'><p className='cursor-pointer hover:text-black'>Logout</p></NavLink>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={icons.cart_icon} className='w-10 w-min-10' alt="" />
          <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={icons.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=''/>
      </div>
      {/*sidebar menu for small screen*/}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${sidebarWidthClass}`}>
      {/*<div className={['absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}']}>*/}
        <div className='flex flex-col text-gray-700 '>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img src={icons.dropdown_icon} alt='' className='h-4 rotate-180'/>
              <p>Back</p> 
          </div>
          
          < NavLink onClick={()=>setVisible(false)} className='py pl-6 border' to='/'>Home</NavLink>
          < NavLink onClick={()=>setVisible(false)} className='py pl-6 border' to='/movie'>Movies Collection</NavLink>
          < NavLink onClick={()=>setVisible(false)} className='py pl-6 border' to='/about'>About</NavLink>
          < NavLink onClick={()=>setVisible(false)} className='py pl-6 border' to='/contact'>Contact</NavLink>
      </div>
    </div>
    </div>
  )
}

export default Navbar
