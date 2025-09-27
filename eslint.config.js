// eslint.config.js
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteConfig from "./svelte.config.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    ignores: [
      ".DS_Store",
      "node_modules",
      "/build",
      "/.svelte-kit",
      "/package",
      ".env",
      ".env.*",
      "!/.env.example",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add this if you are using SvelteKit in non-SPA mode
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        svelteConfig,
      },
    },
    rules: {
      "svelte/no-at-html-tags": "off",
    },
  },
];
