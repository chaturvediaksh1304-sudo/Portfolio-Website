import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-lightest-navy"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-10">03 — Skills</p>

      <div className="space-y-4">
        {SKILLS.map((category) => (
          <div key={category.name} className="flex flex-col sm:flex-row sm:gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted shrink-0 w-28 mb-1 sm:mb-0">
              {category.name}
            </span>
            <p className="text-slate/90 text-[15px]">{category.skills.join(' · ')}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
