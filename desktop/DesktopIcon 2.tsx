import React from 'react';
import { useWindowStore } from '../store/windowStore';
import type { AppDef } from '../apps/registry';

export default function DesktopIcon({ app }: { app: AppDef }) {
  const open = useWindowStore((s) => s.open);
  return (
    <button
      onDoubleClick={() => open(app.id)}
      className="w-20 flex flex-col items-center gap-1.5 group focus:outline-none"
      title={`Open ${app.label}`}
    >
      <img
        src={app.iconSrc}
        alt={app.label}
        draggable={false}
        className="w-14 h-14 transition-transform group-active:scale-95 [filter:drop-shadow(0_3px_5px_rgba(0,0,0,0.35))]"
      />
      <span className="text-[12px] text-white/95 text-center leading-tight px-1.5 rounded-md bg-black/30 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
        {app.label}
      </span>
    </button>
  );
}
