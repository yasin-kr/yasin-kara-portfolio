import styles from "../App.module.css";
import { Hero } from "../components/Hero";
import { ProjectCover } from "../components/SelectedWork";
import { Arrow } from "../components/Arrow";
import { useLanguage } from "../i18n/LanguageContext";
import { pagePaths } from "../data/pages";

export function HomePage() {
  const { profile, projects, t, textDirection } = useLanguage();
  return (
    <>
      <Hero />
      <section
        id="featured-work"
        className={styles["page-width"] + " " + styles["section"]}
        aria-labelledby="featured-title"
        tabIndex={-1}
      >
        <div className={styles["section-heading"]}>
          <div>
            <p
              className={styles["eyebrow"] + " " + styles["section-index"]}
              dir={textDirection}
            >
              {t.ui.workIndex}
            </p>
            <h2 id="featured-title" dir={textDirection}>
              {t.ui.workTitle[0]} <em>{t.ui.workTitle[1]}</em>
            </h2>
          </div>
          <a href={pagePaths.projects} className={styles["text-link"]}>
            <span dir={textDirection}>{t.pages.allProjects}</span>
            <Arrow />
          </a>
        </div>
        <div className={styles["project-previews"]}>
          {projects.map((project) => (
            <article className={styles["project-preview"]} key={project.id}>
              <a
                href={`${pagePaths.projects}#${project.id}`}
                aria-label={`${project.name} — ${t.pages.viewProject}`}
                className={styles["project-preview-link"]}
              >
                <ProjectCover project={project} />
                <div className={styles["preview-title"]}>
                  <h3>{project.name}</h3>
                  <Arrow />
                </div>
              </a>
              <p
                className={styles["eyebrow"] + " " + styles["preview-role"]}
                dir={textDirection}
              >
                {project.role}
              </p>
              <p className={styles["preview-summary"]} dir={textDirection}>
                {project.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        className={styles["home-about"] + " " + styles["section"]}
        aria-labelledby="home-about-title"
      >
        <div
          className={styles["page-width"] + " " + styles["home-about-layout"]}
        >
          <div>
            <p
              className={styles["eyebrow"] + " " + styles["section-index"]}
              dir={textDirection}
            >
              {t.ui.aboutIndex}
            </p>
            <h2 id="home-about-title" dir={textDirection}>
              {t.ui.aboutTitle[0]}
              <br />
              <em>{t.ui.aboutTitle[1]}</em>
            </h2>
          </div>
          <div className={styles["home-about-copy"]}>
            <p dir={textDirection}>{profile.about[0]}</p>
            <div className={styles["home-about-links"]}>
              <a href={pagePaths.about} className={styles["text-link"]}>
                <span dir={textDirection}>{t.pages.readAbout}</span>
                <Arrow />
              </a>
              <a href={pagePaths.contact} className={styles["text-link"]}>
                <span dir={textDirection}>{t.ui.getInTouch}</span>
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
