import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { languages } from "../i18n/languages";
import type { Locale } from "../i18n/types";

export function LanguageSelector({ onOpen }: { onOpen: () => void }) {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedIndex = languages.findIndex(
    (language) => language.code === locale,
  );
  const selected = languages[selectedIndex];

  useEffect(() => {
    if (!isOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [isOpen]);

  function open(index = selectedIndex) {
    onOpen();
    setIsOpen(true);
    requestAnimationFrame(() => optionRefs.current[index]?.focus());
  }

  function choose(code: Locale) {
    setLocale(code);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  function handleMenuKey(event: KeyboardEvent<HTMLDivElement>) {
    const index = optionRefs.current.findIndex(
      (option) => option === document.activeElement,
    );
    let next: number | undefined;
    if (event.key === "ArrowDown") next = (index + 1) % languages.length;
    if (event.key === "ArrowUp")
      next = (index - 1 + languages.length) % languages.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = languages.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      optionRefs.current[next]?.focus();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      setIsOpen(false);
      triggerRef.current?.focus();
    }
    if (event.key === "Tab") {
      // Restore the trigger before native Tab moves to the next/previous control.
      triggerRef.current?.focus();
      setIsOpen(false);
    }
  }

  return (
    <div
      className="language-selector"
      ref={containerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className="language-trigger"
        aria-label={`${t.ui.selectLanguage}: ${selected.name}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            open(
              event.key === "ArrowUp" ? languages.length - 1 : selectedIndex,
            );
          }
        }}
      >
        <img
          className="language-flag"
          src={`/flags/${selected.flag}.svg`}
          width="21"
          height="14"
          alt=""
        />
        <span>{locale.toUpperCase()}</span>
        <svg
          className="language-chevron"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
        >
          <path d="m1 1 4 4 4-4" stroke="currentColor" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="language-menu"
          id="language-menu"
          role="menu"
          aria-label={t.ui.selectLanguage}
          onKeyDown={handleMenuKey}
        >
          {languages.map((language, index) => (
            <button
              type="button"
              className="language-option"
              key={language.code}
              data-locale={language.code}
              role="menuitemradio"
              aria-checked={locale === language.code}
              tabIndex={-1}
              ref={(element) => {
                optionRefs.current[index] = element;
              }}
              onClick={() => choose(language.code)}
            >
              <img
                className="language-flag"
                src={`/flags/${language.flag}.svg`}
                width="21"
                height="14"
                alt=""
              />
              <span lang={language.code} dir={language.direction}>
                {language.name}
              </span>
              <span className="language-check" aria-hidden="true">
                {locale === language.code ? "✓" : ""}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
