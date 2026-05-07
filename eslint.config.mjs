import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import checkFile from "eslint-plugin-check-file";
import importX from "eslint-plugin-import-x";
import noSecrets from "eslint-plugin-no-secrets";
import perfectionist from "eslint-plugin-perfectionist";
import sonarjs from "eslint-plugin-sonarjs";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      tailwindcss: tailwind,
      "import-x": importX,
      "unused-imports": unusedImports,
      unicorn: unicorn,
      sonarjs: sonarjs,
      "check-file": checkFile,
      "no-secrets": noSecrets,
    },
    settings: {
      "import-x/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Secrets (Increased tolerance for high-entropy URLs)
      "no-secrets/no-secrets": ["error", { tolerance: 4.5 }],

      // Tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",

      // Import sorting (import-x)
      "import-x/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Unused imports
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // SonarJS (Modern flat config access)
      ...sonarjs.configs.recommended.rules,
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/cognitive-complexity": ["warn", 25],

      // Unicorn
      ...unicorn.configs.recommended.rules,
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-module": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prefer-query-selector": "warn",

      // Check File Naming
      "check-file/filename-naming-convention": [
        "error",
        {
          "src/components/**/*.{tsx,ts}": "PASCAL_CASE",
          "src/hooks/**/*.ts": "CAMEL_CASE",
          "src/utils/**/*.ts": "KEBAB_CASE",
          "src/types/**/*.ts": "KEBAB_CASE",
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/components/**": "KEBAB_CASE",
          "src/hooks/**": "KEBAB_CASE",
          "src/utils/**": "KEBAB_CASE",
          "src/types/**": "KEBAB_CASE",
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "public/**",
  ]),
]);

export default eslintConfig;
