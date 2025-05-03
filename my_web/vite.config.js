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
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
        }
      }
    },
    // Build optimizasyonları
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Asset optimizasyonları
    assetsInlineLimit: 4096,
    // Sourcemap'i production'da devre dışı bırak
    sourcemap: false
  },
  // Cache optimizasyonu
  server: {
    hmr: {
      overlay: false
    }
  }
})
