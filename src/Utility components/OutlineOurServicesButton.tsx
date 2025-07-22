'use client';

import { useRouter } from 'next/navigation';




export default function OutlineServicesButton() {



 const router = useRouter();

 const handleClick = () => {
   router.push('/Features');
 };



 return (




<button onClick={handleClick} className="flex h-[48px] px-[24px] py-[16px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[12px] hover:bg-[#CDCBFF] border border-[#D7D7D7] bg-white text-[#1D1D1D] text-center text-[15px] font-[550] leading-[24.011px] tracking-[0.45px] font-sans">
Our services
</button>



 );
}