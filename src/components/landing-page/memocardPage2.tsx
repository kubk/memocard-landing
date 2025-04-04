import { links } from "@/shared/links";
import { Footer2 } from "./footer";
import { YoutubeTutorial } from "./youtubeTutorial";
import {
  BookText,
  Calculator,
  Code2,
  FlaskConical,
  Globe2,
  Languages,
  Music2,
  Stethoscope,
} from "lucide-react";
import { Fragment, ReactNode } from "react";
import { getTranslation, LanguageEnum } from "@/shared/translations";
import { LanguageSwitcher } from "./languageSwitcher";

const demoPreviews: string[] = [
  "/preview/IMG_4537-portrait.png",
  "/preview/IMG_4539-portrait.png",
  "/preview/IMG_4540-portrait.png",
  "/preview/IMG_4541-portrait.png",
  "/preview/IMG_4543-portrait.png",
  "/preview/IMG_4544-portrait.png",
  "/preview/IMG_4545-portrait.png",
  "/preview/IMG_4546-portrait.png",
];

const renderHighlightedText = (text: string) => {
  if (!text) return "";

  const parts = text.split(/\[|\]/);
  return parts.map((part, index) => {
    const isHighlighted = index % 2 === 1;
    return (
      <Fragment key={index}>
        {index > 0 && index % 2 === 0 && " "}
        <span className={isHighlighted ? "bg-gradient-text" : ""}>{part}</span>
        {index % 2 === 0 && index < parts.length - 1 && " "}
      </Fragment>
    );
  });
};

// Feature Card Component
const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}) => (
  <div className="bg-muted/50 flex flex-col p-6 pb-0 rounded-2xl">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="mb-3 text-lg">{description}</p>

    <div className="mt-auto relative flex justify-center">
      {imageSrc && (
        <img src={imageSrc} alt={imageAlt || title} className="max-h-[400px]" />
      )}
    </div>
  </div>
);

export const MemoCardPage2 = (props: { language: LanguageEnum }) => {
  const { language } = props;
  const translation = getTranslation(language);
  const youtubeChannelLink =
    language === "ru" ? links.youtubeChannelRu : links.youtubeChannelEn;
  const videoId = language === "ru" ? "GPkoonk1LwI" : "nU1QG5KCh44";

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "hsla(0, 0%, 100%, .86)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-screen-lg lg:max-w-5xl xl:max-w-6xl">
          <div className="flex items-center">
            <div className="flex items-center font-semibold gap-2">
              <img src={"/logoI.png"} alt="MemoCard Logo" className="h-6" />
              <span>MemoCard</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 -ml-[80px]">
            <a href={links.telegramChannel} className="text font-semibold">
              Telegram
            </a>
            <a href={youtubeChannelLink} className="text font-semibold">
              YouTube
            </a>
            <a href={links.github} className="text font-semibold">
              GitHub
            </a>
          </nav>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className="pt-24 pb-14 text-center">
        <div className="container mx-auto px-4 max-w-screen-lg lg:max-w-5xl xl:max-w-6xl">
          <h1 className="text-7xl font-bold mb-4 mt-[24px]">
            {renderHighlightedText(translation.hero.title)}
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            {translation.hero.description1} {translation.hero.description2}
          </p>
          <div className={"flex justify-center"}>
            <a
              href={links.appBrowser}
              className="shadow-md bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-l-2xl border-r border-white font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300"
            >
              {translation.hero.tryBrowser}
            </a>
            <a
              href={links.appTelegram}
              className="shadow-md flex gap-2 items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-r-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300"
            >
              {translation.hero.tryTelegram}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 gap-8 flex flex-col md:flex-row max-w-screen-lg lg:max-w-5xl xl:max-w-6xl">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl pl-2 font-bold mb-4 mt-2">
              {translation.what.title}
            </h2>
            <p className="mb-6 text-lg pl-2">{translation.what.description}</p>

            <h2 className="text-2xl pl-2 font-bold mb-4">
              {translation.useCases.title}
            </h2>
            <div className="grid grid-cols-2 gap-2 pl-2">
              {Object.entries(translation.useCases.listEnum).map(
                ([key, value]) => {
                  const Icon = {
                    languages: Languages,
                    medicine: Stethoscope,
                    geography: Globe2,
                    music: Music2,
                    programming: Code2,
                    history: BookText,
                    mathematics: Calculator,
                    chemistry: FlaskConical,
                  }[key];
                  return (
                    <div key={key} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center mr-3 mt-1 text-blue-500">
                        {Icon && <Icon className="w-5 h-5" />}
                      </span>
                      <span className="text-lg">{value}</span>
                    </div>
                  );
                },
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <YoutubeTutorial videoId={videoId} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg lg:max-w-5xl xl:max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {translation.features.list.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                imageSrc={demoPreviews[index]}
                imageAlt={"Preview " + feature.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={"flex justify-center mb-20 mt-8"}>
          <a
            href={links.appBrowser}
            className="shadow-md bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-l-2xl border-r border-white font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300"
          >
            {translation.hero.tryBrowser}
          </a>
          <a
            href={links.appTelegram}
            className="shadow-md flex gap-2 items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-r-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300"
          >
            {translation.hero.tryTelegram}
          </a>
        </div>
      </section>

      <Footer2 translation={translation} />
    </div>
  );
};
