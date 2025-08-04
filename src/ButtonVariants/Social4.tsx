'use client';

import Link from 'next/link';

// A reusable button component that navigates to the Twitter (X) page.
// The styling is defined using a mobile-first approach, where base classes
// apply to all screen sizes.
export default function TwitterNavigationalButton() {
  return (
    <Link
      href="https://x.com/InsigniaCS" // Replace with your actual URL
      className="
        // Base styles for all screen sizes (mobile-first)
        flex w-[50px] h-[50px] justify-center items-center gap-[10px] rounded-[100px] border border-[#31494A]
        
        // Hover and active effects
        transition-all duration-200 ease-in-out hover:scale-[0.95] active:scale-[0.90]
      "
    >
      <div
        className="
          // Base styles for the inner icon container
          flex w-[20px] h-[20px] justify-center items-center gap-[10px] shrink-0
        "
      >
        <img
          src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188860/Vector_11_mofa7b.png"
          alt="Icon"
          className="
            // Base styles for the image itself
            w-full h-full object-contain
          "
        />
      </div>
    </Link>
  );
}
