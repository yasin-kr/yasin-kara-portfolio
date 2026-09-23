import type { Translation } from "../types";

const de: Translation = {
  theme: { lightMode: "Helles Design" },
  contactForm: {
  "title": "Nachricht verfassen.",
  "name": "Vor- und Nachname",
  "email": "E-Mail-Adresse",
  "subject": "Betreff",
  "message": "Deine Nachricht",
  "send": "Senden"
},
  story: {
    title: "Hinter dem Sichtbaren",
    scenes: {
      "my-perspective": {
        title: "Eine gute Lösung beginnt mit der richtigen Frage.",
        description: "Ein wirksames Produkt beginnt mit einem klar definierten Bedarf. Unnötige Schritte zu entfernen und Abläufe zu vereinfachen, leitet die Entscheidungen in Design und Entwicklung.",
        imageAlt:
          "Eine goldene Lichtspur schlängelt sich durch ein dunkles Labyrinth zu einer geordneten Netzstruktur oben rechts.",
      },
      "behind-scenes": {
        title: "Hinter der Oberfläche steht ein System.",
        description: "Jede Interaktion beruht auf Datenflüssen, Anwendungslogik und verbundenen Komponenten. Ihr Zusammenspiel macht aus einem visuellen Entwurf ein funktionierendes Produkt.",
        imageAlt:
          "Leuchtende Datenpfade durchqueren transparente Ebenen und laufen vor einem dunkelblauen Hintergrund in einem Oberflächenpanel zusammen.",
      },
      "first-touch": {
        title: "Komplexe Abläufe. Klare Oberflächen.",
        description: "Eine klare Informationsstruktur und konsistente Interaktionen geben Orientierung. Relevante Inhalte zu finden und den nächsten Schritt zu verstehen, wird zum selbstverständlichen Teil der Nutzung.",
        imageAlt:
          "Geordnete blaue Oberflächenkarten auf hellem Hintergrund mit geometrischen Formen daneben.",
      },
      "first-look": {
        title: "Der erste Eindruck ist kein Zufall.",
        description: "Farbe, Licht und Raum prägen den Charakter einer Oberfläche auf den ersten Blick. Eine ausgewogene Bildsprache rückt Inhalte in den Fokus und schafft ein stimmiges Erlebnis.",
        imageAlt:
          "Glas- und Metallflächen, beleuchtet von blauem und goldenem Licht in einem dunkelblauen Raum.",
      },
    },
  },
  profile: {
    role: "Full-Stack-Entwickler",
    intro: "Webanwendungen, die Design und Funktionalität verbinden — entwickelt mit React, TypeScript und Node.js.",
    availability: "Kontakt",
    contactIntro: "Anfragen zu Projekten und Kooperationen können über das Kontaktformular übermittelt werden.",
    about: ["Praktische Erfahrung in der Projektentwicklung."],
    education: {
      name: "GoIT Full Stack Developer",
      completed: "14. August 2026",
    },
  },
  projects: {
  "taskpro": {
    "role": "Full Stack Developer",
    "summary": "Ein Teamprojekt mit Aufgaben in der Full Stack Entwicklung.",
    "contributions": ["Abläufe zum Erstellen, Anzeigen, Aktualisieren und Löschen von Boards und Spalten; Anbindung des Dashboards an Backend-APIs.","Integration von Dashboard und Karten, labelbasierte Filter, Theme-Wechsel und Persistenz der Aufgaben-Arbeitsbereiche."]
  },
  "money-guard": {
    "role": "Teamleiter",
    "summary": "Ein React- und Redux-Projekt eines sechsköpfigen Teams.",
    "contributions": ["Koordination der Entwicklung von Finanz-Dashboard, Authentifizierung, geschützten Routen, Transaktionsverwaltung, Saldo und Statistiken.","Asynchrone Zustandsverwaltung, Sitzungspersistenz, wiederverwendbare API-Clients, Formularvalidierung und Diagrammberichte."]
  },
  "cinemania": {
    "role": "Teamleiter",
    "summary": "Ein JavaScript- und TMDB-Projekt eines fünfköpfigen Teams.",
    "contributions": ["Koordination der Teamentwicklung; Filmentdeckung mit TMDB, Paginierung, Filmdetaildialog und responsive Oberfläche.","Beiträge zu wöchentlichen Trends sowie Verbesserungen der Oberfläche und Performance."]
  }
},
  navigation: {
    work: "Projekte",
    about: "Profil",
    contact: "Kontakt",
  },
  pages: {
    allProjects: "Alle Projekte ansehen",
    viewProject: "Projekt ansehen",
    readAbout: "Projektbeiträge",
    teamworkIndex: "ZUSAMMENARBEIT IM TEAM",
    teamworkTitle: ["Gemeinsam entwickeln", "Verantwortung tragen"],
    teamworkIntro:
      "Praktische Erfahrung in der Projektentwicklung.",
  },
  toolkit: {
    frontend: "Benutzeroberfläche",
    backend: "Server",
    tools: "Werkzeuge",
    responsiveDesign: "Responsives Design",
  },
  ui: {
    skipToContent: "Zum Inhalt springen",
    home: "Startseite",
    menu: "Menü",
    close: "Schließen",
    mainNavigation: "Hauptnavigation",
    footerNavigation: "Navigation im Fußbereich",
    selectLanguage: "Sprache auswählen",
    heroEyebrow: "Aus der Sicht eines Entwicklers",
    viewWork: "Ausgewählte Projekte ansehen",
    getInTouch: "Kontakt aufnehmen",
    heroFootnote: "Klares Design. Stimmiges Erlebnis.",
    exploreBelow: "Weiter entdecken",
    workIndex: "DIE PROJEKTE",
    workTitle: ["Ausgewählte", "Projekte"],
    workNote:
      "Verschiedene Projekte. Derselbe Anspruch, durch Praxis zu lernen.",
    coverSelectedWork: "YK / AUSGEWÄHLTE PROJEKTE",
    projectCover: "PROJEKTCOVER",
    coverDescription: "Typografisches Projektcover für {name}",
    projectTechnologies: "Technologien von {name}",
    contribution: "Projektbeiträge",
    liveSite: "Website besuchen",
    aboutIndex: "Profilinformationen",
    aboutTitle: ["Ein anderer Weg", "Dieselbe Neugier"],
    aboutCaption: "INGENIEURWESEN → SOFTWAREENTWICKLUNG",
    storyLead:
      "Von der Koordination von Abläufen zum Verbinden der Bausteine des Webs.",
    nextChapter: "DAS NÄCHSTE KAPITEL",
    toolkitIndex: "TECHNOLOGIEN",
    toolkitTitle: ["Technische", "Werkzeuge"],
    toolkitNote: "Praktische Erfahrung in der Projektentwicklung.",
    contactIndex: "WIE ES WEITERGEHT",
    contactTitle: ["Kontakt","und Zusammenarbeit"],
    viewCv: "Lebenslauf ansehen",
    backToTop: "Nach oben",
    metaDescription:
      "Yasin Kara ist Full-Stack-Entwickler und entwickelt durchdachte Webanwendungen mit React, TypeScript und Node.js. Entdecken Sie ausgewählte Projekte und seinen Hintergrund im Ingenieurwesen.",
  },
};

export default de;
