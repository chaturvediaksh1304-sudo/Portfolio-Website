import React from 'react';

export interface NavItem {
  name: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface ExperienceItem {
  company: string;
  title: string;
  url: string;
  start: string;
  end: string;
  description: string[];
  tech: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}