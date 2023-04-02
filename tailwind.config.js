/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#70c119",
          
 "secondary": "#22f750",
          
 "accent": "#d467e0",
          
 "neutral": "#251E29",
          
 "base-100": "#F8FAFB",
          
 "info": "#4587F2",
          
 "success": "#52E5CA",
          
 "warning": "#EED368",
          
 "error": "#E6414C",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}