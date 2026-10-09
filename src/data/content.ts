// ============================================================
// SINGLE SOURCE OF TRUTH — All portfolio content lives here.
// Fields marked [TO FILL] need real data from the owner.
// ============================================================

export interface OLevelSubject {
  subject: string;
  grade: string; // e.g. "A*" or "[TO FILL]"
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon: string }[];
}

export interface CourseGrade {
  course: string;
  grade: string;
}

export interface ActivityItem {
  title: string;
  points: string[];
}

// ─── Profile ────────────────────────────────────────────────
export const profile = {
  name: 'Abdur Rafey',
  taglines: [
    'AI Automation Engineer',
    'Agentic Systems Builder',
    'Full-Stack Developer',
    'DevOps Enthusiast',
    'Product Analyst',
  ],
  summary:
    'Motivated Computer Science graduate passionate about AI automation — building agentic systems that connect tools, streamline workflows and replace manual processes with intelligent, autonomous decision making.',
  location: 'Lahore, Pakistan',
  email: 'abdulrafaymalik5@gmail.com',
  linkedin: 'https://linkedin.com/in/abdur-rafey-malik',
  github: 'https://github.com/Abdur-Rafey5',
  cvUrl: '#', // link to hosted CV PDF
};

// ─── O Levels ───────────────────────────────────────────────
export const oLevels = {
  institution: 'Aims Cambridge System',
  qualification: 'Cambridge O Levels',
  group: 'Sciences',
  result: '6 A*',
  subjects: [
    'Mathematics',
    'Computer Science',
    'Physics',
    'Chemistry',
    'English Language',
    'Urdu',
    'Islamiyat',
    'Pakistan Studies',
  ],
  extracurricular: [
    {
      title: 'Debate & Public Speaking',
      points: [
        'Participated in school-level debating and public-speaking activities.',
        'Presented arguments on academic, social, and current-affairs topics.',
        'Improved confidence, communication, critical thinking, and impromptu speaking.',
        'Learned to structure arguments and respond effectively to opposing viewpoints.',
      ],
    },
    {
      title: 'Sports & Athletics',
      points: [
        'Participated in school sports and athletic activities.',
        'Took part in team-based sporting activities and inter-school events.',
        'Developed teamwork, discipline, coordination, and competitive spirit.',
        'Balanced academic responsibilities with physical and extracurricular activities.',
      ],
    },
    {
      title: 'Science & Technology Exhibitions',
      points: [
        'Participated in school science and technology exhibitions.',
        'Worked on projects involving research, problem-solving, and practical implementation.',
        'Presented project ideas and demonstrated their functionality to teachers and students.',
        'Developed creativity, technical curiosity, presentation skills, and teamwork.',
      ],
    },
  ] as ActivityItem[],
  societies: ['Literary Society', 'Sports Society', 'Debating Society'],
  note: 'Academic Foundation: 6 A* achieved across the Sciences group (confirmed Mathematics A*).',
};

// ─── A Levels ───────────────────────────────────────────────
export const aLevels = {
  institution: 'Roots Ivy International School',
  location: 'Faisalabad',
  period: '2020 – 2022',
  qualification: 'Cambridge A Levels',
  group: 'Sciences',
  result: "Straight A's",
  subjects: [
    { subject: 'Mathematics', grade: 'A' },
    { subject: 'Computer Science', grade: 'A' },
    { subject: 'Physics', grade: 'A' },
  ],
  extracurricular: [
    {
      title: 'Winner — Business Idea Challenge',
      points: [
        'Participated in the Business Idea Challenge at Roots Ivy.',
        'Presented the business model and innovative idea to an executive judging panel.',
        'Won the Business Idea Challenge, demonstrating entrepreneurial thinking, creativity, problem-solving, and presentation skills.',
      ],
    },
  ] as ActivityItem[],
  societies: ['Music Society', 'Adventure Club', 'Sports Society', 'IYLO Roots Ivy'],
  leadership: [
    {
      organization: 'IYLO Roots Ivy',
      role: 'Head of Social Events',
      description: 'Planned and directed high-profile student social events, team coordination, and Model United Nations (MUN) delegations.',
      tags: ['Event Management', 'MUN', 'Student Leadership'],
    },
  ],
};

// ─── Leadership Interface ──────────────────────────────────
export interface LeadershipRole {
  organization: string;
  role: string;
  description: string;
  tags: string[];
}

// ─── FAST-NUCES ─────────────────────────────────────────────
export const fast = {
  institution: 'FAST-NUCES',
  campus: 'Lahore',
  degree: 'BS Computer Science',
  period: '2022 – 2026',
  courses: [
    'Applied Machine Learning',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Software Engineering',
  ],
  extracurricular: 'Model United Nations (MUN), FAST Orators\' League, university outreach, and society resource management.',
  societies: ["FAST Orators' League", 'GLI', 'VOICE', 'IYLO Roots Ivy'],
  leadership: [
    {
      organization: 'FAST Orators\' League',
      role: 'Model United Nations & Executive Member',
      description: 'Active participant and delegate in Model United Nations (MUN), competitive parliamentary debating, and campus oratory sessions.',
      tags: ['Model United Nations', 'Public Speaking', 'Debating'],
    },
    {
      organization: 'GLI',
      role: 'Director Outreach',
      description: 'Spearheaded external engagement, organizational partnerships, institutional communication, and large-scale outreach drives.',
      tags: ['Outreach', 'Partnerships', 'Leadership'],
    },
    {
      organization: 'VOICE',
      role: 'Head of Resources',
      description: 'Managed asset allocation, resource logistics, procurement planning, and operational coordination for society initiatives.',
      tags: ['Resource Management', 'Logistics', 'Operations'],
    },
    {
      organization: 'IYLO Roots Ivy',
      role: 'Head of Social Events',
      description: 'Organized and executed student social functions, cultural events, and represented institution at competitive MUN conferences.',
      tags: ['Event Management', 'MUN', 'Team Coordination'],
    },
  ] as LeadershipRole[],
  coreSkills: [
    'Leadership',
    'Communication',
    'Public speaking',
    'Event management',
    'Outreach',
    'Resource management',
    'Team coordination',
    'Organizational planning',
  ],
};

// ─── Experience ─────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    role: 'DevOps Intern — AI & Infrastructure',
    company: 'Systems Ltd (CDIS)',
    location: 'Lahore',
    period: 'Nov 2025 – May 2026',
    points: [
      'Contributed to AI-aligned infrastructure with a focus on agentic AI systems and real-time monitoring pipelines.',
      'Worked extensively with the ELK Stack (Elasticsearch, Logstash, Kibana) for log aggregation, anomaly detection and performance visualisation.',
      'Engineered an ML-based anomaly detection feature that learns normal behaviour from time-windowed metrics and flags deviations using statistical thresholds.',
      'Integrated anomaly detection with automated alerting and agentic workflows, enabling real-time monitoring and autonomous incident response.',
    ],
    tags: ['ELK', 'Elasticsearch', 'Logstash', 'Kibana', 'Python', 'DevOps', 'Agentic AI', 'ML'],
  },
  {
    role: 'University Application Counselor',
    company: 'Platinum Consultants',
    location: 'Faisalabad',
    period: 'Jun 2025 – Oct 2025',
    points: [
      'Helped students craft compelling Common App essays and personal statements tailored to target universities.',
      'Guided applicants through the full US and international admissions process — from shortlisting schools to final submissions.',
      'Reviewed and refined application materials to maximise each student\'s acceptance chances.',
    ],
    tags: ['Counselling', 'Common App', 'US Admissions', 'Essay Writing'],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'MS Teams Automation System',
    description:
      'Integrates Microsoft Teams with WhatsApp to automate student attendance and test-result notifications — eliminating manual data entry and reducing notification delays to near-zero.',
    tags: ['Python', 'MS Teams API', 'WhatsApp API', 'Automation', 'Agentic AI'],
    github: '', // [TO FILL]
    demo: '',   // [TO FILL]
  },
  {
    title: 'ELK Anomaly Detection Feature',
    description:
      'ML anomaly detection pipeline on time-windowed infrastructure metrics using statistical thresholds. Integrated with Kibana dashboards and automated alerting for autonomous incident response.',
    tags: ['Python', 'Elasticsearch', 'Kibana', 'ML', 'DevOps', 'Agentic AI'],
    github: '', // [TO FILL]
    demo: '',   // [TO FILL]
  },
  {
    title: 'Aureza — Skincare E-commerce',
    description:
      'Full-stack MERN e-commerce platform with AI-driven personalised skincare product recommendations based on user skin profiles and purchase history.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI Recommendations'],
    github: '', // [TO FILL]
    demo: '',   // [TO FILL]
  },
  {
    title: 'Nikkah Net',
    description:
      'Culturally sensitive Muslim matchmaking application featuring ethical data collection, privacy-centred profile matching and guardian-inclusive communication flows.',
    tags: ['React', 'Node.js', 'MongoDB', 'Privacy-First Design'],
    github: '', // [TO FILL]
    demo: '',   // [TO FILL]
  },
  {
    title: 'Videomatics AI',
    description:
      'Microservices platform that combines AI vision models, OCR and automated video rendering to generate structured worked solutions and educational videos for O-Level mathematics problems.',
    tags: ['Python', 'Microservices', 'OCR', 'AI', 'Video Rendering', 'EdTech'],
    github: '', // [TO FILL]
    demo: '',   // [TO FILL]
  },
];

// ─── Skills ──────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', icon: 'SiPython' },
      { name: 'C++', icon: 'SiCplusplus' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'HTML/CSS', icon: 'SiHtml5' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'MySQL', icon: 'SiMysql' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Elasticsearch', icon: 'SiElasticsearch' },
      { name: 'Kibana', icon: 'SiKibana' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Agentic AI', icon: 'SiTensorflow' },
      { name: 'ML Pipelines', icon: 'SiJupyter' },
      { name: 'API Integration', icon: 'SiPostman' },
    ],
  },
];

// ─── Stats (animated counters) ───────────────────────────────
export const stats = [
  { label: 'Projects Built', value: 5, suffix: '+' },
  { label: 'A* / A Grades', value: 9, suffix: '' },
  { label: 'Months @ Systems Ltd', value: 7, suffix: '' },
  { label: 'Technologies', value: 20, suffix: '+' },
];
