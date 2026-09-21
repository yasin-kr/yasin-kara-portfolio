import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";
import { pagePaths } from "../data/pages";

export function Hero() {
  const { profile, t, textDirection } = useLanguage();
  const [firstName, ...lastName] = profile.name.split(" ");
  return (
    <section id="home" className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-eyebrow">
        <span className="eyebrow" dir={textDirection}>
          {t.ui.heroEyebrow}
        </span>
        <span className="availability">
          <span aria-hidden="true" />
          <span dir={textDirection}>{profile.availability}</span>
        </span>
      </div>
      <h1 id="hero-title" className="hero-name">
        {firstName}{" "}
        <em>{lastName.join(" ")}</em>
      </h1>
      <div className="hero-introduction">
        <div className="hero-role">
          <span className="role-line" aria-hidden="true" />
          <div>
            <p dir={textDirection}>{profile.role}</p>
          </div>
        </div>
        <div className="hero-description">
          <p dir={textDirection}>{profile.intro}</p>
          <div className="hero-actions">
            <a href={pagePaths.projects} className="button button--primary">
              <span dir={textDirection}>{t.ui.viewWork}</span>
              <Arrow />
            </a>
            <a href={pagePaths.contact} className="text-link">
              <span dir={textDirection}>{t.ui.getInTouch}</span>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="eyebrow" dir={textDirection}>
          {t.ui.heroFootnote}
        </span>
        <a href="#featured-work" className="scroll-link">
          <span dir={textDirection}>{t.ui.exploreBelow}</span>
          <Arrow direction="down" />
        </a>
      </div>
    </section>
  );
}
