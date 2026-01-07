"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Panot from "@/assets/panot.svg";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between py-3 px-6 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/50">
      <div className="flex flex-row gap-4 items-center mr-10">
        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-xl">
          <div className="w-5 h-5 bg-[#FF5117] rounded-full" />
        </div>
        <Link href="/">
          <Panot className="h-8 w-auto" />
        </Link>
      </div>
      <nav className="flex items-center gap-6 text-sm text-neutral-600 ml-8">
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
