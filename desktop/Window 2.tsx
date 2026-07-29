import React from 'react';
import { Rnd } from 'react-rnd';
import { motion } from 'framer-motion';
import { useWindowStore, type WinState } from '../store/windowStore';
import { getApp } from '../apps/registry';
import AppContent from '../apps/AppContent';

export default function Window({ win }: { win: WinState }) {
  const { close, focus, toggleMinimize, toggleMaximize, setBounds } = useWindowStore();
  const app = getApp(win.appId);
  if (win.minimized) return null;

  // When maximized, fill the desktop area (below the 28px menu bar).
  const size = win.maximized
    ? { width: window.innerWidth, height: window.innerHeight - 28 }
    : { width: win.w, height: win.h };
  const position = win.maximized ? { x: 0, y: 0 } : { x: win.x, y: win.y };

  return (
    <Rnd
      size={size}
      position={position}
      minWidth={360}
      minHeight={240}
      bounds="parent"
      dragHandleClassName="win-titlebar"
      disableDragging={win.maximized}
      enableResizing={!win.maximized}
      style={{ zIndex: win.z }}
      onDragStart={() => focus(win.id)}
      onDragStop={(_e, d) => setBounds(win.id, { x: d.x, y: d.y })}
      onResizeStart={() => focus(win.id)}
      onResizeStop={(_e, _dir, ref, _delta, pos) =>
        setBounds(win.id, { w: ref.offsetWidth, h: ref.offsetHeight, x: pos.x, y: pos.y })
      }
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
        onMouseDown={() => focus(win.id)}
        className="glass-dark rounded-[13px] overflow-hidden w-full h-full flex flex-col border-[0.5px] border-white/12 shadow-[0_24px_72px_rgba(0,0,0,0.55)] ring-1 ring-black/40"
      >
        {/* Title bar — traffic lights left, centered title (macOS). Double-click = maximize. */}
        <div
          className="win-titlebar relative h-11 shrink-0 flex items-center px-4 gap-2 select-none border-b-[0.5px] border-white/8"
          onDoubleClick={() => toggleMaximize(win.id)}
        >
          <button onClick={() => close(win.id)} className="tl tl-close w-3 h-3 rounded-full bg-mac-red hover:brightness-95" aria-label="Close" />
          <button onClick={() => toggleMinimize(win.id)} className="tl tl-min w-3 h-3 rounded-full bg-mac-yellow hover:brightness-95" aria-label="Minimize" />
          <button onClick={() => toggleMaximize(win.id)} className="tl tl-zoom w-3 h-3 rounded-full bg-mac-green hover:brightness-95" aria-label="Zoom" />
          <span className="absolute left-1/2 -translate-x-1/2 text-[13px] text-white/75 font-semibold tracking-[-0.01em] pointer-events-none">
            {app?.label}
          </span>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <AppContent appId={win.appId} />
        </div>
      </motion.div>
    </Rnd>
  );
}
