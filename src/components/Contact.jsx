import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section bg-gradient-to-b from-background to-background-dark overflow-x-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title heading-accent">İletişime Geçin</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Projeleriniz veya iş birliği fırsatları için benimle iletişime geçebilirsiniz.
            Size en kısa sürede iletişime geçeceğim.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* İletişim Bilgileri */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div className="break-words">
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">Email</h3>
                  <a href="mailto:ibrahiimgulmez@gmail.com" className="text-text-secondary hover:text-primary transition-colors break-words">
                    ibrahiimgulmez@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div className="break-words">
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">Konum</h3>
                  <p className="text-text-secondary">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-text-primary">Sosyal Medya</h3>
              <div className="flex gap-4 flex-wrap">
                <a href="https://linkedin.com/in/ibrahim-gülmez-8bb9501b1" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/ibrahimglmz" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 