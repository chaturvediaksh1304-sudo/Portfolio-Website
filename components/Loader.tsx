import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  finishLoading: () => void;
}

const Loader: React.FC<LoaderProps> = ({ finishLoading }) => {
  const [isAwake, setIsAwake] = useState(false);
  const [exit, setExit] = useState(false);

  const handleWakeUp = () => {
    if (!isAwake) {
      setIsAwake(true);
      // Wait for eye opening animation then exit
      setTimeout(() => {
        setExit(true);
        setTimeout(finishLoading, 800);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] cursor-pointer"
          onClick={handleWakeUp}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* The Owl SVG */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(255,0,0,0.2)]"
            >
               {/* Body/Head Silhouette */}
               <path 
                 d="M 40 60 Q 30 30 60 30 L 70 40 L 130 40 L 140 30 Q 170 30 160 60 Q 180 100 160 160 Q 100 180 40 160 Q 20 100 40 60 Z"
                 fill="#1a0505"
                 stroke="#450a0a"
                 strokeWidth="2"
               />

               {/* Left Eye Container */}
               <g transform="translate(65, 80)">
                 {/* Eye White */}
                 <circle cx="0" cy="0" r="25" fill="#222" stroke="#450a0a" strokeWidth="1" />
                 
                 {/* Glowing Iris/Pupil - Only visible when awake */}
                 <motion.circle 
                    cx="0" cy="0" r="10" 
                    fill="#ff0000"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isAwake ? 1 : 0, scale: isAwake ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                 />
                 
                 {/* Eyelid (Closes over the eye) */}
                 <motion.path
                    d="M -26 -26 L 26 -26 L 26 26 L -26 26 Z"
                    fill="#1a0505"
                    initial={{ y: 0 }}
                    animate={{ y: isAwake ? -52 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                 />
               </g>

               {/* Right Eye Container */}
               <g transform="translate(135, 80)">
                  {/* Eye White */}
                  <circle cx="0" cy="0" r="25" fill="#222" stroke="#450a0a" strokeWidth="1" />
                  
                  {/* Glowing Iris/Pupil */}
                  <motion.circle 
                    cx="0" cy="0" r="10" 
                    fill="#ff0000"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isAwake ? 1 : 0, scale: isAwake ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Eyelid */}
                  <motion.path
                    d="M -26 -26 L 26 -26 L 26 26 L -26 26 Z"
                    fill="#1a0505"
                    initial={{ y: 0 }}
                    animate={{ y: isAwake ? -52 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                 />
               </g>
               
               {/* Beak */}
               <path d="M 90 100 L 110 100 L 100 120 Z" fill="#331111" />
            </svg>
            
            {/* Glow effect when eyes open */}
            {isAwake && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-red-900/20 blur-3xl rounded-full z-[-1]"
                />
            )}
          </div>

          {/* Hint Text */}
          <motion.div 
            className="mt-12 text-center"
            animate={{ opacity: isAwake ? 0 : 1 }}
          >
            <p className="font-mono text-red-500/60 text-sm animate-pulse">
                &gt; Wake up the guardian_
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;