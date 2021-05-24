module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        button: { light: "#8ac34e", dark: "#6d9b3e" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
