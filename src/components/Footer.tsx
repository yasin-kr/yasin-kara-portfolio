import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";

export function Footer() {
  const { navigation, profile, t, textDirection } = useLanguage();
  return (
    <footer className="footer page-width">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <nav aria-label={t.ui.footerNavigation}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} dir={textDirection}>
            {item.label}
          </a>
        ))}
      </nav>
      <a href="#home" className="back-top">
        <span dir={textDirection}>{t.ui.backToTop}</span>
        <Arrow direction="up" />
      </a>
    </footer>
  );
}
