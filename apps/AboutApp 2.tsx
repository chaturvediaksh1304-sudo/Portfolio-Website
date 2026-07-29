import React from 'react';

const PRINCIPLES = [
  ['Design is the work', 'The interface is the product. If it’s confusing to use, the engineering underneath doesn’t matter.'],
  ['Ship to learn', 'Iteration beats theory. Put something real in front of a real person — that’s where direction comes from.'],
  ['Span the stack', 'Design, code, and story aren’t separate jobs. The best work happens when one person holds all three.'],
  ['AI as a material', 'Models are a new substrate. The interesting work is the workflow built on top, not the model below.'],
];

export default function AboutApp() {
  return (
    <div className="p-7 md:p-9 text-white">
      <h2 className="text-3xl font-semibold m-0">Aksh Chaturvedi</h2>
      <p className="text-white/50 mt-1">CS grad · Adobe Student Ambassador · Co-founder, MANK Studios</p>

      <p className="text-white/80 leading-relaxed mt-6 max-w-2xl">
        I build across design, engineering, and marketing simultaneously — not a pure engineer or a
        pure designer, but fluent in both. I care about software where the hard part isn’t writing the
        code, but deciding what should exist and proving it works.
      </p>
      <p className="text-white/60 leading-relaxed mt-3 max-w-2xl">
        Currently open to new grad roles in software engineering, AI/ML, marketing, and design at
        US-based companies. Building HeadcountIQ and Grab while I look — because I can’t not build.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {PRINCIPLES.map(([title, body], i) => (
          <div key={i} className="glass-surface rounded-2xl p-5">
            <span className="font-mono text-[12px] text-white/40">— {String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-semibold mt-2 mb-1">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
