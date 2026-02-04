import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SocialSide, { EmailSide } from './components/SocialSide';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackgroundLamps from './components/BackgroundLamps';

function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const finishLoading = () => {
    setLoading(false);
  };

  const handleRestart = () => {
    setLoading(true);
  };

  return (
    <div className="min-h-screen text-slate selection:bg-green selection:text-white">
      {loading ? (
        <Loader finishLoading={finishLoading} />
      ) : (
        <>
          <BackgroundLamps />
          <Navbar onRestart={handleRestart} />
          <SocialSide />
          <EmailSide />
          
          <main className="w-full relative z-10">
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;