'use client';

import { useRouter } from 'next/navigation';


export default function GetStartedButton() {


  const router = useRouter();

  const handleClick = () => {
    router.push('/Features');
  };


  return (



   <button
   onClick={handleClick}
   className="
   2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-[10px] 2xl:px-[24px] 2xl:py-[16px] 2xl:rounded-[12px] 2xl:border 2xl:border-[#D7D7D7] 2xl:bg-white
   xl:flex xl:items-center xl:justify-center xl:gap-[10px] xl:px-[24px] xl:py-[16px] xl:rounded-[12px] xl:border xl:border-[#D7D7D7] xl:bg-white
   lg:flex lg:items-center lg:justify-center lg:gap-[10px] lg:px-[24px] lg:py-[16px] lg:rounded-[12px] lg:border lg:border-[#D7D7D7] lg:bg-white
   md:flex md:items-center md:justify-center md:gap-[10px] md:px-[24px] md:py-[16px] md:rounded-[12px] md:border md:border-[#D7D7D7] md:bg-white
   sm:flex sm:items-center sm:justify-center sm:gap-[10px] sm:px-[24px] sm:py-[16px] sm:rounded-[12px] sm:border sm:border-[#D7D7D7] sm:bg-white
   
   // Hover effects
transition-all duration-200 ease-in-out hover:scale-[0.95] active:scale-[0.90]  hover:bg-[#CDCBFF]

   ">
   <span className="
   2xl:text-[15px] 2xl:leading-[16px] 2xl:tracking-[0.45px] 2xl:font-[550] 2xl:text-[#1D1D1D] 2xl:text-center 2xl:font-sans
   xl:text-[15px] xl:leading-[16px] xl:tracking-[0.45px] xl:font-[550] xl:text-[#1D1D1D] xl:text-center xl:font-sans
   lg:text-[15px] lg:leading-[16px] lg:tracking-[0.45px] lg:font-[550] lg:text-[#1D1D1D] lg:text-center lg:font-sans
   md:text-[15px] md:leading-[16px] md:tracking-[0.45px] md:font-[550] md:text-[#1D1D1D] md:text-center md:font-sans
   sm:text-[15px] sm:leading-[16px] sm:tracking-[0.45px] sm:font-[550] sm:text-[#1D1D1D] sm:text-center sm:font-sans
   ">
   Our services
   </span>
   </button>
   
  );
}






