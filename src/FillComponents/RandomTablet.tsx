import OutlineServicesButton from "@/ButtonVariants/OutlineOurServices";

export default function FillRandomTabletSection () {
  return (
    <>
     {/* main outer hero section div */}
     <div className="
     flex flex-col items-start gap-[10px] self-stretch bg-[#F9F9F7]
     px-[20px] py-[65px]
   sm:px-[40px] sm:py-[65px]
     
     md:p-[65px]
     2xl:px-[100px]
    ">


<div className="
 flex flex-col  gap-[80px] w-full mx-auto p-[35px]
          max-w-full /* Ensures it respects parent padding initially */
          sm:max-w-screen-sm  sm:items-start
          md:max-w-screen-md  md:items-center
          lg:max-w-screen-lg lg:items-center
          xl:max-w-screen-xl  xl:items-start
          2xl:max-w-screen-2xl  2xl:items-start
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
       flex flex-col justify-center items-start gap-[75px] flex-1
      ">
       {/* Main Information wrapper */}
       <div className="
        flex flex-col justify-center items-start gap-[20px] self-stretch
       ">
        {/* top most div */}
        <div className="
         flex flex-col justify-center items-start gap-[20px] self-stretch
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
         Our milestones
          </h2>
         </div>
         {/* Upper div holding heading + dot */}
         <h1 className="
          self-stretch text-[#001D21] text-left font-sans text-[54px] font-[450] leading-[66px] tracking-[-1.62px]
         ">
          Streamlined Transformation for Your Enterprise
         </h1>
        </div>
        {/* top most div */}
        <p className="
         self-stretch text-[16px] leading-[23px] font-medium text-[#001D21A6] font-sans
        ">
We simplify operations and centralize strategic oversight across your business lines and technologies with our principal-led approach.
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
      {/* image holding div */}
      <div className="
       flex items-center gap-[10px] flex-1 self-stretch rounded-[24px] bg-[#F9F9F7]
      ">
       <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1754155958/buttons_gvewox.svg"
        alt="A team of professionals collaborating in an office setting."
        className="
         w-full h-full object-cover rounded-[24px]
        "
       />
      </div>
      {/* image holding div */}
     </div>
     {/* content holding div */}

 </div>
    </div>
    {/* main outer hero section div */}
    </>
  )
}