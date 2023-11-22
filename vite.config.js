import { resolve } from 'path'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        circulation: resolve(__dirname, 'circulation/index.html'),
        product: resolve(__dirname, 'product/index.html'),
      },
    },
  },
})
