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
      }, 2500) // toplam gösterim süresi
      return () => clearTimeout(timer)
    }
  }, [])

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animasyonlu arka plan partikülleri */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 60%)`,
              backgroundSize: '200% 200%'
            }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%'
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
                borderRadius: [
                  '50% 50% 50% 50% / 60% 40% 60% 40%',
                  '40% 60% 40% 60% / 50% 50% 50% 50%',
                  '50% 50% 50% 50% / 60% 40% 60% 40%'
                ]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Ana logo ve isim container */}
          <motion.div
            className="relative text-center max-w-full overflow-hidden px-4 z-10"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Logo container with glow effect */}
            <motion.div
              className="relative mb-6"
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              <div className="text-white text-5xl sm:text-7xl font-extrabold tracking-tight break-words max-w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                İG
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 text-5xl sm:text-7xl font-extrabold tracking-tight break-words max-w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-sm opacity-50">
                İG
              </div>
            </motion.div>

            {/* İsim */}
            <motion.div
              className="mt-4 text-gray-200 text-lg sm:text-xl break-words max-w-full font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              İbrahim Gülmez
            </motion.div>

            {/* Rol */}
            <motion.div
              className="mt-2 text-gray-400 text-sm sm:text-base break-words max-w-full font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Junior Yazılım Geliştirici
            </motion.div>

            {/* Loading dots */}
            <motion.div
              className="flex justify-center items-center mt-6 space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400"
                  style={{ borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    borderRadius: [
                      '50% 50% 50% 50% / 60% 40% 60% 40%',
                      '40% 60% 40% 60% / 50% 50% 50% 50%',
                      '50% 50% 50% 50% / 60% 40% 60% 40%'
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Alt gradient çizgisi */}
          <motion.div
            className="absolute bottom-20 w-48 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{ borderRadius: '2px' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '12rem', opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.6 }}
          />

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-400/50"
            style={{ borderRadius: '16px 0 0 0' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-purple-400/50"
            style={{ borderRadius: '0 0 16px 0' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Splash
