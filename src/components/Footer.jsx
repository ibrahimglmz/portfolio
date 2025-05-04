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
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>İbrahim Gülmez</h3>
          <p>Yazılım Geliştirici</p>
        </motion.div>
        
        <motion.div 
          className="footer-section"
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
            >
              <FaLinkedinIn /> LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/ibrahimglmz" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a 
              href="mailto:ibrahiimgulmez@gmail.com"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaEnvelope /> E-posta
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
        <p>&copy; {currentYear} İbrahim Gülmez. Tüm hakları saklıdır.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 