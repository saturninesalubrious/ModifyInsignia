export default function BlogHeroSection () {


 return ( 
  <>
 
 <div className="flex flex-col items-center gap-[100px] flex-[1_0_0] bg-[#F9F9F7]  px-[100px] py-[45px] self-stretch">
  
  
  
  
  
  {/* internal content div holder */}
  <div className="flex flex-col items-center gap-[35px] self-stretch">
  

  {/* Top heading holder div */}
  <div className="flex items-center gap-[10px] py-[33px] px-0 self-stretch">
  
  <h1 className="flex-[1_0_0] text-[#001D21] font-[450] text-[62px] leading-[66px] tracking-[-1.86px] not-italic font-sans">
  Blog & articles
 </h1>
 
 </div>
   {/* Top heading holder div */}



{/* bottom holder div */}
  <div className="flex justify-between items-center self-stretch">
  


  <div className="flex w-[774px] flex-col items-start gap-[10px]">
  <img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753203415/Depositphotos_220768946_XL_1_sfdlwt.png" alt="Descriptive alt text" />
  </div>





  <div className="flex w-[354px] flex-col justify-between items-start self-stretch">


  <div className="flex flex-col items-start gap-[18px] self-stretch">
  
  <div className="flex items-start gap-[10px] p-[6px_10px] rounded-[4px] bg-[#EAEAE7]">
  <h3 className="flex h-[15px] flex-col justify-center flex-[1_0_0] text-[#2D4447] font-sans text-[14px] font-medium leading-[24.011px] tracking-[0.56px]">
  News
</h3>
</div>


<h1 className="self-stretch text-[#001D21] font-sans text-[36px] font-[450] leading-[41px] tracking-[-2.16px]">
Building resilience in business
</h1>


<p className="flex-1 text-[rgba(78,78,78,0.90)] font-sans text-[16px] font-[450] leading-[24px]">
Our Finance Insights Blog is dedicated to bringing you the latest news, expert advice, and actionable strategies to help you navigate the complexities of personal and business finance.
</p>


  </div>






  <button
  type="submit"
  className="text-white text-center font-[550] text-[15px] leading-[24.011px] tracking-[0.45px] font-sans         flex h-[48px] px-[24px] py-[16px] justify-center items-center gap-[10px] rounded-[12px] border border-[#D7D7D7] bg-[#001D21]"
>
  Read more
</button>
  
  </div>





  </div>
{/* bottom holder div */}

   </div>
 {/* internal content div holder */}
 
 </div>



  </>
  )
 
 }