import React from 'react';
import { SOCIAL_LINKS } from '../../constants';

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

const AboutPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 pb-24 w-full">
      <h1
        className="animate-fade-rise font-serif text-white text-center m-0"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1.5px' }}
      >
        The person <em className="not-italic serif-accent">behind the work.</em>
      </h1>

      {/* Bio — photo (8:11, subject centered) side-by-side with intro */}
      <div className="liquid-glass glass-panel rounded-3xl p-7 md:p-10 mt-16 animate-fade-rise-delay grid grid-cols-1 md:grid-cols-[minmax(0,300px)_1fr] gap-8 md:gap-10 items-center">
        <div
          className="liquid-glass rounded-2xl overflow-hidden w-full max-w-[300px] mx-auto md:mx-0 bg-white/5 relative flex items-center justify-center"
          style={{ aspectRatio: '8 / 11' }}
        >
          {/* Fallback shown until the photo file exists at public/assets/aksh-grad.jpg */}
          <span className="absolute font-serif text-6xl text-white/25 select-none">AC</span>
          <img
            src="/assets/aksh-grad.jpg"
            alt="Aksh Chaturvedi at his Central Michigan University graduation"
            className="relative w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        <div>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed m-0">
            I’m Aksh Chaturvedi — a CS grad from Central Michigan University, Adobe Student
            Ambassador, and co-founder of MANK Studios. I build across design, engineering, and
            marketing simultaneously: not a pure engineer or a pure designer, but fluent in both.
          </p>
          <p className="text-muted text-[15px] leading-relaxed mt-4 m-0">
            Currently: open to new grad roles in software engineering, AI/ML, marketing, and design
            at US-based companies. Building HeadcountIQ and Grab while I look — because I can’t not
            build.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted text-center mt-16 mb-8">
        How I work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PRINCIPLES.map((p, i) => (
          <div key={i} className="bg-white/90 shadow-xl shadow-black/20 rounded-3xl p-7 animate-fade-rise-delay">
            <span className="font-mono text-[12px] text-navy/50">
              — {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-2xl text-navy mt-3 mb-2 m-0">{p.title}</h3>
            <p className="text-navy/70 text-sm leading-relaxed m-0">{p.body}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="liquid-glass glass-panel rounded-3xl p-7 md:p-10 mt-6 text-center animate-fade-rise-delay-2">
        <h2 className="font-serif text-3xl md:text-4xl text-white m-0">
          Have a problem worth <em className="not-italic serif-accent">solving?</em>
        </h2>
        <a
          href="mailto:chaturvedi.aksh1304@gmail.com"
          className="inline-block text-white text-lg md:text-2xl mt-4 no-underline hover:text-muted transition-colors"
        >
          chaturvedi.aksh1304@gmail.com
        </a>
        <div className="flex items-center justify-center gap-4 mt-7">
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
      </div>
    </section>
  );
};

export default AboutPage;
