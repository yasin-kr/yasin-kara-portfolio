import { profile } from "../data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="about section"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className="page-width about-layout">
        <div className="about-heading">
          <p className="eyebrow section-index">02 / A LITTLE ABOUT ME</p>
          <h2 id="about-title">
            A different path.
            <br />
            <em>The same curiosity.</em>
          </h2>
          <div className="about-mark" aria-hidden="true">
            <span>y</span>
            <em>k</em>
            <span className="about-mark-dot">.</span>
          </div>
          <p className="about-caption">ENGINEERING → DEVELOPMENT</p>
        </div>
        <div className="about-story">
          <p className="story-lead">
            From coordinating operations
            <br className="desktop-break" /> to connecting the pieces of the
            web.
          </p>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="education">
            <span className="education-symbol" aria-hidden="true">
              ↗
            </span>
            <div>
              <span className="eyebrow">THE NEXT CHAPTER</span>
              <h3>{profile.education.name}</h3>
              <p>{profile.education.completed}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
