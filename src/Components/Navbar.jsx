import React, { useState } from 'react'
import logo from '../Images/Boomgos-Logo.png'
import logo2 from '../Images/images-removebg-preview.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { TfiControlShuffle } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';




function Navbar(props) {

    const [showbar, setShowbar] = useState(false);

  function handleMenubar() {
    setShowbar(!showbar);
  }

  return (
    <div>
        <div className=' flex flex-col justify-center items-center ' >
            
        <div className=' flex items-center gap-[40px] py-[20px] md:px-[0px] px-[10px]'>
            <CiMenuBurger className='md:hidden text-[30px]' onClick={handleMenubar}/>
            <div>
                <img src={logo} className=' cursor-pointer w-[201px] h-[44px]' alt="" />
            </div>
            <div className='hidden border-[2px] md:flex items-center rounded-[40px]  p-2 pr-[10px] pl-[20px]'>
                <input type="text" placeholder='  Search for products' className='w-[600px] h-[40px] outline-none' />
                <div className=' bg-[#FE7E2A] rounded-[50px] p-[9px] cursor-pointer'><FiSearch size={20} color='white' /></div>
            </div>
            <div>
                <select name="" id="" className='hidden md:flex cursor-pointer outline-none'>
                    <option value="">EUR</option>
                    <option value="">USD</option>
                </select>
            </div>
            <div className='hidden md:flex items-center gap-5'>
                <img className=' w-[45px] ' src={logo2} alt="" />
                <p className='font-lexend text-[14px]'>World Wide Shipping</p>
            </div>
            <div className='md:hidden p-2 rounded-[20px] text-[black] bg-[white]'><LuUser2 size={23} /></div>
        </div>
        <div className='flex bg-[#E6EFFD] w-[100vw]  text-[13px] font-openSans font-semibold items-center'>
            
            <div className='md:hidden bg-white my-[10px] mx-[20px] flex items-center rounded-[40px] pr-[10px] pl-[20px]'>
                <input type="text" placeholder='  Search for products' className='w-[280px] h-[40px] outline-none' />
                <div className=' bg-[#FE7E2A] rounded-[50px] p-[9px] cursor-pointer'><FiSearch size={20} color='white' /></div>
            </div>

           <div className='hidden md:flex items-center justify-center w-[100vw] gap-[80px]'>
            <div className=' flex  gap-6 items-center  justify-center'>
                <div className=' bg-[#FE7E2A] text-[white] flex items-center gap-[30px] py-[17px] px-[15px]'>
                    <div className=' flex items-center gap-[15px]'>
                      <RxHamburgerMenu size={18} />
                      <p>Browse Categories</p>
                    </div>
                    <div>
                       <IoIosArrowDown color='white' />
                    </div>
                </div>
                <ul className='flex items-center gap-[20px]'>
                  <li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'><a className={props.home} href="/">Home</a></li>
                  <li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'>About Us</li>
                  <Link to="Shop"><li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'>Shop</li></Link>
                  <li className=' hover:bg-[#ECD3C9] hover:text-[#FE7E2A] transition duration-150 cursor-pointer px-[18px] py-[9px] rounded-[25px]'>Contact Us</li>
                </ul>
            </div>
            <div className='flex items-center gap-[32px]'>
                <div>
                    <select name="" id="" className='p-[10px] px-[20px]'>
                        <option value="">English</option>
                        <option value="">French</option>
                        <option value="">Spanish</option>
                    </select>
                </div>
                <div className=' flex items-center gap-[12px]'>
                    <div className=' p-2 rounded-[20px] text-[black] bg-[white]'><LuUser2 size={23} /></div>
                    <p>Login / Register</p>
                </div>
                <div className=' flex items-center gap-[27px]'>
                <div className=' bg-white p-2 rounded-[20px]'>
                    <TfiControlShuffle size={23} />
                    <p className=' text-[#FE7E2A] bg-[white] px-[5px] py-[1px] rounded-[100px] bottom-[640px] left-[1285px] absolute '>0</p>
                </div>
                <div className=' bg-white p-2 rounded-[20px]'> 
                    <IoIosHeartEmpty size={23} />
                    <p className=' text-[#FE7E2A] bg-[white] px-[5px] py-[1px] rounded-[100px] bottom-[640px] left-[1350px] absolute '>0</p>

                </div>
                <div className=' bg-[#FE7E2A] p-2 rounded-[20px]'> 
                    <CgShoppingCart size={23} color='white' />
                    <p className=' text-[#FE7E2A] bg-[white] px-[5px] py-[1px] rounded-[100px] bottom-[640px] left-[1420px] absolute '>0</p>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>



        <div className='md:hidden'>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 ${showbar ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className='flex justify-end px-[10px] py-[20px] '>
          <div className='flex items-center gap-[1px] cursor-pointer' onClick={handleMenubar}>
          <MdClose className='text-[20px] text-[#747474]'/>   <p className='text-[#747474] font-bold'>Close</p>
          </div>
        </div>

        
        
        <ul className='flex flex-col gap-[10px] px-[10px] py-[20px]'>
          <Link to="/"><li className='cursor-pointer border-b-[1.5px] border-[text-[#747474]] p-[10px]'>Home</li></Link>
          <Link to="/Shop"><li className='cursor-pointer border-b-[1.5px] border-[text-[#747474]] p-[10px]'>Shop</li></Link>
          <li className='cursor-pointer border-b-[1.5px] border-[text-[#747474]] p-[10px]'>Contact Us</li>
          <li className='cursor-pointer border-b-[1.5px] border-[text-[#747474]] p-[10px]'>Store List</li>
          <Link to="/Order"><li className='cursor-pointer border-b-[1.5px] border-[text-[#747474]] p-[10px]'>Order Tracking</li></Link>
          <li className='cursor-pointer border-b-[1.5px] border-[text-[#747474]] p-[10px]'>Become A Seller</li>
        </ul>
      </div>

      {/* Backdrop when sidebar is active */}
      {showbar && (
        <div
          className='fixed inset-0 bg-black opacity-50'
          onClick={handleMenubar}
        ></div>
      )}
    </div>
        
    </div>
  )
}

export default Navbar