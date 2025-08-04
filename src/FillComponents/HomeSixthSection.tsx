export default function FillHomeSixthSection () {
  return (
    <>
      {/* main outer hero section div */}
      <div className="
        flex flex-col items-start gap-[10px] self-stretch px-[40px] py-[65px] bg-[#001D21]
        sm:px-[40px] sm:py-[65px]
        md:p-[65px]
        lg:p-[65px]
        xl:p-[65px]
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
           ">
            <h1 className="
              self-stretch text-[#FAFAFA] text-center font-sans text-[48px] font-medium leading-[59px] tracking-[-1.44px]
            ">
              Core strengths that give us a competitive edge
            </h1>
            <p className="
              self-stretch text-[rgba(250,250,250,0.75)] text-center font-inter text-[14px] font-medium leading-[23px]
            ">
              Explore the standout capabilities that drive exceptional results—designed to set us apart in the digital, AI, and cloud-tech landscape.
            </p>
          </div>
          {/* top heading + sub-heading holding div */}
 
          {/* bottom 3 divs holding div */}
          <div className="
            flex flex-col justify-center items-center gap-[40px] self-stretch
            md:flex-col
            lg:flex-col
            xl:flex-row
            2xl:flex-row
          ">
            {/* 2 divs holding div (left column for 2xl, xl; row for lg, md; col for sm) */}
            <div className="
              flex flex-col justify-center items-start gap-[40px] flex-[1_0_0] self-stretch
              sm:flex-col
              md:flex-row md:items-start
              lg:flex-row lg:items-start
              xl:flex-col
              2xl:flex-col
            ">
              {/* 1st div (card) */}
              <div className="
                flex p-[26px_20px] flex-col items-start gap-[50px] self-stretch flex-[1_0_0] rounded-[20px] bg-[#0C2D32] justify-start
              ">
                {/*icon holding div */}
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]
                ">
                  <div className="
                    flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
                  ">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752917499/TUy33ttumlXut3M4U8wuILYrJA_2_usdawi.png"
                      alt="Icon"
                      className="
                        w-full h-full object-contain
                      "
                    />
                  </div>
                </div>
                {/*icon holding div */}
 
                {/*Title + paragraph holding div */}
                <div className="
                  flex flex-col items-start gap-[7px] self-stretch
                ">
                  <h2 className="
                    self-stretch text-[#FAFAFA] font-medium text-[18px] leading-[27px] tracking-[-0.54px] font-sans
                  ">
                    Real-time performance insights
                  </h2>
                  <p className="
                    self-stretch text-[18px] leading-[24px] tracking-[-0.54px] font-medium text-[rgba(250,250,250,0.60)] font-sans
                  ">
                    Gain deep visibility into your system’s behavior with live performance dashboards powered by AI and monitoring tools.
                  </p>
                </div>
                {/*Title + paragraph holding div */}
              </div>
              {/* 1st div (card) */}
 
              {/* 2nd div (card) */}
              <div className="
                flex p-[26px_20px] flex-col items-start gap-[50px] self-stretch rounded-[20px] bg-[#0C2D32] flex-[1_0_0] justify-start
              ">
                {/*icon holding div */}
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]
                ">
                  <div className="
                    flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
                  ">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752917509/G7i6ylY371jRoywiHmIZr0own2w_2_hdxiif.png"
                      alt="Icon"
                      className="
                        w-full h-full object-contain
                      "
                    />
                  </div>
                </div>
                {/*icon holding div */}
 
                {/*Title + paragraph holding div */}
                <div className="
                  flex flex-col items-start gap-[7px] self-stretch
                ">
                  <h2 className="
                    self-stretch text-[#FAFAFA] font-medium text-[18px] leading-[27px] tracking-[-0.54px] font-sans
                  ">
                    Cross-platform compatibility
                  </h2>
                  <p className="
                    self-stretch text-[18px] leading-[24px] tracking-[-0.54px] font-medium text-[rgba(250,250,250,0.60)] font-sans
                  ">
                    Deliver seamless user experiences across devices with our responsive and mobile-optimized app development.
                  </p>
                </div>
                {/*Title + paragraph holding div */}
              </div>
              {/* 2nd div (card) */}
            </div>
            {/* 2 divs holding div */}
 
            {/* Image holding div */}
            <div className="
              flex justify-center items-center gap-[10px] flex-1 self-stretch rounded-[24px] bg-[url('/path-to-image.jpg')] bg-cover bg-no-repeat bg-center
            ">
              <img
                src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753618193/Depositphotos_752263652_XL_Large_s7smpw.png"
                alt="Image Description"
                className="
                  w-full h-full object-cover rounded-[24px]
                "
              />
            </div>
            {/* Image holding div */}
 
            {/* 2 divs holding div (right column for 2xl, xl; row for lg, md; col for sm) */}
            <div className="
              flex flex-col justify-center items-start gap-[40px] flex-[1_0_0] self-stretch
              sm:flex-col
              md:flex-row md:items-start
              lg:flex-row lg:items-start
              xl:flex-col
              2xl:flex-col
            ">
              {/* 1st div (card) */}
              <div className="
                flex p-[26px_20px] flex-col items-start gap-[50px] self-stretch rounded-[20px] bg-[#0C2D32] flex-[1_0_0] justify-start
              ">
                {/*icon holding div */}
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]
                ">
                  <div className="
                    flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
                  ">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752917520/ZXlFWhKtqk4tYq7ooq4jUDDOZM_2_iiucbr.png"
                      alt="Icon"
                      className="
                        w-full h-full object-contain
                      "
                    />
                  </div>
                </div>
                {/*icon holding div */}
 
                {/*Title + paragraph holding div */}
                <div className="
                  flex flex-col items-start gap-[7px] self-stretch
                ">
                  <h2 className="
                    self-stretch text-[#FAFAFA] font-medium text-[18px] leading-[27px] tracking-[-0.54px] font-sans
                  ">
                    Custom workflows
                  </h2>
                  <p className="
                    self-stretch text-[18px] leading-[24px] tracking-[-0.54px] font-medium text-[rgba(250,250,250,0.60)] font-sans
                  ">
                    Streamline complex dev processes with fully customizable automation pipelines and CI/CD integrations.
                  </p>
                </div>
                {/*Title + paragraph holding div */}
              </div>
              {/* 1st div (card) */}
 
              {/* 2nd div (card) */}
              <div className="
                flex p-[26px_20px] flex-col items-start gap-[50px] self-stretch rounded-[20px] bg-[#0C2D32] flex-[1_0_0] justify-start
              ">
                {/*icon holding div */}
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[12px] border border-[#31494A] bg-[#0C393F]
                ">
                  <div className="
                    flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
                  ">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1752917528/BLTOsLWy1jjqmHHsLe8LtoyaNI_3_keazhi.png"
                      alt="Icon"
                      className="
                        w-full h-full object-contain
                      "
                    />
                  </div>
                </div>
                {/*icon holding div */}
 
                {/*Title + paragraph holding div */}
                <div className="
                  flex flex-col items-start gap-[7px] self-stretch
                ">
                  <h2 className="
                    self-stretch text-[#FAFAFA] font-medium text-[18px] leading-[27px] tracking-[-0.54px] font-sans
                  ">
                    Enterprise-grade security
                  </h2>
                  <p className="
                    self-stretch text-[18px] leading-[24px] tracking-[-0.54px] font-medium text-[rgba(250,250,250,0.60)] font-sans
                  ">
                    Protect your infrastructure and data with advanced security protocols, encryption, and compliance-ready frameworks.
                  </p>
                </div>
                {/*Title + paragraph holding div */}
              </div>
              {/* 2nd div (card) */}
            </div>
            {/* 2 divs holding div */}
          </div>
          {/* bottom 3 divs holding div */}
        </div>
        {/* content holding div */}
      </div>
      {/* main outer hero section div */}
    </>
  );
 }