import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const items = [
    <h1
      key="name"
      className="font-sans font-semibold tracking-tight text-slate leading-[0.95] mb-8"
      style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}
    >
      Aksh Chaturvedi
    </h1>,
    <p
      key="tagline"
      className="text-slate text-2xl md:text-3xl leading-snug mb-6 max-w-2xl tracking-tight"
    >
      I build things that live at the{' '}
      <span className="serif-accent">intersection</span> of design, code, and story —{' '}
      <span className="text-muted">
        software, internal tools, and the systems that make them worth shipping.
      </span>
    </p>,
    <p key="sub" className="font-mono text-xs text-muted mb-10">
      CS grad · Adobe Student Ambassador · Co-founder, MANK Studios
    </p>,
    <div key="social" className="flex items-center gap-6">
      {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-muted hover:text-green transition-colors"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>,
  ];

  return (
    <section className="min-h-[88vh] flex flex-col justify-center pt-24">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
        >
          {item}
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;
