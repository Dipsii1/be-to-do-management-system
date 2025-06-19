import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: { ...globals.node, ...globals.es2021 } }},
  pluginJs.configs.recommended,
  {
    "rules": {
      "no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ]
    }
  },
  // Khusus untuk test files
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    rules: {
      "no-unused-vars": "off"
    }
  }
];