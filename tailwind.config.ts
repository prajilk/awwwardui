import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "elastic-out": "var(--elastic-out)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        wavy: "wavy 0.8s ease-in-out infinite",
        glowing: "glowing 20s linear infinite",
        squiggly: "squiggly .4s steps(2) infinite",
        "text-marquee": "text-marquee 2s linear infinite forwards",
        "text-rollup": "rollup cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
        "text-rolldown": "rolldown cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
      },
      keyframes: {
        glow: {
          "0%": {
            opacity: ".5",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: ".5",
          },
        },
        wavy: {
          "50%": {
            transform: "translateY(-3px)",
          },
        },
        glowing: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "400% 0" },
          "100%": { backgroundPosition: "0" },
        },
        squiggly: {
          "0%": {
            transform: "none",
          },
          "100%": {
            transform: "skew(1.5deg, .2deg) translate(0, -1.5px)",
          },
        },
        "text-marquee": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-125%)",
          },
        },
        rollup: {
          "50%": {
            transform: "translateY(-75%)",
            opacity: "0",
          },
          "50.1%": {
            transform: "translateY(75%)",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        rolldown: {
          "50%": {
            transform: "translateY(75%)",
          },
          "50.1%": {
            transform: "translateY(-75%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
