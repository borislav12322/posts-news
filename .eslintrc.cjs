module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "eslint-config-prettier",
  ],
    parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": [
      "error",
    ],
  },
};
