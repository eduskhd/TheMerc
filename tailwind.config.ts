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
        // The Merc Brand Colors — Warm Modern Gastropub
        amber: {
          merc: '#D4943A',
          light: '#F0A830',
          dark: '#9A6520',
          glow: 'rgba(212, 148, 58, 0.18)',
        },
        cream: {
          DEFAULT: '#F5EFE0',
          dark: '#E8DFC8',
          muted: '#C8B898',
        },
        merc: {
          black: '#100E0B',
          dark: '#181410',
          surface: '#221C16',
          card: '#2C2418',
          border: '#3D3220',
          muted: '#7A6A50',
          warm: '#D4943A',
          cream: '#F5EFE0',
          red: '#9B3A2E',
          copper: '#A05030',
          green: '#3D7A4A',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
        'section-lg': '7rem',
      },
      borderRadius: {
        merc: '2px',
        card: '4px',
        pill: '9999px',
      },
      boxShadow: {
        warm: '0 4px 24px rgba(212, 148, 58, 0.18)',
        'warm-lg': '0 8px 48px rgba(212, 148, 58, 0.25)',
        'warm-xl': '0 16px 64px rgba(212, 148, 58, 0.3)',
        card: '0 2px 16px rgba(0,0,0,0.5)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.7)',
        glow: '0 0 40px rgba(212, 148, 58, 0.2)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #181410 0%, #221C16 100%)',
        'gradient-amber': 'linear-gradient(135deg, #D4943A 0%, #9A6520 100%)',
        'gradient-amber-h': 'linear-gradient(90deg, #D4943A 0%, #F0A830 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(16,14,11,0) 0%, rgba(16,14,11,0.3) 40%, rgba(16,14,11,0.92) 100%)',
        'gradient-section': 'linear-gradient(180deg, #181410 0%, #221C16 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease-out forwards',
        'fade-up-slow': 'fadeUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'slide-right': 'slideRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(212, 148, 58, 0.4)' },
          '50%': { boxShadow: '0 0 24px rgba(212, 148, 58, 0.7)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-8px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
