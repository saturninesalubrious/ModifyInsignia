
import OutlineServicesButton from "@/Utility components/OutlineOurServicesButton"



export default function  EleventhSection () {

 return ( <>   

 {/* outermost section div holder */}
<div className="flex flex-col justify-center items-center gap-[80px] px-[100px] py-[100px] self-stretch bg-white">
  

<div className="flex flex-col justify-end items-end gap-[10px] h-[573px] flex-shrink-0 self-stretch rounded-[20px] border-[6px] border-[#1E212B] bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.10),0px_15px_30px_0px_rgba(0,0,0,0.10),0px_20px_40px_0px_rgba(0,0,0,0.15)] backdrop-blur-[10px]">


<div className="flex flex-col items-start gap-[20px] absolute left-[70px] top-[38px]">



<h1 className="w-[532px] text-[#001D21] font-[450] text-[42px] leading-[59px] tracking-[-1.26px] font-inter">
Let’s Build Something Impactful—Together
</h1>


<p className="w-[532px] text-[rgba(0,29,33,0.65)] font-medium text-[14px] leading-[23px] font-inter">
We collaborate with changemakers and forward-thinking brands to craft meaningful digital solutions.
</p>


<OutlineServicesButton />

</div>


<img
  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752942557/Group_140091_1_i9sleh.png"
  alt="Your description"
  className="flex w-[916px] h-[425px] flex-col justify-center items-start flex-shrink-0"
/>
</div>


</div>
{/* outermost section div holder */}

  </>)
}
