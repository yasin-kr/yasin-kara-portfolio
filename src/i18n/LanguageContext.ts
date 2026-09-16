import { createContext, useContext } from "react";
import type { Profile, Project } from "../data/portfolio";
import type { Locale, Translation } from "./types";

interface LanguageState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  textDirection: "ltr" | "rtl";
  t: Translation;
  profile: Profile;
  projects: Project[];
  navigation: { label: string; href: string }[];
  toolkit: { name: string; items: string[] }[];
}

export const LanguageContext = createContext<LanguageState | null>(null);

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
