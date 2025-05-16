import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      'react-refresh/babel': path.resolve('./node_modules/react-refresh/babel.js'),
    },
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'nothing-s0w5.onrender.com',
      'localhost',
    ],
  },
});
