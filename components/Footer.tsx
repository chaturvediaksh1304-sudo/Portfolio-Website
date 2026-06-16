import React from 'react';

const Footer: React.FC = () => {
  const toTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-lightest-navy py-6 font-mono text-[12px] text-muted">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span>© 2026 Aksh Chaturvedi</span>
        <span className="text-center">Central Michigan University · CS ’26</span>
        <a href="#" onClick={toTop} className="hover:text-green transition-colors">
          ↑ back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
