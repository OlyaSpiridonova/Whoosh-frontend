module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "unused-imports",
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: [],
      },
    ],
    "max-len": ["error", { ignoreComments: true, code: 120 }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies,
    "no-param-reassign": "off",
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "ulbi-tv-plugin/path-checker": ["error", { alias: "@" }],
    "ulbi-tv-plugin/public-api-imports": [
      "error",
      {
        alias: "@",
        testFilesPatterns: [],
      },
    ],
    "ulbi-tv-plugin/layer-imports": [
      "error",
      {
        alias: "@",
        ignoreImportPatterns: [],
      },
    ],
    "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
    "react/no-unstable-nested-components": "warn",
  },
  globals: {},
};
