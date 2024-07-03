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

export type Language = "en" | "ru";

const en = {
  footer: {
    links: {
      email: "Email: " + links.supportEmail,
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
      email: "Почта: " + links.supportEmail,
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

export const getTranslation = (lang: Language): Translation => {
  switch (lang) {
    case "en":
      return en;
    case "ru":
      return ru;
  }
};
