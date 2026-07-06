import React from 'react';
import { EXPERIENCE, SKILLS } from '../../constants';

const ExperiencePage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 pb-24 w-full">
      <h1
        className="animate-fade-rise font-serif text-white text-center m-0"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1.5px' }}
      >
        Where I’ve <em className="not-italic serif-accent">worked.</em>
      </h1>
      <p className="animate-fade-rise-delay text-muted text-center max-w-xl mx-auto mt-6 mb-16">
        Design, engineering, and product — often at the same time.
      </p>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((job, i) => (
          <div
            key={i}
            className="liquid-glass glass-panel rounded-3xl p-7 md:p-9 animate-fade-rise-delay"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted m-0 mb-2">
                  {job.title}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-white m-0">{job.company}</h3>
              </div>
              <span className="font-mono text-xs text-muted shrink-0">
                {job.start} – {job.end}
              </span>
            </div>

            {job.description.map((desc, j) => (
              <p key={j} className="text-muted text-[15px] leading-relaxed m-0 mb-2">
                {desc}
              </p>
            ))}

            <ul className="flex flex-wrap gap-2 mt-5 p-0 list-none">
              {job.tech.map((t, j) => (
                <li
                  key={j}
                  className="liquid-glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills — white panel with dark text */}
      <div className="bg-white rounded-3xl p-7 md:p-9 mt-6 shadow-xl shadow-black/20 animate-fade-rise-delay-2">
        <h3 className="font-serif text-3xl text-navy m-0 mb-5 text-center">Skills</h3>
        {SKILLS.map((cat) => (
          <div key={cat.name} className="flex flex-col sm:flex-row sm:gap-6 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/50 shrink-0 w-28 pt-1">
              {cat.name}
            </span>
            <p className="text-navy/90 text-[15px] m-0">{cat.skills.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
