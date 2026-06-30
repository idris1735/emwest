import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CSS-variable driven — flip in light theme via [data-theme="light"]
        'deep-navy': 'rgb(var(--deep-navy) / <alpha-value>)',
        navy: 'rgb(var(--navy) / <alpha-value>)',
        // Override Tailwind white so text-white/xx auto-adapts
        white: 'rgb(var(--color-white) / <alpha-value>)',
        // Fixed accents — same in both themes
        royal: '#1E3A8A',
        gold: '#F7941D',
        'gold-light': '#FBB040',
        'gold-dark': '#D4790E',
        crimson: '#E31E24',
        'crimson-dark': '#B01519',
      },
      animation: {
        'spin-slow': 'spin 28s linear infinite',
        'spin-slow-r': 'spin 22s linear infinite reverse',
        float: 'float 8s ease-in-out infinite',
        'float-d': 'float 8s ease-in-out 3s infinite',
        marquee: 'marquee 45s linear infinite',
        'marquee-r': 'marquee 40s linear infinite reverse',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'gradient-x': 'gradient-x 6s ease infinite',
        blob: 'blob 14s ease-in-out infinite',
        'blob-d': 'blob 14s ease-in-out 5s infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-28px) rotate(4deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(247,148,29,0.3), 0 0 60px rgba(247,148,29,0.1)' },
          '50%': { boxShadow: '0 0 50px rgba(247,148,29,0.7), 0 0 120px rgba(247,148,29,0.25)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '33%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '66%': { borderRadius: '50% 40% 60% 30% / 40% 50% 60% 50%' },
        },
        'border-rotate': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
