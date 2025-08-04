'use client';

import { useRouter } from 'next/navigation';

// A reusable button component that navigates to the features page.
// The styling is defined using a mobile-first approach, where base classes
// apply to all screen sizes and are only overridden if necessary.
export default function OutlineServicesButton() {
  
  // Initialize the Next.js router to handle client-side navigation.
  const router = useRouter();

  // The event handler for the button click. It pushes a new route
  // to the history, navigating the user to the '/Features' page.
  const handleClick = () => {
    router.push('/Features');
  };

  return (
    <button
      onClick={handleClick}
      className="
        // Base styles for all screen sizes (mobile-first)
        flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px]
        border border-[#D7D7D7] bg-white
        
        // Hover and active effects
        transition-all duration-200 ease-in-out
        hover:scale-[0.95] active:scale-[0.90] hover:bg-[#CDCBFF]
      "
    >
      <span
        className="
          // Base styles for all screen sizes (mobile-first)
          text-[15px] leading-[16px] tracking-[0.45px] font-[550]
          text-[#1D1D1D] text-center font-sans
        "
      >
        Our services
      </span>
    </button>
  );
}
