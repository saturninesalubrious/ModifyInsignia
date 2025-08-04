export default function ImpactSectionInAgile () {


 return ( 
  <>
   

    {/* main outer hero section div */}
    <div className="
   flex flex-col items-start gap-[10px] self-stretch px-[40px] py-[90px] bg-[#F9F9F7]
   sm:px-[40px] sm:py-[90px]
   md:px-[65px] md:py-[90px]
   lg:p-[100px]
   xl:p-[100px]
   2xl:px-[100px] 2xl:py-[90px] 
   ">
  




   {/* content holding div */}
   {/* This is the div you want to modify */}
{/* content holding div */}
<div className="
    flex flex-col  gap-[80px] w-full mx-auto
    max-w-full
    sm:max-w-screen-sm  sm:items-start
    md:max-w-screen-md  md:items-center
    lg:max-w-screen-lg lg:items-center
    xl:max-w-screen-xl  xl:items-start
    2xl:max-w-screen-2xl  2xl:items-start
">

  {/* top heading + sub-heading holding div */}
  <div className="
      flex flex-col items-center gap-[20px] w-full
      lg:w-[690px]
      xl:w-[690px]
      2xl:w-[690px]
  ">
    <h1 className="
        self-stretch text-[#001D21] font-sans text-[48px] font-medium leading-[59px] tracking-[-1.44px]
        text-left
        sm:text-left
        md:text-center
        lg:text-center
        xl:text-left
        2xl:text-left
    ">
  Strategic Depth, Unmatched Delivery
    </h1>
    <p className="
        self-stretch text-[rgba(0,29,33,0.65)] font-inter text-[14px] font-medium leading-[23px]
        text-left
        sm:text-left
        md:text-center
        lg:text-center
        xl:text-left
        2xl:text-left
    ">
Our unique blend of engineering fluency, flexible delivery models, and global presence ensures we are the agile partner you can trust—from the boardroom to the team room.
    </p>
  </div>
  {/* top heading + sub-heading holding div */}

  {/* bottom 34 divs holding div */}
  <div className="
      flex flex-col justify-center items-start gap-[70px] self-stretch w-full
      sm:gap-[40px] sm:w-full

      md:flex-row md:flex-wrap md:justify-center md:items-start md:gap-[40px] md:w-full

      lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:gap-[70px] lg:w-full

      xl:flex-row xl:flex-wrap xl:justify-start xl:items-start xl:gap-[70px] xl:w-full

      2xl:flex-row 2xl:flex-wrap 2xl:justify-start 2xl:items-start 2xl:gap-[70px] 2xl:w-full
  ">

    {/*
      Here is the structure for the individual cards.
      The key changes are in the `flex` properties to ensure a 2-card layout per row on larger screens.
      md:flex-[1_1_calc(50%-20px)] takes up 50% width minus the gap of 40px (20px on each side).
      lg, xl, and 2xl breakpoints use a similar logic with their respective gap values.
    */}

    {/* Card 1 */}
    <div className="
        flex flex-col items-start gap-[40px] self-stretch w-full
        sm:w-full
        md:flex-[1_1_calc(50%-20px)]
        lg:flex-[1_1_calc(50%-35px)]
        xl:flex-[1_1_calc(50%-35px)]
        2xl:flex-[1_1_calc(50%-35px)]
    ">
      <div className="flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]">
        <div className="flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0">
          <img
            src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752931415/Group_26892_bwbp86.png"
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-[25px] flex-1">
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          <h3 className="self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[27px] tracking-[-0.42px]">
          Strategic Depth with Engineering Fluency
          </h3>
          <p className="self-stretch text-[rgba(0,29,33,0.65)] font-sans text-[16px] font-medium leading-[22px] tracking-[-0.36px]">
          Our Agile leaders don’t just coach from the sidelines—they’ve delivered complex programs across Snowflake, Oracle, and Spring Boot environments. They speak code, lead PI Planning, and measure success in both story points and revenue lifts
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="
        flex flex-col items-start gap-[40px] self-stretch w-full
        sm:w-full
        md:flex-[1_1_calc(50%-20px)]
        lg:flex-[1_1_calc(50%-35px)]
        xl:flex-[1_1_calc(50%-35px)]
        2xl:flex-[1_1_calc(50%-35px)]
    ">
      <div className="flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]">
        <div className="flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0">
          <img
            src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752931415/Group_26892_bwbp86.png"
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-[25px] flex-1">
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          <h3 className="self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[27px] tracking-[-0.42px]">
          CXO-Level Trust, Team-Level Love
          </h3>
          <p className="self-stretch text-[rgba(0,29,33,0.65)] font-sans text-[16px] font-medium leading-[22px] tracking-[-0.36px]">
          We’re equally fluent in boardroom strategy and team-room retrospectives—bridging vision with velocity.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="
        flex flex-col items-start gap-[40px] self-stretch w-full
        sm:w-full
        md:flex-[1_1_calc(50%-20px)]
        lg:flex-[1_1_calc(50%-35px)]
        xl:flex-[1_1_calc(50%-35px)]
        2xl:flex-[1_1_calc(50%-35px)]
    ">
      <div className="flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]">
        <div className="flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0">
          <img
            src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752931415/Group_26892_bwbp86.png"
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-[25px] flex-1">
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          <h3 className="self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[27px] tracking-[-0.42px]">
          Cross-Continental Cadence
          </h3>
          <p className="self-stretch text-[rgba(0,29,33,0.65)] font-sans text-[16px] font-medium leading-[22px] tracking-[-0.36px]">
          With delivery hubs in the US and India, we embed Agile rhythms across 24-hour work cycles—ensuring your backlogs move while you sleep.


          </p>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="
        flex flex-col items-start gap-[40px] self-stretch w-full
        sm:w-full
        md:flex-[1_1_calc(50%-20px)]
        lg:flex-[1_1_calc(50%-35px)]
        xl:flex-[1_1_calc(50%-35px)]
        2xl:flex-[1_1_calc(50%-35px)]
    ">
      <div className="flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]">
        <div className="flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0">
          <img
            src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752931415/Group_26892_bwbp86.png"
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-[25px] flex-1">
        <div className="flex flex-col items-start gap-[10px] self-stretch">
          <h3 className="self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[27px] tracking-[-0.42px]">
          Elastic Delivery Muscle
          </h3>
          <p className="self-stretch text-[rgba(0,29,33,0.65)] font-sans text-[16px] font-medium leading-[22px] tracking-[-0.36px]">
          Scale from an embedded agile pod to a full-fledged Agile Center of Excellence with zero compromise on craft.
          </p>
        </div>
      </div>
    </div>

    {/* You can duplicate the above card structure 30 more times to get your 34 cards */}
  </div>
  {/* bottom 34 divs holding div */}
</div>
{/* content holding div */}

  {/* content holding div */}






















   </div>
   {/* main outer hero section div */}

  
  </>
  )
 
 }