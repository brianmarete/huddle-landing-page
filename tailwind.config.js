/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(192, 100%, 9%)",
        "pale-blue": "hsl(207, 100%, 98%)",
        pink: "hsl(322, 100%, 66%)",
        "light-pink": "hsl(321, 100%, 78%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "section-bottom-desktop-1": "url('/bg-section-bottom-desktop-1.svg')",
        "section-bottom-desktop-2": "url('/bg-section-bottom-desktop-2.svg')",
        "section-bottom-mobile-1": "url('/bg-section-bottom-mobile-1.svg')",
        "section-bottom-mobile-2": "url('/bg-section-bottom-mobile-2.svg')",
        "section-top-desktop-1": "url('/bg-section-top-desktop-1.svg')",
        "section-top-desktop-2": "url('/bg-section-top-desktop-2.svg')",
        "section-top-mobile-1": "url('/bg-section-top-mobile-1.svg')",
        "section-top-mobile-2": "url('/bg-section-top-mobile-2.svg')",
        "footer-top-desktop": "url('/bg-footer-top-desktop.svg')",
        "footer-top-mobile": "url('/bg-footer-top-mobile.svg')",
      },
    },
  },
  plugins: [],
};
