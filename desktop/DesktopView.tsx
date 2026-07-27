import React from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import DesktopIcon from './DesktopIcon';
import WindowManager from './WindowManager';
import { DESKTOP_APPS } from '../apps/registry';
import RotatingEarth from '../components/ui/wireframe-dotted-globe';

export default function DesktopView() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <MenuBar />

      {/* Desktop area — the bounds parent for draggable windows. */}
      <div className="absolute inset-x-0 top-7 bottom-0">
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
      </div>

      <Dock />
    </div>
  );
}
