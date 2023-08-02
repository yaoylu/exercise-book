module.exports = {
  extends: [
    '../.eslintrc.js'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // Override rules in recommended set
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ],
    // Turn off rules in recommended sets that have errors - eventually want to re-enable these
    '@typescript-eslint/no-unused-vars': 'off',
    'no-async-promise-executor': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    // Recommended rules that have been intentionally disabled
    'no-inner-declarations': 'off', // See https://github.com/typescript-eslint/typescript-eslint/issues/239
    'no-caller': 'error',
    'no-new-wrappers': 'error',
    curly: [
      'error'
    ],
    'new-parens': [
      'error'
    ],
    // Style rules
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-element-newline': [
      'error',
      'consistent'
    ],
    'block-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'comma-dangle': 'error',
    'key-spacing': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: 'off',
    semi: 'off',
    'space-in-parens': 'error',
    'space-before-blocks': 'error',
    'spaced-comment': [
      'warn',
      'always',
      {
        markers: [
          '/'
        ]
      }
    ],
    'no-restricted-syntax': [
      'error',
      // Forbid accessing the authManager members directly
      {
        selector: 'MemberExpression:has(Identifier[name=\'ShellFeedsApp\']):has(Identifier[name=\'authManager\'])',
        message: 'Accessing authManager members directly is restricted. Please use the helpers in @msnews/windows-shell-utilities'
      },
      {
        selector: 'MemberExpression:has(Identifier[name=\'ShellFeedsApp\']):has(Literal[value=\'authManager\'])',
        message: 'Accessing authManager members directly is restricted. Please use the helpers in @msnews/windows-shell-utilities'
      },
      {
        selector: 'CallExpression:has(Identifier[name=\'ShellFeedsApp\']):has(Identifier[name=\'authManager\'])',
        message: 'Calling authManager members directly is restricted. Please use the helpers in @msnews/windows-shell-utilities'
      },
      // Forbid calling the authManager members directly
      {
        selector: 'CallExpression:has(Identifier[name=\'authManager\']):has(Identifier[name=\'getActiveAccountAsync\'])',
        message: 'Calling getActiveAccountAsync directly is forbidden. Please use \'getActiveAccount\' from @msnews/windows-shell-utilities'
      },
      {
        selector: 'CallExpression:has(Identifier[name=\'authManager\']):has(Identifier[name=\'getAllAccountsAsync\'])',
        message: 'Calling getAllAccountsAsync directly is forbidden. Please use \'getAllAccounts\' from @msnews/windows-shell-utilities'
      },
      {
        selector: 'CallExpression:has(Identifier[name=\'authManager\']):has(Identifier[name=\'updateActiveAccount\'])',
        message: 'Calling updateActiveAccount directly is forbidden. Please use \'updateActiveAccount\' @msnews/windows-shell-utilities'
      },
      {
        selector: 'CallExpression:has(Identifier[name=\'authManager\']):has(Identifier[name=\'authenticateFeedsProfileAsync\'])',
        message: 'Calling authenticateFeedsProfileAsync directly is forbidden. Please use \'authenticateFeedsProfileAsync\' @msnews/windows-shell-utilities'
      },
      {
        selector: 'CallExpression:has(Identifier[name=\'authManager\']):has(Identifier[name=\'checkSeamlessEdgeHandoffOnboarding\'])',
        message: 'Calling checkSeamlessEdgeHandoffOnboarding directly is forbidden. Please use \'getOnboardingStatus\' @msnews/windows-shell-utilities'
      },
      {
        selector: 'CallExpression:has(Identifier[name=\'authManager\']):has(Identifier[name=\'setEdgeHandoffOnboardingComplete\'])',
        message: 'Calling setEdgeHandoffOnboardingComplete directly is forbidden. Please use \'setOnboardingComplete\' @msnews/windows-shell-utilities'
      }
    ]
    // BELOW RULES ARE NOT IN RECOMMENDATION BY ESLINT AND TYPESCRIPT-ESLINT. BUT THESES RULES WERE ORIGINALLY IN TSLINT CONFIG. DEVELOPERS NEED TO REVIEW THEM AND DECIDE WHETHER TO KEEP.
    // "no-trailing-spaces" :"warn",
    // "jsdoc/check-alignment": "warn",
    // "jsdoc/check-indentation": "warn",
    // “jsdoc/require-jsdoc":"warn",
    // disable the rule for all files. https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    // "@typescript-eslint/explicit-member-accessibility": "off",
    // "@typescript-eslint/typedef":["warn",
    //      {
    //         "propertyDeclaration": false,
    //         "memberVariableDeclaration": true,
    //         "arrowParameter": false,
    //         "parameter": false
    //       }
    //     ],
    // "guard-for-in": "warn",
    // "no-eval": "warn",
    // "no-unused-expressions": "warn",
    // "no-shadow": [
    //     "warn",
    //     {
    //         "hoist": "all"
    //     }
    // ],
    // "default-case": "warn",
    // "eqeqeq": [
    //     "warn",
    //     "smart"
    // ],
    // "@typescript-eslint/no-require-imports": "warn",
  }
};

