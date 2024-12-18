import { getTranslation, LanguageEnum } from "@/shared/translations";
import { LandingPage } from "@/components/landing-page/landingPage";
import { Footer } from "@/components/footer";

type Props = { language: LanguageEnum };

export const MemoCardPage = (props: Props) => {
  const { language } = props;
  const translation = getTranslation(language);

  return (
    <>
      <LandingPage language={language} translation={translation} />
      <Footer translation={translation} />
    </>
  );
};
