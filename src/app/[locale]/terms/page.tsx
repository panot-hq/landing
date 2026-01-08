"use client";

import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import Screen from "../../components/PageTransition";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-mono font-medium text-neutral-900 tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-neutral-600">{children}</div>
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-relaxed text-neutral-500">{children}</p>;
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-sm leading-relaxed text-neutral-500">{children}</li>
  );
}

function Callout({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "highlight" | "warning";
}) {
  const styles = {
    default: "bg-stone-100 border-stone-200 text-neutral-600",
    highlight: "bg-stone-900 border-stone-900 text-stone-100",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
  };

  return (
    <div className={`rounded-2xl border p-4 mt-3 ${styles[variant]}`}>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-neutral-900">
      <Screen>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-20 pt-8 sm:px-8 sm:pt-10">
          <Header />

          <article className="mt-10 sm:mt-16 flex flex-1 flex-col gap-10 pt-8 sm:pt-12">
            <header className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-mono font-medium text-neutral-900 tracking-tight">
                  {t("title")}
                </h1>
                <p className="text-xs font-mono text-neutral-400 tracking-wide">
                  {t("lastUpdated")}
                </p>
              </div>
              <div className="h-px bg-stone-300 w-16" />
            </header>

            <div className="space-y-10">
              <Section title={t("sections.intro.title")}>
                <Paragraph>{t("sections.intro.welcome")}</Paragraph>
                <Paragraph>{t("sections.intro.acceptance")}</Paragraph>
              </Section>

              <Section title={t("sections.service.title")}>
                <Paragraph>{t("sections.service.description")}</Paragraph>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.service.ai")}</ListItem>
                </ul>
                <Callout variant="highlight">
                  {t("sections.service.noWarranty")}
                </Callout>
              </Section>

              <Section title={t("sections.accounts.title")}>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.accounts.registration")}</ListItem>
                  <ListItem>→ {t("sections.accounts.responsibility")}</ListItem>
                  <ListItem>→ {t("sections.accounts.age")}</ListItem>
                </ul>
              </Section>

              <Section title={t("sections.license.title")}>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.license.yourContent")}</ListItem>
                  <ListItem>→ {t("sections.license.ourProperty")}</ListItem>
                </ul>
              </Section>

              <Section title={t("sections.payments.title")}>
                <Paragraph>{t("sections.payments.intro")}</Paragraph>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.payments.processing")}</ListItem>
                  <ListItem>→ {t("sections.payments.renewal")}</ListItem>
                  <ListItem>→ {t("sections.payments.cancellation")}</ListItem>
                  <ListItem>→ {t("sections.payments.withdrawal")}</ListItem>
                </ul>
              </Section>

              <Section title={t("sections.conduct.title")}>
                <Paragraph>{t("sections.conduct.intro")}</Paragraph>
                <div className="grid gap-2 mt-2">
                  <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm text-red-700">
                    ✕ {t("sections.conduct.recording")}
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm text-red-700">
                    ✕ {t("sections.conduct.illegal")}
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm text-red-700">
                    ✕ {t("sections.conduct.reverseEngineering")}
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm text-red-700">
                    ✕ {t("sections.conduct.training")}
                  </div>
                </div>
              </Section>

              <Section title={t("sections.disclaimer.title")}>
                <Paragraph>{t("sections.disclaimer.asIs")}</Paragraph>
                <Callout>{t("sections.disclaimer.liability")}</Callout>
              </Section>

              <Section title={t("sections.modifications.title")}>
                <Paragraph>{t("sections.modifications.content")}</Paragraph>
              </Section>

              <Section title={t("sections.law.title")}>
                <Paragraph>{t("sections.law.content")}</Paragraph>
              </Section>

              <Section title={t("sections.apple.title")}>
                <Paragraph>{t("sections.apple.intro")}</Paragraph>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.apple.terms")}</ListItem>
                  <ListItem>→ {t("sections.apple.maintenance")}</ListItem>
                  <ListItem>→ {t("sections.apple.refund")}</ListItem>
                  <ListItem>→ {t("sections.apple.beneficiary")}</ListItem>
                </ul>
              </Section>

              <Section title={t("sections.consent.title")}>
                <Callout variant="highlight">
                  {t("sections.consent.content")}
                </Callout>
              </Section>
            </div>

            <div className="flex items-center gap-3 pt-8 border-t border-stone-200">
              <div className="bg-black w-8 h-1" />
              <span className="text-xs font-mono text-neutral-400">PANOT</span>
            </div>
          </article>
        </div>
      </Screen>
    </main>
  );
}
