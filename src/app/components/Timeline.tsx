"use client";

import { useTranslations, useLocale } from "next-intl";

type EntryType = "release" | "announcement" | "milestone" | "fix";

export default function Timeline() {
  const t = useTranslations("changelog");
  const locale = useLocale();

  const entriesRaw = t.raw("entries") as Record<
    string,
    {
      date: string;
      type: EntryType;
      title: string;
      description: string;
      changes?: string[];
    }
  >;

  const isValidDate = (dateString: string) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
  };

  const entries = Object.entries(entriesRaw)
    .map(([id, entry]) => ({ id, ...entry }))
    .sort((a, b) => {
      const aIsDate = isValidDate(a.date);
      const bIsDate = isValidDate(b.date);
      if (!aIsDate && bIsDate) return -1;
      if (aIsDate && !bIsDate) return 1;
      if (!aIsDate && !bIsDate) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const formatDate = (dateString: string) => {
    if (!isValidDate(dateString)) {
      return dateString;
    }
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="relative">
      <div className="absolute left-[7px] top-3 bottom-3 w-px bg-neutral-200 sm:left-[9px]" />

      <div className="space-y-10">
        {entries.map((entry, index) => {
          const isLatest = index === 0;

          return (
            <div key={entry.id} className="relative pl-8 sm:pl-10">
              <div className="absolute left-0 top-1.5">
                {isLatest ? (
                  <div className="relative flex items-center justify-center">
                    <span
                      className="absolute inline-flex h-4 w-4 animate-ping rounded-full opacity-50 sm:h-5 sm:w-5"
                      style={{ backgroundColor: "#FF5117" }}
                    />
                    <span
                      className="relative inline-flex h-4 w-4 rounded-full sm:h-5 sm:w-5"
                      style={{ backgroundColor: "#FF5117" }}
                    />
                  </div>
                ) : (
                  <span className="inline-flex h-4 w-4 rounded-full border-2 border-neutral-300 bg-white sm:h-5 sm:w-5" />
                )}
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs ${
                      isLatest
                        ? "text-white"
                        : "border border-neutral-200 bg-neutral-50 text-neutral-600"
                    }`}
                    style={
                      isLatest ? { backgroundColor: "#FF5117" } : undefined
                    }
                  >
                    {t(`types.${entry.type}`)}
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    {formatDate(entry.date)}
                  </span>
                </div>

                <h3 className="font-mono text-base font-medium text-neutral-900 sm:text-lg">
                  {entry.title}
                </h3>

                <p className="text-sm text-neutral-500">{entry.description}</p>

                {entry.changes && entry.changes.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {entry.changes.map((change, changeIndex) => (
                      <li
                        key={changeIndex}
                        className="flex items-start gap-2.5 text-sm text-neutral-600"
                      >
                        <span
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                          style={
                            isLatest
                              ? { backgroundColor: "#FF5117" }
                              : { backgroundColor: "#d4d4d4" }
                          }
                        />
                        {change}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
