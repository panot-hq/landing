"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import IPhone from "../IPhone";

const APP_STORE_URL = "https://apps.apple.com/es/app/panot/id6757428877";

const BADGE_LOCALE: Record<string, string> = {
  en: "en-us",
  es: "es-es",
};

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const badgeLocale = BADGE_LOCALE[locale] ?? "en-us";
  const badgeSrc = `https://tools.applemediaservices.com/api/assets/featured-content/apps/badges/badge-1/${badgeLocale}.svg`;

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

          <div className="flex flex-col justify-center items-center gap-6 mt-10">
            <div className="flex flex-row justify-center items-center gap-6">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80 focus:opacity-80"
                aria-label={t("appStoreBadge")}
              >
                <Image
                  src={badgeSrc}
                  alt=""
                  className="h-12 sm:h-14 md:h-16 w-auto"
                  width={160}
                  height={64}
                  unoptimized
                />
              </a>
              <a
                href="https://www.producthunt.com/products/panot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-panot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Panot - Your external memory for relationships | Product Hunt"
                  width={250}
                  height={54}
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1067084&theme=light&t=1769172631871"
                />
              </a>
            </div>
            <IPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
