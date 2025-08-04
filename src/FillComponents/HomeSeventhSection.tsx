export default function FillHomeSeventhSection() {
  return (
    <>
      {/* main outer hero section div */}
      {/* Base styles apply for all screens, responsive padding adjusts for larger ones */}
      <div className="
         flex flex-col items-start gap-[10px] self-stretch bg-[#ffffff] /* Base for below sm and up */
         px-[20px] py-[30px] /* Default padding for extra small screens */
         sm:px-[40px] sm:py-[65px]
         md:p-[65px]
         lg:p-[65px]
         xl:p-[65px]
         2xl:px-[100px] 2xl:py-[65px]
       ">
        {/* content holding div */}
        {/* Constrains content width for larger screens and centers it */}
        <div className="
          flex flex-col items-center gap-[80px] self-stretch w-full /* Base for below sm and up */
          lg:max-w-screen-xl lg:mx-auto /* Constrain and center for lg and xl */
          xl:max-w-screen-xl xl:mx-auto
          2xl:max-w-screen-2xl 2xl:mx-auto /* Do not stretch beyond 2xl, centered */ 
        ">
          {/* top heading + sub-heading holding div */}
          {/* Default to column layout for small screens, then row for larger */}
          <div className="
            flex flex-col items-center gap-[45px] self-stretch /* Base for below sm and up */
            md:items-end /* Adjust alignment for md */
            lg:flex-row lg:items-end lg:gap-[100px] /* Flex row for lg, xl, 2xl */
            xl:flex-row xl:items-end xl:gap-[100px]
            2xl:flex-row 2xl:items-end 2xl:gap-[100px]
          ">
            {/* Heading */}
            {/* Base text styles and alignment, responsive font sizes */}
            <h1 className="
              flex-1 text-[#001D21] font-sans font-[450] tracking-[-1.62px] /* Base text styles */
              text-[44px] leading-[54px] text-center /* Default for small screens */
              md:text-[54px] md:leading-[66px] /* Adjust for md and up */
              lg:text-left /* Align left for lg and up */
            ">
              Simplifying complexity, amplifying clarity
            </h1>
 
            {/* Paragraph */}
            {/* Base text styles and alignment, responsive alignment changes */}
            <p className="
              flex-1 text-[rgba(0,29,33,0.65)] font-sans text-[14px] font-medium leading-[23px] /* Base text styles */
              text-center /* Default for small screens */
              md:text-start /* Align left for md, lg, xl */
              xl:text-start /* Explicitly keep left for xl */
              2xl:text-start /* Align right for 2xl */
            ">
              From early-stage ventures to industry leaders, teams across sectors rely on Acelia to streamline operations and make data-backed decisions — all without the overhead of bulky systems.
            </p>
          </div>
          {/* top heading + sub-heading holding div */}
 
 
 
          {/* bottom 5 divs holding div */}
          {/* Uses flex-wrap to arrange items across rows, with responsive widths */}
 {/* bottom 5 divs holding div */}
 {/* Uses flex-wrap to arrange items across rows, with responsive widths */}
 <div className="
   flex flex-wrap items-start content-start gap-[15px] self-stretch /* Base for all screens */
 ">
   {/* 1st row elements - First image card (Image Div) */}
   <div className="
     h-[251px] rounded-[24px] bg-lightgray bg-cover bg-no-repeat bg-center relative overflow-hidden /* Base */
     grow shrink /* Allow to  */
     basis-full /* Default full width for very small screens */
     sm:basis-full /* Base for sm (was sm:w-full) */
     md:basis-full /* Base for md (was md:w-full) */
     lg:basis-[580px] /* Set desired basis for lg */
     xl:basis-[630px] /* Set desired basis for xl */
     2xl:basis-[690px] /* Set desired basis for 2xl */
   ">
     <img
       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753624776/Depositphotos_682818692_XL_ptd3e5.jpg"
       alt="Image description"
       className="absolute inset-0 w-full h-full object-cover" /* Base for all screens */
     />
   </div>
 
   {/* 1st row elements - Text card (10+ Years) (Content Div - FLEXIBLE WITH FIXED BASIS) */}
   <div className="
     flex flex-col items-start p-[33px_25px] gap-[65px] rounded-[24px] bg-[#001D21] /* Base */
     h-[251px] grow shrink /* Allow to  */
     basis-full /* Default full width for very small screens */
     sm:basis-[320px] sm:mx-auto /* Set desired basis and centering for sm */
     md:basis-[320px] md:mx-auto /* Set desired basis and centering for md */
     lg:basis-[299px] lg:mx-0 /* Set desired basis for lg, remove centering */
     xl:basis-[505px] /* Set desired basis for xl */
     2xl:basis-[278px] /* Set desired basis for 2xl */
   ">
     <h1 className="
       self-stretch text-white font-inter text-[48px] font-medium leading-[53px] tracking-[-2.4px] /* Base text styles */
     ">
       10+
     </h1>
     <p className="
       flex h-[67px] flex-col justify-center shrink-0 self-stretch text-white/65 font-inter text-[12px] font-medium leading-[20px] /* Base text styles */
     ">
       Years of combined expertise Bringing strategic insights, technical fluency, and product-first thinking
     </p>
   </div>
 
   {/* 1st row elements - Second image card (Image Div) */}
   <div className="
     h-[251px] rounded-[24px] bg-lightgray bg-cover bg-no-repeat bg-center relative overflow-hidden /* Base */
     grow shrink /* Allow to  */
     basis-full /* Default full width for very small screens */
     sm:basis-[225px] sm:mx-auto /* Set desired basis and centering for sm */
     md:basis-[303px] md:mx-auto /* Set desired basis and centering for md */
     lg:basis-[279px] lg:mx-0 /* Set desired basis for lg, remove centering */
     xl:basis-[350px] /* Set desired basis for xl */
     2xl:basis-[338px] /* Set desired basis for 2xl */
   ">
     <img
       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753625527/Depositphotos_240760676_XL_Large_o76clq.png"
       alt="Image description"
       className="absolute inset-0 w-full h-full object-cover" /* Base for all screens */
     />
   </div>
 
   {/* 2nd row elements - Blue card (95% Client-first) (Content Div - FLEXIBLE WITH FIXED BASIS) */}
   <div className="
     flex flex-col justify-between p-[25px] gap-[24px] rounded-[24px] bg-[#5F58FF] /* Base */
     h-[251px] grow shrink /* Allow to  */
     basis-full /* Default full width for very small screens */
     sm:basis-[425px] sm:mx-auto /* Set desired basis and centering for sm */
     md:basis-[475px] md:mx-auto /* Set desired basis and centering for md */
     lg:basis-[600px] lg:mx-0 /* Set desired basis for lg, remove centering */
     xl:basis-[785px] /* Set desired basis for xl */
     2xl:basis-[846px] /* Set desired basis for 2xl */
   ">
     {/* main icon holder div */}
     <div className="
       flex w-[51px] h-[51px] justify-center items-center rounded-[40px] bg-[#6F69FF] /* Base for all screens */
     ">
       <div className="
         flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0 /* Base for all screens */
       ">
         <img
           src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752902989/Vector_1_gwa2mr.png"
           alt="Icon"
           className="w-full h-full object-contain" /* Base for all screens */
         />
       </div>
     </div>
     {/* main icon holder div */}
 
     <div className="
       flex flex-col justify-center items-start gap-[15px] self-stretch /* Base for all screens */
     ">
       <h1 className="
         flex h-[43px] flex-col justify-center self-stretch text-white font-sans text-[48px] font-medium leading-[53px] tracking-[-1.44px] /* Base text styles */
       ">
         95%
       </h1>
       <p className="
         self-stretch text-white/65 font-sans text-[12px] font-medium leading-[20px] /* Base text styles */
       ">
         Client-first outcomes - Our high satisfaction score reflects our commitment to tailored support, intuitive interfaces, and measurable results. From cross-platform compatibility to modular growth paths — Acelia is designed for evolving business needs.
       </p>
     </div>
   </div>
 
   {/* 2nd row elements - Last image card (Image Div) */}
   <div className="
     h-[251px] rounded-[24px] bg-lightgray bg-cover bg-no-repeat bg-center relative overflow-hidden /* Base */
     grow shrink /* Allow to  */
     basis-full /* Default full width for very small screens */
     sm:basis-[120px] sm:mx-auto /* Set desired basis and centering for sm */
     md:basis-[148px] md:mx-auto /* Set desired basis and centering for md */
     lg:basis-full lg:mx-0 /* Set desired basis for lg, remove centering */
     xl:basis-full /* Set desired basis for xl */
     2xl:basis-[475px] /* Set desired basis for 2xl */
   ">
     <img
       src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753625653/684afd0fd287ce39088466cd_Finance_image_three_2_z4jdhs.png"
       alt="Image description"
       className="absolute inset-0 w-full h-full object-cover" /* Base for all screens */
     />
   </div>
 </div>
 {/* bottom 5 divs holding div */}
          {/* bottom 3 divs holding div */}
        </div>
        {/* content holding div */}
      </div>
      {/* main outer hero section div */}
    </>
  );
 }