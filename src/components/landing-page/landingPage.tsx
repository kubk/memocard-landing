import { LanguageEnum, Translation } from "@/shared/translations";
import { links } from "@/shared/links";
import { YoutubeTutorial } from "@/components/youtubeTutorial";
import { AchievementCard } from "@/components/landing-page/achievementCard";
import { Award, Users } from "lucide-react";
import { FeatureCard } from "@/components/landing-page/featureCard";
import { PlanCard } from "@/components/landing-page/planCard";
import React from "react";
import { LanguageSwitcher } from "@/components/languageSwitcher";

export const LandingPage = (props: {
  translation: Translation;
  language: LanguageEnum;
}) => {
  const { translation, language } = props;
  const videoId = language === "ru" ? "GPkoonk1LwI" : "nU1QG5KCh44";
  const youtubeChannelLink = language === 'ru' ? links.youtubeChannelRu : links.youtubeChannelEn;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-center relative">
          <div className="text-2xl font-bold absolute left-4">MemoCard</div>
          <nav className={"hidden md:block"}>
            <ul className="flex space-x-4">
              <li>
                <a href={links.telegramChannel} className="hover:text-blue-200">
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={youtubeChannelLink}
                  className="hover:text-blue-200"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </nav>
          <div className={"absolute right-4"}>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {translation.hero.title}
          </h1>
          <div className={"text-center flex flex-col items-center"}>
            <p className="text-xl mb-4">{translation.hero.description1}</p>
            <p className={"text-xl mb-8"}>{translation.hero.description2}</p>
            <div className={"flex"}>
              <a
                href={links.appBrowser}
                className="bg-white text-blue-600 px-6 py-3 rounded-l-2xl border-r-2 border-blue-600 font-semibold hover:bg-blue-100 transition duration-300"
              >
                {translation.hero.tryBrowser}
              </a>
              <a
                href={links.appTelegram}
                className="bg-white text-blue-600 px-6 py-3 rounded-r-2xl font-semibold hover:bg-blue-100 transition duration-300"
              >
                {translation.hero.tryTelegram}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white">
        <div className="container px-4 py-6 flex flex-col md:flex-row mx-auto justify-between md:items-center">
          <div className={"md:order-2"}>
            <YoutubeTutorial videoId={videoId} />
          </div>

          <div className={"md:order-1"}>
            <AchievementCard
              icon={Award}
              title={translation.why.awardWinningTitle}
              description={translation.why.awardWinningDescription}
            />
          </div>

          <div className={"md:order-3"}>
            <AchievementCard
              icon={Users}
              title={translation.why.usersTitle}
              description={translation.why.usersDescription}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {translation.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {translation.features.list.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {translation.useCases.title}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {translation.useCases.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why It's Better Than Anki Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {translation.whyBetterThanAnki.title}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {translation.whyBetterThanAnki.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {translation.plans.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PlanCard
              title={translation.plans.free}
              purchaseText={translation.plans.purchasePro}
              features={translation.freePlanFeatures.included
                .map((item) => ({
                  included: true,
                  text: item,
                }))
                .concat(
                  translation.freePlanFeatures.notIncluded.map((item) => ({
                    included: false,
                    text: item,
                  })),
                )}
            />
            <PlanCard
              title={translation.plans.pro}
              purchaseText={translation.plans.purchasePro}
              features={translation.proPlanFeatures.included.map((item) => ({
                included: true,
                text: item,
              }))}
              isProPlan={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
