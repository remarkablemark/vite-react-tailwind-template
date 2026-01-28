import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';

/**
 * @see {@link https://vite.dev/config/}
 */
export default defineConfig({
  base: process.env.BASE || '',
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
  plugins: [preact()],
});
