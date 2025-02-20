const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "*.min.js",
      "coverage/",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: Object.assign(
          {},
          globals.browser,
          globals.node,
          globals.mocha
      ),
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];