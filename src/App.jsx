import { useState, lazy, Suspense, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import './index.css'
import { motion } from 'framer-motion'
// Varsayılan bileşenler
import Splash from './components/Splash' 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"
import profileImage from './assets/ibrahim.jpg'
import { FaLinkedinIn, FaEnvelope, FaGithub, FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa' 
// KeyMetrics bileşeni App.jsx içinde kullanılmadığı için burada import edilmemiştir.

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
      description: "React, Next.js, Tailwind CSS ve TypeScript ile modern, duyarlı web uygulamaları geliştirme.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"] 
    },
    {
      name: "Veritabanı Yönetimi",
      icon: <FaDatabase className="text-4xl" />,
      description: "İlişkisel (SQL) ve İlişkisel Olmayan (NoSQL) veritabanları ile veri modelleme ve optimizasyon.",
      technologies: ["PostgreSQL", "MongoDB", "Firebase"] 
    },
    {
      name: "Teknik Destek & Kurulum",
      icon: <FaLaptopCode className="text-4xl" />, 
      description: "Donanım kurulumu, ağ yapılandırması ve yazılımsal sorun giderme (Help Desk) yetkinliği.",
      technologies: ["Donanım", "Ağ/LAN", "Problem Çözme (Help Desk)"] 
    }
  ]

  const projects = [
    {
      name: "E-Ticaret Platformu",
      description: "Modern bir e-ticaret platformu. Mikroservis mimarisi, ödeme entegrasyonu ve gerçek zamanlı stok takibi.",
      github: "https://github.com/ibrahimglmz/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
      tech: ["React", "Node.js", "MongoDB", "Docker", "Express.js"] 
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

  // Yeni Hero Image Stil ve Animasyon Güncellemeleri 
  const profileImageVariants = {
    initial: { 
      rotate: -2,
      borderRadius: '25% 75% 75% 25% / 25% 25% 75% 75%'
    },
    animate: {
      rotate: 0,
      borderRadius: [
        '25% 75% 75% 25% / 25% 25% 75% 75%',
        '75% 25% 25% 75% / 75% 75% 25% 25%',
        '25% 75% 75% 25% / 25% 25% 75% 75%'
      ],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }
  
  // Arka plan animasyonları sadeleştirildi ve rengi güncellendi
  const bgShapeMotionProps = (duration, delay) => ({
    animate: prefersReducedMotion ? { opacity: 1 } : {
      opacity: [0.5, 0.7, 0.5],
      rotate: [0, 360],
      transition: { duration, repeat: Infinity, ease: 'linear', delay: delay || 0 }
    }
  })
  
  return (
    // Arka plan varsayılan olarak beyaz/açık tonlarda varsayılmıştır
    <div className={`min-h-screen w-full overflow-x-hidden ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isLandscape ? 'landscape' : 'portrait'} bg-white text-gray-900`}>
      {showIntro && <Splash />}
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
                className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto md:mx-0 break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Ölçeklenebilir ve yenilikçi çözümler geliştiren, 
                modern teknolojileri kullanan bir bilgisayar programcısı.
              </motion.p>
              {/* Sosyal medya ikonları eklendi */}
              <motion.div 
                className="flex justify-center md:justify-start gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="https://linkedin.com/in/ibrahimglmz" target="_blank" rel="noopener noreferrer">
                  <motion.div {...touchProps} className="text-2xl text-primary hover:text-secondary transition-colors"><FaLinkedinIn /></motion.div>
                </a>
                <a href="https://github.com/ibrahimglmz" target="_blank" rel="noopener noreferrer">
                  <motion.div {...touchProps} className="text-2xl text-primary hover:text-secondary transition-colors"><FaGithub /></motion.div>
                </a>
                <a href="mailto:ibrahimglmz@example.com">
                  <motion.div {...touchProps} className="text-2xl text-primary hover:text-secondary transition-colors"><FaEnvelope /></motion.div>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center relative overflow-visible"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative hero-image max-w-full">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                  {/* Yeni, daha sade ve şık arka plan tasarımı */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu [will-change:transform] bg-primary/10 rounded-full"
                    style={{ width: '28rem', height: '28rem', filter: 'blur(80px)' }}
                    {...bgShapeMotionProps(10, 0)}
                  />
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu [will-change:transform] bg-secondary/10 rounded-full"
                    style={{ width: '20rem', height: '20rem', filter: 'blur(60px)' }}
                    {...bgShapeMotionProps(8, 2)}
                  />
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu [will-change:transform] bg-accent/10 rounded-full"
                    style={{ width: '12rem', height: '12rem', filter: 'blur(40px)' }}
                    {...bgShapeMotionProps(6, 4)}
                  />
                </div>
                <motion.div
                  className="relative z-10 p-2 bg-white/20 backdrop-blur-sm rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border border-gray-300 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={profileImage}
                    alt="İbrahim Gülmez"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="300"
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover max-w-full"
                    variants={profileImageVariants}
                    initial="initial"
                    animate={prefersReducedMotion ? 'initial' : 'animate'}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* GÜNCELLENMİŞ VE MOBİL UYUMLU SKILLS SECTION */}
        <section id="skills" className="section py-16 sm:py-24 bg-gray-50"> 
          <motion.h2 
            className="section-title text-center heading-accent mb-12 text-gray-900"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Uzmanlık Alanlarım
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto" 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                // Light Mode Uyumu: Beyaz kart, belirgin gölge, gri border
                className="skill-card p-6 sm:p-8 bg-white rounded-xl shadow-xl border border-gray-200 hover:border-primary transition-all duration-300 transform"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl text-primary mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{skill.name}</h3>
                <p className="text-gray-600 mb-6 text-sm">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    // Light Mode Uyumu: Açık gri/beyaz çip, koyu metin
                    <span key={tech} className="chip text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium border border-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          {/* KeyMetrics bileşenini Projects'ten önce eklemek için buraya manuel olarak eklenmesi gerekir. */}
          {/* Ancak, bu koddaki App bileşeni KeyMetrics'i import etmediği için hata vermemek adına bu örnekte es geçilmiştir. */}
          <Projects projects={projects} /> 
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