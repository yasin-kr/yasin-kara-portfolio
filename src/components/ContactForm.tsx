import { useLanguage } from "../i18n/LanguageContext";
import { Arrow } from "./Arrow";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const { t, textDirection } = useLanguage();
  const copy = t.contactForm;
  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()} aria-labelledby="message-title">
      <h2 id="message-title" dir={textDirection}>{copy.title}</h2>
      <div className={styles.row}>
        <label dir={textDirection}>{copy.name}<input name="name" autoComplete="name" required maxLength={100} dir="auto" /></label>
        <label dir={textDirection}>{copy.email}<input name="email" type="email" autoComplete="email" required maxLength={254} dir="ltr" /></label>
      </div>
      <label dir={textDirection}>{copy.subject}<input name="subject" required maxLength={180} dir="auto" /></label>
      <label dir={textDirection}>{copy.message}<textarea name="message" rows={5} required maxLength={5000} dir="auto" /></label>
      <div className={styles.actions}>
        <button type="submit" disabled><span dir={textDirection}>{copy.send}</span><Arrow /></button>
      </div>
    </form>
  );
}
