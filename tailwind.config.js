/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
      spacing: {
        0.5:	'0.125rem',
        21: '5.375rem',
        33: '8.375rem',
        87 : '21.75rem',
      },
      screens: {
        '2lg': '1050px',
        '3lg': '1100px',
      },
      backgroundImage: {
        'background': "url('/src/assets/background.png')",
        'banner': "url('/src/assets/banner.png')",
      },
      inset: {
				out: '-100vw'
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0.7,0.7,0.7,0.7)'
			}
  },
},
plugins: []
}