import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuBar from './MenuBar';
import MacOSDock from '../components/ui/mac-os-dock';
import WindowManager from './WindowManager';
import Spotlight from './Spotlight';
import WorldClocks from './WorldClocks';
import { TiltCard } from '../components/ui/tilt-card';
import { APPS, getApp } from '../apps/registry';
import { useWindowStore } from '../store/windowStore';
import AnimatedGradientBackground from '../components/ui/animated-gradient-background';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Marquee } from '../components/ui/marquee';

const SKILLS = [
  'Java', 'Python', 'SQL', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
  'ETL/ELT Pipelines', 'Relational Schema Design', 'Query Optimization', 'Multi-table Joins',
  'Algorithmic Data Modeling', 'Telemetry Processing', 'Matrix Ingestion', 'Vector Arrays',
  'Spring Framework', 'AWS (EC2, Lambda, API Gateway)', 'Docker', 'GitHub', 'REST APIs',
  'Data Integrity Control', 'Asynchronous Multithreading', 'Agile/Scrum', 'Infrastructure Monitoring',
];

const DOCK_APPS = APPS.map((a) => ({ id: a.id, name: a.label, icon: a.iconSrc }));

export default function DesktopView() {
  const openApp = useWindowStore((s) => s.open);
  const windows = useWindowStore((s) => s.windows);
  const openIds = windows.filter((w) => !w.minimized).map((w) => w.appId);
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  // Projects open a window; links open a new browser tab.
  const handleDockClick = (id: string) => {
    const app = getApp(id);
    if (app?.kind === 'link' && app.href) {
      window.open(app.href, '_blank', 'noopener,noreferrer');
    } else {
      openApp(id);
    }
  };

  useEffect(() => {
    const close = () => setMenu(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const MENU_ITEMS: { label: string; onClick?: () => void; divider?: boolean }[] = [
    { label: 'New Folder' },
    { label: 'Get Info' },
    { label: 'Change Desktop Background…' },
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
        {/* Animated radial gradient desktop background (behind icons + windows) */}
        <AnimatedGradientBackground Breathing containerClassName="z-0" />

        {/* Cat + skills marquee centerpiece (behind windows, non-blocking) */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none px-4 -translate-y-20">
          <div className="w-96 h-96 max-w-[70vw] max-h-[70vw]">
            <DotLottieReact
              src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
              loop
              autoplay
            />
          </div>
          <div className="w-full max-w-3xl mt-2">
            <Marquee duration={75} fadeAmount={12}>
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="font-brother mx-6 text-white text-xl md:text-2xl font-black tracking-wide whitespace-nowrap"
                >
                  {s}
                </span>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Desktop profile tilt card — constant size (scale 1 = no zoom), no photo */}
        <TiltCard
          scale={1}
          className="absolute top-6 left-6 z-[1] w-[290px] rounded-3xl border border-white/15 bg-black/55 backdrop-blur-md p-6 shadow-2xl"
        >
          <div className="relative z-20 text-white font-brother">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
              Open to work
            </span>
            <h3 className="text-2xl font-semibold tracking-tight mt-4">Aksh Chaturvedi</h3>
            <p className="mt-1 text-sm text-white/60">
              CS grad · Adobe Student Ambassador · Co-founder, MANK Studios
            </p>
            <div className="mt-4 space-y-1 text-[13px] text-white/70">
              <p>🎓 Central Michigan University · Magna Cum Laude</p>
              <p>📍 Mount Pleasant, Michigan</p>
              <p>🛠 Design · Engineering · Marketing</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-[13px]">
              <a href="mailto:chaturvedi.aksh1304@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <span>✉️</span> chaturvedi.aksh1304@gmail.com
              </a>
              <a href="tel:+17343530799" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <span>📞</span> +1 (734) 353-0799
              </a>
            </div>
          </div>
        </TiltCard>

        <WorldClocks />

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

      <div className="fixed bottom-2 inset-x-0 z-[9998] flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <MacOSDock apps={DOCK_APPS} onAppClick={handleDockClick} openApps={openIds} />
        </div>
      </div>
      <Spotlight />
    </div>
  );
}
