import type { Project } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";
import { isWebUrl } from "../utils/links";

function ProjectCover({ project }: { project: Project }) {
  const { t, textDirection } = useLanguage();
  const [primaryTitle, secondaryTitle] = project.coverTitle ?? [project.name];
  if (project.image) {
    return (
      <div className={`project-image project-image--${project.cover}`}>
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
      className={`project-cover project-cover--${project.cover}`}
      role="img"
      aria-label={t.ui.coverDescription.replace("{name}", project.name)}
    >
      <div className="cover-top" aria-hidden="true">
        <span dir={textDirection}>{t.ui.coverSelectedWork}</span>
        <span>{project.number}</span>
      </div>
      <div className="cover-art" aria-hidden="true">
        {project.cover === "taskpro" && (
          <>
            <div className="cover-outline cover-outline--one" />
            <div className="cover-outline cover-outline--two" />
            <span className="cover-title">
              {primaryTitle}
              <span>{secondaryTitle}</span>
              <span className="cover-period">.</span>
            </span>
          </>
        )}
        {project.cover === "moneyguard" && (
          <>
            <div className="money-circle money-circle--one" />
            <div className="money-circle money-circle--two" />
            <span className="cover-title">
              {primaryTitle}
              {secondaryTitle && (
                <>
                  <br />
                  <em>{secondaryTitle}.</em>
                </>
              )}
            </span>
          </>
        )}
        {project.cover === "cinemania" && (
          <>
            <div className="cinema-frame" />
            <span className="cover-title">
              {primaryTitle}
              <span>{secondaryTitle}</span>
            </span>
            <span className="cinema-star">✳</span>
          </>
        )}
      </div>
      <div className="cover-bottom" aria-hidden="true">
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
    <article className="project" aria-labelledby={`${project.id}-title`}>
      <ProjectCover project={project} />
      <div className="project-info">
        <div className="project-meta">
          <span className="project-number">/{project.number}</span>
          <span className="eyebrow" dir={textDirection}>
            {project.role}
          </span>
        </div>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-summary" dir={textDirection}>
          {project.summary}
        </p>
        {project.technologies.length > 0 && (
          <ul
            className="technology-list"
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
          <details className="contribution">
            <summary>
              <span dir={textDirection}>{t.ui.contribution}</span>
              <span className="details-icon" aria-hidden="true" />
            </summary>
            <ul dir={textDirection}>
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        )}
        {(hasRepository || hasLiveSite) && (
          <div className="project-links">
            {hasLiveSite && (
              <a
                className="text-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span dir={textDirection}>{t.ui.liveSite}</span>
                <Arrow />
              </a>
            )}
            {hasRepository && (
              <a
                className="text-link"
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
      className="work page-width section"
      aria-labelledby="work-title"
      tabIndex={-1}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-index" dir={textDirection}>
            {t.ui.workIndex}
          </p>
          <h2 id="work-title" dir={textDirection}>
            {t.ui.workTitle[0]} <em>{t.ui.workTitle[1]}</em>
          </h2>
        </div>
        <p className="section-note" dir={textDirection}>
          {t.ui.workNote}
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectArticle key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
