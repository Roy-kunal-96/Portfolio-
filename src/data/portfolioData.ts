import { ContactDetails, EducationItem, ExperienceItem, MetricItem, ProjectItem, SkillCategory } from '../types';

export const personalInfo: ContactDetails = {
  name: 'Kunal Ranjan',
  title: 'Team Lead | Frontend & Full-Stack Developer',
  email: 'roykunal22@outlook.com',
  phone: '+91 7011126446',
  linkedIn: 'https://linkedin.com/in/kunalroy',
  location: 'Noida / Delhi NCR, India',
  availability: 'Open to Leadership & Senior Full-Stack Opportunities',
  summary: 'Team Lead and Software Engineer with 7+ years of experience in frontend and full-stack application development, specializing in Angular, Python, and Azure. Experienced in leading development teams and delivering scalable web and mobile applications from requirement analysis through development, deployment, and production support. Strong background in application enhancement, performance optimization, code reviews, release management, and stakeholder collaboration. Actively exploring and building with Generative AI, Agentic AI, LLMs, and RAG (Retrieval-Augmented Generation) architectures for next-generation enterprise applications.'
};

export const keyMetrics: MetricItem[] = [
  {
    id: 'exp',
    value: '7+ Years',
    label: 'Industry Experience',
    description: 'Specializing in Enterprise Frontend, Python Backend, Azure Cloud, and Technical Leadership',
    category: 'Tenure',
    icon: 'Briefcase'
  },
  {
    id: 'perf',
    value: '+10%',
    label: 'Application Performance Boost',
    description: 'Achieved through Angular optimization, lazy loading, code splitting, and reusable components',
    category: 'Optimization',
    icon: 'Zap'
  },
  {
    id: 'bundle',
    value: '-5%',
    label: 'Initial Load Time Reduction',
    description: 'Engineered frontend bundle size reduction, rendering optimization, and dependency tuning',
    category: 'Speed',
    icon: 'Gauge'
  },
  {
    id: 'cicd',
    value: '+20%',
    label: 'CI/CD Pipeline Speedup',
    description: 'Optimized GitHub Actions automated workflows, shortening build and deployment execution time',
    category: 'DevOps',
    icon: 'GitPullRequest'
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'prudent',
    role: 'Team Lead',
    company: 'Prudent Insurance Brokers Pvt. Ltd.',
    location: 'Noida / Delhi NCR',
    period: '12 June 2023 – Present',
    startDate: '2023-06',
    endDate: 'Present',
    isCurrent: true,
    category: 'Leadership',
    summary: 'Leading development activities across multiple Prudent Plus web and mobile applications, orchestrating product enhancements, cloud architecture, and end-to-end engineering deliverables.',
    responsibilities: [
      'Lead and coordinate the engineering team, including task allocation, technical mentoring, code reviews, and delivery tracking.',
      'Drive end-to-end development across requirement analysis, implementation, testing, Azure deployment, and production support.',
      'Develop and maintain high-performance frontend applications using Angular and scalable backend microservices using Python.',
      'Architect and orchestrate cloud infrastructure and deployment pipelines on Microsoft Azure.',
      'Collaborate with executive and business stakeholders to translate insurance workflows into resilient technical solutions.',
      'Troubleshoot critical production issues, optimize system latency, and support continuous product evolution.',
      'Drive release management, versioning strategies, and uphold strict code quality and security standards.'
    ],
    metrics: [
      'Improved application performance by up to 10% through Angular optimization, lazy loading, code splitting, and modular components.',
      'Reduced initial application load time by ~5% through bundle optimization and dependency pruning.',
      'Accelerated GitHub Actions CI/CD workflows by 20% through build pipeline optimization.'
    ],
    technologies: [
      'Angular',
      'Python',
      'Azure',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS',
      'RxJS',
      'Git',
      'REST APIs',
      'GitHub Actions'
    ]
  },
  {
    id: 'dew',
    role: 'Software Developer',
    company: 'Dew Solutions Pvt. Ltd.',
    location: 'Noida, India',
    period: 'January 2023 – June 2023',
    startDate: '2023-01',
    endDate: '2023-06',
    category: 'Frontend',
    summary: 'Spearheaded frontend architecture on the Instant Rezolve enterprise web application, engineering dynamic forms and server-side rendering pipelines.',
    responsibilities: [
      'Developed reusable UI component library and implemented complex functional enhancements based on product roadmaps.',
      'Engineered dynamic forms and reactive state flows for rapid claim and issue resolution modules.',
      'Implemented web application optimizations, custom rendering routines, and Angular Server-Side Rendering (SSR).',
      'Managed module development lifecycle activities and supported high-availability application maintenance.'
    ],
    technologies: [
      'Angular 14',
      'Standalone Components',
      'Dynamic Forms',
      'HTML5',
      'JavaScript',
      'CSS',
      'TypeScript',
      'Redux',
      'NGRX',
      'RxJS',
      'Webpack',
      'Node.js',
      'Server-Side Rendering'
    ]
  },
  {
    id: 'newgen-2',
    role: 'Software Developer',
    company: 'Newgen Software Technologies Pvt. Ltd.',
    location: 'Noida, India',
    period: 'July 2022 – November 2022',
    startDate: '2022-07',
    endDate: '2022-11',
    category: 'Full-Stack',
    summary: 'Contributed to Newgen core product development team on the Record Management System (RMS), delivering high-security document handling capabilities.',
    responsibilities: [
      'Implemented complex business-driven application enhancements aligned with core enterprise requirements.',
      'Applied reactive state management and reactive programming patterns (NGRX, RxJS) for maintainable frontend workflows.',
      'Collaborated closely with cross-functional product management teams on high-throughput database interactions.'
    ],
    technologies: [
      'Angular',
      'HTML5',
      'JavaScript',
      'CSS',
      'TypeScript',
      'NGRX',
      'Redux',
      'RxJS',
      'Java',
      'Git',
      'SQL'
    ]
  },
  {
    id: 'delhivery',
    role: 'Senior Software Developer',
    company: 'Delhivery Limited',
    location: 'Gurgaon, India',
    period: 'February 2021 – July 2022',
    startDate: '2021-02',
    endDate: '2022-07',
    category: 'Mobile',
    summary: 'Delivered core features across Delhivery logistics dashboards, internal operational tools, and the official Delhivery mobile consumer application on iOS and Android.',
    responsibilities: [
      'Contributed to UI development and user experience enhancements for the Delhivery mobile application (published on Google Play Store & Apple App Store).',
      'Delivery.com — engineered high-traffic user interface components for logistics tracking and dispatching.',
      'STM Dashboard — built core tracking and fleet operational UI features with custom workflow integrations.',
      'DC Dashboard — implemented distribution center functional enhancements and real-time package monitoring.',
      'Developed reusable cross-platform libraries, streamlined release cycles, and supported AWS cloud deployments.'
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'Vue',
      'Golang',
      'Node.js',
      'Java',
      'Git',
      'Bitbucket',
      'AWS',
      'PostgreSQL',
      'MongoDB'
    ]
  },
  {
    id: 'dynapt',
    role: 'Software Developer',
    company: 'Dynapt Solution Pvt. Ltd.',
    location: 'Delhi, India',
    period: 'September 2020 – February 2021',
    startDate: '2020-09',
    endDate: '2021-02',
    category: 'Full-Stack',
    summary: 'Engineered web, mobile, and IoT integration projects including survey platforms, token display monitors, and Microsoft Graph API enterprise gateways.',
    responsibilities: [
      'TN Survey — developed a cross-platform Flutter survey application alongside MEAN stack web portals.',
      'QMS TV Display — built specialized Android application for real-time queue token display.',
      'PWC-CEC — engineered Android audio recording application to capture customer experience analytics.',
      'Strategy Connect — developed Node.js API gateways for Microsoft Teams & Office 365 automation with Microsoft Graph API.',
      'Designed and developed Dynapt website and extended ERT web functionality, successfully remediating penetration-testing vulnerabilities.'
    ],
    technologies: [
      'Angular 6/7/8',
      'Node.js',
      'Flutter',
      'Android',
      'Microsoft Teams Graph API',
      'Azure',
      'Git',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'MongoDB',
      'JSON',
      'Ionic'
    ]
  },
  {
    id: 'newgen-1',
    role: 'Software Developer',
    company: 'Newgen Software Technologies Pvt. Ltd.',
    location: 'Noida, India',
    period: 'March 2019 – September 2020',
    startDate: '2019-03',
    endDate: '2020-09',
    category: 'Full-Stack',
    summary: 'Engineered mission-critical enterprise modules for ICICI Bank Trade Finance department, delivering high-reliability banking workflows.',
    responsibilities: [
      'Delivered core trade finance modules including Deviation Tracker, Transaction Module, Bank Guarantee, and Outward Remittance.',
      'Developed enterprise web applications complying with rigorous banking architectural and security standards.',
      'Collaborated directly with bank stakeholders and third-party vendors to assess feasibility and design technical solutions.',
      'Conducted performance optimization, bug fixing, patch releases, and customized Newgen enterprise products (iForm, iBPS, OmniDocs, OmniScan).'
    ],
    technologies: [
      'Angular',
      'HTML5',
      'JavaScript',
      'CSS',
      'jQuery',
      'TypeScript',
      'JSON',
      'AJAX',
      'Java EE',
      'Spring',
      'WebLogic',
      'JBoss',
      'SQL Developer',
      'SVN',
      'Newgen iForm',
      'iBPS',
      'OmniDocs',
      'OmniScan'
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'prudent-plus',
    title: 'Prudent Plus — Insurance Web & Mobile Ecosystem',
    subtitle: 'Enterprise Policy Management, Claims & Quotation Platform',
    company: 'Prudent Insurance Brokers Pvt. Ltd.',
    environment: ['Angular', 'Python', 'Azure', 'RxJS', 'REST APIs', 'GitHub Actions'],
    description: 'Comprehensive insurance technology platform empowering corporate and retail clients with instant policy renewals, claims settlement tracking, and quotation analytics.',
    keyContributions: [
      'Leading technical delivery, mentoring developers, and steering code quality across frontend and Python services.',
      'Architected cloud deployment pipeline on Microsoft Azure and implemented GitHub Actions CI/CD workflows (+20% speedup).',
      'Optimized Angular bundles and lazy-loading architecture, securing a 10% performance gain and 5% faster initial load time.',
      'Integrated real-time notification hooks and high-volume REST APIs with seamless error recovery.'
    ],
    tags: ['Insurance Tech', 'Angular', 'Python', 'Azure', 'Team Lead', 'CI/CD'],
    platforms: ['Web', 'Mobile', 'Cloud', 'Enterprise'],
    featured: true
  },
  {
    id: 'delhivery-mobile',
    title: 'Delhivery Mobile Application & Operations Dashboards',
    subtitle: 'Nationwide Logistics & Package Tracking Mobile Platform',
    company: 'Delhivery Limited',
    environment: ['Angular', 'JavaScript', 'TypeScript', 'Mobile', 'AWS', 'PostgreSQL'],
    description: 'Flagship consumer and operations mobile application handling millions of logistics shipments, real-time dispatch tracking, and user order fulfillment across India.',
    keyContributions: [
      'Contributed to core UI/UX and feature engineering for the mobile application on both Google Play Store and Apple App Store.',
      'Engineered Delivery.com client-facing user interfaces and operational tracking screens.',
      'Developed STM & DC Dashboards providing logistics personnel with instant shipment tracking and route optimizations.',
      'Built modular, reusable UI components that accelerated cross-team feature delivery.'
    ],
    tags: ['Logistics', 'Mobile App', 'Google Play Store', 'Apple App Store', 'Real-Time Tracking'],
    platforms: ['Mobile', 'Web', 'Enterprise'],
    featured: true,
    appStoreLinks: {
      playStore: true,
      appStore: true
    }
  },
  {
    id: 'instant-rezolve',
    title: 'Instant Rezolve Web Platform',
    subtitle: 'Dynamic Dispute & Claim Resolution Architecture',
    company: 'Dew Solutions Pvt. Ltd.',
    environment: ['Angular 14', 'Standalone Components', 'Dynamic Forms', 'Redux', 'NGRX', 'SSR', 'Node.js'],
    description: 'Modern enterprise solution facilitating high-speed complaint resolution, automated forms generation, and real-time state synchronization.',
    keyContributions: [
      'Engineered schema-driven dynamic forms and modular standalone components using Angular 14.',
      'Implemented Server-Side Rendering (SSR) for instant first contentful paint and SEO optimization.',
      'Structured reactive state management using NGRX and RxJS for asynchronous workflow management.'
    ],
    tags: ['Angular 14', 'Dynamic Forms', 'NGRX', 'SSR', 'Component Architecture'],
    platforms: ['Web', 'Enterprise'],
    featured: true
  },
  {
    id: 'icici-trade-finance',
    title: 'ICICI Bank — Trade Finance Enterprise Suite',
    subtitle: 'High-Volume Financial Banking Transaction System',
    company: 'Newgen Software Technologies / ICICI Bank',
    environment: ['Angular', 'Java EE', 'Spring', 'WebLogic', 'SQL Developer', 'OmniDocs', 'iBPS'],
    description: 'Mission-critical enterprise banking suite managing high-value trade finance workflows including Deviation Tracker, Bank Guarantee, Outward Remittance, and Transaction reconciliation.',
    keyContributions: [
      'Built and delivered Deviation Tracker, Transaction Module, Bank Guarantee, and Outward Remittance modules.',
      'Ensured strict compliance with banking cybersecurity and data integrity protocols.',
      'Optimized backend SQL queries and integrated Newgen iForm & OmniDocs enterprise content repository.'
    ],
    tags: ['FinTech', 'Banking', 'Trade Finance', 'Enterprise Security', 'Spring'],
    platforms: ['Web', 'Enterprise'],
    featured: true
  },
  {
    id: 'dynapt-mobility-suite',
    title: 'Dynapt Mobility & Enterprise Integration Suite',
    subtitle: 'Cross-Platform Mobile Apps, IoT Displays & Graph API Gateways',
    company: 'Dynapt Solution Pvt. Ltd.',
    environment: ['Flutter', 'Android', 'Node.js', 'Microsoft Graph API', 'Azure', 'Angular 8'],
    description: 'Suite of interconnected smart solutions: TN Survey (Flutter/MEAN), QMS TV Display (Android token system), PWC-CEC (Customer audio experience recorder), and Strategy Connect (Office 365 gateway).',
    keyContributions: [
      'Created cross-platform Flutter survey application with real-time offline sync capabilities.',
      'Built native Android token queue display app and audio recording application for customer analytics.',
      'Constructed Node.js API gateways integrating Microsoft Teams & Office 365 with MS Graph API.',
      'Audited security architecture and resolved penetration-testing vulnerabilities across web portals.'
    ],
    tags: ['Flutter', 'Android', 'MS Graph API', 'Node.js', 'Azure', 'IoT / Display'],
    platforms: ['Mobile', 'Web', 'Cloud']
  },
  {
    id: 'record-management-system',
    title: 'Enterprise Record Management System (RMS)',
    subtitle: 'High-Throughput Digital Document Management Platform',
    company: 'Newgen Software Technologies Pvt. Ltd.',
    environment: ['Angular', 'NGRX', 'Redux', 'RxJS', 'Java', 'SQL', 'Git'],
    description: 'High-throughput document archiving and record lifecycle management platform for enterprise clients handling millions of secure files.',
    keyContributions: [
      'Engineered reactive frontend workflows using NGRX and Redux state stores.',
      'Implemented robust access-controlled document viewing and indexing interfaces.',
      'Maintained tight integration between Angular UI and Java backend services.'
    ],
    tags: ['Document Management', 'Angular', 'NGRX', 'Enterprise Product'],
    platforms: ['Web', 'Enterprise']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Gen AI, Agentic AI & LLMs',
    iconName: 'Sparkles',
    skills: [
      { name: 'Generative AI & LLM APIs', level: 'Actively Exploring', years: 'R&D', highlight: true, usedIn: ['AI Proof of Concepts', 'Enterprise Automation'] },
      { name: 'Agentic AI & Multi-Agent Workflows', level: 'Actively Exploring', years: 'R&D', highlight: true, usedIn: ['Autonomous Task Execution', 'Tool-Use Pipelines'] },
      { name: 'RAG (Retrieval-Augmented Gen)', level: 'Actively Exploring', years: 'R&D', highlight: true, usedIn: ['Vector Databases', 'Contextual Knowledge Retrieval'] },
      { name: 'Prompt Engineering & Directives', level: 'Advanced', years: '2+ Years', highlight: true, usedIn: ['Structured Outputs', 'Function Calling', 'JSON Schemas'] },
      { name: 'Vector Embeddings & Semantic Search', level: 'Actively Exploring', years: 'R&D', usedIn: ['Similarity Matching', 'Document Chunking & Grounding'] },
      { name: 'AI-Assisted Full-Stack Dev', level: 'Advanced', years: '2+ Years', highlight: true, usedIn: ['Copilot / Claude / Gemini', 'Rapid Prototyping & Architecture'] }
    ]
  },
  {
    category: 'Frontend & UI Architecture',
    iconName: 'Layout',
    skills: [
      { name: 'Angular (v6 - 14+)', level: 'Expert', years: '7+ Years', highlight: true, usedIn: ['Prudent Insurance', 'Dew Solutions', 'Delhivery', 'Newgen', 'Dynapt'] },
      { name: 'TypeScript', level: 'Expert', years: '6+ Years', highlight: true, usedIn: ['Prudent Insurance', 'Dew Solutions', 'Delhivery', 'Newgen'] },
      { name: 'JavaScript (ES6+)', level: 'Expert', years: '7+ Years', highlight: true, usedIn: ['All Projects'] },
      { name: 'RxJS & Reactive State', level: 'Expert', years: '6+ Years', highlight: true, usedIn: ['Prudent Plus', 'Instant Rezolve', 'RMS'] },
      { name: 'NGRX & Redux', level: 'Advanced', years: '5+ Years', highlight: true, usedIn: ['Dew Solutions', 'Newgen RMS'] },
      { name: 'HTML5 & CSS3 / SASS', level: 'Expert', years: '7+ Years', usedIn: ['All Projects'] },
      { name: 'Dynamic Forms', level: 'Advanced', years: '4+ Years', usedIn: ['Dew Solutions', 'Newgen iForm'] },
      { name: 'Server-Side Rendering (SSR)', level: 'Advanced', years: '3+ Years', usedIn: ['Dew Solutions'] },
      { name: 'Vue.js', level: 'Proficient', years: '2+ Years', usedIn: ['Delhivery'] },
      { name: 'Webpack & Build Tools', level: 'Advanced', years: '5+ Years', usedIn: ['Prudent', 'Dew Solutions', 'Delhivery'] }
    ]
  },
  {
    category: 'Backend, APIs & Cloud',
    iconName: 'Server',
    skills: [
      { name: 'Python', level: 'Advanced', years: '4+ Years', highlight: true, usedIn: ['Prudent Insurance Backend Services'] },
      { name: 'Microsoft Azure', level: 'Advanced', years: '4+ Years', highlight: true, usedIn: ['Prudent Insurance', 'Dynapt'] },
      { name: 'Node.js & Express', level: 'Advanced', years: '5+ Years', highlight: true, usedIn: ['Delhivery', 'Dynapt Strategy Connect', 'Dew Solutions'] },
      { name: 'RESTful API Design', level: 'Expert', years: '7+ Years', highlight: true, usedIn: ['All Projects'] },
      { name: 'AWS (Amazon Web Services)', level: 'Proficient', years: '3+ Years', usedIn: ['Delhivery'] },
      { name: 'Microsoft Graph API', level: 'Advanced', years: '2+ Years', usedIn: ['Dynapt Strategy Connect'] },
      { name: 'Java / Java EE / Spring', level: 'Proficient', years: '3+ Years', usedIn: ['Newgen ICICI Trade Finance', 'Delhivery'] },
      { name: 'Golang', level: 'Proficient', years: '1+ Years', usedIn: ['Delhivery Microservices'] }
    ]
  },
  {
    category: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', years: '4+ Years', highlight: true, usedIn: ['Delhivery', 'Enterprise Apps'] },
      { name: 'MongoDB', level: 'Advanced', years: '4+ Years', usedIn: ['Delhivery', 'Dynapt MEAN'] },
      { name: 'SQL & Query Optimization', level: 'Advanced', years: '6+ Years', usedIn: ['ICICI Bank', 'Newgen', 'Delhivery'] },
      { name: 'SQL Developer / Oracle', level: 'Advanced', years: '4+ Years', usedIn: ['ICICI Bank Trade Finance'] }
    ]
  },
  {
    category: 'Mobile & IoT Development',
    iconName: 'Smartphone',
    skills: [
      { name: 'Android Native', level: 'Advanced', years: '3+ Years', highlight: true, usedIn: ['QMS TV Display', 'PWC-CEC', 'Delhivery'] },
      { name: 'Flutter', level: 'Advanced', years: '2+ Years', highlight: true, usedIn: ['TN Survey App'] },
      { name: 'Ionic Framework', level: 'Proficient', years: '2+ Years', usedIn: ['Dynapt Mobile Modules'] },
      { name: 'Cross-Platform Release', level: 'Advanced', years: '4+ Years', usedIn: ['Delhivery (Play Store & App Store)'] }
    ]
  },
  {
    category: 'Engineering Leadership & DevOps',
    iconName: 'Users',
    skills: [
      { name: 'Technical Team Leadership', level: 'Expert', years: '3+ Years', highlight: true, usedIn: ['Prudent Insurance'] },
      { name: 'Task Allocation & Mentoring', level: 'Expert', years: '4+ Years', highlight: true, usedIn: ['Prudent Insurance'] },
      { name: 'Code Review & Quality Standards', level: 'Expert', years: '6+ Years', highlight: true, usedIn: ['Prudent', 'Delhivery', 'Newgen'] },
      { name: 'GitHub Actions CI/CD', level: 'Advanced', years: '3+ Years', highlight: true, usedIn: ['Prudent Insurance (20% Speedup)'] },
      { name: 'Git & Bitbucket', level: 'Expert', years: '7+ Years', usedIn: ['All Projects'] },
      { name: 'Release Management', level: 'Expert', years: '5+ Years', usedIn: ['Prudent', 'Delhivery', 'ICICI Bank'] },
      { name: 'Stakeholder Collaboration', level: 'Expert', years: '5+ Years', usedIn: ['Prudent Insurance', 'ICICI Bank', 'Dynapt'] }
    ]
  }
];

export const educations: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'Maharaja Surajmal Institute of Technology',
    score: '8.0',
    scoreType: 'CGPA',
    highlight: 'Rigorous foundation in Data Structures, Algorithms, Distributed Systems, Software Engineering, and Database Architecture.'
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC - 12th Standard)',
    institution: 'Saint Tularam Public School, Delhi',
    score: '90%',
    scoreType: 'Percentage',
    highlight: 'Major in Physics, Chemistry, and Mathematics (PCM).'
  },
  {
    id: 'matric',
    degree: 'Matriculation (10th Standard)',
    institution: 'Saint Joseph’s School, Bhagalpur',
    score: '87%',
    scoreType: 'Percentage',
    highlight: 'Distinction in Mathematics and Science.'
  }
];

export const languages = [
  { name: 'English', proficiency: 'Professional Working & Technical Proficiency' },
  { name: 'Hindi', proficiency: 'Native / Fluent' },
  { name: 'Maithili', proficiency: 'Native / Fluent' }
];

export const currentExplorations = [
  {
    title: 'Generative AI & LLM Ecosystems',
    description: 'Architecting LLM-augmented microservices, exploring function calling, JSON schema enforcement, model grounding, and conversational agents.',
    badge: 'Active Exploration'
  },
  {
    title: 'Agentic AI & Autonomous Workflows',
    description: 'Investigating autonomous agent patterns, multi-agent collaboration, dynamic tool selection, reasoning loops (ReAct), and task decomposition.',
    badge: 'Agent Architecture'
  },
  {
    title: 'RAG (Retrieval-Augmented Generation)',
    description: 'Building contextual retrieval pipelines using vector embeddings, semantic search, document chunking, and knowledge base grounding for enterprise accuracy.',
    badge: 'RAG & Vector Search'
  },
  {
    title: 'Prompt Engineering & Structured Outputs',
    description: 'Crafting robust system directives, few-shot prompting strategies, and strict schema validation for deterministic enterprise decision-making.',
    badge: 'Prompt Systems'
  }
];
