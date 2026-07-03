import React from 'react';
import type { Route } from '../App';

const RESUME_URL =
  'https://drive.google.com/file/d/1KChJwZ8GeKXWDCXNnAlrnhnHAJsGhYYY/view?usp=sharing';

const NAV_ITEMS: { label: string; route: Route }[] = [
  { label: 'Experience', route: 'experience' },
  { label: 'Projects', route: 'projects' },
  { label: 'Education', route: 'education' },
  { label: 'References', route: 'references' },
  { label: 'About', route: 'about' },
];

interface GlassNavProps {
  route: Route;
}

const GlassNav: React.FC<GlassNavProps> = ({ route }) => {
  const go = (r: Route) => {
    window.location.hash = r === 'home' ? '/' : `/${r}`;
  };

  return (
    <nav className="relative z-20 flex items-center justify-between max-w-7xl w-full mx-auto px-6 md:px-8 py-6 gap-4">
      {/* Brand — routes home */}
      <button
        onClick={() => go('home')}
        className="font-serif text-3xl tracking-tight text-white bg-transparent border-none cursor-pointer p-0"
        aria-label="Home"
      >
        Aksh<sup className="text-xs">®</sup>
      </button>

      {/* Page buttons */}
      <div className="hidden md:flex items-center gap-9">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.route}
            onClick={() => go(item.route)}
            className={`nav-link ${route === item.route ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile: compact glass row of page buttons */}
      <div className="flex md:hidden items-center gap-3 overflow-x-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.route}
            onClick={() => go(item.route)}
            className={`nav-link whitespace-nowrap text-xs ${route === item.route ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="liquid-glass glass-hover hidden sm:inline-block rounded-full px-6 py-2.5 text-sm text-white no-underline shrink-0"
      >
        Resume
      </a>
    </nav>
  );
};

export default GlassNav;
