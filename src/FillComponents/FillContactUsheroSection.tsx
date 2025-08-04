export default function FillContactUsHeroSection () {


  return ( 
   <>
    
 
    {/* main outer hero section div */}
    <div className="
    flex flex-col items-start gap-[10px] self-stretch px-[40px] py-[90px] bg-[#F9F9F7]
    sm:px-[40px] sm:py-[90px]
    md:px-[65px] md:py-[90px]
    lg:p-[90px]
    xl:p-[90px]
    2xl:px-[100px] 2xl:py-[90px] bg-cover bg-center bg-no-repeat 
    ">
   
 
 
 
 
 
   {/* content holding div */}
 
   <div className="
           flex flex-col  gap-[80px] w-full mx-auto
           max-w-full /* Ensures it respects parent padding initially */
           sm:max-w-screen-sm  sm:items-start
           md:max-w-screen-md  md:items-center
           lg:max-w-screen-lg lg:items-center
           xl:max-w-screen-xl  xl:items-start
           2xl:max-w-screen-2xl  2xl:items-start
         ">
 
   {/* top heading + sub-heading holding div */}
   <div className="
     flex flex-col items-center gap-[25px] self-stretch
     lg:flex-row lg:justify-between lg:items-end lg:gap-[100px]
   ">
 
     <h1 className="
       text-[#001D21] font-sans font-[450] text-[62px] text-center leading-[66px] tracking-[-1.62px]
       xl:text-left
     ">
       Reach out today
     </h1>
 
   </div>
   {/* top heading + sub-heading holding div */}
 
   {/* content holding div */}
   <div className="
     flex flex-col items-start justify-center gap-[55px] self-stretch w-full
     lg:flex-row lg:items-start lg:justify-start lg:gap-[55px]
   ">
 
     {/* extreme left holding div form */}
     <div className="
       flex flex-col items-start justify-center gap-[75px] self-stretch w-full shrink-0
       lg:flex-[1_0_0] lg:gap-[75px]
       2xl:gap-[100px]
     ">
 
       {/* upper fields holder div */}
       <div className="
         flex flex-col items-start justify-center gap-[30px] self-stretch shrink-0
       ">
         <form className="
           flex flex-col items-start justify-center gap-[30px] self-stretch shrink-0
           lg:gap-[75px]
         ">
           <div className="
             flex flex-col items-start justify-center gap-[30px] self-stretch shrink-0
           ">
 
             {/* Full name input */}
             <div className="
               flex flex-col items-start gap-[10px] self-stretch shrink-0
             ">
               <label className="
                 flex h-[15px] flex-col justify-center text-[#2D4447] font-inter font-medium text-[16px] leading-[24.011px]
               ">
                 Full name
               </label>
               <input
                 type="text"
                 id="fullName"
                 name="fullName"
                 placeholder="Your Name"
                 className="
                   flex h-[63px] px-[24px] flex-col justify-center items-start gap-[10px] shrink-0 self-stretch
                   text-[#001D21] font-inter font-[425] text-[16px] leading-[24.011px] rounded-[10px] border border-[#D7D7D7]
                 "
               />
             </div>
 
             {/* Email input */}
             <div className="
               flex flex-col items-start gap-[10px] self-stretch
             ">
               <label className="
                 flex h-[15px] flex-col justify-center text-[#2D4447] font-inter font-medium text-[16px] leading-[24.011px]
               ">
                 Email Address
               </label>
               <input
                 type="text"
                 id="emailAddress"
                 name="emailAddress"
                 placeholder="Email Address"
                 className="
                   flex h-[63px] px-[24px] flex-col justify-center items-start gap-[10px] shrink-0 self-stretch
                   text-[#001D21] font-inter font-[425] text-[16px] leading-[24.011px] rounded-[10px] border border-[#D7D7D7]
                 "
               />
             </div>
 
             {/* Message input */}
             <div className="
               flex flex-col items-start gap-[10px] self-stretch
             ">
               <label className="
                 flex h-[15px] flex-col justify-center text-[#2D4447] font-sans font-medium text-[16px] leading-[24.011px]
               ">
                 Message
               </label>
               <textarea
                 id="message"
                 name="message"
                 rows={6}
                 placeholder="Your Message"
                 className="
                   flex h-[210px] px-[24px] py-[24px] flex-col justify-center items-start gap-[10px] shrink-0 self-stretch
                   text-[#001D21] font-inter font-[425] text-[16px] leading-[24.011px] rounded-[10px] border border-[#D7D7D7]
                 "
               ></textarea>
             </div>
           </div>
           <button className="
             flex w-full h-[48px] items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px]
             bg-[#001D21] border border-[#D7D7D7] text-white text-center text-[15px] leading-[16px] tracking-[0.45px] font-[550] font-sans
             lg:w-fit
           ">
             Submit
           </button>
         </form>
       </div>
       {/* upper fields holder div */}
     </div>
     {/* extreme left holding div form */}
 
     {/* extreme right holding div */}
     <div className="
       flex w-full self-stretch p-[30px] justify-center items-center gap-[10px] rounded-[16px] bg-white
       lg:w-[351px]
     ">
 
       {/* main internal holding div */}
       <div className="
         flex flex-col items-start gap-[30px] flex-[1_0_0]
       ">
 
         <div className="
           flex flex-col items-start gap-[10px] self-stretch
         ">
           <h2 className="
             self-stretch text-[#2D4447] font-sans font-medium text-[16px] leading-[31px] tracking-[-1.56px]
           ">
             Email:
           </h2>
           <h2 className="
             self-stretch text-[#2D4447] font-sans font-medium text-[20px] leading-[31px] tracking-[-1.56px]
           ">
             sales@insigniaconsultancy.com
           </h2>
         </div>
 
         <div className="
           flex flex-col items-start gap-[10px] self-stretch
         ">
           <h2 className="
             self-stretch text-[#2D4447] font-sans font-medium text-[16px] leading-[31px] tracking-[-1.56px]
           ">
             Phone:
           </h2>
           <h2 className="
             self-stretch text-[#2D4447] font-sans font-medium text-[20px] leading-[31px] tracking-[-1.56px]
           ">
             +15107099142
           </h2>
         </div>
 
         <div className="
           flex flex-col items-start gap-[10px] self-stretch
         ">
           <h2 className="
             self-stretch text-[#2D4447] font-sans font-medium text-[16px] leading-[31px] tracking-[-1.56px]
           ">
             Office:
           </h2>
           <h2 className="
             self-stretch text-[#2D4447] font-sans font-medium text-[20px] leading-[31px] tracking-[-1.56px]
           ">
             806 W Coffin St, Dennision, TX USA
           </h2>
         </div>
 
         <div className="
           flex flex-col items-start gap-[10px] self-stretch
         ">
           <h2 className="
             self-stretch text-[#2D4447] font-sans font-medium text-[16px] leading-[31px] tracking-[-1.56px]
           ">
             Follow Us
           </h2>
           <div className="
             flex flex-row items-center gap-[15px] self-stretch
           ">
 
             {/* Social Icons */}
             {['https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188880/Vector_12_i8pdf0.png',
               'https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188868/Group_81783_zat013.png',
               'https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188890/Vector_13_qjtjgu.png',
               'https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188860/Vector_11_mofa7b.png'].map((src, index) => (
               <div key={index} className="
                 flex w-[40px] h-[40px] justify-center items-center gap-[10px] rounded-[100px] border border-[#0C393F] bg-[#0C393F]
               ">
                 <div className="
                   flex w-[20px] h-[20px] justify-center items-center shrink-0
                 ">
                   <img
                     src={src}
                     alt="Icon"
                     className="
                       w-full h-full object-contain
                     "
                   />
                 </div>
               </div>
             ))}
           </div>
         </div>
 
       </div>
       {/* main internal holding div */}
     </div>
     {/* extreme right holding div */}
   </div>
   {/* content holding div */}
 </div>
 
   {/* content holding div */}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    </div>
    {/* main outer hero section div */}
 
   
   </>
   )
  
  }