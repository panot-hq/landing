"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Panot from "@/assets/panot.svg";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between py-3 px-4 sm:px-6 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/50 max-w-[calc(100%-2rem)]">
      <div className="flex flex-row gap-2 sm:gap-4 items-center mr-4 sm:mr-10">
        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-xl">
          <div className="w-6 h-6 bg-[#FF5117] rounded-full" />
        </div>
        <Link href="/">
          <Panot className="h-8 w-auto" />
        </Link>
      </div>
      <nav className="flex items-center gap-3 sm:gap-6 text-sm text-neutral-600 ml-4 sm:ml-8">
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
