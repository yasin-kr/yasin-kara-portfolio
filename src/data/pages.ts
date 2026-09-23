export const pagePaths = {
  home: "/",
  projects: "/projects/",
  contact: "/contact/",
} as const;

export type PageId = keyof typeof pagePaths;

// Each HTML entry declares its page. Navigation uses ordinary, shareable links.
const entryPage = document.getElementById("root")?.dataset.page;
export const currentPage: PageId =
  entryPage && Object.hasOwn(pagePaths, entryPage)
    ? (entryPage as PageId)
    : "home";
