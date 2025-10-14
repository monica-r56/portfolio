import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const REPO_NAME = 'portfolio'; 

export default defineConfig(() => ({
  base: `/${REPO_NAME}/`,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
