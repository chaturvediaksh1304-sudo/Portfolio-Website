import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-10">
        02 — Experience
      </p>

      <div>
        {EXPERIENCE.map((job, index) => {
          const startYear = job.start.match(/\d{4}/)?.[0] ?? job.start;
          const year = job.end.toLowerCase() === 'present' ? `${startYear} →` : job.end;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group grid grid-cols-1 gap-x-6 gap-y-4 border-t border-lightest-navy py-10 md:grid-cols-12 md:items-start"
            >
              {/* index */}
              <div className="font-mono text-[12px] text-muted md:col-span-1">
                — {String(index + 1).padStart(2, '0')}
              </div>

              {/* company + role */}
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-2">
                  {job.title}
                </p>
                <h3 className="font-sans font-semibold tracking-tight text-slate leading-[0.95] text-3xl md:text-[2.4rem] group-hover:text-green transition-colors">
                  {job.company}
                </h3>
              </div>

              {/* description */}
              <p className="font-mono text-[13px] leading-relaxed text-muted md:col-span-4">
                {job.description.join(' ')}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 md:col-span-3">
                {(job.tags ?? job.tech.slice(0, 3)).map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] uppercase tracking-wider text-muted border border-lightest-navy rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* year */}
              <div className="font-mono text-[13px] text-muted md:col-span-1 md:text-right">
                {year}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
