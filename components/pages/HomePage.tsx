import React from 'react';
import { SOCIAL_LINKS } from '../../constants';

const HomePage: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-28 pb-40 md:pt-32">
      <h1
        className="animate-fade-rise font-serif font-normal text-white m-0 max-w-7xl"
        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.95, letterSpacing: '-2.46px' }}
      >
        Where <em className="not-italic serif-accent">design</em> meets{' '}
        <em className="not-italic serif-accent">code and story.</em>
      </h1>

      <p
        className="animate-fade-rise-delay text-muted max-w-2xl mt-8 mb-0"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.65 }}
      >
        I’m Aksh Chaturvedi — CS grad, Adobe Student Ambassador, and co-founder of MANK Studios.
        I build software, internal tools, and AI-native products where the hard part isn’t writing
        code, but deciding what should exist.
      </p>

      <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-5 mt-12">
        <button
          onClick={() => { window.location.hash = '/projects'; }}
          className="liquid-glass glass-hover rounded-full px-14 py-5 text-base text-white"
        >
          View My Work
        </button>
        <button
          onClick={() => { window.location.hash = '/about'; }}
          className="liquid-glass glass-hover rounded-full px-14 py-5 text-base text-muted"
        >
          About Me
        </button>
      </div>

      <div className="animate-fade-rise-delay-2 flex items-center gap-6 mt-14">
        {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="liquid-glass glass-hover rounded-full p-3 text-muted hover:text-white flex"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
