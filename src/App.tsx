import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { currentPage } from "./data/pages";
import { Footer } from "./components/Footer";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t, textDirection } = useLanguage();
  const Content = {
    home: HomePage,
    projects: ProjectsPage,
    about: AboutPage,
    contact: ContactPage,
  }[currentPage];
  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main" dir={textDirection}>
        {t.ui.skipToContent}
      </a>
      <Header />
      <main
        id="main"
        className={`page-content page-${currentPage}`}
        tabIndex={-1}
      >
        <Content />
      </main>
      <Footer />
    </div>
  );
}
