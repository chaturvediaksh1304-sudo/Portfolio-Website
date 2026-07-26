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
  gradient: string; // CSS background for the glossy app-icon tile
  kind: AppKind;
  project?: ProjectItem;
}

const find = (key: string): ProjectItem | undefined =>
  PROJECTS.find((p) => p.title.includes(key));

const g = (from: string, to: string) => `linear-gradient(160deg, ${from} 0%, ${to} 100%)`;

// Curated roster (spec §9). Non-pinned projects live in the Finder window.
export const APPS: AppDef[] = [
  { id: 'finder', label: 'Finder', icon: FolderOpen, gradient: g('#3fb0ff', '#0a72e6'), kind: 'finder' },
  { id: 'xskill', label: 'XSkill', icon: Repeat, gradient: g('#7fb2ff', '#2f6fe0'), kind: 'project', project: find('XSkill') },
  { id: 'grab', label: 'Grab', icon: ShoppingBag, gradient: g('#ff9ec7', '#e0568f'), kind: 'project', project: find('Grab') },
  { id: 'vaultscan', label: 'VaultScan', icon: ShieldCheck, gradient: g('#63e6a4', '#1ea86a'), kind: 'project', project: find('VaultScan') },
  { id: 'newstotrade', label: 'News-to-Trade', icon: TrendingUp, gradient: g('#ffc766', '#f0921e'), kind: 'project', project: find('News-to-Trade') },
  { id: 'headcountiq', label: 'HeadcountIQ', icon: BarChart3, gradient: g('#b199ff', '#6f4fe0'), kind: 'project', project: find('HeadcountIQ') },
  { id: 'pirate', label: 'Pirate', icon: Eye, gradient: g('#4a5060', '#1a1d26'), kind: 'project', project: find('Pirate') },
  { id: 'about', label: 'About', icon: User, gradient: g('#c2c6d0', '#7a808c'), kind: 'about' },
  { id: 'resume', label: 'Resume', icon: FileText, gradient: g('#7a8090', '#3a3f4a'), kind: 'resume' },
  { id: 'contact', label: 'Contact', icon: Mail, gradient: g('#63cbff', '#0a8fe6'), kind: 'contact' },
];

export const getApp = (id: string): AppDef | undefined => APPS.find((a) => a.id === id);

// Desktop icons: the project apps (top-right grid). Dock shows everything.
export const DESKTOP_APPS = APPS.filter((a) => a.kind === 'project');
