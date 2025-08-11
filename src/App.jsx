import { useState, lazy, Suspense, useEffect } from 'react'
import './index.css'
import { motion } from 'framer-motion'
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
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  
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
    <div className={`min-h-screen w-full ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isLandscape ? 'landscape' : 'portrait'}`}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      >
        <header id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center hero-section">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 max-w-7xl mx-auto">
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.6 : 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                İbrahim Gülmez
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-primary/80 font-fira mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Junior Yazılım Geliştirici
              </motion.p>
              <motion.p 
                className="text-lg text-text-primary/90 max-w-2xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Ölçeklenebilir ve yenilikçi çözümler geliştiren, 
                modern teknolojileri kullanan bir bilgisayar programcısı.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex-1 flex justify-center relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative hero-image">
                <motion.div 
                  className="absolute -inset-16 rounded-[120px] bg-gradient-to-br from-blue-500/10 to-blue-600/10"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -inset-16 rounded-[120px] border border-blue-500/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.img 
                    src={profileImage}
                    alt="İbrahim Gülmez"
                    loading="lazy"
                    width="300"
                    height="300"
                    className="rounded-3xl w-64 h-64 md:w-80 md:h-80 object-cover border border-white/60 shadow-xl"
                    initial={{ rotate: -2 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-50/0 via-blue-50/10 to-blue-50/0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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
