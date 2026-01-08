"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-neutral-500 text-sm">{t("rights")}</p>
            <div className="bg-black w-8 h-1" />
            <p className="text-neutral-500 text-sm">{t("allRightsReserved")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
