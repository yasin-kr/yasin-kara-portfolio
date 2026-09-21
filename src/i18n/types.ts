import type { Profile, Project } from "../data/portfolio";

export type Locale = "en" | "tr" | "es" | "ar" | "ru" | "de";

export interface Translation {
  profile: Pick<
    Profile,
    "role" | "intro" | "availability" | "contactIntro" | "about" | "education"
  >;
  projects: Record<string, Pick<Project, "role" | "summary" | "contributions">>;
  navigation: { work: string; about: string; contact: string };
  pages: {
    allProjects: string;
    viewProject: string;
    readAbout: string;
    teamworkIndex: string;
    teamworkTitle: [string, string];
    teamworkIntro: string;
  };
  toolkit: {
    frontend: string;
    backend: string;
    tools: string;
    responsiveDesign: string;
  };
  ui: {
    skipToContent: string;
    home: string;
    menu: string;
    close: string;
    mainNavigation: string;
    footerNavigation: string;
    selectLanguage: string;
    heroEyebrow: string;
    viewWork: string;
    getInTouch: string;
    heroFootnote: string;
    exploreBelow: string;
    workIndex: string;
    workTitle: [string, string];
    workNote: string;
    coverSelectedWork: string;
    projectCover: string;
    coverDescription: string;
    projectTechnologies: string;
    contribution: string;
    liveSite: string;
    aboutIndex: string;
    aboutTitle: [string, string];
    aboutCaption: string;
    storyLead: string;
    nextChapter: string;
    toolkitIndex: string;
    toolkitTitle: [string, string];
    toolkitNote: string;
    contactIndex: string;
    contactTitle: [string, string];
    viewCv: string;
    backToTop: string;
    metaDescription: string;
  };
}
