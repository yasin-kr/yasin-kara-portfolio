import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";
import { isCvUrl, isEmail, isWebUrl } from "../utils/links";

export function Contact() {
  const { profile, t, textDirection } = useLanguage();
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
    { label: t.ui.viewCv, href: isCvUrl(contact.cv) ? contact.cv : undefined },
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
        <p className="eyebrow section-index" dir={textDirection}>
          {t.ui.contactIndex}
        </p>
        <span className="availability">
          <span aria-hidden="true" />
          <span dir={textDirection}>{profile.availability}</span>
        </span>
      </div>
      <div className="contact-layout">
        <div>
          <h2 id="contact-title" dir={textDirection}>
            {t.ui.contactTitle[0]}
            <br />
            <em>{t.ui.contactTitle[1]}</em>
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
          <p dir={textDirection}>{profile.contactIntro}</p>
          <span className="contact-location" dir={textDirection}>
            {t.ui.basedIn.replace("{location}", profile.location)}
          </span>
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
                  <span dir="auto">{link.label}</span>
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
