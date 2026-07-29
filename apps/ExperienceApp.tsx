import React from 'react';
import { Warp } from '@paper-design/shaders-react';
import { EXPERIENCE } from '../constants';

const SHADERS = [
  { proportion: 0.3, softness: 0.8, distortion: 0.15, swirl: 0.6, swirlIterations: 8, shape: 'checks' as const, shapeScale: 0.08, colors: ['hsl(280, 100%, 30%)', 'hsl(320, 100%, 60%)', 'hsl(340, 90%, 40%)', 'hsl(300, 100%, 70%)'] },
  { proportion: 0.4, softness: 1.2, distortion: 0.2, swirl: 0.9, swirlIterations: 12, shape: 'dots' as const, shapeScale: 0.12, colors: ['hsl(200, 100%, 25%)', 'hsl(180, 100%, 65%)', 'hsl(160, 90%, 35%)', 'hsl(190, 100%, 75%)'] },
  { proportion: 0.35, softness: 0.9, distortion: 0.18, swirl: 0.7, swirlIterations: 10, shape: 'checks' as const, shapeScale: 0.1, colors: ['hsl(120, 100%, 25%)', 'hsl(140, 100%, 60%)', 'hsl(100, 90%, 30%)', 'hsl(130, 100%, 70%)'] },
  { proportion: 0.45, softness: 1.1, distortion: 0.22, swirl: 0.8, swirlIterations: 15, shape: 'dots' as const, shapeScale: 0.09, colors: ['hsl(30, 100%, 35%)', 'hsl(50, 100%, 65%)', 'hsl(40, 90%, 40%)', 'hsl(45, 100%, 75%)'] },
  { proportion: 0.38, softness: 0.95, distortion: 0.16, swirl: 0.85, swirlIterations: 11, shape: 'checks' as const, shapeScale: 0.11, colors: ['hsl(250, 100%, 30%)', 'hsl(270, 100%, 65%)', 'hsl(260, 90%, 35%)', 'hsl(265, 100%, 70%)'] },
  { proportion: 0.42, softness: 1.0, distortion: 0.19, swirl: 0.75, swirlIterations: 9, shape: 'dots' as const, shapeScale: 0.13, colors: ['hsl(330, 100%, 30%)', 'hsl(350, 100%, 60%)', 'hsl(340, 90%, 35%)', 'hsl(345, 100%, 75%)'] },
];

export default function ExperienceApp() {
  return (
    <div className="p-6 md:p-8 text-white font-brother">
      <h2 className="text-3xl font-light mb-1">Professional Experience</h2>
      <p className="text-white/50 mb-8">Where I’ve worked — design, engineering, and product.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {EXPERIENCE.map((job, index) => {
          const s = SHADERS[index % SHADERS.length];
          return (
            <div key={index} className="relative min-h-[240px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Warp
                  style={{ height: '100%', width: '100%' }}
                  proportion={s.proportion}
                  softness={s.softness}
                  distortion={s.distortion}
                  swirl={s.swirl}
                  swirlIterations={s.swirlIterations}
                  shape={s.shape}
                  shapeScale={s.shapeScale}
                  scale={1}
                  rotation={0}
                  speed={0.8}
                  colors={s.colors}
                />
              </div>

              <div className="relative z-10 p-6 rounded-3xl h-full flex flex-col bg-black/80 border border-white/15">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-2xl font-bold">{job.company}</h3>
                  <span className="font-mono text-xs text-white/60 shrink-0">{job.start} – {job.end}</span>
                </div>
                <p className="text-white/70 text-sm font-medium mb-3">{job.title}</p>

                <ul className="space-y-1.5 flex-grow">
                  {job.description.map((d, i) => (
                    <li key={i} className="text-gray-100 text-[13px] leading-relaxed flex gap-2">
                      <span className="text-white/50">▹</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tech.map((t, i) => (
                    <span key={i} className="bg-white/15 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
