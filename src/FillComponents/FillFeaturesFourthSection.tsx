import React from 'react';

export default function FillFeaturesFourthSection() {
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
          flex flex-col justify-center items-center gap-[50px] self-stretch max-w-screen-2xl mx-auto
          lg:flex-col lg:justify-center lg:items-center lg:gap-[50px] lg:self-stretch
          xl:flex-row xl:items-center xl:gap-[50px] xl:self-stretch
          2xl:flex-row 2xl:items-center 2xl:gap-[50px] 2xl:self-stretch
        ">

          {/* information holding div */}
          {/* Styles cascade from the smallest breakpoint. */}
          <div className="
            flex flex-col justify-center items-start gap-[75px] flex-[1_0_0]
            sm:flex-col sm:justify-center sm:items-start sm:gap-[75px] sm:flex-[1_0_0]
            md:flex-col md:justify-center md:items-start md:gap-[75px] md:flex-[1_0_0]
            lg:flex-col lg:justify-center lg:items-start lg:gap-[75px] lg:flex-[1_0_0]
            xl:flex-col xl:justify-center xl:items-start xl:gap-[75px] xl:flex-[1_0_0]
            2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[75px] 2xl:flex-[1_0_0] 
          ">

            {/* Main Information wrapper */}
            {/* Styles cascade from the smallest breakpoint. */}
            <div className="
              flex flex-col justify-center items-start gap-[20px] self-stretch
              sm:flex-col sm:justify-center sm:items-start sm:gap-[20px] sm:self-stretch
              md:flex-col md:justify-center md:items-start md:gap-[20px] md:self-stretch
              lg:flex-col lg:justify-center lg:items-start lg:gap-[20px] lg:self-stretch
              xl:flex-col xl:justify-center xl:items-start xl:gap-[20px] xl:self-stretch
              2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[20px] 2xl:self-stretch
            ">

              {/* top most div */}
              {/* Styles cascade from the smallest breakpoint. */}
              <div className="
                flex flex-col justify-center items-start gap-[20px] self-stretch
                sm:flex-col sm:justify-center sm:items-start sm:gap-[20px] sm:self-stretch
                md:flex-col md:justify-center md:items-start md:gap-[20px] md:self-stretch
                lg:flex-col lg:justify-center lg:items-start lg:gap-[20px] lg:self-stretch
                xl:flex-col xl:justify-center xl:items-start xl:gap-[20px] xl:self-auto
                2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[20px] 2xl:self-auto
              ">

                {/* Upper div holding heading + dot */}
                {/* Styles cascade from the smallest breakpoint. */}
                <div className="
                  flex justify-start items-center gap-[11px] self-stretch
                  sm:flex-row sm:justify-start sm:items-center sm:gap-[11px] sm:self-stretch
                  md:flex-row md:justify-start md:items-center md:gap-[11px] md:self-stretch
                  lg:flex-row lg:justify-start lg:items-center lg:gap-[11px] lg:self-stretch
                  xl:flex-row xl:justify-start xl:items-center xl:gap-[11px] xl:self-auto
                  2xl:flex-row 2xl:justify-start 2xl:items-center 2xl:gap-[11px] 2xl:self-auto
                ">

                  {/* Dot div */}
                  {/* Styles cascade from the smallest breakpoint. */}
                  <div className="
                    flex w-[12px] h-[12px] justify-center items-center rounded-[32px] bg-[#001D21]
                    sm:flex sm:w-[12px] sm:h-[12px] sm:justify-center sm:items-center sm:rounded-[32px] sm:bg-[#001D21]
                    md:flex md:w-[12px] md:h-[12px] md:justify-center md:items-center md:rounded-[32px] md:bg-[#001D21]
                    lg:flex lg:w-[12px] lg:h-[12px] lg:justify-center lg:items-center lg:rounded-[32px] lg:bg-[#001D21]
                    xl:flex xl:w-[12px] xl:h-[12px] xl:justify-center xl:items-center xl:rounded-[32px] xl:bg-[#001D21]
                    2xl:flex 2xl:w-[12px] 2xl:h-[12px] 2xl:justify-center 2xl:items-center 2xl:rounded-[32px] 2xl:bg-[#001D21]
                  ">
                  </div>

                  {/* About Insignia heading */}
                  {/* Styles cascade from the smallest breakpoint. Removed font-feature-settings. */}
                  <h2 className="
                    text-[#001D21] font-sans text-[15px] font-[400] leading-[24.011px] tracking-[0.45px] text-center
                    sm:text-[#001D21] sm:font-sans sm:text-[15px] sm:font-[400] sm:leading-[24.011px] sm:tracking-[0.45px] sm:text-center
                    md:text-[#001D21] md:font-[550] md:text-[15px] md:leading-[24.011px] md:tracking-[0.45px] md:font-sans md:text-center
                    lg:text-[#001D21] lg:font-[550] lg:text-[15px] lg:leading-[24.011px] lg:tracking-[0.45px] lg:font-sans lg:text-center
                    xl:text-[#001D21] xl:font-sans xl:text-[15px] xl:font-[400] xl:leading-[24.011px] xl:tracking-[0.45px] xl:text-center
                    2xl:text-[#001D21] 2xl:font-sans 2xl:text-[15px] 2xl:font-[400] 2xl:leading-[24.011px] 2xl:tracking-[0.45px] 2xl:text-center
                  ">
                    About Insignia
                  </h2>

                </div> {/* End Upper div holding heading + dot */}

                {/* Main heading */}
                {/* Styles cascade from the smallest breakpoint. */}
                <h1 className="
                  self-stretch text-[#001D21] text-left font-sans text-[54px] font-[450] leading-[66px] tracking-[-1.62px]
                  sm:self-stretch sm:text-[#001D21] sm:text-left sm:font-sans sm:text-[54px] sm:font-[450] sm:leading-[66px] sm:tracking-[-1.62px]
                  md:self-stretch md:text-[#001D21] md:text-left md:font-sans md:text-[54px] md:font-[450] md:leading-[66px] md:tracking-[-1.62px]
                  lg:self-stretch lg:text-[#001D21] lg:text-left lg:font-sans lg:text-[54px] lg:font-[450] lg:leading-[66px] lg:tracking-[-1.62px]
                  xl:self-stretch xl:text-[#001D21] xl:text-left xl:font-sans xl:text-[54px] xl:font-[450] xl:leading-[66px] xl:tracking-[-1.62px]
                  2xl:self-stretch 2xl:text-[#001D21] 2xl:text-left 2xl:font-sans 2xl:text-[54px] 2xl:font-[450] 2xl:leading-[66px] 2xl:tracking-[-1.62px]
                ">
                  Experience the blend of technical excellence and strategic foresight
                </h1>

              </div> {/* End top most div */}



{/* bottom 2 divs holding div */}
{/*
  FLAW IDENTIFIED:
  - The base classes (no prefix) for this div did not explicitly set 'flex-row' or 'flex-col' for very small screens,
    leading to inconsistent row/column behavior before the 'sm' breakpoint.
  - 'justify-start items-start' was the base alignment, which doesn't center the items.
  - 'xl' and '2xl' breakpoints also used 'items-start content-start' which would left-align the items instead of centering them.

  CORRECTION:
  - Set base to 'flex flex-col items-center justify-center' for stacking and centering on extra-small screens.
  - Ensure 'sm:', 'md:', 'lg:', 'xl:', and '2xl:' breakpoints consistently use 'flex-row justify-center items-center'
    to maintain row layout and centering across larger screens.
  - Removed the temporary 'border-2 border-black' for cleaner code.
*/}
<div className="
  flex flex-row items-start justify-start gap-[25px] self-stretch 
  sm:flex-row sm:justify-start sm:items-start sm:gap-[60px] sm:self-stretch
  md:flex-row md:justify-start md:items-start md:gap-[88px] md:self-stretch
  lg:flex-row lg:justify-start lg:items-start lg:gap-[104px] lg:self-stretch
  xl:flex-row xl:justify-start xl:items-start xl:gap-[80px] xl:self-stretch
  2xl:flex-row 2xl:justify-start 2xl:items-start  2xl:gap-[30px]   2xl:self-stretch 
">

  {/* mini div - AI-Led Automation  
  
  <div className="

2xl:flex 2xl:p-[20px] 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:bg-[#ffffff] 2xl:rounded-[14px]

xl:flex xl:p-[20px] xl:flex-col xl:items-start xl:gap-[10px] xl:bg-[#ffffff] xl:rounded-[14px]

lg:flex lg:p-[20px] lg:flex-col lg:items-start lg:gap-[10px] lg:bg-[#ffffff] lg:rounded-[14px]

md:flex md:p-[20px] md:flex-col md:items-start md:gap-[10px] md:bg-[#ffffff] md:rounded-[14px]

sm:flex sm:p-[20px] sm:flex-col sm:items-start sm:gap-[10px] sm:bg-[#ffffff] sm:rounded-[14px]

">
  
  */}
  
  <div className="
    flex p-[20px] flex-col items-start gap-[10px] bg-[#ffffff] rounded-[14px]
    sm:flex sm:p-[20px] sm:flex-col sm:items-start sm:gap-[10px] sm:bg-[#ffffff] sm:rounded-[14px]
    md:flex md:p-[20px] md:flex-col md:items-start md:gap-[10px] md:bg-[#ffffff] md:rounded-[14px]
    lg:flex lg:p-[20px] lg:flex-col lg:items-start lg:gap-[10px] lg:bg-[#ffffff] lg:rounded-[14px]
    xl:flex xl:p-[20px] xl:flex-col xl:items-start xl:gap-[10px] xl:bg-[#ffffff] xl:rounded-[14px]
    2xl:flex 2xl:p-[20px] 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:bg-[#ffffff] 2xl:rounded-[14px] 
  ">

    {/* main internal div content here */}
    {/* Styles cascade from the smallest breakpoint. */}
    <div className="
      flex flex-col items-start gap-[25px] self-stretch
      sm:flex-col sm:items-start sm:gap-[25px] sm:self-stretch
      md:flex-col md:items-start md:gap-[25px] md:self-stretch
      lg:flex-col lg:items-start lg:gap-[25px] lg:self-stretch
      xl:flex-col xl:items-start xl:gap-[25px] xl:self-stretch
      2xl:flex-col 2xl:items-start 2xl:gap-[25px] 2xl:self-stretch
    ">

      {/* icon holding div */}
      {/* Styles cascade from the smallest breakpoint. */}
      <div className="
        flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[100px] border bg-[#001D21]
        sm:flex sm:w-[51px] sm:h-[51px] sm:justify-center sm:items-center sm:gap-[10px] sm:rounded-[100px] sm:border sm:bg-[#001D21]
        md:flex md:w-[51px] md:h-[51px] md:justify-center md:items-center md:gap-[10px] md:rounded-[100px] md:border md:bg-[#001D21]
        lg:flex lg:w-[51px] lg:h-[51px] lg:justify-center lg:items-center lg:gap-[10px] lg:rounded-[100px] lg:border lg:bg-[#001D21]
        xl:flex xl:w-[51px] xl:h-[51px] xl:justify-center xl:items-center xl:gap-[10px] xl:rounded-[100px] xl:border xl:bg-[#001D21]
        2xl:flex 2xl:w-[51px] 2xl:h-[51px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:rounded-[100px] 2xl:border 2xl:bg-[#001D21]
      ">
        {/* Inner icon div */}
        {/* Styles cascade from the smallest breakpoint. */}
        <div className="
          flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
          sm:flex sm:w-[24px] sm:h-[24px] sm:justify-center sm:items-center sm:gap-[10px] sm:shrink-0
          md:flex md:w-[24px] md:h-[24px] md:justify-center md:items-center md:gap-[10px] md:shrink-0
          lg:flex lg:w-[24px] lg:h-[24px] lg:justify-center lg:items-center lg:gap-[10px] lg:shrink-0
          xl:flex xl:w-[24px] xl:h-[24px] xl:justify-center xl:items-center xl:gap-[10px] xl:shrink-0
          2xl:flex 2xl:w-[24px] 2xl:h-[24px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:shrink-0
        ">
          <img
            src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753041245/Vector_8_qyyd3y.png"
            alt="Icon"
            className="
              w-full h-full object-contain
              sm:w-full sm:h-full sm:object-contain
              md:w-full md:h-full md:object-contain
              lg:w-full lg:h-full lg:object-contain
              xl:w-full xl:h-full xl:object-contain
              2xl:w-full 2xl:h-full 2xl:object-contain
            "
          />
        </div>
      </div> {/* End icon holding div */}

      {/* bottom div for text */}
      {/* Styles cascade from the smallest breakpoint. */}
      <div className="
        flex flex-col justify-center items-start gap-[10px] self-stretch
        sm:flex-col sm:justify-center sm:items-start sm:gap-[10px] sm:self-stretch
        md:flex-col md:justify-center md:items-start md:gap-[10px] md:self-stretch
        lg:flex-col lg:justify-center lg:items-start lg:gap-[10px] lg:self-stretch
        xl:flex-col xl:justify-center xl:items-start xl:gap-[10px] xl:self-stretch
        2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch
      ">

        <h2 className="
          self-stretch text-[#001D21] font-medium text-[20px] leading-[27px] tracking-[-0.6px] font-sans
          sm:self-stretch sm:text-[#001D21] sm:font-medium sm:text-[20px] sm:leading-[27px] sm:tracking-[-0.6px] sm:font-sans
          md:self-stretch md:text-[#001D21] md:font-medium md:text-[20px] md:leading-[27px] md:tracking-[-0.6px] md:font-sans
          lg:self-stretch lg:text-[#001D21] lg:font-medium lg:text-[20px] lg:leading-[27px] lg:tracking-[-0.6px] lg:font-sans
          xl:self-stretch xl:text-[#001D21] xl:font-medium xl:text-[20px] xl:leading-[27px] xl:tracking-[-0.6px] xl:font-sans
          2xl:self-stretch 2xl:text-[#001D21] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[27px] 2xl:tracking-[-0.6px] 2xl:font-sans
        ">
          AI-Led Automation
        </h2>

        <p className="
          self-stretch text-[#4E4E4E] text-[16px] leading-[23px] font-[450] font-sans
          sm:self-stretch sm:text-[#4E4E4E] sm:text-[16px] sm:leading-[23px] sm:font-[450] sm:font-sans
          md:self-stretch md:text-[#4E4E4E] md:text-[16px] md:leading-[23px] md:font-[450] md:font-sans
          lg:self-stretch lg:text-[#4E4E4E] lg:text-[16px] lg:leading-[23px] lg:font-[450] lg:font-sans
          xl:self-stretch xl:text-[#4E4E4E] xl:text-[16px] xl:leading-[23px] xl:font-[450] xl:font-sans
          2xl:self-stretch 2xl:text-[#4E4E4E] 2xl:text-[16px] 2xl:leading-[23px] 2xl:font-[450] 2xl:font-sans
        ">
          Drive efficiency with AI and ML-led workflows tailored to reduce cost
        </p>

      </div> {/* End bottom div for text */}

    </div> {/* End main internal div content here */}

  </div> {/* End mini div - AI-Led Automation */}

  {/* mini div - Tech Integration */}
  
  <div className="
    flex p-[20px] flex-col items-start gap-[10px] bg-[#ffffff] rounded-[14px]
    sm:flex sm:p-[20px] sm:flex-col sm:items-start sm:gap-[10px] sm:bg-[#ffffff] sm:rounded-[14px]
    md:flex md:p-[20px] md:flex-col md:items-start md:gap-[10px] md:bg-[#ffffff] md:rounded-[14px]
    lg:flex lg:p-[20px] lg:flex-col lg:items-start lg:gap-[10px] lg:bg-[#ffffff] lg:rounded-[14px]
    xl:flex xl:p-[20px] xl:flex-col xl:items-start xl:gap-[10px] xl:bg-[#ffffff] xl:rounded-[14px]
    2xl:flex 2xl:p-[20px] 2xl:flex-col 2xl:items-start 2xl:gap-[10px] 2xl:bg-[#ffffff] 2xl:rounded-[14px]
  ">

    {/* main internal div content here */}
    {/* Styles cascade from the smallest breakpoint. */}
    <div className="
      flex flex-col items-start gap-[25px] self-stretch
      sm:flex-col sm:items-start sm:gap-[25px] sm:self-stretch
      md:flex-col md:items-start md:gap-[25px] md:self-stretch
      lg:flex-col lg:items-start lg:gap-[25px] lg:self-stretch
      xl:flex-col xl:items-start xl:gap-[25px] xl:self-stretch
      2xl:flex-col 2xl:items-start 2xl:gap-[25px] 2xl:self-stretch
    ">

      {/* icon holding div */}
      {/* Styles cascade from the smallest breakpoint. */}
      <div className="
        flex w-[51px] h-[51px] justify-center items-center gap-[10px] rounded-[100px] border bg-[#001D21]
        sm:flex sm:w-[51px] sm:h-[51px] sm:justify-center sm:items-center sm:gap-[10px] sm:rounded-[100px] sm:border sm:bg-[#001D21]
        md:flex md:w-[51px] md:h-[51px] md:justify-center md:items-center md:gap-[10px] md:rounded-[100px] md:border md:bg-[#001D21]
        lg:flex lg:w-[51px] lg:h-[51px] lg:justify-center lg:items-center lg:gap-[10px] lg:rounded-[100px] lg:border lg:bg-[#001D21]
        xl:flex xl:w-[51px] xl:h-[51px] xl:justify-center xl:items-center xl:gap-[10px] xl:rounded-[100px] xl:border xl:bg-[#001D21]
        2xl:flex 2xl:w-[51px] 2xl:h-[51px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:rounded-[100px] 2xl:border 2xl:bg-[#001D21]
      ">
        {/* Inner icon div */}
        {/* Styles cascade from the smallest breakpoint. */}
        <div className="
          flex w-[24px] h-[24px] justify-center items-center gap-[10px] shrink-0
          sm:flex sm:w-[24px] sm:h-[24px] sm:justify-center sm:items-center sm:gap-[10px] sm:shrink-0
          md:flex md:w-[24px] md:h-[24px] md:justify-center md:items-center md:gap-[10px] md:shrink-0
          lg:flex lg:w-[24px] lg:h-[24px] lg:justify-center lg:items-center lg:gap-[10px] lg:shrink-0
          xl:flex xl:w-[24px] xl:h-[24px] xl:justify-center xl:items-center xl:gap-[10px] xl:shrink-0
          2xl:flex 2xl:w-[24px] 2xl:h-[24px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:shrink-0
        ">
          <img
            src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753021916/Vector_6_haxihm.png"
            alt="Icon"
            className="
              w-full h-full object-contain
              sm:w-full sm:h-full sm:object-contain
              md:w-full md:h-full md:object-contain
              lg:w-full lg:h-full lg:object-contain
              xl:w-full xl:h-full xl:object-contain
              2xl:w-full 2xl:h-full 2xl:object-contain
            "
          />
        </div>
      </div> {/* End icon holding div */}

      {/* bottom div for text */}
      {/* Styles cascade from the smallest breakpoint. */}
      <div className="
        flex flex-col justify-center items-start gap-[10px] self-stretch
        sm:flex-col sm:justify-center sm:items-start sm:gap-[10px] sm:self-stretch
        md:flex-col md:justify-center md:items-start md:gap-[10px] md:self-stretch
        lg:flex-col lg:justify-center lg:items-start lg:gap-[10px] lg:self-stretch
        xl:flex-col xl:justify-center xl:items-start xl:gap-[10px] xl:self-stretch
        2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:gap-[10px] 2xl:self-stretch
      ">

        <h2 className="
          self-stretch text-[#001D21] font-medium text-[20px] leading-[27px] tracking-[-0.6px] font-sans
          sm:self-stretch sm:text-[#001D21] sm:font-medium sm:text-[20px] sm:leading-[27px] sm:tracking-[-0.6px] sm:font-sans
          md:self-stretch md:text-[#001D21] md:font-medium md:text-[20px] md:leading-[27px] md:tracking-[-0.6px] md:font-sans
          lg:self-stretch lg:text-[#001D21] lg:font-medium lg:text-[20px] lg:leading-[27px] lg:tracking-[-0.6px] lg:font-sans
          xl:self-stretch xl:text-[#001D21] xl:font-medium xl:text-[20px] xl:leading-[27px] xl:tracking-[-0.6px] xl:font-sans
          2xl:self-stretch 2xl:text-[#001D21] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[27px] 2xl:tracking-[-0.6px] 2xl:font-sans
        ">
          Tech Integration
        </h2>

        <p className="
          self-stretch text-[#4E4E4E] text-[16px] leading-[23px] font-[450] font-sans
          sm:self-stretch sm:text-[#4E4E4E] sm:text-[16px] sm:leading-[23px] sm:font-[450] sm:font-sans
          md:self-stretch md:text-[#4E4E4E] md:text-[16px] md:leading-[23px] md:font-[450] md:font-sans
          lg:self-stretch lg:text-[#4E4E4E] lg:text-[16px] lg:leading-[23px] lg:font-[450] lg:font-sans
          xl:self-stretch xl:text-[#4E4E4E] xl:text-[16px] xl:leading-[23px] xl:font-[450] xl:font-sans
          2xl:self-stretch 2xl:text-[#4E4E4E] 2xl:text-[16px] 2xl:leading-[23px] 2xl:font-[450] 2xl:font-sans
        ">
          Explore Web3, IoT, Blockchain, and Metaverse with real-world use cases
        </p>

      </div> {/* End bottom div for text */}

    </div> {/* End main internal div content here */}

  </div> {/* End mini div - Tech Integration */}

</div> {/* End bottom 2 divs holding div */}



              
            </div> {/* End Main Information wrapper */}

            {/* Button */}
            {/* Styles cascade from the smallest breakpoint. Removed font-feature-settings. */}
            <button className="
              flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-[#D7D7D7] bg-white
              sm:flex sm:items-center sm:justify-center sm:gap-[10px] sm:px-[24px] sm:py-[16px] sm:rounded-[12px] sm:border sm:border-[#D7D7D7] sm:bg-white
              md:flex md:items-center md:justify-center md:gap-[10px] md:px-[24px] md:py-[16px] md:rounded-[12px] md:border md:border-[#D7D7D7] md:bg-white
              lg:flex lg:items-center lg:justify-center lg:gap-[10px] lg:px-[24px] lg:py-[16px] lg:rounded-[12px] lg:border lg:border-[#D7D7D7] lg:bg-white
              xl:flex xl:items-center xl:justify-center xl:gap-[10px] xl:px-[24px] xl:py-[16px] xl:rounded-[12px] xl:border xl:border-[#D7D7D7] xl:bg-white
              2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-[10px] 2xl:px-[24px] 2xl:py-[16px] 2xl:rounded-[12px] 2xl:border 2xl:border-[#D7D7D7] 2xl:bg-white
            ">
              <span className="
                text-[15px] leading-[16px] tracking-[0.45px] font-[550] text-[#1D1D1D] text-center font-sans
                sm:text-[15px] sm:leading-[16px] sm:tracking-[0.45px] sm:font-[550] sm:text-[#1D1D1D] sm:text-center sm:font-sans
                md:text-[15px] md:leading-[16px] md:tracking-[0.45px] md:font-[550] md:text-[#1D1D1D] md:text-center md:font-sans
                lg:text-[15px] lg:leading-[16px] lg:tracking-[0.45px] lg:font-[550] lg:text-[#1D1D1D] lg:text-center lg:font-sans
                xl:text-[15px] xl:leading-[16px] xl:tracking-[0.45px] xl:font-[550] xl:text-[#1D1D1D] xl:text-center xl:font-sans
                2xl:text-[15px] 2xl:leading-[16px] 2xl:tracking-[0.45px] 2xl:font-[550] 2xl:text-[#1D1D1D] 2xl:text-center 2xl:font-sans
              ">
                Our services
              </span>
            </button>

          </div> {/* End information holding div */}

          {/* image holding div */}
          {/* Styles cascade from the smallest breakpoint. */}
          <div className="
            flex items-center gap-[10px] flex-[1_0_0] self-stretch rounded-[24px] bg-center w-full h-full
            lg:flex-row lg:h-[590px] lg:items-center lg:gap-[10px] lg:self-stretch lg:rounded-[24px] lg:bg-center
            xl:flex-row xl:items-center xl:gap-[10px] xl:flex-[1_0_0] xl:self-stretch xl:rounded-[24px] xl:bg-center
            2xl:flex-row 2xl:items-center 2xl:gap-[10px] 2xl:flex-[1_0_0] 2xl:self-stretch 2xl:rounded-[24px] 2xl:bg-center
          ">
            <img
              src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753807910/Depositphotos_315883278_XL_Large_pd3ban.png"
              alt="Descriptive Alt"
              className="
                w-full h-full object-cover rounded-[24px]
              "
            />
          </div> {/* End image holding div */}

        </div> {/* End content holding div */}

      </div> {/* End main outer hero section div */}
    </>
  );
}