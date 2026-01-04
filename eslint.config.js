//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import eslintParserTypeScript from '@typescript-eslint/parser'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default [
  ...tanstackConfig,
  {
    ignores: ['.output/**', 'dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended'].rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        { printWidth: 0 },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles.css',
      },
    },
  },
]
