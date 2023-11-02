import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg1': "url('../public/quantum-computing.avif')",
        'bg2': "url('../public/bg2.avif')",
        'bg3': "url('../public/bg3.avif')"
      },
    },
    fontFamily: {
      'homeheader': 'Raleway, Helvetica, Arial'
    }
  },
  plugins: [],
}
export default config
