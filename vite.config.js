import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Importer 'path' (standard Node.js)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Configurer l'alias @ pour pointer vers le dossier src
      '@': path.resolve(__dirname, './src'),
    },
  },
})