import OutlineServicesButton from "@/ButtonVariants/OutlineOurServices";

export default function InsigniaEngageSection() {
  return (
    <>
      {/* main outer hero section div */}
      <div className="
        flex flex-col items-start gap-[10px] self-stretch px-[20px] py-[40px] bg-[#001D21]
        sm:px-[40px] sm:py-[65px]
        md:px-[60px] md:py-[65px]
        lg:px-[80px] lg:py-[65px]
        xl:px-[100px] xl:py-[65px]
        2xl:px-[100px] 2xl:py-[65px]
      ">
        {/* content holding div */}
        <div className="
          flex flex-col items-center gap-[80px] w-full mx-auto
          max-w-full /* Ensures it respects parent padding initially */
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-screen-2xl 
        ">

          {/* top heading + sub-heading holding div */}
          <div className="
            flex flex-col items-center gap-[20px] w-full
            lg:w-[690px] /* Fixed width for larger screens */
            lg:self-center /* Center the fixed-width div */
            xl:w-[690px]
            2xl:w-[690px]
          ">
            <h1 className="
              self-stretch text-[#FAFAFA] text-center font-sans
              text-[30px] leading-[40px] tracking-[-0.9px] font-medium /* Base for smallest screens */
              sm:text-[36px] sm:leading-[45px] sm:tracking-[-1.08px]
              md:text-[48px] md:leading-[59px] md:tracking-[-1.44px]
            ">
            Precision Expertise for Any Enterprise
            </h1>

            <p className="
              self-stretch text-[rgba(250,250,250,0.75)] text-center font-sans
              text-[13px] leading-[20px] font-medium /* Base for smallest screens */
              sm:text-[14px] sm:leading-[23px]
            ">
        From Fortune 500 enterprises to mission-critical government programs, our cross-functional strategists bring deep technical mastery and strategic foresight to every facet of your digital journey.
            </p>
          </div>
          {/* top heading + sub-heading holding div */}

          {/* bottom 3 divs holding div */}
          <div className="
            flex flex-col items-start gap-[20px] self-stretch w-full /* Base for smallest screens */
            lg:grid lg:grid-cols-2 lg:gap-[20px] /* Grid for lg breakpoint */
            xl:flex xl:flex-row /* Back to  for xl and 2xl */
            2xl:flex 2xl:flex-row
          ">

            {/* 1st div card */}
            <div className="
              flex flex-col justify-center items-start gap-[138px] rounded-[24px] bg-[#0C2D32]
              py-[26px] px-[25px] flex-1 self-stretch w-full /* Base for smallest screens */
            ">
              {/* top tag */}
              <div className="
                flex py-[8px] px-[15px] justify-center items-center gap-[10px] rounded-[24px] bg-[#0C393F] /* Base for smallest screens */
              ">
                <span className="
                  text-[#FAFAFA] text-center [font-feature-settings:'liga_off','clig_off'] font-sans
                  text-[15px] font-[550] leading-[24.011px] tracking-[0.45px] /* Base for smallest screens */
                ">
                 AI & Machine Learning
                </span>
              </div>
              {/* top tag */}

              {/* bottom div */}
              <div className="
                flex flex-col items-start self-stretch /* Base for smallest screens */
              ">
                <h3 className="
                  self-stretch text-[#FAFAFA] font-medium font-sans
                  text-[18px] leading-[30px] tracking-[-0.54px] /* Base size for h3 */
                  sm:text-[20px] sm:leading-[38px] sm:tracking-[-0.6px]
                ">
                 Generative AI & MLOps
                </h3>
                <p className="
                  self-stretch text-[rgba(250,250,250,0.60)] font-medium font-sans
                  text-[16px] leading-[24px] tracking-[-0.48px] /* Base size for p */
                  sm:text-[20px] sm:leading-[30px] sm:tracking-[-0.6px]
                ">
We architect, develop, and integrate cutting-edge AI systems designed for real-world impact. LLM integration, advanced embedding strategies, vector database optimization, and secure RAG architectures.
                </p>
              </div>
              {/* bottom div */}
            </div>
            {/* 1st div card */}

            {/* 2nd div card */}
            <div className="
              flex flex-col justify-center items-start gap-[138px] rounded-[24px] bg-[#0C2D32]
              py-[26px] px-[25px] flex-1 self-stretch w-full /* Base for smallest screens */
            ">
              {/* top tag */}
              <div className="
                flex py-[8px] px-[15px] justify-center items-center gap-[10px] rounded-[24px] bg-[#0C393F] /* Base for smallest screens */
              ">
                <span className="
                  text-[#FAFAFA] text-center [font-feature-settings:'liga_off','clig_off'] font-sans
                  text-[15px] font-[550] leading-[24.011px] tracking-[0.45px] /* Base for smallest screens */
                ">
                 Data & Cloud
                </span>
              </div>
              {/* top tag */}

              {/* bottom div */}
              <div className="
                flex flex-col items-start self-stretch /* Base for smallest screens */
              ">
                <h3 className="
                  self-stretch text-[#FAFAFA] font-medium font-sans
                  text-[18px] leading-[30px] tracking-[-0.54px] /* Base size for h3 */
                  sm:text-[20px] sm:leading-[38px] sm:tracking-[-0.6px]
                ">
                 Cloud-Native Re-Architecture
                </h3>
                <p className="
                  self-stretch text-[rgba(250,250,250,0.60)] font-medium font-sans
                  text-[16px] leading-[24px] tracking-[-0.48px] /* Base size for p */
                  sm:text-[20px] sm:leading-[30px] sm:tracking-[-0.6px]
                ">
We re-architect legacy sprawl into streamlined, scalable cloud-native platforms. Our approach aligns data strategy with real-world cost, performance, and agility outcomes, modernizing data platforms across industries
                </p>
              </div>
              {/* bottom div */}
            </div>
            {/* 2nd div card */}

            {/* 3rd div card */}
            <div className="
              flex flex-col justify-center items-start gap-[138px] rounded-[24px] bg-[#0C2D32]
              py-[26px] px-[25px] flex-1 self-stretch w-full /* Base for smallest screens */
            ">
              {/* top tag */}
              <div className="
                flex py-[8px] px-[15px] justify-center items-center gap-[10px] rounded-[24px] bg-[#0C393F] /* Base for smallest screens */
              ">
                <span className="
                  text-[#FAFAFA] text-center [font-feature-settings:'liga_off','clig_off'] font-sans
                  text-[15px] font-[550] leading-[24.011px] tracking-[0.45px] /* Base for smallest screens */
                ">
                Agile Transformation & DevOps
                </span>
              </div>
              {/* top tag */}

              {/* bottom div */}
              <div className="
                flex flex-col items-start self-stretch /* Base for smallest screens */
              ">
                <h3 className="
                  self-stretch text-[#FAFAFA] font-medium font-sans
                  text-[18px] leading-[30px] tracking-[-0.54px] /* Base size for h3 */
                  sm:text-[20px] sm:leading-[38px] sm:tracking-[-0.6px]
                ">
                  Agile at Enterprise Scale
                </h3>
                <p className="
                  self-stretch text-[rgba(250,250,250,0.60)] font-medium font-sans
                  text-[16px] leading-[24px] tracking-[-0.48px] /* Base size for p */
                  sm:text-[20px] sm:leading-[30px] sm:tracking-[-0.6px]
                ">
We enable adaptive systems that deliver with speed, predictability, and strategic cohesion. From SAFe Release Trains and DevOps coaching to CI/CD acceleration, we embed agility not just in process, but in purpose and culture.
                </p>
              </div>
              {/* bottom div */}
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