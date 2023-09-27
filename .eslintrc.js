module.exports = {
    // extends: [
    //   "../.eslintrc.js"
    // ],
    parser: "@typescript-eslint/parser",
    rules: {
        indent: ["error", 4],
        // "object-property-newline": ["error", "always"],
        "block-spacing": ["error", "always"],
        // Override rules in recommended set
        "prefer-const": [
            "error",
            {
                destructuring: "all",
                ignoreReadBeforeAssign: true
            }
        ],
        // Turn off rules in recommended sets that have errors - eventually want to re-enable these
        "@typescript-eslint/no-unused-vars": "off",
        "no-async-promise-executor": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        // Recommended rules that have been intentionally disabled
        "no-inner-declarations": "off", // See https://github.com/typescript-eslint/typescript-eslint/issues/239
        "no-caller": "error",
        "no-new-wrappers": "error",
        curly: [
            "error"
        ],
        "new-parens": [
            "error"
        ],
        // Style rules
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                allowSingleLine: true
            }
        ],
        "comma-dangle": "error",
        "key-spacing": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1
            }
        ],
        "no-nested-ternary": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "one-var": [
            "error",
            "never"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        quotes: ["error", "double"],
        semi: "error",
        "space-in-parens": "error",
        "space-before-blocks": "error",
        "spaced-comment": [
            "warn",
            "always",
            {
                markers: [
                    "/"
                ]
            }
        ]
    }
};
