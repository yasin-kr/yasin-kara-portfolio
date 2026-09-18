import type { Locale } from "./types";

export const STORAGE_KEY = "yasin-kara-language";
export const DEFAULT_LOCALE: Locale = "en";

// Flags are visual cues; native language names identify each option unambiguously.
export const languages: {
  code: Locale;
  name: string;
  flag: string;
  direction: "ltr" | "rtl";
}[] = [
  { code: "en", name: "English", flag: "gb", direction: "ltr" },
  { code: "tr", name: "Türkçe", flag: "tr", direction: "ltr" },
  { code: "es", name: "Español", flag: "es", direction: "ltr" },
  { code: "ar", name: "العربية", flag: "ae", direction: "rtl" },
  { code: "ru", name: "Русский", flag: "ru", direction: "ltr" },
  { code: "de", name: "Deutsch", flag: "de", direction: "ltr" },
];

export function isLocale(value: unknown): value is Locale {
  return languages.some((language) => language.code === value);
}

export function readSavedLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(saved) ? saved : DEFAULT_LOCALE;
  } catch {
    // Language selection still works if storage is disabled in the browser.
    return DEFAULT_LOCALE;
  }
}
