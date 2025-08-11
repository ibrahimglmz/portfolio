import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Splash = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem('introShown') === '1'
    if (!hasShown) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
        sessionStorage.setItem('introShown', '1')
      }, 2200) // toplam gösterim süresi
      return () => clearTimeout(timer)
    }
  }, [])

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Arka plan partikül efekti */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%)`,
              backgroundSize: '200% 200%'
            }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />

          {/* Logo ve İsim */}
          <motion.div
            className="relative text-center max-w-full overflow-hidden px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-white text-4xl sm:text-6xl font-extrabold tracking-tight break-words max-w-full">
              İG
            </div>
            <div className="mt-3 text-gray-300 text-base sm:text-lg break-words max-w-full">
              İbrahim Gülmez
            </div>
            <motion.div
              className="mt-1 text-gray-400 text-xs sm:text-sm break-words max-w-full"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Junior Yazılım Geliştirici
            </motion.div>
          </motion.div>

          {/* Alt fade çizgisi */}
          <motion.div
            className="absolute bottom-20 w-40 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '10rem' }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Splash
