export default function FillBlogSecondSection () {
  return ( 
   <>
    {/* main outer hero section div */}
    <div className="
     flex flex-col items-start gap-[10px] self-stretch bg-white
     px-[40px] py-[65px]
     md:p-[65px]
     2xl:px-[100px]
    ">
     {/* content holding div
     
     
       <div className="
          flex flex-col justify-center items-center gap-[50px] self-stretch max-w-screen-2xl mx-auto
          lg:flex-col lg:justify-center lg:items-center lg:gap-[50px] lg:self-stretch
          xl:flex-row xl:items-center xl:gap-[50px] xl:self-stretch
          2xl:flex-row 2xl:items-center 2xl:gap-[50px] 2xl:self-stretch
        ">
     
     
     */}
     <div className="
      container mx-auto    max-w-screen-2xl 
      flex flex-col items-center gap-[80px] self-stretch 
      lg:flex-col lg:justify-center lg:items-center lg:gap-[50px] lg:self-stretch
      xl:flex-col xl:items-center xl:gap-[50px] xl:self-stretch
      2xl:flex-col 2xl:items-center 2xl:gap-[50px] 2xl:self-stretch
     ">
      {/* top heading + sub-heading holding div */}
      <div className="
       flex flex-col items-center gap-[25px] self-stretch
       md:flex-row md:justify-between md:items-end
       lg:gap-[100px]
      ">
       <h1 className="
        w-full text-[#001D21] font-sans text-[54px] font-[450] leading-[66px] tracking-[-1.62px] text-center
        md:text-left
       ">
        Latest insights and trends
       </h1>
       <p className="
        w-full text-[rgba(0,29,33,0.65)] font-sans text-[14px] font-medium leading-[23px] text-center
        lg:text-left
        2xl:text-end
       ">
        Stay informed with the latest health and wellness insights from our experts.
       </p>
      </div>
      {/* top heading + sub-heading holding div */}
 
   {/* bottom 6 divs holding div */}
<div className="
  grid grid-cols-1 /* 1 card per row for mobile and md */
  lg:grid-cols-2 /* 2 cards per row for lg */
  xl:grid-cols-3 /* 3 cards per row for xl and 2xl */
  sm:gap-[45px]
  md:gap-[45px]
  lg:gap-[65px]
  xl:gap-[45px]
  2xl:gap-[45px] self-stretch
  gap-[45px]
">
  {/* Card 1 */}
  <div className="
    flex flex-col items-start gap-[25px]
  ">
    {/* image holding div */}
    <div className="
      h-[350px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center
      sm:h-[400px]
      md:h-[500px]
      lg:h-[500px]
      xl:h-[331px]
      2xl:h-[331px]
    ">
      <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752988675/Depositphotos_744752180_XL_dyjeic.png"
        alt="Background"
        className="
          absolute inset-0 h-full w-full object-cover
        "
      />
    </div>
    {/* image holding div */}
    {/* bottom info holding div */}
    <div className="
      flex flex-col justify-center items-start gap-[10px] self-stretch
    ">
      <div className="
        flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7]
      ">
        <h6 className="
          text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px]
        ">
          Cloud Computing
        </h6>
      </div>
      <div className="
        flex flex-col items-start gap-[10px] self-stretch
      ">
        <h2 className="
          self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px]
          sm:text-[24px] sm:leading-[31px]
        ">
          Optimizing Costs with Cloud Infrastructure
        </h2>
        <p className="
          self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px]
        ">
          Discover how modern businesses are reducing operational costs and increasing agility with scalable cloud platforms.
        </p>
      </div>
    </div>
    {/* bottom info holding div */}
  </div>
  {/* Card 1 */}

  {/* Card 2 */}
  <div className="
    flex flex-col items-start gap-[25px]
  ">
    {/* image holding div */}
    <div className="
    h-[350px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center
      sm:h-[400px]
      md:h-[500px]
      lg:h-[500px]
      xl:h-[331px]
      2xl:h-[331px]
    ">
      <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753813506/Depositphotos_709787060_XL_qi5trw.jpg"
        alt="Background"
        className="
          absolute inset-0 h-full w-full object-cover
        "
      />
    </div>
    {/* image holding div */}
    {/* bottom info holding div */}
    <div className="
      flex flex-col justify-center items-start gap-[10px] self-stretch
    ">
      <div className="
        flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7]
      ">
        <h6 className="
          text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px]
        ">
          Cybersecurity
        </h6>
      </div>
      <div className="
        flex flex-col items-start gap-[10px] self-stretch
      ">
        <h2 className="
          self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px]
          sm:text-[24px] sm:leading-[31px]
        ">
          Zero Trust Architecture Explained
        </h2>
        <p className="
          self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px]
        ">
          Learn how the zero trust model is reshaping security frameworks to safeguard digital assets in an increasingly remote world.
        </p>
      </div>
    </div>
    {/* bottom info holding div */}
  </div>
  {/* Card 2 */}

  {/* Card 3 */}
  <div className="
    flex flex-col items-start gap-[25px]
  ">
    {/* image holding div */}
    <div className="
   h-[350px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center
      sm:h-[400px]
      md:h-[500px]
      lg:h-[500px]
      xl:h-[331px]
      2xl:h-[331px]
    ">
      <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753814378/Depositphotos_233887380_XL_Large_ec1apz.png"
        alt="Background"
        className="
          absolute inset-0 h-full w-full object-cover
        "
      />
    </div>
    {/* image holding div */}
    {/* bottom info holding div */}
    <div className="
      flex flex-col justify-center items-start gap-[10px] self-stretch
    ">
      <div className="
        flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7]
      ">
        <h6 className="
          text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px]
        ">
          Product Design
        </h6>
      </div>
      <div className="
        flex flex-col items-start gap-[10px] self-stretch
      ">
        <h2 className="
          self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px]
          sm:text-[24px] sm:leading-[31px]
        ">
          Design Systems for Scalable Products
        </h2>
        <p className="
          self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px]
        ">
          Explore the power of design systems in building cohesive user experiences and accelerating product development.
        </p>
      </div>
    </div>
    {/* bottom info holding div */}
  </div>
  {/* Card 3 */}

  {/* Card 4 */}
  <div className="
    flex flex-col items-start gap-[25px]
  ">
    {/* image holding div */}
    <div className="
     h-[350px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center
      sm:h-[400px]
      md:h-[500px]
      lg:h-[500px]
      xl:h-[331px]
      2xl:h-[331px]
    ">
      <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753814252/Depositphotos_12376735_XL_xxwnd4.jpg"
        alt="Background"
        className="
          absolute inset-0 h-full w-full object-cover
        "
      />
    </div>
    {/* image holding div */}
    {/* bottom info holding div */}
    <div className="
      flex flex-col justify-center items-start gap-[10px] self-stretch
    ">
      <div className="
        flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7]
      ">
        <h6 className="
          text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px]
        ">
          DevOps
        </h6>
      </div>
      <div className="
        flex flex-col items-start gap-[10px] self-stretch
      ">
        <h2 className="
          self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px]
          sm:text-[24px] sm:leading-[31px]
        ">
          CI/CD Pipelines That Power Innovation
        </h2>
        <p className="
          self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px]
        ">
          Understand how continuous integration and delivery pipelines are streamlining development cycles and reducing time-to-market.
        </p>
      </div>
    </div>
    {/* bottom info holding div */}
  </div>
  {/* Card 4 */}

  {/* Card 5 */}
  <div className="
    flex flex-col items-start gap-[25px]
  ">
    {/* image holding div */}
    <div className="
   h-[350px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center
      sm:h-[400px]
      md:h-[500px]
      lg:h-[500px]
      xl:h-[331px]
      2xl:h-[331px]
    ">
      <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753014374/Depositphotos_350872620_XL_1_pkwovx.png"
        alt="Background"
        className="
          absolute inset-0 h-full w-full object-cover
        "
      />
    </div>
    {/* image holding div */}
    {/* bottom info holding div */}
    <div className="
      flex flex-col justify-center items-start gap-[10px] self-stretch
    ">
      <div className="
        flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7]
      ">
        <h6 className="
          text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px]
        ">
          Data Analytics
        </h6>
      </div>
      <div className="
        flex flex-col items-start gap-[10px] self-stretch
      ">
        <h2 className="
          self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px]
          sm:text-[24px] sm:leading-[31px]
        ">
          Leveraging Big Data for Business Decisions
        </h2>
        <p className="
          self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px]
        ">
          Uncover how businesses are turning massive datasets into actionable insights using advanced analytics.
        </p>
      </div>
    </div>
    {/* bottom info holding div */}
  </div>
  {/* Card 5 */}

  {/* Card 6 */}
  <div className="
    flex flex-col items-start gap-[25px]
  ">
    {/* image holding div */}
    <div className="
    h-[350px] self-stretch rounded-[14px] relative overflow-hidden bg-cover bg-no-repeat bg-center
      sm:h-[400px]
      md:h-[500px]
      lg:h-[500px]
      xl:h-[331px]
      2xl:h-[331px]
    ">
      <img
        src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753814140/Depositphotos_659219326_XL_Large_w2kxjq.png"
        alt="Background"
        className="
          absolute inset-0 h-full w-full object-cover
        "
      />
    </div>
    {/* image holding div */}
    {/* bottom info holding div */}
    <div className="
      flex flex-col justify-center items-start gap-[10px] self-stretch
    ">
      <div className="
        flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7]
      ">
        <h6 className="
          text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px]
        ">
          Mobile Development
        </h6>
      </div>
      <div className="
        flex flex-col items-start gap-[10px] self-stretch
      ">
        <h2 className="
          self-stretch text-[#001D21] font-sans text-[20px] font-medium leading-[28px] tracking-[-1.56px]
          sm:text-[24px] sm:leading-[31px]
        ">
          Progressive Web Apps
        </h2>
        <p className="
          self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px]
        ">
          Dive into how PWAs are bridging the gap between web and native apps to offer fast, offline-ready experiences.
        </p>
      </div>
    </div>
    {/* bottom info holding div */}
  </div>
  {/* Card 6 */}
</div>
{/* bottom 6 divs holding div */}

     </div>
     {/* content holding div */}
    </div>
    {/* main outer hero section div */}
   </>
  );
 }