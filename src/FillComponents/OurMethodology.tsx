export default function OurMethodologySection () {
 return (
   <>
     {/* main outer hero section div */}
     {/* Base styles apply for all screens, padding adjusts for larger ones */}
     <div className="
       flex flex-col items-start gap-[10px] self-stretch bg-[#ffff] /* Base styles for below sm and up */
       px-[20px] py-[40px] /* Default padding for extra small screens */
       sm:px-[40px] sm:py-[65px] /* Adjust padding for small screens */
       md:p-[65px] /* Adjust padding for medium screens, py will be 65px as it cascades from sm */
       lg:p-[65px] /* Adjust padding for large screens */
       xl:p-[65px] /* Adjust padding for extra-large screens */
       2xl:px-[100px] 2xl:py-[65px] /* Adjust padding for 2xl screens */
     ">

       {/* content holding div */}
       {/* Default to column layout for small screens, change to row for xl and up. Constrain width for larger screens */}
       <div className="
         flex flex-col items-center gap-[80px] self-stretch w-full /* Base styles for below sm and up, default to full width */
         lg:max-w-screen-xl lg:mx-auto /* Constrain width and center for large screens and up */
         xl:max-w-screen-xl xl:mx-auto /* IMPORTANT: Constrain width and center for XL and 2XL */
         2xl:max-w-screen-xl 2xl:mx-auto /* Ensures component does not stretch beyond XL */
       ">

         {/* top heading + sub-heading holding div */}
         {/* Base flex, width, and centering for this div. Specific width for lg and up. */}
         <div className="
           flex flex-col items-center gap-[20px] w-full self-stretch mx-auto /* Base styles for below sm and up, centers the div itself */
           lg:w-[690px] /* Set specific width for lg and up */
         ">

           <h1 className="
             self-stretch text-[#001D21] text-center font-sans font-medium tracking-[-1.44px] /* Base text styles for all screens */
             text-[36px] leading-[44px] /* Default smaller text size for extra small screens */
             sm:text-[40px] sm:leading-[50px] /* Adjust text size for small screens */
             md:text-[48px] md:leading-[59px] /* Adjust text size for medium screens and up */
           ">
           Beyond Agile Practices: Architecting High-Velocity Delivery
           </h1>

           <p className="
             self-stretch text-[rgba(0,29,33,0.65)] text-center font-inter text-[14px] font-medium leading-[23px] /* Base styles for all screens */
           ">
            Beyond Agile Practices: Architecting High-Velocity Delivery

           </p>

         </div>
         {/* top heading + sub-heading holding div */}

        {/* bottom 4 divs holding div (contains 4 mini-divs) */}
         {/* This parent div manages wrapping, spacing, and centering for the cards */}
         {/* IMPORTANT: items-stretch ensures all cards in a row have equal height */}
         <div className="
           flex flex-wrap justify-center items-stretch content-start /* Base properties for wrapping and starting alignment,  for equal height */
           gap-[20px] self-stretch /* Default gap for extra small screens */
           sm:gap-[30px] /* Adjust gap for small screens */
           md:gap-[40px] /* Adjust gap for medium screens */
           lg:gap-[104px] /* Adjust gap for large screens (for 2 cards per row) */
           xl:gap-[80px] /* Adjust gap for extra-large screens (for 2 cards per row) */
           2xl:gap-[68px] /* Adjust gap for 2xl screens (for 2 cards per row) */
         ">

           {/* mini div (card structure) - 1 of 4 */}
           <div className="
             flex flex-col items-start gap-[10px] bg-[#F3F4F2] rounded-[14px] p-[20px] /* Base card styling */
             h-auto /* Allow height to adjust based on content */
             w-full mx-auto flex-none /* Default full width for extra small screens, centers, and prevents grow/shrink */
             sm:flex-none /* Specific width and centering for small screens, prevents grow/shrink */
             md:basis-[calc(50%-20px)] md:grow md:shrink md:mx-0
             lg:basis-[calc(50%-52px)] lg:grow lg:shrink lg:mx-0 /* Grow/shrink for lg, preferred basis for 2 cards per row, remove centering */
             xl:basis-[calc(50%-40px)] xl:grow xl:shrink xl:mx-0 /* Grow/shrink for xl, preferred basis for 2 cards per row, remove centering */
             2xl:basis-[calc(50%-34px)] 2xl:grow 2xl:shrink 2xl:mx-0 /* Grow/shrink for 2xl, preferred basis for 2 cards per row, remove centering */
           ">
             {/* main internal div content here */}
             <div className="
               flex flex-col items-start gap-[25px] self-stretch /* Base styles for all screens */
             ">
               {/*icon holding div */}
               <div className="
                 flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[100px] border bg-[#001D21] /* Base styles for all screens */
               ">
                 <div className="
                   flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0 /* Base styles for all screens */
                 ">
                   <img
                     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753041259/Vector_10_co3ic6.png"
                     alt="Icon"
                     className="w-full h-full object-contain" /* Base styles for all screens */
                   />
                 </div>
               </div>
               {/*icon holding div */}

               {/* bottom div (text content) */}
               <div className="
                 flex flex-col justify-center items-start gap-[10px] self-stretch /* Base styles for all screens */
               ">
                 <h2 className="
                   self-stretch text-[#001D21] font-medium text-[20px] leading-[27px] tracking-[-0.6px] font-sans /* Base styles for all screens */
                 ">
                  DevOps Beyond Tooling
                 </h2>
                 <p className="
                   self-stretch text-[#4E4E4E] text-[16px] leading-[23px] font-[450] font-sans /* Base styles for all screens */
                 ">
                   From CI/CD pipelines to cloud-native IaC provisioning, we engineer DevOps pipelines with one goal: frictionless flow. Every integration, test, and deployment cycle maps to traceable business impact, not just technical hygiene.
                 </p>
               </div>
               {/* bottom div */}
             </div>
             {/* main internal div content here */}
           </div>

           {/* mini div (card structure) - 2 of 4 */}
           <div className="
             flex flex-col items-start gap-[10px] bg-[#F3F4F2] rounded-[14px] p-[20px] /* Base card styling */
             h-auto /* Allow height to adjust based on content */
             w-full mx-auto flex-none /* Default full width for extra small screens, centers, and prevents grow/shrink */
             sm:flex-none /* Specific width and centering for small screens, prevents grow/shrink */
             md:basis-[calc(50%-20px)] md:grow md:shrink md:mx-0
             lg:basis-[calc(50%-52px)] lg:grow lg:shrink lg:mx-0 /* Grow/shrink for lg, preferred basis for 2 cards per row, remove centering */
             xl:basis-[calc(50%-40px)] xl:grow xl:shrink xl:mx-0 /* Grow/shrink for xl, preferred basis for 2 cards per row, remove centering */
             2xl:basis-[calc(50%-34px)] 2xl:grow 2xl:shrink 2xl:mx-0 /* Grow/shrink for 2xl, preferred basis for 2 cards per row, remove centering */
           ">
             {/* main internal div content here */}
             <div className="
               flex flex-col items-start gap-[25px] self-stretch /* Base styles for all screens */
             ">
               {/*icon holding div */}
               <div className="
                 flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[100px] border bg-[#001D21] /* Base styles for all screens */
               ">
                 <div className="
                   flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0 /* Base styles for all screens */
                 ">
                   <img
                     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753006098/Vector_2_x5e4bj.png"
                     alt="Icon"
                     className="w-full h-full object-contain" /* Base styles for all screens */
                   />
                 </div>
               </div>
               {/*icon holding div */}

               {/* bottom div (text content) */}
               <div className="
                 flex flex-col justify-center items-start gap-[10px] self-stretch /* Base styles for all screens */
               ">
                 <h2 className="
                   self-stretch text-[#001D21] font-medium text-[20px] leading-[27px] tracking-[-0.6px] font-sans /* Base styles for all screens */
                 ">
                  Cross-Functional Pod Formation
                 </h2>
                 <p className="
                   self-stretch text-[#4E4E4E] text-[16px] leading-[23px] font-[450] font-sans /* Base styles for all screens */
                 ">
                   We help you compose, coach, and evolve lean product teams that think like startups but deliver like mature enterprises. We blend product ownership, UX, engineering, and QA into autonomous, aligned, high-trust squads.
                 </p>
               </div>
               {/* bottom div */}
             </div>
             {/* main internal div content here */}
           </div>

           {/* mini div (card structure) - 3 of 4 */}
           <div className="
             flex flex-col items-start gap-[10px] bg-[#F3F4F2] rounded-[14px] p-[20px] /* Base card styling */
             h-auto /* Allow height to adjust based on content */
             w-full mx-auto flex-none /* Default full width for extra small screens, centers, and prevents grow/shrink */
             sm:flex-none /* Specific width and centering for small screens, prevents grow/shrink */
             md:basis-[calc(50%-20px)] md:grow md:shrink md:mx-0
             lg:basis-[calc(50%-52px)] lg:grow lg:shrink lg:mx-0 /* Grow/shrink for lg, preferred basis for 2 cards per row, remove centering */
             xl:basis-[calc(50%-40px)] xl:grow xl:shrink xl:mx-0 /* Grow/shrink for xl, preferred basis for 2 cards per row, remove centering */
             2xl:basis-[calc(50%-34px)] 2xl:grow 2xl:shrink 2xl:mx-0 /* Grow/shrink for 2xl, preferred basis for 2 cards per row, remove centering */
           ">
             {/* main internal div content here */}
             <div className="
               flex flex-col items-start gap-[25px] self-stretch /* Base styles for all screens */
             ">
               {/*icon holding div */}
               <div className="
                 flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[100px] border bg-[#001D21] /* Base styles for all screens */
               ">
                 <div className="
                   flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0 /* Base styles for all screens */
                 ">
                   <img
                     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753006109/Vector_3_xgj80p.png"
                     alt="Icon"
                     className="w-full h-full object-contain" /* Base styles for all screens */
                   />
                 </div>
               </div>
               {/*icon holding div */}

               {/* bottom div (text content) */}
               <div className="
                 flex flex-col justify-center items-start gap-[10px] self-stretch /* Base styles for all screens */
               ">
                 <h2 className="
                   self-stretch text-[#001D21] font-medium text-[20px] leading-[27px] tracking-[-0.6px] font-sans /* Base styles for all screens */
                 ">
                   Cultural Change as a Service
                 </h2>
                 <p className="
                   self-stretch text-[#4E4E4E] text-[16px] leading-[23px] font-[450] font-sans /* Base styles for all screens */
                 ">
                   Agile without mindset is chaos in motion. We lead from the front to help clients break silos, evolve incentive systems, and embed psychological safety—engineering cultural resilience alongside technical agility
                 </p>
               </div>
               {/* bottom div */}
             </div>
             {/* main internal div content here */}
           </div>

           {/* mini div (card structure) - 4 of 4 */}
           <div className="
             flex flex-col items-start gap-[10px] bg-[#F3F4F2] rounded-[14px] p-[20px] /* Base card styling */
             h-auto /* Allow height to adjust based on content */
             w-full mx-auto flex-none /* Default full width for extra small screens, centers, and prevents grow/shrink */
             sm:flex-none /* Specific width and centering for small screens, prevents grow/shrink */
             md:basis-[calc(50%-20px)] md:grow md:shrink md:mx-0
             lg:basis-[calc(50%-52px)] lg:grow lg:shrink lg:mx-0 /* Grow/shrink for lg, preferred basis for 2 cards per row, remove centering */
             xl:basis-[calc(50%-40px)] xl:grow xl:shrink xl:mx-0 /* Grow/shrink for xl, preferred basis for 2 cards per row, remove centering */
             2xl:basis-[calc(50%-34px)] 2xl:grow 2xl:shrink 2xl:mx-0 /* Grow/shrink for 2xl, preferred basis for 2 cards per row, remove centering */
           ">
             {/* main internal div content here */}
             <div className="
               flex flex-col items-start gap-[25px] self-stretch /* Base styles for all screens */
             ">
               {/*icon holding div */}
               <div className="
                 flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[100px] border bg-[#001D21] /* Base styles for all screens */
               ">
                 <div className="
                   flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0 /* Base styles for all screens */
                 ">
                   <img
                     src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753006123/material-symbols_enterprise_jjguen.png"
                     alt="Icon"
                     className="w-full h-full object-contain" /* Base styles for all screens */
                   />
                 </div>
               </div>
               {/*icon holding div */}

               {/* bottom div (text content) */}
               <div className="
                 flex flex-col justify-center items-start gap-[10px] self-stretch /* Base styles for all screens */
               ">
                 <h2 className="
                   self-stretch text-[#001D21] font-medium text-[20px] leading-[27px] tracking-[-0.6px] font-sans /* Base styles for all screens */
                 ">
                  Delivery Governance 2.0
                 </h2>
                 <p className="
                   self-stretch text-[#4E4E4E] text-[16px] leading-[23px] font-[450] font-sans /* Base styles for all screens */
                 ">
                  Velocity without visibility is fragility. Our agile engagements bring programmatic rigor with metrics like predictability, flow efficiency, WSJF-aligned backlog orchestration, and PI objectives tracked to business KPIs. Expect dashboards that speak both code and CFO.
                 </p>
               </div>
               {/* bottom div */}
             </div>
             {/* main internal div content here */}
           </div>

         </div>
         {/* bottom 4 divs holding div */}

       </div>
       {/* content holding div */}
     </div>
     {/* main outer hero section div */}
   </>
 );
}