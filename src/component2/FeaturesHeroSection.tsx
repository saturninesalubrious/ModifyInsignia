export default function FeaturesHeroSection () {

 return ( <>   

 {/* outermost section div holder */}
<div className="flex flex-col justify-center items-center gap-[80px] px-[100px] py-[100px] self-stretch bg-[#001D21]">
  

{/* topmost div holder heading + mini heading holder div */}
<div className="flex w-[690px] flex-col items-center gap-[20px]">
  

<h1 className="self-stretch text-white text-center font-inter text-[64px] font-medium leading-[69px] tracking-[-2.56px]">
Built for Performance, Designed for Impact
</h1>

<p className="self-stretch text-[#BFBEBE] text-center font-inter text-[14px] font-medium leading-[23px]">
From AI-driven automation to secure cloud-native frameworks, our platform is packed with powerful features to help you build faster, operate smarter, and scale with confidence.
</p>


</div>
{/* topmost div holder heading + mini heading holder div */}

{/* bottom div holder containing 3 mini divs */}


<div className="flex justify-center items-center gap-[20px] self-stretch">
  

<div className="flex w-[396px] h-[449px] flex-col justify-center items-center rounded-[20px] bg-white">
  <img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753002832/Depositphotos_738276780_XL_fbca7r.png" alt="Your image description" className="w-full h-auto rounded-[20px]" />
</div>




<div className="flex w-[396px] h-[449px] flex-col justify-center items-center rounded-[20px] bg-white">
  <img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753002853/Depositphotos_295658812_XL_1_tby4mk.png" alt="Your image description" className="w-full h-auto rounded-[20px]" />
</div>





<div className="flex w-[396px] h-[449px] flex-col justify-center items-center rounded-[20px] bg-white">
  <img src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753002844/Depositphotos_230914334_XL_2_zbqs7x.png" alt="Your image description" className="w-full h-auto rounded-[20px]" />
</div>


</div>


{/* bottom div holder containing 3 mini divs */}



</div>
{/* outermost section div holder */}

  </>)
}
