/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#132440', // Deepest Navy
          800: '#16476A', // Dark Blue
        },
        teal: {
          500: '#3B9797', // Vibrant Teal
        },
        crimson: {
          500: '#BF092F', // Deep Red
        },
        brand: {
          navy: '#132440',
          blue: '#16476A',
          teal: '#3B9797',
          crimson: '#BF092F',
        }
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'Inter', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'nav': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'premium': '0 10px 40px -10px rgba(19,36,64,0.3)',
        'glow-teal': '0 0 20px rgba(59, 151, 151, 0.4)',
        'glow-crimson': '0 0 20px rgba(191, 9, 47, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #132440 0%, #16476A 100%)',
        'mesh-pattern': "url('/mesh.svg')",
      },
      animation: {
        'fade-in':  'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
}
