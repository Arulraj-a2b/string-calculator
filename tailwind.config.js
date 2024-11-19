/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        1280: "1280px",
      },
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1280px",
      },
      fontFamily: {
        bold: [`"Roboto-Bold"`],
        semiBold: [`"Roboto-Medium"`],
        regular: [`"Roboto-Regular"`],
      },
    },
  },
  plugins: [],
};
