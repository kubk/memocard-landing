import { MemoCardLayout } from "@/components/memoCardPage";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MemoCard",
  keywords: [
    "anki альтернатива",
    "flashcard приложение",
    "интервальное повторение",
    "flashcards ai",
    "создание ai карточек",
  ],
  description:
    "Улучшите свою память с помощью интервального повторения. Изучайте языки, историю или другие предметы с помощью проверенного метода карточек.",
};

export default function Layout(props: { children: ReactNode }) {
  const { children } = props;
  return <MemoCardLayout language={"ru"}>{children}</MemoCardLayout>;
}
