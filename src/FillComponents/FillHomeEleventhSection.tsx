import OutlineServicesButton from "@/ButtonVariants/OutlineOurServices";

export default function FillHomeEleventhSection () {
 return (
  <>
   {/* main outer hero section div */}
   {/* Base styles define layout for smallest screens, then responsive padding for larger ones */}
   <div className="
     flex flex-col items-start gap-[10px] self-stretch bg-[#ffff] /* Base styles for below sm and up */
     px-[20px] py-[40px] /* Default padding for very small screens */
     sm:px-[40px] sm:py-[65px]
     md:p-[65px] /* md, lg, xl share this padding */
     lg:p-[65px]
     xl:p-[65px]
     2xl:px-[100px] 2xl:py-[65px]
   ">
  
    {/* content holding div */}
    {/* Base styles applied, then responsive adjustments and max-width for larger breakpoints */}
    <div
    className="
      flex flex-col items-start gap-[10px] self-stretch /* Base  properties for below sm and up */
      rounded-[24px] border-[6px] border-[#1E212B]
      bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1752942557/Group_140091_1_i9sleh.png')] bg-cover bg-no-repeat bg-center
      shadow-[0_5px_10px_0_rgba(0,0,0,0.10),0_15px_30px_0_rgba(0,0,0,0.10),0_20px_40px_0_rgba(0,0,0,0.15)]
      p-[30px] h-[400px] /* Default height and padding for very small screens */
      w-full mx-auto /* Ensure it stretches to full width and is centered */
      
      sm:h-[650px] sm:p-[54px_57px] /* Adjustments for sm breakpoint */
      md:h-[650px] md:p-[54px_57px] /* md, lg, xl, 2xl share this height and padding */
      lg:h-[650px] lg:p-[54px_57px] lg:max-w-screen-xl lg:mx-auto /* Constrain and center for lg */
      xl:h-[650px] xl:p-[54px_57px] xl:max-w-screen-xl xl:mx-auto /* Constrain and center for xl */
      2xl:h-[650px] 2xl:p-[54px_57px] 2xl:max-w-screen-2xl 2xl:mx-auto /* Constrain to 2xl screen size and center */
      /* Note:  is a custom value, ensure your Tailwind config supports arbitrary values for */
      backdrop-blur-[10px]
    "
  >
    {/* Inner content div (heading, paragraph, button) */}
    {/* Base styles for flex and width, then responsive width changes */}
    <div className="
      flex flex-col items-start gap-[20px] w-full /* Base  and full width for below sm and up */
      sm:w-[400px]
      md:w-[500px]
      lg:w-[690px] /* lg, xl, 2xl share this width */
      xl:w-[690px]
      2xl:w-[690px]
    ">
      {/* Heading */}
      {/* Base styles for text properties, then responsive font sizes/line heights */}
      <h1 className="
        self-stretch text-[#001D21] text-left font-sans font-medium tracking-[-1.44px] /* Base text styles */
        text-[34px] leading-[42px] /* Default font size for very small screens */
        sm:text-[34px] sm:leading-[42px]
        md:text-[34px] md:leading-[42px]
        lg:text-[48px] lg:leading-[59px] /* lg, xl, 2xl share this font size */
        xl:text-[48px] xl:leading-[59px]
        2xl:text-[48px] 2xl:leading-[59px]
      ">
        Unlock Business Potential with Our Core Capabilities
      </h1>

      {/* Paragraph */}
      {/* Base styles for text properties */}
      <p className="
        self-stretch text-[rgba(0,29,33,0.75)] text-left font-inter text-[14px] font-medium leading-[23px] /* Base text styles */
      ">
        We invest in purpose-built systems and next-gen tools to help businesses like yours scale smarter, adapt faster, and operate more efficiently.
      </p>

      <OutlineServicesButton/>

    </div>
   </div>
   {/* content holding div */}
  </div>
  {/* main outer hero section div */}
  </>
 )
}