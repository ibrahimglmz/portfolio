import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaCode, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <motion.div 
          className="footer-section about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="footer-logo">
            <FaCode size={24} />
            <h3>İbrahim Gülmez</h3>
          </div>
          <p>Yazılım geliştirme ve web teknolojileri konusunda tutkulu bir yazılım geliştiriciyim.</p>
          <div className="location">
            <FaMapMarkerAlt />
            <span>Türkiye</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-section links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Hızlı Linkler</h3>
          <div className="footer-links">
            <motion.a 
              href="#home" 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Ana Sayfa
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              İletişim
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-section contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>İletişim</h3>
          <div className="footer-links">
            <motion.a 
              href="https://linkedin.com/in/ibrahim-gülmez-8bb9501b1" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="social-link"
            >
              <FaLinkedinIn /> LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/ibrahimglmz" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="social-link"
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a 
              href="mailto:ibrahiimgulmez@gmail.com"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="social-link"
            >
              <FaEnvelope /> ibrahiimgulmez@gmail.com
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>&copy; {currentYear} İbrahim Gülmez &nbsp;<FaHeart className="heart-icon" size={12}/>&nbsp; Tüm hakları saklıdır.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 