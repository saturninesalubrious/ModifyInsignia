
import ContactUsButton from "@/Utility components/ContactUsButton"

export default function Navbar () {

 return ( <>

  {/* 1st main outer div navbar holder */}
  <div className="flex px-[100px] py-[17px] justify-between items-center self-stretch bg-[#001D21]">
      
      
      {/* extreme left outer div*/}
      <div className="flex items-center gap-[52px]">
  

     {/* 1st link wrapping the Extreme left div holder icon + content */}
      <a href="/Home">
      <div className="flex items-center gap-x-2.5">
      <img
      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752835431/Group_18_pg1yqp.png"
      alt="Example"
      className="w-[36.999px] h-[32.148px]"
      />
      <h1 className="text-white font-medium text-[24px] leading-[121.011%] tracking-[-0.12px] font-sans">
      Insignia
      </h1>
      </div>
      </a>
      {/* 1st link wrapping the Extreme left div holder icon + content */}


      {/* 2nd div holding the main tabs of nav bar */}
      <div className="flex items-center gap-[40px]">
  

      <a href="/Home">
  <h2 className="text-white hover:text-[rgba(255,255,255,0.85)] font-medium text-[16px] leading-[24.011px] tracking-[-0.32px] font-sans [font-feature-settings:'liga'_off,'clig'_off] transition-colors duration-200">
    Home
  </h2>
</a>



      <a href="/Features">
      <h3 className="text-white/75 hover:text-[rgba(255,255,255,0.85)] font-normal text-[16px] leading-[24.011px] tracking-[-0.32px] font-sans [font-feature-settings:'liga'_off,'clig'_off]">
      Features
      </h3>
      </a>




      <a href="/AboutUs">
      <h3 className="text-white/75 hover:text-[rgba(255,255,255,0.85)] font-normal text-[16px] leading-[24.011px] tracking-[-0.32px] font-sans [font-feature-settings:'liga'_off,'clig'_off]">
      About Us
      </h3>
      </a>




      <a href="/Blog">
      <h3 className="text-white/75 hover:text-[rgba(255,255,255,0.85)] font-normal text-[16px] leading-[24.011px] tracking-[-0.32px] font-sans [font-feature-settings:'liga'_off,'clig'_off]">
      Blog
      </h3>
      </a>

      </div>
      {/* 2nd div holding the main tabs of nav bar */}



     
     </div>
     {/* extreme left outer div*/}
     


     {/* extreme right button*/}
     <ContactUsButton />
     {/* extreme right button*/}







    </div>
    {/* 1st main outer div navbar holder */}

 
 </>)
}

