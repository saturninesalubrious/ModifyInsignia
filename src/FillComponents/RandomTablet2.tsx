import OutlineServicesButton from "@/ButtonVariants/OutlineOurServices";

export default function FillRandomTabletSection2 () {
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

       {/* image holding div */}
       <div className="
       flex items-center gap-[10px] flex-1 self-stretch rounded-[24px] bg-[#F9F9F7]
      ">
       <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1754156396/Frame_1000005073_le0qyg.svg"
        alt="A team of professionals collaborating in an office setting."
        className="
         w-full h-full object-cover rounded-[24px]
        "
       />
      </div>
      {/* image holding div */}
      
      <div className="
       flex flex-col justify-center items-start gap-[75px] flex-1
      ">
       {/* Main Information wrapper */}
       <div className="
        flex flex-col justify-center items-start gap-[45px] self-stretch
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
         Reinventing the Velocity Core of the Modern Enterprise
         </h1>
        </div>
        {/* top most div */}
        <p className="
         self-stretch text-[16px] leading-[23px] font-medium text-[#001D21A6] font-sans
        ">
        Our Agile Transformation and DevOps capability exists to unlock latent organizational potential, empower high-velocity teams, and engineer precision-aligned delivery ecosystems.
        </p>

        {/* 3 mini div pointer holder */}
             <div className="
                /* Base (xs) breakpoint */
                flex flex-col items-start content-start justify-start gap-[10px] self-stretch  /* Added for small screens */

                /* sm breakpoint */
                sm:flex sm:items-start sm:content-start sm:gap-[20px] sm:self-stretch sm:flex-col

                /* md breakpoint */
                md:flex md:items-start md:content-start md:gap-[20px] md:self-stretch md:flex-col /* Corrected items-left to  for consistency */

                /* lg breakpoint */
                lg:flex lg:items-start lg:content-start lg:gap-[20px] lg:self-stretch lg:flex-col /* Corrected items-left to  for consistency */

                /* xl breakpoint */
                xl:flex xl:items-start xl:content-start xl:gap-[20px] xl:self-stretch xl:flex-col /* Corrected items-left to  for consistency */

                /* 2xl breakpoint */
                2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[20px] 2xl:self-stretch /* Corrected items-left to for consistency */
              ">

                {/* mini div holder */}
                <div className="
                  /* Base (xs) breakpoint */
                  flex items-start gap-[5px] rounded-[6px] bg-[#F3F4F2] px-[8px] py-[6px]

                  /* sm breakpoint */
                  sm:flex sm:items-start sm:gap-[10px] sm:rounded-[6px] sm:bg-[#F3F4F2] sm:px-[10px] sm:py-[8px]

                  /* md breakpoint */
                  md:flex md:items-start md:gap-[10px] md:rounded-[6px] md:bg-[#F3F4F2] md:px-[10px] md:py-[8px]

                  /* lg breakpoint */
                  lg:flex lg:items-start lg:gap-[10px] lg:rounded-[6px] lg:bg-[#F3F4F2] lg:px-[10px] lg:py-[8px]

                  /* xl breakpoint */
                  xl:flex xl:items-start xl:gap-[10px] xl:rounded-[6px] xl:bg-[#F3F4F2] xl:px-[10px] xl:py-[8px]

                  /* 2xl breakpoint */
                  2xl:flex 2xl:items-start 2xl:gap-[10px] 2xl:rounded-[6px] 2xl:bg-[#F3F4F2] 2xl:px-[10px] 2xl:py-[8px]
                ">
                  <span className="
                    /* Base (xs) breakpoint */
                    text-[#2D4447] text-[12px] font-medium leading-[14px] tracking-[0.4px] font-sans

                    /* sm breakpoint */
                    sm:text-[#2D4447] sm:text-[14px] sm:font-medium sm:leading-[16px] sm:tracking-[0.56px] sm:font-sans

                    /* md breakpoint */
                    md:text-[#2D4447] md:text-[14px] md:font-medium md:leading-[16px] md:tracking-[0.56px] md:font-sans

                    /* lg breakpoint */
                    lg:text-[#2D4447] lg:text-[14px] lg:font-medium lg:leading-[16px] lg:tracking-[0.56px] lg:font-sans

                    /* xl breakpoint */
                    xl:text-[#2D4447] xl:text-[14px] xl:font-medium xl:leading-[16px] xl:tracking-[0.56px] xl:font-sans

                    /* 2xl breakpoint */
                    2xl:text-[#2D4447] 2xl:text-[14px] 2xl:font-medium 2xl:leading-[16px] 2xl:tracking-[0.56px] 2xl:font-sans
                  ">
                   DevOps Beyond Tooling
                  </span>
                </div>
                {/* mini div holder */}

                {/* mini div holder */}
                <div className="
                  /* Base (xs) breakpoint */
                  flex items-start gap-[5px] rounded-[6px] bg-[#F3F4F2] px-[8px] py-[6px]

                  /* sm breakpoint */
                  sm:flex sm:items-start sm:gap-[10px] sm:rounded-[6px] sm:bg-[#F3F4F2] sm:px-[10px] sm:py-[8px]

                  /* md breakpoint */
                  md:flex md:items-start md:gap-[10px] md:rounded-[6px] md:bg-[#F3F4F2] md:px-[10px] md:py-[8px]

                  /* lg breakpoint */
                  lg:flex lg:items-start lg:gap-[10px] lg:rounded-[6px] lg:bg-[#F3F4F2] lg:px-[10px] lg:py-[8px]

                  /* xl breakpoint */
                  xl:flex xl:items-start xl:gap-[10px] xl:rounded-[6px] xl:bg-[#F3F4F2] xl:px-[10px] xl:py-[8px]

                  /* 2xl breakpoint */
                  2xl:flex 2xl:items-start 2xl:gap-[10px] 2xl:rounded-[6px] 2xl:bg-[#F3F4F2] 2xl:px-[10px] 2xl:py-[8px]
                ">
                  <span className="
                    /* Base (xs) breakpoint */
                    text-[#2D4447] text-[12px] font-medium leading-[14px] tracking-[0.4px] font-sans

                    /* sm breakpoint */
                    sm:text-[#2D4447] sm:text-[14px] sm:font-medium sm:leading-[16px] sm:tracking-[0.56px] sm:font-sans

                    /* md breakpoint */
                    md:text-[#2D4447] md:text-[14px] md:font-medium md:leading-[16px] md:tracking-[0.56px] md:font-sans

                    /* lg breakpoint */
                    lg:text-[#2D4447] lg:text-[14px] lg:font-medium lg:leading-[16px] lg:tracking-[0.56px] lg:font-sans

                    /* xl breakpoint */
                    xl:text-[#2D4447] xl:text-[14px] xl:font-medium xl:leading-[16px] xl:tracking-[0.56px] xl:font-sans

                    /* 2xl breakpoint */
                    2xl:text-[#2D4447] 2xl:text-[14px] 2xl:font-medium 2xl:leading-[16px] 2xl:tracking-[0.56px] 2xl:font-sans
                  ">
                   Cultural Change as a Service
                  </span>
                </div>
                {/* mini div holder */}

                {/* mini div holder */}
                <div className="
                  /* Base (xs) breakpoint */
                  flex items-start gap-[5px] rounded-[6px] bg-[#F3F4F2] px-[8px] py-[6px]

                  /* sm breakpoint */
                  sm:flex sm:items-start sm:gap-[10px] sm:rounded-[6px] sm:bg-[#F3F4F2] sm:px-[10px] sm:py-[8px]

                  /* md breakpoint */
                  md:flex md:items-start md:gap-[10px] md:rounded-[6px] md:bg-[#F3F4F2] md:px-[10px] md:py-[8px]

                  /* lg breakpoint */
                  lg:flex lg:items-start lg:gap-[10px] lg:rounded-[6px] lg:bg-[#F3F4F2] lg:px-[10px] lg:py-[8px]

                  /* xl breakpoint */
                  xl:flex xl:items-start xl:gap-[10px] xl:rounded-[6px] xl:bg-[#F3F4F2] xl:px-[10px] xl:py-[8px]

                  /* 2xl breakpoint */
                  2xl:flex 2xl:items-start 2xl:gap-[10px] 2xl:rounded-[6px] 2xl:bg-[#F3F4F2] 2xl:px-[10px] 2xl:py-[8px]
                ">
                  <span className="
                    /* Base (xs) breakpoint */
                    text-[#2D4447] text-[12px] font-medium leading-[14px] tracking-[0.4px] font-sans

                    /* sm breakpoint */
                    sm:text-[#2D4447] sm:text-[14px] sm:font-medium sm:leading-[16px] sm:tracking-[0.56px] sm:font-sans

                    /* md breakpoint */
                    md:text-[#2D4447] md:text-[14px] md:font-medium md:leading-[16px] md:tracking-[0.56px] md:font-sans

                    /* lg breakpoint */
                    lg:text-[#2D4447] lg:text-[14px] lg:font-medium lg:leading-[16px] lg:tracking-[0.56px] lg:font-sans

                    /* xl breakpoint */
                    xl:text-[#2D4447] xl:text-[14px] xl:font-medium xl:leading-[16px] xl:tracking-[0.56px] xl:font-sans

                    /* 2xl breakpoint */
                    2xl:text-[#2D4447] 2xl:text-[14px] 2xl:font-medium 2xl:leading-[16px] 2xl:tracking-[0.56px] 2xl:font-sans
                  ">
                   Delivery Governance 2.0
                  </span>
                </div>
                {/* mini div holder */}
              </div>
              {/* 3 mini div pointer holder */}


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
    {/* main outer hero section div */}
    </>
  )
}