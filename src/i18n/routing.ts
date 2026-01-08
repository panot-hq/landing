import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en-US", "es-ES"],
  defaultLocale: "en-US",
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];

