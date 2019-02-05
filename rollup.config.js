import builtins from "rollup-plugin-node-builtins";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import pkg from "./package.json";

export default {
  input: "src/dicom-microscopy-viewer.js",
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "DICOMMicroscopyViewer",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      exports: "named"
    }
  ],
  plugins: [
    builtins(),
    commonjs(),
    json(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    })
  ]
};
