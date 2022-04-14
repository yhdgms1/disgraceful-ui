import { build } from "esbuild";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "browser",
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short",
    }),
  ],
  outfile: "./dist/index.jsx",
  format: "esm",
  jsx: "preserve",
  external: ["solid-js"],
});
