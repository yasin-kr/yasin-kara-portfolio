import styles from "../App.module.css";
import type { Project } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";
import { isWebUrl } from "../utils/links";

export function ProjectCover({ project }: { project: Project }) {
  const { t, textDirection } = useLanguage();
  const [primaryTitle, secondaryTitle] = project.coverTitle ?? [project.name];
  if (project.image) {
    return (
      <div className={styles["project-image"]}>
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={`${styles["project-cover"]} ${styles[`project-cover--${project.cover}`]}`}
      role="img"
      aria-label={t.ui.coverDescription.replace("{name}", project.name)}
    >
      <div className={styles["cover-top"]} aria-hidden="true">
        <span dir={textDirection}>{t.ui.coverSelectedWork}</span>
        <span>{project.number}</span>
      </div>
      <div className={styles["cover-art"]} aria-hidden="true">
        {project.cover === "taskpro" && (
          <>
            <div
              className={
                styles["cover-outline"] + " " + styles["cover-outline--one"]
              }
            />
            <div
              className={
                styles["cover-outline"] + " " + styles["cover-outline--two"]
              }
            />
            <span className={styles["cover-title"]}>
              {primaryTitle}
              <span>{secondaryTitle}</span>
            </span>
          </>
        )}
        {project.cover === "moneyguard" && (
          <>
            <div
              className={
                styles["money-circle"] + " " + styles["money-circle--one"]
              }
            />
            <div
              className={
                styles["money-circle"] + " " + styles["money-circle--two"]
              }
            />
            <span className={styles["cover-title"]}>
              {primaryTitle}
              {secondaryTitle && (
                <>
                  <br />
                  <em>{secondaryTitle}</em>
                </>
              )}
            </span>
          </>
        )}
        {project.cover === "cinemania" && (
          <>
            <div className={styles["cinema-frame"]} />
            <span className={styles["cover-title"]}>
              {primaryTitle}
              <span>{secondaryTitle}</span>
            </span>
            <span className={styles["cinema-star"]}>✳</span>
          </>
        )}
      </div>
      <div className={styles["cover-bottom"]} aria-hidden="true">
        <span dir={textDirection}>{t.ui.projectCover}</span>
        <span>{project.name}</span>
      </div>
    </div>
  );
}

function ProjectArticle({ project }: { project: Project }) {
  const { t, textDirection } = useLanguage();
  const hasRepository = isWebUrl(project.repositoryUrl);
  const hasLiveSite = isWebUrl(project.liveUrl);
  return (
    <article
      id={project.id}
      className={styles["project"]}
      aria-labelledby={`${project.id}-title`}
    >
      {hasLiveSite ? (
        <a
          href={project.liveUrl}
          className={styles["project-visual-link"]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} — ${t.ui.liveSite}`}
        >
          <ProjectCover project={project} />
        </a>
      ) : <ProjectCover project={project} />}
      <div className={styles["project-info"]}>
        <div className={styles["project-meta"]}>
          <span className={styles["eyebrow"]} dir={textDirection}>
            {project.role}
          </span>
        </div>
        <h2 id={`${project.id}-title`}>{project.name}</h2>
        <p className={styles["project-summary"]} dir={textDirection}>
          {project.summary}
        </p>
        {project.technologies.length > 0 && (
          <ul
            className={styles["technology-list"]}
            aria-label={t.ui.projectTechnologies.replace(
              "{name}",
              project.name,
            )}
          >
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
        {project.contributions.length > 0 && (
          <details className={styles["contribution"]}>
            <summary>
              <span dir={textDirection}>{t.ui.contribution}</span>
              <span className={styles["details-icon"]} aria-hidden="true" />
            </summary>
            <ul dir={textDirection}>
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        )}
        {(hasRepository || hasLiveSite) && (
          <div className={styles["project-links"]}>
            {hasLiveSite && (
              <a
                className={styles["project-site-button"]}
                href={project.liveUrl}
                title={`${project.name} — ${t.ui.liveSite}`}
                aria-label={`${project.name} — ${t.ui.liveSite}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span dir={textDirection}>{t.ui.liveSite}</span>
                <Arrow />
              </a>
            )}
            {hasRepository && (
              <a
                className={styles["text-link"]}
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <Arrow />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function SelectedWork() {
  const { projects, t, textDirection } = useLanguage();
  return (
    <section
      id="work"
      className={
        styles["work"] + " " + styles["page-width"] + " " + styles["section"]
      }
      aria-labelledby="work-title"
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
          <h1
            className={styles["page-title"]}
            id="work-title"
            dir={textDirection}
          >
            {t.ui.workTitle[0]} <em>{t.ui.workTitle[1]}</em>
          </h1>
        </div>
        <p className={styles["section-note"]} dir={textDirection}>
          {t.ui.workNote}
        </p>
      </div>
      <div className={styles["project-list"]}>
        {projects.map((project) => (
          <ProjectArticle key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
