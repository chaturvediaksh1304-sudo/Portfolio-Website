import { PROJECTS } from '../constants';
import type { ProjectItem } from '../types';

export type AppKind = 'project' | 'link' | 'experience' | 'references' | 'education';

export interface AppDef {
  id: string;
  label: string;
  iconSrc: string;
  kind: AppKind;
  project?: ProjectItem; // kind 'project' — opens a window
  href?: string;         // kind 'link' — opens a new browser tab
}

const find = (key: string): ProjectItem | undefined =>
  PROJECTS.find((p) => p.title.includes(key));

// Dock roster — 6 project windows + 3 external links.
export const APPS: AppDef[] = [
  { id: 'experience', label: 'Professional Experience', iconSrc: '/app-icons/experience.png', kind: 'experience' },
  { id: 'references', label: 'References', iconSrc: '/app-icons/references.png', kind: 'references' },
  { id: 'education', label: 'Education', iconSrc: '/app-icons/education.png', kind: 'education' },
  { id: 'news', label: 'News-to-Trade', iconSrc: '/app-icons/news.jpg', kind: 'project', project: find('News-to-Trade') },
  { id: 'grab', label: 'Grab', iconSrc: '/app-icons/grab.jpg', kind: 'project', project: find('Grab') },
  { id: 'pirate', label: 'Pirate', iconSrc: '/app-icons/pirate.png', kind: 'project', project: find('Pirate') },
  { id: 'roots', label: 'Roots', iconSrc: '/app-icons/roots.png', kind: 'project', project: find('Roots') },
  { id: 'vaultscan', label: 'VaultScan', iconSrc: '/app-icons/vaultscan.png', kind: 'project', project: find('VaultScan') },
  { id: 'volt', label: 'Volt Engineering', iconSrc: '/app-icons/volt.svg', kind: 'project', project: find('Volt') },
  { id: 'github', label: 'GitHub', iconSrc: '/app-icons/github.png', kind: 'link', href: 'https://github.com/chaturvediaksh1304-sudo' },
  { id: 'instagram', label: 'Instagram', iconSrc: '/app-icons/instagram.svg', kind: 'link', href: 'https://www.instagram.com/_47_aksh_/' },
  { id: 'linkedin', label: 'LinkedIn', iconSrc: '/app-icons/linkedin.png', kind: 'link', href: 'https://www.linkedin.com/in/aksh-chaturvedi/' },
];

export const getApp = (id: string): AppDef | undefined => APPS.find((a) => a.id === id);
