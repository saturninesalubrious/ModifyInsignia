'use client';

import { useRouter } from 'next/navigation';

// A reusable button component for the navbar that navigates to the contact page.
// The button is hidden on small and medium screens and appears on large screens and up.
export default function NavbarContactUsButton() {
  
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
        // The button is by default on all screen sizes (mobile-first approach).
        hidden

        // From the 'lg' breakpoint and up, the button is displayed as a container.
        lg:flex lg:items-center lg:justify-center lg:gap-[10px] lg:px-[24px] lg:py-[16px]
        lg:rounded-[12px] lg:bg-white lg:text-[#1D1D1D] lg:text-center lg:text-[15px]
        lg:leading-[16px] lg:tracking-[0.45px] lg:font-[550] lg:font-sans

        // Hover and active effects
        transition-all duration-200 ease-in-out
        hover:scale-[0.95] active:scale-[0.90] hover:bg-[#CDCBFF]
      "
    >
      Contact Us
    </button>
  );
}
