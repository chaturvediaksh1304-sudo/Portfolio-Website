import React, { useRef, useState } from 'react';
import { useWindowStore } from '../store/windowStore';
import { APPS } from '../apps/registry';

const BASE = 46; // base icon size (px)
const MAX_SCALE = 1.9;
const EFFECT = 130; // px — half-width of the magnify window

// ponytail: authentic cosine magnify via CSS transform; skipped the rAF lerp
// loop + neighbor-repositioning from spec §4 — add if the motion needs to be
// silkier / icons should push apart.
export default function Dock() {
  const open = useWindowStore((s) => s.open);
  const windows = useWindowStore((s) => s.windows); // stable ref; derive below
  const openIds = windows.filter((w) => !w.minimized).map((w) => w.appId);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const centers = useRef<number[]>([]);

  return (
    <div className="fixed bottom-2 inset-x-0 z-[9998] flex justify-center pointer-events-none">
      <div
        className="glass-surface pointer-events-auto rounded-2xl px-2.5 py-1.5 flex items-end gap-1.5"
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => setMouseX(null)}
      >
        {APPS.map((app, i) => {
          let scale = 1;
          const cx = centers.current[i];
          if (mouseX != null && cx != null) {
            const minX = mouseX - EFFECT;
            if (cx >= minX && cx <= mouseX + EFFECT) {
              const theta = ((cx - minX) / (2 * EFFECT)) * Math.PI * 2;
              scale = 1 + ((1 - Math.cos(theta)) / 2) * (MAX_SCALE - 1);
            }
          }
          return (
            <div
              key={app.id}
              ref={(el) => {
                if (el) {
                  const r = el.getBoundingClientRect();
                  centers.current[i] = r.left + r.width / 2;
                }
              }}
              className="flex flex-col items-center"
              style={{ width: BASE }}
            >
              <button
                onClick={() => open(app.id)}
                title={app.label}
                style={{
                  width: BASE,
                  height: BASE,
                  transform: `scale(${scale})`,
                  transformOrigin: 'bottom',
                  transition: mouseX == null ? 'transform 0.22s cubic-bezier(0.2,0.9,0.3,1)' : 'none',
                }}
                className="flex items-center justify-center shrink-0"
              >
                <img
                  src={app.iconSrc}
                  alt={app.label}
                  draggable={false}
                  className="w-full h-full [filter:drop-shadow(0_2px_3px_rgba(0,0,0,0.3))]"
                />
              </button>
              <span className={`w-1 h-1 rounded-full mt-1.5 transition-colors ${openIds.includes(app.id) ? 'bg-white/85' : 'bg-transparent'}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
