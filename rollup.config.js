import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-css-only";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      browser: true,
    }),
    typescript({
      tsconfig: "tsconfig.rollup.json",
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js"],
      // namedExports: {
      //   "node_modules/react/react.js": [
      //     "Children",
      //     "Component",
      //     "PropTypes",
      //     "createElement",
      //   ],
      //   "node_modules/react-dom/index.js": ["render"],
      // },
    }),
    css({ output: "./dist/main.css" }),
  ],
  external: ["styled-components"],
};
