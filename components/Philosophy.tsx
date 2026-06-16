import React from 'react';
import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    title: 'Design is the work',
    body: 'The interface is the product. If it’s confusing to use, the engineering underneath it doesn’t matter.',
  },
  {
    title: 'Ship to learn',
    body: 'Iteration beats theory. Put something real in front of a real person — that’s where direction comes from.',
  },
  {
    title: 'Span the stack',
    body: 'Design, code, and story aren’t separate jobs. The best work happens when one person holds all three.',
  },
  {
    title: 'AI as a material',
    body: 'Models are a new substrate. The interesting work is the workflow built on top, not the model below.',
  },
];

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="ml-auto max-w-3xl text-right font-sans font-medium tracking-tight leading-[1.05] text-slate mb-20"
        style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
      >
        I build at the seam between{' '}
        <span className="serif-accent">design and engineering</span> —{' '}
        <span className="text-muted">
          products where the hard part isn’t writing the code, but deciding what should exist and
          proving it works.
        </span>
      </motion.p>

      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-8">
        04 — Philosophy
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-lightest-navy pt-5"
          >
            <span className="font-mono text-[12px] text-green">
              — {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-sans font-semibold text-slate mt-4 mb-2">{p.title}</h3>
            <p className="text-muted text-[14px] leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
