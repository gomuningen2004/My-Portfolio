export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  sourceUrl: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "Posts",
    category: "Full-stack application",
    description:
      "A straightforward blog platform for creating, editing, and deleting posts. Built with Node.js and Express, with EJS templates and an in-memory post store.",
    image: "/Assets/images/My-blog.png",
    imageAlt: "Screenshot of the Posts blog application",
    liveUrl: "https://blog-application-dwou.onrender.com/",
    sourceUrl: "https://github.com/gomuningen2004/Blog-application",
    stack: ["Node.js", "Express", "EJS"],
  },
  {
    title: "Cocktail Mayhem",
    category: "API-powered web app",
    description:
      "A cocktail discovery app powered by TheCocktailDB. Browse recipes by letter, find a random drink, or explore a cocktail by its ID.",
    image: "/Assets/images/Cocktail-Mayhem.png",
    imageAlt: "Screenshot of the Cocktail Mayhem application",
    liveUrl: "https://cocktail-mayhem.onrender.com/",
    sourceUrl: "https://github.com/gomuningen2004/Cocktail-Mayhem",
    stack: ["Node.js", "Express", "REST API"],
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "React", "TypeScript", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "EJS", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman"],
  },
];

export interface Education {
  level: string;
  institution: string;
  qualification: string;
  years: string;
  icon: string;
}

export const education: Education[] = [
  {
    level: "High school",
    institution: "MNR Scottsdale",
    qualification: "Central Board of Secondary Education",
    years: "2007 — 2019",
    icon: "/Assets/images/backpack2.svg",
  },
  {
    level: "Technical education",
    institution: "VNR VJIET",
    qualification: "Diploma in Mechanical Engineering",
    years: "2019 — 2022",
    icon: "/Assets/images/diploma-svgrepo-com.svg",
  },
  {
    level: "University",
    institution: "GITAM University",
    qualification: "Bachelor of Technology in Computer Science",
    years: "2022 — 2025",
    icon: "/Assets/images/university-cap.svg",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/govardhan-annabathula-69330a257/",
    icon: "/Assets/images/linkedin.svg",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/govardhan_99515",
    icon: "/Assets/images/instagram.svg",
  },
  {
    label: "X",
    url: "https://twitter.com/Govardh16652574",
    icon: "/Assets/images/twitter-x.svg",
  },
];
