import GlobePointerSection from "@/FillComponents/GlobePointers";
import ImpactSection from "@/FillComponents/ImpactSection";
import OurCapabilitiesHeroSection from "@/FillComponents/OurCapabilitiesHeroSection";
import OurDifferentiatorsSection from "@/FillComponents/OurDifferentiatorsinAI";
import FillReinventAIsection from "@/FillComponents/ReinventAI";





export default function () {


return ( 
 <>

<div className="
2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[100px] 2xl:self-stretch 2xl:bg-white
xl:flex xl:flex-col xl:items-center xl:gap-[100px] xl:self-stretch xl:bg-white
lg:flex lg:flex-col lg:items-center lg:gap-[100px] lg:self-stretch lg:bg-white
md:flex md:flex-col md:items-center md:gap-[100px] md:self-stretch md:bg-white
sm:flex sm:flex-col sm:items-center sm:gap-[100px] sm:self-stretch sm:bg-white

">
  



<OurCapabilitiesHeroSection/>
<FillReinventAIsection/>
<GlobePointerSection/>
<OurDifferentiatorsSection/>
<ImpactSection/>





</div>


 </>
 )

}