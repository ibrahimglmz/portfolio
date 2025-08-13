import { useState, lazy, Suspense, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import './index.css'
import { motion } from 'framer-motion'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"
import profileImage from './assets/ibrahim.jpg'
import { FaLinkedinIn, FaEnvelope, FaGithub, FaCode, FaServer, FaDatabase, FaMobile, FaTools } from 'react-icons/fa'

// Lazy loading ile komponentleri yükle
const Experience = lazy(() => import('./components/Experience'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Projects = lazy(() => import('./components/Projects'))

// Loading komponenti
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-dark/80 backdrop-blur-sm z-50">
    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    <span className="mt-4 text-white font-fira text-lg">Yükleniyor...</span>
  </div>
)

function App() {
  const [showContact, setShowContact] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  // Ekran boyutunu ve oryantasyonunu algılama
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
      setIsLandscape(window.innerWidth > window.innerHeight)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    window.addEventListener('orientationchange', checkDevice)
    
    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('orientationchange', checkDevice)
    }
  }, [])

  // İlk açılış karşılama animasyonu (oturum başına bir kere)
  useEffect(() => {
    const hasShownIntro = sessionStorage.getItem('introShown') === '1'
    if (!hasShownIntro) {
      setShowIntro(true)
      const timer = setTimeout(() => {
        setShowIntro(false)
        sessionStorage.setItem('introShown', '1')
      }, 1600)
      return () => clearTimeout(timer)
    }
  }, [])

  const skills = [
    {
      name: "Frontend Geliştirme",
      icon: <FaCode className="text-4xl" />,
      description: "React, Next.js, Tailwind CSS ve TypeScript ile modern web uygulamaları geliştirme",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    // Backend Geliştirme nesnesi kaldırıldı
    {
      name: "Veritabanı Yönetimi",
      icon: <FaDatabase className="text-4xl" />,
      description: "SQL ve NoSQL veritabanları ile veri modelleme ve optimizasyon",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"]
    },
    {
      name: "Mobil Geliştirme",
      icon: <FaMobile className="text-4xl" />,
      description: "React Native ve Swift ile cross-platform mobil uygulamalar",
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "iOS/Android"]
    },
    {
      name: "Teknik Destek",
      icon: <FaTools className="text-4xl" />,
      description: "Donanım kurulumu, yazılım yükleme ve yardım masası (Help Desk) desteği",
      technologies: ["Donanım Kurulumu", "Yazılım Yükleme", "Help Desk"]
    }
  ]

  const projects = [
    {
      name: "E-Ticaret Platformu",
      description: "Modern bir e-ticaret platformu. Mikroservis mimarisi, ödeme entegrasyonu ve gerçek zamanlı stok takibi.",
      github: "https://github.com/ibrahimglmz/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"]
    },
    {
      name: "Yapay Zeka Destekli Analiz Aracı",
      description: "Makine öğrenmesi kullanarak veri analizi yapan ve raporlar oluşturan web uygulaması.",
      github: "https://github.com/ibrahimglmz/ai-analysis-tool",
      demo: "https://ai-analysis-demo.com",
      tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"]
    },
    {
      name: "Mobil Fitness Uygulaması",
      description: "Kişiselleştirilmiş fitness programları ve ilerleme takibi sunan cross-platform mobil uygulama.",
      github: "https://github.com/ibrahimglmz/fitness-app",
      demo: "https://fitness-app-demo.com",
      tech: ["React Native", "Firebase", "Redux", "Node.js", "MongoDB"]
    },
    {
      name: "DevOps Otomasyon Aracı",
      description: "CI/CD pipeline'ları ve container orchestration için otomatik araçlar.",
      github: "https://github.com/ibrahimglmz/devops-automation",
      demo: "https://devops-tool-demo.com",
      tech: ["Python", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    }
  ]

  // Performans için memoize edilmiş animasyon varyantları
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  }
  
  // Dokunma olayları için kullanılan değişkenler
  const touchProps = {
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  }

  return (
    <div className={`min-h-screen w-full overflow-x-hidden ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isLandscape ? 'landscape' : 'portrait'}`}>
      <Splash />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-x-hidden"
      >
        <header id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center hero-section overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 max-w-7xl mx-auto w-full">
            <motion.div 
              className="flex-1 text-center md:text-left px-2 sm:px-0"
              initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.6 : 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                İbrahim Gülmez
              </motion.h1>
              <motion.p 
                className="text-lg md:text-2xl text-primary/80 font-fira mb-4 break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Junior Yazılım Geliştirici
              </motion.p>
              <motion.p 
                className="text-base md:text-lg text-text-primary/90 max-w-2xl mx-auto md:mx-0 break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Ölçeklenebilir ve yenilikçi çözümler geliştiren, 
                modern teknolojileri kullanan bir bilgisayar programcısı.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center relative overflow-visible"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative hero-image max-w-full">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                  {/* Zarif arka plan tasarımı */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu [will-change:transform]"
                    style={{ 
                      width: '26rem', 
                      height: '26rem', 
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(147,51,234,0.06) 50%, rgba(236,72,153,0.06) 100%)',
                      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                    }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { 
                      borderRadius: [
                        '30% 70% 70% 30% / 30% 30% 70% 70%',
                        '70% 30% 30% 70% / 70% 70% 30% 30%',
                        '30% 70% 70% 30% / 30% 30% 70% 70%'
                      ]
                    }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu [will-change:transform]"
                    style={{ 
                      width: '20rem', 
                      height: '20rem',
                      background: 'linear-gradient(-45deg, rgba(56,189,248,0.05) 0%, rgba(168,85,247,0.05) 50%, rgba(236,72,153,0.05) 100%)',
                      borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%'
                    }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { 
                      borderRadius: [
                        '70% 30% 30% 70% / 70% 70% 30% 30%',
                        '30% 70% 70% 30% / 30% 30% 70% 70%',
                        '70% 30% 30% 70% / 70% 70% 30% 30%'
                      ]
                    }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  />
                  {/* Subtle accent element */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu [will-change:transform]"
                    style={{ 
                      width: '14rem', 
                      height: '14rem',
                      background: 'linear-gradient(90deg, rgba(34,197,94,0.03) 0%, rgba(59,130,246,0.03) 50%, rgba(168,85,247,0.03) 100%)',
                      borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%'
                    }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { 
                      borderRadius: [
                        '50% 50% 50% 50% / 60% 40% 60% 40%',
                        '40% 60% 40% 60% / 50% 50% 50% 50%',
                        '50% 50% 50% 50% / 60% 40% 60% 40%'
                      ]
                    }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                  />
                </div>
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.img 
                    src={profileImage}
                    alt="İbrahim Gülmez"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="300"
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-2 border-white/60 shadow-2xl max-w-full"
                    style={{
                      borderRadius: '25% 75% 75% 25% / 25% 25% 75% 75%'
                    }}
                    initial={{ rotate: -2 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </header>

        <section id="skills" className="section">
          <motion.h2 
            className="section-title text-center heading-accent"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Uzmanlık Alanlarım
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card p-8"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl text-primary mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <p className="text-text-secondary mb-6">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </motion.div>
      <Footer />
      <SpeedInsights />
    </div>
  )
}

export default App
