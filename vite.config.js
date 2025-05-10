import { resolve } from 'path'
import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

const locals = { name: 'components' }

export default defineConfig({
  plugins: [pugPlugin(locals)],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, './pages/home.html'),
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
