import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Fallback if element not found immediately
        window.location.hash = 'contact';
    }
  };

  const one = <h1 className="font-mono text-green mb-5 text-sm md:text-base">Hi, my name is</h1>;
  const two = <h2 className="text-4xl md:text-7xl font-bold text-lightest-slate mb-4">Aksh Chaturvedi.</h2>;
  const three = <h3 className="text-2xl md:text-4xl font-bold text-slate mb-6">Building scalable solutions & AI agents.</h3>;
  const four = (
    <p className="max-w-2xl text-slate text-base md:text-lg mb-10 leading-relaxed mx-auto">
      I am a Computer Science student at <span className="text-green">Central Michigan University</span> with a minor in Multimedia Design. 
      I specialize in full-stack development, AI agent systems, and cloud infrastructure.
    </p>
  );
  const five = (
    <a
      href="#contact"
      onClick={scrollToContact}
      className="inline-block px-10 py-4 border border-green text-green font-mono rounded hover:bg-green/10 transition-colors"
    >
      Contact Me
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-0 max-w-5xl mx-auto pt-20 text-center">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
        >
          {item}
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;