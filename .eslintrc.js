module.exports = {
  "extends": ["next/core-web-vitals", "prettier"],
  "root": true,
  "rules": {
    "no-var": "error",
    "no-unused-vars": "error",
    "no-duplicate-imports": "error",
    "prefer-const": "warn",
    "max-len": ["error", 120, { "ignoreUrls": true}],
    "semi": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never",
    }],
    "no-multiple-empty-lines": ["error", { max: 2}],
    "arrow-body-style": ["error", "as-needed"],
    "react/jsx-sort-props": "off",
    "react/function-component-definition": [
      2, {
        "namedComponents": ["arrow-function", "function-declaration"],
        "unnammedComponents": "arrow-function",
      }
    ],
    // testing-library
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",

    // "array-element-newline": ["error", {
    //   "ArrayExpression":  "consistent",
    //   "ArrayPattern": {
    //     "minItems": 3,
    //   },
    // }
    // ],
    // Functions
    // "max-lines-per-function": ["error", { "max": 30 }],
    // "arrow-parens": ["error", "always"]
    // "implicit-arrow-linebreak": ["error", "beside"],
    // "brace-style": ["warn", "1tbs" ] ,
  },
  overrides: [
		{
			// 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		}
  ],
};
