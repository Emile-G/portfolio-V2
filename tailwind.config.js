module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
    },
    extend: {},
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      bonheurRoyale: ['Bonheur Royale'],
      robotoSlab: ['Roboto Slab'],
    },
    animation: {
      float: 'float 3s infinite',
      refloat: 'refloat 3s infinite',
    },
    keyframes: {
      float: {
        '0%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
      refloat: {
        '0%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}