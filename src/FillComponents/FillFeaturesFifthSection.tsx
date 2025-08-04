export default function FillFeaturesFifthSection() {
  return (
    <>
      {/* main outer hero section div */}
      {/* This div will stretch and shrink as per the screen's width (w-full). */}
      {/* Its styles cascade from the smallest breakpoint (no 'sm:' prefixes). */}
      <div className="
        flex flex-col items-start gap-[10px] self-stretch px-[40px] py-[65px] bg-[#ffffff] w-full
        md:px-[65px] md:py-[65px]
        xl:px-[65px] xl:py-[65px]
        2xl:px-[100px] 2xl:py-[65px]
      ">

        {/* content holding div */}
        {/* This div will not stretch beyond the 2xl breakpoint (max-w-screen-2xl mx-auto). */}
        {/* Its styles cascade from the smallest breakpoint (no 'sm:' prefixes). */}
        <div className="
          flex flex-col items-center gap-[80px] self-stretch max-w-screen-2xl mx-auto
          sm:flex-col sm:items-center sm:gap-[80px] sm:self-stretch
          md:flex-col md:items-center md:gap-[80px] md:self-stretch
          lg:flex-col lg:items-center lg:gap-[80px] lg:self-stretch
          xl:flex-col xl:items-center xl:gap-[80px] xl:self-stretch
          2xl:flex-col 2xl:items-center 2xl:gap-[80px] 2xl:self-stretch
        ">

          {/* top heading + sub-heading holding div */}
          {/* Styles cascade from the smallest breakpoint, with w-full as base. */}
          <div className="
            flex flex-col items-center gap-[20px] w-full
            sm:flex-col sm:items-center sm:gap-[20px] sm:w-full
            md:flex-col md:items-center md:gap-[20px] md:w-full
            lg:flex-col lg:items-center lg:gap-[20px] lg:w-[690px]
            xl:flex-col xl:items-center xl:gap-[20px] xl:w-[690px]
            2xl:flex-col 2xl:items-center 2xl:gap-[20px] 2xl:w-[690px]
          ">

            {/* Main heading */}
            {/* Styles cascade from the smallest breakpoint. */}
            <h1 className="
              self-stretch text-[#001D21] text-center font-sans text-[48px] font-medium leading-[59px] tracking-[-1.44px]
              sm:self-stretch sm:text-[#001D21] sm:text-center sm:font-sans sm:text-[48px] sm:font-medium sm:leading-[59px] sm:tracking-[-1.44px]
              md:self-stretch md:text-[#001D21] md:text-center md:font-sans md:text-[48px] md:font-medium md:leading-[59px] md:tracking-[-1.44px]
              lg:self-stretch lg:text-[#001D21] lg:text-center lg:font-sans lg:text-[48px] lg:font-medium lg:leading-[59px] lg:tracking-[-1.44px]
              xl:self-stretch xl:text-[#001D21] xl:text-center xl:font-sans xl:text-[48px] xl:font-medium xl:leading-[59px] xl:tracking-[-1.44px]
              2xl:self-stretch 2xl:text-[#001D21] 2xl:text-center 2xl:font-sans 2xl:text-[48px] 2xl:font-medium 2xl:leading-[59px] 2xl:tracking-[-1.44px]
            ">
              Seamless Integrations That Power Enterprise Efficiency
            </h1>

            {/* Sub-heading/description */}
            {/* Styles cascade from the smallest breakpoint. */}
            <p className="
              self-stretch text-[rgba(0,29,33,0.65)] text-center font-sans text-[14px] font-medium leading-[23px]
              sm:self-stretch sm:text-[rgba(0,29,33,0.65)] sm:text-center sm:font-sans sm:text-[14px] sm:font-medium sm:leading-[23px]
              md:self-stretch md:text-[rgba(0,29,33,0.65)] md:text-center md:font-sans md:text-[14px] md:font-medium md:leading-[23px]
              lg:self-stretch lg:text-[rgba(0,29,33,0.65)] lg:text-center lg:font-sans lg:text-[14px] lg:font-medium lg:leading-[23px]
              xl:self-stretch xl:text-[rgba(0,29,33,0.65)] xl:text-center xl:font-sans xl:text-[14px] xl:font-medium xl:leading-[23px]
              2xl:self-stretch 2xl:text-[rgba(0,29,33,0.65)] 2xl:text-center 2xl:font-sans 2xl:text-[14px] 2xl:font-medium 2xl:leading-[23px]
            ">
              Our platform is built to fit effortlessly into your existing ecosystem. With plug-and-play integrations across top tools and services, we help you accelerate innovation without friction.
            </p>

          </div> {/* End top heading + sub-heading holding div */}

          {/* bottom 2 divs holding div (contains the two mini divs) */}
          {/* Styles cascade from the smallest breakpoint. Flex-col for small, flex-row for xl and 2xl. */}
          <div className="
            flex flex-col items-center gap-[45px] self-stretch
            sm:flex-col sm:items-center sm:gap-[45px] sm:self-stretch
            md:flex-col md:items-center md:gap-[45px] md:self-stretch
            lg:flex-col lg:items-center lg:gap-[45px] lg:self-stretch
            xl:flex-row xl:items-center xl:gap-[45px] xl:self-stretch
            2xl:flex-row 2xl:items-center 2xl:gap-[45px] 2xl:self-stretch
          ">

            {/* mini div - Unified Ecosystem */}
            {/* Styles cascade from the smallest breakpoint. */}
            <div className="
              flex flex-col justify-center items-start gap-[45px] p-[90px_56px] flex-[1_0_0] bg-[#F3F4F2] rounded-[18px]
              sm:flex-col sm:justify-center sm:items-start sm:gap-[45px] sm:p-[90px_56px] sm:flex-[1_0_0] sm:bg-[#F3F4F2] sm:rounded-[18px]
              md:flex-col md:justify-center md:items-start md:gap-[45px] md:p-[90px_56px] md:flex-[1_0_0] md:bg-[#F3F4F2] md:rounded-[18px]
              lg:flex-col lg:justify-center lg:items-start lg:gap-[45px] lg:p-[90px_56px] lg:flex-[1_0_0] lg:bg-[#F3F4F2] lg:rounded-[18px]
              xl:flex-col xl:justify-center xl:items-start xl:gap-[45px] xl:p-[90px_56px] xl:flex-[1_0_0] xl:bg-[#F3F4F2] xl:rounded-[18px]
              2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[45px] 2xl:p-[90px_56px] 2xl:flex-[1_0_0] 2xl:bg-[#F3F4F2] 2xl:rounded-[18px]
            ">

              {/* Image holding div inside mini div */}
              {/* Styles cascade from the smallest breakpoint. */}
              <div className="
                flex h-[322.397px] p-[20px] flex-col items-start gap-[10px] self-stretch rounded-[10px] bg-[#F3F4F2] bg-center
                sm:flex sm:h-[322.397px] sm:p-[20px] sm:flex-col sm:items-start sm:gap-[10px] sm:self-stretch sm:rounded-[10px] sm:bg-[#F3F4F2] sm:bg-center
                md:flex md:h-[322.397px] md:p-[20px] md:flex-col md:items-start md:gap-[10px] md:self-stretch md:rounded-[10px] md:bg-[#F3F4F2] md:bg-center
                lg:flex lg:h-[322.397px] lg:p-[20px] lg:flex-col lg:items-start lg:gap-[10px] lg:self-stretch lg:rounded-[10px] lg:bg-[#F3F4F2] lg:bg-center
                xl:flex xl:h-[322.397px] xl:p-[20px] xl:flex-col xl:items-start xl:gap-[10px] xl:self-stretch xl:rounded-[10px] xl:bg-[#F3F4F2] xl:bg-center
                2xl:flex 2xl:h-[322.397px] 2xl:p-[20px] 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch 2xl:rounded-[10px] 2xl:bg-[#F3F4F2] 2xl:bg-center
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753026558/Frame_1000004897_hwbwbu.png"
                  alt="Unified Ecosystem Visual"
                  className="w-full h-full object-contain rounded-[24px]"
                />
              </div>

              {/* Text content for mini div */}
              {/* Styles cascade from the smallest breakpoint. */}
              <div className="
                flex flex-col items-start gap-[10px] self-stretch
                sm:flex-col sm:items-start sm:gap-[10px] sm:self-stretch
                md:flex-col md:items-start md:gap-[10px] md:self-stretch
                lg:flex-col lg:items-start lg:gap-[10px] lg:self-stretch
                xl:flex-col xl:items-start xl:gap-[10px] xl:self-stretch
                2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch
              ">
                <h2 className="
                  self-stretch text-[#001D21] font-medium text-[24px] leading-[33px] tracking-[-0.72px] font-sans
                  sm:self-stretch sm:text-[#001D21] sm:font-medium sm:text-[24px] sm:leading-[33px] sm:tracking-[-0.72px] sm:font-sans
                  md:self-stretch md:text-[#001D21] md:font-medium md:text-[24px] md:leading-[33px] md:tracking-[-0.72px] md:font-sans
                  lg:self-stretch lg:text-[#001D21] lg:font-medium lg:text-[24px] lg:leading-[33px] lg:tracking-[-0.72px] lg:font-sans
                  xl:self-stretch xl:text-[#001D21] xl:font-medium xl:text-[24px] xl:leading-[33px] xl:tracking-[-0.72px] xl:font-sans
                  2xl:self-stretch 2xl:text-[#001D21] 2xl:font-medium 2xl:text-[24px] 2xl:leading-[33px] 2xl:tracking-[-0.72px] 2xl:font-sans
                ">
                  Unified Ecosystem
                </h2>
                <p className="
                  self-stretch text-[24px] leading-[32px] font-medium text-[rgba(17,17,17,0.6)] tracking-[-0.72px] font-sans
                  sm:self-stretch sm:text-[24px] sm:leading-[32px] sm:font-medium sm:text-[rgba(17,17,17,0.6)] sm:tracking-[-0.72px] sm:font-sans
                  md:self-stretch md:text-[24px] md:leading-[32px] md:font-medium md:text-[rgba(17,17,17,0.6)] md:tracking-[-0.72px] md:font-sans
                  lg:self-stretch lg:text-[24px] lg:leading-[32px] lg:font-medium lg:text-[rgba(17,17,17,0.6)] lg:tracking-[-0.72px] lg:font-sans
                  xl:self-stretch xl:text-[24px] xl:leading-[32px] xl:font-medium xl:text-[rgba(17,17,17,0.6)] xl:tracking-[-0.72px] xl:font-sans
                  2xl:self-stretch 2xl:text-[24px] 2xl:leading-[32px] 2xl:font-medium 2xl:text-[rgba(17,17,17,0.6)] 2xl:tracking-[-0.72px] 2xl:font-sans
                ">
                  Connect with your favorite tools—from design and communication to cloud and data—to build high-performance tech
                </p>
              </div>

            </div> {/* End mini div - Unified Ecosystem */}

            {/* mini div - Built to Fit Right In */}
            {/* Styles cascade from the smallest breakpoint. */}
            <div className="
              flex flex-col justify-center items-start gap-[45px] p-[90px_56px] flex-[1_0_0] bg-[#F3F4F2] rounded-[18px]
              sm:flex-col sm:justify-center sm:items-start sm:gap-[45px] sm:p-[90px_56px] sm:flex-[1_0_0] sm:bg-[#F3F4F2] sm:rounded-[18px] sm:self-stretch
              md:flex-col md:justify-center md:items-start md:gap-[45px] md:p-[90px_56px] md:flex-[1_0_0] md:bg-[#F3F4F2] md:rounded-[18px] md:self-stretch
              lg:flex-col lg:justify-center lg:items-start lg:gap-[45px] lg:p-[90px_56px] lg:flex-[1_0_0] lg:bg-[#F3F4F2] lg:rounded-[18px] lg:self-stretch
              xl:flex-col xl:justify-center xl:items-start xl:gap-[45px] xl:p-[90px_56px] xl:flex-[1_0_0] xl:bg-[#F3F4F2] xl:rounded-[18px] xl:self-stretch
              2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[45px] 2xl:p-[90px_56px] 2xl:flex-[1_0_0] 2xl:bg-[#F3F4F2] 2xl:rounded-[18px] 2xl:self-stretch
            ">

              {/* Image holding div inside mini div */}
              {/* Styles cascade from the smallest breakpoint. */}
              <div className="
                flex h-[322.397px] p-[20px] flex-col items-start gap-[10px] self-stretch rounded-[10px] bg-[#F3F4F2] bg-center
                sm:flex sm:h-[322.397px] sm:p-[20px] sm:flex-col sm:items-start sm:gap-[10px] sm:self-stretch sm:rounded-[10px] sm:bg-[#F3F4F2] sm:bg-center
                md:flex md:h-[322.397px] md:p-[20px] md:flex-col md:items-start md:gap-[10px] md:self-stretch md:rounded-[10px] md:bg-[#F3F4F2] md:bg-center
                lg:flex lg:h-[322.397px] lg:p-[20px] lg:flex-col lg:items-start lg:gap-[10px] lg:self-stretch lg:rounded-[10px] lg:bg-[#F3F4F2] lg:bg-center
                xl:flex xl:h-[322.397px] xl:p-[20px] xl:flex-col xl:items-start xl:gap-[10px] xl:self-stretch xl:rounded-[10px] xl:bg-[#F3F4F2] xl:bg-center
                2xl:flex 2xl:h-[322.397px] 2xl:p-[20px] 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch 2xl:rounded-[10px] 2xl:bg-[#F3F4F2] 2xl:bg-center
              ">
                <img
                  src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753026566/Frame_1000004893_hsep5j.png"
                  alt="Built to Fit Right In Visual"
                  className="w-full h-full object-contain rounded-[24px]"
                />
              </div>

              {/* Text content for mini div */}
              {/* Styles cascade from the smallest breakpoint. */}
              <div className="
                flex flex-col items-start gap-[10px] self-stretch
                sm:flex-col sm:items-start sm:gap-[10px] sm:self-stretch
                md:flex-col md:items-start md:gap-[10px] md:self-stretch
                lg:flex-col lg:items-start lg:gap-[10px] lg:self-stretch
                xl:flex-col xl:items-start xl:gap-[10px] xl:self-stretch
                2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch
              ">
                <h2 className="
                  self-stretch text-[#001D21] font-medium text-[24px] leading-[33px] tracking-[-0.72px] font-sans
                  sm:self-stretch sm:text-[#001D21] sm:font-medium sm:text-[24px] sm:leading-[33px] sm:tracking-[-0.72px] sm:font-sans
                  md:self-stretch md:text-[#001D21] md:font-medium md:text-[24px] md:leading-[33px] md:tracking-[-0.72px] md:font-sans
                  lg:self-stretch lg:text-[#001D21] lg:font-medium lg:text-[24px] lg:leading-[33px] lg:tracking-[-0.72px] lg:font-sans
                  xl:self-stretch xl:text-[#001D21] xl:font-medium xl:text-[24px] xl:leading-[33px] xl:tracking-[-0.72px] xl:font-sans
                  2xl:self-stretch 2xl:text-[#001D21] 2xl:font-medium 2xl:text-[24px] 2xl:leading-[33px] 2xl:tracking-[-0.72px] 2xl:font-sans
                ">
                  Built to Fit Right In
                </h2>
                <p className="
                  self-stretch text-[24px] leading-[32px] font-medium text-[rgba(17,17,17,0.6)] tracking-[-0.72px] font-sans
                  sm:self-stretch sm:text-[24px] sm:leading-[32px] sm:font-medium sm:text-[rgba(17,17,17,0.6)] sm:tracking-[-0.72px] sm:font-sans
                  md:self-stretch md:text-[24px] md:leading-[32px] md:font-medium md:text-[rgba(17,17,17,0.6)] md:tracking-[-0.72px] md:font-sans
                  lg:self-stretch lg:text-[24px] lg:leading-[32px] lg:font-medium lg:text-[rgba(17,17,17,0.6)] lg:tracking-[-0.72px] lg:font-sans
                  xl:self-stretch xl:text-[24px] xl:leading-[32px] xl:font-medium xl:text-[rgba(17,17,17,0.6)] xl:tracking-[-0.72px] xl:font-sans
                  2xl:self-stretch 2xl:text-[24px] 2xl:leading-[32px] 2xl:font-medium 2xl:text-[rgba(17,17,17,0.6)] 2xl:tracking-[-0.72px] 2xl:font-sans
                ">
                  Manage and activate integrations in one place with our intuitive interface—no code or hassle required.
                </p>
              </div>

            </div> {/* End mini div - Built to Fit Right In */}

          </div> {/* End bottom 2 divs holding div */}


        </div> {/* End content holding div */}

      </div> {/* End main outer hero section div */}
    </>
  );
}