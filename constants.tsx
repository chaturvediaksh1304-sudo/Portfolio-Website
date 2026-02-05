import { 
  Github, Linkedin, Mail, Terminal, Database, Globe, Cpu, Layout, Server, Code, 
  Layers, Cloud, Box, GitBranch, Trello, Slack, Activity, FileJson, Settings
} from 'lucide-react';
import { NavItem, SocialLink, ExperienceItem, ProjectItem, SkillCategory } from './types';

// Nav items removed as per request to remove tabs, but keeping type for safety if needed
export const NAV_ITEMS: NavItem[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/chaturvediaksh1304-sudo', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aksh-chaturvedi/', icon: Linkedin },
  { name: 'Email', url: 'mailto:chaturvedi.aksh1304@gmail.com', icon: Mail },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'BeReal',
    title: 'Product Management Extern',
    url: '#',
    start: 'Jan 2026',
    end: 'Present',
    description: [
      'Build a clickable Canva prototype for a Gen Z social feature, mapping key user flows and interaction states.',
      'Run user research plus competitor teardown in Google Sheets, then convert insights into PRD priorities.',
      'Collaborate with peers in Slack and support lightweight analysis/automation using Python and SQL.'
    ],
    tech: ['Product Management', 'Python', 'SQL', 'Canva', 'User Research', 'UI/UX']
  },
  {
    company: 'Central Michigan University',
    title: 'Undergraduate Teaching Assistant',
    url: '#',
    start: 'Aug 2025',
    end: 'Present',
    description: [
      'Support 100+ students per semester in programming and web development using Python, Java, C++, and JavaScript.',
      'Debug algorithms, data structures, and web applications, reducing recurring errors by ~30%.',
      'Assist with version control, CI/CD pipelines, and deployment fundamentals to build real-world skills.'
    ],
    tech: ['Python', 'Java', 'C++', 'JavaScript', 'Mentoring']
  },
  {
    company: 'Chartwells at Central Michigan University',
    title: 'Product & Graphic Intern',
    url: '#',
    start: 'Jan 2024',
    end: 'Present',
    description: [
      'Designed 1,000+ graphics for CMU Dining promotions, menus, events, and social media using Adobe Creative Suite.',
      'Created PepsiCo-aligned creative assets and followed brand guidelines to ensure consistent, compliant designs.',
      'Collaborated with marketing and dining teams to plan and deliver campus-wide promotional and branding campaigns.',
      'Produced static and animated content for screens, menus, events, and social media.'
    ],
    tech: ['UI/UX', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere Pro', 'Lightroom', 'Audition', 'Framer', 'Dreamweaver' ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'XSkill',
    description: 'A full-stack skill-exchange app with a credits-based learning system. Features include responsive UI with multiple user modes, JWT authentication, matchmaking, and automated scheduling.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/chaturvediaksh1304-sudo', 
    external: 'https://x-skill-demo.vercel.app',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
  },
  {
    title: 'College Course Recommendation System',
    description: 'AI-powered recommendation system improving course-interest alignment by 30%. Leveraged AI inference across 10,000+ academic records and optimized backend services for <1.5sec response time.',
    tech: ['Java', 'Spring Boot', 'JavaFX', 'MySQL', 'Maven', 'REST APIs'],
    github: 'https://github.com/chaturvediaksh1304-sudo/College-Course-Recommendation-System',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'AI Agent System',
    description: 'Autonomous AI agent using distributed systems achieving 80%+ task completion accuracy. Scaled workflows to handle 1,000+ concurrent tasks with 99% uptime using prompt orchestration.',
    tech: ['Python', 'LLM APIs', 'FastAPI', 'Docker', 'CI/CD'],
    github: 'https://github.com/chaturvediaksh1304-sudo/AI-Agent',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'CPS 165 Website',
    description: 'A comprehensive web development course project demonstrating mastery of frontend fundamentals, responsive design principles, and modern web accessibility standards.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/chaturvediaksh1304-sudo/CPS-165-Website',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop'
  }
];

// Expanded skill list matching the resume for the circular animation
export const SKILL_LIST = [
  // Languages
  { name: 'Python', icon: Terminal, url: 'https://www.python.org/' },
  { name: 'Java', icon: Code, url: 'https://dev.java/' },
  { name: 'JavaScript', icon: Code, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: Code, url: 'https://www.typescriptlang.org/' },
  { name: 'SQL', icon: Database, url: 'https://en.wikipedia.org/wiki/SQL' },
  { name: 'C++', icon: Cpu, url: 'https://isocpp.org/' },
  { name: 'HTML', icon: Layout, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: Layout, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  // Frameworks
  { name: 'FastAPI', icon: Server, url: 'https://fastapi.tiangolo.com/' },
  { name: 'Spring Boot', icon: Server, url: 'https://spring.io/projects/spring-boot' },
  { name: 'Next.js', icon: Globe, url: 'https://nextjs.org/' },
  { name: 'Tailwind', icon: Layout, url: 'https://tailwindcss.com/' },
  { name: 'JavaFX', icon: Layout, url: 'https://openjfx.io/' },
  // Cloud & DevOps
  { name: 'AWS', icon: Cloud, url: 'https://aws.amazon.com/' },
  { name: 'Docker', icon: Box, url: 'https://www.docker.com/' },
  { name: 'Git', icon: GitBranch, url: 'https://git-scm.com/' },
  { name: 'GitLab', icon: GitBranch, url: 'https://about.gitlab.com/' },
  { name: 'Actions', icon: Github, url: 'https://github.com/features/actions' },
  { name: 'Vercel', icon: Cloud, url: 'https://vercel.com/' },
  { name: 'Render', icon: Cloud, url: 'https://render.com/' },
  { name: 'Railway', icon: Cloud, url: 'https://railway.app/' },
  // DB & Tools
  { name: 'Framer', icon: Database, url: 'https://www.framer.com' },
  { name: 'Postgres', icon: Database, url: 'https://www.postgresql.org/' },
  { name: 'MySQL', icon: Database, url: 'https://www.mysql.com/' },
  { name: 'Supabase', icon: Database, url: 'https://supabase.com/' },
  { name: 'REST APIs', icon: FileJson, url: 'https://restfulapi.net/' },
  { name: 'Agile', icon: Trello, url: 'https://www.atlassian.com/agile' },
  { name: 'Scrum', icon: Activity, url: 'https://www.scrum.org/' },
  { name: 'Slack', icon: Slack, url: 'https://slack.com/' },
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'HTML', 'CSS']
  },
  {
    name: 'Frameworks',
    skills: ['FastAPI', 'Spring Boot', 'Next.js', 'Tailwind CSS', 'JavaFX']
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS (EC2, Lambda)', 'Docker', 'Git', 'GitLab CI/CD', 'GitHub Actions', 'Vercel', 'Render', 'Railway']
  },
  {
    name: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'REST APIs', 'Agile', 'Scrum', 'Slack']
  }
];
