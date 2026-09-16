import { useLanguage } from "../i18n/LanguageContext";

export function Toolkit() {
  const { toolkit, t, textDirection } = useLanguage();
  return (
    <section
      className="toolkit page-width section"
      aria-labelledby="toolkit-title"
    >
      <div className="toolkit-intro">
        <p className="eyebrow section-index" dir={textDirection}>{t.ui.toolkitIndex}</p>
        <h2 id="toolkit-title" dir={textDirection}>
          {t.ui.toolkitTitle[0]} <em>{t.ui.toolkitTitle[1]}</em>
        </h2>
        <p dir={textDirection}>
          {t.ui.toolkitNote}
        </p>
      </div>
      <div className="toolkit-groups">
        {toolkit.map((group, index) => (
          <div className="toolkit-group" key={group.name}>
            <div className="toolkit-group-heading">
              <span aria-hidden="true">0{index + 1}</span>
              <h3 dir={textDirection}>{group.name}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item} dir="auto">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
