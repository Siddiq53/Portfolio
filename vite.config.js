import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Vite config for React + Vercel static deployment
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});



