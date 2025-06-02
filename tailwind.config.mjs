/** @type {import('tailwindcss').Config} */
const customConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: ({ opacityValue }) =>
          opacityValue
            ? `rgba(var(--background), ${opacityValue})`
            : `rgb(var(--background))`,
        foreground: ({ opacityValue }) =>
          opacityValue
            ? `rgba(var(--foreground), ${opacityValue})`
            : `rgb(var(--foreground))`,
      },
    },
  },
  plugins: [],
};
export default customConfig;
