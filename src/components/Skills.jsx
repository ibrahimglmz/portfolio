import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Geliştirme',
      icon: <FaCode className="text-3xl text-primary" />,
      items: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      category: 'Backend Geliştirme',
      icon: <FaServer className="text-3xl text-primary" />,
      items: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Express.js', level: 85 },
        { name: 'REST API', level: 90 },
      ],
    },
    {
      category: 'Veritabanı',
      icon: <FaDatabase className="text-3xl text-primary" />,
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
      ],
    },
    {
      category: 'DevOps & Araçlar',
      icon: <FaTools className="text-3xl text-primary" />,
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Uzmanlık Alanlarım
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Yazılım geliştirme sürecinde kullandığım teknolojiler ve araçlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                {skill.icon}
                <h3 className="text-xl font-semibold text-text-primary">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary font-medium">{item.name}</span>
                      <span className="text-text-secondary">{item.level}%</span>
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