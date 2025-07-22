import FeaturesHeroSection from "@/component2/FeaturesHeroSection"
import FeaturesSecondSection from "@/component2/FeaturesSecondSection"
import FeaturesThirdSection from "@/component2/FeaturesThirdSection"
import FeaturesFourthSection from "@/component2/FeaturesFourthSection"
import FeaturesFifthSection from "@/component2/FeaturesFifthSection"
import FeaturesSixthSection from "@/component2/FeaturesSixthSection"
import FeaturesSeventhSection from "@/component2/FeaturesSeventhSection"

export default function () {


return ( 
 <>

<div className="flex flex-col items-center gap-[100px] flex-[1_0_0] bg-white">


<FeaturesHeroSection/>
<FeaturesSecondSection/>
<FeaturesThirdSection/>
<FeaturesFourthSection/>
<FeaturesFifthSection/>
<FeaturesSixthSection/>
<FeaturesSeventhSection/>


</div>
 </>
 )

}