/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Emerald-green brand palette (from docs/design/growth_narrative)
        primary: {
          DEFAULT: '#10B981', // emerald — primary actions
          hover: '#059669',
          deep: '#006C49', // forest — logo & heading accents
          soft: '#E6F7F1', // 10% tint for chips/badges
        },
        secondary: '#064E3B',
        accent: '#F59E0B', // amber — sparing highlights
        ink: {
          DEFAULT: '#0B1C30', // on-surface
          muted: '#475467', // on-surface-variant
        },
        surface: {
          DEFAULT: '#F8F9FF', // page background
          lowest: '#FFFFFF',
          low: '#EFF4FF',
          container: '#E5EEFF', // tonal CTA bands
          high: '#DCE9FF',
        },
        outline: {
          DEFAULT: '#BBCABF',
          variant: '#E2E8F0',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem', // 12px — design system default radius
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 12px -2px rgba(16, 185, 129, 0.08), 0 2px 6px -2px rgba(11, 28, 48, 0.06)',
        card: '0 8px 24px -6px rgba(11, 28, 48, 0.08)',
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulsering: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        pulsering: 'pulsering 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
