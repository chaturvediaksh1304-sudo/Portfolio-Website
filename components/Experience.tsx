import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-16 text-center"
      >
        <span className="text-green font-mono text-xl md:text-2xl font-medium mb-2">03.</span>
        <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap mb-4">Experience</h2>
        <div className="h-[1px] bg-lightest-navy w-24"></div>
      </motion.div>

      <div className="relative border-l border-lightest-navy ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-navy border-2 border-green shadow-[0_0_8px_rgba(255,0,0,0.6)]"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-lightest-slate">
                    {job.title} <span className="text-green">@ {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-slate mt-1 sm:mt-0">{job.start} - {job.end}</span>
            </div>
            
            <div className="bg-light-navy/80 border border-lightest-navy/50 p-6 rounded-lg hover:bg-light-navy hover:border-green/30 transition-all duration-300 shadow-lg">
                <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-slate relative pl-6 text-sm md:text-base">
                            <span className="absolute left-0 text-green top-1">▹</span>
                            {desc}
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-green bg-green/10 px-2 py-1 rounded border border-green/20">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;