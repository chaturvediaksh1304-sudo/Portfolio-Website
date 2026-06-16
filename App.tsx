import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Now from './components/Now';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen text-slate selection:bg-green selection:text-navy">
      <Navbar />

      <main className="w-full max-w-4xl mx-auto px-6 md:px-8">
        <Hero />
        <Now />
        <Projects />
        <Experience />
        <Skills />
        <Philosophy />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
