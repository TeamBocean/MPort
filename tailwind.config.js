/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      color: {
        'custom-black': '#000000', 
        'custom-blue': '#0000FF', 
        'custom-purple': '#800080'
        
      },
    },
  },
  plugins: [
    import ('flowbite/plugin')
  ],
}