import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        blog: resolve(__dirname, 'blog.html'),
        contact: resolve(__dirname, 'contact'),
      },
    },
  },
})
