export default function OurCapabilitiesHeroSection () {
 return (
  <>
   {/* main outer hero section div */}
   <div className="
    flex flex-col items-start gap-[10px] self-stretch bg-[#F9F9F7]
    px-[20px] py-[65px]
  sm:px-[40px] sm:py-[65px]
    
    md:p-[65px]
    2xl:px-[100px]  bg-cover bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1754292655/download_4_glqbos.png')]
   ">
    {/* content holding div */}
    <div className="
     flex flex-col justify-center items-center gap-[50px] self-stretch
     lg:flex-row lg:items-center lg:gap-[50px]
     xl:gap-[50px]
     container mx-auto
    ">
     
     {/* left heading holding div */}
 {/* Default to full width, then specific width for larger screens */}
 <div className="
   flex flex-col items-start gap-[20px] /* Base for below sm and up */
   lg:w-[450px]
   xl:w-[550px]
   2xl:w-[550px]
   
 ">
 
 
 <h1 className="
 self-stretch text-[#FAFAFA] text-start font-sans font-medium tracking-[-1.44px] /* Base text styles */
 text-[36px] leading-[44px] /* Default smaller text for small screens */
 md:text-[48px] md:leading-[59px] /* Adjust for md and up */
 ">
Reimagine Possibility with Strategic AI
 </h1>
 
 
 <p className="
 self-stretch text-[rgba(250,250,250,0.75)] text-start font-sans text-[14px] font-medium leading-[23px] /* Base for all screens */
 ">
From Generative AI to Computer Vision, we build intelligent systems that are strategic, accountable, and engineered for tomorrow.
 </p>
 
 
 <button className="
 flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] bg-white text-[#1D1D1D] text-center text-[15px] leading-[16px] tracking-[0.45px] font-[550] font-sans /* Base for all screens */
 ">
   Get Started
 </button>
 
 
 </div>
  {/* left heading holding div */}



     {/* image holding div */}
     <div className="
      flex items-center gap-[10px] flex-1 self-stretch rounded-[24px]
     ">
      <img
       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1754292768/Frame_1000005108_hk5hsk.png"
       alt="A team of professionals collaborating in an office setting."
       className="
        w-full h-full object-cover rounded-[24px]
       "
      />
     </div>
     {/* image holding div */}
    </div>
    {/* content holding div */}
   </div>
   {/* main outer hero section div */}
  </>
 );
}