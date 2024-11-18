import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { analyzer } from 'vite-bundle-analyzer'

const ReactCompilerConfig = {
  target: '18'
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        presets: ['jotai/babel/preset'],
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]]
      }
    }),
    analyzer({ analyzerMode: 'static' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styled': fileURLToPath(new URL('./styled-system', import.meta.url))
    }
  }
})
