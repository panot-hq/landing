"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-12 border-t border-neutral-200 bg-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col ">
            <p className="text-neutral-500 text-sm">{t("rights")}</p>
            <p className="text-neutral-500 text-sm">{t("allRightsReserved")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
