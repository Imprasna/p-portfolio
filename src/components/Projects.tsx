import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { useState } from 'react';
import { DetailsModal } from './DetailsModal';

interface ProjectsProps {
  limit?: number;
  hideHeader?: boolean;
}

export const Projects = ({ limit, hideHeader = false }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects = limit ? portfolioData.projects.slice(0, limit) : portfolioData.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="work" className={`px-6 md:px-12 ${hideHeader ? 'pb-20 md:pb-40' : 'py-20 md:py-40'} bg-brand-black`}>
      <div className="max-w-7xl mx-auto">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Selected Work</h2>
              <p className="text-brand-gray text-lg md:text-xl font-medium">A collection of projects that define my creative journey.</p>
            </motion.div>
            
            {limit && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  to="/work" 
                  className="text-sm font-semibold uppercase tracking-widest hover:text-brand-gray transition-colors flex items-center gap-3"
                >
                  View all work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </motion.div>
            )}
          </div>
        )}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View project details for ${project.title}`}
              whileHover="hover"
              className="group block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40 rounded-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-brand-white/5">
                <motion.img 
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  variants={{
                    hover: { opacity: 1 }
                  }}
                  className="absolute inset-0 bg-brand-black/40 backdrop-blur-[1px] opacity-0 transition-all duration-500 flex items-center justify-center"
                >
                  <motion.div 
                    variants={{
                      hover: { scale: 1, rotate: 0 },
                    }}
                    initial={{ scale: 0, rotate: -45 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-14 h-14 bg-brand-white text-brand-black rounded-full flex items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline mb-1">
                  <motion.h3 
                    variants={{
                      hover: { x: 5 }
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl font-bold tracking-tight group-hover:text-brand-gray transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <span className="text-brand-gray/40 font-mono text-[10px]">{project.year}</span>
                </div>
                <motion.p 
                  variants={{
                    hover: { x: 5 }
                  }}
                  transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="text-brand-gray/60 text-xs font-medium uppercase tracking-widest"
                >
                  {project.category}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DetailsModal 
        item={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
