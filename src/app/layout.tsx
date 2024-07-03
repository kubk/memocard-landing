import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter as FontSans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { links } from "@/shared/links";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MemoCard",
  alternates: {
    canonical: links.landing,
    languages: {
      en: links.landing,
      ru: `${links.landing}/ru/`,
    },
  },
  keywords: [
    "anki alternative",
    "flashcard app",
    "flashcards ai",
    "create ai flashcards",
  ],
  description:
    "Improve your memory with spaced repetition. Learn languages, history or other subjects with the proven flashcard method.",
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang={"en"}>
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
}
