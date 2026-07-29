import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Bluetooth, Plane, Moon, Sun, Volume2 } from 'lucide-react';

function Toggle({ icon: Icon, label, on, onClick }: { icon: any; label: string; on: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors" style={{ background: on ? 'rgba(10,120,246,0.9)' : 'rgba(255,255,255,0.12)' }}>
      <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: on ? '#fff' : 'rgba(255,255,255,0.2)' }}>
        <Icon size={15} className={on ? 'text-blue-600' : 'text-white'} />
      </span>
      <span className="text-white text-[13px] font-medium text-left leading-tight">{label}<br /><span className="text-white/60 text-[11px]">{on ? 'On' : 'Off'}</span></span>
    </button>
  );
}

function Slider({ icon: Icon, value, onChange }: { icon: any; value: number; onChange: (v: number) => void }) {
  return (
    <div className="glass-surface rounded-xl px-3 py-2.5">
      <div className="relative h-7 rounded-full bg-white/15 overflow-hidden flex items-center">
        <div className="absolute inset-y-0 left-0 bg-white/85" style={{ width: `${value}%` }} />
        <Icon size={15} className="relative ml-2 text-black/60" />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function ControlCenter() {
  const [wifi, setWifi] = useState(true);
  const [bt, setBt] = useState(true);
  const [airplane, setAirplane] = useState(false);
  const [dnd, setDnd] = useState(false);
  const [brightness, setBrightness] = useState(80);
  const [volume, setVolume] = useState(65);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.16 }}
      className="glass-dark absolute top-8 right-2 z-[9999] w-72 rounded-2xl border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-3 space-y-3"
    >
      <div className="grid grid-cols-2 gap-2">
        <Toggle icon={Wifi} label="Wi-Fi" on={wifi} onClick={() => setWifi((v) => !v)} />
        <Toggle icon={Bluetooth} label="Bluetooth" on={bt} onClick={() => setBt((v) => !v)} />
        <Toggle icon={Plane} label="Airplane" on={airplane} onClick={() => setAirplane((v) => !v)} />
        <Toggle icon={Moon} label="Focus" on={dnd} onClick={() => setDnd((v) => !v)} />
      </div>
      <div>
        <p className="text-white/70 text-[11px] font-medium mb-1 px-1">Display</p>
        <Slider icon={Sun} value={brightness} onChange={setBrightness} />
      </div>
      <div>
        <p className="text-white/70 text-[11px] font-medium mb-1 px-1">Sound</p>
        <Slider icon={Volume2} value={volume} onChange={setVolume} />
      </div>
    </motion.div>
  );
}
