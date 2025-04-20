import React from 'react';
import { IoSearch } from "react-icons/io5";
import ReactJsLogo from "../assets/framework-logo/react-js.png";
import NextJsLogo from "../assets/framework-logo/next-js.png";
import TailwindCssLogo from "../assets/framework-logo/tailwind-css.png";
import Navber from './Navber';

const Banner = () => {
    return (
        <div className='w-full h-full z-[-2]' style={{ "background": "linear-gradient(365deg , #fff 0%, #d4fafab5 100%" }}>
            <Navber />
            <div className='[@media(min-width:1290px)]:w-[1280px] w-full text-center pt-[3rem] mx-auto'>
                <div className='w-fit h-full mx-auto relative [@media(min-width:460px)]:px-0 px-[10px]'>
                    <div className='w-full relative z-[2]'>
                        <p className='w-fit mx-auto desktop1:!text-[13px] desktop2:!text-[12px] desktop4:text-[11px] text-[10px] font-[500] desktop1:px-[13px] px-[10px] desktop1:py-[4px] py-[3px] shadow-[0px_0px_3px_0px_#0000005c] rounded-[25px] mb-[5px]'>Resources for Frontend & Full Stack Developers</p>
                        <h1 className='desktop1:!text-[60px] desktop2:!text-[40px] [@media(min-width:460px)]:text-[30px] text-[25px] font-[600] desktop1:!leading-[80px] desktop2:!leading-[60px] [@media(min-width:460px)]:leading-[45px] leading-[35px] desktop1:mb-[10px] mb-[5px]'>The ultimate library of code<br className='desktop3:flex hidden' /> components & app templates</h1>

                        <p className='desktop1:!text-[14px] desktop2:!text-[12px] desktop4:text-[11px] text-[10px] font-[500] desktop2:leading-[25px] leading-[18px]'>DevKitBase offers a vast collection of reusable code blocks, frontend<br className='desktop2:hidden desktop4:flex hidden' /> components, and full-stack<br className='desktop1:!hidden desktop2:flex hidden' /> templates<br className='desktop1:flex hidden' /> for React, Next.js, and Tailwind CSS.<br className='desktop2:!hidden desktop4:flex hidden' /> Ship faster with scalable code.</p>
                        <div className='desktop1:!w-[400px] desktop2:w-[330px] w-[290px] mx-auto relative desktop1:my-[15px] my-[10px]'>
                            <input type="text" placeholder='Search components, templates, snippets…' className=' border-[1px] border-[#281b503b] text-[#281b50c4] desktop1:!text-[13px] desktop2:!text-[12px] desktop4:text-[11px] text-[10px] desktop4:rounded-[8px] rounded-[5px] focus:ring-[#281b504a] focus:border-[#281b504a] block w-full desktop1:!pl-[35px] desktop4:pl-[30px] pl-[25px] desktop1:py-[9px] py-[7px] dark:!bg-[#ffffffba] dark:border-[#281b504a] placeholder-[#281b50c4] dark:focus:ring-[#281b504a] dark:focus:border-[#281b504a] bg-[#ffffff73] font-[400] outline-none shadow-[0px_1px_3px_0px_#281b502b]' />
                            <div className='absolute desktop1:!left-[12px] desktop4:left-[10px] left-[8px] top-0 h-full flex items-center'>
                                <IoSearch className='desktop1:!text-[17px] desktop2:text-[15px] text-[13px] text-[#281b5091]' />
                            </div>
                        </div>
                        <div className='flex justify-center desktop2:gap-[15px] gap-[10px] desktop1:!text-[13px] desktop2:!text-[12px] desktop4:text-[11px] text-[10px] font-[500]'>
                            <div className='flex items-center rounded-[25px] desktop1:px-[9px] px-[7px] desktop1:py-[5px] py-[3px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                <img src={ReactJsLogo} className="desktop1:!w-[20px] desktop2:w-[16px] w-[14px]" />
                                <p className='desktop1:pl-[7px] pl-[4px]'>React Js</p>
                            </div>
                            <div className='flex items-center rounded-[25px] desktop1:px-[9px] px-[7px] desktop1:py-[5px] py-[3px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                <img src={NextJsLogo} className="desktop1:!w-[20px] desktop2:w-[16px] w-[14px]" />
                                <p className=' desktop1:pl-[7px] pl-[4px]'>Next Js</p>
                            </div>
                            <div className='flex items-center rounded-[25px] desktop1:px-[9px] px-[7px] desktop1:py-[5px] py-[3px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                <img src={TailwindCssLogo} className="desktop1:!w-[20px] desktop2:w-[16px] w-[14px]" />
                                <p className=' desktop1:pl-[7px] pl-[4px]'>Tailwind CSS</p>
                            </div>
                        </div>

                        <div className='desktop1:mt-[20px] mt-[15px] desktop1:!text-[12px] desktop2:!text-[11px] desktop4:text-[10px] text-[9px] font-[500] flex flex-col justify-center items-center desktop1:gap-[10px] gap-[8px]'>
                            <div className='flex items-center desktop1:gap-[10px] gap-[7px]'>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Auth Flows</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Dashboards</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>API Integrations</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Layout</p>
                                </div>
                            </div>
                            <div className='flex items-center desktop1:gap-[10px] gap-[7px]'>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Navigation</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Pricing Tables</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Footer Scripts</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Contact Forms</p>
                                </div>
                            </div>
                            <div className='flex items-center desktop1:gap-[10px] gap-[7px]'>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Responsive Design</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>Wireframes</p>
                                </div>
                                <div className='px-[7px] py-[3px] rounded-[4px] shadow-[0px_0px_3px_0px_#281b504a]'>
                                    <p className=''>UI Elements</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Particals */}
                    <div className='absolute left-0 top-0 w-full h-full [@media(min-width:460px)]:flex hidden'>
                    <div className='w-full h-full relative'>
                        <div className='absolute z-0 desktop1:!left-[-3rem] desktop2:!left-[-2rem] desktop3:left-[-1rem] left-[1rem] desktop2:top-[0rem] top-[0.5rem] desktop1:!w-[35px] desktop2:w-[25px] w-[20px] desktop1:!h-[35px] desktop2:h-[25px] h-[20px] bg-[#DE37AE]'></div>
                        <div className='absolute z-0 desktop1:!left-[1rem] desktop2:!left-0 desktop3:left-[-1rem] left-[2rem] desktop1:!top-[15rem] desktop2:!top-[12rem] desktop3:top-[10rem] top-[11rem] desktop1:w-[43px] w-[33px] desktop1:h-[20px] h-[15px] bg-[#4ED8C8]'></div>
                        <div className='absolute z-0 desktop1:!left-[10rem] desktop2:left-[4rem] left-[2rem] desktop1:!bottom-[6rem] desktop2:bottom-[5rem] bottom-[4rem] desktop1:w-[25px] w-[20px] desktop1:h-[25px] h-[20px] bg-[#FF7978]'></div>
                        <div className='absolute z-0 desktop1:!left-[-8rem] desktop2:!left-[-6rem] desktop3:left-[-4rem] left-[4rem] desktop1:!bottom-[-2rem] desktop3:bottom-[-3rem] bottom-[-2rem] desktop1:!w-[40px] desktop2:w-[30px] w-[25px] desktop1:!h-[35px] desktop2:h-[25px] h-[20px] bg-[#DE37AE]'></div>

                        <div className='absolute z-0 desktop3:right-[-2rem] right-[1.5rem] desktop1:!top-[5rem] desktop3:top-[4rem] top-[3rem] desktop1:w-[25px] w-[20px] desktop1:h-[25px] h-[20px] bg-[#FF7978]'></div>
                        <div className='absolute z-0 desktop1:!right-[11rem] desktop2:!right-[5rem] desktop3:right-[2rem] right-[5rem] desktop2:bottom-[8rem] bottom-[9rem] desktop1:!w-[35px] desktop2:w-[25px] w-[20px] desktop1:!h-[35px] desktop2:h-[25px] h-[20px] bg-[#DE37AE]'></div>
                        <div className='absolute z-0 desktop1:!right-[-4rem] desktop3:right-[-3rem] right-[2rem] desktop1:top-[14rem] top-[15rem] desktop1:!w-[30px] desktop2:w-[22px] w-[19px] desktop1:h-[70px] h-[60px] bg-[#4ED8C8]'></div>
                        <div className='absolute z-0 desktop1:right-[8rem] desktop2:right-[3rem] right-[5rem] desktop1:!bottom-[-4rem] desktop3:bottom-[-3rem] bottom-[-2rem] desktop1:!w-[110px] desktop2:w-[100px] w-[90px] desktop1:!h-[32px] desktop2:h-[22px] h-[19px] bg-[#FF7978]'></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;