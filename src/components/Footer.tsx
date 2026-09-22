import styles from "../App.module.css";
import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";
import { currentPage, pagePaths } from "../data/pages";

export function Footer() {
  const { navigation, profile, t, textDirection } = useLanguage();
  return (
    <footer className={styles["footer"] + " " + styles["page-width"]}>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <nav aria-label={t.ui.footerNavigation}>
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            dir={textDirection}
            aria-current={
              item.href === pagePaths[currentPage] ? "page" : undefined
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a href="#top" className={styles["back-top"]}>
        <span dir={textDirection}>{t.ui.backToTop}</span>
        <Arrow direction="up" />
      </a>
    </footer>
  );
}
