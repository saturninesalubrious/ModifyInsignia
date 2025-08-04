'use client';

import { useRouter } from 'next/navigation';

// A reusable footer button component that navigates to the contact page.
// The styling is defined using a mobile-first approach, where base classes
// apply to all screen sizes and are only overridden if necessary.
export default function FooterGetStartedButton() {
  
  // Initialize the Next.js router to handle client-side navigation.
  const router = useRouter();

  // The event handler for the button click. It pushes a new route
  // to the history, navigating the user to the '/ContactUs' page.
  const handleClick = () => {
    router.push('/ContactUs');
  };

  return (
    <button
      onClick={handleClick}
      className="
        // Base styles for all screen sizes (mobile-first)
        flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px]
        bg-white text-[#1D1D1D] text-center text-[15px] leading-[16px]
        tracking-[0.45px] font-[550] font-sans w-full
        
        // Breakpoint overrides
        lg:w-full
        xl:w-fit
        2xl:w-fit
        
        // Hover and active effects
        transition-all duration-200 ease-in-out
        hover:scale-[0.95] active:scale-[0.90] hover:bg-[#CDCBFF]
      "
    >
      Get Started
    </button>
  );
}
