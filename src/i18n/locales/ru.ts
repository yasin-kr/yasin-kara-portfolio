import type { Translation } from "../types";

const ru: Translation = {
  profile: {
    role: "Full Stack-разработчик",
    location: "Кютахья, Турция",
    intro:
      "Создаю продуманные веб-интерфейсы с помощью React, TypeScript и Node.js.",
    availability: "Открыт к работе в разработке",
    contactIntro:
      "Ищу работу в разработке, где смогу приносить пользу, продолжать учиться и создавать проекты вместе с командой.",
    about: [
      "Я инженер по логистике, ранее работал сменным инженером на производстве. Опыт организации процессов, ответственность и работа в команде определяют мой подход к разработке программного обеспечения.",
      "Я окончил программу GoIT Full Stack Developer и теперь строю карьеру в разработке. Работаю с React и TypeScript и продолжаю укреплять знания Node.js на практических проектах.",
    ],
    education: {
      name: "Программа GoIT Full Stack Developer",
      completed: "14 августа 2026",
    },
  },
  projects: {
    taskpro: {
      role: "Full Stack-разработчик",
      summary: "Проект, в котором я участвовал как Full Stack-разработчик.",
      contributions: [],
    },
    "money-guard": {
      role: "Руководитель команды",
      summary: "Проект на React и Redux, созданный командой из семи человек.",
      contributions: [
        "Руководил командой из семи человек, работал над управлением состоянием с помощью Redux Toolkit и сохранением токенов.",
        "Отвечал за API-клиент, аутентификацию и данные о транзакциях, категориях, статистике и валютах.",
      ],
    },
    cinemania: {
      role: "Руководитель команды",
      summary: "Командный проект на JavaScript с использованием Vite, Axios и TMDB.",
      contributions: [
        "Руководил командой, работал над разделом «Тренды недели», модальным окном с информацией о фильме и улучшениями интерфейса.",
        "Улучшал производительность в разных частях проекта.",
      ],
    },
  },
  navigation: { work: "Проекты", about: "Обо мне", contact: "Контакты" },
  toolkit: {
    frontend: "Фронтенд",
    backend: "Бэкенд",
    tools: "Инструменты",
    responsiveDesign: "Адаптивный дизайн",
  },
  ui: {
    skipToContent: "Перейти к содержимому",
    home: "Главная",
    menu: "Меню",
    close: "Закрыть",
    mainNavigation: "Основная навигация",
    footerNavigation: "Навигация внизу страницы",
    selectLanguage: "Выбрать язык",
    heroEyebrow: "Взгляд разработчика",
    viewWork: "Смотреть проекты",
    getInTouch: "Связаться",
    heroFootnote: "Инженерная основа. Новое направление.",
    exploreBelow: "Узнать больше",
    workIndex: "01 / Проекты",
    workTitle: ["Избранные", "проекты."],
    workNote: "Разные проекты. Общее стремление учиться на практике.",
    coverSelectedWork: "YK / Избранные проекты",
    projectCover: "Обложка проекта",
    coverDescription: "Типографическая обложка проекта {name}",
    projectTechnologies: "Технологии проекта {name}",
    contribution: "Мой вклад",
    liveSite: "Открыть сайт",
    aboutIndex: "02 / Немного обо мне",
    aboutTitle: ["Другой путь.", "Тот же интерес."],
    aboutCaption: "От инженерии к разработке",
    storyLead: "От координации процессов к объединению компонентов веба.",
    nextChapter: "Следующая глава",
    toolkitIndex: "Инструменты, с которыми я работаю",
    toolkitTitle: ["Инструменты", "разработки."],
    toolkitNote: "Практический опыт, полученный в проектах. Постоянно его пополняю.",
    contactIndex: "03 / Что дальше",
    contactTitle: ["Давайте работать", "вместе."],
    basedIn: "Местоположение: {location}",
    viewCv: "Смотреть резюме",
    backToTop: "Наверх",
    metaDescription:
      "Yasin Kara — Full Stack-разработчик из Кютахьи, Турция. Создаёт продуманные веб-интерфейсы с помощью React, TypeScript и Node.js. Избранные проекты и опыт в инженерии.",
  },
};

export default ru;
