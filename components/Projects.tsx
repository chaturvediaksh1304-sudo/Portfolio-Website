import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-t border-lightest-navy">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-10">01 — Work</p>

      <div className="space-y-10">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group border border-lightest-navy bg-light-navy/60 rounded-lg p-6 hover:border-green/40 transition-colors duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-sans font-semibold tracking-tight text-[22px] text-slate group-hover:text-green transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 mt-1 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-muted hover:text-green transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className="text-muted hover:text-green transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate/85 text-[15px] leading-relaxed mb-5">{project.description}</p>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted">
              {project.tech.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
