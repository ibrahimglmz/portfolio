import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLaptopCode, FaUsers, FaRobot, FaRocket, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const experiences = [
    // Veri yapısı aynı kalır
    {
      title: "Python Developer Intern",
      company: "New Mind Bilgi Yönetim Sistemleri",
      date: "Eylül 2023 - Eylül 2024",
      details: [
        "Python programlama dili ile yazılım geliştirme",
        "Bilgi yönetim sistemleri üzerinde çalışma",
        "Stajyer olarak profesyonel iş deneyimi"
      ],
      color: "#6c5ce7", 
      icon: <FaLaptopCode className="text-white text-xl" />
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
      icon: <FaUsers className="text-white text-xl" />
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
      icon: <FaRobot className="text-white text-xl" />
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
      icon: <FaRocket className="text-white text-xl" />
    },
    {
      title: "Üretken Akademi",
      company: "Online Stajyer",
      date: "Ocak 2025 - Haziran 2025",
      details: [
        "Üretken Akademi bünyesinde online staj programına katılım",
        "Yazılım geliştirme ve proje yönetimi konularında deneyim"
      ],
      color: "#00b894",
      icon: <FaGraduationCap className="text-white text-xl" />
    }
  ].sort((a, b) => {
    // Tarihe göre sıralama (En yeniden eskiye)
    const getDate = (dateStr) => {
      const [start, end] = dateStr.split(' - ');
      const isOngoing = end === 'Devam Ediyor';
      
      const datePart = isOngoing ? start : end; 
      const [month, year] = datePart.split(' ');
      
      const months = {
        'Ocak': 1, 'Şubat': 2, 'Mart': 3, 'Nisan': 4, 'Mayıs': 5, 'Haziran': 6,
        'Temmuz': 7, 'Ağustos': 8, 'Eylül': 9, 'Ekim': 10, 'Kasım': 11, 'Aralık': 12
      };

      if (isOngoing) {
        return 9999999999999 - new Date(parseInt(year), months[month] - 1).getTime();
      }
      return new Date(parseInt(year), months[month] - 1).getTime();
    };

    return getDate(b.date) - getDate(a.date); 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.section 
      id="experience"
      className="section py-16 sm:py-24 bg-white text-gray-900" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="section-title heading-accent">Deneyimlerim</h2>
          <p className="text-lg text-gray-600">Çalışma ve gönüllü tecrübelerimin listesi.</p>
        </motion.div>

        {/* Basitleştirilmiş Tek Sütunlu Liste */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              
              {/* İkon ve Dikey Çizgi (Sadeleştirilmiş) */}
              <div className="flex flex-col items-center pt-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md border-4 border-white flex-shrink-0" 
                  style={{ backgroundColor: experience.color }}
                >
                  {experience.icon}
                </div>
                {/* Son kart hariç dikey çizgi */}
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-200 flex-grow mt-2"></div>
                )}
              </div>

              {/* Kart İçeriği */}
              <motion.div 
                className="flex-1 min-w-0" // İçerik esnek ve minimum 0 genişliğe sahip
              >
                <motion.div 
                  className={`bg-white p-6 rounded-xl shadow-xl border border-gray-200 cursor-pointer transform transition-all duration-300 w-full ${
                    selectedIndex === index ? 'border-primary scale-[1.01]' : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                  whileHover={{ y: -2, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 break-words">
                    {experience.title}
                  </h3>
                  <h4 className="text-md font-medium text-primary/90 mb-2">{experience.company}</h4>
                  <p className="text-sm text-gray-500 mb-3">{experience.date}</p>
                  
                  {/* Detayların Açılıp Kapanması */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: selectedIndex === index ? 'auto' : 0,
                      opacity: selectedIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 pt-2 border-t border-gray-200 mt-3">
                      {experience.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex}
                          className="text-gray-700 text-sm flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: selectedIndex === index ? 1 : 0,
                            x: selectedIndex === index ? 0 : -10
                          }}
                          transition={{ 
                            delay: selectedIndex === index ? detailIndex * 0.1 : 0,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <span className="text-primary mt-1 text-xs">•</span>
                          <span className='flex-1'>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;