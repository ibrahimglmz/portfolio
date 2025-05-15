import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaHome, FaEnvelope, FaCode } from 'react-icons/fa';

const Navbar = ({ showContact, setShowContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum dokunma kaydırma mesafesi (px)
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      // Sağa kaydırma - menüyü kapat
      if (distance < 0 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    // Reset değerleri
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Body'nin scroll özelliğini kilitlemek/açmak için
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId, shouldSetContact = null) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Navbar yüksekliği
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    if (shouldSetContact !== null) {
      setShowContact(shouldSetContact);
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Aktif bölümü belirleme
      const sections = ['home', 'contact'];
      let currentSection = sections[0];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { 
      title: 'Ana Sayfa',
      href: 'home',
      icon: <FaHome size={18} />,
      onClick: () => scrollToSection('home', false)
    }
  ];

  const rightNavItems = [
    { 
      title: 'İletişim',
      href: 'contact',
      icon: <FaEnvelope size={18} />,
      onClick: () => scrollToSection('contact', true)
    }
  ];

  const socialLinks = [
    {
      title: 'GitHub',
      href: 'https://github.com/ibrahimglmz',
      icon: <FaGithub size={20} />
    },
    {
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/ibrahim-gülmez-8bb9501b1',
      icon: <FaLinkedinIn size={20} />
    }
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a onClick={() => scrollToSection('home', false)} style={{ cursor: 'pointer' }}>
            <span className="logo-icon">
              <FaCode size={24} />
            </span>
            <div className="logo-text">
              <span className="logo-name">İbrahim</span>
              <span className="logo-surname">Gülmez</span>
            </div>
          </a>
        </motion.div>

        {/* Ana Menü ve Sağ Menü */}
        <div className="nav-links desktop-menu">
          {mainNavItems.map((item, index) => (
            <motion.a
              key={index}
              onClick={item.onClick}
              className={activeSection === item.href ? 'active' : ''}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: 'pointer' }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.title}</span>
            </motion.a>
          ))}
          
          {rightNavItems.map((item, index) => (
            <motion.a
              key={`right-${index}`}
              onClick={item.onClick}
              className={activeSection === item.href ? 'active' : ''}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: 'pointer' }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.title}</span>
            </motion.a>
          ))}
        </div>

        {/* Sosyal Medya Linkleri */}
        <div className="social-links desktop-menu">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="social-link"
              title={link.title}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobil Menü Butonu */}
        <motion.button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>

        {/* Mobil Menü */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {[...mainNavItems, ...rightNavItems].map((item, index) => (
                <motion.a
                  key={`mobile-${index}`}
                  onClick={item.onClick}
                  variants={itemVariants}
                  className={`mobile-nav-item ${activeSection === item.href ? 'active' : ''}`}
                  style={{ cursor: 'pointer' }}
                  aria-label={item.title}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.title}</span>
                </motion.a>
              ))}
              <div className="mobile-social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={`mobile-social-${index}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="mobile-social-link"
                    aria-label={link.title}
                  >
                    {link.icon}
                    <span className="social-text">{link.title}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 