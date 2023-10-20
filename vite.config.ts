/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
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
      external: ['react', 'styled-components', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        // https://rollupjs.org/configuration-options/#output-entryfilenames
        // If you need to to build the lib in multiple formats, consider adding a format in your path.
        // entryFileNames: "[format]/[name].js",
        entryFileNames: '[name].js',
        preserveModules: true,
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
      // To keep the same folder structure for .d,ts
      entryRoot: 'src/lib',
    }),
  ],
});
