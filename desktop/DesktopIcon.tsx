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
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-active:scale-95"
        style={{ background: app.color }}
      >
        <Icon size={26} />
      </span>
      <span className="text-[12px] text-white text-center leading-tight px-1.5 rounded bg-black/25">
        {app.label}
      </span>
    </button>
  );
}
