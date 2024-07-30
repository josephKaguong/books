/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Montserrat", 'sans-serif'],
        'primary':["Merriweather", 'serif'],
        'secondary':["Roboto", 'sans-serif'],
        'poppins':["Poppins", 'sans-serif']
        
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

