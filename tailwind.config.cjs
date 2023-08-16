/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,md,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: 'hsl(var(--er))',
              'overflow-wrap': 'break-word'
            },
            a: {
              color: 'rgb(96 165 250)'
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: ["corporate", "business"],
  },
};
