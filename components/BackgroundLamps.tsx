import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundLamps: React.FC = () => {
  const [lamps, setLamps] = useState<{ id: number; top: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random positions for lamps
    const newLamps = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100, // percentage
      left: Math.random() * 100, // percentage
      delay: Math.random() * 5, // random animation delay
    }));
    setLamps(newLamps);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lamps.map((lamp) => (
        <div
          key={lamp.id}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-green shadow-[0_0_10px_2px_rgba(255,0,0,0.6)] animate-flicker"
          style={{
            top: `${lamp.top}%`,
            left: `${lamp.left}%`,
            animationDelay: `${lamp.delay}s`,
            opacity: 0.7
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundLamps;