import React, { useEffect, useState } from 'react';
import GlassNav from './components/GlassNav';
import HomePage from './components/pages/HomePage';
import ExperiencePage from './components/pages/ExperiencePage';
import ProjectsPage from './components/pages/ProjectsPage';
import EducationPage from './components/pages/EducationPage';
import ReferencesPage from './components/pages/ReferencesPage';
import AboutPage from './components/pages/AboutPage';

export type Route = 'home' | 'experience' | 'projects' | 'education' | 'references' | 'about';

const ROUTES: Route[] = ['home', 'experience', 'projects', 'education', 'references', 'about'];

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  return (ROUTES as string[]).includes(hash) ? (hash as Route) : 'home';
}

function App() {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const PAGES: Record<Route, React.ReactNode> = {
    home: <HomePage />,
    experience: <ExperiencePage />,
    projects: <ProjectsPage />,
    education: <EducationPage />,
    references: <ReferencesPage />,
    about: <AboutPage />,
  };

  return (
    <div className="relative min-h-screen text-slate selection:bg-white/20">
      {/* Velorah ocean video — fixed behind every page */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      {/* Readability scrim over the video */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-navy/30 via-navy/45 to-navy/70 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <GlassNav route={route} />
        <main key={route} className="flex-1 animate-fade-rise">
          {PAGES[route]}
        </main>
        <footer className="relative z-10 py-6 text-center font-mono text-[11px] text-muted">
          © 2026 Aksh Chaturvedi · Central Michigan University · CS ’26
        </footer>
      </div>
    </div>
  );
}

export default App;
