import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// macos-web-style boot splash: Apple logo + determinate progress bar, then fades.
export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // macOS startup chime (browsers may block autoplay without a prior gesture).
    const audio = new Audio('/sounds/mac-startup-sound.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {});

    const start = Date.now();
    const DURATION = 2600;
    const t = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / DURATION) * 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(t);
        setTimeout(onDone, 350);
      }
    }, 30);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
    >
      <img src="/apple-logo.svg" alt="Apple" className="w-20 mb-28 [filter:brightness(0)_invert(1)]" />
      <div className="w-52 h-1.5 rounded-full bg-white/20 overflow-hidden">
        <div className="h-full bg-white rounded-full transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  );
}
