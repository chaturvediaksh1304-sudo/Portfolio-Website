import React from 'react';
import { ClientsSection, type Testimonial, type Stat } from '../components/ui/testimonial-card';
import { EDUCATION, ACHIEVEMENTS, CERTIFICATIONS, COURSES } from '../constants';

const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1c1c24&color=ffffff&bold=true`;

const stats: Stat[] = [
  { value: EDUCATION.gpa?.replace('GPA ', '') ?? '—', label: 'GPA' },
  { value: 'Magna', label: 'Cum Laude' },
  { value: '2026', label: 'Class of' },
];

// College first, then the honors — as stacking cards.
const cards: Testimonial[] = [
  {
    name: EDUCATION.school,
    title: `${EDUCATION.degree}${EDUCATION.minor ? ` · ${EDUCATION.minor}` : ''}`,
    quote: [EDUCATION.honors, EDUCATION.gpa, EDUCATION.location].filter(Boolean).join(' · '),
    avatarSrc: avatar('CMU'),
    rating: 5,
  },
  ...ACHIEVEMENTS.map((a) => ({
    name: a.title,
    title: [a.issuer, a.date].filter(Boolean).join(' · '),
    quote: a.detail,
    avatarSrc: avatar(a.issuer ?? a.title),
    rating: 5,
  })),
];

export default function EducationApp() {
  return (
    <div className="p-6 md:p-8 font-brother">
      <ClientsSection
        tagLabel="Central Michigan University"
        title="How I learned."
        description={`${EDUCATION.degree}, minor in Multimedia Design — Magna Cum Laude, ${EDUCATION.gpa}. ${COURSES.length} notable courses, ${CERTIFICATIONS.length} certifications.`}
        stats={stats}
        testimonials={cards}
      />

      {/* Courses + certifications below the stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-white">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">Courses</p>
          <div className="space-y-2">
            {COURSES.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <p className="text-[14px] font-medium">{c.name}</p>
                {c.detail && <p className="text-white/50 text-xs mt-0.5">{c.detail}</p>}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
            Certifications ({CERTIFICATIONS.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert, i) => (
              <span key={i} className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-[12px]">
                {cert.name}
                <span className="text-white/40"> · {cert.issuer}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
