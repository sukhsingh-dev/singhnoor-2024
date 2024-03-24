module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "next",
    "airbnb",
    "standard-with-typescript",
    "plugin:react/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "react/function-component-definition": "off",
    "import/extensions": "off",
    "linebreak-style": "off",
    "react/require-default-props": [2, {
      "functions": "defaultArguments"
    }],
    "jsx-a11y/label-has-associated-control": "off",
    "padded-blocks": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "no-plusplus": "off",
    "no-underscore-dangle": "off"
  }
};
