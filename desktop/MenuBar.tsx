import React, { useEffect, useState } from 'react';
import { Apple, Sparkles, Search, Wifi, BatteryFull, Volume2, SlidersHorizontal } from 'lucide-react';
import { useWindowStore } from '../store/windowStore';
import { getApp } from '../apps/registry';

const MENUS = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const day = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  return `${day}  ${time}`;
}

export default function MenuBar() {
  const focusedId = useWindowStore((s) => s.focusedId);
  const clock = useClock();
  const appName = (focusedId && getApp(focusedId)?.label) || 'Finder';

  return (
    <div className="glass-dark fixed top-0 inset-x-0 h-7 z-[9999] flex items-center justify-between px-3 text-[13px] text-white/90 border-b border-white/10">
      <div className="flex items-center gap-4">
        <Apple size={15} className="fill-white/90" />
        <span className="font-semibold">{appName}</span>
        <div className="hidden md:flex items-center gap-4 text-white/80">
          {MENUS.map((m) => (
            <span key={m} className="cursor-default hover:text-white">{m}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3.5 text-white/85">
        <Sparkles size={14} />
        <Volume2 size={15} />
        <BatteryFull size={16} />
        <Wifi size={15} />
        <Search size={14} />
        <SlidersHorizontal size={14} />
        <span className="font-medium tabular-nums">{clock}</span>
      </div>
    </div>
  );
}
