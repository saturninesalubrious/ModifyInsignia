export default function FillFeaturesHeroSection () {


  return (
   <>
 
 
    {/* main outer hero section div */}
    <div className="
    flex flex-col items-start gap-[10px] self-stretch bg-[#001D21]
    px-[20px] py-[40px]
    sm:px-[40px] sm:py-[65px]
    md:p-[65px]
    lg:p-[65px]
    xl:p-[65px]
    2xl:px-[100px] 2xl:py-[65px]
    ">
 
 
 
 
   {/* content holding div */}
   <div className="
   flex flex-col items-center gap-[80px] self-stretch w-full
   sm:flex-col
   lg:max-w-screen-xl lg:mx-auto lg:flex-col
    xl:flex-col  xl:items-center xl:gap-[80px]
   2xl:max-w-screen-2xl 2xl:mx-auto 2xl:flex-col
   ">
 
 
 
  {/* top heading + sub-heading holding div */}
 {/* Added mx-auto to center this div horizontally when its width is less than parent's */}
 <div className="
   flex flex-col items-center gap-[20px] w-full self-stretch
   mx-auto /* This centers the div itself horizontally */
   lg:w-[690px]
 ">
 
 
 <h1 className="
 self-stretch text-[#FAFAFA] text-center font-sans font-medium tracking-[-1.44px]
 text-[36px] leading-[44px]
 sm:text-[40px] sm:leading-[50px]
 md:text-[48px] md:leading-[59px]
 ">
 Built for Performance, Designed for Impact
 </h1>
 
 
 <p className="
 self-stretch text-[rgba(250,250,250,0.75)] text-center font-inter text-[14px] font-medium leading-[23px]
 ">
 From AI-driven automation to secure cloud-native frameworks, our platform is packed with powerful features to help you build faster, operate smarter, and scale with confidence.
 </p>
 
 
 </div>
  {/* top heading + sub-heading holding div */}
 
 
  {/* bottom 3 divs holding div */}
  <div className="
  flex flex-col justify-center items-start gap-[20px] self-stretch
  xl:flex-row xl:items-center
  ">
 
 
 {/* 1st div card (Image card) */}
 <div className="
 flex items-center justify-center gap-[10px] self-stretch rounded-[24px] bg-center
 w-full h-[350px]
 md:h-[500px]
 xl:flex-[1_0_0]
 ">
   <img
     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753687926/Depositphotos_738276780_XL_Large_ut1pnx.png"
     alt="Descriptive Alt"
     className="
     w-full h-full object-cover rounded-[24px]
     "
   />
 </div>
 
 {/* 2nd div card (Image card) */}
 <div className="
 flex items-center justify-center gap-[10px] self-stretch rounded-[24px] bg-center
 w-full h-[350px]
 md:h-[500px]
 xl:flex-[1_0_0]
 ">
   <img
     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753550607/Depositphotos_295658812_XL_Large_puckuq.png"
     alt="Descriptive Alt"
     className="
     w-full h-full object-cover rounded-[24px]
     "
   />
 </div>
 
 {/* 3rd div card (Image card) */}
 <div className="
 flex items-center justify-center gap-[10px] self-stretch rounded-[24px] bg-center
 w-full h-[350px]
 md:h-[500px]
 xl:flex-[1_0_0]
 ">
   <img
     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753687965/Depositphotos_230914334_XL_Large_raa9ms.png"
     alt="Descriptive Alt"
     className="
     w-full h-full object-cover rounded-[24px]
     "
   />
 </div>
 
 
 </div>
  {/* bottom 3 divs holding div */}
 
 
   </div>
   {/* content holding div */}
 
 
    </div>
    {/* main outer hero section div */}
 
 
   </>
  )
 
 }