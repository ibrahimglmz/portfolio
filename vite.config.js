import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { resolve } from 'path'
import fs from 'fs'

// Manifest ve diğer dosyaları dizine kopyalamak için fonksiyon
const copyPublicFiles = () => {
  return {
    name: 'copy-files',
    writeBundle() {
      // .nojekyll dosyasını oluştur
      fs.writeFileSync('./dist/.nojekyll', '')
      
      // manifest.json dosyasını kopyala
      if (fs.existsSync('./public/manifest.json')) {
        fs.copyFileSync('./public/manifest.json', './dist/manifest.json')
      }
      
      // favicon.svg dosyasını kopyala
      if (fs.existsSync('./public/favicon.svg')) {
        fs.copyFileSync('./public/favicon.svg', './dist/favicon.svg')
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression()
  ],
  base: '/my_web/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-animations': ['framer-motion'],
          'vendor-icons': ['react-icons']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/styles/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2
      },
      mangle: {
        toplevel: true
      }
    },
    assetsInlineLimit: 4096,
    sourcemap: false,
    cssCodeSplit: true,
    cssMinify: true,
    target: 'esnext',
    copyPublicDir: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  preview: {
    port: 3000,
    historyApiFallback: true
  },
  css: {
    postcss: './postcss.config.cjs',
  },
})
