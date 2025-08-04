"use client"; // Add this line at the very top

import NavbarContactUsButton from '@/ButtonVariants/ContactUs';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname






export default function FillHeader () {



  // State to manage the visibility of the smaller navigation bar
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Function to toggle the visibility
  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };



  // Define base classes for all links (no-underline is already there)
  const baseLinkClasses = "no-underline";

  // Define common classes for the h2 element
  const baseH2Classes = "font-sans font-medium text-[16px] leading-[20px] tracking-[-0.32px] w-auto";

  // Define classes for active and inactive states
  const activeLinkTextClasses = "text-white [font-feature-settings:'liga'_off,'clig'_off]";
  const inactiveLinkTextClasses = "text-white/60 [font-feature-settings:'liga'_off,'clig'_off]"; // Reduced opacity






 return ( 
  <>
   

   {/* main outer hero section div */}
   <div className="
   flex flex-col items-center gap-[10px] self-stretch px-[40px] py-[15px] bg-[#001D21]
   sm:px-[40px] sm:py-[15px]
   md:px-[65px] md:py-[15px]
   lg:px-[100px] lg:py-[15px] 
   xl:py-[15px] xl:px-[100px]
   2xl:px-[100px] 2xl:py-[15px] 
   ">
  





  {/* top navbar bigger screens content holding internal div */}

  <div className="
      flex flex-col items-center gap-[80px] self-stretch  w-full
     
      2xl:max-w-screen-2xl 2xl:mx-auto
    ">

      {/* Company logo + button holder div */}
      <div className="
        flex w-full flex-row items-center justify-between gap-[20px] py-[0px]
      ">

        {/* Logo holder + main navigator link holder div */}
        <div className="
          flex flex-row items-center gap-[60px] flex-1 self-stretch
          sm:gap-[75px]
          lg:gap-[60px] lg:items-start
        ">

          {/* Icon holder + name holder div */}
          <div className="flex flex-row items-center gap-[15px] self-stretch justify-center">
            <div className="flex w-[35px] h-[35px] justify-center items-center gap-[10px] shrink-0">
              <img
                src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752835431/Group_18_pg1yqp.png"
                alt="Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="flex items-center h-[35px] text-[24px] leading-[23px] font-medium text-white font-sans">
              Insignia
            </h2>
          </div>

          {/* 4 navigator link holder - visible on lg and up */}
          <div className="
            hidden
            lg:flex lg:flex-row lg:items-center lg:gap-[28px] lg:self-stretch
          ">
            {/* These links need to use the `pathname` from a router to determine the active state */}
            {/* For demonstration, I am using a placeholder `pathname` */}
            {/* Home div */}
            <Link href="/Home" className={baseLinkClasses}>
              <h2 className={`${baseH2Classes} ${pathname === '/Home' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
                Home
              </h2>
            </Link>

            {/* Features div */}
            <Link href="/Features" className={baseLinkClasses}>
              <h2 className={`${baseH2Classes} ${pathname === '/Features' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
                Features
              </h2>
            </Link>

            {/* About Us div */}
            <Link href="/AboutUs" className={baseLinkClasses}>
              <h2 className={`${baseH2Classes} ${pathname ===  '/AboutUs' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
                About Us
              </h2>
            </Link>

            {/* Blogs div */}
            <Link href="/Blogs" className={baseLinkClasses}>
              <h2 className={`${baseH2Classes} ${pathname ===  '/Blogs' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
                Blogs
              </h2>
            </Link>
          </div>
        </div>

        {/* Smaller screens nav button - visible on sm and md */}
        <button
          onClick={toggleMobileNav}
          className="
            flex w-[50px] h-[50px] justify-center items-center gap-[10px] rounded-[6px] border border-[#31494A] bg-[#CDCBFF]
            lg:hidden
          ">
          <div className="flex w-[20px] h-[20px] justify-center items-center gap-[10px] shrink-0">
            <img
              src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753796386/Frame_1000005050_w8tjkg.png"
              alt="Menu Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </button>

        {/* Navbar Contact Us Button - visible on lg and up */}
        <div className="
          hidden
          lg:flex
        ">
          <NavbarContactUsButton />
        </div>

      </div>

    </div>

  {/* top navbar bigger screens content holding internal div */}








  {/*
   bottom smaller nav bar it is to be visible only in md and sm breakpoints and it is to be hidden in the 2xl, xl and lg breakpoints div 
   visibility to be toggled by the nav button for the sm and md breakpoints
   */}


<div className="
  flex flex-col items-center justify-center gap-[25px]
  lg:hidden
">

  {/* 4 navigators + button holder */}
  <div className={`
    flex flex-col items-center justify-center gap-[40px] self-stretch
    ${isMobileNavVisible ? 'flex' : 'hidden'}
  `}>

    {/* home div */}
    <a href="/home" className="w-full no-underline">
      <div className="
        flex flex-col items-center gap-[50px] rounded-[20px] self-stretch
      ">
        <h2 className="
          text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px]
        ">
          Home
        </h2>
      </div>
    </a>

    {/* features div */}
    <a href="/features" className="w-full no-underline">
      <div className="
        flex flex-col items-center gap-[50px] rounded-[20px] self-stretch
      ">
        <h2 className="
          text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px]
        ">
          Features
        </h2>
      </div>
    </a>

    {/* about us div */}
    <a href="/about-us" className="w-full no-underline">
      <div className="
        flex flex-col items-center gap-[50px] rounded-[20px] self-stretch
      ">
        <h2 className="
          text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px]
        ">
          About Us
        </h2>
      </div>
    </a>

    {/* blogs div */}
    <a href="/blogs" className="w-full no-underline">
      <div className="
        flex flex-col items-center gap-[50px] rounded-[20px] self-stretch
      ">
        <h2 className="
          text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px]
        ">
          Blogs
        </h2>
      </div>
    </a>

    <button className="
      flex items-center w-full justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px]
      bg-white text-[#1D1D1D] text-center text-[15px] leading-[16px] tracking-[0.45px] font-[550] font-sans
      sm:w-fit
    ">
      Contact us
    </button>
  </div>
</div>


  {/* bottom smaller nav bar it is to be visible only in md and sm breakpoints and it is to be hidden in the 2xl, xl and lg breakpoints div  */}
















   </div>
   {/* main outer hero section div */}

  
  </>
  )
 
 }