export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Light */
        app: "#F5F5F7",
        panel: "#FFFFFF",
        panelMuted: "#F2F2F4",
        border: "#D1D1D6",
        text: "#1C1C1E",
        textMuted: "#6E6E73",
        accent: "#4F6EF7",
        accentSoft: "#E8ECFF",

        /* Dark */
        appDark: "#0F1115",
        panelDark: "#1C1F26",
        panelMutedDark: "#262A33",
        textDark: "#F5F7FA",
        textMutedDark: "#9AA0AA",
        accentDark: "#6DA8FF",
        accentSoftDark: "#1F3A5F",
      },
    },
  },
  plugins: [],
};
