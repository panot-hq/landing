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

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5 pl-4 border-l border-stone-300">
      <h3 className="text-xs font-mono font-medium text-neutral-700 uppercase tracking-wide">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
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
  variant?: "default" | "highlight";
}) {
  const styles = {
    default: "bg-stone-100 border-stone-200 text-neutral-600",
    highlight: "bg-stone-900 border-stone-900 text-stone-100",
  };

  return (
    <div className={`rounded-2xl border p-4 mt-3 ${styles[variant]}`}>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-neutral-900">
      <Screen>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-20 pt-8 sm:px-8 sm:pt-10">
          <Header />

          <article className="mt-10 sm:mt-16 flex flex-1 flex-col gap-10 pt-8 sm:pt-12">
            {/* Header */}
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
              <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                {t("intro")}
              </p>
            </header>

            <div className="space-y-10">
              <Section title={t("sections.collect.title")}>
                <Paragraph>{t("sections.collect.intro")}</Paragraph>

                <div className="space-y-4 mt-2">
                  <SubSection title={t("sections.collect.direct.title")}>
                    <ul className="list-none space-y-2">
                      <ListItem>
                        → {t("sections.collect.direct.account")}
                      </ListItem>
                      <ListItem>
                        → {t("sections.collect.direct.voice")}
                      </ListItem>
                      <ListItem>→ {t("sections.collect.direct.text")}</ListItem>
                      <ListItem>
                        → {t("sections.collect.direct.contacts")}
                      </ListItem>
                    </ul>
                  </SubSection>

                  <SubSection title={t("sections.collect.automatic.title")}>
                    <ul className="list-none space-y-2">
                      <ListItem>
                        → {t("sections.collect.automatic.usage")}
                      </ListItem>
                      <ListItem>
                        → {t("sections.collect.automatic.logs")}
                      </ListItem>
                      <ListItem>
                        → {t("sections.collect.automatic.push")}
                      </ListItem>
                    </ul>
                  </SubSection>
                </div>
              </Section>

              <Section title={t("sections.use.title")}>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.use.provide")}</ListItem>
                  <ListItem>→ {t("sections.use.ai")}</ListItem>
                  <ListItem>→ {t("sections.use.billing")}</ListItem>
                  <ListItem>→ {t("sections.use.communication")}</ListItem>
                </ul>
                <Callout variant="highlight">
                  {t("sections.use.aiNote")}
                </Callout>
              </Section>

              <Section title={t("sections.legal.title")}>
                <Paragraph>{t("sections.legal.intro")}</Paragraph>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.legal.contract")}</ListItem>
                  <ListItem>→ {t("sections.legal.consent")}</ListItem>
                  <ListItem>→ {t("sections.legal.legitimate")}</ListItem>
                </ul>
              </Section>

              <Section title={t("sections.share.title")}>
                <Paragraph>{t("sections.share.intro")}</Paragraph>
                <div className="grid gap-2 mt-2">
                  <div className="bg-stone-100 rounded-xl px-4 py-3 text-sm text-neutral-600">
                    <span className="font-mono text-xs text-neutral-900">
                      Supabase
                    </span>
                    <span className="mx-2 text-stone-300">—</span>
                    {t("sections.share.supabase").replace("Supabase: ", "")}
                  </div>
                  <div className="bg-stone-100 rounded-xl px-4 py-3 text-sm text-neutral-600">
                    <span className="font-mono text-xs text-neutral-900">
                      OpenAI
                    </span>
                    <span className="mx-2 text-stone-300">—</span>
                    {t("sections.share.openai").replace("OpenAI: ", "")}
                  </div>
                  <div className="bg-stone-100 rounded-xl px-4 py-3 text-sm text-neutral-600">
                    <span className="font-mono text-xs text-neutral-900">
                      Stripe
                    </span>
                    <span className="mx-2 text-stone-300">—</span>
                    {t("sections.share.stripe").replace("Stripe: ", "")}
                  </div>
                  <div className="bg-stone-100 rounded-xl px-4 py-3 text-sm text-neutral-600">
                    <span className="font-mono text-xs text-neutral-900">
                      PostHog
                    </span>
                    <span className="mx-2 text-stone-300">—</span>
                    {t("sections.share.posthog").replace("PostHog: ", "")}
                  </div>
                </div>
                <Paragraph>{t("sections.share.legal")}</Paragraph>
              </Section>

              <Section title={t("sections.security.title")}>
                <Paragraph>{t("sections.security.intro")}</Paragraph>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.security.encryption")}</ListItem>
                  <ListItem>→ {t("sections.security.localFirst")}</ListItem>
                  <ListItem>→ {t("sections.security.rls")}</ListItem>
                </ul>
              </Section>

              <Section title={t("sections.retention.title")}>
                <ul className="list-none space-y-2">
                  <ListItem>→ {t("sections.retention.account")}</ListItem>
                  <ListItem>→ {t("sections.retention.audio")}</ListItem>
                  <ListItem>→ {t("sections.retention.logs")}</ListItem>
                  <ListItem>→ {t("sections.retention.analytics")}</ListItem>
                  <ListItem>→ {t("sections.retention.deletion")}</ListItem>
                </ul>
              </Section>

              <Section title={t("sections.rights.title")}>
                <Paragraph>{t("sections.rights.intro")}</Paragraph>
                <div className="grid gap-2 mt-2">
                  {[
                    { key: "access", text: t("sections.rights.access") },
                    {
                      key: "rectification",
                      text: t("sections.rights.rectification"),
                    },
                    { key: "erasure", text: t("sections.rights.erasure") },
                    {
                      key: "portability",
                      text: t("sections.rights.portability"),
                    },
                    {
                      key: "restriction",
                      text: t("sections.rights.restriction"),
                    },
                    { key: "objection", text: t("sections.rights.objection") },
                  ].map((right) => {
                    const [label, description] = right.text.split(": ");
                    return (
                      <div
                        key={right.key}
                        className="bg-stone-100 rounded-xl px-4 py-3 text-sm text-neutral-600"
                      >
                        <span className="font-mono text-xs text-neutral-900">
                          {label}
                        </span>
                        <span className="mx-2 text-stone-300">—</span>
                        {description}
                      </div>
                    );
                  })}
                </div>
                <Callout>
                  {t("sections.rights.contact")}
                  <br />
                  <span className="text-neutral-400 text-xs mt-1 block">
                    {t("sections.rights.authority")}
                  </span>
                </Callout>
              </Section>

              <Section title={t("sections.transfers.title")}>
                <Paragraph>{t("sections.transfers.content")}</Paragraph>
              </Section>

              <Section title={t("sections.minors.title")}>
                <Paragraph>{t("sections.minors.content")}</Paragraph>
              </Section>

              <Section title={t("sections.changes.title")}>
                <Paragraph>{t("sections.changes.content")}</Paragraph>
              </Section>

              <Section title={t("sections.consent.title")}>
                <Paragraph>{t("sections.consent.content")}</Paragraph>
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
