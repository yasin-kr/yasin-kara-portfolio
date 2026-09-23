export type StorySceneId =
  "first-look" | "first-touch" | "behind-scenes" | "my-perspective";

export interface StorySceneAsset {
  id: StorySceneId;
  image: { src: string; width: number; height: number };
  mobileImage?: { src: string; width: number; height: number };
  // Coordinates use the original image dimensions; a new crop needs a new path.
  lightTrail?: string;
}

// Only add scenes after the user supplies and approves their image and copy.
export const storyScenes: readonly StorySceneAsset[] = [
  {
    id: "first-look",
    image: { src: "/images/story/01-first-look.png", width: 1672, height: 941 },
  },
  {
    id: "first-touch",
    image: {
      src: "/images/story/02-first-touch.png",
      width: 1672,
      height: 941,
    },
  },
  {
    id: "behind-scenes",
    image: {
      src: "/images/story/03-behind-scenes.png",
      width: 1672,
      height: 941,
    },
  },
  {
    id: "my-perspective",
    image: {
      src: "/images/story/04-my-perspective.png",
      width: 1672,
      height: 941,
    },
    lightTrail:
      "M 653 939 C 731 869 811 789 876 784 C 900 779 911 792 933 779 C 951 769 962 747 977 724 L 1007 680 C 1020 657 1033 650 1052 659 L 1086 671 C 1106 679 1121 664 1131 648 C 1144 627 1132 620 1117 614 L 1028 578 C 1005 569 1001 559 1013 540 L 1039 503 C 1044 494 1050 492 1063 497 L 1194 547 L 1201 596 C 1218 577 1230 556 1240 540 C 1252 523 1238 517 1221 511 L 1200 503 C 1185 498 1181 489 1189 476 L 1211 440 C 1220 427 1230 424 1244 430 L 1306 453 C 1324 460 1335 459 1346 444 L 1369 408 C 1382 389 1375 365 1385 341 C 1392 319 1405 308 1424 302 C 1445 296 1459 290 1469 276 C 1481 260 1482 235 1489 217 L 1497 201 L 1524 158 L 1567 94 L 1607 34 L 1629 2",
  },
];

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
  intro: "Web applications where design meets functionality, built with React, TypeScript, and Node.js.",
  availability: "Contact",
  contactIntro: "Project and collaboration enquiries can be submitted through the contact form.",
  about: ["Practical project development experience."],
  education: {
    name: "GoIT Full Stack Developer",
    completed: "14 August 2026",
  },
  contact: { email: "theyasin@icloud.com" },
};

export const projects: Project[] = [
  {
    id: "taskpro",
    liveUrl: "https://goit-react-nodejs-taskpro-1.onrender.com/",
    number: "01",
    name: "TaskPro",
    role: "Full Stack Developer",
    summary: "A team project with Full Stack development responsibilities.",
    contributions: ["Board and column creation, viewing, updating, and deletion flows; dashboard integration with backend APIs.","Dashboard and card integration, label-based filtering, theme switching, and task workspace persistence."],
    technologies: ["React","Redux Toolkit","Node.js","Express.js","MongoDB","Mongoose","JWT","Swagger","Vite"],
    cover: "taskpro",
    coverTitle: ["Task", "Pro"],
    image: {
      src: "/images/projects/task-pro.jpeg",
      alt: "TaskPro",
      width: 1800,
      height: 1125,
    },
  },
  {
    id: "money-guard",
    liveUrl: "https://money-guard-client.vercel.app/login",
    number: "02",
    name: "Money Guard",
    role: "Team Lead",
    summary: "A React and Redux project developed by a team of six.",
    contributions: ["Coordination of financial dashboard, authentication, protected routes, transaction management, balance, and statistics development.","Asynchronous state management, session persistence, reusable API clients, form validation, and chart-based reporting."],
    technologies: ["React","Redux Toolkit","Redux Persist","React Router","Axios","React Hook Form","Yup","Chart.js","Vite"],
    cover: "moneyguard",
    coverTitle: ["Money", "Guard"],
    image: {
      src: "/images/projects/money-guard-tablet.jpeg",
      alt: "Money Guard",
      width: 1800,
      height: 1125,
    },
  },
  {
    id: "cinemania",
    liveUrl: "https://yasin-kr.github.io/cinemania/",
    number: "03",
    name: "Cinemania",
    role: "Team Lead",
    summary: "A JavaScript and TMDB project developed by a team of five.",
    contributions: ["Coordination of team development; movie discovery with TMDB, pagination, the movie detail modal, and responsive UI.","Contributions to Weekly Trends, interface improvements, and performance improvements."],
    technologies: ["HTML","CSS","JavaScript","REST API","Vite","TMDB"],
    cover: "cinemania",
    coverTitle: ["CINE", "MANIA"],
    image: {
      src: "/images/projects/cinemania-image.png",
      alt: "Cinemania",
      width: 1824,
      height: 920,
    },
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
