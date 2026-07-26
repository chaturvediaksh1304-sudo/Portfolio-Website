import React from 'react';
import { useWindowStore } from '../store/windowStore';
import type { AppDef } from '../apps/registry';

export default function DesktopIcon({ app }: { app: AppDef }) {
  const open = useWindowStore((s) => s.open);
  const Icon = app.icon;
  return (
    <button
      onDoubleClick={() => open(app.id)}
      className="w-20 flex flex-col items-center gap-1.5 group focus:outline-none"
      title={`Open ${app.label}`}
    >
      <span
        className="app-icon w-14 h-14 flex items-center justify-center transition-transform group-active:scale-95"
        style={{ background: app.gradient }}
      >
        <Icon size={25} />
      </span>
      <span className="text-[12px] text-white/95 text-center leading-tight px-1.5 rounded-md bg-black/30 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
        {app.label}
      </span>
    </button>
  );
}
