import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        languageOptions: {
            sourceType: 'module',
            globals: globals.nodeBuiltin
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended
];
