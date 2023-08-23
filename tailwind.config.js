/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlueIntroemailBg: 'hsl(217, 28%, 15%)',
        darkBlueMainBg: 'hsl(218, 28%, 13%)',
        darkBlueFooterBg: 'hsl(216, 53%, 9%)',
        darkBlueTestimonialsBg: 'hsl(219, 30%, 18%)',
        cyanInsideGradient: 'hsl(176, 68%, 64%)',
        blueInsideGradient: 'hsl(198, 60%, 50%)',
        lightRedError: 'hsl(0, 100%, 63%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'raleway': ['var(--font-raleway)', 'sans-serif'],
        'openSans': ['var(--font-openSans)', 'sans-serif'],
      },
      backgroundImage: {
        'bgCurvyMobile' : "url(../../public/bg-curvy-mobile.svg)",
        'bgCurvyDesktop' : "url(../../public/bg-curvy-desktop.svg)",
        'bgQuotes' : "url(../../public/bg-quotes.png)",
      }
    },
  },
  plugins: [],
}
