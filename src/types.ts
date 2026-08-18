export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  metrics?: string[];
  technologies: string[];
  category: 'Leadership' | 'Frontend' | 'Full-Stack' | 'Mobile';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  environment: string[];
  description: string;
  keyContributions: string[];
  tags: string[];
  platforms: ('Web' | 'Mobile' | 'Cloud' | 'Enterprise')[];
  featured?: boolean;
  appStoreLinks?: {
    playStore?: boolean;
    appStore?: boolean;
  };
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient' | 'Actively Exploring';
    years: string;
    highlight?: boolean;
    usedIn: string[];
  }[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
  category: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  scoreType: string;
  period?: string;
  highlight?: string;
}

export interface ContactDetails {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedIn: string;
  location: string;
  availability: string;
  summary: string;
}
