import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

// Custom X Logo Component
const XLogo = ({ size = 24, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Functional 'mailto' approach ensures email goes to inbox without backend
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:chaturvedi.aksh1304@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-6">
       <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
       >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Get In Touch :)</h2>
        <p className="text-slate text-lg mb-8 max-w-xl mx-auto">
            Don't hesitate to reach out if you have a question about my projects or want to work with me!
        </p>
        
        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
            <a href="mailto:chaturvedi.aksh1304@gmail.com" className="text-slate hover:text-green hover:scale-110 transition-all duration-300">
                <Mail size={42} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/aksh-chaturvedi/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:scale-110 transition-all duration-300">
                <Linkedin size={42} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/chaturvediaksh1304-sudo" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:scale-110 transition-all duration-300">
                <Github size={42} strokeWidth={1.5} />
            </a>
            <a href="https://x.com/aksh_chaturvedi" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:scale-110 transition-all duration-300">
                <XLogo size={38} />
            </a>
            <a href="https://www.instagram.com/_47_aksh_/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green hover:scale-110 transition-all duration-300">
                <Instagram size={42} strokeWidth={1.5} />
            </a>
        </div>

        {/* Functional Form with Red Styling */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    required
                    className="w-full bg-[#0a0000] text-lightest-slate border border-lightest-navy rounded-lg p-4 focus:outline-none focus:border-green focus:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    className="w-full bg-[#0a0000] text-lightest-slate border border-lightest-navy rounded-lg p-4 focus:outline-none focus:border-green focus:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6} 
                    placeholder="Message" 
                    required
                    className="w-full bg-[#0a0000] text-lightest-slate border border-lightest-navy rounded-lg p-4 focus:outline-none focus:border-green focus:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all resize-none"
                ></textarea>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-slate mt-2 text-center"
            >
                This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">Terms of Service</a> apply.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-end mt-6"
            >
                <button 
                    type="submit" 
                    className="bg-green text-white font-bold py-3 px-10 rounded-full hover:bg-red-700 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300 shadow-xl"
                >
                    Submit
                </button>
            </motion.div>
        </form>

       </motion.div>
    </section>
  );
};

export default Contact;