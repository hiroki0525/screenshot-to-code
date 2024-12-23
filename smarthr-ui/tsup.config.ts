import { defineConfig } from "tsup";

export default defineConfig([
    {
        clean: true,
        dts: true,
        splitting: false,
        format: "esm",
        entry: ["src/index.ts"],
        outDir: '../backend/static/dist',
        tsconfig: "tsconfig.esm.build.json",
        treeshake: true,
        shims: true,
        target: 'chrome131',
        // Do not specify `noExternal` to let LLM concentrate on smarthr-ui code decoding
        // noExternal: [
        //     "@smarthr/wareki",
        //     "dayjs",
        //     "lodash.merge",
        //     "lodash.range",
        //     "polished",
        //     "react-draggable",
        //     "react-icons",
        //     "react-innertext",
        //     "react-transition-group",
        //     "tailwind-variants",
        //     "tailwindcss",
        // ]
    }
]);