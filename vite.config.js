import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Use environment variable PORT or default to 3000 for local development
    port: process.env.PORT || 3000,
    open: true,
  },
});
