import styles from "../App.module.css";
import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";
import { pagePaths } from "../data/pages";

export function Hero() {
  const { profile, t, textDirection } = useLanguage();
  const [firstName, ...lastName] = profile.name.split(" ");
  return (
    <section
      id="home"
      className={styles["hero"] + " " + styles["page-width"]}
      aria-labelledby="hero-title"
    >
      <div className={styles["hero-eyebrow"]}>
        <span className={styles["eyebrow"]} dir={textDirection}>
          {t.ui.heroEyebrow}
        </span>
        <span className={styles["availability"]}>
          <span aria-hidden="true" />
          <span dir={textDirection}>{profile.availability}</span>
        </span>
      </div>
      <h1 id="hero-title" className={styles["hero-name"]}>
        {firstName} <em>{lastName.join(" ")}</em>
      </h1>
      <div className={styles["hero-introduction"]}>
        <div className={styles["hero-role"]}>
          <span className={styles["role-line"]} aria-hidden="true" />
          <div>
            <p dir={textDirection}>{profile.role}</p>
          </div>
        </div>
        <div className={styles["hero-description"]}>
          <p dir={textDirection}>{profile.intro}</p>
          <div className={styles["hero-actions"]}>
            <a
              href={pagePaths.projects}
              className={styles["button"] + " " + styles["button--primary"]}
            >
              <span dir={textDirection}>{t.ui.viewWork}</span>
              <Arrow />
            </a>
            <a href={pagePaths.contact} className={styles["text-link"]}>
              <span dir={textDirection}>{t.ui.getInTouch}</span>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["hero-bottom"]}>
        <span className={styles["eyebrow"]} dir={textDirection}>
          {t.ui.heroFootnote}
        </span>
        <a href="#featured-work" className={styles["scroll-link"]}>
          <span dir={textDirection}>{t.ui.exploreBelow}</span>
          <Arrow direction="down" />
        </a>
      </div>
    </section>
  );
}
