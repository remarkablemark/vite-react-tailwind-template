import { resolve } from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setupFiles.ts'],
    globals: true,
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      thresholds: {
        100: true,
      },
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      test: resolve(__dirname, './test'),
    },
  },
});
