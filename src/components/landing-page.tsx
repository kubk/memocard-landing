import { Translation } from "@/shared/translations";
import { links } from "@/shared/links";
import { YoutubeTutorial } from "@/components/youtubeTutorial";
import { AchievementCard } from "@/app/components/achievementCard";
import { Award, Users } from "lucide-react";
import { FeatureCard } from "@/app/components/featureCard";
import { PlanCard } from "@/app/components/planCard";
import React from "react";

export const LandingPage = (props: { translation: Translation }) => {
  const { translation } = props;

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
            {translation.hero.title}
          </h1>
          <div className={"text-center flex flex-col items-center"}>
            <p className="text-xl mb-2">{translation.hero.description1}</p>
            <p className={"text-xl mb-8"}>{translation.hero.description2}</p>
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
        <div className="container px-4 py-6 flex flex-col md:flex-row mx-auto justify-between md:items-center">
          <div className={"md:order-2"}>
            <YoutubeTutorial />
          </div>

          <div className={"md:order-1"}>
            <AchievementCard
              icon={Award}
              title="Award-Winning App"
              description="Scored a prize in the worldwide Telegram mini app competition"
            />
          </div>

          <div className={"md:order-3"}>
            <AchievementCard
              icon={Users}
              title="4000+ users"
              description="Join thousands of users"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {translation.features.map((feature, index) => (
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
            <li>No old creepy UI, MemoCard is already good looking</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Available Plans
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PlanCard
              title="Free"
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
              title="Pro"
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
