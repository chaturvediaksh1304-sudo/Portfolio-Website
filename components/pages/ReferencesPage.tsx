import React from 'react';
import { REFERENCES } from '../../constants';

const ReferencesPage: React.FC = () => {
  const hasPlaceholders = REFERENCES.some((r) => r.placeholder);

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 pb-24 w-full">
      <h1
        className="animate-fade-rise font-serif text-white text-center m-0"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1.5px' }}
      >
        In their <em className="not-italic serif-accent">words.</em>
      </h1>
      <p className="animate-fade-rise-delay text-muted text-center max-w-xl mx-auto mt-6 mb-16">
        People I’ve worked with and for.
      </p>

      {hasPlaceholders && (
        <div className="liquid-glass rounded-2xl px-5 py-3 mb-8 text-center animate-fade-rise-delay">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted m-0">
            Placeholder content — real references coming soon
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REFERENCES.map((ref, i) => (
          <div
            key={i}
            className={`liquid-glass glass-panel rounded-3xl p-7 md:p-8 flex flex-col animate-fade-rise-delay ${
              ref.placeholder ? 'opacity-70' : ''
            }`}
          >
            <p className="font-serif text-xl md:text-2xl text-white/90 leading-snug m-0 flex-1">
              “{ref.quote}”
            </p>
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-white text-[15px] font-medium m-0">{ref.name}</p>
              <p className="text-muted text-sm m-0">{ref.title}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted mt-2 m-0">
                {ref.relationship}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReferencesPage;
