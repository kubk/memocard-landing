import React from "react";
import {
  ArrowRight,
  ExternalLink,
  BookOpen,
  Bell,
  PenTool,
  Folder,
  Pause,
  Zap,
  Headphones,
  Check,
  X,
  Award,
  Users,
  Mail,
  Youtube,
  Github,
} from "lucide-react";

const AchievementCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-white p-6 rounded-lg flex items-center">
    <Icon className="text-blue-500 w-12 h-12 mr-4 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="text-blue-500 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PlanCard = ({ title, features, isProPlan }: any) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-md ${isProPlan ? "border-2 border-blue-500" : ""}`}
  >
    <h3
      className={`text-2xl font-bold mb-4 ${isProPlan ? "text-blue-600" : "text-gray-800"}`}
    >
      {title}
    </h3>
    <ul className="space-y-2">
      {features.map((feature: any, index: any) => (
        <li key={index} className="flex items-start">
          {feature.included ? (
            <Check className="text-green-500 mr-2 flex-shrink-0" />
          ) : (
            <X className="text-red-500 mr-2 flex-shrink-0" />
          )}
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FooterLinkGroup = ({ title, links }: any) => (
  <div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="space-y-2">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <a href={link.href} className="flex items-center hover:text-blue-300">
            {link.icon && <link.icon className="mr-2" size={16} />}
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const freePlanFeatures = [
  { included: true, text: "Create unlimited decks, cards, and folders" },
  {
    included: true,
    text: "Two types of cards - regular and with pre-made answer choices",
  },
  { included: true, text: "Notifications about cards to review" },
  { included: true, text: "Card formatting" },
  { included: true, text: "Access to moderated high-quality deck catalog" },
  { included: true, text: "Card freezing to take a break" },
  { included: true, text: "Quickly generate multiple cards at once" },
  {
    included: true,
    text: "Automatic robotic text-to-speech supporting 50 languages",
  },
  { included: false, text: "Automatic card generation via AI" },
  { included: false, text: "High-quality AI speech generation" },
  {
    included: false,
    text: "Duplicate decks and entire folders with decks and cards",
  },
  { included: false, text: "One-time links" },
];

const proPlanFeatures = [
  { included: true, text: "Create unlimited decks, cards, and folders" },
  {
    included: true,
    text: "Two types of cards - regular and with pre-made answer choices",
  },
  { included: true, text: "Notifications about cards to review" },
  { included: true, text: "Card formatting" },
  { included: true, text: "Access to moderated high-quality deck catalog" },
  { included: true, text: "Card freezing to take a break" },
  { included: true, text: "Quickly generate multiple cards at once" },
  {
    included: true,
    text: "Automatic robotic text-to-speech supporting 50 languages",
  },
  { included: true, text: "Automatic card generation via AI" },
  { included: true, text: "High-quality AI speech generation" },
  {
    included: true,
    text: "Duplicate decks and entire folders with decks and cards",
  },
  { included: true, text: "One-time deck and folder links" },
];

const footerLinks = {
  support: [
    {
      icon: Mail,
      text: "Email: support@memocard.org",
      href: "mailto:support@memocard.org",
    },
    {
      icon: ExternalLink,
      text: "Telegram Support",
      href: "https://t.me/memocard_support",
    },
  ],
  run: [
    {
      icon: ExternalLink,
      text: "Run in browser",
      href: "https://app.memocard.org",
    },
    {
      icon: ExternalLink,
      text: "Run in Telegram",
      href: "https://t.me/memo_card_bot/app",
    },
  ],
  youtube: [
    {
      icon: Youtube,
      text: "YouTube Channel (EN)",
      href: "https://www.youtube.com/@MemoCardBot",
    },
    {
      icon: Youtube,
      text: "YouTube Channel (RU)",
      href: "https://www.youtube.com/@MemoCardRu",
    },
  ],
  other: [
    {
      icon: ExternalLink,
      text: "Telegram Channel",
      href: "https://t.me/memo_card_bot_channel",
    },
    {
      icon: Github,
      text: "GitHub",
      href: "https://github.com/kubk/memo-card",
    },
  ],
};

const LandingPage = () => {
  const features = [
    {
      icon: Folder,
      title: "Organize Your Learning",
      description:
        "Create cards, decks, and deck folders to structure your knowledge.",
    },
    {
      icon: BookOpen,
      title: "Versatile Card Types",
      description:
        "Use regular cards or cards with pre-made answer choices for varied learning.",
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
      title: "Language Learning",
      description: "Learn foreign words with automatic pronunciation features.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">MemoCard</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://t.me/memo_card_bot_channel"
                  className="hover:text-blue-200"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@MemoCardBot"
                  className="hover:text-blue-200"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Retain what you learn
          </h1>
          <div className={"text-center"}>
            <p className="text-xl mb-2">
              Within an hour, up to 60% of new information can slip away, and by
              the end of a week, only about 10% may remain. However, consistent
              revisiting of the information fixes it.
            </p>
            <p className={"text-xl mb-8"}>
              MemoCard uses the proven flashcard method, making sure you never
              forget what you learn.
            </p>
            <a
              href="https://app.memocard.org"
              className="bg-white text-blue-600 px-6 py-3 rounded-l-2xl border-r-2 border-blue-600 font-semibold hover:bg-blue-100 transition duration-300"
            >
              Try in browser
            </a>
            <a
              href="https://t.me/memo_card_bot/app"
              className="bg-white text-blue-600 px-6 py-3 rounded-r-2xl font-semibold hover:bg-blue-100 transition duration-300"
            >
              Try in Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AchievementCard
              icon={Award}
              title="Award-Winning App"
              description="Recognized with a prize in the worldwide official Telegram mini app competition"
            />
            <AchievementCard
              icon={Users}
              title="User Base"
              description="Trusted by more than 4,000 users"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Use Cases</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Learn a new language as a tourist</li>
            <li>Memorize complex bash commands or programming constructs</li>
            <li>Study Latin names of muscles for medical exams</li>
            <li>Improve geography skills</li>
            <li>Practice music harmony</li>
            <li>Retain key historical facts</li>
          </ul>
        </div>
      </section>

      {/* Why It's Better Than Anki Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why It's Better Than Anki</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>No need for plugins - batteries included</li>
            <li>Decks and folders are easy to share via link</li>
            <li>
              Built-in smart push notifications via Telegram. You'll only see
              them when you have due cards to review
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PlanCard title="Free Plan" features={freePlanFeatures} />
            <PlanCard
              title="Pro Plan"
              features={proPlanFeatures}
              isProPlan={true}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterLinkGroup title="Support" links={footerLinks.support} />
            <FooterLinkGroup title="Run MemoCard" links={footerLinks.run} />
            <FooterLinkGroup title="YouTube" links={footerLinks.youtube} />
            <FooterLinkGroup title="Other" links={footerLinks.other} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
