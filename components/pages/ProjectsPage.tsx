import React from 'react';
import { PROJECTS } from '../../constants';
import { Github, ExternalLink } from 'lucide-react';

/**
 * Preview image for a project. Deployed projects get a real 1200x600 screenshot
 * of the live site (thum.io, keyless); GitHub-only projects use the repo's
 * OpenGraph card. The card <img> falls back to the OG card if the live
 * screenshot fails, so every preview renders at the same size.
 */
function ogCard(github?: string): string | null {
  const match = github?.match(/github\.com\/([^/]+\/[^/]+)/);
  return match ? `https://opengraph.githubassets.com/1/${match[1]}` : null;
}

function previewFor(project: { external?: string; github?: string }): {
  src: string;
  fallback: string | null;
} | null {
  const og = ogCard(project.github);
  if (project.external) {
    // Microlink renders full JS and waits, so dynamic apps screenshot correctly.
    const u = encodeURIComponent(project.external);
    return {
      src: `https://api.microlink.io/?url=${u}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=630&waitUntil=networkidle2`,
      fallback: og,
    };
  }
  return og ? { src: og, fallback: null } : null;
}

const ProjectsPage: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-24 w-full">
      <h1
        className="animate-fade-rise font-serif text-white text-center m-0"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-1.5px' }}
      >
        Things I’ve <em className="not-italic serif-accent">built.</em>
      </h1>
      <p className="animate-fade-rise-delay text-muted text-center max-w-xl mx-auto mt-6 mb-16">
        {PROJECTS.length} projects across full-stack, AI/ML, and design — each one shipped, many of them live.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => {
          const preview = previewFor(project);
          return (
            <div
              key={i}
              className="liquid-glass glass-panel rounded-3xl overflow-hidden flex flex-col animate-fade-rise-delay"
            >
              {/* Preview */}
              {preview && (
                <a
                  href={project.external || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-white/10"
                >
                  <img
                    src={preview.src}
                    alt={`${project.title} preview`}
                    className="w-full aspect-[2/1] object-cover bg-white/5"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (preview.fallback && img.src !== preview.fallback) {
                        img.src = preview.fallback;
                      }
                    }}
                  />
                </a>
              )}

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-serif text-2xl text-white m-0">{project.title}</h3>
                  <div className="flex items-center gap-2 shrink-0 mt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="liquid-glass glass-hover rounded-full p-2 text-muted hover:text-white flex"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="liquid-glass glass-hover rounded-full p-2 text-muted hover:text-white flex"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed flex-1 m-0">{project.description}</p>

                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] text-white/80 hover:text-white no-underline mt-4 inline-block"
                  >
                    ↗ {project.external.replace(/^https?:\/\//, '')}
                  </a>
                )}

                <ul className="flex flex-wrap gap-2 mt-5 p-0 list-none">
                  {project.tech.map((t, idx) => (
                    <li
                      key={idx}
                      className="bg-white/90 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-navy/60"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;
