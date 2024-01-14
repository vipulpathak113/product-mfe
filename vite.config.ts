import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return {
  plugins: [
    react(),
    federation({
      name: "product-mfe",
      filename: "product-mfe-entry.js",
      shared: ["react", "react-dom", "zustand"],
      exposes: {
        "./App": "./src/App.tsx",
      },
      remotes: {
        "cart-mfe": process.env.VITE_CART_MFE_URL,
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  base: "/product-mfe/"
}
});
