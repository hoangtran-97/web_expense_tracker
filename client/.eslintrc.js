module.exports = {
    root: true,
    extends: "airbnb",
    parser: "babel-eslint",
    env: {
        jest: true
    },
    rules: {
        "no-use-before-define": "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "comma-dangle": "off",
        indent: ["error", 4, {SwitchCase: 1}],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "import/prefer-default-export": "off",
        "react/prefer-stateless-function": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-tag-spacing": "off",
        "object-curly-spacing": "off",
        "require-yield": "off",
        "no-underscore-dangle": "off",
        "react/no-string-refs": "off",
        "max-len": [
            "error",
            {
                code: 165
            }
        ],
        "react/destructuring-assignment": [
            1,
            "always",
            {
                ignoreClassFields: true
            }
        ],
        "react/no-multi-comp": [
            1,
            {
                ignoreStateless: true
            }
        ],
        "no-shadow": "off",
        "global-require": "off",
        "no-unused-vars": "off",
        "no-alert": 1,
        "linebreak-style": 0, // <----------
        "eslint guard-for-in": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-prototype-builtins": "off",
        "no-restricted-syntax": "off",
        "guard-for-in": "off",
        "react/no-unused-state": "off",
        radix: "off",
        "react/no-array-index-key": "off",
        "react/sort-comp": "off",
        "no-undef": "off",
        "no-nested-ternary": "off",
        "no-unused-expressions": "off",
        quotes: [
            2,
            "double",
            {
                avoidEscape: true
            }
        ],
        "no-unused-vars": [1, {vars: "all", args: "after-used", ignoreRestSiblings: false}],
        "react/jsx-one-expression-per-line": "off",
        "no-return-assign": "off"
    },
    globals: {
        fetch: false
    }
};
