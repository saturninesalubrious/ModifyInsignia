export default function FillAboutUsSection () {


  return (
   <>
 
 
    {/* main outer hero section div */}
    {/* Base styles apply for all screens, responsive padding adjusts for larger ones */}
    <div className="
    flex flex-col items-start gap-[10px] self-stretch bg-[#001D21] /* Base for below sm and up */
    px-[20px] py-[40px] /* Default padding for extra small screens */
    sm:px-[40px] sm:py-[65px]
    md:p-[65px] md:py-[80px]
    lg:p-[65px] lg:py-[100px]
    xl:px-[65px] xl:py-[140px]
    2xl:px-[100px] 2xl:py-[140px]">
 
 
 
 
   {/* content holding div */}
   {/* Default to column layout for small screens, then row for larger, constrain width for larger screens */}
   <div className="
   flex flex-col justify-center items-start gap-[50px] self-stretch w-full /* Base for below sm and up */
   lg:max-w-screen-xl lg:mx-auto /* Constrain and center for lg and up */
   xl:flex-row xl:items-center xl:gap-[50px] xl:max-w-screen-xl xl:mx-auto /* Change to row for xl, adjust gap */
   2xl:flex-row 2xl:items-center 2xl:gap-[75px] 2xl:max-w-screen-2xl 2xl:mx-auto /* Adjust gap and max-width for 2xl */
   ">
 
 
  {/* left heading holding div */}
 {/* Default to full width, then specific width for larger screens */}
 <div className="
   flex flex-col items-start gap-[20px] w-full /* Base for below sm and up */
   lg:w-[690px] /* Apply specific width for lg and up */
   xl:w-[690px]
   2xl:w-[690px]
 ">
 
 
 <h1 className="
 self-stretch text-[#FAFAFA] text-start font-sans font-medium tracking-[-1.44px] /* Base text styles */
 text-[36px] leading-[44px] /* Default smaller text for small screens */
 md:text-[48px] md:leading-[59px] /* Adjust for md and up */
 ">
 Built for Performance, Designed for Impact
 </h1>
 
 
 <p className="
 self-stretch text-[rgba(250,250,250,0.75)] text-start font-sans text-[14px] font-medium leading-[23px] /* Base for all screens */
 ">
 From AI-driven automation to secure cloud-native frameworks, our platform is packed with powerful features to help you build faster, operate smarter, and scale with confidence.
 </p>
 
 
 <button className="
 flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] bg-white text-[#1D1D1D] text-center text-[15px] leading-[16px] tracking-[0.45px] font-[550] font-sans /* Base for all screens */
 ">
   Get Started
 </button>
 
 
 </div>
  {/* left heading holding div */}
 
 
 
 
   {/* image holding div */}
 {/* Default width and height, then flex-1 for larger screens */}
 <div className="
 flex items-center justify-center gap-[10px] self-stretch rounded-[24px] bg-lightgray bg-cover bg-no-repeat bg-center /* Base for below sm and up */
 w-full h-[300px] /* Default width and height for small screens */
 lg:h-[400px] /* Adjust height for lg */
 xl:flex-[1_0_0] xl:h-auto /* Allow to grow/shrink for xl and up, auto height */
 2xl:flex-[1_0_0] 2xl:h-auto
 ">
   <img
     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753687926/Depositphotos_738276780_XL_Large_ut1pnx.png"
     alt="Descriptive Alt"
     className="
     w-full h-full object-cover rounded-[24px] /* Base for all screens */
     "
   />
 </div>
   {/* image holding div */}
 
 
 
 
   </div>
   {/* content holding div */}
 
 
 
 
    </div>
    {/* main outer hero section div */}
 
 
   </>
   )
 
  }