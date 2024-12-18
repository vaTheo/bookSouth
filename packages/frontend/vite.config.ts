import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Using defineConfig ensures proper TypeScript type checking
export default defineConfig({
  // We spread the plugins array to satisfy TypeScript
  plugins: [react()],

  resolve: {
    alias: {
      // Enable absolute imports
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  // Ensure proper TypeScript handling
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
