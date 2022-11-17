module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    './screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '1.6875rem',
      },
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        success: 'var(--success)',
        danger: 'var(--danger)',
        bg: 'var(--bg)',
        'bg-secondary': 'var(--bg-secondary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        active: 'var(--text-active)',
        disabled: 'var(--text-disabled)',
      },
      boxShadow: {},
      lineHeight: {
        12: '0.25rem',
      },
      scale: {
        120: '1.2',
      },
      spacing: {
        3.75: '0.9375rem',
        6.25: '1.5625rem',
        7.5: '1.875rem',
        8.75: '2.1875rem',
        10.5: '2.625rem',
        11.25: '2.8125rem',
        12.5: '3.125rem',
        15: '3.75rem',
        22: '5.5rem',
        25: '6.25rem',
      },
      fontSize: {
        '3.35xl': ['2rem', '2.5rem'],
      },
      fontFamily: {},
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
      },
      letterSpacing: {
        widest: '0.106em',
        1.5: '0.094rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
