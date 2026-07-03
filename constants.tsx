import { Github, Linkedin, Mail } from 'lucide-react';
import {
  NavItem, SocialLink, ExperienceItem, ProjectItem, SkillCategory,
  VolunteerItem, ReferenceItem, EducationInfo, CourseItem, AchievementItem, CertificationItem,
} from './types';

// Nav items removed as per request to remove tabs, but keeping type for safety if needed
export const NAV_ITEMS: NavItem[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/chaturvediaksh1304-sudo', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aksh-chaturvedi/', icon: Linkedin },
  { name: 'Email', url: 'mailto:chaturvedi.aksh1304@gmail.com', icon: Mail },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Chartwells',
    title: 'Product & Graphic Intern',
    url: '#',
    start: 'Jan 2024',
    end: 'Present',
    description: [
      'Designed 1,000+ graphics across CMU Dining — menus, events, social, and digital screens — and produced PepsiCo-aligned brand assets to partner standards, working cross-functionally with marketing and operations.'
    ],
    tech: ['Adobe Creative Suite', 'After Effects', 'Premiere Pro', 'InDesign', 'Figma'],
    tags: ['Design', 'Brand', 'Marketing']
  },
  {
    company: 'Central Michigan University',
    title: 'Undergraduate Teaching Assistant',
    url: '#',
    start: 'Aug 2025',
    end: 'Present',
    description: [
      'Supported 100+ students per semester in Python, Java, C++, and JavaScript, and cut recurring errors ~30% through structured debugging sessions.'
    ],
    tech: ['Python', 'Java', 'C++', 'JavaScript', 'Mentoring'],
    tags: ['Teaching', 'CS', 'Mentorship']
  },
  {
    company: 'BeReal',
    title: 'Product Management Extern',
    url: '#',
    start: 'Jan 2026',
    end: 'Present',
    description: [
      'Built a clickable Canva prototype for a Gen Z social feature, ran user research and a competitor teardown into PRD priorities, and used Python + SQL for lightweight analysis.'
    ],
    tech: ['Product Management', 'User Research', 'Canva', 'Python', 'SQL'],
    tags: ['Product', 'Research', 'Gen-Z']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'XSkill',
    description: 'Peer-to-peer skill exchange — a full-stack, LLM-powered platform where people trade skills using a credits system. Built solo: auth, matchmaking, automated scheduling, responsive multi-mode UI.',
    tech: ['Next.js 14', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'GitLab CI/CD'],
    github: 'https://github.com/chaturvediaksh1304-sudo/X-skill-NEW',
    external: 'https://x-skill-demo.vercel.app'
  },
  {
    title: 'HeadcountIQ',
    description: 'Workforce analytics for People teams — from spreadsheet chaos to a live dashboard tracking hiring velocity, attrition risk, and headcount planning. Python ETL → PostgreSQL → FastAPI → Next.js.',
    tech: ['Python 3.11', 'FastAPI', 'PostgreSQL', 'Supabase', 'Next.js 14', 'Recharts', 'GitHub Actions', 'Railway', 'Vercel'],
    github: 'https://github.com/chaturvediaksh1304-sudo/headcountiq'
  },
  {
    title: 'Grab — Shoppers Insider',
    description: 'Resale price trends + ML-powered forecasts for fashion. Charts Google Trends demand against a resale index and runs a Prophet model to forecast the next 30 days as UP / DOWN / STABLE with confidence.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'Prophet', 'pytrends', 'Recharts', 'Vercel', 'Render'],
    github: 'https://github.com/chaturvediaksh1304-sudo/grab-shoppers-insider',
    external: 'https://grab-shoppers-insider.vercel.app'
  },
  {
    title: 'VaultScan',
    description: 'Real-time transaction fraud detection with a cinematic dark dashboard. An Isolation Forest scores every streaming transaction 0–100, flags anomalies with feature-level risk explanations, and pushes them to a live WebSocket dashboard in milliseconds.',
    tech: ['Python', 'scikit-learn', 'Isolation Forest', 'FastAPI', 'WebSockets', 'React 18', 'TypeScript', 'Docker'],
    github: 'https://github.com/chaturvediaksh1304-sudo/VaultScan',
    external: 'https://vault-scan-beta.vercel.app'
  },
  {
    title: 'News-to-Trade Agent',
    description: 'A multi-agent pipeline that turns S&P 500 news into paper trades — a numeric screener narrows the field, an LLM debate swarm argues each thesis, and trades execute on Alpaca, with every decision written to a public reasoning log and Next.js dashboard.',
    tech: ['Python', 'Multi-Agent LLM', 'Alpaca API', 'Next.js', 'TypeScript'],
    github: 'https://github.com/chaturvediaksh1304-sudo/news-to-trade-agent',
    external: 'https://news-to-trade-agent.vercel.app'
  },
  {
    title: 'Atmos — Smart Thermostat',
    description: 'An immersive iOS experience built for Apple’s Swift Student Challenge 2026. Blends real-time environmental data with fluid animations and an on-device CoreML pipeline — complex data made minimal.',
    tech: ['SwiftUI', 'Swift', 'CoreML', 'PyTorch', 'FastAPI', 'MVVM', 'Adobe Creative Cloud'],
    github: 'https://github.com/chaturvediaksh1304-sudo/Atmos'
  },
  {
    title: 'Hand Tracking Studio',
    description: 'A browser-based hand-tracking playground — draw neon Cat’s Cradle string art in the air, or finger-spell ASL into text with SignScript. Real-time gesture recognition running entirely client-side, no install.',
    tech: ['JavaScript', 'MediaPipe', 'TensorFlow.js', 'Handpose', 'Fingerpose', 'HTML5 Canvas'],
    github: 'https://github.com/chaturvediaksh1304-sudo/hand-tracking-studio'
  },
  {
    title: 'College Course Recommendation System',
    description: 'AI-powered recommendation engine improving course-interest alignment by 30%. Inference across 10,000+ academic records with <1.5s backend response time.',
    tech: ['Java', 'Spring Boot', 'JavaFX', 'MySQL', 'Maven', 'REST APIs'],
    github: 'https://github.com/chaturvediaksh1304-sudo/College-Course-Recommendation-System'
  },
  {
    title: 'AI Agent System',
    description: 'Distributed AI agent achieving 80%+ task completion accuracy. Scaled to 1,000+ concurrent tasks with 99% uptime using prompt orchestration and containerized infrastructure.',
    tech: ['Python', 'LLM APIs', 'FastAPI', 'Docker', 'CI/CD'],
    github: 'https://github.com/chaturvediaksh1304-sudo/AI-Agent'
  }
];

// ——— Education page (sourced from LinkedIn profile + resume) ———

export const EDUCATION: EducationInfo = {
  school: 'Central Michigan University',
  degree: 'Bachelor of Science, Computer Science',
  minor: 'Minor in Multimedia Design',
  honors: 'Magna Cum Laude',
  period: 'Class of 2026',
  location: 'Mount Pleasant, Michigan',
};

export const VOLUNTEER: VolunteerItem[] = [
  {
    organization: 'CMU Student Government Association',
    role: 'Director of Media and Public Relations',
    period: 'Jun 2025 – May 2026',
    description:
      'Led media and PR for the student body — campaigns, communications, and community building across campus. A masterclass in leadership, communication, and collaboration.',
  },
  {
    organization: 'Adobe',
    role: 'Student Ambassador',
    period: 'Jul 2024 – Present',
    description:
      'Represented Adobe on campus — running creative workshops and helping students get the most out of Creative Cloud.',
  },
];

export const COURSES: CourseItem[] = [
  { name: 'ENT 300 — New Venture Creation', detail: 'Validation, data-driven decisions, and the New Venture Challenge (built MANK Studios).' },
  { name: '[Course name]', detail: '[Placeholder — edit COURSES in constants.tsx with notable coursework.]', placeholder: true },
  { name: '[Course name]', detail: '[Placeholder — edit COURSES in constants.tsx with notable coursework.]', placeholder: true },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { title: 'Magna Cum Laude', detail: 'Graduated with distinction — B.S. Computer Science, Central Michigan University.' },
  { title: 'NACUFS Loyal E. Horton Award — Bronze', detail: 'Residential Special Event of the Year: graphics & signage for CMU Dining, three years running.' },
  { title: 'New Venture Challenge', detail: 'Pitched MANK Studios at CMU’s New Venture Challenge — from ideation to validated launch.' },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte (Forage)' },
  { name: '[Certification name]', issuer: '[Issuer — placeholder, edit CERTIFICATIONS in constants.tsx.]', placeholder: true },
];

// PLACEHOLDER CONTENT — replace with real references (with their permission) before sharing publicly.
export const REFERENCES: ReferenceItem[] = [
  {
    name: '[Reference name]',
    title: '[Their title & organization]',
    relationship: '[How they know you — e.g. Internship supervisor]',
    quote: '[A short quote or note from them. This is placeholder text — edit REFERENCES in constants.tsx.]',
    placeholder: true,
  },
  {
    name: '[Reference name]',
    title: '[Their title & organization]',
    relationship: '[How they know you]',
    quote: '[A short quote or note from them. This is placeholder text — edit REFERENCES in constants.tsx.]',
    placeholder: true,
  },
];

// Skills — sourced from resume (linkedin.com/in/akshchaturvedi)
export const SKILLS: SkillCategory[] = [
  {
    name: 'Engineering',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Next.js', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    name: 'Design',
    skills: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro', 'Framer', 'Multimedia Design']
  },
  {
    name: 'Marketing',
    skills: ['SEO', 'Content Strategy', 'Conversion Optimization', 'Data-Driven Strategy', 'Trend Prediction', 'Data Analytics Software']
  },
  {
    name: 'Ways of working',
    skills: ['Agile', 'Scrum', 'Slack', 'Notion']
  }
];