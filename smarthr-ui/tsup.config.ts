import { defineConfig } from "tsup";

export default defineConfig([
    {
        clean: true,
        dts: true,
        format: "esm",
        entry: ["src/index.ts"],
        outDir: '../backend/dist',
        tsconfig: "tsconfig.build.json",
        treeshake: true,
        shims: true,
    }
]);