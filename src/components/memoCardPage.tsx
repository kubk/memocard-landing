import { Inter as FontSans } from "next/font/google";
import { getTranslation, Language } from "@/shared/translations";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { LandingPage } from "@/components/landing-page";
import { Footer } from "@/components/footer";
import {ReactNode} from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const MemoCardLayout = (props: { language: Language, children: ReactNode }) => {
  const { language, children } = props;

  return (
    <html lang={language}>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-Z45JH1JS3K" />
      )}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
      {children}
      </body>
    </html>
  );
};

export const MemoCardPage = (props: { language: Language }) => {
  const { language } = props;
  const translations = getTranslation(language);

  return <>
    <LandingPage translation={translations} />
    <Footer />
  </>
}
