module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['.eslintrc.cjs', 'src/vite-env.d.ts'],
  overrides: [
    { env: { node: true }, files: ['.eslintrc.{js,cjs}'], parserOptions: { sourceType: 'script' } },
    {
      files: ['src/**/*.styles.{ts,tsx}'],
      rules: { 'no-unused-vars': 'off', 'react/prop-types': 'off' }
    }
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'never',
        pathGroups: [
          { group: 'external', pattern: 'react', position: 'before' },
          { group: 'external', pattern: 'react-dom/client', position: 'before' },
          { group: 'external', pattern: 'react-router-dom', position: 'before' },
          { group: 'external', pattern: 'react-redux', position: 'before' }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: false, vars: 'all' }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'quote-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        shorthandFirst: false,
        shorthandLast: false
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: true }],
    'space-before-function-paren': 'off'
  },
  settings: { react: { version: 'detect' } }
}
