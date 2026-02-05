import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onRestart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRestart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const variants = {
    visible: { y: 0, transition: { duration: 0.3 } },
    hidden: { y: -100, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={variants}
      animate={visible ? 'visible' : 'hidden'}
      className={`fixed top-0 z-40 w-full px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Side - Resume */}
        <div className="flex items-center space-x-8">
          <motion.a
            href="https://drive.google.com/file/d/1ZBkl3XgFNv2ETAc9AvsB6dQBp9uEDAv9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="px-4 py-2 border border-green text-green rounded font-mono text-xs hover:bg-green/10 transition-colors"
          >
            Resume
          </motion.a>
        </div>

        {/* Right Side - Owl Logo */}
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            onRestart(); 
          }} 
          className="relative z-50 group"
          aria-label="Restart Animation"
        >
          <svg
              viewBox="0 0 200 200"
              className="w-12 h-12 md:w-14 md:h-14 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]"
            >
               {/* Body/Head Silhouette */}
               <path 
                 d="M 40 60 Q 30 30 60 30 L 70 40 L 130 40 L 140 30 Q 170 30 160 60 Q 180 100 160 160 Q 100 180 40 160 Q 20 100 40 60 Z"
                 fill="#1a0505"
                 stroke="#ff0000"
                 strokeWidth="3"
               />

               {/* Left Eye Container */}
               <g transform="translate(65, 80)">
                 <circle cx="0" cy="0" r="25" fill="#222" stroke="#450a0a" strokeWidth="1" />
                 {/* Glowing Red Iris */}
                 <circle cx="0" cy="0" r="10" fill="#ff0000" className="animate-pulse" />
               </g>

               {/* Right Eye Container */}
               <g transform="translate(135, 80)">
                  <circle cx="0" cy="0" r="25" fill="#222" stroke="#450a0a" strokeWidth="1" />
                  {/* Glowing Red Iris */}
                  <circle cx="0" cy="0" r="10" fill="#ff0000" className="animate-pulse" />
               </g>
               
               {/* Beak */}
               <path d="M 90 100 L 110 100 L 100 120 Z" fill="#450a0a" />
            </svg>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
