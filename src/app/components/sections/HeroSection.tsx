"use client";

import { useTranslations } from "next-intl";
import IPhone from "../IPhone";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-16 pt-50 sm:px-8">
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-row gap-4 sm:gap-10 items-center mb-5 flex-wrap">
            <p className="text-4xl sm:text-5xl md:text-7xl font-mono">
              {t("title")}{" "}
            </p>{" "}
            <div className="bg-black w-20 sm:w-30 h-2 hidden sm:block" />{" "}
            <p className="text-4xl sm:text-5xl md:text-7xl font-mono">,</p>
          </div>
          <p className="text-xl sm:text-2xl md:text-4xl font-mono">
            {t("subtitle")}
          </p>

          <div className="flex justify-center items-center">
            <IPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
