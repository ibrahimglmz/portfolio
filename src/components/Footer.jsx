import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur border-t border-gray-100 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2 tracking-tight">İbrahim Gülmez</h3>
            <p className="text-text-secondary">Junior Yazılım Geliştirici</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/ibrahim-gülmez-8bb9501b1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-white/60"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/ibrahimglmz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-white/60"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="mailto:ibrahiimgulmez@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-white/60"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
            <p className="text-text-secondary text-sm">
              © {currentYear} İbrahim Gülmez. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 