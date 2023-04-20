module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // If use typescript
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",                     // If use typescript
    "airbnb/hooks",
    "prettier",
    "next/core-web-vitals"
  ],
  rules: {
    // React 16+ 에서 import React from "react" 불필요
    "react/react-in-jsx-scope": "off",
    // TypeScript 적용시 arrow function component 오류 fix
    "react/function-component-definition": [2, {namedComponents:'arrow-function'}]
  }
}
