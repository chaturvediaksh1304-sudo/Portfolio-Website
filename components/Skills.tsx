import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_LIST } from '../constants';

const Skills: React.FC = () => {
  const radius = 300; // Radius for the orbit
  
  return (
    <section className="py-24 overflow-hidden bg-navy flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mb-20 px-6 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate mb-4">
            <span className="text-green font-mono text-lg mr-2">02.</span>
            My Skills
        </h2>
        <div className="h-[1px] bg-lightest-navy w-24 mx-auto"></div>
        <p className="mt-4 text-slate text-sm font-mono">
            &gt; Click on an icon to visit official docs_
        </p>
      </motion.div>

      {/* Orbit Container */}
      <div className="relative w-[360px] h-[360px] md:w-[700px] md:h-[700px] flex items-center justify-center scale-[0.6] md:scale-90">
        
        {/* Central Hub/Glow */}
        <div className="absolute inset-0 bg-green/5 rounded-full blur-3xl z-0"></div>
        <div className="w-4 h-4 bg-green rounded-full shadow-[0_0_20px_rgba(255,0,0,0.6)] z-10"></div>

        {/* Spinning Ring */}
        <div className="absolute inset-0 animate-spin-slower rounded-full">
            {SKILL_LIST.map((skill, index) => {
              const totalSkills = SKILL_LIST.length;
              const angle = (360 / totalSkills) * index;
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{
                    transform: `rotate(${angle}deg)`,
                  }}
                >
                    {/* The Line */}
                    <div 
                        className="absolute top-0 left-0 h-[1px] bg-lightest-navy/50 origin-left"
                        style={{ width: `${radius}px`, transform: 'translateY(-50%)' }}
                    ></div>

                    {/* The Icon Wrapper - positioned at the end of the line */}
                    <div
                        className="absolute top-0 left-0"
                        style={{
                            transform: `translateX(${radius}px) translate(-50%, -50%)`
                        }}
                    >
                        {/* Counter-rotate the content so it stays upright while the wheel spins */}
                        <div className="animate-spin-reverse-slower">
                             <a 
                                href={skill.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center group cursor-pointer"
                                aria-label={`View ${skill.name} documentation`}
                             >
                                <div className="bg-light-navy p-2.5 md:p-3 rounded-full border border-lightest-navy group-hover:border-green group-hover:bg-light-navy/80 transition-all duration-300 shadow-lg relative z-20">
                                    <skill.icon size={20} className="text-green md:w-6 md:h-6" />
                                </div>
                                <span className="absolute mt-10 text-[10px] md:text-xs font-mono text-slate font-medium bg-navy/90 px-2 py-0.5 rounded opacity-100 transition-opacity whitespace-nowrap z-50 border border-green/20">
                                    {skill.name}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;