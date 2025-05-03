import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projelerim
      </motion.h2>
      <div className="projects-grid">
        {memoizedProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 