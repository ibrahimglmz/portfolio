import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaRocket, FaBrain, FaUsers, FaLightbulb } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Geliştirme',
      icon: <FaCode className="text-3xl text-blue-500" />,
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      category: 'Responsive Tasarım & UX',
      icon: <FaLightbulb className="text-3xl text-purple-500" />,
      gradient: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Responsive Web', level: 90 },
        { name: 'UX', level: 85 },
      ],
    },
    {
      category: 'Versiyon Kontrol',
      icon: <FaTools className="text-3xl text-green-500" />,
      gradient: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Git', level: 90 },
      ],
    },
    {
      category: 'NoSQL Veritabanları',
      icon: <FaDatabase className="text-3xl text-orange-500" />,
      gradient: 'from-orange-500 to-red-500',
      items: [
        { name: 'MongoDB', level: 85 },
      ],
    },
    {
      category: 'Teknik Destek',
      icon: <FaTools className="text-3xl text-indigo-500" />,
      gradient: 'from-indigo-500 to-blue-500',
      items: [
        { name: 'Donanım Kurulumu', level: 80 },
        { name: 'Yazılım Yükleme', level: 80 },
        { name: 'Help Desk', level: 80 },
      ],
    },
    {
      category: 'Ağ Yönetimi',
      icon: <FaServer className="text-3xl text-teal-500" />,
      gradient: 'from-teal-500 to-cyan-500',
      items: [
        { name: 'Cloudflare', level: 80 },
        { name: 'DNS Yapılandırması', level: 80 },
        { name: 'Hosting Yönetimi', level: 80 },
      ],
    },
    {
      category: 'İşletim Sistemleri',
      icon: <FaServer className="text-3xl text-violet-500" />,
      gradient: 'from-violet-500 to-purple-500',
      items: [
        { name: 'Windows', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'iOS', level: 75 },
        { name: 'Android', level: 75 },
      ],
    },
    {
      category: 'Ofis Yazılımları',
      icon: <FaTools className="text-3xl text-rose-500" />,
      gradient: 'from-rose-500 to-pink-500',
      items: [
        { name: 'MS Office (Word, Excel, PowerPoint)', level: 90 },
      ],
    },
    {
      category: 'Problem Çözme & Analitik Düşünme',
      icon: <FaBrain className="text-3xl text-emerald-500" />,
      gradient: 'from-emerald-500 to-green-500',
      items: [
        { name: 'Analitik Düşünme', level: 90 },
        { name: 'Problem Çözme', level: 90 },
      ],
    },
    {
      category: 'Takım Çalışması & İletişim',
      icon: <FaUsers className="text-3xl text-sky-500" />,
      gradient: 'from-sky-500 to-blue-500',
      items: [
        { name: 'Takım Çalışması', level: 90 },
        { name: 'İletişim', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-3xl"
          style={{
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 blur-3xl"
          style={{
            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%'
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
            borderRadius: [
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Uzmanlık Alanlarım
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Yazılım geliştirme sürecinde kullandığım teknolojiler ve araçlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="skill-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Kart arka plan dekorasyonu */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${skill.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`} style={{ borderRadius: '16px' }}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {skill.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.1) }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium text-sm">{item.name}</span>
                        <span className="text-gray-700 font-semibold">{item.level}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-200 overflow-hidden" style={{ borderRadius: '8px' }}>
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.gradient} relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: (index * 0.1) + (itemIndex * 0.1) + 0.3 }}
                          style={{ borderRadius: '8px' }}
                        >
                          {/* Progress bar glow effect */}
                          <div className="absolute inset-0 bg-white opacity-30 animate-pulse" style={{ borderRadius: '8px' }} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-lg" style={{ borderRadius: '20px' }}>
            <FaRocket className="text-lg animate-bounce" />
            <span>Sürekli Gelişim ve Öğrenme</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 