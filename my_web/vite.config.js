import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Chunk boyutunu optimize et
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React ve React DOM'u vendor chunk'a ayır
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react'
          }
          // Framer Motion'ı ayrı chunk'a ayır
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-animations'
          }
          // Diğer node_modules paketlerini ayrı chunk'a ayır
          if (id.includes('node_modules/')) {
            return 'vendor-others'
          }
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
  }
})
