module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    'svelte3',
    'eslint-plugin-json',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-svelte3',
    'eslint-plugin-tailwind'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    }
  ],
  extends: ['eslint:recommended', 'plugin:tailwind/recommended'],
  rules: {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
  },
  settings: {
    // ...
  }
};
