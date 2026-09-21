import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { profile, t, textDirection } = useLanguage();
  return (
    <section
      id="about"
      className="about section"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className="page-width about-layout">
        <div className="about-heading">
          <p className="eyebrow section-index" dir={textDirection}>
            {t.ui.aboutIndex}
          </p>
          <h1 className="page-title" id="about-title" dir={textDirection}>
            {t.ui.aboutTitle[0]}
            <br />
            <em>{t.ui.aboutTitle[1]}</em>
          </h1>
          <div className="about-mark" aria-hidden="true">
            <span>y</span>
            <em>k</em>
          </div>
          <p className="about-caption" dir={textDirection}>
            {t.ui.aboutCaption}
          </p>
        </div>
        <div className="about-story">
          <p className="story-lead" dir={textDirection}>
            {t.ui.storyLead}
          </p>
          {profile.about.map((paragraph) => (
            <p key={paragraph} dir={textDirection}>
              {paragraph}
            </p>
          ))}
          <div className="education">
            <span className="education-symbol" aria-hidden="true">
              ↗
            </span>
            <div>
              <span className="eyebrow" dir={textDirection}>
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
