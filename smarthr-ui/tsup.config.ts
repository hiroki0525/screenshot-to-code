import { defineConfig } from "tsup";

export default defineConfig([
    {
        clean: true,
        dts: true,
        format: "esm",
        entry: ["src/index.ts"],
        outDir: '../backend/static/dist',
        tsconfig: "tsconfig.esm.build.json",
        treeshake: true,
        shims: true,
        target: 'chrome131'
    }
]);