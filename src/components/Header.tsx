import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "../data/portfolio";

export function Header() {
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
        aria-label={`${profile.name}, home`}
        onClick={() => setIsOpen(false)}
      >
        {profile.name.toLocaleLowerCase("en")}
        <span className="wordmark-dot">.</span>
      </a>
      <button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
        <span
          className={`menu-icon ${isOpen ? "is-open" : ""}`}
          aria-hidden="true"
        >
          <span />
          <span />
        </span>
      </button>
      <nav
        id="primary-navigation"
        className={`navigation ${isOpen ? "navigation--open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            <span className="nav-number" aria-hidden="true">
              0{index + 1}
            </span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
