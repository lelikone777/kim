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
        exclusive: resolve(__dirname, 'exclusive/index.html'),
        project: resolve(__dirname, 'project/index.html'),
        academy: resolve(__dirname, 'academy/index.html'),
        'study-studio': resolve(__dirname, 'study-studio/index.html'),
        'mk-studio': resolve(__dirname, 'mk-studio/index.html'),
        'online-learn': resolve(__dirname, 'online-learn/index.html'),

        modals: resolve(__dirname, 'modals/index.html'),
        cart: resolve(__dirname, 'cart/index.html'),
        order: resolve(__dirname, 'order/index.html'),
      },
    },
  },
})
