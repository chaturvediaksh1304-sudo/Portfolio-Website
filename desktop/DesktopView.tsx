import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuBar from './MenuBar';
import Dock from './Dock';
import DesktopIcon from './DesktopIcon';
import WindowManager from './WindowManager';
import Spotlight from './Spotlight';
import { DESKTOP_APPS } from '../apps/registry';
import { useWindowStore } from '../store/windowStore';
import RotatingEarth from '../components/ui/wireframe-dotted-globe';

export default function DesktopView() {
  const openApp = useWindowStore((s) => s.open);
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const close = () => setMenu(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const MENU_ITEMS: { label: string; onClick?: () => void; divider?: boolean }[] = [
    { label: 'New Folder' },
    { label: 'Get Info' },
    { label: 'Change Desktop Background…', divider: true },
    { label: 'About This Mac', onClick: () => openApp('about') },
    { label: 'Resume', onClick: () => openApp('resume') },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden">
      <MenuBar />

      {/* Desktop area — the bounds parent for draggable windows. */}
      <div
        className="absolute inset-x-0 top-7 bottom-0"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenu({ x: e.clientX, y: e.clientY - 28 });
        }}
      >
        {/* Rotating wireframe globe centerpiece (behind icons + windows) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <RotatingEarth
            width={560}
            height={560}
            showHint={false}
            className="opacity-70 pointer-events-auto [filter:drop-shadow(0_10px_40px_rgba(0,0,0,0.5))]"
          />
        </div>

        {/* Icon grid, top-right */}
        <div className="absolute top-4 right-4 flex flex-col gap-4 items-center">
          {DESKTOP_APPS.map((app) => (
            <DesktopIcon key={app.id} app={app} />
          ))}
        </div>

        <WindowManager />

        {/* Desktop right-click context menu */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.1 }}
              style={{ left: menu.x, top: menu.y }}
              className="glass-dark absolute z-[9995] w-56 rounded-lg border border-white/12 shadow-xl p-1.5 origin-top-left"
            >
              {MENU_ITEMS.map((item, i) => (
                <React.Fragment key={i}>
                  <button
                    onClick={() => { item.onClick?.(); setMenu(null); }}
                    className="w-full text-left px-3 py-1.5 rounded-md text-[13px] text-white/90 hover:bg-blue-500 hover:text-white"
                  >
                    {item.label}
                  </button>
                  {item.divider && <div className="my-1 border-t border-white/10" />}
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Dock />
      <Spotlight />
    </div>
  );
}
