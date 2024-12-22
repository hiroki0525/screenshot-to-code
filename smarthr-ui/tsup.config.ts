import { defineConfig } from "tsup";

export default defineConfig([
    {
        clean: true,
        dts: true,
        format: "iife",
        entry: ["src/index.ts"],
        outDir: '../backend/static/dist'
    }
]);