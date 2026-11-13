/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        // 深蓝色科技主题色板
        tech: {
          50: '#E6F4FF',
          100: '#B8DCFF',
          200: '#8AC4FF',
          300: '#5CACFF',
          400: '#2E94FF',
          500: '#007BFF',
          600: '#0062CC',
          700: '#004999',
          800: '#003166',
          900: '#001833',
          950: '#000C1A',
        },
        // 深空蓝背景色
        deepspace: {
          50: '#1E3A5F',
          100: '#1A3355',
          200: '#162D4B',
          300: '#122741',
          400: '#0E2137',
          500: '#0A1B2D',
          600: '#081625',
          700: '#06111D',
          800: '#040C15',
          900: '#02070D',
        },
        // 霓虹蓝强调色
        neon: {
          blue: '#00D4FF',
          cyan: '#00FFE5',
          purple: '#7B61FF',
          pink: '#FF6B9D',
        },
        // 覆盖原有 gray 为科技灰
        gray: {
          50: '#F8FAFC',
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#94A3B8',
          400: '#64748B',
          500: '#475569',
          600: '#334155',
          700: '#1E293B',
          800: '#0F172A',
          900: '#020617',
        },
        primary: {
          50: '#E6F4FF',
          100: '#B8DCFF',
          200: '#8AC4FF',
          300: '#5CACFF',
          400: '#2E94FF',
          500: '#007BFF',
          600: '#0062CC',
          700: '#004999',
          800: '#003166',
          900: '#001833',
        },
        blue: {
          500: '#007BFF',
        },
        green: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          800: '#065F46',
        },
        yellow: {
          100: '#FEF3C7',
          500: '#F59E0B',
          800: '#92400E',
        },
        purple: {
          50: '#F5F3FF',
          500: '#8B5CF6',
        },
        indigo: {
          25: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
        },
      },
      screens: {
        mobile: '100px',
        tablet: '640px',
        pc: '769px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 123, 255, 0.15)',
        'neon-blue-sm': '0 0 10px rgba(0, 212, 255, 0.2), 0 0 20px rgba(0, 123, 255, 0.1)',
        'neon-glow': '0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(123, 97, 255, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
        'deep-space': 'linear-gradient(135deg, #02070D 0%, #0A1B2D 50%, #081625 100%)',
        'glass-dark': 'linear-gradient(135deg, rgba(10, 27, 45, 0.8) 0%, rgba(6, 17, 29, 0.9) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.3), 0 0 10px rgba(0, 212, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
