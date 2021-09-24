module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#ffb037",
      secondary: "#364547",
      darker: "#bd8229",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#ffb037",
      secondary: "#364547",
      darker: '"#bd8229"',
    }),
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
