import { PROJECTS } from '../constants';
import type { ProjectItem } from '../types';

export type AppKind = 'project' | 'about' | 'resume' | 'contact' | 'finder';

export interface AppDef {
  id: string;
  label: string;
  iconSrc: string; // real macOS Big Sur icon (from macos-web.app assets)
  kind: AppKind;
  project?: ProjectItem;
}

const find = (key: string): ProjectItem | undefined =>
  PROJECTS.find((p) => p.title.includes(key));

const icon = (id: string) => `/app-icons/${id}.png`;

// Curated roster (spec §9), each mapped to a real macOS app icon.
export const APPS: AppDef[] = [
  { id: 'finder', label: 'Finder', iconSrc: icon('finder'), kind: 'finder' },
  { id: 'xskill', label: 'XSkill', iconSrc: icon('xskill'), kind: 'project', project: find('XSkill') },
  { id: 'grab', label: 'Grab', iconSrc: icon('grab'), kind: 'project', project: find('Grab') },
  { id: 'vaultscan', label: 'VaultScan', iconSrc: icon('vaultscan'), kind: 'project', project: find('VaultScan') },
  { id: 'newstotrade', label: 'News-to-Trade', iconSrc: icon('newstotrade'), kind: 'project', project: find('News-to-Trade') },
  { id: 'headcountiq', label: 'HeadcountIQ', iconSrc: icon('headcountiq'), kind: 'project', project: find('HeadcountIQ') },
  { id: 'pirate', label: 'Pirate', iconSrc: icon('pirate'), kind: 'project', project: find('Pirate') },
  { id: 'about', label: 'About', iconSrc: icon('about'), kind: 'about' },
  { id: 'resume', label: 'Resume', iconSrc: icon('resume'), kind: 'resume' },
  { id: 'contact', label: 'Contact', iconSrc: icon('contact'), kind: 'contact' },
];

export const getApp = (id: string): AppDef | undefined => APPS.find((a) => a.id === id);

export const DESKTOP_APPS = APPS.filter((a) => a.kind === 'project');
