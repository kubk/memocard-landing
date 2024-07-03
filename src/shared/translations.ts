import {
  Bell,
  BookOpen,
  Folder,
  Headphones,
  Pause,
  PenTool,
  Zap,
} from "lucide-react";

export type Language = "en" | "ru";

const en = {
  features: [
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
      description: "Learn foreign words with automatic pronunciation features.",
    },
  ],
  hero: {
    title: "Retain what you learn",
    description1: `Within an hour, up to 60% of new information can slip away, and by the end of a week, only about 10% remain.`,
    description2: `MemoCard uses the proven flashcard method, making sure you never forget what you learn.`,
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
  features: [
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
      title: "Гибкое обучение",
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
      title: "Текст в речь",
      description:
        "Учите иностранные слова с автоматической функцией произношения.",
    },
  ],
  hero: {
    title: "Не забывайте то, что запомнили",
    description1: `В течение часа до 60% новой информации могут выскользнуть из памяти, а к концу недели остаются всего около 10%.`,
    description2: `MemoCard использует проверенный метод интервального повторения, чтобы вы никогда не забывали то, что запомнили.`,
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

export const getTranslation = (lang: Language): Translation => {
  switch (lang) {
    case "en":
      return en;
    case "ru":
      return ru;
  }
};
