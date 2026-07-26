import React from 'react';
import { FileText } from 'lucide-react';
import { EXPERIENCE, EDUCATION, SKILLS } from '../constants';

const RESUME_URL =
  'https://drive.google.com/file/d/1KChJwZ8GeKXWDCXNnAlrnhnHAJsGhYYY/view?usp=sharing';

export default function ResumeApp() {
  return (
    <div className="p-7 md:p-9 text-white">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold m-0">Résumé</h2>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="glass-surface rounded-full px-5 py-2.5 text-sm flex items-center gap-2 no-underline text-white shrink-0"
        >
          <FileText size={16} /> Open PDF
        </a>
      </div>

      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">Experience</p>
      <div className="space-y-4 mb-8">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="glass-surface rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold">{job.company}<span className="text-white/40 font-normal"> · {job.title}</span></h3>
              <span className="font-mono text-xs text-white/40">{job.start} – {job.end}</span>
            </div>
            {job.description.map((d, j) => (
              <p key={j} className="text-white/60 text-sm leading-relaxed mt-2">{d}</p>
            ))}
          </div>
        ))}
      </div>

      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">Education</p>
      <div className="glass-surface rounded-2xl p-5 mb-8">
        <h3 className="font-semibold">{EDUCATION.school}</h3>
        <p className="text-white/60 text-sm">{EDUCATION.degree}{EDUCATION.minor ? ` · ${EDUCATION.minor}` : ''}</p>
        <p className="text-white/40 font-mono text-xs mt-1">
          {[EDUCATION.honors, EDUCATION.gpa, EDUCATION.period].filter(Boolean).join(' · ')}
        </p>
      </div>

      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">Skills</p>
      <div className="space-y-2">
        {SKILLS.map((cat) => (
          <div key={cat.name} className="flex flex-col sm:flex-row sm:gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 w-32 shrink-0 pt-0.5">{cat.name}</span>
            <p className="text-white/70 text-sm">{cat.skills.join(' · ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
