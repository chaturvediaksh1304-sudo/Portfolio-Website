import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion';
import { useWindowStore } from '../store/windowStore';
import { APPS, type AppDef } from '../apps/registry';

const BASE = 48; // resting icon size (px)
const MAX = 86; // fully-magnified size
const RANGE = 150; // px of pointer distance the magnification spans

function DockIcon({
  app,
  mouseX,
  open,
  isOpen,
}: {
  app: AppDef;
  mouseX: MotionValue<number>;
  open: (id: string) => void;
  isOpen: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  // Distance from pointer to this icon's center (drives the magnify curve).
  const distance = useTransform(mouseX, (x) => {
    const b = ref.current?.getBoundingClientRect();
    return b ? x - (b.left + b.width / 2) : RANGE + 1;
  });

  const sizeSync = useTransform(distance, [-RANGE, 0, RANGE], [BASE, MAX, BASE]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 170, damping: 14 });

  return (
    <div className="relative flex flex-col items-center justify-end">
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[12px] text-white whitespace-nowrap glass-dark border border-white/10 shadow-lg pointer-events-none"
          >
            {app.label}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        style={{ width: size, height: size }}
        onClick={() => open(app.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center"
        aria-label={app.label}
      >
        <img
          src={app.iconSrc}
          alt={app.label}
          draggable={false}
          className="w-full h-full [filter:drop-shadow(0_2px_3px_rgba(0,0,0,0.3))]"
        />
      </motion.button>

      <span className={`w-1 h-1 rounded-full mt-1 ${isOpen ? 'bg-white/85' : 'bg-transparent'}`} />
    </div>
  );
}

export default function Dock() {
  const open = useWindowStore((s) => s.open);
  const windows = useWindowStore((s) => s.windows);
  const openIds = windows.filter((w) => !w.minimized).map((w) => w.appId);
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-2 inset-x-0 z-[9998] flex justify-center pointer-events-none">
      <div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="glass-surface pointer-events-auto rounded-2xl px-2.5 pt-1.5 pb-1 flex items-end gap-1.5"
      >
        {APPS.map((app) => (
          <DockIcon
            key={app.id}
            app={app}
            mouseX={mouseX}
            open={open}
            isOpen={openIds.includes(app.id)}
          />
        ))}
      </div>
    </div>
  );
}
