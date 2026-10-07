/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f5ff',
          magenta: '#ff00ff',
          violet: '#8b5cf6',
          lime: '#39ff14',
          pink: '#ff0080',
        },
        dark: {
          900: '#020408',
          800: '#040d14',
          700: '#071521',
          600: '#0a1d2e',
          500: '#0e2a3f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ff40',
        'neon-magenta': '0 0 5px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff40',
        'neon-violet': '0 0 5px #8b5cf6, 0 0 20px #8b5cf6, 0 0 40px #8b5cf640',
        'neon-lime': '0 0 5px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff1440',
        'neon-pink': '0 0 5px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff008040',
        'card-glow': '0 8px 32px rgba(0,245,255,0.08), 0 0 0 1px rgba(0,245,255,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'wiggle': 'wiggle 0.4s ease-in-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'scan-line': 'scanLine 8s linear infinite',
        'particle': 'particleDrift 15s linear infinite',
        'typing-cursor': 'typingCursor 0.8s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseNeon: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1.1)' },
          '25%': { transform: 'rotate(-8deg) scale(1.15)' },
          '75%': { transform: 'rotate(8deg) scale(1.15)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 5px #00f5ff40, 0 0 10px #00f5ff20' },
          '100%': { boxShadow: '0 0 20px #00f5ff80, 0 0 40px #00f5ff40, 0 0 80px #00f5ff20' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        particleDrift: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(50px)', opacity: '0' },
        },
        typingCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-grid': `
          linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
        `,
      },
    },
  },
  plugins: [],
};
