import OutlineServicesButton from "@/ButtonVariants/OutlineOurServices";

export default function FillHomeFifthSection () {
  return (
    <>
      {/* main outer hero section div */}
      <div className="
        /* Base (xs) breakpoint - applied below sm */
        flex flex-col items-start gap-[10px] self-stretch px-[20px] py-[40px] bg-[#F9F9F7]

        /* sm breakpoint */
        sm:flex sm:flex-col sm:items-start sm:gap-[10px] sm:self-stretch sm:px-[40px] sm:py-[65px] sm:bg-[#F9F9F7]

        /* md breakpoint */
        md:flex md:flex-col md:items-start md:gap-[10px] md:self-stretch md:px-[60px] md:py-[65px] md:bg-[#F9F9F7]

        /* lg breakpoint */
        lg:flex lg:flex-col lg:items-start lg:gap-[10px] lg:self-stretch lg:px-[80px] lg:py-[65px] lg:bg-[#F9F9F7]

        /* xl breakpoint */
        xl:flex xl:flex-col xl:items-start xl:gap-[10px] xl:self-stretch xl:px-[100px] xl:py-[65px] xl:bg-[#F9F9F7]

        /* 2xl breakpoint */
        2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch 2xl:px-[100px] 2xl:py-[65px] 2xl:bg-[#F9F9F7]
      ">

        {/* content holding div */}
        <div className="
          /* Base (xs) breakpoint - applied below sm, ensuring it doesn't stretch excessively */
          flex flex-col items-center gap-[40px] w-full px-[15px] mx-auto max-w-[400px] /* Example: set a max-width for very small screens */

          /* sm breakpoint */
          sm:flex sm:flex-col sm:items-center sm:gap-[50px] sm:self-stretch sm:px-0 sm:mx-auto 

          /* md breakpoint */
          md:flex md:flex-col md:items-center md:gap-[50px] md:self-stretch md:px-0 md:mx-auto sm:max-w-screen-md

          /* lg breakpoint */
          lg:flex lg:flex-row lg:items-center lg:gap-[50px] lg:self-stretch lg:px-0 lg:mx-auto lg:max-w-screen-lg

          /* xl breakpoint */
          xl:flex xl:flex-row xl:items-center xl:gap-[50px] xl:self-stretch xl:px-0 xl:mx-auto xl:max-w-screen-xl

          /* 2xl breakpoint */
          2xl:flex 2xl:flex-row 2xl:items-center 2xl:gap-[75px] 2xl:self-stretch 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-2xl
        ">

          {/* image holding div */}
          <div className="
            /* Base (xs) breakpoint */
            flex items-center justify-center gap-[10px] w-full h-[200px] rounded-[24px] bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1753604229/Depositphotos_744752180_XL_uvbz98.png')] bg-cover bg-no-repeat bg-center flex-shrink-0

            /* sm breakpoint */
            sm:flex sm:items-center sm:gap-[10px] sm:self-stretch sm:rounded-[24px] sm:bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1753604229/Depositphotos_744752180_XL_uvbz98.png')] sm:bg-cover sm:bg-no-repeat sm:bg-center sm:h-[300px] sm:w-full

            /* md breakpoint */
            md:flex md:items-center md:gap-[10px] md:self-stretch md:rounded-[24px] md:bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1753604229/Depositphotos_744752180_XL_uvbz98.png')] md:bg-cover md:bg-no-repeat md:bg-center md:h-[400px] md:w-full

            /* lg breakpoint */
            lg:flex lg:items-center lg:gap-[10px] lg:self-stretch lg:rounded-[24px] lg:bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1753604229/Depositphotos_744752180_XL_uvbz98.png')] lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-auto lg:flex-[1_0_0]

            /* xl breakpoint */
            xl:flex xl:items-center xl:gap-[10px] xl:flex-[1_0_0] xl:self-stretch xl:rounded-[24px] xl:bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1753604229/Depositphotos_744752180_XL_uvbz98.png')] xl:bg-cover xl:bg-no-repeat xl:bg-center xl:h-auto

            /* 2xl breakpoint */
            2xl:flex 2xl:items-center 2xl:gap-[10px] 2xl:flex-[1_0_0] 2xl:self-stretch 2xl:rounded-[24px] 2xl:bg-[url('https://res.cloudinary.com/dpxtrzlia/image/upload/v1753604229/Depositphotos_744752180_XL_uvbz98.png')] 2xl:bg-cover 2xl:bg-no-repeat 2xl:bg-center 2xl:h-auto
          ">
            <img
              src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753604229/Depositphotos_744752180_XL_uvbz98.png"
              alt="Descriptive Alt"
              className="
              w-full h-full object-cover rounded-[24px]
              "
            />
          </div>
          {/* image holding div */}

          <div className="
            /* Base (xs) breakpoint */
            flex flex-col justify-center items-start gap-[40px] w-full flex-shrink-0

            /* sm breakpoint */
            sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-[50px] sm:flex-[1_0_0]

            /* md breakpoint */
            md:flex md:flex-col md:justify-center md:items-start md:gap-[75px] md:flex-[1_0_0]

            /* lg breakpoint */
            lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-[75px] lg:flex-[1_0_0]

            /* xl breakpoint */
            xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-[75px] xl:flex-[1_0_0]

            /* 2xl breakpoint */
            2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[75px] 2xl:flex-[1_0_0]
          ">

            {/* Main Information wrapper */}
            <div className="
              /* Base (xs) breakpoint */
              flex flex-col justify-center items-start gap-[15px] self-stretch

              /* sm breakpoint */
              sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-[20px] sm:self-stretch

              /* md breakpoint */
              md:flex md:flex-col md:justify-center md:items-start md:gap-[20px] md:self-stretch

              /* lg breakpoint */
              lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-[20px] lg:self-stretch

              /* xl breakpoint */
              xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-[20px] xl:self-stretch

              /* 2xl breakpoint */
              2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[20px] 2xl:self-stretch
            ">

              {/* top most div */}
              <div className="
                /* Base (xs) breakpoint */
                flex flex-col justify-center items-start gap-[15px] self-stretch

                /* sm breakpoint */
                sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-[20px] sm:self-stretch

                /* md breakpoint */
                md:flex md:flex-col md:justify-center md:items-start md:gap-[20px] md:self-stretch

                /* lg breakpoint */
                lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-[20px] lg:self-stretch

                /* xl breakpoint */
                xl:flex xl:flex-col xl:justify-center xl:items-start xl:gap-[20px] xl:self-auto

                /* 2xl breakpoint */
                2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[20px] 2xl:self-auto
              ">

                {/* Upper div holding heading + dot */}
                <div className="
                  /* Base (xs) breakpoint */
                  flex justify-start items-center gap-[8px] self-stretch

                  /* sm breakpoint */
                  sm:flex sm:justify-start sm:items-center sm:gap-[11px] sm:self-stretch

                  /* md breakpoint */
                  md:flex md:justify-start md:items-center md:gap-[11px] md:self-stretch

                  /* lg breakpoint */
                  lg:flex lg:justify-start lg:items-center lg:gap-[11px] lg:self-stretch

                  /* xl breakpoint */
                  xl:flex xl:justify-start xl:items-center xl:gap-[11px] xl:self-auto

                  /* 2xl breakpoint */
                  2xl:flex 2xl:justify-start 2xl:items-center 2xl:gap-[11px] 2xl:self-auto
                ">

                  <div className="
                    /* Base (xs) breakpoint */
                    flex w-[10px] h-[10px] justify-center items-center rounded-[32px] bg-[#001D21]

                    /* sm breakpoint */
                    sm:flex sm:w-[12px] sm:h-[12px] sm:justify-center sm:items-center sm:rounded-[32px] sm:bg-[#001D21]

                    /* md breakpoint */
                    md:flex md:w-[12px] md:h-[12px] md:justify-center md:items-center md:rounded-[32px] md:bg-[#001D21]

                    /* lg breakpoint */
                    lg:flex lg:w-[12px] lg:h-[12px] lg:justify-center lg:items-start lg:rounded-[32px] lg:bg-[#001D21]

                    /* xl breakpoint */
                    xl:flex xl:w-[12px] xl:h-[12px] xl:justify-center xl:items-start xl:rounded-[32px] xl:bg-[#001D21]

                    /* 2xl breakpoint */
                    2xl:flex 2xl:w-[12px] 2xl:h-[12px] 2xl:justify-center 2xl:items-start 2xl:rounded-[32px] 2xl:bg-[#001D21]
                  ">
                  </div>

                  <h2 className="
                    /* Base (xs) breakpoint */
                    text-[#001D21] font-sans text-[13px] font-[400] leading-[20px] tracking-[0.3px] text-left [font-feature-settings:'liga_off,_clig_off']

                    /* sm breakpoint */
                    sm:text-[#001D21] sm:[font-feature-settings:'liga_off,_clig_off'] sm:font-sans sm:text-[15px] sm:font-[400] sm:leading-[24.011px] sm:tracking-[0.45px] sm:text-center

                    /* md breakpoint */
                    md:text-[#001D21] md:[font-feature-settings:'liga_off,_clig_off'] md:font-[550] md:text-[15px] md:leading-[24.011px] md:tracking-[0.45px] md:font-sans md:text-center

                    /* lg breakpoint */
                    lg:text-[#001D21] lg:[font-feature-settings:'liga_off,_clig_off'] lg:font-[550] lg:text-[15px] lg:leading-[24.011px] lg:tracking-[0.45px] lg:font-sans lg:text-center

                    /* xl breakpoint */
                    xl:text-[#001D21] xl:font-sans xl:text-[15px] xl:font-[400] xl:leading-[24.011px] xl:tracking-[0.45px] xl:text-center xl:[font-feature-settings:'normal']

                    /* 2xl breakpoint */
                    2xl:text-[#001D21] 2xl:font-sans 2xl:text-[15px] 2xl:font-[400] 2xl:leading-[24.011px] 2xl:tracking-[0.45px] 2xl:text-center 2xl:[font-feature-settings:'normal']
                  ">
                    About Insignia
                  </h2>
                </div>
                {/* Upper div holding heading + dot */}

                <h1 className="
                  /* Base (xs) breakpoint */
                  self-stretch text-[#001D21] text-left font-sans
                  text-[36px] font-[450] leading-[45px] tracking-[-1.08px]

                  /* sm breakpoint */
                  sm:self-stretch sm:text-[#001D21] sm:text-left sm:font-sans sm:text-[54px] sm:font-[450] sm:leading-[66px] sm:tracking-[-1.62px]

                  /* md breakpoint */
                  md:self-stretch md:text-[#001D21] md:text-left md:font-sans md:text-[54px] md:font-[450] md:leading-[66px] md:tracking-[-1.62px]

                  /* lg breakpoint */
                  lg:self-stretch lg:text-[#001D21] lg:text-left lg:font-sans lg:text-[54px] lg:font-[450] lg:leading-[66px] lg:tracking-[-1.62px]

                  /* xl breakpoint */
                  xl:self-stretch xl:text-[#001D21] xl:text-left xl:font-sans xl:text-[54px] xl:font-[450] xl:leading-[66px] xl:tracking-[-1.62px]

                  /* 2xl breakpoint */
                  2xl:self-stretch 2xl:text-[#001D21] 2xl:text-left 2xl:font-sans 2xl:text-[54px] 2xl:font-[450] 2xl:leading-[66px] 2xl:tracking-[-1.62px]
                ">
                  Scaling your systems
                  with confidence
                </h1>
              </div>
              {/* top most div */}

              <p className="
                /* Base (xs) breakpoint */
                self-stretch text-[13px] leading-[20px] font-medium text-[#001D21A6] font-sans

                /* sm breakpoint */
                sm:self-stretch sm:text-[14px] sm:leading-[23px] sm:font-medium sm:text-[#001D21A6] sm:font-sans

                /* md breakpoint */
                md:self-stretch md:text-[14px] md:leading-[23px] md:font-medium md:text-[#001D21A6] md:font-sans

                /* lg breakpoint */
                lg:self-stretch lg:text-[14px] lg:leading-[23px] lg:font-medium lg:text-[#001D21A6] lg:font-sans

                /* xl breakpoint */
                xl:self-stretch xl:text-[14px] xl:leading-[23px] xl:font-medium xl:text-[#001D21A6] xl:font-sans

                /* 2xl breakpoint */
                2xl:self-stretch 2xl:text-[14px] 2xl:leading-[23px] 2xl:font-medium 2xl:text-[#001D21A6] 2xl:font-sans
              ">
                We craft tailored tech solutions that align with your business goals. Our team leverages data-driven insights and industry expertise to create innovative pathways for scalable growth, from concept to deployment and beyond.
              </p>

              {/* 3 mini div pointer holder */}
              <div className="
                /* Base (xs) breakpoint */
                flex flex-wrap items-start content-start justify-start gap-[10px] self-stretch  /* Added for small screens */

                /* sm breakpoint */
                sm:flex sm:items-start sm:content-start sm:gap-[20px] sm:self-stretch sm:flex-wrap

                /* md breakpoint */
                md:flex md:items-start md:content-start md:gap-[20px] md:self-stretch md:flex-wrap /* Corrected items-left to  for consistency */

                /* lg breakpoint */
                lg:flex lg:items-start lg:content-start lg:gap-[20px] lg:self-stretch lg:flex-wrap /* Corrected items-left to  for consistency */

                /* xl breakpoint */
                xl:flex xl:items-start xl:content-start xl:gap-[20px] xl:self-stretch xl:flex-wrap /* Corrected items-left to  for consistency */

                /* 2xl breakpoint */
                2xl:flex 2xl:items-start 2xl:gap-[20px] 2xl:self-stretch /* Corrected items-left to for consistency */
              ">

                {/* mini div holder */}
                <div className="
                  /* Base (xs) breakpoint */
                  flex items-start gap-[5px] rounded-[6px] bg-[#EAEAE7] px-[8px] py-[6px]

                  /* sm breakpoint */
                  sm:flex sm:items-start sm:gap-[10px] sm:rounded-[6px] sm:bg-[#EAEAE7] sm:px-[10px] sm:py-[8px]

                  /* md breakpoint */
                  md:flex md:items-start md:gap-[10px] md:rounded-[6px] md:bg-[#EAEAE7] md:px-[10px] md:py-[8px]

                  /* lg breakpoint */
                  lg:flex lg:items-start lg:gap-[10px] lg:rounded-[6px] lg:bg-[#EAEAE7] lg:px-[10px] lg:py-[8px]

                  /* xl breakpoint */
                  xl:flex xl:items-start xl:gap-[10px] xl:rounded-[6px] xl:bg-[#EAEAE7] xl:px-[10px] xl:py-[8px]

                  /* 2xl breakpoint */
                  2xl:flex 2xl:items-start 2xl:gap-[10px] 2xl:rounded-[6px] 2xl:bg-[#EAEAE7] 2xl:px-[10px] 2xl:py-[8px]
                ">
                  <span className="
                    /* Base (xs) breakpoint */
                    text-[#2D4447] text-[12px] font-medium leading-[14px] tracking-[0.4px] font-sans

                    /* sm breakpoint */
                    sm:text-[#2D4447] sm:text-[14px] sm:font-medium sm:leading-[16px] sm:tracking-[0.56px] sm:font-sans

                    /* md breakpoint */
                    md:text-[#2D4447] md:text-[14px] md:font-medium md:leading-[16px] md:tracking-[0.56px] md:font-sans

                    /* lg breakpoint */
                    lg:text-[#2D4447] lg:text-[14px] lg:font-medium lg:leading-[16px] lg:tracking-[0.56px] lg:font-sans

                    /* xl breakpoint */
                    xl:text-[#2D4447] xl:text-[14px] xl:font-medium xl:leading-[16px] xl:tracking-[0.56px] xl:font-sans

                    /* 2xl breakpoint */
                    2xl:text-[#2D4447] 2xl:text-[14px] 2xl:font-medium 2xl:leading-[16px] 2xl:tracking-[0.56px] 2xl:font-sans
                  ">
                    Digital product Development
                  </span>
                </div>
                {/* mini div holder */}

                {/* mini div holder */}
                <div className="
                  /* Base (xs) breakpoint */
                  flex items-start gap-[5px] rounded-[6px] bg-[#EAEAE7] px-[8px] py-[6px]

                  /* sm breakpoint */
                  sm:flex sm:items-start sm:gap-[10px] sm:rounded-[6px] sm:bg-[#EAEAE7] sm:px-[10px] sm:py-[8px]

                  /* md breakpoint */
                  md:flex md:items-start md:gap-[10px] md:rounded-[6px] md:bg-[#EAEAE7] md:px-[10px] md:py-[8px]

                  /* lg breakpoint */
                  lg:flex lg:items-start lg:gap-[10px] lg:rounded-[6px] lg:bg-[#EAEAE7] lg:px-[10px] lg:py-[8px]

                  /* xl breakpoint */
                  xl:flex xl:items-start xl:gap-[10px] xl:rounded-[6px] xl:bg-[#EAEAE7] xl:px-[10px] xl:py-[8px]

                  /* 2xl breakpoint */
                  2xl:flex 2xl:items-start 2xl:gap-[10px] 2xl:rounded-[6px] 2xl:bg-[#EAEAE7] 2xl:px-[10px] 2xl:py-[8px]
                ">
                  <span className="
                    /* Base (xs) breakpoint */
                    text-[#2D4447] text-[12px] font-medium leading-[14px] tracking-[0.4px] font-sans

                    /* sm breakpoint */
                    sm:text-[#2D4447] sm:text-[14px] sm:font-medium sm:leading-[16px] sm:tracking-[0.56px] sm:font-sans

                    /* md breakpoint */
                    md:text-[#2D4447] md:text-[14px] md:font-medium md:leading-[16px] md:tracking-[0.56px] md:font-sans

                    /* lg breakpoint */
                    lg:text-[#2D4447] lg:text-[14px] lg:font-medium lg:leading-[16px] lg:tracking-[0.56px] lg:font-sans

                    /* xl breakpoint */
                    xl:text-[#2D4447] xl:text-[14px] xl:font-medium xl:leading-[16px] xl:tracking-[0.56px] xl:font-sans

                    /* 2xl breakpoint */
                    2xl:text-[#2D4447] 2xl:text-[14px] 2xl:font-medium 2xl:leading-[16px] 2xl:tracking-[0.56px] 2xl:font-sans
                  ">
                    Devops Solutions
                  </span>
                </div>
                {/* mini div holder */}

                {/* mini div holder */}
                <div className="
                  /* Base (xs) breakpoint */
                  flex items-start gap-[5px] rounded-[6px] bg-[#EAEAE7] px-[8px] py-[6px]

                  /* sm breakpoint */
                  sm:flex sm:items-start sm:gap-[10px] sm:rounded-[6px] sm:bg-[#EAEAE7] sm:px-[10px] sm:py-[8px]

                  /* md breakpoint */
                  md:flex md:items-start md:gap-[10px] md:rounded-[6px] md:bg-[#EAEAE7] md:px-[10px] md:py-[8px]

                  /* lg breakpoint */
                  lg:flex lg:items-start lg:gap-[10px] lg:rounded-[6px] lg:bg-[#EAEAE7] lg:px-[10px] lg:py-[8px]

                  /* xl breakpoint */
                  xl:flex xl:items-start xl:gap-[10px] xl:rounded-[6px] xl:bg-[#EAEAE7] xl:px-[10px] xl:py-[8px]

                  /* 2xl breakpoint */
                  2xl:flex 2xl:items-start 2xl:gap-[10px] 2xl:rounded-[6px] 2xl:bg-[#EAEAE7] 2xl:px-[10px] 2xl:py-[8px]
                ">
                  <span className="
                    /* Base (xs) breakpoint */
                    text-[#2D4447] text-[12px] font-medium leading-[14px] tracking-[0.4px] font-sans

                    /* sm breakpoint */
                    sm:text-[#2D4447] sm:text-[14px] sm:font-medium sm:leading-[16px] sm:tracking-[0.56px] sm:font-sans

                    /* md breakpoint */
                    md:text-[#2D4447] md:text-[14px] md:font-medium md:leading-[16px] md:tracking-[0.56px] md:font-sans

                    /* lg breakpoint */
                    lg:text-[#2D4447] lg:text-[14px] lg:font-medium lg:leading-[16px] lg:tracking-[0.56px] lg:font-sans

                    /* xl breakpoint */
                    xl:text-[#2D4447] xl:text-[14px] xl:font-medium xl:leading-[16px] xl:tracking-[0.56px] xl:font-sans

                    /* 2xl breakpoint */
                    2xl:text-[#2D4447] 2xl:text-[14px] 2xl:font-medium 2xl:leading-[16px] 2xl:tracking-[0.56px] 2xl:font-sans
                  ">
                    Artificial Intelligence
                  </span>
                </div>
                {/* mini div holder */}
              </div>
              {/* 3 mini div pointer holder */}
            </div>
            {/* Main Information wrapper */}

            {/* Assuming OutlineServicesButton is a separate component and needs its own responsive classes if it's not handled internally */}
            <OutlineServicesButton />
          </div>
        </div>
        {/* content holding div */}
      </div>
      {/* main outer hero section div */}
    </>
  )
}