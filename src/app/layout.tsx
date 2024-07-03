import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { MemoCardLayout } from "@/components/memoCardPage";

export const metadata: Metadata = {
  title: "MemoCard",
  keywords: [
    "anki alternative",
    "flashcard app",
    "flashcards ai",
    "create ai flashcards",
  ],
  description:
    "Improve your memory with spaced repetition. Learn languages, history or other subjects with the proven flashcard method.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <MemoCardLayout language={"en"}>{children}</MemoCardLayout>;
}
