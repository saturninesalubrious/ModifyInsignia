// tailwind.config.js
// tailwind.config.js
export default {
 content: [
  "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your project
 ],
 theme: {
  extend: {
   fontFamily: {
    inter: ['Inter', 'sans-serif'],
   },
  },
  screens: {
   'mediumdevice': '600px',
   'sm': '640px',
   'md': '768px',
   'lg': '1024px',
   'largedevice': '1240px',
   'xl': '1280px',
   'largedevice2': '1440px',
   '2xl': '1536px',
  }
 },
 plugins: [],
};