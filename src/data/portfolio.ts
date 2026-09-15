export interface Project {
  id: string;
  number: string;
  name: string;
  role: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  cover: "taskpro" | "moneyguard" | "cinemania";
  // The cover is a typographic composition, not a screenshot of the application.
  coverTitle?: [string, string?];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  repositoryUrl?: string;
  liveUrl?: string;
}

export interface ContactDetails {
  email?: string;
  github?: string;
  linkedin?: string;
  cv?: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  intro: string;
  availability: string;
  contactIntro: string;
  about: string[];
  education: {
    name: string;
    completed: string;
  };
  contact: ContactDetails;
}

export const profile: Profile = {
  name: "Yasin Kara",
  role: "Full Stack Developer",
  location: "Kütahya, Türkiye",
  intro:
    "I build thoughtful web experiences with React, TypeScript, and Node.js.",
  availability: "Open to developer opportunities",
  contactIntro:
    "I’m looking for a development role where I can contribute, keep learning, and build with a team.",
  about: [
    "I’m a logistics engineer with previous experience in production shift engineering. Organizing operations, taking responsibility, and working with a team shape the way I approach software development.",
    "I completed the GoIT Full Stack Developer program and am now pursuing a career in software. I work with React and TypeScript, and continue to strengthen my Node.js skills through hands-on projects.",
  ],
  education: {
    name: "GoIT Full Stack Developer",
    completed: "14 August 2026",
  },
  contact: {},
};

export const projects: Project[] = [
  {
    id: "taskpro",
    number: "01",
    name: "TaskPro",
    role: "Full Stack Developer",
    summary: "A project I contributed to as a Full Stack Developer.",
    contributions: [],
    technologies: [],
    cover: "taskpro",
    coverTitle: ["Task", "Pro"],
  },
  {
    id: "money-guard",
    number: "02",
    name: "Money Guard",
    role: "Team Lead",
    summary: "A React and Redux project developed by a team of seven.",
    contributions: [
      "Led a seven-person team and worked on Redux Toolkit state management and token persistence.",
      "Handled the API client, authentication, and transaction, category, statistics, and currency data.",
    ],
    technologies: ["React", "Redux Toolkit"],
    cover: "moneyguard",
    coverTitle: ["Money", "Guard"],
  },
  {
    id: "cinemania",
    number: "03",
    name: "Cinemania",
    role: "Team Lead",
    summary: "A JavaScript team project built with Vite, Axios, and TMDB.",
    contributions: [
      "Led the team and worked on Weekly Trends, the movie detail modal, and interface improvements.",
      "Made performance improvements across the project.",
    ],
    technologies: ["JavaScript", "Vite", "Axios", "TMDB"],
    cover: "cinemania",
    coverTitle: ["CINE", "MANIA"],
  },
];

export const toolkit: { name: string; items: string[] }[] = [
  {
    name: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Responsive design",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "JWT"],
  },
  {
    name: "Tools",
    items: ["Swagger", "Axios", "Vite", "Git", "GitHub"],
  },
];

export const navigation: { label: string; href: string }[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
