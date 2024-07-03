import {
  Bell,
  BookOpen,
  Folder,
  Headphones,
  Pause,
  PenTool,
  Zap,
} from "lucide-react";
import { links } from "@/shared/links";

export enum LanguageEnum {
  en = "en",
  ru = "ru",
  es = "es",
  ptBr = "pt-br",
}

export const languages = Object.values(LanguageEnum) as LanguageEnum[];

export const formatLanguageEnum = (lang: LanguageEnum): string => {
  switch (lang) {
    case LanguageEnum.en:
      return "English";
    case LanguageEnum.ru:
      return "Русский";
    case LanguageEnum.es:
      return "Español";
    case LanguageEnum.ptBr:
      return "Português";
    default:
      return lang satisfies never;
  }
};

const en = {
  footer: {
    links: {
      tgSupport: "Telegram Support",
      runInBrowser: "Run in browser",
      runInTelegram: "Run in Telegram",
      youtubeChannelEn: "YouTube Channel (EN)",
      youtubeChannelRu: "YouTube Channel (RU)",
      telegramChannel: "Telegram Channel",
    },
    groupTitles: {
      support: "Support",
      run: "Run MemoCard",
      other: "Other",
    },
  },
  features: {
    title: "Features",
    list: [
      {
        icon: Folder,
        title: "Organize Your Learning",
        description:
          "Create cards, decks, and deck folders to structure your knowledge.",
      },
      {
        icon: BookOpen,
        title: "Different Card Types",
        description:
          "Use regular cards or cards with pre-made answers to test your knowledge.",
      },
      {
        icon: Bell,
        title: "Smart Notifications",
        description:
          "Receive daily reminders for cards that need review, optimizing your study time.",
      },
      {
        icon: PenTool,
        title: "Custom Formatting",
        description:
          "Add styling to your cards to emphasize important information.",
      },
      {
        icon: Folder,
        title: "Quality Content",
        description: "Choose from a catalog of high-quality, pre-made decks.",
      },
      {
        icon: Pause,
        title: "Flexible Learning",
        description: "Freeze cards when you need a break or are too busy.",
      },
      {
        icon: Zap,
        title: "Rapid Card Creation",
        description:
          "Generate multiple cards at once for efficient deck building. Use AI to generate cards automatically.",
      },
      {
        icon: Headphones,
        title: "Text-to-Speech",
        description:
          "Learn foreign words with automatic pronunciation features.",
      },
    ],
  },
  hero: {
    title: "Retain what you learn",
    description1: `Within an hour, up to 60% of new information can slip away, and by the end of a week, only about 10% remain.`,
    description2: `MemoCard uses the proven flashcard method, making sure you never forget what you learn.`,
    tryBrowser: "Try in browser",
    tryTelegram: "Try in Telegram",
  },
  why: {
    awardWinningTitle: "Award-Winning App",
    awardWinningDescription:
      "Scored a prize in the worldwide Telegram mini app competition",
    usersTitle: "4000+ users",
    usersDescription: "Join thousands of users",
  },
  useCases: {
    title: "Use Cases",
    list: [
      "Learn a new language as a tourist",
      "Memorize complex bash commands or programming constructs",
      "Study Latin names of muscles for medical exams",
      "Improve geography skills",
      "Practice music harmony",
      "Retain key historical facts",
    ],
  },
  whyBetterThanAnki: {
    title: "Why It's Better Than Anki",
    list: [
      "No need for plugins - batteries included",
      "Decks and folders are easy to share via link",
      "Built-in smart push notifications via Telegram. You'll only see them when you have due cards to review",
      "No old creepy UI, MemoCard is already good looking",
    ],
  },
  plans: {
    title: "Available Plans",
    free: "Free",
    pro: "Pro",
  },
  freePlanFeatures: {
    included: [
      "Create unlimited decks, cards, and folders",
      "Two types of cards - regular and with pre-made answer choices",
      "Notifications about cards to review",
      "Card formatting",
      "Access to moderated high-quality deck catalog",
      "Card freezing to take a break",
      "Quickly generate multiple cards at once",
      "Automatic robotic text-to-speech supporting 50 languages",
    ],
    notIncluded: [
      "Automatic card generation via AI",
      "High-quality AI speech generation",
      "Duplicate decks and entire folders with decks and cards",
      "One-time deck and folder links",
    ],
  },
  proPlanFeatures: {
    included: [
      "Create unlimited decks, cards, and folders",
      "Two types of cards - regular and with pre-made answer choices",
      "Notifications about cards to review",
      "Card formatting",
      "Access to moderated high-quality deck catalog",
      "Card freezing to take a break",
      "Quickly generate multiple cards at once",
      "Automatic robotic text-to-speech supporting 50 languages",
      "Automatic card generation via AI",
      "High-quality AI speech generation",
      "Duplicate decks and entire folders with decks and cards",
      "One-time deck and folder links",
    ],
  },
};

export type Translation = typeof en;

const ru: Translation = {
  plans: {
    title: "Доступные планы",
    free: "Бесплатный",
    pro: "Pro",
  },
  whyBetterThanAnki: {
    title: "Почему лучше, чем Anki",
    list: [
      "Нет необходимости в плагинах - всё включено",
      "Колодами и папками легко делиться по ссылке",
      "Встроенные умные уведомления через Telegram. Вы увидите их только тогда, когда у вас есть карточки для повторения",
      "Нет устаревшего интерфейса, MemoCard уже хорошо выглядит",
    ],
  },
  useCases: {
    title: "Сценарии применения",
    list: [
      "Изучение нового языка в качестве туриста",
      "Запоминание сложных bash-команд или программных конструкций",
      "Изучение латинских названий мышц для медицинских экзаменов",
      "Улучшение географических навыков",
      "Практика музыкальной гармонии",
      "Запоминание ключевых исторических фактов",
    ],
  },
  why: {
    awardWinningTitle: "Победитель конкурса",
    awardWinningDescription: "MemoCard получил приз в конкурсе от Telegram",
    usersDescription: "Присоединяйтесь к тысячам пользователей",
    usersTitle: "4000+ пользователей",
  },
  footer: {
    links: {
      tgSupport: "Поддержка в Telegram",
      runInTelegram: "Запустить в Telegram",
      runInBrowser: "Запустить в браузере",
      youtubeChannelEn: "YouTube канал (EN)",
      youtubeChannelRu: "YouTube канал (RU)",
      telegramChannel: "Telegram канал",
    },
    groupTitles: {
      run: "Запустить MemoCard",
      support: "Поддержка",
      other: "Другое",
    },
  },
  features: {
    title: "Функции",
    list: [
      {
        icon: Folder,
        title: "Организуйте своё обучение",
        description:
          "Создавайте карточки, колоды и папки для структурирования знаний.",
      },
      {
        icon: BookOpen,
        title: "Разные типы карточек",
        description:
          "Используйте обычные карточки или карточки с готовыми вариантами ответов для проверки знаний.",
      },
      {
        icon: Bell,
        title: "Умные уведомления",
        description:
          "Получайте ежедневные напоминания о карточках, которые нужно повторить, оптимизируя своё время для учёбы.",
      },
      {
        icon: PenTool,
        title: "Настройка форматирования",
        description:
          "Добавляйте стилизацию к карточкам, чтобы выделить важную информацию.",
      },
      {
        icon: Folder,
        title: "Качественный контент",
        description: "Выбирайте из каталога высококачественных готовых колод.",
      },
      {
        icon: Pause,
        title: "Гибкое повторение",
        description:
          "Замораживайте карточки, когда вам нужен перерыв или вы слишком заняты.",
      },
      {
        icon: Zap,
        title: "Быстрое создание карточек",
        description:
          "Генерируйте несколько карточек сразу для эффективного создания колод. Используйте ИИ для автоматического создания карточек.",
      },
      {
        icon: Headphones,
        title: "Автоматическая озвучка",
        description:
          "Учите иностранные слова с автоматической функцией произношения.",
      },
    ],
  },
  hero: {
    title: "Не забывайте то, что запомнили",
    description1: `В течение часа до 60% новой информации могут выскользнуть из памяти, а к концу недели остаются всего около 10%.`,
    description2: `MemoCard использует проверенный метод интервального повторения, чтобы вы никогда не забывали то, что запомнили.`,
    tryBrowser: "Запустить в браузере",
    tryTelegram: "Запустить в Telegram",
  },
  freePlanFeatures: {
    included: [
      "Создавайте неограниченное количество колод, карточек и папок",
      "Два типа карточек - обычные и с готовыми вариантами ответов",
      "Уведомления о карточках для повторения",
      "Форматирование карточек",
      "Доступ к модерируемому каталогу высококачественных колод",
      "Замораживание карточек для перерыва",
      "Быстрое создание нескольких карточек сразу",
      "Автоматическая роботизированная речь на 50 языках",
    ],
    notIncluded: [
      "Автоматическое создание карточек через ИИ",
      "Высококачественная речь ИИ",
      "Дублирование колод и целых папок с колодами и карточками",
      "Одноразовые ссылки на колоды и папки",
    ],
  },
  proPlanFeatures: {
    included: [
      "Создавайте неограниченное количество колод, карточек и папок",
      "Два типа карточек - обычные и с готовыми вариантами ответов",
      "Уведомления о карточках для повторения",
      "Форматирование карточек",
      "Доступ к модерируемому каталогу высококачественных колод",
      "Замораживание карточек для перерыва",
      "Быстрое создание нескольких карточек сразу",
      "Автоматическая роботизированная речь на 50 языках",
      "Автоматическое создание карточек через ИИ",
      "Высококачественная речь ИИ",
      "Дублирование колод и целых папок с колодами и карточками",
      "Одноразовые ссылки на колоды и папки",
    ],
  },
};

const es: Translation = {
  plans: {
    title: "Planes disponibles",
    free: "Gratis",
    pro: "Pro",
  },
  whyBetterThanAnki: {
    title: "Por qué es mejor que Anki",
    list: [
      "No necesita complementos: baterías incluidas",
      "Las barajas y carpetas son fáciles de compartir mediante un enlace",
      "Notificaciones inteligentes integradas a través de Telegram. Solo las verás cuando tengas tarjetas pendientes de revisión",
      "No hay una interfaz antigua y espeluznante, MemoCard ya tiene un buen aspecto",
    ],
  },
  useCases: {
    title: "Casos de uso",
    list: [
      "Aprender un nuevo idioma como turista",
      "Memorizar comandos bash complejos o construcciones de programación",
      "Estudiar los nombres latinos de los músculos para exámenes médicos",
      "Mejorar las habilidades de geografía",
      "Practicar la armonía musical",
      "Retener datos históricos clave",
    ],
  },
  why: {
    awardWinningTitle: "Aplicación galardonada",
    awardWinningDescription:
      "Obtuvo un premio en el concurso mundial de mini aplicaciones de Telegram",
    usersDescription: "Únete a miles de usuarios",
    usersTitle: "4000+ usuarios",
  },
  footer: {
    links: {
      tgSupport: "Soporte de Telegram",
      runInTelegram: "Ejecutar en Telegram",
      runInBrowser: "Ejecutar en el navegador",
      youtubeChannelEn: "Canal de YouTube (EN)",
      youtubeChannelRu: "Canal de YouTube (RU)",
      telegramChannel: "Canal de Telegram",
    },
    groupTitles: {
      run: "Ejecutar MemoCard",
      support: "Soporte",
      other: "Otro",
    },
  },
  features: {
    title: "Características",
    list: [
      {
        icon: Folder,
        title: "Organiza tu aprendizaje",
        description:
          "Crea tarjetas, barajas y carpetas para estructurar tus conocimientos.",
      },
      {
        icon: BookOpen,
        title: "Diferentes tipos de tarjetas",
        description:
          "Utiliza tarjetas normales o tarjetas con respuestas predefinidas para probar tus conocimientos.",
      },
      {
        icon: Bell,
        title: "Notificaciones inteligentes",
        description:
          "Recibe recordatorios diarios de las tarjetas que necesitan revisión, optimizando tu tiempo de estudio.",
      },
      {
        icon: PenTool,
        title: "Formato personalizado",
        description:
          "Agrega estilo a tus tarjetas para resaltar información importante.",
      },
      {
        icon: Folder,
        title: "Contenido de calidad",
        description:
          "Elige de un catálogo de barajas predefinidas de alta calidad.",
      },
      {
        icon: Pause,
        title: "Aprendizaje flexible",
        description:
          "Congela las tarjetas cuando necesites un descanso o estés demasiado ocupado.",
      },
      {
        icon: Zap,
        title: "Creación rápida de tarjetas",
        description:
          "Genera varias tarjetas a la vez para construir barajas eficientemente. Utiliza la IA para generar tarjetas automáticamente.",
      },
      {
        icon: Headphones,
        title: "Texto a voz",
        description:
          "Aprende palabras extranjeras con funciones de pronunciación automática.",
      },
    ],
  },
  freePlanFeatures: {
    included: [
      "Crea un número ilimitado de barajas, tarjetas y carpetas",
      "Dos tipos de tarjetas: normales y con opciones de respuesta predefinidas",
      "Notificaciones sobre tarjetas para revisar",
      "Formato de tarjetas",
      "Acceso a un catálogo de barajas de alta calidad moderado",
      "Congelación de tarjetas para tomar un descanso",
      "Genera rápidamente varias tarjetas a la vez",
      "Texto a voz robótico automático compatible con 50 idiomas",
    ],
    notIncluded: [
      "Generación automática de tarjetas a través de IA",
      "Generación de voz IA de alta calidad",
      "Duplica barajas y carpetas enteras con barajas y tarjetas",
      "Enlaces de barajas y carpetas de un solo uso",
    ],
  },
  proPlanFeatures: {
    included: [
      "Crea un número ilimitado de barajas, tarjetas y carpetas",
      "Dos tipos de tarjetas: normales y con opciones de respuesta predefinidas",
      "Notificaciones sobre tarjetas para revisar",
      "Formato de tarjetas",
      "Acceso a un catálogo de barajas de alta calidad moderado",
      "Congelación de tarjetas para tomar un descanso",
      "Genera rápidamente varias tarjetas a la vez",
      "Texto a voz robótico automático compatible con 50 idiomas",
      "Generación automática de tarjetas a través de IA",
      "Generación de voz IA de alta calidad",
      "Duplica barajas y carpetas enteras con barajas y tarjetas",
      "Enlaces de barajas y carpetas de un solo uso",
    ],
  },
  hero: {
    title: "Retén lo que aprendes",
    description1: `En una hora, hasta el 60% de la información nueva puede escapar, y al final de una semana, solo queda alrededor del 10%.`,
    description2: `MemoCard utiliza el método de tarjetas de memoria probado, asegurándose de que nunca olvides lo que aprendes.`,
    tryBrowser: "Probar en el navegador",
    tryTelegram: "Probar en Telegram",
  },
};

const ptBr: Translation = {
  plans: {
    title: "Planos disponíveis",
    free: "Grátis",
    pro: "Pro",
  },
  proPlanFeatures: {
    included: [
      "Crie um número ilimitado de baralhos, cartões e pastas",
      "Dois tipos de cartões - regulares e com opções de resposta pré-definidas",
      "Notificações sobre cartões para revisão",
      "Formatação de cartões",
      "Acesso a um catálogo de baralhos de alta qualidade moderado",
      "Congelamento de cartões para fazer uma pausa",
      "Gere rapidamente vários cartões de uma vez",
      "Texto para fala robótico automático suportando 50 idiomas",
      "Geração automática de cartões via IA",
      "Geração de fala IA de alta qualidade",
      "Duplicar baralhos e pastas inteiras com baralhos e cartões",
      "Links de baralhos e pastas de uso único",
    ],
  },
  why: {
    awardWinningTitle: "Aplicativo premiado",
    awardWinningDescription:
      "Ganhou um prêmio na competição mundial de mini aplicativos do Telegram",
    usersDescription: "Junte-se a milhares de usuários",
    usersTitle: "4000+ usuários",
  },
  freePlanFeatures: {
    included: [
      "Crie um número ilimitado de baralhos, cartões e pastas",
      "Dois tipos de cartões - regulares e com opções de resposta pré-definidas",
      "Notificações sobre cartões para revisão",
      "Formatação de cartões",
      "Acesso a um catálogo de baralhos de alta qualidade moderado",
      "Congelamento de cartões para fazer uma pausa",
      "Gere rapidamente vários cartões de uma vez",
      "Texto para fala robótico automático suportando 50 idiomas",
    ],
    notIncluded: [
      "Geração automática de cartões via IA",
      "Geração de fala IA de alta qualidade",
      "Duplicar baralhos e pastas inteiras com baralhos e cartões",
      "Links de baralhos e pastas de uso único",
    ],
  },
  footer: {
    links: {
      tgSupport: "Suporte no Telegram",
      runInTelegram: "Executar no Telegram",
      runInBrowser: "Executar no navegador",
      youtubeChannelEn: "Canal do YouTube (EN)",
      youtubeChannelRu: "Canal do YouTube (RU)",
      telegramChannel: "Canal do Telegram",
    },
    groupTitles: {
      run: "Executar MemoCard",
      support: "Suporte",
      other: "Outro",
    },
  },
  useCases: {
    title: "Casos de uso",
    list: [
      "Aprender um novo idioma como turista",
      "Memorizar comandos bash complexos ou construções de programação",
      "Estudar os nomes latinos dos músculos para exames médicos",
      "Melhorar as habilidades de geografia",
      "Praticar a harmonia musical",
      "Retenha fatos históricos importantes",
    ],
  },
  whyBetterThanAnki: {
    title: "Por que é melhor que Anki",
    list: [
      "Não precisa de plugins - baterias incluídas",
      "Baralhos e pastas são fáceis de compartilhar via link",
      "Notificações inteligentes integradas via Telegram. Você só as verá quando tiver cartões pendentes para revisão",
      "Sem uma interface antiga e assustadora, o MemoCard já tem uma boa aparência",
    ],
  },
  features: {
    title: "Recursos",
    list: [
      {
        icon: Folder,
        title: "Organize seu aprendizado",
        description:
          "Crie cartões, baralhos e pastas para estruturar seu conhecimento.",
      },
      {
        icon: BookOpen,
        title: "Diferentes tipos de cartões",
        description:
          "Use cartões regulares ou cartões com respostas pré-definidas para testar seu conhecimento.",
      },
      {
        icon: Bell,
        title: "Notificações inteligentes",
        description:
          "Receba lembretes diários sobre cartões que precisam ser revisados, otimizando seu tempo de estudo.",
      },
      {
        icon: PenTool,
        title: "Formatação personalizada",
        description:
          "Adicione estilo aos seus cartões para enfatizar informações importantes.",
      },
      {
        icon: Folder,
        title: "Conteúdo de qualidade",
        description:
          "Escolha de um catálogo de baralhos pré-fabricados de alta qualidade.",
      },
      {
        icon: Pause,
        title: "Aprendizado flexível",
        description:
          "Congele cartões quando precisar de uma pausa ou estiver muito ocupado.",
      },
      {
        icon: Zap,
        title: "Criação rápida de cartões",
        description:
          "Gere vários cartões de uma vez para construção eficiente de baralhos. Use IA para gerar cartões automaticamente.",
      },
      {
        icon: Headphones,
        title: "Texto para fala",
        description:
          "Aprenda palavras estrangeiras com recursos de pronúncia automática.",
      },
    ],
  },
  hero: {
    title: "Retenha o que você aprende",
    description1: `Em uma hora, até 60% das novas informações podem escapar, e no final de uma semana, apenas cerca de 10% permanecem.`,
    description2: `O MemoCard usa o método comprovado de cartão de memória, garantindo que você nunca esqueça o que aprendeu.`,
    tryBrowser: "Experimente no navegador",
    tryTelegram: "Experimente no Telegram",
  },
};

export const getTranslation = (lang: LanguageEnum): Translation => {
  switch (lang) {
    case LanguageEnum.en:
      return en;
    case LanguageEnum.ru:
      return ru;
    case LanguageEnum.es:
      return es;
    case LanguageEnum.ptBr:
      return ptBr;
    default:
      return lang satisfies never;
  }
};
