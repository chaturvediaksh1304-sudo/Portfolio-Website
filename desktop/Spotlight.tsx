import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { APPS } from '../apps/registry';
import { useWindowStore } from '../store/windowStore';

export default function Spotlight() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const openApp = useWindowStore((s) => s.open);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // ⌘-Space (or Ctrl-Space) toggles Spotlight.
      if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return APPS;
    return APPS.filter((a) => a.label.toLowerCase().includes(q));
  }, [query]);

  const launch = (id: string) => {
    openApp(id);
    setOpen(false);
  };

  // Expose a way for the menu-bar search glyph to open it.
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-spotlight', handler);
    return () => window.removeEventListener('open-spotlight', handler);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9990] flex items-start justify-center pt-[18vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, y: -8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -8 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.25 }}
            onMouseDown={(e) => e.stopPropagation()}
            className="glass-dark w-[560px] max-w-[92vw] rounded-2xl border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 h-14 border-b border-white/10">
              <Search size={20} className="text-white/60" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && results[0]) launch(results[0].id);
                }}
                placeholder="Spotlight Search"
                className="flex-1 bg-transparent outline-none text-white text-lg placeholder:text-white/40"
              />
            </div>
            {results.length > 0 && (
              <div className="max-h-80 overflow-auto py-2">
                {results.map((app, i) => (
                  <button
                    key={app.id}
                    onClick={() => launch(app.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left ${i === 0 ? 'bg-white/10' : 'hover:bg-white/5'}`}
                  >
                    <img src={app.iconSrc} alt="" className="w-7 h-7" />
                    <span className="text-white text-[15px]">{app.label}</span>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
