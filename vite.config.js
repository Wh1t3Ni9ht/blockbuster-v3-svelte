import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $components: path.resolve(__dirname, "./src/components"),
      $constants: path.resolve(__dirname, "./src/constants"),
      $functions: path.resolve(__dirname, "./src/functions"),
      $pages: path.resolve(__dirname, "./src/pages"),
      $views: path.resolve(__dirname, "./src/views"),
    },
  },
});
