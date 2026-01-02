/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Base colors
        white: '#FFFFFF',
        black: '#0A0F1D',
        
        // Primary color palette - Electric Blue
        primary: {
          50: '#E6F2FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          500: '#0077FF',
          600: '#005FCC',
          700: '#004799',
          800: '#003066',
          900: '#001833',
        },
        
        // Accent color - Vibrant Pink
        accent: {
          50: '#FFE6F5',
          100: '#FFCCEB',
          200: '#FF99D6',
          300: '#FF66C2',
          400: '#FF33AD',
          500: '#FF0099',
          600: '#CC007A',
          700: '#99005C',
          800: '#66003D',
          900: '#33001F',
        },
        
        // Secondary color - Electric Purple
        secondary: {
          50: '#F2E6FF',
          100: '#E6CCFF',
          200: '#CC99FF',
          300: '#B366FF',
          400: '#9933FF',
          500: '#8000FF',
          600: '#6600CC',
          700: '#4D0099',
          800: '#330066',
          900: '#1A0033',
        },
        
        // Tertiary color - Neon Green
        tertiary: {
          50: '#F0FFE6',
          100: '#E0FFCC',
          200: '#C2FF99',
          300: '#A3FF66',
          400: '#85FF33',
          500: '#66FF00',
          600: '#52CC00',
          700: '#3D9900',
          800: '#296600',
          900: '#143300',
        },
        
        // Gradient colors
        gradient: {
          primary: 'linear-gradient(135deg, #0077FF 0%, #8000FF 100%)',
          secondary: 'linear-gradient(135deg, #FF0099 0%, #FF6600 100%)',
          tertiary: 'linear-gradient(135deg, #66FF00 0%, #00CCFF 100%)',
        },
        
        // Neutral grays - Cool Gray
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        
        // Background and surface colors
        background: '#FFFFFF',
        surface: '#F8FAFF',
        
        // Text colors
        'text-primary': '#0A0F1D',
        'text-secondary': '#4B5563',
        'text-tertiary': '#6B7280',
        
        // Border colors
        'border-subtle': '#E5E7EB',
        'border-medium': '#D1D5DB',
      },
      
      // Typography
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.2' }],
        'sm': ['0.875rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      // Box shadows
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.04)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'lg': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
        'none': 'none',
        'card': '0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
        'elevation': '0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      
      // Border radius
      borderRadius: {
        'none': '0px',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      
      // Extend spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
      
      // Z-index
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
