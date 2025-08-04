import React from 'react';

export default function FillAboutUsSecondSection() {
  return (
    <>
      {/* main outer hero section div */}
      <div className="
   flex flex-col items-start gap-[10px] self-stretch bg-[#Ffffff]
   px-[20px] py-[40px]
   sm:px-[40px] sm:py-[65px]
   md:p-[65px]
   lg:p-[65px]
   xl:p-[65px]
   2xl:px-[100px] 2xl:py-[65px]
   ">

        {/* content holding div */}
        <div className="
          flex flex-col items-center gap-[50px] self-stretch
          w-full max-w-screen-2xl mx-auto
          sm:gap-[80px]
        ">
          {/* top heading + sub-heading holding div */}
          <div className="
            flex w-full flex-col items-center gap-[20px]
            lg:w-[690px]
          ">
            <h1 className="
              self-stretch text-[#001D21] text-center font-sans font-medium
              text-[42px] leading-[59px] tracking-[-1.44px]
            ">
              Discover what sets us apart
            </h1>
            <p className="
              self-stretch text-[rgba(0,29,33,0.65)] text-center font-inter font-medium
              text-[14px] leading-[23px]
            ">
              Get to know the values and principles that define how we work, innovate, and grow together. These are the cornerstones that guide every decision we make.
            </p>
          </div>

          {/* bottom 6 divs holding div */}
          <div className="
            flex flex-wrap justify-center items-stretch gap-[40px] self-stretch
            lg:gap-[55px] xl:gap-[80px] 2xl:gap-[68px]
          ">

            {/* mini div - Innovation First */}
            <div className="
              flex flex-col items-start gap-[10px]
              p-[20px] rounded-[14px] bg-[#F3F4F2]
              w-full
              sm:w-[260px] md:w-[279px] lg:w-[261.3px] xl:w-[330px] 2xl:w-[400px]
            ">
              <div className="
                flex flex-col items-start gap-[25px] self-stretch
              ">
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center
                  rounded-[100px] bg-[#001D21]
                ">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753041259/Vector_10_co3ic6.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] self-stretch">
                  <h2 className="
                    self-stretch text-[#001D21] font-sans font-medium
                    text-[20px] leading-[27px] tracking-[-0.6px]
                  ">
                    Innovation First
                  </h2>
                  <p className="
                    self-stretch text-[#4E4E4E] font-sans font-[450]
                    text-[16px] leading-[23px]
                  ">
                    We believe in pushing the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>

            {/* mini div - Client-Centric Approach */}
            <div className="
              flex flex-col items-start gap-[10px]
              p-[20px] rounded-[14px] bg-[#F3F4F2]
              w-full
              sm:w-[260px] md:w-[279px] lg:w-[261.3px] xl:w-[330px] 2xl:w-[400px]
            ">
              <div className="
                flex flex-col items-start gap-[25px] self-stretch
              ">
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center
                  rounded-[100px] bg-[#001D21]
                ">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753006098/Vector_2_x5e4bj.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] self-stretch">
                  <h2 className="
                    self-stretch text-[#001D21] font-sans font-medium
                    text-[20px] leading-[27px] tracking-[-0.6px]
                  ">
                    Client-Centric Approach
                  </h2>
                  <p className="
                    self-stretch text-[#4E4E4E] font-sans font-[450]
                    text-[16px] leading-[23px]
                  ">
                    Your success is our mission. We build long-term relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* mini div - Cross-Functional Collaboration */}
            <div className="
              flex flex-col items-start gap-[10px]
              p-[20px] rounded-[14px] bg-[#F3F4F2]
              w-full
              sm:w-[260px] md:w-[279px] lg:w-[261.3px] xl:w-[330px] 2xl:w-[400px]
            ">
              <div className="
                flex flex-col items-start gap-[25px] self-stretch
              ">
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center
                  rounded-[100px] bg-[#001D21]
                ">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753006109/Vector_3_xgj80p.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] self-stretch">
                  <h2 className="
                    self-stretch text-[#001D21] font-sans font-medium
                    text-[20px] leading-[27px] tracking-[-0.6px]
                  ">
                    Cross-Functional Collaboration
                  </h2>
                  <p className="
                    self-stretch text-[#4E4E4E] font-sans font-[450]
                    text-[16px] leading-[23px]
                  ">
                    Designers, engineers, analysts, and strategists—working as one.
                  </p>
                </div>
              </div>
            </div>

            {/* mini div - Agility & Adaptability */}
            <div className="
              flex flex-col items-start gap-[10px]
              p-[20px] rounded-[14px] bg-[#F3F4F2]
              w-full
              sm:w-[260px] md:w-[279px] lg:w-[419.5px] xl:w-[535px] 2xl:w-[628px]
            ">
              <div className="
                flex flex-col items-start gap-[25px] self-stretch
              ">
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center
                  rounded-[100px] bg-[#001D21]
                ">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753006123/material-symbols_enterprise_jjguen.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] self-stretch">
                  <h2 className="
                    self-stretch text-[#001D21] font-sans font-medium
                    text-[20px] leading-[27px] tracking-[-0.6px]
                  ">
                    Agility & Adaptability
                  </h2>
                  <p className="
                    self-stretch text-[#4E4E4E] font-sans font-[450]
                    text-[16px] leading-[23px]
                  ">
                    We move fast, learn quickly, and pivot when needed. Agile isn’t just a method for us—it’s a mindset we live by.
                  </p>
                </div>
              </div>
            </div>

            {/* mini div - Integrity at Every Step */}
            <div className="
              flex flex-col items-start gap-[10px]
              p-[20px] rounded-[14px] bg-[#F3F4F2]
              w-full
              sm:w-[260px] md:w-[279px] lg:w-[419.5px] xl:w-[535px] 2xl:w-[628px]
            ">
              <div className="
                flex flex-col items-start gap-[25px] self-stretch
              ">
                <div className="
                  flex w-[51px] h-[51px] justify-center items-center
                  rounded-[100px] bg-[#001D21]
                ">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0">
                    <img
                      src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753006139/Vector_4_koayas.png"
                      alt="Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] self-stretch">
                  <h2 className="
                    self-stretch text-[#001D21] font-sans font-medium
                    text-[20px] leading-[27px] tracking-[-0.6px]
                  ">
                    Integrity at Every Step
                  </h2>
                  <p className="
                    self-stretch text-[#4E4E4E] font-sans font-[450]
                    text-[16px] leading-[23px]
                  ">
                    We uphold the highest standards of honesty, responsibility, and respect in all our interactions—with clients, users, and each other.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}