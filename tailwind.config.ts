import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Merc Brand Colors
        amber: {
          merc: '#C4842A',
          light: '#E09B3D',
          dark: '#9A6520',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#E8E0D0',
          muted: '#C8BFB0',
        },
        merc: {
          black: '#111110',
          dark: '#1C1C1A',
          surface: '#252521',
          card: '#2E2E2A',
          border: '#3A3A35',
          muted: '#7A7568',
          warm: '#C4842A',
          cream: '#F5F0E8',
          red: '#9B3A2E',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
      borderRadius: {
        merc: '2px',
        card: '4px',
        pill: '9999px',
      },
      boxShadow: {
        warm: '0 4px 24px rgba(196, 132, 42, 0.15)',
        'warm-lg': '0 8px 48px rgba(196, 132, 42, 0.2)',
        card: '0 2px 16px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #1C1C1A 0%, #252521 100%)',
        'gradient-amber': 'linear-gradient(135deg, #C4842A 0%, #9A6520 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(17,17,16,0) 0%, rgba(17,17,16,0.3) 40%, rgba(17,17,16,0.85) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
