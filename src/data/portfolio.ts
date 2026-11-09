export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: 'Posts',
    category: 'Full-stack application',
    description:
      'A straightforward blog platform for creating, editing, and deleting posts. Built with Node.js and Express, with EJS templates and an in-memory post store.',
    image: '/Assets/images/My-blog.jpg',
    imageAlt: 'Screenshot of the Posts blog application',
    sourceUrl: 'https://github.com/gomuningen2004/Blog-application',
    stack: ['Node.js', 'Express', 'EJS'],
  },
  {
    title: 'Cocktail Mayhem',
    category: 'API-powered web app',
    description:
      'A cocktail discovery app powered by TheCocktailDB. Browse recipes by letter, find a random drink, or explore a cocktail by its ID.',
    image: '/Assets/images/Cocktail-Mayhem.jpg',
    imageAlt: 'Screenshot of the Cocktail Mayhem application',
    sourceUrl: 'https://github.com/gomuningen2004/Cocktail-Mayhem',
    stack: ['Node.js', 'Express', 'REST API'],
  },
];

export interface SkillGroup {
  title: string;
  category: string;
  description: string;
  icon: 'code' | 'data' | 'platform' | 'people';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend engineering',
    category: 'INTERFACES',
    description: 'Designing and building modern web experiences.',
    icon: 'code',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript',
      'HTML & CSS',
      'Tailwind CSS',
      'Redux',
      'React Query',
      'Bootstrap',
      'Styled Components',
      'CSS Modules',
      'Front-End Development',
    ],
  },
  {
    title: 'Backend & systems',
    category: 'ENGINEERING',
    description: 'Connecting user experiences to services and data.',
    icon: 'platform',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'EJS',
      'Django',
      'MongoDB',
      'MySQL',
      'Postman API',
      'MVC',
      'Git',
      'GitHub',
      'Version Control',
    ],
  },
  {
    title: 'Data & analytics',
    category: 'INTELLIGENCE',
    description:
      'Exploring data, finding patterns, and communicating insights.',
    icon: 'data',
    skills: [
      'Python',
      'SQL',
      'R',
      'Data Analytics',
      'Business Analytics',
      'Data Visualization',
      'Tableau',
      'Google Sheets',
      'Data Cleaning',
      'Data Collection',
      'Data Processing',
      'Data Ethics',
      'Data Storytelling',
      'Data-driven Decision Making',
    ],
  },
  {
    title: 'Languages & collaboration',
    category: 'FOUNDATIONS',
    description: 'The languages and people skills behind good problem-solving.',
    icon: 'people',
    skills: [
      'Java',
      'C',
      'Android Studio',
      'Problem Solving',
      'Critical Thinking',
      'Analytical Skills',
      'Communication',
      'Interpersonal Skills',
      'Attention to Detail',
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  issued?: string;
  field: 'Data' | 'Development';
  subtitle: string;
  credentialUrl?: string;
  courses?: string[];
}

export const certifications: Certification[] = [
  {
    title: 'Google Data Analytics',
    issuer: 'Google · Coursera',
    issued: 'Dec 2025',
    field: 'Data',
    subtitle: 'Professional Certificate · 8 courses',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/specialization/GW4OQVOF35RG',
    courses: [
      'Foundations: Data, Data, Everywhere',
      'Ask Questions to Make Data-Driven Decisions',
      'Prepare Data for Exploration',
      'Process Data from Dirty to Clean',
      'Analyze Data to Answer Questions',
      'Share Data Through the Art of Visualization',
      'Data Analysis with R Programming',
      'Google Data Analytics Capstone: Complete a Case Study',
    ],
  },
  {
    title: 'Deloitte Australia — Data Analytics Job Simulation',
    issuer: 'Deloitte Australia · Forage',
    issued: 'Dec 2025',
    field: 'Data',
    subtitle: 'Job simulation',
    credentialUrl:
      'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_qdEtrdJd56KqvdjfW_1765303871972_completion_certificate.pdf',
  },
  {
    title: 'The Ultimate React Course 2025: React, Next.js, Redux & More',
    issuer: 'Udemy',
    issued: '2025',
    field: 'Development',
    subtitle: 'Web development course',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-5d02be72-6dec-4e44-a379-4bb435107f22/',
  },
  {
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    issuer: 'Udemy',
    issued: '2025',
    field: 'Development',
    subtitle: 'JavaScript course',
    credentialUrl: 'http://ude.my/UC-4c32037f-b45f-4528-9eac-61f73e1ffc73/',
  },
  {
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    issuer: 'Udemy',
    issued: '2025',
    field: 'Development',
    subtitle: 'Backend development course',
    credentialUrl: 'http://ude.my/UC-824eafc4-3e4d-47ea-ab8b-112b5940a206/',
  },
];

export type JourneyEntry =
  | {
      kind: "education";
      level: string;
      institution: string;
      qualification: string;
      years: string;
      icon: string;
    }
  | {
      kind: "experience";
      role: string;
      organization: string;
      department: string;
      description: string;
      years: string;
    };

export const journey: JourneyEntry[] = [
  {
    kind: "education",
    level: "High school",
    institution: "MNR Scottsdale",
    qualification: "Central Board of Secondary Education",
    years: "2007 — 2019",
    icon: "/Assets/images/backpack2.svg",
  },
  {
    kind: "education",
    level: "Technical education",
    institution: "VNR VJIET",
    qualification: "Diploma in Mechanical Engineering",
    years: "2019 — 2022",
    icon: "/Assets/images/diploma-svgrepo-com.svg",
  },
  {
    kind: "education",
    level: "University",
    institution: "GITAM University",
    qualification: "Bachelor of Technology in Computer Science",
    years: "2022 — 2025",
    icon: "/Assets/images/university-cap.svg",
  },
  {
    kind: "experience",
    role: "Graduate Engineer Trainee",
    organization: "Surgevector (previously Adaequare)",
    department: "Data Engineering",
    description: "Working on a hiring platform for the organization.",
    years: "Feb 2026 — Present",
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/govardhan-annabathula-69330a257/',
    icon: '/Assets/images/linkedin.svg',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/govardhan_99515',
    icon: '/Assets/images/instagram.svg',
  },
  {
    label: 'X',
    url: 'https://twitter.com/Govardh16652574',
    icon: '/Assets/images/twitter-x.svg',
  },
];
