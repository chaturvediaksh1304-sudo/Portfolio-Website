import React, { useState } from 'react';
import {
  EDUCATION, VOLUNTEER, COURSES, ACHIEVEMENTS, CERTIFICATIONS,
} from '../../constants';

const CERTS_PREVIEW = 3;

// White panel matching the Skills box: 90% white, dark navy text.
const CARD = 'bg-white/90 shadow-xl shadow-black/20';

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted text-center mt-16 mb-8">
    {children}
  </p>
);

const EducationPage: React.FC = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? CERTIFICATIONS : CERTIFICATIONS.slice(0, CERTS_PREVIEW);
  const hasMoreCerts = CERTIFICATIONS.length > CERTS_PREVIEW;

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 pt-10 pb-24 w-full">
      <h1
        className="animate-fade-rise font-serif text-white text-center m-0"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1.5px' }}
      >
        How I <em className="not-italic serif-accent">learned.</em>
      </h1>
      <p className="animate-fade-rise-delay text-muted text-center max-w-xl mx-auto mt-6 mb-4">
        College, leadership, coursework, and the recognition along the way.
      </p>

      {/* College */}
      <SectionLabel>College</SectionLabel>
      <div className="liquid-glass glass-panel rounded-3xl p-7 md:p-10 text-center animate-fade-rise-delay">
        <h2 className="font-serif text-3xl md:text-5xl text-white m-0">{EDUCATION.school}</h2>
        <p className="text-white/90 text-lg mt-3 m-0">{EDUCATION.degree}</p>
        {EDUCATION.minor && <p className="text-muted text-[15px] mt-1 m-0">{EDUCATION.minor}</p>}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {EDUCATION.honors && (
            <span className="liquid-glass rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white">
              {EDUCATION.honors}
            </span>
          )}
          {EDUCATION.gpa && (
            <span className="liquid-glass rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white">
              {EDUCATION.gpa}
            </span>
          )}
          <span className="liquid-glass rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
            {EDUCATION.period}
          </span>
          {EDUCATION.location && (
            <span className="liquid-glass rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
              {EDUCATION.location}
            </span>
          )}
        </div>
      </div>

      {/* Volunteer & Leadership */}
      <SectionLabel>Volunteer &amp; Leadership</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VOLUNTEER.map((item, i) => (
          <div
            key={i}
            className={`${CARD} rounded-3xl p-7 md:p-8 animate-fade-rise-delay ${
              item.placeholder ? 'opacity-70' : ''
            }`}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/50 m-0 mb-2">
              {item.role}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-navy m-0 mb-1">
              {item.organization}
            </h3>
            <span className="font-mono text-xs text-navy/50">{item.period}</span>
            <p className="text-navy/70 text-[15px] leading-relaxed mt-4 m-0">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Courses */}
      <SectionLabel>Courses</SectionLabel>
      <div className="flex flex-col gap-4">
        {COURSES.map((course, i) => (
          <div
            key={i}
            className={`liquid-glass glass-panel rounded-2xl px-6 py-5 animate-fade-rise-delay ${
              course.placeholder ? 'opacity-60' : ''
            }`}
          >
            <p className="text-white text-[15px] font-medium m-0">{course.name}</p>
            {course.detail && <p className="text-muted text-sm m-0 mt-1">{course.detail}</p>}
          </div>
        ))}
      </div>

      {/* Achievements */}
      <SectionLabel>Achievements &amp; Honors</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={i}
            className={`${CARD} rounded-3xl p-7 animate-fade-rise-delay ${
              a.placeholder ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-[12px] text-navy/50">
                — {String(i + 1).padStart(2, '0')}
              </span>
              {a.date && <span className="font-mono text-[11px] text-navy/50">{a.date}</span>}
            </div>
            <h3 className="font-serif text-xl text-navy mt-3 mb-1 m-0 leading-tight">{a.title}</h3>
            {a.issuer && (
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-navy/50 m-0 mb-3">
                {a.issuer}
              </p>
            )}
            <p className="text-navy/70 text-sm leading-relaxed m-0">{a.detail}</p>
          </div>
        ))}
      </div>

      {/* Certifications — shows 3, expands for the rest */}
      <SectionLabel>Certifications</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCerts.map((cert, i) => (
          <div
            key={i}
            className={`liquid-glass glass-panel rounded-2xl px-6 py-5 animate-fade-rise-delay ${
              cert.placeholder ? 'opacity-60' : ''
            }`}
          >
            <p className="text-white text-[15px] font-medium m-0">{cert.name}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted m-0 mt-1.5">
              {cert.issuer}
              {cert.date && <span className="text-muted/70"> · {cert.date}</span>}
            </p>
          </div>
        ))}
      </div>

      {hasMoreCerts && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAllCerts((v) => !v)}
            className="liquid-glass glass-hover rounded-full px-7 py-3 font-mono text-[12px] uppercase tracking-wider text-white"
          >
            {showAllCerts
              ? 'Show less'
              : `Show all ${CERTIFICATIONS.length} ↓`}
          </button>
        </div>
      )}
    </section>
  );
};

export default EducationPage;
