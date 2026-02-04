import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 mb-10"
      >
        <span className="text-green font-mono text-xl md:text-2xl font-medium">01.</span>
        <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap">About Me</h2>
        <div className="h-[1px] bg-lightest-navy w-full ml-4 max-w-xs md:max-w-sm"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 text-slate text-lg leading-relaxed space-y-4"
        >
          <p>
            Hello! My name is Aksh and I enjoy creating things that live on the internet. My journey in software engineering began with a curiosity for how things work, which led me to dive deep into coding and system architecture.
          </p>
          <p>
            Today, I have had the privilege of working at various organizations, helping them solve complex problems through technology. My main focus is on building accessible, inclusive products and robust backend systems that scale.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
             {SKILLS[0].skills.concat(SKILLS[1].skills).slice(0, 6).map((skill, i) => (
                <li key={i} className="flex items-center space-x-2">
                    <span className="text-green">▹</span>
                    <span>{skill}</span>
                </li>
             ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative group"
        >
            <div className="relative w-full max-w-[300px] mx-auto">
                <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
                <div className="relative z-10 rounded overflow-hidden bg-green">
                     <img 
                        src="https://picsum.photos/400/400?grayscale" 
                        alt="Profile" 
                        className="w-full h-full object-cover mix-blend-multiply filter grayscale hover:mix-blend-normal hover:filter-none transition-all duration-300 opacity-80 hover:opacity-100"
                    />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;