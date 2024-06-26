import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import {cn} from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "MemoCard",
  keywords: ["anki alternative", "flashcard app", "flashcards ai", "create ai flashcards"],
  description: "Improve your memory with spaced repetition. Learn languages, history or other subjects with the proven flashcard method.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
      )}>{children}</body>
    </html>
  );
}
