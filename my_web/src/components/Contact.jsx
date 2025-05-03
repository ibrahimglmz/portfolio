import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        İletişim
      </motion.h2>
      <div className="contact-cards">
        <motion.div
          className="contact-card glass-effect"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>LinkedIn</h3>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourusername
          </a>
        </motion.div>

        <motion.div
          className="contact-card glass-effect"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Email</h3>
          <a href="mailto:your.email@example.com">
            your.email@example.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 