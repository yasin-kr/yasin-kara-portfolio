import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { t } = useLanguage();
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === "light");
  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try { localStorage.setItem("yasin-kara-theme", next ? "light" : "dark"); } catch { /* The current tab still changes when storage is unavailable. */ }
  }
  return <div className={styles.separator}><button type="button" role="switch" aria-checked={light} aria-label={t.theme.lightMode} title={t.theme.lightMode} className={styles.toggle} onClick={toggle}>
    <svg aria-hidden="true" className={styles.moon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M19.7 15.1A8 8 0 0 1 8.9 4.3a8 8 0 1 0 10.8 10.8Z" /></svg>
    <svg aria-hidden="true" className={styles.sun} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
    <span aria-hidden="true" className={styles.thumb} />
  </button></div>;
}
