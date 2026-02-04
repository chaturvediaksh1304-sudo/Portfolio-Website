import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate text-xs font-mono">
       <div className="md:hidden flex justify-center space-x-6 mb-6">
            <a href="https://github.com/chaturvediaksh1304-sudo" className="hover:text-green"><Github size={18}/></a>
       </div>
      <a 
        href="https://github.com/chaturvediaksh1304-sudo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-green transition-colors block mb-2"
      >
        Built by Aksh Chaturvedi
      </a>
      <p>Built with React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;