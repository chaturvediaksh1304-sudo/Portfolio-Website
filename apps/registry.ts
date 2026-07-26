import type { ComponentType } from 'react';
import {
  ShoppingBag, ShieldCheck, TrendingUp, Eye, BarChart3, Repeat,
  User, FileText, Mail, FolderOpen,
} from 'lucide-react';
import { PROJECTS } from '../constants';
import type { ProjectItem } from '../types';

export type AppKind = 'project' | 'about' | 'resume' | 'contact' | 'finder';

export interface AppDef {
  id: string;
  label: string;
  icon: ComponentType<{ size?: number }>;
  color: string; // icon-tile background
  kind: AppKind;
  project?: ProjectItem;
}

const find = (key: string): ProjectItem | undefined =>
  PROJECTS.find((p) => p.title.includes(key));

// Curated roster (spec §9). Non-pinned projects live in the Finder window.
export const APPS: AppDef[] = [
  { id: 'finder', label: 'Finder', icon: FolderOpen, color: '#1e9bf0', kind: 'finder' },
  { id: 'xskill', label: 'XSkill', icon: Repeat, color: '#5b8def', kind: 'project', project: find('XSkill') },
  { id: 'grab', label: 'Grab', icon: ShoppingBag, color: '#e0729a', kind: 'project', project: find('Grab') },
  { id: 'vaultscan', label: 'VaultScan', icon: ShieldCheck, color: '#3ac07a', kind: 'project', project: find('VaultScan') },
  { id: 'newstotrade', label: 'News-to-Trade', icon: TrendingUp, color: '#f0a63a', kind: 'project', project: find('News-to-Trade') },
  { id: 'headcountiq', label: 'HeadcountIQ', icon: BarChart3, color: '#7c6df0', kind: 'project', project: find('HeadcountIQ') },
  { id: 'pirate', label: 'Pirate', icon: Eye, color: '#2b2f3a', kind: 'project', project: find('Pirate') },
  { id: 'about', label: 'About', icon: User, color: '#8a8f99', kind: 'about' },
  { id: 'resume', label: 'Resume', icon: FileText, color: '#4a4f5a', kind: 'resume' },
  { id: 'contact', label: 'Contact', icon: Mail, color: '#1e9bf0', kind: 'contact' },
];

export const getApp = (id: string): AppDef | undefined => APPS.find((a) => a.id === id);

// Desktop icons: the project apps (top-right grid). Dock shows everything.
export const DESKTOP_APPS = APPS.filter((a) => a.kind === 'project');
