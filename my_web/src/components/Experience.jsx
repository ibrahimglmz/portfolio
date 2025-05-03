import { motion } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      title: "Python Developer İntern",
      company: "New Mind Bilgi Yönetim Sistemleri",
      date: "Eylül 2023 - Eylül 2024",
      details: [
        "Python programlama dili ile yazılım geliştirme",
        "Bilgi yönetim sistemleri üzerinde çalışma",
        "Stajyer olarak profesyonel iş deneyimi"
      ],
      color: "#6c5ce7"
    },
    {
      title: "GDSC Kulüp Başkan Yardımcısı",
      company: "İstanbul Kent Üniversitesi Google Developer Kulübü",
      date: "Kasım 2023 - Haziran 2024",
      details: [
        "Google Developer öğrenci kulübünün yönetiminde aktif rol",
        "Teknoloji odaklı etkinliklerin organizasyonu",
        "Öğrenci topluluğu liderliği ve koordinasyon"
      ],
      color: "#e17055"
    },
    {
      title: "T3 AI Volunteer",
      company: "T3 AI",
      date: "Ağustos 2024 - Eylül 2024",
      details: [
        "Yapay zeka projeleri üzerinde gönüllü çalışma",
        "T3 AI ekibi ile işbirliği",
        "AI teknolojileri konusunda deneyim kazanma"
      ],
      color: "#a29bfe"
    },
    {
      title: "Freelance Yazılım Geliştirici",
      company: "Bağımsız Çalışma",
      date: "Kasım 2024 - Devam Ediyor",
      details: [
        "Web siteleri ve programlar geliştirme",
        "Müşteri odaklı özel yazılım çözümleri",
        "Modern teknolojiler ile full-stack geliştirme"
      ],
      color: "#0984e3"
    },
    {
      title: "Üretken Akademi",
      company: "Online Stajyer",
      date: "Ocak 2025 - Devam Ediyor",
      details: [
        "Üretken Akademi bünyesinde online staj programına katılım",
        "Yazılım geliştirme ve proje yönetimi konularında deneyim"
      ],
      color: "#00b894"
    }
  ].sort((a, b) => {
    // Tarihleri parçalara ayır
    const getDate = (dateStr) => {
      const [start] = dateStr.split(' - ');
      const [month, year] = start.split(' ');
      const months = {
        'Ocak': 1, 'Şubat': 2, 'Mart': 3, 'Nisan': 4, 'Mayıs': 5, 'Haziran': 6,
        'Temmuz': 7, 'Ağustos': 8, 'Eylül': 9, 'Ekim': 10, 'Kasım': 11, 'Aralık': 12
      };
      return new Date(parseInt(year), months[month] - 1);
    };

    return getDate(a.date) - getDate(b.date);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="section-title-container"
        variants={titleVariants}
      >
        <h2>Deneyim</h2>
        <div className="section-title-line"></div>
      </motion.div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div 
              className="timeline-dot"
              style={{ backgroundColor: experience.color }}
              animate={{
                scale: hoveredIndex === index ? 1.2 : 1,
                boxShadow: hoveredIndex === index 
                  ? `0 0 20px ${experience.color}80` 
                  : `0 0 0 3px ${experience.color}40`
              }}
            />
            <motion.div 
              className="timeline-content"
              animate={{
                boxShadow: hoveredIndex === index 
                  ? '0 10px 30px rgba(0, 0, 0, 0.2)' 
                  : '0 5px 15px rgba(0, 0, 0, 0.1)',
                y: hoveredIndex === index ? -5 : 0
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                animate={{
                  color: hoveredIndex === index ? experience.color : '#2d3436'
                }}
              >
                {experience.title}
              </motion.h3>
              <h4>{experience.company}</h4>
              <p className="timeline-date">{experience.date}</p>
              <ul>
                {experience.details.map((detail, detailIndex) => (
                  <motion.li 
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      x: hoveredIndex === index ? 0 : -10
                    }}
                    transition={{ 
                      delay: detailIndex * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience; 