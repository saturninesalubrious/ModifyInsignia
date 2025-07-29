
import GetStartedButton from "@/Utility components/GetStartedButton"

export default function HeroSection () {


 return ( 
  <>
   

   {/* main outer hero section div */}
   <div className="flex flex-col items-start gap-[10px] p-[64px] px-[100px] self-stretch bg-[#001D21]">
   

   {/* topmost heading and paragraph and button and picture holder div */}
   <div className="flex flex-col items-start gap-[26px] self-stretch">
   

   {/* top-inner div holding heading para and button */}
   <div className="flex flex-col items-start gap-[25px] w-[633px]">
  
   <h1 className="self-stretch text-[#CDCBFF] font-medium text-[64px] leading-[69px] tracking-[-2.56px] font-sans">
   Scalable and flexible infrastructure to grow
   </h1>


   <p className="self-stretch text-[#BFBEBE] font-medium text-[14px] leading-[23px] font-sans">
   From real-time analytics to enhanced data protection, discover features engineered to scale, secure, and simplify your operations — without stretching your budget.
   </p>


   {/* extreme right button*/}
   <GetStartedButton/>
     {/* extreme right button*/}



 


  </div>
  {/* top-inner div holding heading para and button */}


  <img
  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752851458/Frame_1000004798_wdbj7v.png"
  alt="Description"
  className="flex h-[568px] p-[10px] items-start gap-[10px] flex-shrink-0 self-stretch rounded-[24px]"
/>


   

   </div>
   {/* topmost heading and paragraph and button and picture holder div */}


   </div>
   {/* main outer hero section div */}

  
  </>
  )
 
 }