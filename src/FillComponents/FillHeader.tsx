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
   2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[10px] 2xl:self-stretch 2xl:px-[100px] 2xl:py-[15px]  2xl:bg-[#001D21] justify-center
   xl:flex xl:flex-col xl:items-center xl:gap-[10px] xl:px-[65px]  xl:py-[15px]   xl:self-stretch xl:bg-[#001D21]
   lg:flex lg:flex-col lg:items-center lg:gap-[10px] lg:px-[65px] lg:py-[15px]  lg:self-stretch lg:bg-[#001D21]
   md:flex md:flex-col md:items-center md:gap-[10px] md:px-[65px] md:py-[15px]  md:self-stretch md:bg-[#001D21]
   sm:flex sm:flex-col sm:items-center sm:gap-[10px] sm:self-stretch sm:px-[40px]  sm:py-[15px]   sm:bg-[#001D21]">
  





  {/* top navbar bigger screens content holding internal div */}


  <div className="
  2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[80px] 2xl:self-stretch 
  xl:flex xl:flex-col xl:items-center xl:gap-[80px] xl:self-stretch
  lg:flex lg:flex-col lg:items-center lg:gap-[80px] lg:self-stretch
  md:flex md:flex-col md:items-center md:gap-[80px] md:self-stretch
  sm:flex sm:flex-col sm:items-center sm:gap-[80px] sm:self-stretch
  ">


{/*company logo + button holder div*/}
<div className="
  2xl:flex 2xl:w-full 2xl:flex-row 2xl:items-center 2xl:gap-[20px] 2xl:py-[0px] 2xl:justify-between 
  xl:flex  xl:flex-row    xl:w-full xl:items-center xl:gap-[20px]  xl:py-[0px]  xl:justify-between 
  lg:flex lg:flex-row   lg:w-full lg:items-center lg:gap-[20px] lg:py-[0px]   lg:justify-between  
  md:flex md:flex-row md:w-full  md:items-center md:gap-[20px]  md:py-[0px] md:justify-between   
  sm:flex sm:w-full sm:flex-row sm:items-center sm:gap-[20px]  sm:py-[0px]  sm:justify-between 


">

{/*logo holder + main navigator link holder div*/}
<div className="
2xl:flex 2xl:flex-row 2xl:self-stretch 2xl:gap-[60px]  2xl:items-start 2xl:flex-[1_0_0] 
xl:flex xl:flex-row  xl:items-start xl:gap-[60px] xl:flex-[1_0_0] xl:self-stretch
lg:flex lg:flex-row lg:items-start lg:gap-[60px] lg:flex-[1_0_0] lg:self-stretch
md:flex md:flex-row  md:items-center md:gap-[75px] md:flex-[1_0_0] 
sm:flex sm:flex-row  sm:items-center sm:gap-[75px] sm:flex-[1_0_0] 
">



{/*icon holder + name holder div */}
<div className="
2xl:flex 2xl:flex-row 2xl:items-center 2xl:gap-[15px] 2xl:self-stretch 2xl:justify-center
xl:flex xl:flex-row xl:items-center xl:gap-[15px] xl:self-stretch 
lg:flex lg:flex-row lg:items-center lg:gap-[15px] lg:self-stretch 
md:flex md:flex-row md:items-center md:gap-[15px] md:self-stretch 
sm:flex sm:flex-row sm:items-center sm:gap-[15px] sm:self-stretch 
">

  <div className="
  sm:flex sm:w-[35px] sm:h-[35px] sm:justify-center sm:items-center sm:gap-[10px] sm:shrink-0
  md:flex md:w-[35px] md:h-[35px] md:justify-center md:items-center md:gap-[10px] md:shrink-0
  lg:flex lg:w-[35px] lg:h-[35px] lg:justify-center lg:items-center lg:gap-[10px] lg:shrink-0
  xl:flex xl:w-[35px] xl:h-[35px] xl:justify-center xl:items-center xl:gap-[10px] xl:shrink-0
  2xl:flex 2xl:w-[35px] 2xl:h-[35px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:shrink-0
  ">
    <img 
      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753882982/unnamed_1_jhmf4q.png" 
      alt="Icon"
      className="
      2xl:w-full 2xl:h-full 2xl:object-contain
      xl:w-full xl:h-full xl:object-contain
      lg:w-full lg:h-full lg:object-contain
      md:w-full md:h-full md:object-contain
      sm:w-full sm:h-full sm:object-contain
      "
    />
  </div>

  <h2 className="
  sm:flex sm:items-center sm:h-[35px] sm:text-[24px] sm:leading-[23px] sm:font-medium sm:text-white sm:font-sans
  md:flex md:items-center md:h-[35px] md:text-[24px] md:leading-[23px] md:font-medium md:text-white md:font-sans
  lg:flex lg:items-center lg:h-[35px] lg:text-[24px] lg:leading-[23px] lg:font-medium lg:text-white lg:font-sans
  xl:flex xl:items-center xl:h-[35px] xl:text-[24px] xl:leading-[23px] xl:font-medium xl:text-white xl:font-sans
  2xl:flex 2xl:items-center 2xl:h-[35px] 2xl:text-[24px] 2xl:leading-[23px] 2xl:font-medium 2xl:text-white 2xl:font-sans
  ">
    Insignia
  </h2>

</div>
{/*icon holder + name holder div */}




 
{/*4 navigator link holder - this div will become hidden in the sm and md breakpoints and it will stay visible in the 2xl,xl and lg breakpoints
New functionality i want to add is that if the user is on the home page , then the home link should be highlighted and other opacity should be reduced and when a user is on a specific page then the nav link for that page should be highlighted and other nav links opacity should be reduced

*/}
<div className="
2xl:flex 2xl:flex-row 2xl:items-center 2xl:gap-[28px] 2xl:self-stretch 
xl:flex xl:flex-row xl:items-center xl:gap-[28px] xl:self-stretch xl:justify-start
lg:flex lg:flex-row lg:items-center lg:gap-[28px] lg:self-stretch lg:justify-start
md:hidden md:flex-row md:items-center md:gap-[28px] md:self-stretch md:justify-center
sm:hidden sm:flex-row sm:items-center sm:gap-[28px] sm:self-stretch sm:justify-start

">



 {/*home div */}
 <Link href="/Home" className={baseLinkClasses}>
  <div className="
    2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[50px] 2xl:rounded-[20px]
    xl:flex xl:flex-col xl:items-start xl:gap-[50px] xl:rounded-[20px]
    lg:flex lg:flex-col lg:items-start lg:gap-[50px] lg:rounded-[20px]
    md:flex md:flex-col md:items-start md:gap-[50px] md:rounded-[20px]
    sm:flex sm:flex-col sm:items-start sm:gap-[50px] sm:rounded-[20px]
  ">
    <h2 className={`${baseH2Classes} ${pathname === '/Home' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
      Home
    </h2>
  </div>
 </Link>
 {/*home div */}
 {/*home div */}
 






 {/*Features div */}
 <Link href="/Features" className={baseLinkClasses}>
  <div className="
    2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[50px] 2xl:rounded-[20px]
    xl:flex xl:flex-col xl:items-start xl:gap-[50px] xl:rounded-[20px]
    lg:flex lg:flex-col lg:items-start lg:gap-[50px] lg:rounded-[20px]
    md:flex md:flex-col md:items-start md:gap-[50px] md:rounded-[20px]
    sm:flex sm:flex-col sm:items-start sm:gap-[50px] sm:rounded-[20px]
  ">
    <h2 className={`${baseH2Classes} ${pathname === '/Features' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
      Features
    </h2>
  </div>
 </Link>
 {/*Features div */}









 {/*About Us div */}
 <Link href="/AboutUs" className={baseLinkClasses}>
  <div className="
    2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[50px] 2xl:rounded-[20px]
    xl:flex xl:flex-col xl:items-start xl:gap-[50px] xl:rounded-[20px]
    lg:flex lg:flex-col lg:items-start lg:gap-[50px] lg:rounded-[20px]
    md:flex md:flex-col md:items-start md:gap-[50px] md:rounded-[20px]
    sm:flex sm:flex-col sm:items-start sm:gap-[50px] sm:rounded-[20px]
  ">
    <h2 className={`${baseH2Classes} ${pathname === '/AboutUs' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
      About Us
    </h2>
  </div>
 </Link>
 {/*About Us div */}






 {/*Blogs div */}
 <Link href="/Blogs" className={baseLinkClasses}>
  <div className="
    2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[50px] 2xl:rounded-[20px]
    xl:flex xl:flex-col xl:items-start xl:gap-[50px] xl:rounded-[20px]
    lg:flex lg:flex-col lg:items-start lg:gap-[50px] lg:rounded-[20px]
    md:flex md:flex-col md:items-start md:gap-[50px] md:rounded-[20px]
    sm:flex sm:flex-col sm:items-start sm:gap-[50px] sm:rounded-[20px]
  ">
    <h2 className={`${baseH2Classes} ${pathname === '/Blogs' ? activeLinkTextClasses : inactiveLinkTextClasses}`}>
      Blogs
    </h2>
  </div>
 </Link>
 {/*Blogs div */}






  
</div>
{/*4 navigator link holder - this div will become hidden in the sm and md breakpoints and it will stay visible in the 2xl,xl and lg breakpoints */}


</div>
{/*logo holder + main navigator links holder div*/}




{/*

smaller screens nav button to be visible in md and sm breakpoints and it is to remain hidden in the 2xl, xl and lg breakpoints
add functionality to this button to toggle the visibility of the bottom smaller nav bar when clicked 

*/}
<button 

onClick={toggleMobileNav} // Add onClick handler
className="
  2xl:w-[50px]  2xl:hidden  2xl:h-[50px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:rounded-[100px] 2xl:border 2xl:border-[#31494A] 2xl:bg-[#CDCBFF]
 xl:hidden xl:w-[50px] xl:h-[50px] xl:justify-center xl:items-center xl:gap-[10px] xl:rounded-[100px] xl:border xl:border-[#31494A]  xl:bg-[#CDCBFF]
 lg:hidden lg:w-[50px] lg:h-[50px] lg:justify-center lg:items-center lg:gap-[10px] lg:rounded-[100px] lg:border lg:border-[#31494A]  lg:bg-[#CDCBFF]
 md:flex md:w-[50px] md:h-[50px] md:justify-center md:items-center md:gap-[10px] md:rounded-[6px] md:border md:border-[#31494A] md:bg-[#CDCBFF]
 sm:flex sm:w-[50px] sm:h-[50px] sm:justify-center sm:items-center sm:gap-[10px] sm:rounded-[6px] sm:border sm:border-[#31494A] sm:bg-[#CDCBFF]
 rounded-[55px]
">

  <div className="
    sm:flex sm:w-[20px] sm:h-[20px] sm:justify-center sm:items-center sm:gap-[10px] sm:shrink-0
    md:flex md:w-[20px] md:h-[20px] md:justify-center md:items-center md:gap-[10px] md:shrink-0
    lg:flex lg:w-[20px] lg:h-[20px] lg:justify-center lg:items-center lg:gap-[10px] lg:shrink-0
    xl:flex xl:w-[20px] xl:h-[20px] xl:justify-center xl:items-center xl:gap-[10px] xl:shrink-0
    2xl:flex 2xl:w-[20px] 2xl:h-[20px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:shrink-0
  ">
    <img 
      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753796386/Frame_1000005050_w8tjkg.png" 
      alt="Icon"
      className="
        2xl:w-full 2xl:h-full 2xl:object-contain
        xl:w-full xl:h-full xl:object-contain
        lg:w-full lg:h-full lg:object-contain
        md:w-full md:h-full md:object-contain
        sm:w-full sm:h-full sm:object-contain
      "
    />
  </div>

</button>



{/*

smaller screens nav button to be visible in md and sm breakpoints and it is to remain hidden in the 2xl, xl and lg breakpoints
add functionality to this button to toggle the visibility of the bottom smaller nav bar when clicked 

*/}





{/*this button will become hidden in the sm and md breakpoints and it will stay visible in the 2xl,xl and lg breakpoints */}
<NavbarContactUsButton/>
{/*this button will become hidden in the sm and md breakpoints and it will stay visible in the 2xl,xl and lg breakpoints */}



</div>
{/*company logo + button holder div*/}

  
  </div>

  {/* top navbar bigger screens content holding internal div */}








  {/*
   bottom smaller nav bar it is to be visible only in md and sm breakpoints and it is to be hidden in the 2xl, xl and lg breakpoints div 
   visibility to be toggled by the nav button for the sm and md breakpoints
   */}


  <div className="
  2xl:flex-col 2xl:items-center  justify-center  2xl:gap-[25px] 2xl:hidden
  xl:flex-col xl:items-center  xl:justify-content xl:gap-[25px] xl:hidden
  lg:flex-col   lg:items-center lg:gap-[25px] lg:self-stretch lg:justify-center lg:hidden
  md:flex md:flex-col md:justify-center md:items-center md:gap-[25px] 
  sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[25px] 
  ">


{/*4 navigators + button holder */}
<div className={`
2xl:hidden 2xl:flex-col 2xl:items-center 2xl:gap-[40px] 2xl:self-stretch  2xl:justify-center
xl:hidden xl:flex-col xl:items-center xl:gap-[40px] xl:self-stretch xl:justify-center
lg:hidden lg:flex-col lg:items-center lg:gap-[40px] lg:self-stretch lg:justify-center
 md:flex-col md:items-center md:gap-[40px] md:self-stretch md:justify-center ${isMobileNavVisible ? 'flex' : 'hidden'}
 sm:flex-col sm:items-center sm:gap-[40px] sm:self-stretch sm:justify-center
`}
>



 {/*home div */}
<a href="/home" className="w-full no-underline">
<div className="
 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[50px] 2xl:rounded-[20px] 2xl:self-stretch 
 xl:flex xl:flex-col xl:items-center xl:gap-[50px] xl:rounded-[20px] xl:self-stretch
 lg:flex lg:flex-col lg:items-center lg:gap-[50px] lg:rounded-[20px] lg:self-stretch
 md:flex md:flex-col md:items-center md:gap-[50px] md:rounded-[20px] md:self-stretch
 sm:flex sm:flex-col sm:items-center sm:gap-[50px] sm:rounded-[20px] sm:self-stretch
">
  <h2 className="
    2xl:text-white/75 2xl:[font-feature-settings:'liga'_off,'clig'_off]
    2xl:font-sans 2xl:font-medium 2xl:text-[18px] 2xl:leading-[20px] 2xl:tracking-[-0.32px] 2xl:w-auto
    xl:text-[#FAFAFA] xl:font-medium xl:text-[18px] xl:leading-[27px] xl:tracking-[-0.54px] xl:w-auto
    lg:text-[#FAFAFA] lg:font-medium lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] lg:w-auto
    md:text-[#FAFAFA] md:font-medium md:text-[18px] md:leading-[27px] md:tracking-[-0.54px] md:w-auto
    sm:text-[#FAFAFA] sm:font-medium sm:text-[18px] sm:leading-[27px] sm:tracking-[-0.54px] sm:w-auto
  ">
    Home
  </h2>
</div>
</a>
 {/*home div */}
 






  {/*home div */}
  <div className="
 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[50px] 2xl:rounded-[20px] 2xl:self-stretch 
 xl:flex xl:flex-col xl:items-center xl:gap-[50px] xl:rounded-[20px] xl:self-stretch
 lg:flex lg:flex-col lg:items-center lg:gap-[50px] lg:rounded-[20px] lg:self-stretch
 md:flex md:flex-col md:items-center md:gap-[50px] md:rounded-[20px] md:self-stretch
 sm:flex sm:flex-col sm:items-center sm:gap-[50px] sm:rounded-[20px] sm:self-stretch
">
  <h2 className="
    2xl:text-white/75 2xl:[font-feature-settings:'liga'_off,'clig'_off]
    2xl:font-sans 2xl:font-medium 2xl:text-[18px] 2xl:leading-[20px] 2xl:tracking-[-0.32px] 2xl:w-auto
    xl:text-[#FAFAFA] xl:font-medium xl:text-[18px] xl:leading-[27px] xl:tracking-[-0.54px] xl:w-auto
    lg:text-[#FAFAFA] lg:font-medium lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] lg:w-auto
    md:text-[#FAFAFA] md:font-medium md:text-[18px] md:leading-[27px] md:tracking-[-0.54px] md:w-auto
    sm:text-[#FAFAFA] sm:font-medium sm:text-[18px] sm:leading-[27px] sm:tracking-[-0.54px] sm:w-auto
  ">
    Features
  </h2>
</div>
 {/*home div */}









 {/*home div */}
 <div className="
 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[50px] 2xl:rounded-[20px] 2xl:self-stretch 
 xl:flex xl:flex-col xl:items-center xl:gap-[50px] xl:rounded-[20px] xl:self-stretch
 lg:flex lg:flex-col lg:items-center lg:gap-[50px] lg:rounded-[20px] lg:self-stretch
 md:flex md:flex-col md:items-center md:gap-[50px] md:rounded-[20px] md:self-stretch
 sm:flex sm:flex-col sm:items-center sm:gap-[50px] sm:rounded-[20px] sm:self-stretch
">
  <h2 className="
    2xl:text-white/75 2xl:[font-feature-settings:'liga'_off,'clig'_off]
    2xl:font-sans 2xl:font-medium 2xl:text-[18px] 2xl:leading-[20px] 2xl:tracking-[-0.32px] 2xl:w-auto
    xl:text-[#FAFAFA] xl:font-medium xl:text-[18px] xl:leading-[27px] xl:tracking-[-0.54px] xl:w-auto
    lg:text-[#FAFAFA] lg:font-medium lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] lg:w-auto
    md:text-[#FAFAFA] md:font-medium md:text-[18px] md:leading-[27px] md:tracking-[-0.54px] md:w-auto
    sm:text-[#FAFAFA] sm:font-medium sm:text-[18px] sm:leading-[27px] sm:tracking-[-0.54px] sm:w-auto
  ">
    About Us
  </h2>
</div>
 {/*home div */}






 {/*home div */}
 <div className="
 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[50px] 2xl:rounded-[20px] 2xl:self-stretch 
 xl:flex xl:flex-col xl:items-center xl:gap-[50px] xl:rounded-[20px] xl:self-stretch
 lg:flex lg:flex-col lg:items-center lg:gap-[50px] lg:rounded-[20px] lg:self-stretch
 md:flex md:flex-col md:items-center md:gap-[50px] md:rounded-[20px] md:self-stretch
 sm:flex sm:flex-col sm:items-center sm:gap-[50px] sm:rounded-[20px] sm:self-stretch
">
  <h2 className="
    2xl:text-white/75 2xl:[font-feature-settings:'liga'_off,'clig'_off]
    2xl:font-sans 2xl:font-medium 2xl:text-[18px] 2xl:leading-[20px] 2xl:tracking-[-0.32px] 2xl:w-auto
    xl:text-[#FAFAFA] xl:font-medium xl:text-[18px] xl:leading-[27px] xl:tracking-[-0.54px] xl:w-auto
    lg:text-[#FAFAFA] lg:font-medium lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.54px] lg:w-auto
    md:text-[#FAFAFA] md:font-medium md:text-[18px] md:leading-[27px] md:tracking-[-0.54px] md:w-auto
    sm:text-[#FAFAFA] sm:font-medium sm:text-[18px] sm:leading-[27px] sm:tracking-[-0.54px] sm:w-auto
  ">
    Blogs
  </h2>
</div>
 {/*home div */}






 <button className="
2xl:flex 2xl:items-center 2xl:w-fit  2xl:justify-center 2xl:gap-[10px] 2xl:px-[24px] 2xl:py-[16px] 2xl:rounded-[12px] 2xl:bg-white 2xl:text-[#1D1D1D] 2xl:text-center 2xl:text-[15px] 2xl:leading-[16px] 2xl:tracking-[0.45px] 2xl:font-[550] 2xl:font-sans
xl:flex xl:items-center  xl:w-fit   xl:justify-center xl:gap-[10px] xl:px-[24px] xl:py-[16px] xl:rounded-[12px] xl:bg-white xl:text-[#1D1D1D] xl:text-center xl:text-[15px] xl:leading-[16px] xl:tracking-[0.45px] xl:font-[550] xl:font-sans 
lg:flex lg:items-center lg:w-fit lg:justify-center lg:gap-[10px] lg:px-[24px] lg:py-[16px] lg:rounded-[12px] lg:bg-white lg:text-[#1D1D1D] lg:text-center lg:text-[15px] lg:leading-[16px] lg:tracking-[0.45px] lg:font-[550] lg:font-sans
md:flex md:items-center w-full md:justify-center md:gap-[10px] md:px-[24px] md:py-[16px] md:rounded-[12px] md:bg-white md:text-[#1D1D1D] md:text-center md:text-[15px] md:leading-[16px] md:tracking-[0.45px] md:font-[550] md:font-sans
sm:flex sm:items-center sm:justify-center sm:gap-[10px] sm:px-[24px] sm:py-[16px] sm:rounded-[12px] sm:bg-white sm:text-[#1D1D1D] sm:text-center sm:text-[15px] sm:leading-[16px] sm:tracking-[0.45px] sm:font-[550] sm:font-sans">
  Contact us
</button>




  
</div>
{/*4 icons div holder */}









 
  </div>


  {/* bottom smaller nav bar it is to be visible only in md and sm breakpoints and it is to be hidden in the 2xl, xl and lg breakpoints div  */}
















   </div>
   {/* main outer hero section div */}

  
  </>
  )
 
 }