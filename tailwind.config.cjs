/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        siteblack: '#131519',
        siteDimBlack: '#191d23',
        siteViolet: '#7f46f0',
        siteWhite: '#9eacc7',
      },
      backgroundImage: {
        astral: "url('/src/assets/background/astral.jpg')",
        saiman: "url('/src/assets/background/saiman.jpg')",
        eoaalien: "url('/src/assets/background/eoaalien.jpg')",
        panight: "url('/src/assets/background/panight.jpg')",
        heroImg: "url('/src/assets/background/hero-img.jpg')",
        landing: "url('/src/assets/background/landing.jpg')",
        silverCanyon:"url('/src/assets/background/silverCanyon.jpg')",
        sunlightCanyon:"url('/src/assets/background/sunlightCanyon.jpg')",
        template:"url('/src/assets/background/template.jpg')",
        volcanicRock:"url('/src/assets/background/volcanicRock.jpg')",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
