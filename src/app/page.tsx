import { MemoCardPage } from "@/components/memoCardPage";
import { LanguageEnum } from "@/shared/translations";

export default function Page() {
  return <MemoCardPage language={LanguageEnum.en} />;
}
