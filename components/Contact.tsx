import React from 'react';
import { motion } from 'framer-motion';

const RESUME_URL =
  'https://drive.google.com/file/d/1KChJwZ8GeKXWDCXNnAlrnhnHAJsGhYYY/view?usp=sharing';

const LINKS = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/aksh-chaturvedi/' },
  { label: 'github', href: 'https://github.com/chaturvediaksh1304-sudo' },
  { label: 'resume / pdf', href: RESUME_URL },
  { label: 'grab → live', href: 'https://grab-shoppers-insider.vercel.app' },
  { label: 'xskill → live', href: 'https://x-skill-demo.vercel.app' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-10">
          05 — Contact
        </p>

        <h2
          className="font-sans font-semibold tracking-tight leading-[0.98] mb-12"
          style={{ fontSize: 'clamp(40px, 8vw, 88px)' }}
        >
          <span className="text-slate">Have a problem worth </span>
          <span className="serif-accent">solving?</span>{' '}
          <span className="text-muted">I’m probably interested.</span>
        </h2>

        <a
          href="mailto:chaturvedi.aksh1304@gmail.com"
          className="inline-block font-sans tracking-tight text-slate hover:text-green transition-colors mb-14"
          style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}
        >
          chaturvedi.aksh1304@gmail.com
        </a>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px] text-muted">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green transition-colors"
            >
              ↗ {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
