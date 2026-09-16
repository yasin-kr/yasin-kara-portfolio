import { useEffect, useState, type ReactNode } from "react";
import { profile, projects, toolkit } from "../data/portfolio";
import { LanguageContext } from "./LanguageContext";
import { isLocale, readSavedLocale, STORAGE_KEY } from "./languages";
import { translations } from "./translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState(readSavedLocale);
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    // Keep the composition LTR. Arabic text blocks get their own RTL direction.
    document.documentElement.dir = "ltr";
    document.documentElement.dataset.locale = locale;
    document.title = `${profile.name} — ${t.profile.role}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.ui.metaDescription);
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // A restricted storage policy should never prevent rendering the page.
    }
  }, [locale, t]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && isLocale(event.newValue)) setLocale(event.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const groupNames = [t.toolkit.frontend, t.toolkit.backend, t.toolkit.tools];
  const value = {
    locale,
    setLocale,
    textDirection: locale === "ar" ? "rtl" as const : "ltr" as const,
    t,
    profile: { ...profile, ...t.profile },
    projects: projects.map((project) => ({ ...project, ...t.projects[project.id] })),
    navigation: [
      { label: t.navigation.work, href: "#work" },
      { label: t.navigation.about, href: "#about" },
      { label: t.navigation.contact, href: "#contact" },
    ],
    toolkit: toolkit.map((group, index) => ({
      name: groupNames[index],
      items: group.items.map((item) => item === "Responsive design" ? t.toolkit.responsiveDesign : item),
    })),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
