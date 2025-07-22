export default function () {


 return ( 
  <>
 
 <div className="flex flex-col items-center gap-[100px] flex-[1_0_0] bg-[#F9F9F7]  px-[100px] py-[65px] self-stretch">
  
  
  
  
  
  {/* internal content div holder */}
 <div className="flex flex-col justify-center items-start gap-[55px] self-stretch">
 

  {/* Top heading holder div */}
 <div className="flex items-center gap-[10px] py-[33px] px-0 self-stretch">
  
 <h1 className="flex-[1_0_0] text-[#001D21] font-[450] text-[62px] leading-[66px] tracking-[-1.86px] not-italic font-sans">
 Reach out today
</h1>

</div>
  {/* Top heading holder div */}






 {/* bottom form holder div */}
  <div className="flex justify-between items-center self-stretch">
  


{/* form holder div */}
  <div className="flex w-[776px] flex-col justify-center items-start gap-[55px] self-stretch">
  
   

<div className="flex flex-col items-start gap-[29px] self-stretch">
  



<form className="flex flex-col items-start gap-[29px] self-stretch w-full">



{/* Full name */}
<div className="flex flex-col items-start gap-[17px] self-stretch">
  <label htmlFor="fullName" className="flex flex-col justify-center h-[15px] flex-[1_0_0] text-[#2D4447] text-[16px] leading-[24.011px] font-[500] not-italic font-sans [font-feature-settings:'liga_off','clig_off']">
    Full name
  </label>
  <input
    type="text"
    id="fullName"
    name="fullName"
    placeholder="Your Name"
    className="text-[#001D21]   text-[16px]   not-italic 
       font-sans    font-[475]        placeholder:text-[rgba(45,68,71,0.85)] placeholder:text-[16px] placeholder:leading-[24.011px] placeholder:font-[425] placeholder:tracking-normal placeholder:not-italic placeholder:font-sans placeholder:[font-feature-settings:'liga_off','clig_off']    flex h-[52px] px-[24px] py-0 flex-col justify-center items-start gap-[10px] flex-shrink-0 self-stretch rounded-[10px] border border-[#D7D7D7] focus:outline-none"
  />
</div>

{/* Email address */}
<div className="flex flex-col items-start gap-[17px] self-stretch">
  <label htmlFor="email" className="flex flex-col justify-center h-[15px] flex-[1_0_0] text-[#2D4447] text-[16px] leading-[24.011px] font-[500] not-italic font-sans [font-feature-settings:'liga_off','clig_off']">
    Email address
  </label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Your email address"
    className="text-[#001D21]   text-[16px]   not-italic 
       font-sans    font-[475]        placeholder:text-[rgba(45,68,71,0.75)] placeholder:text-[16px] placeholder:leading-[24.011px] placeholder:font-[425] placeholder:tracking-normal placeholder:not-italic placeholder:font-sans placeholder:[font-feature-settings:'liga_off','clig_off']    flex h-[52px] px-[24px] py-0 flex-col justify-center items-start gap-[10px] flex-shrink-0 self-stretch rounded-[10px] border border-[#D7D7D7] focus:outline-none"
  />
</div>

{/* Messages */}
<div className="flex flex-col items-start gap-[17px] self-stretch">
  <label htmlFor="message" className="flex flex-col justify-center h-[15px] flex-[1_0_0] text-[#2D4447] text-[16px] leading-[24.011px] font-[500] not-italic font-sans [font-feature-settings:'liga_off','clig_off']">
    Messages
  </label>
  <textarea
    id="message"
    name="message"
    rows={6} 
    placeholder="Your Message"
    className="text-[#001D21]   text-[16px]   not-italic 
       font-sans    font-[475]        placeholder:text-[rgba(45,68,71,0.75)] placeholder:text-[16px] placeholder:leading-[24.011px] placeholder:font-[425] placeholder:tracking-normal placeholder:not-italic placeholder:font-sans placeholder:[font-feature-settings:'liga_off','clig_off']    flex  px-[24px] py-[24px] flex-col justify-center items-start gap-[10px] flex-shrink-0 self-stretch rounded-[10px] border border-[#D7D7D7] focus:outline-none"
  >


  </textarea>
</div>



{/* Submit Button */}
<button
  type="submit"
  className="text-white text-center font-[550] text-[15px] leading-[24.011px] tracking-[0.45px] font-sans         flex h-[48px] px-[24px] py-[16px] justify-center items-center gap-[10px] rounded-[12px] border border-[#D7D7D7] bg-[#001D21]"
>
  Submit
</button>
</form>




</div>

 



  </div>

{/* form holder div */}




 {/* side promo */}
  <div className="flex w-[351px] p-[30px] justify-center items-center gap-[10px] rounded-[16px] bg-white">
 

  <div className="flex flex-col items-start gap-[30px] flex-[1_0_0]">





  <div className="flex flex-col items-start gap-[15px] self-stretch">
  <h3 className="flex flex-col justify-center h-[15px] flex-[1_0_0] text-[#2D4447] text-[16px] leading-[24.011px] font-[400] not-italic font-sans [font-feature-settings:'liga_off','clig_off']">
  Email:
  </h3>



  <h2 className="flex flex-col justify-center flex-[1_0_0] self-stretch text-[#2D4447] text-[20px] leading-[24.011px] font-[475] not-italic tracking-[-1.2px] font-sans [font-feature-settings:'liga_off','clig_off']">
  Consulting@gmail.com
</h2>

  </div>




  <div className="flex flex-col items-start gap-[15px] self-stretch">
  <h3 className="flex flex-col justify-center h-[15px] flex-[1_0_0] text-[#2D4447] text-[16px] leading-[24.011px] font-[400] not-italic font-sans [font-feature-settings:'liga_off','clig_off']">
  Phone:
  </h3>



  <h2 className="flex flex-col justify-center flex-[1_0_0] self-stretch text-[#2D4447] text-[20px] leading-[24.011px] font-[475] not-italic tracking-[-1.2px] font-sans [font-feature-settings:'liga_off','clig_off']">
  +1 (123) 456-7890
  </h2>

  </div>








  <div className="flex flex-col items-start gap-[15px] self-stretch">
  <h3 className="flex flex-col justify-center h-[15px] flex-[1_0_0] text-[#2D4447] text-[16px] leading-[24.011px] font-[400] not-italic font-sans [font-feature-settings:'liga_off','clig_off']">
  Office:
  </h3>



  <h2 className="flex flex-col justify-center flex-[1_0_0] self-stretch text-[#2D4447] text-[20px] leading-[24.011px] font-[475] not-italic tracking-[-1.2px] font-sans [font-feature-settings:'liga_off','clig_off']">
  456 Business Ave, New York, NY
  </h2>

  </div>








  <div className="flex flex-col items-start gap-[15px] self-stretch">
  <h3 className="flex flex-col justify-center h-[15px] flex-[1_0_0] text-[#2D4447] text-[16px] leading-[24.011px] font-[400] not-italic font-sans [font-feature-settings:'liga_off','clig_off']">
  Follow Us:
  </h3>



  <div className="flex items-center gap-[15px] self-stretch">



  <div className="flex w-[42px] h-[42px] justify-center items-center gap-[10px] aspect-square rounded-[39px] bg-[#0C393F]">
  <img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188890/Vector_13_qjtjgu.png" alt="icon" className="w-[20px] h-[16px] shrink-0" />
  </div>





  <div className="flex w-[42px] h-[42px] justify-center items-center gap-[10px] aspect-square rounded-[39px] bg-[#0C393F]">
  <img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188880/Vector_12_i8pdf0.png" alt="icon" className="w-[20px] h-[20px] shrink-0" />
  </div>







  <div className="flex w-[42px] h-[42px] justify-center items-center gap-[10px] aspect-square rounded-[39px] bg-[#0C393F]">
  <img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188868/Group_81783_zat013.png" alt="icon" className="w-[20px] h-[20px] shrink-0" />
  </div>







  <div className="flex w-[42px] h-[42px] justify-center items-center gap-[10px] aspect-square rounded-[39px] bg-[#0C393F]">
<img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188860/Vector_11_mofa7b.png" alt="icon" className="w-[20px] h-[16px] shrink-0" />
</div>








  </div>

  </div>









  
  </div>


 </div>
 {/* side promo */}





</div>
{/* bottom form holder div */}

 </div>
 {/* internal content div holder */}
 
 </div>
  </>
  )
 
 }