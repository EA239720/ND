/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OSBold: ['OpenSansB'],
        OSEBold: ['OpenSansEB'],
        OSSBold: ['OpenSansSB']
      },
    },
  },
  plugins: [],
}

