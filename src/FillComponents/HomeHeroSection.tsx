

import GetStartedButton from "@/ButtonVariants/GetStarted"






export default function FillHeroSection () {


 return ( 
  <>
   

   {/* main outer hero section div */}
   <div className="
   2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch 2xl:px-[100px] 2xl:py-[65px] 2xl:bg-[#001D21]
   xl:flex xl:flex-col xl:items-start xl:gap-[10px] xl:p-[65px] xl:self-stretch xl:bg-[#001D21]
   lg:flex lg:flex-col lg:items-start lg:gap-[10px] lg:p-[65px] lg:self-stretch lg:bg-[#001D21]
   md:flex md:flex-col md:items-start md:gap-[10px] md:p-[65px] md:self-stretch md:bg-[#001D21]
   sm:flex sm:flex-col sm:items-start sm:gap-[10px] sm:self-stretch sm:px-[40px] sm:py-[65px] sm:bg-[#001D21]">
  





  {/* content holding div */}
  <div className="
  2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[26px] 2xl:self-stretch
  xl:flex xl:flex-col xl:items-start xl:gap-[26px] xl:self-stretch
  lg:flex lg:flex-col lg:items-start lg:gap-[26px] lg:self-stretch
  md:flex md:flex-col md:items-start md:gap-[26px] md:self-stretch
  sm:flex sm:flex-col sm:items-start sm:gap-[26px] sm:self-stretch">
 


{/* upper content(heading + subheading + button) holding div */}
 <div className="
 2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[25px] 2xl:w-[633px]
 xl:flex xl:w-[633px] xl:flex-col xl:items-start xl:gap-[25px]
 lg:flex lg:w-[633px] lg:flex-col lg:items-start lg:gap-[25px]
 md:flex md:w-[633px] md:flex-col md:items-start md:gap-[25px]
 sm:flex sm:w-[560px] sm:flex-col sm:items-start sm:gap-[25px]">

 <h1 className="
 2xl:self-stretch 2xl:text-[#CDCBFF] 2xl:font-medium 2xl:text-[64px] 2xl:leading-[69px] 2xl:tracking-[-2.56px] 2xl:font-sans
 xl:self-stretch xl:text-[#CDCBFF] xl:font-sans xl:text-[64px] xl:font-medium xl:leading-[69px] xl:tracking-[-2.56px]
 lg:self-stretch lg:text-[#CDCBFF] lg:font-sans lg:text-[64px] lg:font-medium lg:leading-[69px] lg:tracking-[-2.56px]
 md:self-stretch md:text-[#CDCBFF] md:font-sans md:text-[64px] md:font-medium md:leading-[69px] md:tracking-[-2.56px]
 sm:self-stretch sm:text-[#CDCBFF] sm:font-sans sm:text-[64px] sm:font-medium sm:leading-[69px] sm:tracking-[-2.56px]">
 Scalable and flexible infrastructure to grow
 </h1>
  


 <h2 className="
 2xl:self-stretch 2xl:text-[#BFBEBE] 2xl:font-medium 2xl:text-[14px] 2xl:leading-[17px] 2xl:font-sans
  xl:self-stretch xl:text-[#BFBEBE] xl:font-sans xl:text-[14px] xl:font-medium xl:leading-[17px]
  lg:self-stretch lg:text-[#BFBEBE] lg:font-sans lg:text-[14px] lg:font-medium lg:leading-[17px]
  md:self-stretch md:text-[#BFBEBE] md:font-sans md:text-[14px] md:font-medium md:leading-[17px]
  sm:self-stretch sm:text-[#BFBEBE] sm:font-sans sm:text-[14px] sm:font-medium sm:leading-[17px]">
 From real-time analytics to enhanced data protection, discover features engineered to scale, secure, and simplify your operations — without stretching your budget.
</h2>




<GetStartedButton/>


 </div>
{/* upper content(heading + subheading + button) holding div */}









{/* bottom image holding div */}
<div className="
2xl:h-[568px] 2xl:rounded-[24px] 2xl:overflow-hidden 2xl:self-stretch 2xl:flex 2xl:items-start
xl:h-[568px] xl:rounded-[24px] xl:overflow-hidden xl:self-stretch xl:flex xl:items-start
md:h-[568px] md:rounded-[24px] md:overflow-hidden md:self-stretch md:flex md:items-start
sm:h-[568px] sm:rounded-[24px] sm:overflow-hidden sm:self-stretch sm:flex sm:items-start">
  <img
    src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753510618/Depositphotos_315883278_XL_Large_yrh4vx.png"
    alt="Descriptive alt text"
    className="h-full w-full object-cover"
  />
</div>
{/* bottom image holding div */}









  </div>
  {/* content holding div */}












   </div>
   {/* main outer hero section div */}

  
  </>
  )
 
 }