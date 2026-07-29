import React from 'react';
import { getApp } from './registry';
import ProjectApp from './ProjectApp';
import ExperienceApp from './ExperienceApp';
import ReferencesApp from './ReferencesApp';
import EducationApp from './EducationApp';

// Maps an appId to its window content. 'project'/'experience' open windows;
// 'link' apps open a new browser tab (handled at click time).
export default function AppContent({ appId }: { appId: string }) {
  const app = getApp(appId);
  if (app?.kind === 'project') return <ProjectApp project={app.project} />;
  if (app?.kind === 'experience') return <ExperienceApp />;
  if (app?.kind === 'references') return <ReferencesApp />;
  if (app?.kind === 'education') return <EducationApp />;
  return null;
}
