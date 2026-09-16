import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { About } from "./components/About";
import { Toolkit } from "./components/Toolkit";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t, textDirection } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main" dir={textDirection}>
        {t.ui.skipToContent}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <About />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
