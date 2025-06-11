export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These names should match your CSS variable names without the "--"
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',
        base: 'var(--color-base)',
        text: 'var(--color-text)',
      },
    },
  },
  plugins: [],
}