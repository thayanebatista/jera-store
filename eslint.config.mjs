// @ts-check
import prettier from 'eslint-plugin-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  plugins: {
    prettier,
  },
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',
    // Vue Specific Rules
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],

    // JavaScript/TypeScript Rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
  },
  ignores: [
    '.storybook/**',
    'node_modules/**',
    'dist/**',
    'public/**',
    '**/*.stories.ts',
    '**/*.test.ts',
    '.vscode/',
    '.yarn/',
    'dist/',
    'public/',
    '*.d.ts',
    'src/**/*.d.ts',
    'src/**/*.generated.*',
    'eslint.config.js',
    'tsconfig.node.json',
    'tsconfig.json',
    'vite.config.ts',
  ],
});
