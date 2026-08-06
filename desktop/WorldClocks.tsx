import React, { useEffect, useState } from 'react';

const ZONES = [
  { label: 'New York', tz: 'America/New_York' },
  { label: 'Chicago', tz: 'America/Chicago' },
  { label: 'San Francisco', tz: 'America/Los_Angeles' },
];

function zoneTime(now: Date, tz: string) {
  const [h, m, s] = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .format(now)
    .split(':')
    .map(Number);
  return { h: h % 12, m, s };
}

function GlassClock({ now, label, tz }: { now: Date; label: string; tz: string }) {
  const { h, m, s } = zoneTime(now, tz);
  const hourDeg = h * 30 + m * 0.5;
  const minuteDeg = m * 6 + s * 0.1;
  const secondDeg = s * 6;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="w-[92px] h-[92px] drop-shadow-2xl">
        <defs>
          <radialGradient id={`face-${tz}`} cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="60%" stopColor="rgba(238,238,236,0.88)" />
            <stop offset="100%" stopColor="rgba(198,198,196,0.85)" />
          </radialGradient>
          <linearGradient id={`gloss-${tz}`} x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="48" fill={`url(#face-${tz})`} />
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
        <ellipse cx="50" cy="34" rx="40" ry="28" fill={`url(#gloss-${tz})`} />

        {/* Minute + hour ticks */}
        {Array.from({ length: 60 }, (_, i) => {
          const hour = i % 5 === 0;
          return (
            <line
              key={i}
              x1="50"
              y1={hour ? 8 : 10}
              x2="50"
              y2={hour ? 15 : 12}
              stroke={hour ? 'rgba(40,40,40,0.9)' : 'rgba(80,80,80,0.45)'}
              strokeWidth={hour ? 2.2 : 1}
              strokeLinecap="round"
              transform={`rotate(${i * 6} 50 50)`}
            />
          );
        })}

        <line x1="50" y1="54" x2="50" y2="28" stroke="rgba(40,40,40,0.92)" strokeWidth="4.5"
          strokeLinecap="round" transform={`rotate(${hourDeg} 50 50)`} />
        <line x1="50" y1="56" x2="50" y2="16" stroke="rgba(40,40,40,0.92)" strokeWidth="3"
          strokeLinecap="round" transform={`rotate(${minuteDeg} 50 50)`} />
        <g transform={`rotate(${secondDeg} 50 50)`}>
          <line x1="50" y1="62" x2="50" y2="14" stroke="#ff6b00" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="50" cy="64" r="3.5" fill="#ff6b00" />
        </g>
        <circle cx="50" cy="50" r="2.2" fill="rgba(40,40,40,0.95)" />
      </svg>
      <span className="font-brother text-[11px] font-medium tracking-wide text-white/75">{label}</span>
    </div>
  );
}

export default function WorldClocks() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute top-6 right-6 z-[1] flex items-start gap-5">
      {ZONES.map((z) => (
        <GlassClock key={z.tz} now={now} label={z.label} tz={z.tz} />
      ))}
    </div>
  );
}
