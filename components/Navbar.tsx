import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RESUME_URL =
  'https://drive.google.com/file/d/1KChJwZ8GeKXWDCXNnAlrnhnHAJsGhYYY/view?usp=sharing';

const NAV_LINKS = [
  { label: 'work', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'skills', href: '#skills' },
  { label: 'now', href: '#now' },
  { label: 'contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const variants = {
    visible: { y: 0, transition: { duration: 0.3 } },
    hidden: { y: -110, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={variants}
      animate={visible ? 'visible' : 'hidden'}
      className={`fixed top-0 z-40 w-full px-6 md:px-8 py-3.5 transition-all duration-300 ${
        scrolled ? 'bg-navy/80 backdrop-blur-md border-b border-lightest-navy' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {/* Left — name + availability dot */}
        <a href="#" className="group flex items-center gap-2.5 shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green"></span>
          </span>
          <span className="text-sm text-slate group-hover:text-green transition-colors">
            Aksh Chaturvedi
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-muted">
            — software · design · story
          </span>
        </a>

        {/* Right — section links */}
        <div className="flex items-center gap-4 md:gap-5 font-mono text-[12px] text-muted">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden sm:inline hover:text-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors"
          >
            resume ↗
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
