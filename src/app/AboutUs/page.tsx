
import FillAboutUsFifthSection from "@/FillComponents/FillAboutUsFifthSection"
import FillAboutUsFourthSection from "@/FillComponents/FillAboutUsFourthSection"
import FillAboutUsSection from "@/FillComponents/FillAboutUsHeroSection"
import FillAboutUsSecondSection from "@/FillComponents/FillAboutUsSecondSection"
import FillAboutUsSeventhSection from "@/FillComponents/FillAboutUsSeventhSection"
import FillAboutUsSixthSection from "@/FillComponents/FillAboutUsSixthSection"
import GlobePointerSection from "@/FillComponents/GlobePointers"
import InsigniaEngageSection from "@/FillComponents/InsigniaEngage"
import OurCapabilitiesSection from "@/FillComponents/OurCapabilities"

import FillReinventAIsection from "@/FillComponents/ReinventAI"
import SpecificPropositionSection from "@/FillComponents/specifics"


  {/* image holding div
   

   <FillFeaturesHeroSection/>
 <FillFeaturesSecondSection/>
 <FillFeaturesThirdSection/>
 <FillFeaturesFourthSection/>
 <FillFeaturesFifthSection/>


   
   */}


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
   
 
 

 <FillAboutUsSection/>

 <OurCapabilitiesSection/>
 <SpecificPropositionSection/>
 <FillReinventAIsection/>

 <GlobePointerSection/>
 
 <FillAboutUsFourthSection/>
 <FillAboutUsSecondSection/>
 
<InsigniaEngageSection/>
 <FillAboutUsFifthSection/>
 <FillAboutUsSixthSection/>
 <FillAboutUsSeventhSection/>

 
 
 
 
 
 
 </div>
 
 
  </>
  )
 
 }