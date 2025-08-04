import FooterGetStartedButton from "@/ButtonVariants/FooterGetStarted";
import FbNavigationalButton from "@/ButtonVariants/Social";

import InstaNavigationalButton from "@/ButtonVariants/Social2";
import YoutubeNavigationalButton from "@/ButtonVariants/Social3";
import TwitterNavigationalButton from "@/ButtonVariants/Social4";

export default function FillFooter () {


 return ( 
  <>
   

   {/* main outer hero section div */}
   <div className="
   flex flex-col items-start gap-[10px] self-stretch px-[40px] py-[65px] bg-[#001D21]
   sm:px-[40px] sm:py-[65px]
   md:px-[65px] md:py-[65px]
   lg:px-[100px] lg:py-[65px] 
   xl:py-[65px] xl:px-[100px]
   2xl:px-[100px] 2xl:py-[65px] 
   ">
  





  {/* content holding div */}
  <div className="flex flex-col items-center gap-20 self-stretch px-5 py-10 md:gap-20 md:px-10 lg:gap-[80px] lg:px-[65px] lg:max-w-screen-2xl lg:mx-auto">
  {/* top heading + sub-heading holding div */}
  <div className="
  flex w-full flex-col items-center gap-[20px] self-stretch py-[30px] justify-between border-b-[1.5px] border-[#2A3839] lg:flex-col xl:flex-row 2xl:flex-row
  
  
  ">
    <h1 className="self-stretch text-[#CDCBFF] text-center font-sans text-[48px] font-medium leading-[59px] tracking-[-1.44px]">
      Ready to elevate your business?
    </h1>
    <FooterGetStartedButton/>
  </div>

  {/* content holding div */}
  <div className="flex flex-col items-center gap-[100px] self-stretch justify-center w-full lg:flex-row lg:items-start lg:gap-[100px] xl:gap-[200px] 2xl:gap-[350px]">
    <div className="flex flex-col items-start justify-between gap-[75px] self-stretch flex-1 w-full text-center lg:text-left">
      <p className="self-stretch text-[14px] leading-[23px] font-medium text-[#A6B0B1] font-sans text-center lg:text-start">
        Driven by a passion for design, strategy, and technology, our team works closely with businesses across industries to unlock real value. Whether it’s scaling digital products, revamping user experiences, or engineering intelligent platforms—our journey has always been about measurable growth and meaningful outcomes.
      </p>
      <div className="flex flex-row items-center justify-around gap-[15px] self-stretch w-full sm:justify-around md:justify-center md:gap-[45px] lg:justify-start lg:gap-[15px]">
        <FbNavigationalButton/>
        <InstaNavigationalButton/>
        <YoutubeNavigationalButton/>
        <TwitterNavigationalButton/>
      </div>
    </div>

    {/* image holding div */}
    <div className=" flex flex-row items-center gap-[55px] flex-1 w-full rounded-[24px]  p-[30px] lg:flex-row lg:items-start lg:gap-[100px] lg:flex-1 sm:flex-col md:flex-row">
      {/* 1st divs holding div */}
      <div className="flex flex-col items-center gap-[40px] flex-1   ">
        <div className="flex flex-col items-start gap-[50px] rounded-[20px]">
          <h2 className="text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px] w-auto">
            Home
          </h2>
        </div>
        <div className="flex flex-col items-center gap-[50px] rounded-[20px]">
          <h2 className="text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px] w-auto">
            About Us
          </h2>
        </div>
      </div>
      {/* 2nd divs holding div */}
      <div className="flex flex-col items-center gap-[40px] flex-1 ">
        <div className="flex flex-col items-start gap-[50px] rounded-[20px]">
          <h2 className="text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px] w-auto">
            Features
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[50px] rounded-[20px]">
          <h2 className="text-[#FAFAFA] font-sans font-medium text-[18px] leading-[27px] tracking-[-0.54px] w-auto">
            Blogs
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>
  {/* content holding div */}




















   </div>
   {/* main outer hero section div */}

  
  </>
  )
 
 }