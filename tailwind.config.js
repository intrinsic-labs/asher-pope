/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-neue-montreal)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        'accent-color': 'var(--accent-color)',
        'software-accent': 'var(--software-accent)',
        'background-rgb': 'var(--background-rgb)',
        'foreground-rgb': 'var(--foreground-rgb)',
      },
    },
  },
  plugins: [],
} 