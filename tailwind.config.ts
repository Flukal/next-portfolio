import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/fonts/**/*.{woff,woff2,otf,ttf}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        grayDark: 'var(--grayDark)',
        grayLight: 'var(--grayLight)',
      },
    },
    fontFamily: {
      kaushan: ['KaushanScript', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sarala: ['Sarala', 'sans-serif'],
      geist: ['Geist', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config;
