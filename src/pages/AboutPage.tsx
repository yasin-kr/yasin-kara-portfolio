import styles from "../App.module.css";
import { About } from "../components/About";
import { Toolkit } from "../components/Toolkit";
import { Arrow } from "../components/Arrow";
import { useLanguage } from "../i18n/LanguageContext";
import { pagePaths } from "../data/pages";

export function AboutPage() {
  const { projects, t, textDirection } = useLanguage();
  const teamProjects = projects.filter(
    (project) => project.contributions.length > 0,
  );
  return (
    <>
      <About />
      <section
        className={
          styles["teamwork"] +
          " " +
          styles["page-width"] +
          " " +
          styles["section"]
        }
        aria-labelledby="teamwork-title"
      >
        <div className={styles["teamwork-intro"]}>
          <div>
            <p
              className={styles["eyebrow"] + " " + styles["section-index"]}
              dir={textDirection}
            >
              {t.pages.teamworkIndex}
            </p>
            <h2 id="teamwork-title" dir={textDirection}>
              {t.pages.teamworkTitle[0]}
              <br />
              <em>{t.pages.teamworkTitle[1]}</em>
            </h2>
          </div>
          <p dir={textDirection}>{t.pages.teamworkIntro}</p>
        </div>
        <div className={styles["teamwork-projects"]}>
          {teamProjects.map((project) => (
            <article className={styles["teamwork-project"]} key={project.id}>
              <p className={styles["eyebrow"]} dir={textDirection}>
                {project.role}
              </p>
              <h3>{project.name}</h3>
              <p className={styles["teamwork-description"]} dir={textDirection}>
                {project.contributions[0]}
              </p>
              <a
                href={`${pagePaths.projects}#${project.id}`}
                className={styles["text-link"]}
              >
                <span dir={textDirection}>{t.pages.viewProject}</span>
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>
      <Toolkit />
    </>
  );
}
