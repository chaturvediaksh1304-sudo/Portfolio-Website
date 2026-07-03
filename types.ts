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
  tags?: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationInfo {
  school: string;
  degree: string;
  minor?: string;
  honors?: string;
  period: string;
  location?: string;
}

export interface CourseItem {
  name: string;
  detail?: string;
  placeholder?: boolean;
}

export interface AchievementItem {
  title: string;
  detail: string;
  placeholder?: boolean;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  placeholder?: boolean;
}

export interface VolunteerItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  placeholder?: boolean;
}

export interface ReferenceItem {
  name: string;
  title: string;
  relationship: string;
  quote: string;
  contact?: string;
  placeholder?: boolean;
}