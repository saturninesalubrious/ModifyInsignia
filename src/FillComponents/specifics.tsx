export default function SpecificPropositionSection () {
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
             Engage with Insignia
           </h1>

           <p className="
             self-stretch text-[rgba(0,29,33,0.65)] text-center font-inter text-[14px] font-medium leading-[23px] /* Base styles for all screens */
           ">
 From Fortune 500 enterprises to mission-critical government programs, our cross-functional strategists bring deep technical mastery and strategic foresight to every facet of your digital journey.
           </p>

         </div>
         {/* top heading + sub-heading holding div */}

           {/* bottom 2 mini divs holding div (contains 2 mini-divs) */}
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

           {/* mini div (card structure) - 5 of 6 */}
           <div className="
 flex flex-col  gap-[80px] w-full mx-auto p-[35px]
          max-w-full /* Ensures it respects parent padding initially */
          sm:max-w-screen-sm  sm:items-start
          md:max-w-screen-md  md:items-center
          lg:max-w-screen-lg lg:items-center lg:flex-1
          xl:max-w-screen-xl  xl:items-start xl:flex-1
          2xl:max-w-screen-2xl  2xl:items-start 2xl:flex-1
rounded-[12px]
border-t-[12px]
border-[#0C393F]
bg-white [box-shadow:0_5px_10px_0_rgba(0,0,0,0.10),0_15px_30px_0_rgba(0,0,0,0.10),0_20px_40px_0_rgba(0,0,0,0.05)] backdrop-blur-[10px]">

     {/* content holding div */}
     <div className="
      flex flex-col justify-center items-start gap-[50px] self-stretch
      lg:flex-row lg:items-center lg:gap-[50px]
      xl:gap-[75px]
      container mx-auto
     ">

      <div className="
       flex flex-col justify-center items-start flex-grow flex-shrink-0 basis-0  gap-[60px]

      ">
       {/* Main Information wrapper */}
       <div className="
        flex flex-col justify-center items-start gap-[15px] self-stretch
       ">

         {/* Upper div holding heading + dot */}
         <div className="
          flex justify-start items-center gap-[11px] self-stretch
         ">
          <div className="
           w-[12px] h-[12px] justify-center items-center rounded-[32px] bg-[#001D21]
          ">
          </div>
          <h2 className="
           text-[#001D21] [font-feature-settings:'liga_off,_clig_off'] font-sans text-[15px] font-[550] leading-[24.011px] tracking-[0.45px] text-center
          ">
         Direct Professional Services
          </h2>
         </div>
         {/* Upper div holding heading + dot */}

         <h1 className="
  w-full text-[#001D21] font-medium text-[24px] leading-[33px] tracking-[-0.72px] font-sans
         ">
    Direct Consulting & Engineering
         </h1>



        <p className="
         self-stretch text-[16px] leading-[23px] font-medium text-[#001D21A6] font-sans
        ">
Engage with our collective of elite practitioners. We deliver precision AI solutions, modern data platforms, and agile engineering practices. Our principal-led model ensures you have direct access to seasoned leaders.
        </p>
       </div>
       {/* Main Information wrapper */}
       <button className="
        flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-[#D7D7D7] bg-white
       ">
        <span className="
         text-[15px] leading-[16px] tracking-[0.45px] font-[550] text-[#1D1D1D] text-center font-sans
        ">
         Our services
        </span>
       </button>
      </div>



     </div>
     {/* content holding div */}

           </div>

           {/* mini div (card structure) - 6 of 6 */}
           <div className="
 flex flex-col  gap-[80px] w-full mx-auto p-[35px]
          max-w-full /* Ensures it respects parent padding initially */
          sm:max-w-screen-sm  sm:items-start
          md:max-w-screen-md  md:items-center
          lg:max-w-screen-lg lg:items-center lg:flex-1
          xl:max-w-screen-xl  xl:items-start xl:flex-1
          2xl:max-w-screen-2xl  2xl:items-start 2xl:flex-1
rounded-[12px]
border-t-[12px]
border-[#0C393F]
bg-white [box-shadow:0_5px_10px_0_rgba(0,0,0,0.10),0_15px_30px_0_rgba(0,0,0,0.10),0_20px_40px_0_rgba(0,0,0,0.05)] backdrop-blur-[10px]">

     {/* content holding div */}
     <div className="
      flex flex-col justify-center items-start gap-[50px] self-stretch
      lg:flex-row lg:items-center lg:gap-[50px]
      xl:gap-[75px]
      container mx-auto
     ">

      <div className="
       flex flex-col justify-center items-start flex-grow flex-shrink-0 basis-0  gap-[60px]

      ">
       {/* Main Information wrapper */}
       <div className="
        flex flex-col justify-center items-start gap-[15px] self-stretch
       ">

         {/* Upper div holding heading + dot */}
         <div className="
          flex justify-start items-center gap-[11px] self-stretch
         ">
          <div className="
           w-[12px] h-[12px] justify-center items-center rounded-[32px] bg-[#001D21]
          ">
          </div>
          <h2 className="
           text-[#001D21] [font-feature-settings:'liga_off,_clig_off'] font-sans text-[15px] font-[550] leading-[24.011px] tracking-[0.45px] text-center
          ">
       Strategic Partnerships
          </h2>
         </div>
         {/* Upper div holding heading + dot */}

         <h1 className="
  w-full text-[#001D21] font-medium text-[24px] leading-[33px] tracking-[-0.72px] font-sans
         ">
Co-Creation & Collaborative Delivery
         </h1>



        <p className="
         self-stretch text-[16px] leading-[23px] font-medium text-[#001D21A6] font-sans
        ">
We don’t just implement; we co-create. Partner with us to architect and embed the "how" of your transformation. Our dual-shore model provides global agility and deep engineering expertise to amplify your existing capabilities.
        </p>
       </div>
       {/* Main Information wrapper */}
       <button className="
        flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-[#D7D7D7] bg-white
       ">
        <span className="
         text-[15px] leading-[16px] tracking-[0.45px] font-[550] text-[#1D1D1D] text-center font-sans
        ">
         Our services
        </span>
       </button>
      </div>



     </div>
     {/* content holding div */}

           </div>

         </div>
         {/* bottom 2divs holding div */}



       </div>
       {/* content holding div */}
     </div>
     {/* main outer hero section div */}
   </>
 );
}