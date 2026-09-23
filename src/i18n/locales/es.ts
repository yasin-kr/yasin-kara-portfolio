import type { Translation } from "../types";

const es: Translation = {
  theme: { lightMode: "Tema claro" },
  contactForm: {
  "title": "Redactar un mensaje.",
  "name": "Nombre y apellidos",
  "email": "Correo electrónico",
  "subject": "Asunto",
  "message": "Tu mensaje",
  "send": "Enviar"
},
  story: {
    title: "Detrás de lo que ves",
    scenes: {
      "my-perspective": {
        title: "Una buena solución empieza con la pregunta adecuada.",
        description: "La base de un producto eficaz es una necesidad bien definida. Eliminar pasos innecesarios y simplificar procesos orienta las decisiones de diseño y desarrollo.",
        imageAlt:
          "Un rastro de luz dorada serpentea por un laberinto oscuro hasta llegar a una red ordenada en la esquina superior derecha.",
      },
      "behind-scenes": {
        title: "Detrás de lo visible hay un sistema.",
        description: "Cada interacción se apoya en flujos de datos, lógica de aplicación y componentes conectados. Su coordinación convierte el diseño visual en un producto funcional.",
        imageAlt:
          "Rutas de datos luminosas atraviesan capas transparentes y convergen en un panel de interfaz sobre un fondo azul oscuro.",
      },
      "first-touch": {
        title: "Procesos complejos. Interfaces claras.",
        description: "Una estructura de información clara y unas interacciones coherentes orientan al usuario. Encontrar el contenido y comprender el siguiente paso forman parte natural de la experiencia.",
        imageAlt:
          "Tarjetas de interfaz azules ordenadas sobre un fondo claro, con piezas geométricas a su lado.",
      },
      "first-look": {
        title: "La primera impresión no es casualidad.",
        description: "El color, la luz y el espacio definen el carácter de una interfaz a primera vista. Un lenguaje visual equilibrado destaca el contenido y aporta coherencia a la experiencia.",
        imageAlt:
          "Superficies de vidrio y metal iluminadas por luz azul y dorada en un espacio azul marino oscuro.",
      },
    },
  },
  profile: {
    role: "Desarrollador full stack",
    intro: "Aplicaciones web donde el diseño se une a la funcionalidad, desarrolladas con React, TypeScript y Node.js.",
    availability: "Contacto",
    contactIntro: "El formulario de contacto permite compartir consultas sobre proyectos y colaboraciones.",
    about: ["Experiencia práctica en desarrollo de proyectos."],
    education: {
      name: "GoIT Full Stack Developer",
      completed: "14 de agosto de 2026",
    },
  },
  projects: {
  "taskpro": {
    "role": "Desarrollador Full Stack",
    "summary": "Un proyecto en equipo con responsabilidades de desarrollo Full Stack.",
    "contributions": ["Flujos de creación, consulta, actualización y eliminación de tableros y columnas; integración del panel con las API del backend.","Integración del panel y las tarjetas, filtrado por etiquetas, cambio de tema y persistencia de los espacios de trabajo."]
  },
  "money-guard": {
    "role": "Líder de equipo",
    "summary": "Un proyecto de React y Redux desarrollado por un equipo de seis personas.",
    "contributions": ["Coordinación del desarrollo del panel financiero, autenticación, rutas protegidas, gestión de transacciones, saldo y estadísticas.","Gestión asíncrona del estado, persistencia de sesiones, clientes API reutilizables, validación de formularios e informes con gráficos."]
  },
  "cinemania": {
    "role": "Líder de equipo",
    "summary": "Un proyecto de JavaScript y TMDB desarrollado por un equipo de cinco personas.",
    "contributions": ["Coordinación del desarrollo del equipo; descubrimiento de películas con TMDB, paginación, ventana de detalles e interfaz adaptable.","Contribuciones a tendencias semanales y mejoras de interfaz y rendimiento."]
  }
},
  navigation: { work: "Proyectos", about: "Perfil", contact: "Contacto" },
  pages: {
    allProjects: "Ver todos los proyectos",
    viewProject: "Explorar proyecto",
    readAbout: "Contribuciones al proyecto",
    teamworkIndex: "TRABAJAR EN EQUIPO",
    teamworkTitle: ["Trabajo compartido", "Responsabilidad real"],
    teamworkIntro:
      "Experiencia práctica en desarrollo de proyectos.",
  },
  toolkit: {
    frontend: "Interfaz",
    backend: "Servidor",
    tools: "Herramientas",
    responsiveDesign: "Diseño adaptable",
  },
  ui: {
    skipToContent: "Saltar al contenido",
    home: "Inicio",
    menu: "Menú",
    close: "Cerrar",
    mainNavigation: "Navegación principal",
    footerNavigation: "Navegación del pie de página",
    selectLanguage: "Seleccionar idioma",
    heroEyebrow: "La mirada de un desarrollador",
    viewWork: "Ver proyectos seleccionados",
    getInTouch: "Contactar",
    heroFootnote: "Diseño claro. Experiencia coherente.",
    exploreBelow: "Sigue explorando",
    workIndex: "LOS PROYECTOS",
    workTitle: ["Proyectos", "seleccionados"],
    workNote: "Proyectos distintos. Un mismo compromiso con aprender creando.",
    coverSelectedWork: "YK / PROYECTOS SELECCIONADOS",
    projectCover: "PORTADA DEL PROYECTO",
    coverDescription: "Portada tipográfica del proyecto {name}",
    projectTechnologies: "Tecnologías de {name}",
    contribution: "Contribuciones al proyecto",
    liveSite: "Visitar sitio",
    aboutIndex: "Información del perfil",
    aboutTitle: ["Un camino distinto", "La misma curiosidad"],
    aboutCaption: "INGENIERÍA → DESARROLLO",
    storyLead: "De coordinar operaciones a conectar las piezas de la web.",
    nextChapter: "EL SIGUIENTE CAPÍTULO",
    toolkitIndex: "TECNOLOGÍAS",
    toolkitTitle: ["Herramientas", "técnicas"],
    toolkitNote:
      "Experiencia práctica en desarrollo de proyectos.",
    contactIndex: "EL PRÓXIMO PASO",
    contactTitle: ["Contacto","y colaboración"],
    viewCv: "Ver currículum",
    backToTop: "Volver arriba",
    metaDescription:
      "Yasin Kara es un desarrollador full stack que crea experiencias web cuidadas con React, TypeScript y Node.js. Descubre sus proyectos seleccionados y su trayectoria en ingeniería.",
  },
};

export default es;
