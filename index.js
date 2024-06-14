import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin-js';

export default [
    {
        languageOptions: {
            sourceType: 'module',
            globals: globals.nodeBuiltin
        }
    },
    {
        // Stylistic Configuration.
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            // Use 4 space indentations and disallow tabs.
            '@stylistic/indent': ['error', 4],
            '@stylistic/no-tabs': 'error',
            '@stylistic/no-mixed-spaces-and-tabs': 'error',

            // Use single quotes as much as possible.
            '@stylistic/quotes': ['error', 'single', {
            	avoidEscape: true
            }],

            // Require semicolons where needed.
            '@stylistic/semi': 'error',
            '@stylistic/semi-spacing': 'error',
            '@stylistic/no-extra-semi': 'error',

            // Only one statement per line.
            '@stylistic/max-statements-per-line': 'error',

            // Require a newline at the end of files.
            '@stylistic/eol-last': 'error',

            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/brace-style': 'error',
            '@stylistic/keyword-spacing': 'error',
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/key-spacing': 'error',
            '@stylistic/function-call-spacing': 'error',

            // Keep consistent comma style.
            '@stylistic/comma-spacing': 'error',
            '@stylistic/comma-dangle': 'error',
            '@stylistic/comma-style': 'error',

            '@stylistic/new-parens': 'error',
            '@stylistic/arrow-spacing': 'error',
            '@stylistic/array-bracket-spacing': 'error',
            '@stylistic/space-in-parens': 'error',
            '@stylistic/spaced-comment': 'error',
            '@stylistic/switch-colon-spacing': 'error',
            '@stylistic/computed-property-spacing': 'error',
            '@stylistic/block-spacing': 'error',
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/rest-spread-spacing': 'error',
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/template-curly-spacing': 'error',
            '@stylistic/template-tag-spacing': 'error',
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/space-unary-ops': 'error',
            '@stylistic/space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always'
                }
            ]
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended
];
