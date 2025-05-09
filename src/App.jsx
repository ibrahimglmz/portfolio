import { useState, lazy, Suspense } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import profileImage from './assets/ibrahim.jpg'

// Lazy loading ile komponentleri yükle
const Experience = lazy(() => import('./components/Experience'))
const About = lazy(() => import('./components/About'))

// Loading komponenti
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
)

function App() {
  const [showContact, setShowContact] = useState(false)
  const projects = [
    {
      name: "Salim Gülmez Gayrimenkul Şirketi",
      description: "Gayrimenkul danışmanlık şirketi için tasarlanmış modern ve profesyonel bir web sitesi.",
      github: "https://salimgulmez.com",
      tech: ["React", "HTML", "CSS", "JavaScript"]
    },
    {
      name: "Zaman Bilimi",
      description: "Şirkete özel geliştirilen zaman yönetimi ve takip sistemi uygulaması.",
      github: "https://zamanbilimi.com/login",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      name: "Quiz App",
      description: "Hapishaneden kaçış temalı, 4 aşamalı interaktif bir quiz oyunu. React ve Framer Motion kullanılarak geliştirildi.",
      github: "https://github.com/ibrahimglmz/quiz-app.git",
      tech: ["React", "Framer Motion", "CSS"]
    },
    {
      name: "Medical Quiz App",
      description: "Tıp öğrencileri için geliştirilmiş, kapsamlı bir quiz uygulaması. Modern web teknolojileri kullanılarak oluşturuldu.",
      github: "https://github.com/ibrahimglmz/medical-quiz-app",
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      name: "Swift Mobil Projeleri",
      description: "iOS platformu için geliştirilmiş çeşitli mobil uygulamalar koleksiyonu. SwiftUI ve UIKit kullanılarak oluşturuldu.",
      github: "https://github.com/ibrahimglmz/swiftProjects",
      tech: ["Swift", "SwiftUI", "UIKit"]
    },
    {
      name: "Makine Öğrenmesi Projeleri",
      description: "Udemy eğitimi kapsamında geliştirilen makine öğrenmesi projeleri ve uygulamaları.",
      github: "https://github.com/ibrahimglmz/Udemy-MachineLearning",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      name: "Personel Yönetim Uygulaması",
      description: "Şirketler için geliştirilmiş, personel bilgilerini yönetmeye yarayan web tabanlı uygulama.",
      github: "https://github.com/ibrahimglmz/personel_yonetim_uygulamasi",
      tech: ["Python", "Django", "SQL"]
    },
    {
      name: "Pomodoro App",
      description: "Zaman yönetimi için geliştirilmiş, özelleştirilebilir Pomodoro tekniği uygulaması.",
      github: "https://github.com/ibrahimglmz/Pomodoro-main",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      name: "Yüz Tanıma Sistemi",
      description: "OpenCV ve derin öğrenme kullanılarak geliştirilmiş yüz tanıma uygulaması.",
      github: "https://github.com/ibrahimglmz/face-recognition",
      tech: ["Python", "OpenCV", "Deep Learning"]
    },
    {
      name: "Video İndirme Uygulaması",
      description: "Çeşitli platformlardan video indirmeyi sağlayan Python tabanlı uygulama.",
      github: "https://github.com/ibrahimglmz/video_download",
      tech: ["Python", "PyQt5"]
    },
    {
      name: "Dosya Şifreleme Uygulaması",
      description: "Dosyaları güvenli bir şekilde şifrelemeye yarayan Python uygulaması.",
      github: "https://github.com/ibrahimglmz/file_password_app_python",
      tech: ["Python", "Cryptography"]
    },
    {
      name: "Göz Takibi ve Uyarı Sistemi",
      description: "Sürücü yorgunluğunu tespit eden ve uyaran yapay zeka tabanlı uygulama.",
      github: "https://github.com/ibrahimglmz/Eye_Tracking_and_Alert_Application",
      tech: ["Python", "OpenCV", "Machine Learning"]
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
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="app-container">
      <Navbar showContact={showContact} setShowContact={setShowContact} />
      <AnimatePresence mode="wait">
        {!showContact ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="portfolio-container"
          >
            <div className="animated-shape shape-1"></div>
            <div className="animated-shape shape-2"></div>
            <div className="animated-shape shape-3"></div>
            
            <header className="hero-section">
              <div className="hero-content">
                <motion.div 
                  className="hero-text"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1>İbrahim Gülmez</h1>
                </motion.div>
                <motion.div 
                  className="hero-image"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={profileImage}
                    alt="İbrahim Gülmez"
                    loading="lazy"
                    width="300"
                    height="300"
                  />
                </motion.div>
              </div>
            </header>

            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
              <Experience />
            </Suspense>

            <motion.section 
              className="projects-section"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeInUp}>
                Projelerim
              </motion.h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.name} 
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span key={`${project.name}-${tech}`} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {project.name === "Salim Gülmez Gayrimenkul Şirketi" || project.name === "Zaman Bilimi" 
                        ? "Web Sitesine Git" 
                        : "GitHub'da İncele"}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-page"
            id="contact"
          >
            <div className="contact-container">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                İletişim
              </motion.h2>
              <motion.div 
                className="contact-cards"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2,
                  staggerChildren: 0.1
                }}
              >
                <motion.div 
                  className="contact-card glass-effect"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3>LinkedIn</h3>
                  <p>Profesyonel profilimi inceleyin</p>
                  <motion.a 
                    href="https://www.linkedin.com/in/ibrahim-gülmez-8bb9501b1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    LinkedIn Profilim
                  </motion.a>
                </motion.div>
                
                <motion.div 
                  className="contact-card glass-effect"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3>E-posta</h3>
                  <p>Benimle iletişime geçin</p>
                  <motion.a 
                    href="mailto:ibrahiimgulmez@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ibrahiimgulmez@gmail.com
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      {!showContact && <Footer />}
      <SpeedInsights />
      <Analytics />
    </div>
  )
}

export default App
