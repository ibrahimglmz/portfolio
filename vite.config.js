import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  base: '/',
  build: {
    // Chunk boyutunu optimize et
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-animations': ['framer-motion'],
          'vendor-router': ['react-router-dom'],
        }
      }
    },
    // Build optimizasyonları
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
    // Asset optimizasyonları
    assetsInlineLimit: 4096,
    // Sourcemap'i production'da devre dışı bırak
    sourcemap: false,
    // CSS optimizasyonları
    cssCodeSplit: true,
    cssMinify: true,
    // Performans optimizasyonları
    target: 'esnext',
    reportCompressedSize: false
  },
  // Cache optimizasyonu
  server: {
    hmr: {
      overlay: false
    }
  },
  preview: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
    exclude: ['@vercel/analytics']
  }
})
