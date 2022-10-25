/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ["Roobert", "Helvetica Neue", "Arial", "Helvetica", "sans-serif"]
    },
    'colors': {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000",
      white: "#fff",
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      'pure-black': '#000000',
      'gray-dark': "#181818",
      'gray-midtone': '#525252',
      'gray-light': '#767575',
      'silver-dark': '#DEDDDB',
      'silver-light': '#F5F5F4',
      'gatorade': '#DB1600',
      'gatorade-dark': '#DB1600',
      'sg-purple': '#9837FF',
      'sg-purple-dark': '#6400CF',
      'sg-purple-light-24': '#E6CFFF',
      'sg-purple-light-08': '#F7EFFF',
      'sg-blue': '#1C71EF',
      'sg-blue-dark': '#0056D6',
      'sg-blue-light-24': '#CBE0FF',
      'sg-blue-light-08': '#EEF5FF',
      'sg-gold': '#A99981',
      'sg-gold-dark': '#766751',
      'sg-gold-light-24': '#EAE7E1',
      'sg-gold-light-08': '#F8F7F5',
    },
    extend: {},
  },
  plugins: [],
};
