import { motion } from 'framer-motion';
import { memo, useState } from 'react';

const ProjectCard = memo(({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Çerçeve Efektleri */}
      <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none"></div>
      <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl pointer-events-none transform scale-[1.02]"></div>
      <div className="absolute inset-0 border-2 border-primary/5 rounded-2xl pointer-events-none transform scale-[1.04]"></div>
      
      {/* Hover Durumunda Çerçeve Animasyonu */}
      <motion.div 
        className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Kategori Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Teknoloji Etiketleri */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={`${project.id}-${tech}`} 
                className="px-3 py-1.5 bg-white/95 text-text-secondary text-xs font-medium rounded-full shadow-md backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <div 
                  key={index}
                  className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary"
                >
                  {tech.charAt(0)}
                </div>
              ))}
            </div>
            <span className="text-sm text-text-secondary">
              {project.technologies.length} teknoloji
            </span>
          </div>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-300 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub'da İncele
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard; 