import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-16 text-center"
      >
        <span className="text-green font-mono text-xl md:text-2xl font-medium mb-2">04.</span>
        <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap mb-4">Projects</h2>
        <div className="h-[1px] bg-lightest-navy w-24"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-light-navy border border-lightest-navy rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all duration-300"
            onClick={() => window.open(project.external || project.github, '_blank')}
          >
             {/* Image Section */}
             <div className="relative w-full h-64 overflow-hidden cursor-pointer border-b border-lightest-navy">
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
             </div>

             {/* Content Section */}
             <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                     <h3 className="text-lightest-slate text-xl font-bold group-hover:text-green transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors z-20" onClick={(e) => e.stopPropagation()}>
                                <Github size={20} />
                            </a>
                        )}
                        {project.external && (
                            <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors z-20" onClick={(e) => e.stopPropagation()}>
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
                
                <p className="text-slate text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                <ul className="flex flex-wrap text-slate/80 font-mono text-xs gap-x-4 gap-y-2">
                    {project.tech.map((t, idx) => <li key={idx} className="text-green/80">{t}</li>)}
                </ul>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;