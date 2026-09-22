import styles from "../App.module.css";
import { useLanguage } from "../i18n/LanguageContext";

export function Toolkit() {
  const { toolkit, t, textDirection } = useLanguage();
  return (
    <section
      className={
        styles["toolkit"] + " " + styles["page-width"] + " " + styles["section"]
      }
      aria-labelledby="toolkit-title"
    >
      <div className={styles["toolkit-intro"]}>
        <p
          className={styles["eyebrow"] + " " + styles["section-index"]}
          dir={textDirection}
        >
          {t.ui.toolkitIndex}
        </p>
        <h2 id="toolkit-title" dir={textDirection}>
          {t.ui.toolkitTitle[0]} <em>{t.ui.toolkitTitle[1]}</em>
        </h2>
        <p dir={textDirection}>{t.ui.toolkitNote}</p>
      </div>
      <div className={styles["toolkit-groups"]}>
        {toolkit.map((group, index) => (
          <div className={styles["toolkit-group"]} key={group.name}>
            <div className={styles["toolkit-group-heading"]}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3 dir={textDirection}>{group.name}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item} dir="auto">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
