/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}" ,  "./data/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
      extend: {
    
        colors: {
         buttonBackground: "#FF8A2B" ,
         buttonShadow : "#FF8A2B",
         secondaryCard: "#14171C",
         card : "#111317",
         border: "#23272F",
         primaryCard: "#0F1115"

        },


      fontFamily: {


        poppins: ["Poppins_400Regular"],
        "poppins-medium": ["Poppins_500Medium"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
      }
  },

},

  plugins: [],

}