import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "../../components/Header";
import Screen from "../../components/PageTransition";
import Timeline from "../../components/Timeline";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ChangelogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Screen>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-16 pt-8 sm:px-8 sm:pt-10">
          <Header />

          <section className="mt-8 flex flex-1 flex-col gap-6 pt-6 sm:mt-14 sm:gap-10 sm:pt-10">
            <Timeline />
          </section>
        </div>
      </Screen>
    </main>
  );
}
