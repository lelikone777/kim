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
        'main-page': resolve(__dirname, 'main-page/index.html'),
        product: resolve(__dirname, 'product/index.html'),
        exclusive: resolve(__dirname, 'exclusive/index.html'),
        project: resolve(__dirname, 'project/index.html'),
        academy: resolve(__dirname, 'academy/index.html'),
        team: resolve(__dirname, 'team/index.html'),
        leonid: resolve(__dirname, 'leonid/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        contacts: resolve(__dirname, 'contacts/index.html'),
        designers: resolve(__dirname, 'designers/index.html'),
        'article-news': resolve(__dirname, 'article-news/index.html'),
        'blog-news': resolve(__dirname, 'blog-news/index.html'),
        'individual-order': resolve(__dirname, 'individual-order/index.html'),
        'study-studio': resolve(__dirname, 'study-studio/index.html'),
        'mk-studio': resolve(__dirname, 'mk-studio/index.html'),
        'online-learn': resolve(__dirname, 'online-learn/index.html'),
        'mk-online': resolve(__dirname, 'mk-online/index.html'),
        'about-studio': resolve(__dirname, 'about-studio/index.html'),
        'individual-learning': resolve(
          __dirname,
          'individual-learning/index.html',
        ),

        modals: resolve(__dirname, 'modals/index.html'),
        cart: resolve(__dirname, 'cart/index.html'),
        order: resolve(__dirname, 'order/index.html'),
      },
    },
  },
})
