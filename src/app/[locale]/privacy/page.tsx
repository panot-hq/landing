"use client";

import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import Screen from "../../components/PageTransition";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Screen>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-16 pt-8 sm:px-8 sm:pt-10">
          <Header />

          <section className="mt-8 sm:mt-14 flex flex-1 flex-col gap-6 sm:gap-10 pt-6 sm:pt-10 text-sm">
            <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              {t("title")}
            </h1>
            <div className="space-y-4 text-neutral-500">
              <p className="max-w-xl">{t("description")}</p>
            </div>
          </section>
        </div>
      </Screen>
    </main>
  );
}

