import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SuisseIntl', 'sans-serif'],
        georgia: ['georgiab', 'sans-serif']
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1780px',
        '4xl': '1920px',
        '5xl': '2048px'
      },
      boxShadow: {
        xsmall: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
        small:
          '0 1px 2px -1px rgba(16, 24, 40, 0.1), 0 1px 3px 0 rgba(16, 24, 40, 0.1)',
        medium:
          '0 2px 4px -2px rgba(16, 24, 40, 0.1), 0 4px 6px -1px rgba(16, 24, 40, 0.1)',
        large:
          '0 4px 6px -4px rgba(16, 24, 40, 0.1), 0 10px 15px -3px rgba(16, 24, 40, 0.1)',
        xlarge:
          '0 8px 10px -6px rgba(16, 24, 40, 0.1), 0 20px 25px -5px rgba(16, 24, 40, 0.1)',
        xxlarge: '0 25px 50px -12px rgba(16, 24, 40, 0.25)',
        reasoning:
          '0 23px 44px 0 rgba(176, 183, 195, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
        'cta-box': '0 54px 100px 0 rgba(10, 4, 60, 0.08)'
      },
      minHeight: {
        dvh: '100dvh'
      },
      colors: {
        textColor: '#121212',
        mainColor: '#ffe0fb'
      },
      flex: {
        '1.5': '1.5'
      },
      gridColumn: {
        'full-span': '-1 / 1'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      letterSpacing: {
        basic: '-0.01em'
      },
      borderRadius: {
        base: '10px'
      }
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 20px',
          '@screen sm': {
            maxWidth: '600px'
          },
          '@screen md': {
            maxWidth: '1000px'
          },
          '@screen lg': {
            maxWidth: '1070px'
          },
          '@screen xl': {
            maxWidth: '1110px',
            padding: '0'
          },
          '@screen 2xl': {
            maxWidth: '1170px'
          },
          '@screen 3xl': {
            maxWidth: '1440px'
          },
          '@screen 4xl': {
            maxWidth: '1580px'
          }
        }
      });
    }
  ]
};
export default config;
