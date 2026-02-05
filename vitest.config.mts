import { resolve } from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setupFiles.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      thresholds: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
    reporters:
      process.env.CI === 'true' ? ['default', 'github-actions'] : ['default'],
  },
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      test: resolve(__dirname, './test'),
    },
  },
});
