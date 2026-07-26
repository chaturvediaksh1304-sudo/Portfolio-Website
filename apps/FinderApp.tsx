import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { previewFor } from '../lib/preview';

export default function FinderApp() {
  return (
    <div className="p-6 text-white">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
        All Projects — {PROJECTS.length}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => {
          const preview = previewFor(p);
          return (
            <div key={i} className="glass-surface rounded-2xl overflow-hidden flex flex-col">
              {preview && (
                <a href={p.external || p.github} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={preview.src}
                    alt={`${p.title} preview`}
                    className="w-full aspect-[2/1] object-cover bg-white/5"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (preview.fallback && img.src !== preview.fallback) img.src = preview.fallback;
                    }}
                  />
                </a>
              )}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-[15px]">{p.title}</h3>
                  <div className="flex gap-2 shrink-0 mt-0.5 text-white/50">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-white"><Github size={15} /></a>}
                    {p.external && <a href={p.external} target="_blank" rel="noreferrer" className="hover:text-white"><ExternalLink size={15} /></a>}
                  </div>
                </div>
                <p className="text-white/60 text-[13px] leading-relaxed">{p.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
