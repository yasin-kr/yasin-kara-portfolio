import { profile } from "../data/portfolio";
import { Arrow } from "./Arrow";

export function Hero() {
  const [firstName, ...lastName] = profile.name.split(" ");
  return (
    <section id="home" className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-eyebrow">
        <span className="eyebrow">A developer’s perspective</span>
        <span className="availability">
          <span aria-hidden="true" />
          {profile.availability}
        </span>
      </div>
      <h1 id="hero-title" className="hero-name">
        {firstName}{" "}
        <em>
          {lastName.join(" ")}
          <span>.</span>
        </em>
      </h1>
      <div className="hero-introduction">
        <div className="hero-role">
          <span className="role-line" aria-hidden="true" />
          <div>
            <p>{profile.role}</p>
            <span>{profile.location}</span>
          </div>
        </div>
        <div className="hero-description">
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <a href="#work" className="button button--primary">
              View selected work
              <Arrow direction="down" />
            </a>
            <a href="#contact" className="text-link">
              Get in touch
              <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="eyebrow">Engineering roots. A new direction.</span>
        <a href="#work" className="scroll-link">
          Explore below
          <Arrow direction="down" />
        </a>
      </div>
    </section>
  );
}
