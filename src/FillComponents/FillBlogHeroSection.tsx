export default function FillBlogHeroSection () {
  return (
   <>
    {/* main outer hero section div */}
    <div className="
     flex flex-col items-start gap-[10px] self-stretch bg-[#F9F9F7]
     px-[40px] py-[65px]

     md:p-[65px]
     2xl:px-[100px]
    ">
     {/* content holding div */}
     <div className="
      container mx-auto
      flex flex-col items-center gap-[80px] self-stretch
     ">
      {/* top heading + sub-heading holding div */}
      <div className="
       flex flex-col items-center gap-[25px] self-stretch
       md:flex-row md:justify-between md:items-end
       lg:gap-[100px]
      ">
       <h1 className="
        w-full text-[#001D21] font-sans text-[62px] text-center font-[450] leading-[66px] tracking-[-1.62px]
        md:text-left
       ">
        Reach out today
       </h1>
      </div>
      {/* top heading + sub-heading holding div */}
 
      {/* content holding div */}
      <div className="
       flex flex-col items-center gap-[55px] self-stretch
       lg:flex-row lg:items-start
      ">
       {/* image holding div */}
       <div className="
        flex items-center w-full shrink-0 gap-[10px] self-stretch rounded-[24px]
     
        h-[350px] 
        sm:h-[400px]     sm:rounded-[14px]
         md:h-[500px]    md:rounded-[14px]
        lg:w-[625px] lg:h-[489px]  lg:rounded-[14px]
        xl:w-[850px] 
        2xl:w-[850px]
       ">
        <img 
         src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753122772/Depositphotos_736802438_XL_ioisem.png" 
         alt="Descriptive Alt" 
         className="
          w-full h-full object-cover rounded-[24px]
         " 
        />
       </div>
       {/* image holding div */}
 
       {/* left heading holding div */}
       <div className="
        flex w-full flex-col items-start justify-between gap-[20px]
       ">
        {/* bottom info holding div */}
        <div className="
         flex flex-col justify-center items-start gap-[20px] self-stretch
        ">
         <div className="
          flex h-[27px] px-[10px] py-[6px] items-start gap-[10px] rounded-[4px] bg-[#EAEAE7]
         ">
          <h6 className="
           text-[#2D4447] font-sans text-[14px] font-medium leading-[15px] tracking-[0.56px]
          ">
           News
          </h6>
         </div>
         <div className="
          flex flex-col items-start gap-[15px] self-stretch
         ">
          <h2 className="
           self-stretch text-[#001D21] font-sans text-[36px] font-medium leading-[31px] tracking-[-1.56px]
          ">
           Building resilience in business
          </h2>
          <p className="
           self-stretch text-[#585858] font-sans text-[16px] font-[450] leading-[22px]
          ">
           Our Finance Insights Blog is dedicated to bringing you the latest news, expert advice, and actionable strategies to help you navigate the complexities of personal and business finance.
          </p>
         </div>
        </div>
        {/* bottom info holding div */}
        <button className="
         flex w-full md:w-auto h-[48px] items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px]
         bg-[#001D21] border border-[#D7D7D7]
         text-white text-center text-[15px] leading-[16px] tracking-[0.45px] font-[550] font-sans
        ">
         Read more
        </button>
       </div>
       {/* left heading holding div */}
      </div>
      {/* content holding div */}
     </div>
     {/* content holding div */}
    </div>
    {/* main outer hero section div */}
   </>
  );
 }