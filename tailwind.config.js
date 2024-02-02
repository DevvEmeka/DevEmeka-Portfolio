/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'fira': ["Fira Code", "Fira Mono", "Roboto Mono", "monospaces"],
      'mofont': ["SFMono-Regular"],
      'inter': ["Inter", "Fira Mono", "Roboto Mono"],
      'baloo': ["Baloo 2"],
      'calibre': ["Calibre"],
      'SF': ["SF-Mono"],
      },
      gridTemplateColumns: {
        'gridmix': 'repeat(2, minmax(140px, 200px))',
        'grid-col-13': 'repeat(auto-fill, minmax(260px, 1fr))'
      },
      // animation: {
      //   'transition': 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
      // },
      transitionProperty: {
        'all': 'all',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
    // screens: {
    //    'pn': '480px',
    // }
  },
  plugins: [],
}