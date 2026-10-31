/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ── Design Tokens ──────────────────────────────────────────
      colors: {
        // Brand — Crimson
        crimson: {
          50:  '#FFF1F3',
          100: '#FFE4E8',
          200: '#FECDD6',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
          950: '#4C0519',
        },
        // Brand — Deep Red
        deepred: {
          DEFAULT: '#7F1226',
          dark:    '#5C0D1C',
        },
        // Semantic
        success: {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        warning: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        danger: {
          50:  '#FFF1F3',
          100: '#FFE4E8',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        info: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Consistent type scale: 12/14/16/20/24/32/48
        'xs':   ['0.75rem',  { lineHeight: '1rem' }],       // 12px
        'sm':   ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base': ['1rem',     { lineHeight: '1.5rem' }],     // 16px
        'lg':   ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        'xl':   ['1.25rem',  { lineHeight: '1.75rem' }],    // 20px
        '2xl':  ['1.5rem',   { lineHeight: '2rem' }],       // 24px
        '3xl':  ['2rem',     { lineHeight: '2.25rem' }],    // 32px
        '4xl':  ['3rem',     { lineHeight: '1.1' }],        // 48px
      },
      spacing: {
        // 8px grid
        '0.5': '0.125rem',  // 2px
        '1':   '0.25rem',   // 4px
        '2':   '0.5rem',    // 8px
        '3':   '0.75rem',   // 12px
        '4':   '1rem',      // 16px
        '5':   '1.25rem',   // 20px
        '6':   '1.5rem',    // 24px
        '8':   '2rem',      // 32px
        '10':  '2.5rem',    // 40px
        '12':  '3rem',      // 48px
        '16':  '4rem',      // 64px
        '20':  '5rem',      // 80px
        '24':  '6rem',      // 96px
      },
      borderRadius: {
        'sm':   '0.25rem',
        'md':   '0.375rem',
        'lg':   '0.5rem',
        'xl':   '0.75rem',
        '2xl':  '1rem',
        '3xl':  '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'xs':  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm':  '0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px -1px rgb(0 0 0 / 0.10)',
        'md':  '0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)',
        'lg':  '0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)',
        'xl':  '0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.10)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'crimson-sm': '0 2px 8px 0 rgb(185 28 60 / 0.20)',
        'crimson-md': '0 4px 16px 0 rgb(185 28 60 / 0.25)',
        'crimson-lg': '0 8px 24px 0 rgb(185 28 60 / 0.30)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        'card':  '0 1px 3px 0 rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06)',
        'card-hover': '0 8px 24px -4px rgba(0,0,0,.10), 0 2px 6px -2px rgba(0,0,0,.06)',
      },
      backgroundImage: {
        'crimson-gradient': 'linear-gradient(135deg, #B91C3C 0%, #7F1226 100%)',
        'hero-gradient':    'linear-gradient(180deg, #FFF1F3 0%, #FFFFFF 100%)',
        'dark-gradient':    'linear-gradient(180deg, #1c1917 0%, #0c0a09 100%)',
        'card-shimmer':     'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
      },
      animation: {
        'fade-in':      'fadeIn 0.2s ease-out',
        'slide-up':     'slideUp 0.25s ease-out',
        'slide-down':   'slideDown 0.25s ease-out',
        'slide-in-right': 'slideInRight 0.25s ease-out',
        'pulse-slow':   'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer':      'shimmer 2s infinite',
        'bounce-soft':  'bounceSoft 1s ease-in-out infinite',
        'spin-slow':    'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',   opacity: '1' },
        },
        slideDown: {
          '0%':   { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        slideInRight: {
          '0%':   { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)',    opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0'  },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-4px)' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
      },
    },
  },
  plugins: [],
}

