/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        content: "calc(100vw - 17rem)",
        ["mobile-content"]: "calc(100vw - 2rem)",
      },
    },
  },
  daisyui: {
    themes: [
      "night",
      {
        robin: {
          primary: "#b57eff",
          secondary: "#d09efe",
          accent: "#d0baff",
          neutral: "#cfffdd",
          "base-100": "#27293c",
          info: "#bae1ff",
          success: "#baffc9",
          warning: "#ffffba",
          error: "#ffb3ba",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
