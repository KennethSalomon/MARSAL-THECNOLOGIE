import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        solutions: path.resolve(__dirname, 'solutions.html'),
        catalogue: path.resolve(__dirname, 'catalogue.html'),
        temoignages: path.resolve(__dirname, 'temoignages.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})


