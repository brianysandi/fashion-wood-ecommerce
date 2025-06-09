// lokasi: tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jockey: ["var(--font-jockey-one)"],
      },
      // DAFTARKAN WARNA BARU DI SINI
      colors: {
        "brand-light": "#92A9AB",
        "brand-medium": "#456A6E",
        "brand-dark": "#364445",
      },
    },
  },
  plugins: [],
};
export default config;
