import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const SocialSide: React.FC = () => {
  return (
    <div className="hidden md:block fixed bottom-0 left-10 z-10 w-10">
      <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-light-slate after:mx-auto after:mt-6">
        {SOCIAL_LINKS.map((link, i) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + i * 0.1 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-green hover:-translate-y-1 transform transition-all duration-300 block p-2"
              aria-label={link.name}
            >
              <link.icon size={20} />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export const EmailSide: React.FC = () => {
  return (
    <div className="hidden md:block fixed bottom-0 right-10 z-10 w-10">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 2 }}
         className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-light-slate after:mx-auto after:mt-6"
      >
        <a
          href="mailto:chaturvedi.aksh1304@gmail.com"
          className="font-mono text-xs text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300 vertical-rl tracking-widest p-2"
          style={{ writingMode: 'vertical-rl' }}
        >
          chaturvedi.aksh1304@gmail.com
        </a>
      </motion.div>
    </div>
  );
}

export default SocialSide;