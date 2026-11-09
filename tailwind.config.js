/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080A0D',
          secondary: '#101419',
          card: '#151B21',
          elevated: '#1B232B',
        },
        accent: {
          primary: '#B7FF35',
          secondary: '#8DDB25',
          hover: '#9ee628',
          glow: 'rgba(183, 255, 53, 0.15)',
        },
        text: {
          primary: '#F5F7F2',
          secondary: '#A1AAA3',
          muted: '#737D76',
        },
        border: {
          subtle: '#28312C',
          light: '#35423B',
          glow: 'rgba(183, 255, 53, 0.3)',
        },
        status: {
          success: '#45D483',
          warning: '#FFB547',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(183, 255, 53, 0.25)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle, rgba(183, 255, 53, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};

