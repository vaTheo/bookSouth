module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true, // Updated to latest ECMAScript version
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};