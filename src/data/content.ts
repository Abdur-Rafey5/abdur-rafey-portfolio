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

// ─── Profile ────────────────────────────────────────────────
export const profile = {
  name: 'Abdur Rafey',
  taglines: [
    'AI Automation Engineer',
    'Agentic Systems Builder',
    'Full-Stack Developer',
    'DevOps Enthusiast',
  ],
  summary:
    'Motivated Computer Science graduate passionate about AI automation — building agentic systems that connect tools, streamline workflows and replace manual processes with intelligent, autonomous decision making.',
  location: 'Lahore, Pakistan',
  email: 'abdulrafaymalik5@gmail.com',
  linkedin: 'https://linkedin.com/in/abdur-rafey-malik',
  github: 'https://github.com/Abdur-Rafey5',
  cvUrl: '#', // [TO FILL] — link to hosted CV PDF
};

// ─── O Levels ───────────────────────────────────────────────
export const oLevels = {
  institution: 'Ames Cambridge',
  qualification: 'Cambridge O Levels',
  group: 'Sciences',
  result: '6 A*',
  subjects: [
    { subject: 'English Language', grade: '[TO FILL]' },
    { subject: 'Urdu', grade: '[TO FILL]' },
    { subject: 'Islamiyat', grade: '[TO FILL]' },
    { subject: 'Pakistan Studies', grade: '[TO FILL]' },
    { subject: 'Physics', grade: '[TO FILL]' },
    { subject: 'Mathematics', grade: '[TO FILL]' },
    { subject: 'Chemistry', grade: '[TO FILL]' },
    { subject: 'Computer Science', grade: '[TO FILL]' },
  ] as OLevelSubject[],
  extracurricular: '[TO FILL — e.g. debate, robotics club, etc.]',
  societies: '[TO FILL — e.g. Science Society, Prefect Body, etc.]',
  note: 'Overall result: 6 A* achieved across the Sciences group.',
};

// ─── A Levels ───────────────────────────────────────────────
export const aLevels = {
  institution: 'Roots Ivy International School',
  location: 'Faisalabad',
  period: '2020 – 2022',
  qualification: 'Cambridge A Levels',
  group: 'Sciences',
  result: 'Straight A\'s',
  subjects: [
    { subject: 'Physics', grade: 'A' },
    { subject: 'Mathematics', grade: 'A' },
    { subject: 'Computer Science', grade: 'A' },
  ],
  extracurricular: '[TO FILL — e.g. physics olympiad, coding competitions, etc.]',
  societies: '[TO FILL — e.g. Science Society, Student Council, etc.]',
};

// ─── FAST-NUCES ─────────────────────────────────────────────
export const fast = {
  institution: 'FAST-NUCES',
  campus: 'Lahore',
  degree: 'BS Computer Science',
  period: '2022 – 2026',
  cgpa: '[TO FILL]',
  courses: [
    { course: 'Applied Machine Learning', grade: '[TO FILL]' },
    { course: 'Data Structures & Algorithms', grade: '[TO FILL]' },
    { course: 'Object-Oriented Programming', grade: '[TO FILL]' },
    { course: 'Database Management Systems', grade: '[TO FILL]' },
    { course: 'Operating Systems', grade: '[TO FILL]' },
    { course: 'Software Engineering', grade: '[TO FILL]' },
  ] as CourseGrade[],
  extracurricular: '[TO FILL — e.g. SOFTEC, ICPC, ACM chapter, etc.]',
  societies: '[TO FILL — e.g. ACM NUCES, Google DSC, Automation Society, etc.]',
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
