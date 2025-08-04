export default function FillHomeTwvelthSection() {
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
            flex flex-col items-center gap-[25px] self-stretch /* Base for below sm and up */
            lg:flex-row lg:justify-between lg:items-end lg:gap-[100px] /* Flex row for lg, xl, 2xl */
            xl:flex-row xl:items-end xl:gap-[100px]
            2xl:flex-row 2xl:justify-between 2xl:items-end
          ">
            {/* Heading */}
            {/* Base text styles and alignment, responsive font sizes */}
            <h1 className="
              flex-1 text-[#001D21] font-sans font-[450] tracking-[-1.62px] /* Base text styles */
              text-[44px] leading-[54px] text-center /* Default for small screens */
              md:text-[54px] md:leading-[66px]
              lg:text-left /* Align left for lg and up */
              xl:text-left
              2xl:text-left
            ">
              Discover the latest blogs
            </h1>
 
            {/* Paragraph */}
            {/* Base text styles and alignment, responsive alignment changes */}
            <p className="
              flex-1 text-[rgba(0,29,33,0.65)] font-inter text-[14px] font-medium leading-[23px] /* Base text styles */
              text-center /* Default for small screens */
              md:text-left /* Align left for md, lg */
              lg:text-left
              xl:text-right /* Align right for xl, 2xl */
              2xl:text-right
            ">
              Stay informed with the latest health and wellness insights from our experts.
            </p>
          </div>
          {/* top heading + sub-heading holding div */}
 
          {/* bottom 3 divs holding div */}
          {/* Default to column for small, then row for larger screens */}
          <div className="
            flex flex-col justify-center items-start self-stretch /* Base for below sm and up */
            gap-[20px] /* Default gap for small screens */
            md:gap-[45px] /* Adjust gap for md, lg */
            lg:gap-[45px]
            xl:flex-row xl:items-center xl:gap-[20px] /* Row for xl, 2xl */
            2xl:flex-row 2xl:items-center 2xl:gap-[20px]
          ">
            {/* 1st div card */}
            <div className="
              flex flex-col items-start gap-[25px] self-stretch flex-1 /* Base for below sm and up */
            ">
              {/* image holding div */}
              {/* Base image container styles, responsive height */}
              <div className="
                h-[250px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center /* Base for below sm and up */
                sm:h-[350px]
                md:h-[500px]
                lg:h-[500px]
                xl:h-[331px]
                2xl:h-[331px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752988675/Depositphotos_744752180_XL_dyjeic.png"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover" /* Base for below sm and up */
                />
              </div>
              {/* image holding div */}
 
              {/* bottom info holding div */}
              <div className="
                flex flex-col justify-center items-start gap-[10px] self-stretch /* Base for below sm and up */
              ">
                {/* Tag div */}
                <div className="
                  flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7] /* Base for below sm and up */
                ">
                  <h6 className="
                    text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px] /* Base text styles */
                  ">
                    Cloud Computing
                  </h6>
                </div>
 
                <div className="
                  flex flex-col items-start gap-[10px] self-stretch /* Base for below sm and up */
                ">
                  {/* Card Heading */}
                  <h2 className="
                    self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px] /* Base text styles for small */
                    sm:text-[24px] sm:leading-[31px] /* Adjust for sm and up */
                  ">
                    Optimizing Costs with Cloud Infrastructure
                  </h2>
 
                  {/* Card Paragraph */}
                  <p className="
                    self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px] /* Base text styles */
                  ">
                    Discover how modern businesses are reducing operational costs and increasing agility with scalable cloud platforms.
                  </p>
                </div>
              </div>
              {/* bottom info holding div */}
            </div>
            {/* 1st div card */}
 
            {/* 2nd div card */}
            <div className="
              flex flex-col items-start gap-[25px] self-stretch flex-1 /* Base for below sm and up */
            ">
              {/* image holding div */}
              <div className="
                h-[250px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center /* Base for below sm and up */
                sm:h-[350px]
                md:h-[500px]
                lg:h-[500px]
                xl:h-[331px]
                2xl:h-[331px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753813506/Depositphotos_709787060_XL_qi5trw.jpg"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover" /* Base for below sm and up */
                />
              </div>
              {/* image holding div */}
 
              {/* bottom info holding div */}
              <div className="
                flex flex-col justify-center items-start gap-[10px] self-stretch /* Base for below sm and up */
              ">
                {/* Tag div */}
                <div className="
                  flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7] /* Base for below sm and up */
                ">
                  <h6 className="
                    text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px] /* Base text styles */
                  ">
                    Cybersecurity
                  </h6>
                </div>
 
                <div className="
                  flex flex-col items-start gap-[10px] self-stretch /* Base for below sm and up */
                ">
                  {/* Card Heading */}
                  <h2 className="
                    self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px] /* Base text styles for small */
                    sm:text-[24px] sm:leading-[31px] /* Adjust for sm and up */
                  ">
                    Zero Trust Architecture Explained
                  </h2>
 
                  {/* Card Paragraph */}
                  <p className="
                    self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px] /* Base text styles */
                  ">
                    Learn how the zero trust model is reshaping security frameworks to safeguard digital assets in an increasingly remote world.
                  </p>
                </div>
              </div>
              {/* bottom info holding div */}
            </div>
            {/* 2nd div card */}
 
            {/* 3rd div card */}
            <div className="
              flex flex-col items-start gap-[25px] self-stretch flex-1 /* Base for below sm and up */
            ">
              {/* image holding div */}
              <div className="
                h-[250px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center /* Base for below sm and up */
                sm:h-[350px]
                md:h-[500px]
                lg:h-[500px]
                xl:h-[331px]
                2xl:h-[331px]
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753814378/Depositphotos_233887380_XL_Large_ec1apz.png"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover" /* Base for below sm and up */
                />
              </div>
              {/* image holding div */}
 
              {/* bottom info holding div */}
              <div className="
                flex flex-col justify-center items-start gap-[10px] self-stretch /* Base for below sm and up */
              ">
                {/* Tag div */}
                <div className="
                  flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7] /* Base for below sm and up */
                ">
                  <h6 className="
                    text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px] /* Base text styles */
                  ">
                    Product Design
                  </h6>
                </div>
 
                <div className="
                  flex flex-col items-start gap-[10px] self-stretch /* Base for below sm and up */
                ">
                  {/* Card Heading */}
                  <h2 className="
                    self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px] /* Base text styles for small */
                    sm:text-[24px] sm:leading-[31px] /* Adjust for sm and up */
                  ">
                    Design Systems for Scalable Products
                  </h2>
 
                  {/* Card Paragraph */}
                  <p className="
                    self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px] /* Base text styles */
                  ">
                    Explore the power of design systems in building cohesive user experiences and accelerating product designing and development.
                  </p>
                </div>
              </div>
              {/* bottom info holding div */}
            </div>
            {/* 3rd div card */}
          </div>
          {/* bottom 3 divs holding div */}
        </div>
        {/* content holding div */}
      </div>
      {/* main outer hero section div */}
    </>
  );
 }