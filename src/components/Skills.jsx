import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Geliştirme',
      icon: <FaCode className="text-3xl text-primary" />,
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
      category: 'Responsive Tasarım & Kullanıcı Deneyimi (UX)',
      icon: <FaCode className="text-3xl text-primary" />,
      items: [
        { name: 'Responsive Web', level: 90 },
        { name: 'UX', level: 85 },
      ],
    },
    {
      category: 'Versiyon Kontrol',
      icon: <FaTools className="text-3xl text-primary" />,
      items: [
        { name: 'Git', level: 90 },
      ],
    },
    {
      category: 'NoSQL Veritabanları',
      icon: <FaDatabase className="text-3xl text-primary" />,
      items: [
        { name: 'MongoDB', level: 85 },
      ],
    },
    {
      category: 'Teknik Destek',
      icon: <FaTools className="text-3xl text-primary" />,
      items: [
        { name: 'Donanım Kurulumu', level: 80 },
        { name: 'Yazılım Yükleme', level: 80 },
        { name: 'Help Desk', level: 80 },
      ],
    },
    {
      category: 'Ağ Yönetimi',
      icon: <FaServer className="text-3xl text-primary" />,
      items: [
        { name: 'Cloudflare', level: 80 },
        { name: 'DNS Yapılandırması', level: 80 },
        { name: 'Hosting Yönetimi', level: 80 },
      ],
    },
    {
      category: 'İşletim Sistemleri',
      icon: <FaServer className="text-3xl text-primary" />,
      items: [
        { name: 'Windows', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'iOS', level: 75 },
        { name: 'Android', level: 75 },
      ],
    },
    {
      category: 'Ofis Yazılımları',
      icon: <FaTools className="text-3xl text-primary" />,
      items: [
        { name: 'MS Office (Word, Excel, PowerPoint)', level: 90 },
      ],
    },
    {
      category: 'Problem Çözme & Analitik Düşünme',
      icon: <FaCode className="text-3xl text-primary" />,
      items: [
        { name: 'Analitik Düşünme', level: 90 },
        { name: 'Problem Çözme', level: 90 },
      ],
    },
    {
      category: 'Takım Çalışması & İletişim',
      icon: <FaCode className="text-3xl text-primary" />,
      items: [
        { name: 'Takım Çalışması', level: 90 },
        { name: 'İletişim', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Uzmanlık Alanlarım
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Yazılım geliştirme sürecinde kullandığım teknolojiler ve araçlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="skill-card bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 font-medium">{item.name}</span>
                      <span className="text-gray-700">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 