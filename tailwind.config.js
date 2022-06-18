module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(42px)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
