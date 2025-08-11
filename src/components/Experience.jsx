import { motion } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

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
      color: "#6c5ce7",
      icon: "💻"
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
      color: "#e17055",
      icon: "👨‍💻"
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
      color: "#a29bfe",
      icon: "🤖"
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
      color: "#0984e3",
      icon: "🚀"
    },
    {
      title: "Üretken Akademi",
      company: "Online Stajyer",
      date: "Ocak 2025 - Devam Ediyor",
      details: [
        "Üretken Akademi bünyesinde online staj programına katılım",
        "Yazılım geliştirme ve proje yönetimi konularında deneyim"
      ],
      color: "#00b894",
      icon: "📚"
    }
  ].sort((a, b) => {
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
      className="section bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="section-title heading-accent">Deneyim</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 to-secondary/20"></div>
          
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
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
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
            >
              <div className={`flex items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <motion.div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl z-10 cursor-pointer border border-white/60"
                  style={{ backgroundColor: experience.color }}
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                    boxShadow: hoveredIndex === index 
                      ? `0 0 30px ${experience.color}80` 
                      : `0 0 0 3px ${experience.color}40`
                  }}
                >
                  {experience.icon}
                </motion.div>
                
                <motion.div 
                  className={`flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transform transition-all duration-300 ${
                    selectedIndex === index ? 'scale-105' : ''
                  }`}
                  animate={{
                    boxShadow: hoveredIndex === index 
                      ? '0 10px 30px rgba(0, 0, 0, 0.2)' 
                      : '0 5px 15px rgba(0, 0, 0, 0.1)',
                    y: hoveredIndex === index ? -5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3
                    className="text-xl font-bold mb-2"
                    animate={{
                      color: hoveredIndex === index ? experience.color : '#2d3436'
                    }}
                  >
                    {experience.title}
                  </motion.h3>
                  <h4 className="text-lg text-text-secondary mb-1">{experience.company}</h4>
                  <p className="text-sm text-text-secondary/80 mb-4">{experience.date}</p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: selectedIndex === index ? 'auto' : 0,
                      opacity: selectedIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2">
                      {experience.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex}
                          className="text-text-secondary flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: selectedIndex === index ? 1 : 0,
                            x: selectedIndex === index ? 0 : -10
                          }}
                          transition={{ 
                            delay: detailIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 