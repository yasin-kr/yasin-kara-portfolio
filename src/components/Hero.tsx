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
      className={styles["hero"] + " " + styles["hero-art"]}
      aria-labelledby="hero-title"
    >
      <img
        className={styles["hero-backdrop"]}
        src="/images/background-hero.png"
        alt=""
        width={1672}
        height={941}
        fetchPriority="high"
      />
      <div className={styles["hero-eyebrow"]}>
        <span className={styles["eyebrow"]} dir={textDirection}>
          {t.ui.heroEyebrow}
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
      </div>
    </section>
  );
}
