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
    company: 'Chartwells Higher Ed — CMU Dining',
    title: 'Product & Graphic Intern',
    url: '#',
    start: 'Jan 2024',
    end: 'May 2026',
    description: [
      'Designed 1,000+ graphics across CMU Dining — menus, events, social, and digital screens — and produced PepsiCo-aligned brand assets to partner standards, working cross-functionally with marketing and operations.'
    ],
    tech: ['Adobe Creative Suite', 'After Effects', 'Premiere Pro', 'InDesign', 'Figma'],
    tags: ['Design', 'Brand', 'Marketing']
  },
  {
    company: 'Adobe',
    title: 'Student Ambassador',
    url: '#',
    start: 'Jul 2024',
    end: 'Present',
    description: [
      'Built workflow-automation scripts with generative AI tooling (Claude, Copilot, Adobe Firefly) and analyzed API-integration latency and reliability gaps across distributed cloud pipelines through structured log analysis. Communicated technical findings to mixed audiences across 15+ workshops with 500+ attendees.'
    ],
    tech: ['Generative AI', 'Claude', 'Copilot', 'Adobe Firefly', 'Log Analysis'],
    tags: ['AI Tooling', 'Cloud', 'Comms']
  },
  {
    company: 'Central Michigan University',
    title: 'Undergraduate Teaching Assistant',
    url: '#',
    start: 'Aug 2025',
    end: 'May 2026',
    description: [
      'Supported 100+ students per semester in Python, Java, C++, and JavaScript, and cut recurring errors ~30% through structured debugging sessions.'
    ],
    tech: ['Python', 'Java', 'C++', 'JavaScript', 'Mentoring'],
    tags: ['Teaching', 'CS', 'Mentorship']
  },
  {
    company: 'MANK Studios',
    title: 'Co-founder & Lead Engineer',
    url: '#',
    start: 'Nov 2025',
    end: 'Present',
    description: [
      'Architected and own production agentic pipelines end-to-end on Linux — Python fault-detection and retry logic that catches and classifies failure modes live. Used Claude and LLM APIs to redesign internal engineering workflows, and containerized the full stack with Docker + automated CI/CD, cutting deployment errors ~50%.'
    ],
    tech: ['Python', 'LLM APIs', 'Docker', 'CI/CD', 'Linux'],
    tags: ['Agentic AI', 'DevOps', 'Founder']
  },
  {
    company: 'BeReal',
    title: 'Product Management Extern',
    url: '#',
    start: 'Jan 2026',
    end: 'March 2026',
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
  gpa: 'GPA 3.86',
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

// Curated from the official CMU transcript — the courses most relevant to the work.
export const COURSES: CourseItem[] = [
  { name: 'Advanced Data Structures & Algorithms', detail: 'CPS 340 · core algorithms and complexity' },
  { name: 'Computer Design & Architecture', detail: 'CPS 360 · how machines actually run' },
  { name: 'Introduction to Operating Systems', detail: 'CPS 470 · concurrency, memory, scheduling' },
  { name: 'Programming Language Concepts', detail: 'CPS 450 · language design and paradigms' },
  { name: 'Databases and Applications', detail: 'ITC 341 · relational modeling and SQL' },
  { name: 'Senior Design I & II', detail: 'CPS 410 / CPS 498 · year-long capstone build' },
  { name: 'Linear Algebra & Matrix Theory', detail: 'MTH 223 · the math behind ML' },
  { name: 'Elementary Statistical Analysis', detail: 'STA 382 · statistics for data work' },
  { name: 'Digital Entrepreneurship', detail: 'ENT 300 · validation and go-to-market (MANK Studios)' },
  { name: 'Advanced Multimedia Design', detail: 'CPS 382 · the design half of the toolkit' },
];

// Honors from LinkedIn honors page (Central Michigan University).
export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Williams & Koerner Scholarship in Art & Design',
    issuer: 'CMU · College of the Arts and Media, Dept. of Art & Design',
    date: 'May 2025',
    detail: 'Competitive scholarship recognizing academic excellence and creative promise in Art & Design — first preference to Multimedia Design minors.',
  },
  {
    title: 'Roger and Kay Lee Endowed Scholarship in Computer Science',
    issuer: 'CMU · Department of Computer Science',
    date: 'Apr 2025',
    detail: 'Departmental scholarship for a CS major maintaining a 3.5+ GPA, recognizing academic excellence and commitment to the field.',
  },
  {
    title: 'International President’s Award',
    issuer: 'CMU · Department of Computer Science',
    date: 'Sep 2022',
    detail: 'Recognizes strong academic performance, leadership, and dedication to computer science (minimum 3.5 GPA).',
  },
  {
    title: 'Leadership Commitment Award',
    issuer: 'CMU Student Government Association',
    detail: 'For unwavering commitment, reliability, and consistent leadership contributing to the SGA’s effectiveness and accountability.',
  },
];

// Full list from LinkedIn licenses & certifications. Education page shows 3, expands for the rest.
export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'Introduction to Subagents', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'AI Capabilities and Limitations', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Building with the Claude API', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude Platform 101', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'AI Fluency for Students', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude Code 101', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude 101', issuer: 'Anthropic', date: 'May 2026' },
  { name: 'Deloitte Australia — Data Analytics Job Simulation', issuer: 'Forage', date: 'May 2026' },
  { name: 'JPMorganChase — Software Engineering Job Simulation', issuer: 'Forage', date: 'Jan 2026' },
  { name: 'CI/CD with GitLab: Automating DevOps Pipelines', issuer: 'Coursera', date: 'Jan 2026' },
  { name: 'Python Development with ChatGPT: Fullstack App Development', issuer: 'Coursera', date: 'Dec 2025' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM', date: 'Jan 2026' },
  { name: 'Programming for Everybody (Getting Started with Python)', issuer: 'University of Michigan', date: 'Dec 2025' },
  { name: 'Exploring Artificial Intelligence Use Cases and Applications', issuer: 'Amazon Web Services', date: 'Dec 2025' },
  { name: 'Fundamentals of Machine Learning and Artificial Intelligence', issuer: 'Amazon Web Services', date: 'Dec 2025' },
  { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', date: 'Nov 2025' },
  { name: 'Aboveboard for Student Leaders', issuer: 'Plaid, LLC', date: 'Jun 2025' },
  { name: 'Highwire Program', issuer: 'Plaid, LLC', date: 'Jun 2025' },
];

// Professional & academic references. Work/university emails only (no personal phone numbers).
export const REFERENCES: ReferenceItem[] = [
  {
    name: 'Amy Probst',
    occupation: 'Sr. Marketing Director',
    organization: 'Chartwells Higher Education',
    relationship: 'Direct supervisor — CMU Dining Marketing (2+ years)',
    location: 'Mount Pleasant, Michigan',
    email: 'amy.probst@compass-usa.com',
  },
  {
    name: 'Jessica Lee',
    occupation: 'Marketing Manager',
    organization: 'Chartwells Higher Education',
    relationship: 'Supervisor — CMU Dining Marketing',
    location: 'Mount Pleasant, Michigan',
    email: 'jessica.lee@compass-usa.com',
  },
  {
    name: 'Dr. Patrick G. Kinnicutt',
    occupation: 'Chairperson, Computer Science',
    organization: 'Central Michigan University',
    relationship: 'Senior Design advisor · CS Department Chair',
    location: 'Mount Pleasant, Michigan',
    email: 'kinni1p@cmich.edu',
  },
  {
    name: 'Dr. John Gustincic',
    occupation: 'Faculty, Entrepreneurship',
    organization: 'Central Michigan University',
    relationship: 'Entrepreneurship professor · New Venture Challenge mentor',
    location: 'Mount Pleasant, Michigan',
    email: 'gusti1j@cmich.edu',
  },
  {
    name: 'Dr. Dylan Kelly',
    occupation: 'Faculty, Computer Science',
    organization: 'Central Michigan University',
    relationship: 'CS professor · data structures, Python & multimedia',
    location: 'Mount Pleasant, Michigan',
    email: 'kelly1dg@cmich.edu',
  },
  {
    name: 'Howard Haines',
    occupation: 'Faculty, Entrepreneurship',
    organization: 'Central Michigan University',
    relationship: 'Entrepreneurship professor · ENT 300',
    location: 'Mount Pleasant, Michigan',
    email: 'haine1h@cmich.edu',
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