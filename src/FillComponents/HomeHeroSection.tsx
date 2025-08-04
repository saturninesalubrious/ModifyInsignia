

import GetStartedButton from "@/ButtonVariants/GetStarted"






export default function FillHeroSection () {


 return ( 
  <>
   

{/* main outer hero section div */}
<div className="
   flex flex-col items-start gap-[10px] self-stretch bg-[#001D21] // Default styles for mobile (below sm)
   px-[20px] py-[40px] // Added default smaller padding for smallest screens
   sm:px-[40px] sm:py-[65px] // Adjust padding for sm and up
   xl:px-[65px] // Adjust padding for xl and up
   2xl:px-[100px] // Adjust padding for 2xl and up
">

  {/* content holding div */}
  <div className="
    flex flex-col items-start gap-[26px] w-full // Default styles for mobile
    px-4 // Default horizontal padding for smallest screens (ensures content isn't edge-to-edge)
    sm:max-w-[640px] sm:mx-auto sm:px-6 // Max width and centering for sm, slightly more padding
    md:max-w-[768px] md:px-8 // Max width and centering for md
    lg:max-w-[1024px] lg:px-12 // Max width and centering for lg
    xl:max-w-[1280px] xl:px-16 // Max width and centering for xl
    2xl:max-w-[1536px] 2xl:mx-auto 2xl:px-0 // Max width and centering for 2xl, remove internal padding here as outer div has it
  ">

    {/* upper content(heading + subheading + button) holding div */}
    <div className="
      flex flex-col items-start gap-[25px] w-full // Default styles for mobile (full width by default)
      sm:w-[560px] // Specific width for sm and up
      md:w-[633px] // Specific width for md and up (retaining your original md/lg/xl/2xl width)
    ">

      <h1 className="
        self-stretch text-[#CDCBFF] font-medium font-sans
        text-[40px] leading-[48px] tracking-[-1.5px] // Adjusted for smaller screens
        sm:text-[52px] sm:leading-[58px] sm:tracking-[-2px] // Adjusted for sm
        md:text-[64px] md:leading-[69px] md:tracking-[-2.56px] // Original large screen values for md and up
      ">
        Scalable and flexible infrastructure to grow
      </h1>

      <h2 className="
        self-stretch text-[#BFBEBE] font-medium font-sans
        text-[12px] leading-[15px] // Adjusted for smaller screens
        sm:text-[14px] sm:leading-[17px] // Original values for sm and up
      ">
        From real-time analytics to enhanced data protection, discover features engineered to scale, secure, and simplify your operations — without stretching your budget.
      </h2>

      <GetStartedButton />

    </div>
    {/* upper content(heading + subheading + button) holding div */}

    {/* bottom image holding div */}
    <div className="
      h-[300px] rounded-[16px] overflow-hidden self-stretch flex items-start // Default small screen height and slightly smaller border radius
      sm:h-[400px] sm:rounded-[20px] // Adjust height and radius for sm and up
      md:h-[568px] md:rounded-[24px] // Original large screen height and radius for md and up
    ">
      <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753510618/Depositphotos_315883278_XL_Large_yrh4vx.png"
        alt="Descriptive alt text"
        className="h-full w-full object-cover"
      />
    </div>
    {/* bottom image holding div */}

  </div>
  {/* content holding div */}

</div>

  
  </>
  )
 
 }