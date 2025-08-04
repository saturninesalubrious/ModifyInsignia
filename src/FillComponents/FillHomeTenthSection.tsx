export default function FillHomeTenthSection () {


 return ( 
  <>
   

   {/* main outer hero section div
   https://res.cloudinary.com/dpxtrzlia/image/upload/v1753884762/1676242354868_1_1_jjkyvi.png
   Saket Srivastava
    Senior Data Scientist
    https://res.cloudinary.com/dpxtrzlia/image/upload/v1753884777/1675565881414_1_wfbyog.png
    Kayla Smith
    Recruitment Manager
   https://res.cloudinary.com/dpxtrzlia/image/upload/v1753884769/1516627207391_1_tzbdbs.png
   Suharsh Dikshit
   Founder
    
    

    

   */}
  <div className="
     bg-[#001D21] /* Background color for the section */
       sm:flex sm:flex-col sm:items-start sm:gap-[10px] sm:self-stretch sm:px-[40px] sm:py-[65px] sm:bg-[#001D21]
       md:flex md:flex-col md:items-start md:gap-[10px] md:p-[65px] md:self-stretch md:bg-[#001D21]
       lg:flex lg:flex-col lg:items-start lg:gap-[10px] lg:p-[65px] lg:self-stretch lg:bg-[#001D21]
       xl:flex xl:flex-col xl:items-start xl:gap-[10px] xl:p-[65px] xl:self-stretch xl:bg-[#001D21]
       2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch 2xl:px-[100px] 2xl:py-[65px] 2xl:bg-[#001D21]
     ">
       {/* content holding div */}
       {/* This div will now stretch below sm and not beyond 2xl, with consistent styling */}
       <div className="
         flex flex-col items-center gap-[80px] w-full mx-auto /* Base styles for below sm and up */
         max-w-none /* Remove any default max-width for smaller screens */
         sm:max-w-none /* Continue to not have max-width for sm */
         md:max-w-none /* Continue to not have max-width for md */
         lg:max-w-screen-xl /* Constrain for lg and xl */
         xl:max-w-screen-xl /* Keep constrained for xl */
         2xl:max-w-screen-2xl /* Do not stretch beyond 2xl */
       ">

         {/* top heading + sub-heading holding div */}
         {/* Ensure base styles for below md, then specific widths for larger breakpoints */}
         <div className="
           flex flex-col items-center gap-[20px] w-full mx-auto /* Base styles for below md and up */
           lg:w-[690px]
           xl:w-[690px]
           2xl:w-[690px]
         ">
           <h1 className="
             text-[#FAFAFA] text-center font-sans text-[48px] font-medium leading-[59px] tracking-[-1.44px] /* Base text styles */
             self-stretch /* Allow stretching within its parent */
           ">
             What Our Clients Are Saying
           </h1>
           <p className="
             text-[rgba(250,250,250,0.75)] text-center font-inter text-[14px] font-medium leading-[23px] /* Base text styles */
             self-stretch /* Allow stretching within its parent */
           ">
             Our users trust us to deliver scalable, reliable, and intuitive tech solutions that make a real difference in the modern world
           </p>
         </div>
         {/* top heading + sub-heading holding div */}

         {/* bottom 3 divs holding div */}
         {/* Ensure base styles for below sm, then specific flex-direction for larger breakpoints */}
         <div className="
           flex flex-col justify-center items-start gap-[20px] self-stretch w-full flex-wrap /* Base styles for below sm and up */
           sm:flex-col sm:justify-center sm:items-start sm:gap-[20px] sm:self-stretch
           md:flex-col md:justify-center md:items-start md:gap-[20px] md:self-stretch
           lg:flex-col lg:justify-center lg:items-start lg:gap-[20px] lg:self-stretch
           xl:flex-row xl:items-center xl:gap-[65px] xl:self-stretch
           2xl:flex-row 2xl:items-center 2xl:gap-[80px] 2xl:self-stretch
         ">
           {/* 1st div card */}
           <div className="
             flex p-[40px] flex-col items-start gap-[10px] rounded-[24px] flex-[1_0_0] /* Base styles */
           ">
             {/* content holding main div */}
             <div className="
               flex flex-col justify-center items-start gap-[30px] self-stretch /* Base styles */
             ">
               {/* upper info holding div */}
               <div className="
                 flex flex-col items-start gap-[16px] self-stretch /* Base styles */
               ">
                 <h2 className="
                   flex h-[31px] flex-col justify-center self-stretch text-[#F9F9F7] font-sans text-[20px] font-medium leading-[31px] tracking-[-0.6px] /* Base styles */
                 ">
                   Outstanding Service
                 </h2>
                 <div className="
                   flex items-start gap-[10px] /* Base styles */
                 ">
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                 </div>

                 <h2 className="
                   self-stretch text-[rgba(249,249,247,0.85)] font-sans text-[16px] font-medium leading-[25px] /* Base styles */
                 ">
                   The platform has revolutionized how we manage integrations. It’s fast, secure, and incredibly easy to deploy—saved us weeks in dev time.
                 </h2>
               </div>
               {/* upper info holding div */}

               {/* bottom info holding div */}
               <div className="
                 flex items-center gap-[12px] self-stretch /* Base styles */
               ">
                 <div className="
                   flex w-[55px] h-[55px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                 ">
                   <img
                     src=" https://res.cloudinary.com/dpxtrzlia/image/upload/v1753884762/1676242354868_1_1_jjkyvi.png"
                     alt="Icon"
                     className="w-full h-full object-contain"
                   />
                 </div>
                 <div className="
                   flex flex-col justify-center items-start gap-[7px] flex-[1_0_0] /* Base styles */
                 ">
                   <h2 className="
                     self-stretch text-[#F9F9F7] font-sans text-[16px] font-medium leading-[24px] tracking-[-0.48px] /* Base styles */
                   ">
                    Saket Srivastava
                   </h2>
                   <h3 className="
                     self-stretch text-white/65 font-sans text-[16px] font-medium leading-[24px] tracking-[-0.48px] /* Base styles */
                   ">
                   Senior Data Scientist
                   </h3>
                 </div>
               </div>
               {/* bottom info holding div */}
             </div>
             {/* content holding main div */}
           </div>
           {/* 1st div card */}

           {/* 2nd div card */}
           <div className="
             flex p-[40px] flex-col items-start gap-[10px] rounded-[24px] flex-[1_0_0] /* Base styles */
           ">
             {/* content holding main div */}
             <div className="
               flex flex-col justify-center items-start gap-[30px] self-stretch /* Base styles */
             ">
               {/* upper info holding div */}
               <div className="
                 flex flex-col items-start gap-[16px] self-stretch /* Base styles */
               ">
                 <h2 className="
                   flex h-[31px] flex-col justify-center self-stretch text-[#F9F9F7] font-sans text-[20px] font-medium leading-[31px] tracking-[-0.6px] /* Base styles */
                 ">
                   Exceptional
                 </h2>
                 <div className="
                   flex items-start gap-[10px] /* Base styles */
                 ">
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                 </div>

                 <h2 className="
                   self-stretch text-[rgba(249,249,247,0.85)] font-sans text-[16px] font-medium leading-[25px] /* Base styles */
                 ">
                   From automation to analytics, everything just works. It's like having a second engineering team built in.Support is lightning-fast too!
                 </h2>
               </div>
               {/* upper info holding div */}

               {/* bottom info holding div */}
               <div className="
                 flex items-center gap-[12px] self-stretch /* Base styles */
               ">
                 <div className="
                   flex w-[55px] h-[55px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                 ">
                   <img
                     src="    https://res.cloudinary.com/dpxtrzlia/image/upload/v1753884777/1675565881414_1_wfbyog.png"
                     alt="Icon"
                     className="w-full h-full object-contain"
                   />
                 </div>
                 <div className="
                   flex flex-col justify-center items-start gap-[7px] flex-[1_0_0] /* Base styles */
                 ">
                   <h2 className="
                     self-stretch text-[#F9F9F7] font-sans text-[16px] font-medium leading-[24px] tracking-[-0.48px] /* Base styles */
                   ">
                    Kayla Smith
                   </h2>
                   <h3 className="
                     self-stretch text-white/65 font-sans text-[16px] font-medium leading-[24px] tracking-[-0.48px] /* Base styles */
                   ">
                   Recruitment Manager
                   </h3>
                 </div>
               </div>
               {/* bottom info holding div */}
             </div>
             {/* content holding main div */}
           </div>
           {/* 2nd div card */}

           {/* 3rd div card */}
           <div className="
             flex p-[40px] flex-col items-start gap-[10px] rounded-[24px] flex-[1_0_0] /* Base styles */
           ">
             {/* content holding main div */}
             <div className="
               flex flex-col justify-center items-start gap-[30px] self-stretch /* Base styles */
             ">
               {/* upper info holding div */}
               <div className="
                 flex flex-col items-start gap-[16px] self-stretch /* Base styles */
               ">
                 <h2 className="
                   flex h-[31px] flex-col justify-center self-stretch text-[#F9F9F7] font-sans text-[20px] font-medium leading-[31px] tracking-[-0.6px] /* Base styles */
                 ">
                   Affordable
                 </h2>
                 <div className="
                   flex items-start gap-[10px] /* Base styles */
                 ">
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                   <div className="
                     flex w-[15px] h-[15px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                   ">
                     <img
                       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752937565/Frame_1000005010_rzqbjg.png"
                       alt="Icon"
                       className="w-full h-full object-contain"
                     />
                   </div>
                 </div>

                 <h2 className="
                   self-stretch text-[rgba(249,249,247,0.85)] font-sans text-[16px] font-medium leading-[25px] /* Base styles */
                 ">
                   I was honestly surprised at how cost-effective the platform is. We’re getting enterprise-level performance without the enterprise-level pricing.
                 </h2>
               </div>
               {/* upper info holding div */}

               {/* bottom info holding div */}
               <div className="
                 flex items-center gap-[12px] self-stretch /* Base styles */
               ">
                 <div className="
                   flex w-[55px] h-[55px] justify-center items-center gap-[10px] shrink-0 /* Base styles */
                 ">
                   <img
                     src=" https://res.cloudinary.com/dpxtrzlia/image/upload/v1753884769/1516627207391_1_tzbdbs.png"
                     alt="Icon"
                     className="w-full h-full object-contain"
                   />
                 </div>
                 <div className="
                   flex flex-col justify-center items-start gap-[7px] flex-[1_0_0] /* Base styles */
                 ">
                   <h2 className="
                     self-stretch text-[#F9F9F7] font-sans text-[16px] font-medium leading-[24px] tracking-[-0.48px] /* Base styles */
                   ">
                     Suharsh Dikshit
                   </h2>
                   <h3 className="
                     self-stretch text-white/65 font-sans text-[16px] font-medium leading-[24px] tracking-[-0.48px] /* Base styles */
                   ">
                     Founder
                   </h3>
                 </div>
               </div>
               {/* bottom info holding div */}
             </div>
             {/* content holding main div */}
           </div>
           {/* 3rd div card */}
         </div>
         {/* bottom 3 divs holding div */}
       </div>
       {/* content holding div */}
     </div>
   {/* main outer hero section div */}

  
  </>
  )
 
 }