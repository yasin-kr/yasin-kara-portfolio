import styles from "../App.module.css";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { profile, t, textDirection } = useLanguage();
  return (
    <section
      id="about"
      className={styles["about"] + " " + styles["section"]}
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className={styles["page-width"] + " " + styles["about-layout"]}>
        <div className={styles["about-heading"]}>
          <p
            className={styles["eyebrow"] + " " + styles["section-index"]}
            dir={textDirection}
          >
            {t.ui.aboutIndex}
          </p>
          <h1
            className={styles["page-title"]}
            id="about-title"
            dir={textDirection}
          >
            {t.ui.aboutTitle[0]}
            <br />
            <em>{t.ui.aboutTitle[1]}</em>
          </h1>
          <div className={styles["about-mark"]} aria-hidden="true">
            <span>y</span>
            <em>k</em>
          </div>
          <p className={styles["about-caption"]} dir={textDirection}>
            {t.ui.aboutCaption}
          </p>
        </div>
        <div className={styles["about-story"]}>
          <p className={styles["story-lead"]} dir={textDirection}>
            {t.ui.storyLead}
          </p>
          {profile.about.map((paragraph) => (
            <p key={paragraph} dir={textDirection}>
              {paragraph}
            </p>
          ))}
          <div className={styles["education"]}>
            <span className={styles["education-symbol"]} aria-hidden="true">
              ↗
            </span>
            <div>
              <span className={styles["eyebrow"]} dir={textDirection}>
                {t.ui.nextChapter}
              </span>
              <h2 dir="auto">{profile.education.name}</h2>
              <p dir={textDirection}>{profile.education.completed}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
