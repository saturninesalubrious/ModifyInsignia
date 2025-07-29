
import FillFeaturesFifthSection from "@/FillComponents/FillFeaturesFifthSection"
import FillFeaturesFourthSection from "@/FillComponents/FillFeaturesFourthSection"
import FillFeaturesHeroSection from "@/FillComponents/FillFeaturesheroSection"
import FillFeaturesSecondSection from "@/FillComponents/FillFeaturesSecondSection"
import FillFeaturesSeventhSection from "@/FillComponents/FillFeaturesSeventhSection"
import FillFeaturesSixthSection from "@/FillComponents/FillFeaturesSixthSection"
import FillFeaturesThirdSection from "@/FillComponents/FillFeaturesThirdSection"

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
   
 
 
 <FillFeaturesHeroSection/>
 <FillFeaturesSecondSection/>
 <FillFeaturesThirdSection/>
 <FillFeaturesFourthSection/>
 <FillFeaturesFifthSection/>
 <FillFeaturesSixthSection/>
 <FillFeaturesSeventhSection/>
 
 
 
 
 
 
 </div>
 
 
  </>
  )
 
 }