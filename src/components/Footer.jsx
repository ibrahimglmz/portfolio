import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

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
      <div className="footer-content">
        <div className="footer-section">
          <h3>İbrahim Gülmez</h3>
          <p>Yazılım Geliştirici & Veri Analisti</p>
        </div>
        
        <div className="footer-section">
          <h3>İletişim</h3>
          <div className="footer-links">
            <a href="https://linkedin.com/in/ibrahim-gülmez-8bb9501b1" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="https://github.com/ibrahimglmz" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="mailto:contact@example.com">
              <FaEnvelope /> E-posta
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} İbrahim Gülmez. Tüm hakları saklıdır.</p>
      </div>
    </motion.footer>
  );
};

export default Footer; 