import React from 'react';
import { motion } from 'framer-motion';

const Now: React.FC = () => {
  return (
    <motion.section
      id="now"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-lightest-navy"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-5">— Now</p>
      <p className="text-slate text-xl md:text-2xl leading-snug tracking-tight max-w-2xl">
        Open to new grad roles in software engineering, AI/ML, marketing, and design at US-based
        companies. Building <span className="serif-accent">HeadcountIQ</span> and{' '}
        <span className="serif-accent">Grab</span> while I look —{' '}
        <span className="text-muted">because I can’t not build.</span>
      </p>
    </motion.section>
  );
};

export default Now;
