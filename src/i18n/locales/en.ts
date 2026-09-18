import { profile, projects } from "../../data/portfolio";
import type { Translation } from "../types";

const en: Translation = {
  profile,
  projects: Object.fromEntries(
    projects.map((project) => [project.id, project]),
  ),
  navigation: { work: "My projects", about: "About", contact: "Contact" },
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
    heroFootnote: "Engineering roots. A new direction.",
    exploreBelow: "Explore below",
    workIndex: "01 / THE WORK",
    workTitle: ["Selected", "work."],
    workNote:
      "Different projects. A shared commitment to learning by building.",
    coverSelectedWork: "YK / SELECTED WORK",
    projectCover: "PROJECT COVER",
    coverDescription: "{name} typographic project cover",
    projectTechnologies: "{name} technologies",
    contribution: "My contribution",
    liveSite: "Live site",
    aboutIndex: "02 / A LITTLE ABOUT ME",
    aboutTitle: ["A different path.", "The same curiosity."],
    aboutCaption: "ENGINEERING → DEVELOPMENT",
    storyLead:
      "From coordinating operations to connecting the pieces of the web.",
    nextChapter: "THE NEXT CHAPTER",
    toolkitIndex: "THE TOOLS I WORK WITH",
    toolkitTitle: ["Technical", "toolkit."],
    toolkitNote:
      "Practical experience, built through projects. Always adding to it.",
    contactIndex: "03 / WHAT’S NEXT",
    contactTitle: ["Let’s work", "together."],
    basedIn: "Based in {location}",
    viewCv: "View CV",
    backToTop: "Back to top",
    metaDescription:
      "Yasin Kara is a Full Stack Developer based in Kütahya, Türkiye, building thoughtful web experiences with React, TypeScript, and Node.js. Explore selected projects and his engineering background.",
  },
};

export default en;
