import en from "./locales/en";
import tr from "./locales/tr";
import es from "./locales/es";
import ar from "./locales/ar";
import ru from "./locales/ru";
import de from "./locales/de";
import type { Locale, Translation } from "./types";

export const translations: Record<Locale, Translation> = {
  en,
  tr,
  es,
  ar,
  ru,
  de,
};
