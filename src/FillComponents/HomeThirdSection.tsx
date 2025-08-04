import OutlineServicesButton from "@/ButtonVariants/OutlineOurServices";

export default function FillHomeThirdSection() {
  return (
    <>
      {/* main outer hero section div */}
      <div className="
        flex flex-col items-start gap-[10px] self-stretch px-[40px] py-[65px] bg-[#F9F9F7]
        md:p-[65px]
        2xl:px-[100px] 2xl:py-[65px]
      ">

        {/* content holding div */}
        <div className="
          flex flex-col justify-center items-center gap-[50px] self-stretch
          max-w-screen-sm mx-auto w-full
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:flex-row xl:items-center xl:max-w-screen-xl
          2xl:max-w-screen-2xl
        ">

          {/* information holding div */}
          <div className="
            flex flex-col justify-center items-center gap-[45px] self-stretch
            xl:items-start xl:flex-[1_0_0] xl:self-auto
          ">

            {/* top most div */}
            <div className="
              flex flex-col justify-center items-start gap-[20px] self-stretch
              xl:self-auto
            ">

              {/* Upper div holding heading + dot */}
              <div className="
                flex justify-center items-center gap-[11px] self-stretch
                xl:justify-start xl:self-auto
              ">
                <div className="
                  flex w-[12px] h-[12px] justify-center items-center rounded-[32px] bg-[#001D21]
                ">
                </div>
                <h2 className="
                  text-[#001D21] [font-feature-settings:'liga_off,_clig_off'] font-sans text-[15px] font-[400] leading-[24.011px] tracking-[0.45px] text-center
                  xl:text-center xl:[font-feature-settings:'normal']
                ">
                  About Insignia
                </h2>
              </div>
              {/* Upper div holding heading + dot */}

              <h1 className="
                self-stretch text-[#001D21] text-center font-sans text-[54px] font-[450] leading-[66px] tracking-[-1.62px]
                xl:text-left
              ">
                Scaling your systems
                with confidence
              </h1>
            </div>
            {/* top most div */}

            {/* middle div with 3 pointers */}
            <div className="
              flex flex-col justify-center items-center gap-[35px] self-stretch
              lg:flex-row lg:justify-center lg:items-start
              xl:flex-col xl:justify-center xl:items-start
            ">

              {/* 1st main pointer div */}
              <div className="
                flex flex-col items-center gap-[32px] flex-1 self-stretch
                xl:flex-row xl:items-center xl:flex-initial
              ">
                {/* main icon holder div) */}
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center rounded-[12px] bg-[#001D21]
                ">
                  <div className="
                    flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
                  ">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752902989/Vector_1_gwa2mr.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* main icon holder div) */}
                <h3 className="
                  self-stretch text-[#807F7E] text-center font-medium text-[14px] leading-[23px] [font-feature-settings:'liga_off','clig_off']
                  xl:flex-1 xl:text-left xl:[font-feature-settings:'normal']
                ">
                  Whether you’re launching a startup or scaling enterprise infrastructure, our platform adapts to your unique objectives.
                </h3>
              </div>
              {/* 1st main pointer div */}

              {/* 2nd main pointer div */}
              <div className="
                flex flex-col items-center gap-[32px] flex-1 self-stretch
                xl:flex-row xl:items-center xl:flex-initial
              ">
                {/* main icon holder div) */}
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center rounded-[12px] bg-[#001D21]
                ">
                  <div className="
                    flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
                  ">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752902995/ic_sharp-shield_ylk0d1.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* main icon holder div) */}
                <h3 className="
                  self-stretch text-[#807F7E] text-center font-medium text-[14px] leading-[23px] [font-feature-settings:'liga_off','clig_off']
                  xl:flex-1 xl:text-left xl:[font-feature-settings:'normal']
                ">
                  We safeguard your data and workflows with robust, enterprise-grade security protocols throughout the lifecycle.
                </h3>
              </div>
              {/* 2nd main pointer div */}

              {/* 3rd main pointer div */}
              <div className="
                flex flex-col items-center gap-[32px] flex-1 self-stretch
                xl:flex-row xl:items-center xl:flex-initial
              ">
                {/* main icon holder div) */}
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center rounded-[12px] bg-[#001D21]
                ">
                  <div className="
                    flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
                  ">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752903001/fa6-solid_user-group_mmpuxd.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* main icon holder div) */}
                <h3 className="
                  self-stretch text-[#807F7E] text-center font-medium text-[14px] leading-[23px] [font-feature-settings:'liga_off','clig_off']
                  xl:flex-1 xl:text-left xl:[font-feature-settings:'normal']
                ">
                  Our team collaborates with you to deliver optimal architecture, cost-efficiency, and long-term growth.
                </h3>
              </div>
              {/* 3rd main pointer div */}
            </div>
            {/* middle div with 3 pointers */}

            <OutlineServicesButton />

          </div>
          {/* information holding div */}

          {/* image holding div */}
          <div className="
            flex items-center gap-[10px] flex-1 self-stretch rounded-[24px] bg-cover bg-no-repeat bg-center
            h-[300px]  {/* Base height for smaller screens */}
            lg:h-[590px]
          ">
            <img
              src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753550607/Depositphotos_295658812_XL_Large_puckuq.png"
              alt="Descriptive Alt"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
          {/* image holding div */}
        </div>
        {/* content holding div */}
      </div>
      {/* main outer hero section div */}
    </>
  );
}