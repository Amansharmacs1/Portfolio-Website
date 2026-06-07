import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Website/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: [
        // search up for workspace root
        '..',
        '/Users/amansharma/.gemini/antigravity/brain/tempmediaStorage'
      ]
    }
  },
});
