import React, { useState } from 'react';
import logo from '../assets/fulllogo3.png';
import { FiMenu } from "react-icons/fi";


const Navber = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='[@media(min-width:1290px)]:w-[1280px] w-[92%] [@media(min-width:450px)]:h-[5rem] h-[4.5rem] flex items-center justify-between mx-auto relative'>
            <div className='w-[150px] flex justify-start'><img src={logo} className="[@media(min-width:460px)]:w-[7rem] w-[6rem]" /></div>
            <ul className='[@media(min-width:700px)]:flex hidden items-center gap-[35px] text-[14px] font-[500]'>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Product</li>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Pricing</li>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Learn</li>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Company</li>
            </ul>
            <div className='[@media(min-width:700px)]:w-[150px] w-fit flex justify-end items-center gap-[10px] [@media(min-width:450px)]:text-[13px] text-[12px] font-[500] '>
                <button className='px-[12px] py-[5px] rounded-[4px]'>Login</button>
                <button className='px-[12px] py-[5px] rounded-[4px] bg-[#ffffff36] shadow-[0px_0px_3px_0px_#91bbbbb5]'>Sign Up</button>
                <FiMenu className='text-[#281b50] [@media(min-width:450px)]:text-[22px] text-[20px] [@media(min-width:700px)]:hidden flex [@media(min-width:450px)]:ml-[1rem] ml-[0.5rem]' onClick={() => { setMobileMenu(!mobileMenu) }} />
            </div>

            {/* Mobile Nav Menu */}
            <ul className={`absolute right-0 [@media(min-width:450px)]:top-[4.5rem] top-[4rem] w-[160px] ${mobileMenu ? "[@media(min-width:700px)]:hidden flex" : "hidden"} flex-col  pl-[1.5rem] py-[1.4rem] rounded-[8px] gap-[15px] bg-[#ffffffc7] text-[13px] font-[500] shadow-[0px_0px_2px_0px_#d4fafab5]`}>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Product</li>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Pricing</li>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Learn</li>
                <li className='hover:text-[#0024fff0] transition-[0.3s] cursor-pointer'>Company</li>
            </ul>
        </div>
    );
};

export default Navber;