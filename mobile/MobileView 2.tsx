import React, { useState } from 'react';
import { X } from 'lucide-react';
import { APPS, getApp } from '../apps/registry';
import AppContent from '../apps/AppContent';

// Minimal iOS-style fallback (spec §10 full adaptation deferred): tappable icon
// grid → full-screen AppScreen using the same content components as desktop.
export default function MobileView() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="px-6 pt-14 pb-24">
        <h1 className="text-white text-2xl font-semibold mb-0.5">Aksh Chaturvedi</h1>
        <p className="text-white/50 text-sm mb-8">Tap an app to open</p>
        <div className="grid grid-cols-3 gap-5">
          {APPS.map((app) => (
            <button
              key={app.id}
              onClick={() => setOpenId(app.id)}
              className="flex flex-col items-center gap-1.5"
            >
              <img
                src={app.iconSrc}
                alt={app.label}
                draggable={false}
                className="w-16 h-16 [filter:drop-shadow(0_3px_5px_rgba(0,0,0,0.3))]"
              />
              <span className="text-white/95 text-[11px] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">{app.label}</span>
            </button>
          ))}
        </div>
      </div>

      {openId && (
        <div className="fixed inset-0 z-50 glass-dark overflow-y-auto">
          <div className="sticky top-0 h-12 flex items-center justify-between px-4 border-b border-white/10 glass-dark z-10">
            <span className="text-white font-medium">{getApp(openId)?.label}</span>
            <button onClick={() => setOpenId(null)} className="text-white/70" aria-label="Close">
              <X size={22} />
            </button>
          </div>
          <AppContent appId={openId} />
        </div>
      )}
    </div>
  );
}
