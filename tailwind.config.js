export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        koyapay: {
          primary: "var(--koyapay-primary)",
          accent: "var(--koyapay-accent)",
          primaryLight: "var(--koyapay-primary-light)",
          accentLight: "var(--koyapay-accent-light)",
          accentLighter: "var(--koyapay-accent-lighter)",
        },
      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
