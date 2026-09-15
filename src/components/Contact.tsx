import { profile } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { isCvUrl, isEmail, isWebUrl } from "../utils/links";

export function Contact() {
  const { contact } = profile;
  const links = [
    {
      label: "GitHub",
      href: isWebUrl(contact.github) ? contact.github : undefined,
    },
    {
      label: "LinkedIn",
      href: isWebUrl(contact.linkedin) ? contact.linkedin : undefined,
    },
    { label: "View CV", href: isCvUrl(contact.cv) ? contact.cv : undefined },
  ].filter((link): link is { label: string; href: string } =>
    Boolean(link.href),
  );

  return (
    <section
      id="contact"
      className="contact page-width section"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="contact-top">
        <p className="eyebrow section-index">03 / WHAT’S NEXT</p>
        <span className="availability">
          <span aria-hidden="true" />
          {profile.availability}
        </span>
      </div>
      <div className="contact-layout">
        <div>
          <h2 id="contact-title">
            Let’s work
            <br />
            <em>together.</em>
          </h2>
          {isEmail(contact.email) && (
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email}
              <Arrow />
            </a>
          )}
        </div>
        <div className="contact-description">
          <span className="contact-asterisk" aria-hidden="true">
            ✳
          </span>
          <p>{profile.contactIntro}</p>
          <span className="contact-location">Based in {profile.location}</span>
          {links.length > 0 && (
            <div className="contact-links">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <Arrow />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
