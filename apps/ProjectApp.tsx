import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { previewFor } from '../lib/preview';
import type { ProjectItem } from '../types';

export default function ProjectApp({ project }: { project?: ProjectItem }) {
  if (!project) return <div className="p-8 text-white/60">Project not found.</div>;
  const preview = previewFor(project);
  return (
    <div className="text-white">
      {/* Live site embedded when available; else the screenshot/repo card. */}
      {project.external ? (
        <iframe
          src={project.external}
          title={`${project.title} live site`}
          className="w-full h-[68vh] border-0 bg-white block"
          loading="lazy"
        />
      ) : (
        preview && (
          <a href={project.github} target="_blank" rel="noreferrer" className="block">
            <img
              src={preview.src}
              alt={`${project.title} preview`}
              className="w-full aspect-[2/1] object-cover bg-white/5"
              onError={(e) => {
                const i = e.currentTarget;
                if (preview.fallback && i.src !== preview.fallback) i.src = preview.fallback;
              }}
            />
          </a>
        )
      )}
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
        <p className="text-white/70 leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-white/10 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70">
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a className="glass-surface rounded-full px-5 py-2.5 text-sm flex items-center gap-2 no-underline text-white" href={project.github} target="_blank" rel="noreferrer">
              <Github size={16} /> Code
            </a>
          )}
          {project.external && (
            <a className="glass-surface rounded-full px-5 py-2.5 text-sm flex items-center gap-2 no-underline text-white" href={project.external} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
