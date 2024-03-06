import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { patchCssModules } from "vite-css-modules";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    patchCssModules(),
    libInjectCss(),
    dts({ include: ["lib"] }),
    copy({
      targets: [
        { src: "lib/styles/base.css", dest: "dist/styles" },
        { src: "lib/styles/reset.css", dest: "dist/styles" },
        {
          src: "lib/components/**/*.module.css",
          dest: "dist/styles/components",
          rename: (name, extention) =>
            `${name.replace(".module", "")}.${extention}`,
        },
      ],
      hook: "writeBundle", // notice here
    }),
  ],
  build: {
    copyPublicDir: false,
    cssMinify: "lightningcss",
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        assetFileNames: "styles/modules/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
  css: {
    transformer: "lightningcss",
    modules: {
      localsConvention: "camelCase",
    },
    lightningcss: {
      cssModules: {},
    },
  },
});
