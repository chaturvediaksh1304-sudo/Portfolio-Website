import React from 'react';
import { Rnd } from 'react-rnd';
import { motion } from 'framer-motion';
import { useWindowStore, type WinState } from '../store/windowStore';
import { getApp } from '../apps/registry';
import AppContent from '../apps/AppContent';

export default function Window({ win }: { win: WinState }) {
  const { close, focus, toggleMinimize, setBounds } = useWindowStore();
  const app = getApp(win.appId);
  if (win.minimized) return null;

  return (
    <Rnd
      size={{ width: win.w, height: win.h }}
      position={{ x: win.x, y: win.y }}
      minWidth={360}
      minHeight={240}
      bounds="parent"
      dragHandleClassName="win-titlebar"
      style={{ zIndex: win.z }}
      onDragStart={() => focus(win.id)}
      onDragStop={(_e, d) => setBounds(win.id, { x: d.x, y: d.y })}
      onResizeStart={() => focus(win.id)}
      onResizeStop={(_e, _dir, ref, _delta, pos) =>
        setBounds(win.id, { w: ref.offsetWidth, h: ref.offsetHeight, x: pos.x, y: pos.y })
      }
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        onMouseDown={() => focus(win.id)}
        className="glass-dark rounded-xl overflow-hidden w-full h-full flex flex-col border border-white/10 shadow-2xl"
      >
        {/* Title bar with traffic lights */}
        <div className="win-titlebar h-10 shrink-0 flex items-center px-4 gap-2 select-none border-b border-white/10">
          <button onClick={() => close(win.id)} className="w-3 h-3 rounded-full bg-mac-red" aria-label="Close" />
          <button onClick={() => toggleMinimize(win.id)} className="w-3 h-3 rounded-full bg-mac-yellow" aria-label="Minimize" />
          <button className="w-3 h-3 rounded-full bg-mac-green" aria-label="Zoom" />
          <span className="ml-2 text-[13px] text-white/70 font-medium">{app?.label}</span>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <AppContent appId={win.appId} />
        </div>
      </motion.div>
    </Rnd>
  );
}
