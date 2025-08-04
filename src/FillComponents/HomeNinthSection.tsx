export default function FillHomeNinthSection() {
  return (
    <>
      {/* main outer hero section div */}
      <div className="
        flex flex-col items-start gap-[10px] self-stretch px-[40px] py-[65px] bg-[#ffff]
        sm:px-[40px] sm:py-[65px]
        md:p-[65px]
        lg:p-[65px]
        xl:p-[65px]
        2xl:px-[100px] 2xl:py-[65px]
      ">
        {/* content holding div */}
        {/* This div should not stretch beyond 2xl and not shrink below sm */}
        <div className="
           flex flex-col items-center gap-[80px] mx-auto w-full
           min-w-0 /* Ensure it can shrink to 0 by default, then sm overrides */
           sm:min-w-[640px] sm:max-w-screen-sm sm:px-0 /* Ensures it doesn't  below sm, and sets max for sm */
           md:max-w-screen-md /* Set max-width for md */
           lg:max-w-screen-lg /* Set max-width for lg */
           xl:max-w-screen-xl /* Set max-w for xl */
           2xl:max-w-screen-2xl /* Set max-w for 2xl */
           border-2 border-white
         ">
          {/* top heading + sub-heading holding div */}
          <div className="
             flex flex-col items-center gap-[20px] w-full /* Base styles for smallest screens */
             mx-auto /* Add to center this div itself when its width is constrained */
             lg:w-[690px]
             xl:w-[690px]
             2xl:w-[690px]
             border-2 border-white
           ">
            <h1 className="
              self-stretch text-[#001D21] text-center font-sans text-[48px] font-medium leading-[59px] tracking-[-1.44px]
            ">
              Trusted by Visionaries to Drive Scalable Growth
            </h1>
            <p className="
              self-stretch text-[rgba(0,29,33,0.65)] text-center font-inter text-[14px] font-medium leading-[23px]
            ">
              Explore the standout capabilities that drive exceptional results—designed to set us apart in the digital, AI, and cloud-tech landscape.
            </p>
          </div>
          {/* top heading + sub-heading holding div */}
 
          {/* bottom 6 divs holding div */}
          <div className="
            flex flex-col justify-center items-center content-center gap-[100px] self-stretch w-full flex-wrap /* Base styles for smallest screens */
            sm:flex-row
            md:flex-row
            lg:flex-row
            xl:items-start xl:content-start xl:gap-[100px] xl:flex-wrap
            2xl:items-start 2xl:content-start 2xl:gap-[100px] 2xl:flex-wrap
          ">
            {/* mini div 1 */}
            <div className="
              flex w-[230px] h-[150px] justify-center items-center rounded-[12px] bg-[#F3F4F2]
              sm:w-[230px]
              md:w-[269px]
              lg:w-[375px]
              xl:w-[375px]
              2xl:w-[375px]
            ">
              <div className="
                flex w-[225px] h-[100px] justify-center items-center gap-[10px] shrink-0 p-[25px]
                sm:w-[225px]
                md:w-[250px]
                lg:w-[350px] lg:h-[100px]
                xl:w-[350px] xl:h-[120px]
                2xl:w-[350px] 2xl:h-[120px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752934476/5th_logo_1_mtmyng.png"
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* mini div 1 */}
 
            {/* mini div 2 */}
            <div className="
              flex w-[230px] h-[150px] justify-center items-center rounded-[12px] bg-[#F3F4F2]
              sm:w-[230px]
              md:w-[269px]
              lg:w-[375px]
              xl:w-[375px]
              2xl:w-[375px]
            ">
              <div className="
                flex w-[225px] h-[100px] justify-center items-center gap-[10px] shrink-0 p-[25px]
                sm:w-[225px]
                md:w-[250px]
                lg:w-[350px] lg:h-[100px]
                xl:w-[350px] xl:h-[120px]
                2xl:w-[350px] 2xl:h-[120px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752934375/3rd_logo_jldzve.png"
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* mini div 2 */}
 
            {/* mini div 3 */}
            <div className="
              flex w-[230px] h-[150px] justify-center items-center rounded-[12px] bg-[#F3F4F2]
              sm:w-[230px]
              md:w-[269px]
              lg:w-[375px]
              xl:w-[375px]
              2xl:w-[375px]
            ">
              <div className="
                flex w-[225px] h-[100px] justify-center items-center gap-[10px] shrink-0 p-[25px]
                sm:w-[225px]
                md:w-[250px]
                lg:w-[350px] lg:h-[100px]
                xl:w-[350px] xl:h-[120px]
                2xl:w-[350px] 2xl:h-[120px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752934309/Logo_2_nt37s4.png"
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* mini div 3 */}
 
            {/* mini div 4 */}
            <div className="
              flex w-[230px] h-[150px] justify-center items-center rounded-[12px] bg-[#F3F4F2]
              sm:w-[230px]
              md:w-[269px]
              lg:w-[375px]
              xl:w-[375px]
              2xl:w-[375px]
            ">
              <div className="
                flex w-[225px] h-[100px] justify-center items-center gap-[10px] shrink-0 p-[25px]
                sm:w-[225px]
                md:w-[250px]
                lg:w-[350px] lg:h-[100px]
                xl:w-[350px] xl:h-[120px]
                2xl:w-[350px] 2xl:h-[120px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752934201/4th_logo_l2d73s.png"
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* mini div 4 */}
 
            {/* mini div 5 */}
            <div className="
              flex w-[230px] h-[150px] justify-center items-center rounded-[12px] bg-[#F3F4F2]
              sm:w-[230px]
              md:w-[269px]
              lg:w-[375px]
              xl:w-[375px]
              2xl:w-[375px]
            ">
              <div className="
                flex w-[225px] h-[100px] justify-center items-center gap-[10px] shrink-0 p-[25px]
                sm:w-[225px]
                md:w-[250px]
                lg:w-[350px] lg:h-[100px]
                xl:w-[350px] xl:h-[120px]
                2xl:w-[350px] 2xl:h-[120px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752934143/2nd_logo_uojtxt.png"
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* mini div 5 */}
 
            {/* mini div 6 */}
            <div className="
              flex w-[230px] h-[150px] justify-center items-center rounded-[12px] bg-[#F3F4F2]
              sm:w-[230px]
              md:w-[269px]
              lg:w-[375px]
              xl:w-[375px]
              2xl:w-[375px]
            ">
              <div className="
                flex w-[225px] h-[100px] justify-center items-center gap-[10px] shrink-0 p-[25px]
                sm:w-[225px]
                md:w-[250px]
                lg:w-[350px] lg:h-[100px]
                xl:w-[350px] xl:h-[120px]
                2xl:w-[350px] 2xl:h-[120px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752933871/6th_logo_ol8cku.png"
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* mini div 6 */}
          </div>
          {/* bottom 6 divs holding div */}
        </div>
        {/* content holding div */}
      </div>
      {/* main outer hero section div */}
    </>
  );
 }