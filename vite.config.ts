import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "./docs/bundle-analysis.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  base: "/cv-lidia-react/",
  build: {
    outDir: "docs",
  },
});
