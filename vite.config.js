// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        content_script: resolve(__dirname, "src/content_script.ts"),
        background: resolve(__dirname, "src/background.ts"),
        internal_frame_injector: resolve(
          __dirname,
          "src/internal_frame_injector.ts"
        ),
        content_iframe: resolve(__dirname, "content_iframe.html"),
        internal_iframe: resolve(__dirname, "internal_iframe.html"),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
