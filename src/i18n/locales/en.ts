import { profile, projects } from "../../data/portfolio";
import type { Translation } from "../types";

const en: Translation = {
  theme: { lightMode: "Light theme" },
  contactForm: {
  "title": "Compose a message.",
  "name": "Full name",
  "email": "Email address",
  "subject": "Subject",
  "message": "Your message",
  "send": "Send"
},
  story: {
    title: "Behind what you see",
    scenes: {
      "my-perspective": {
        title: "A good solution starts with the right question.",
        description: "An effective product starts with a clearly defined need. Removing unnecessary steps and simplifying processes guide decisions in design and development.",
        imageAlt:
          "A golden trail of light winds through a dark maze and reaches an orderly network in the upper right.",
      },
      "behind-scenes": {
        title: "Behind what you see, there is a system.",
        description: "Every interaction relies on data flow, application logic, and connected components. Their coordination turns a visual design into a working product.",
        imageAlt:
          "Glowing data paths pass through transparent layers and converge in an interface panel against a dark blue background.",
      },
      "first-touch": {
        title: "Complex processes. Clear interfaces.",
        description: "Clear information structure and consistent interactions guide the user. Finding relevant content and understanding the next step become a natural part of the experience.",
        imageAlt:
          "Organized blue interface cards on a light background, with geometric pieces alongside them.",
      },
      "first-look": {
        title: "First impressions are no accident.",
        description: "Color, light, and space define an interface’s character at first glance. A balanced visual language brings content into focus and gives the experience coherence.",
        imageAlt:
          "Glass and metal surfaces illuminated by blue and golden light in a dark navy space.",
      },
    },
  },
  profile,
  projects: Object.fromEntries(
    projects.map((project) => [project.id, project]),
  ),
  navigation: { work: "Projects", about: "Profile", contact: "Contact" },
  pages: {
    allProjects: "Explore all projects",
    viewProject: "Explore project",
    readAbout: "Project contributions",
    teamworkIndex: "WORKING WITH A TEAM",
    teamworkTitle: ["Shared work", "Real responsibility"],
    teamworkIntro:
      "Practical project development experience.",
  },
  toolkit: {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    responsiveDesign: "Responsive design",
  },
  ui: {
    skipToContent: "Skip to content",
    home: "Home",
    menu: "Menu",
    close: "Close",
    mainNavigation: "Main navigation",
    footerNavigation: "Footer navigation",
    selectLanguage: "Choose language",
    heroEyebrow: "A developer’s perspective",
    viewWork: "View selected work",
    getInTouch: "Get in touch",
    heroFootnote: "Clear design. Consistent experience.",
    exploreBelow: "Explore below",
    workIndex: "THE WORK",
    workTitle: ["Selected", "work"],
    workNote:
      "Different projects. A shared commitment to learning by building.",
    coverSelectedWork: "YK / SELECTED WORK",
    projectCover: "PROJECT COVER",
    coverDescription: "{name} typographic project cover",
    projectTechnologies: "{name} technologies",
    contribution: "Project contributions",
    liveSite: "Live site",
    aboutIndex: "Profile details",
    aboutTitle: ["A different path", "The same curiosity"],
    aboutCaption: "ENGINEERING → DEVELOPMENT",
    storyLead:
      "From coordinating operations to connecting the pieces of the web.",
    nextChapter: "THE NEXT CHAPTER",
    toolkitIndex: "TECHNOLOGIES",
    toolkitTitle: ["Technical", "toolkit"],
    toolkitNote:
      "Practical project development experience.",
    contactIndex: "WHAT’S NEXT",
    contactTitle: ["Contact","and collaboration"],
    viewCv: "View CV",
    backToTop: "Back to top",
    metaDescription:
      "Yasin Kara is a Full Stack Developer building thoughtful web experiences with React, TypeScript, and Node.js. Explore selected projects and his engineering background.",
  },
};

export default en;
