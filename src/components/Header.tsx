import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

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
    <header className="header page-width">
      <a
        href="#home"
        className="wordmark"
        aria-label={`${profile.name}, ${t.ui.home}`}
        onClick={() => setIsOpen(false)}
      >
        {profile.name.toLocaleLowerCase("en")}
        <span className="wordmark-dot">.</span>
      </a>
      <div className="header-actions"><button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mobile-menu-label" dir={textDirection}>{isOpen ? t.ui.close : t.ui.menu}</span>
        <span
          className={`menu-icon ${isOpen ? "is-open" : ""}`}
          aria-hidden="true"
        >
          <span />
          <span />
        </span>
      </button><LanguageSelector onOpen={() => setIsOpen(false)} /></div>
      <nav
        id="primary-navigation"
        className={`navigation ${isOpen ? "navigation--open" : ""}`}
        aria-label={t.ui.mainNavigation}
      >
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            <span className="nav-number" aria-hidden="true">
              0{index + 1}
            </span>
            <span dir={textDirection}>{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
