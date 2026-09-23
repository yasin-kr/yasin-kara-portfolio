import styles from "../App.module.css";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { currentPage, pagePaths } from "../data/pages";

export function Header() {
  const { navigation, profile, t, textDirection } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 701px)");
    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  return (
    <header className={styles["site-header"]}>
      <div className={styles["header"] + " " + styles["page-width"]}>
        <a
          href={pagePaths.home}
          className={styles["wordmark"]}
          aria-label={`${profile.name}, ${t.ui.home}`}
          onClick={() => setIsOpen(false)}
        >
          <img src="/images/logo_yk.png" alt="YK" width={1254} height={1254} />
        </a>
        <div className={styles["header-actions"]}>
          <button
            ref={buttonRef}
            type="button"
            className={styles["menu-toggle"]}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={styles["mobile-menu-label"]} dir={textDirection}>
              {isOpen ? t.ui.close : t.ui.menu}
            </span>
            <span
              className={`${styles["menu-icon"]} ${isOpen ? styles["is-open"] : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
          <LanguageSelector onOpen={() => setIsOpen(false)} />
          <ThemeToggle />
        </div>
        <nav
          id="primary-navigation"
          className={`${styles.navigation} ${isOpen ? styles["navigation--open"] : ""}`}
          aria-label={t.ui.mainNavigation}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                item.href === pagePaths[currentPage] ? "page" : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              <span className={styles["header-link-label"]} dir={textDirection}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
