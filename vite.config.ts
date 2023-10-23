/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { resolve, extname, relative } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
      include: ['src/lib'],
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
      entry: resolve(__dirname, 'src/lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react',
        'styled-components',
        'react/jsx-runtime',
        '@mui/material',
        'color-convert',
        '@emotion/is-prop-valid',
      ],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync('src/lib/**/!(*.d|*.test|*.stories).{js,jsx,ts,tsx}').map((file) => [
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
        // entryFileNames: "[format]/[name].js",
        entryFileNames: '[name].js',
        // preserveModules: true,
        // Externalized deps
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          'styled-components': 'StyledComponents',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      include: ['src/lib'],
      // To keep the same folder structure for .d.ts
      entryRoot: 'src/lib',
      // Do not generate .d.ts for tests and stories.
      exclude: ['**/*.test.*', '**/*.stories.*'],
    }),
  ],
});
