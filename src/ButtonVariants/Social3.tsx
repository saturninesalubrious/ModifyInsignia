import Link from 'next/link';

// Assuming this is a component that *looks* like a button but navigates
export default function  YoutubeNavigationalButton() {
  return (
    <Link
      href="/your-dummy-url" // Replace with your actual URL
      className="
      // All your existing button styles go here
      2xl:flex 2xl:w-[50px] 2xl:h-[50px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:rounded-[100px] 2xl:border rounded-[55px] border border-[#31494A]
      xl:flex xl:w-[50px] xl:h-[50px] xl:justify-center xl:items-center xl:gap-[10px] xl:rounded-[100px] xl:border
      lg:flex lg:w-[50px] lg:h-[50px]lg:justify-center lg:items-center lg:gap-[10px] lg:rounded-[100px] lg:border
      md:flex md:w-[50px] md:h-[50px] md:justify-center md:items-center md:gap-[10px] md:rounded-[100px] md:border
      sm:flex sm:w-[50px] sm:h-[50px] sm:justify-center sm:items-center sm:gap-[10px] sm:rounded-[100px] sm:border
      transition-all duration-200 ease-in-out hover:scale-[0.95] active:scale-[0.90] // Add your hover effects
      "
      // If you need the inner div/image, place it directly inside the Link
    >
      <div className="
      sm:flex sm:w-[20px] sm:h-[20px] sm:justify-center sm:items-center sm:gap-[10px] sm:shrink-0
      md:flex md:w-[20px] md:h-[20px] md:justify-center md:items-center md:gap-[10px] md:shrink-0
      lg:flex lg:w-[20px] lg:h-[20px] lg:justify-center lg:items-center lg:gap-[10px] lg:shrink-0
      xl:flex xl:w-[20px] xl:h-[20px] xl:justify-center xl:items-center xl:gap-[10px] xl:shrink-0
      2xl:flex 2xl:w-[20px] 2xl:h-[20px] 2xl:justify-center 2xl:items-center 2xl:gap-[10px] 2xl:shrink-0
      ">
        <img
          src="https://res.cloudinary.com/dpxtrzlia/image/upload/v1753188890/Vector_13_qjtjgu.png"
          alt="Icon"
          className="
          2xl:w-full 2xl:h-full 2xl:object-contain
          xl:w-full xl:h-full xl:object-contain
          lg:w-full lg:h-full lg:object-contain
          md:w-full md:h-full md:object-contain
          sm:w-full sm:h-full sm:object-contain
          "
        />
      </div>
    </Link>
  );
}