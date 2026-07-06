import React from 'react';
import { REFERENCES } from '../../constants';

const ReferencesPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 pb-24 w-full">
      <h1
        className="animate-fade-rise font-serif text-white text-center m-0"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1.5px' }}
      >
        People who’ll <em className="not-italic serif-accent">vouch.</em>
      </h1>
      <p className="animate-fade-rise-delay text-muted text-center max-w-xl mx-auto mt-6 mb-16">
        Professional references from the people I’ve worked under.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REFERENCES.map((ref, i) => (
          <div
            key={i}
            className="liquid-glass glass-panel rounded-3xl p-7 md:p-8 flex flex-col animate-fade-rise-delay"
          >
            <span className="font-mono text-[12px] text-muted">
              — {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white mt-3 mb-1 m-0">{ref.name}</h3>
            <p className="text-white/90 text-[15px] m-0">
              {ref.occupation}
              {ref.organization && <span className="text-muted"> · {ref.organization}</span>}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted mt-4 m-0">
              {ref.relationship}
            </p>
            {ref.location && (
              <p className="font-mono text-[11px] text-muted mt-1 m-0">{ref.location}</p>
            )}
            {ref.quote && (
              <p className="font-serif text-lg text-white/90 leading-snug mt-5 m-0">“{ref.quote}”</p>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-muted text-sm mt-10">
        Full contact details available on request —{' '}
        <a
          href="mailto:chaturvedi.aksh1304@gmail.com"
          className="text-white hover:text-muted transition-colors"
        >
          just reach out
        </a>
        .
      </p>
    </section>
  );
};

export default ReferencesPage;
