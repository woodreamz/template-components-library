/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { resolve, extname, relative } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

/**
 * External dependencies that should not be bundled into your library.
 */
const EXTERNAL_DEPENDENCIES = [
  'react',
  'react-is',
  'styled-components',
  'react/jsx-runtime',
  '@mui/icons-material',
  '@mui/lab',
  '@mui/material',
  '@mui/material(.*)',
  '@mui/material/Button',
  '@mui/material/styles',
  '@mui/x-date-pickers',
  '@mui/x-tree-view',
  'color-convert',
  '@emotion/is-prop-valid',
  'styled-reset',
  'lodash',
];

const LIB_FOLDER = 'src/lib';

const EXCLUDED_EXTENSIONS = ['*.test', '*.stories', '*.d.ts'];

// https://vitejs.dev/config/
// Inspired by: https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma
export default defineConfig({
  test: {
    // https://vitest.dev/config/
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['cobertura', 'html', 'text'],
      include: [LIB_FOLDER],
      exclude: [
        '**/tests/**',
        '**/__tests__/**',
        '**/__stories__/**',
        '**/*.d.ts',
        '**/__mocks__/**',
        '**/coverage/**',
      ],
      all: true,
    },
  },
  build: {
    lib: {
      // Entry point for the library
      entry: resolve(__dirname, `${LIB_FOLDER}/index.ts`),
      formats: ['es'],
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into your library
      external: EXTERNAL_DEPENDENCIES,
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync(`src/lib/**/!(${EXCLUDED_EXTENSIONS.join('|')}).{js,jsx,ts,tsx}`).map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative('src/lib', file.slice(0, file.length - extname(file).length)),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        // https://rollupjs.org/configuration-options/#output-entryfilenames
        // If you need to to build the lib in multiple formats, consider adding a format in your path.
        // entryFileNames: '[format]/[name].js',
        entryFileNames: '[name].js',
        // preserveModules: true,
      },
    },
  },
  plugins: [
    react(),
    dts({
      include: [LIB_FOLDER],
      // To keep the same folder structure for .d.ts
      entryRoot: LIB_FOLDER,
      // Do not generate .d.ts for tests and stories.
      exclude: ['**/*.test.*', '**/*.stories.*'],
    }),
  ],
});
