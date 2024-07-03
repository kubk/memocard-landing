import { getTranslation, Language } from "@/shared/translations";
import { LandingPage } from "@/components/landing-page/landing-page";
import { Footer } from "@/components/footer";

export const MemoCardPage = (props: { language: Language }) => {
  const { language } = props;
  const translation = getTranslation(language);

  return (
    <>
      <LandingPage translation={translation} />
      <Footer translation={translation} />
    </>
  );
};
