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
        brand: {
          50:  '#fff0f0',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff7575',
          400: '#ff3333',
          500: '#e8000d',
          600: '#c20009',
          700: '#990007',
          800: '#7a0006',
          900: '#660005',
          950: '#3d0003',
        },
        dark: {
          950: '#060010',
          900: '#0e0018',
          800: '#140020',
          700: '#1a002a',
          600: '#220034',
          500: '#2c0040',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out forwards',
        'slide-up':      'slideUp 0.7s ease-out forwards',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 9s ease-in-out infinite',
        'pulse-glow':    'pulseGlow 2.5s ease-in-out infinite alternate',
        'marquee':       'marquee 30s linear infinite',
        'marquee-rev':   'marqueeRev 30s linear infinite',
        'spin-slow':     'spin 12s linear infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'border-glow':   'borderGlow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%':   { boxShadow: '0 0 20px rgba(232,0,13,0.3), 0 0 40px rgba(232,0,13,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(232,0,13,0.6), 0 0 80px rgba(232,0,13,0.3)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderGlow: {
          '0%':   { borderColor: 'rgba(232,0,13,0.3)' },
          '100%': { borderColor: 'rgba(232,0,13,0.9)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-mesh':
          'radial-gradient(at 20% 30%, rgba(232,0,13,0.12) 0px, transparent 55%),' +
          'radial-gradient(at 80% 10%, rgba(180,0,60,0.08) 0px, transparent 50%),' +
          'radial-gradient(at 50% 80%, rgba(100,0,150,0.10) 0px, transparent 55%),' +
          'radial-gradient(at 90% 70%, rgba(232,0,13,0.07) 0px, transparent 45%)',
      },
      boxShadow: {
        'glow-sm':  '0 0 15px rgba(232,0,13,0.25)',
        'glow-md':  '0 0 30px rgba(232,0,13,0.35)',
        'glow-lg':  '0 0 60px rgba(232,0,13,0.45)',
        'glow-xl':  '0 0 100px rgba(232,0,13,0.35)',
        'card':     '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(232,0,13,0.2)',
        'nav':      '0 4px 30px rgba(0,0,0,0.5)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
