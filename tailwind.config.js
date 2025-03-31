/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar"
import { heroui } from "@heroui/react";
import tailwindAnimate from "tailwindcss-animate"
import preline from "preline/plugin"

const tailwindConfig = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
  	extend: {
  		darkMode: 'class',
  		fontFamily: {
  			sans: ["Inter", "sans-serif"]
  		},
  	}
  },
  darkMode: "class",
  plugins: [
    tailwindScrollbar,
    tailwindAnimate,
    preline,
    heroui(), 
	]
};

export default tailwindConfig;