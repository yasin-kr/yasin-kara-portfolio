import { navigation, profile } from "../data/portfolio";
import { Arrow } from "./Arrow";

export function Footer() {
  return (
    <footer className="footer page-width">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a href="#home" className="back-top">
        Back to top
        <Arrow direction="up" />
      </a>
    </footer>
  );
}
