/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#FBF9F5',      // Primary Base (Page background, warm off-white)
        linen: {
          DEFAULT: '#F2ECE4',      // Secondary Surface (Cards, containers)
          light: '#F8F4EE',
          dark: '#E7DFD4',
          border: '#E2D8CB',
        },
        laurel: {
          DEFAULT: '#2D4A3E',      // Primary Accent (Deep Laurel Green)
          dark: '#1F342B',
          hover: '#243C32',
          light: '#3C6051',
          tint: '#EBF1ED',
          border: '#B8C9C0',
        },
        sage: {
          DEFAULT: '#8EA89D',      // Secondary Accent (Soft Sage)
          tint: '#EEF3F0',
          border: '#C6D6CF',
          text: '#3A5248',
        },
        terracotta: {
          DEFAULT: '#C47355',      // Warm Accent (Terracotta / Clay)
          hover: '#AD6145',
          dark: '#934E36',
          tint: '#FAEDE7',
          border: '#E8C5B8',
        },
        charcoal: {
          DEFAULT: '#2B2D2F',      // Slate Charcoal Body Text
          light: '#424548',
        },
        driftwood: {
          DEFAULT: '#666562',      // Driftwood Grey Muted Text
          light: '#85837E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(43, 45, 47, 0.05)',
        'warm-md': '0 8px 24px -4px rgba(43, 45, 47, 0.07), 0 2px 6px -1px rgba(43, 45, 47, 0.03)',
        'warm-lg': '0 20px 36px -8px rgba(43, 45, 47, 0.09), 0 4px 12px -2px rgba(43, 45, 47, 0.04)',
      }
    },
  },
  plugins: [],
}
