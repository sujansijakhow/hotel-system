module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}", // this line includes .js, .jsx, .ts, .tsx inside /src and its subfolders
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A6FA5',  // primary
          light: '#3B82F6',    // lighter shade
          dark: '#1E40AF',     // darker shade
        },
        secondary:{
          DEFAULT: '#545158',
        },
        body:{
          DEFAULT: '#F8F9FD',
        },
        fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      },
    },
  },
  plugins: [],
}
