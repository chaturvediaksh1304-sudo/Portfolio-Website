import React from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import DesktopIcon from './DesktopIcon';
import WindowManager from './WindowManager';
import { DESKTOP_APPS } from '../apps/registry';

export default function DesktopView() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <MenuBar />

      {/* Desktop area — the bounds parent for draggable windows. */}
      <div className="absolute inset-x-0 top-7 bottom-0">
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
