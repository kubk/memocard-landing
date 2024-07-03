import React from "react";
import {
  Award,
  Bell,
  BookOpen,
  ExternalLink,
  Folder,
  Github,
  Headphones,
  Mail,
  Pause,
  PenTool,
  Users,
  Youtube,
  Zap,
} from "lucide-react";
import { AchievementCard } from "@/app/components/achievementCard";
import { FeatureCard } from "@/app/components/featureCard";
import { PlanCard } from "@/app/components/planCard";
import { FooterLinkGroup } from "@/app/components/footerLinkGroup";
import { links } from "@/shared/links";
import { YoutubeTutorial } from "@/app/youtubeTutorial";

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
  { included: false, text: "One-time deck and folder links" },
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
      text: "Email: " + links.supportEmail,
      href: "mailto:" + links.supportEmail,
    },
    {
      icon: ExternalLink,
      text: "Telegram Support",
      href: links.supportTelegram,
    },
  ],
  run: [
    {
      icon: ExternalLink,
      text: "Run in browser",
      href: links.appBrowser,
    },
    {
      icon: ExternalLink,
      text: "Run in Telegram",
      href: links.appTelegram,
    },
  ],
  youtube: [
    {
      icon: Youtube,
      text: "YouTube Channel (EN)",
      href: links.youtubeChannelEn,
    },
    {
      icon: Youtube,
      text: "YouTube Channel (RU)",
      href: links.youtubeChannelRu,
    },
  ],
  other: [
    {
      icon: ExternalLink,
      text: "Telegram Channel",
      href: links.telegramChannel,
    },
    {
      icon: Github,
      text: "GitHub",
      href: links.github,
    },
  ],
};

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
    title: "Text-to-Speech",
    description: "Learn foreign words with automatic pronunciation features.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">MemoCard</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href={links.telegramChannel} className="hover:text-blue-200">
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={links.youtubeChannelEn}
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
      <section className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Retain what you learn
          </h1>
          <div className={"text-center flex flex-col items-center"}>
            <p className="text-xl mb-2">
              Within an hour, up to 60% of new information can slip away, and by
              the end of a week, only about 10% may remain.
            </p>
            <p className={"text-xl mb-8"}>
              MemoCard uses the proven flashcard method, making sure you never
              forget what you learn.
            </p>
            <div className={"flex"}>
              <a
                href={links.appBrowser}
                className="bg-white text-blue-600 px-6 py-3 rounded-l-2xl border-r-2 border-blue-600 font-semibold hover:bg-blue-100 transition duration-300"
              >
                Try in browser
              </a>
              <a
                href={links.appTelegram}
                className="bg-white text-blue-600 px-6 py-3 rounded-r-2xl font-semibold hover:bg-blue-100 transition duration-300"
              >
                Try in Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white">
        <div className="container px-4 py-6 flex flex-col md:flex-row mx-auto justify-between">
          <AchievementCard
            icon={Award}
            title="Award-Winning App"
            description="Scored a prize in the worldwide Telegram mini app competition"
          />

          <YoutubeTutorial />

          <AchievementCard
            icon={Users}
            title="4000+ users"
            description="Join thousands of users"
          />
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
            <li>No old creepy UI, good looking and modern</li>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
