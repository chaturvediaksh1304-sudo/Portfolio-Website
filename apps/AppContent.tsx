import React from 'react';
import { getApp } from './registry';
import ProjectApp from './ProjectApp';
import AboutApp from './AboutApp';
import ResumeApp from './ResumeApp';
import ContactApp from './ContactApp';
import FinderApp from './FinderApp';

// One place that maps an appId to its (presentation-agnostic) content — rendered
// inside a desktop Window or a mobile AppScreen (spec §2 content/shell split).
export default function AppContent({ appId }: { appId: string }) {
  const app = getApp(appId);
  if (!app) return null;
  switch (app.kind) {
    case 'project': return <ProjectApp project={app.project} />;
    case 'about': return <AboutApp />;
    case 'resume': return <ResumeApp />;
    case 'contact': return <ContactApp />;
    case 'finder': return <FinderApp />;
    default: return null;
  }
}
