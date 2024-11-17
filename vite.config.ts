import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mutts-spin-the-wheel/", // Replace 'mutts-spin-the-wheel' with your repository name
});
