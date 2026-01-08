"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Panot from "@/assets/panot.svg";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-6 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/50 w-auto max-w-[calc(100%-1rem)] sm:max-w-[calc(100%-2rem)]">
      <div className="flex flex-row gap-2 sm:gap-4 items-center mr-2 sm:mr-10 flex-shrink-0">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black flex items-center justify-center rounded-lg sm:rounded-xl">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FF5117] rounded-full" />
        </div>
        <Link href="/">
          <Panot className="h-6 sm:h-8 w-auto" />
        </Link>
      </div>
      <nav className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm text-neutral-600 ml-2 sm:ml-8 whitespace-nowrap">
        <Link
          href="/changelog"
          className="hover:text-neutral-900 transition-colors"
        >
          {t("changelog")}
        </Link>
        <Link
          href="/privacy"
          className="hover:text-neutral-900 transition-colors"
        >
          {t("privacy")}
        </Link>
        <Link
          href="/terms"
          className="hover:text-neutral-900 transition-colors"
        >
          {t("terms")}
        </Link>
      </nav>
    </header>
  );
}
