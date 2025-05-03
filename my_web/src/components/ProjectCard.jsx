import { motion } from 'framer-motion';
import { memo } from 'react';

const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          width="100%"
          height="200"
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={`${project.id}-${tech}`} className="tech-tag">{tech}</span>
          ))}
        </div>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub'da İncele
          <span className="arrow">→</span>
        </motion.a>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard; 