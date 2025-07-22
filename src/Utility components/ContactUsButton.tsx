'use client';

import { useRouter } from 'next/navigation';


export default function ContactUsButton() {


  const router = useRouter();

  const handleClick = () => {
    router.push('/ContactUs');
  };


  return (
    <button onClick={handleClick}  className="flex h-[48px] px-[24px] py-[16px] justify-center items-center gap-[10px] rounded-[12px] bg-white hover:bg-[#CDCBFF] text-[#1D1D1D] font-sans transition-colors duration-200">
      Contact us
    </button>
  );
}
